import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw } from "lucide-react";

const MIP_API = "https://mip-service-production.up.railway.app";
const REFRESH_INTERVAL = 60_000;

interface FunnelMarket {
  market_id: string;
  display_name: string;
  status: string;
  current_stage: string | null;
  progress_pct: number;
  discovered: number;
  deduped: number;
  with_website: number;
  with_menu: number;
  with_drinks: number;
  brands_extracted: number;
  cost: number;
  budget: number;
  delta_venues_1h: number;
  delta_menus_1h: number;
  run_id: string | null;
}

interface FunnelResponse {
  markets: FunnelMarket[];
  updated_at: string;
}

function statusVariant(status: string) {
  switch (status) {
    case "discovering":
    case "deduplicating":
    case "enriching_websites":
    case "checking_websites":
    case "finding_menus":
    case "detecting_chains":
    case "capturing":
    case "extracting":
    case "running":
      return "bg-[#00B98E]/20 text-[#00B98E]";
    case "completed":
      return "bg-[#3273DB]/20 text-[#3273DB]";
    case "queued":
      return "bg-[#85E4FD]/20 text-[#85E4FD]";
    case "failed":
    case "cancelled":
    case "budget_exhausted":
      return "bg-destructive/20 text-destructive";
    default:
      return "bg-muted text-muted-foreground";
  }
}

function coverageBg(pct: number): string {
  if (pct >= 80) return "bg-[#00B98E]/10";
  if (pct >= 50) return "bg-[#3273DB]/10";
  if (pct >= 20) return "bg-[#85E4FD]/8";
  if (pct > 0) return "bg-destructive/8";
  return "";
}

function Delta({ value }: { value: number }) {
  if (!value) return <span className="text-muted-foreground/30">—</span>;
  return <span className="text-[#00B98E] text-[11px] font-medium">+{value.toLocaleString()}</span>;
}

function CoverageCell({ num, denom }: { num: number; denom: number }) {
  const pct = denom > 0 ? (num / denom) * 100 : 0;
  return (
    <td className={`px-3 py-2.5 text-right tabular-nums text-sm ${coverageBg(pct)}`}>
      <div className="text-foreground">{num.toLocaleString()}</div>
      {denom > 0 && (
        <div className="text-[10px] text-muted-foreground">{pct.toFixed(0)}%</div>
      )}
    </td>
  );
}

export function MarketFunnel() {
  const [data, setData] = useState<FunnelResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${MIP_API}/api/admin/funnel`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: FunnelResponse = await res.json();
      setData(json);
      setError(null);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    timerRef.current = setInterval(load, REFRESH_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [load]);

  const markets = data?.markets ?? [];
  const totals = markets.reduce(
    (acc, m) => ({
      discovered: acc.discovered + m.discovered,
      deduped: acc.deduped + m.deduped,
      with_website: acc.with_website + m.with_website,
      with_menu: acc.with_menu + m.with_menu,
      dv: acc.dv + m.delta_venues_1h,
      dm: acc.dm + m.delta_menus_1h,
      cost: acc.cost + m.cost,
    }),
    { discovered: 0, deduped: 0, with_website: 0, with_menu: 0, dv: 0, dm: 0, cost: 0 },
  );

  if (loading && !data) {
    return (
      <Card className="p-8 shadow-soft border-border/50 flex items-center justify-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
        <span className="font-sans text-sm text-muted-foreground">Loading funnel data...</span>
      </Card>
    );
  }

  if (error && !data) {
    return (
      <Card className="p-8 shadow-soft border-border/50 text-center">
        <span className="font-sans text-sm text-destructive">{error}</span>
      </Card>
    );
  }

  return (
    <Card className="shadow-soft border-border/50 overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-border/50">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-foreground font-serif">
            MH Priority Markets
          </h2>
          <span className="font-sans text-xs text-muted-foreground">
            {markets.length} markets
          </span>
        </div>
        <div className="flex items-center gap-3">
          {error && (
            <span className="font-sans text-[10px] text-destructive">refresh failed</span>
          )}
          {data?.updated_at && (
            <span className="font-sans text-[10px] text-muted-foreground">
              {new Date(data.updated_at).toLocaleTimeString()}
            </span>
          )}
          <button
            onClick={load}
            className="inline-flex items-center gap-1.5 font-sans text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-border/50 hover:border-primary/40"
          >
            <RefreshCw className="w-3 h-3" />
            Refresh
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full font-sans text-sm">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="text-left px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Market
              </th>
              <th className="text-center px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </th>
              <th className="text-right px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Discovered
              </th>
              <th className="text-right px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Deduped
              </th>
              <th className="text-right px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Website
              </th>
              <th className="text-right px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Menu
              </th>
              <th className="text-center px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <span title="New venues in last 60 min">&Delta; Venues</span>
              </th>
              <th className="text-center px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <span title="New menus in last 60 min">&Delta; Menus</span>
              </th>
              <th className="text-right px-3 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {markets.map((m) => (
              <tr
                key={m.market_id}
                className="border-b border-border/30 hover:bg-muted/20 transition-colors"
              >
                <td className="px-3 py-2.5 text-foreground font-medium whitespace-nowrap">
                  {m.display_name}
                </td>
                <td className="px-3 py-2.5 text-center">
                  <Badge
                    variant="secondary"
                    className={`text-[9px] px-1.5 py-0 uppercase tracking-wider ${statusVariant(m.status)}`}
                  >
                    {m.status === "no_run" ? "—" : m.status.replace(/_/g, " ")}
                  </Badge>
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums text-foreground">
                  {m.discovered.toLocaleString()}
                </td>
                <CoverageCell num={m.deduped} denom={m.discovered} />
                <CoverageCell num={m.with_website} denom={m.deduped || m.discovered} />
                <CoverageCell num={m.with_menu} denom={m.with_website || 1} />
                <td className="px-3 py-2.5 text-center">
                  <Delta value={m.delta_venues_1h} />
                </td>
                <td className="px-3 py-2.5 text-center">
                  <Delta value={m.delta_menus_1h} />
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground">
                  ${m.cost.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-border/50 bg-muted/20 font-semibold">
              <td className="px-3 py-2.5 text-primary">
                Total ({markets.length})
              </td>
              <td />
              <td className="px-3 py-2.5 text-right tabular-nums text-foreground">
                {totals.discovered.toLocaleString()}
              </td>
              <td className="px-3 py-2.5 text-right tabular-nums text-foreground">
                {totals.deduped.toLocaleString()}
              </td>
              <td className="px-3 py-2.5 text-right tabular-nums text-foreground">
                {totals.with_website.toLocaleString()}
              </td>
              <td className="px-3 py-2.5 text-right tabular-nums text-foreground">
                {totals.with_menu.toLocaleString()}
              </td>
              <td className="px-3 py-2.5 text-center">
                <Delta value={totals.dv} />
              </td>
              <td className="px-3 py-2.5 text-center">
                <Delta value={totals.dm} />
              </td>
              <td className="px-3 py-2.5 text-right tabular-nums text-muted-foreground">
                ${totals.cost.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-border/30">
        <span className="font-sans text-[10px] text-muted-foreground/50">
          Auto-refresh every 60s
        </span>
      </div>
    </Card>
  );
}
