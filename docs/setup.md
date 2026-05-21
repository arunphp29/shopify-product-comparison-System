# Shopify Product Comparison Engine — Setup Guide

This guide explains:
- which files to create
- where to place them
- what code to add
- how to connect everything

Compatible with:
- Dawn theme
- Shopify OS 2.0 themes

---

## 📂 FINAL FILE STRUCTURE

Create these files inside your Shopify theme:

theme/
├── assets/
│   ├── compare.js
│   └── compare.css
│
├── snippets/
│   └── compare-button.liquid
│
├── sections/
│   └── compare-table.liquid
│
├── templates/
│   └── page.compare.json
│
└── layout/
    └── theme.liquid

---

## 🚀 STEP 1 — Create Product Metafields

Go to:

Shopify Admin
→ Settings
→ Custom Data
→ Products

Create these metafields:

| Name | Namespace/Key | Type |
|---|---|---|
| Material | custom.material | Single line text |
| Weight | custom.weight | Single line text |
| Dimensions | custom.dimensions | Single line text |
| Warranty | custom.warranty | Single line text |

These metafields will appear in the comparison table.

---

## 🚀 STEP 2 — Create Compare Button Snippet

### Create File

Path:

theme/snippets/compare-button.liquid

### Add Code

<button
  class="compare-btn"
  data-product-handle="{{ product.handle }}"
>
  Compare
</button>
---

## 🚀 STEP 3 — Add Compare Button to Product Cards

Open:

theme/snippets/card-product.liquid

Add this code inside product card:

{% render 'compare-button', product: card_product %}

This shows compare button on collection pages.

---

## 🚀 STEP 4 — Add Compare Button to Product Page

Open:

theme/sections/main-product.liquid

Add:

{% render 'compare-button', product: product %}

This shows compare button on product page.

---

## 🚀 STEP 5 — Create Compare CSS
Create File

Path:

theme/assets/compare.css

Add Code from file


This styles:

sticky compare bar
compare chips
compare layout
---

## 🚀 STEP 6 — Create Compare JavaScript Engine
Create File

Path:

theme/assets/compare.js

Add Code

This handles:

compare logic
storage
sticky bar rendering
add/remove compare products

---

## 🚀 STEP 7 — Add Sticky Compare Bar to Theme

Open:

theme/layout/theme.liquid

Add this BEFORE:

</body>

Add:

<div id="compare-bar" class="compare-bar hidden">
  <div class="compare-content">

    <div id="compare-items"></div>

    <a href="/pages/compare">
      Compare Products
    </a>

  </div>
</div>

{{ 'compare.css' | asset_url | stylesheet_tag }}
{{ 'compare.js' | asset_url | script_tag }}

This loads:

compare CSS
compare JS
sticky compare bar
---

## 🚀 STEP 8 — Create Compare Page Template
Create File

Path:

theme/templates/page.compare.json

Add Code
{
  "sections": {
    "main": {
      "type": "compare-table"
    }
  },
  "order": ["main"]
}

This creates compare page structure.

---

## 🚀 STEP 9 — Create Compare Table Section
Create File

Path:

theme/sections/compare-table.liquid

Add Code

Add full compare table code here.

This file:

renders compare table
loads metafields
creates product comparison rows
---

## 🚀 STEP 10 — Create Compare Page in Shopify

Go to:

Shopify Admin
→ Online Store
→ Pages

Create page:

Title:
Compare

Handle:
compare

Template:
page.compare

---

## 🚀 STEP 11 — Add Product Metafield Values

Open products inside Shopify admin.

Add values for:

Material
Weight
Dimensions
Warranty

These values appear in comparison table.
