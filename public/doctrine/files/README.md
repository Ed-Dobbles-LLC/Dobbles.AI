# Beverage Commerce Data Model

This package contains four engineering-ready artifacts:

1. `beverage_commerce_schema.sql`
   Relational database schema for canonical products, variants, packages, listings,
   observations, offers, promotions, and model predictions.

2. `beverage_retail_extraction.schema.json`
   JSON Schema for model extraction output from retail pages.

3. `beverage_commerce_ontology.json`
   Canonical ontology definition with node types, controlled vocabularies, and relationships.

4. `training_label_taxonomy.json`
   Training label taxonomy for document routing, extraction, normalization,
   promotion classification, and review flows.

## Recommended implementation order

1. Stand up the SQL schema
2. Emit extraction payloads against the JSON schema
3. Load the ontology vocabularies into reference tables
4. Use the training taxonomy to label examples and fine-tune classifiers

## Design note

The model separates:
- Product identity, what the item is
- Offer state, what the retailer is selling now
- Promotion mechanics, how the commercial rule works
- Packaging structure, how the physical bundle is composed

That separation will save you from most downstream ambiguity.
