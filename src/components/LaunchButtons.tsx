import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  MessageCircle,
  Video,
  FileSpreadsheet,
  HardDrive,
  FileText,
  Presentation,
  Code2,
  Workflow,
  Bot,
  MessageSquare,
  Briefcase,
  Calendar,
  Brain,
  Sparkles,
  Hand,
  Play,
  Cloud,
  Layers,
  Factory,
  Linkedin,
  DollarSign,
  BarChart3,
} from "lucide-react";

type Tier = "primary" | "secondary";
type Family = "google" | "ai-tech" | "work" | "custom";

interface LaunchButton {
  name: string;
  url: string;
  icon: React.ReactNode;
  tier: Tier;
  family?: Family;
}

const launchButtons: LaunchButton[] = [
  // Zone A — Primary
  { name: "Gmail",            url: "https://mail.google.com/a/dobbles.ai",                                                                                                                                                                                                                                                                                                                                                                          icon: <Mail size={20} />,           tier: "primary" },
  { name: "Google Calendar",  url: "https://calendar.google.com/a/dobbles.ai",                                                                                                                                                                                                                                                                                                                                                                      icon: <Calendar size={20} />,       tier: "primary" },
  { name: "Google Drive",     url: "https://drive.google.com/a/dobbles.ai",                                                                                                                                                                                                                                                                                                                                                                         icon: <HardDrive size={20} />,      tier: "primary" },
  { name: "Claude",           url: "https://claude.ai",                                                                                                                                                                                                                                                                                                                                                                                             icon: <Bot size={20} />,            tier: "primary" },
  { name: "ChatGPT",          url: "https://chat.openai.com",                                                                                                                                                                                                                                                                                                                                                                                       icon: <MessageSquare size={20} />,  tier: "primary" },
  { name: "LinkedIn",         url: "https://www.linkedin.com/in/ed-dobbles/",                                                                                                                                                                                                                                                                                                                                                                       icon: <Linkedin size={20} />,       tier: "primary" },

  // Zone B Family 1 — Google Workspace
  { name: "Google Chat",          url: "https://chat.google.com/u/?authuser=ed@dobbles.ai",                                                                                                                                                                                                                                                                                                                                                          icon: <MessageCircle size={20} />,    tier: "secondary", family: "google" },
  { name: "Google Meet",          url: "https://meet.google.com/u/?authuser=ed@dobbles.ai",                                                                                                                                                                                                                                                                                                                                                          icon: <Video size={20} />,            tier: "secondary", family: "google" },
  { name: "Google Docs",          url: "https://docs.google.com/document/u/?authuser=ed@dobbles.ai",                                                                                                                                                                                                                                                                                                                                                  icon: <FileText size={20} />,         tier: "secondary", family: "google" },
  { name: "Google Sheets",        url: "https://docs.google.com/spreadsheets/u/?authuser=ed@dobbles.ai",                                                                                                                                                                                                                                                                                                                                              icon: <FileSpreadsheet size={20} />,  tier: "secondary", family: "google" },
  { name: "Google Slides",        url: "https://docs.google.com/presentation/u/?authuser=ed@dobbles.ai",                                                                                                                                                                                                                                                                                                                                              icon: <Presentation size={20} />,     tier: "secondary", family: "google" },
  { name: "Google Cloud Console", url: "https://console.cloud.google.com/welcome/new?_gl=1*1qa0vav*_up*MQ..&gclid=Cj0KCQiAnJHMBhDAARIsABr7b86Kz6LeS_urkTlGDxsY1xenpLJgdgWf9NIK4hy7Em9vQ1RBeWTgh9gaAoq0EALw_wcB&gclsrc=aw.ds&rapt=AEjHL4OqASXmfrkx42UUzxcFTeoSEbXL9CMHTM2gEU9gkb8bPBGqA44Xr5iAufHHcBeWYu9uO5qAQY4cJt4mdVgqaLerrSuKST1PchOUR31CgeV8tvRH_Ww&project=gen-lang-client-0993049784",                                                          icon: <Cloud size={20} />,            tier: "secondary", family: "google" },

  // Zone B Family 2 — AI / Tech / Build
  { name: "Google Gemini", url: "https://gemini.google.com",         icon: <Sparkles size={20} />, tier: "secondary", family: "ai-tech" },
  { name: "Lovable",       url: "https://lovable.dev",               icon: <Code2 size={20} />,    tier: "secondary", family: "ai-tech" },
  { name: "n8n",           url: "https://n8n.io",                    icon: <Workflow size={20} />, tier: "secondary", family: "ai-tech" },
  { name: "Factory",       url: "https://app.factory.ai/sessions",   icon: <Factory size={20} />, tier: "secondary", family: "ai-tech" },
  { name: "Gamma",         url: "https://gamma.app/create",          icon: <Layers size={20} />,   tier: "secondary", family: "ai-tech" },

  // Zone B Family 3 — Work / Business
  { name: "Upwork",          url: "https://upwork.com",            icon: <Briefcase size={20} />, tier: "secondary", family: "work" },
  { name: "Overproof Agent", url: "https://overproof-agent.ai",    icon: <Hand size={20} />,      tier: "secondary", family: "work" },
  { name: "HeyGen",          url: "https://app.heygen.com/home",   icon: <Play size={20} />,      tier: "secondary", family: "work" },

  // Zone B Family 4 — Custom Dobbles tools
  { name: "AnswerRocket", url: "https://overproof.prod.answerrocket.com",          icon: <Brain size={20} />,      tier: "secondary", family: "custom" },
  { name: "Cost Tracker", url: "https://web-production-ed8e5.up.railway.app",      icon: <DollarSign size={20} />, tier: "secondary", family: "custom" },
  { name: "AR Intel",     url: "https://ar-intelligence-dashboard-production.up.railway.app", icon: <BarChart3 size={20} />, tier: "secondary", family: "custom" },
];

