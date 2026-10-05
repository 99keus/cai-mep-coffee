// Owner-supplied specifications. Preserve asterisks: these values remain industry references.
export interface SpecificationRow { label: string; value: string }
export interface SpecificationProfile {
  status: "reference" | "confirmed" | "company-provided";
  basis: "matched" | "supplier" | "analogue" | "standard-reference" | "company-document";
  reviewedAt: string;
  technical: SpecificationRow[];
  sources: { name: string; url: string }[];
  note: string;
}
export const productSpecifications: Record<string, SpecificationProfile> = {
  "robusta-g1-s18-clean": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.5%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 18"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "robusta-g1-s16-clean": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.5%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 16"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "robusta-g1-s18-wet-polished": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%"
      },
      {
        "label": "Black & Broken",
        "value": "0.1% – 0.3%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 18"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "robusta-g1-s16-wet-polished": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%"
      },
      {
        "label": "Black & Broken",
        "value": "0.1% – 0.3%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 16"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "robusta-g2-s13-14": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 13%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 1.0%"
      },
      {
        "label": "Black & Broken",
        "value": "2.0% – 5.0%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 13"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "robusta-peaberry": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.2%*"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.5%*"
      },
      {
        "label": "Bean form",
        "value": "Round (single bean), naturally occurring ~5–8% of crop*"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "fine-robusta-natural": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%*"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.3%*"
      },
      {
        "label": "Processing",
        "value": "Natural (dried with the cherry skin)"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags, or GrainPro liner on request"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "fine-robusta-honey": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%*"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.3%*"
      },
      {
        "label": "Processing",
        "value": "Honey (partial mucilage retained during drying)"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags, or GrainPro liner on request"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "arabica-g1-s18-washed": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.5%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 18"
      },
      {
        "label": "Processing",
        "value": "Fully washed"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "arabica-g1-s16-washed": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.5%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 16"
      },
      {
        "label": "Processing",
        "value": "Fully washed"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "arabica-g1-s18-natural": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.2%"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 1.0%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 18"
      },
      {
        "label": "Processing",
        "value": "Natural (dry process)"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "arabica-g2-s13-14": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 13%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 1.0%"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 2.0%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 13"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "arabica-catimor-washed": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.1%"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.5%"
      },
      {
        "label": "Variety",
        "value": "Catimor"
      },
      {
        "label": "Processing",
        "value": "Fully washed"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "arabica-moka": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%*"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.2%*"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 1.0%*"
      },
      {
        "label": "Variety",
        "value": "Moka (heirloom, low yield)"
      },
      {
        "label": "Processing",
        "value": "Fully washed"
      },
      {
        "label": "Availability",
        "value": "Limited volume, seasonal*"
      },
      {
        "label": "Packing",
        "value": "30kg or 60kg bags, GrainPro liner recommended"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "excelsa-g1-s16-clean": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 13%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.2%*"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 1.0%*"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 16"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "roasted-robusta": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 5%*"
      },
      {
        "label": "Form",
        "value": "Whole bean"
      },
      {
        "label": "Roast level",
        "value": "Light / Medium / Dark — customizable"
      },
      {
        "label": "Packing",
        "value": "Valve-sealed bags, custom weight"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "roasted-arabica": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 5%*"
      },
      {
        "label": "Form",
        "value": "Whole bean"
      },
      {
        "label": "Roast level",
        "value": "Light / Medium / Dark — customizable"
      },
      {
        "label": "Packing",
        "value": "Valve-sealed bags, custom weight"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "roasted-excelsa": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 5%*"
      },
      {
        "label": "Form",
        "value": "Whole bean"
      },
      {
        "label": "Roast level",
        "value": "Medium — recommended to preserve varietal character"
      },
      {
        "label": "Packing",
        "value": "Valve-sealed bags, custom weight"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "roasted-coffee-blend": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 5%*"
      },
      {
        "label": "Form",
        "value": "Whole bean"
      },
      {
        "label": "Blend ratio",
        "value": "Custom, per buyer specification"
      },
      {
        "label": "Packing",
        "value": "Valve-sealed bags, custom weight"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "ground-robusta": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 5%*"
      },
      {
        "label": "Grind size",
        "value": "Fine (espresso) / Medium (filter) / Coarse (French press) — per order"
      },
      {
        "label": "Packing",
        "value": "Airtight, moisture-barrier bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "ground-arabica": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 5%*"
      },
      {
        "label": "Grind size",
        "value": "Fine (espresso) / Medium (filter) / Coarse (French press) — per order"
      },
      {
        "label": "Packing",
        "value": "Airtight, moisture-barrier bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  },
  "ground-coffee-blend": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-03",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 5%*"
      },
      {
        "label": "Grind size",
        "value": "Fine (espresso) / Medium (filter) / Coarse (French press) — per order"
      },
      {
        "label": "Blend ratio",
        "value": "Custom, per buyer specification"
      },
      {
        "label": "Packing",
        "value": "Airtight, moisture-barrier bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Content.docx supplied by Cai Mep Coffee. Asterisked values are industry reference levels, not verified lot measurements."
  }
};