const baseClasses =
  "min-h-[80px] h-auto p-3 flex flex-col items-center justify-center gap-2 border-0 rounded-md transition-all duration-200 hover:scale-[1.02] [&_svg]:size-5";

const primaryClasses =
  "bg-[#DB5461] hover:bg-[#E26873] text-[#F7FBFE]";

const familyClasses: Record<Family, { button: string; icon: string }> = {
  google: {
    button: "bg-[#225A8E] hover:bg-[#2A6BA8] text-[#F7FBFE]",
    icon: "text-[#85E4FD]",
  },
  "ai-tech": {
    button:
      "bg-[#1D1D1D] text-[#F7FBFE] border border-[rgba(133,228,253,0.35)] hover:bg-[#252525] hover:border-[rgba(133,228,253,0.8)]",
    icon: "text-[#85E4FD]",
  },
  work: {
    button:
      "bg-[#1D1D1D] text-[#F7FBFE] border border-[rgba(0,185,142,0.35)] hover:bg-[#252525] hover:border-[rgba(0,185,142,0.8)]",
    icon: "text-[#00B98E]",
  },
  custom: {
    button:
      "bg-[#1D1D1D] text-[#F7FBFE] border border-[rgba(219,84,97,0.35)] hover:bg-[#252525] hover:border-[rgba(219,84,97,0.8)]",
    icon: "text-[#DB5461]",
  },
};

const labelClasses =
  "text-xs font-semibold leading-tight text-center whitespace-normal break-words";

const renderButton = (button: LaunchButton) => {
  const tone =
    button.tier === "primary"
      ? { button: primaryClasses, icon: "" }
      : familyClasses[button.family ?? "google"];

  return (
    <Button
      key={button.name}
      data-tier={button.tier}
      data-family={button.family ?? ""}
      variant="default"
      className={`${baseClasses} ${tone.button}`}
      onClick={() => window.open(button.url, "_blank")}
    >
      <span className={tone.icon}>{button.icon}</span>
      <span className={labelClasses}>{button.name}</span>
    </Button>
  );
};

export const LaunchButtons = () => {
  const primary = launchButtons.filter((b) => b.tier === "primary");
  const secondary = launchButtons.filter((b) => b.tier === "secondary");

  return (
    <Card className="p-6 shadow-soft border-border/50">
      <h2 className="text-2xl font-semibold mb-6 text-foreground">Quick Launch</h2>

      <div className="grid grid-cols-6 gap-3 mb-4">
        {primary.map(renderButton)}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {secondary.map(renderButton)}
      </div>
    </Card>
  );
};
