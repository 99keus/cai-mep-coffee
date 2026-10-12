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
    "reviewedAt": "2026-10-12",
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
      },
      {
        "label": "Processing",
        "value": "Dry Processed"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "robusta-g1-s16-clean": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
      },
      {
        "label": "Processing",
        "value": "Dry Processed"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "robusta-g1-s18-wet-polished": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
        "value": "≤ 0.3%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 18"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      },
      {
        "label": "Processing",
        "value": "Wet Polished"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "robusta-g1-s16-wet-polished": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
        "value": "≤ 0.3%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 16"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      },
      {
        "label": "Processing",
        "value": "Wet Polished"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "robusta-g2-s13-14": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
      },
      {
        "label": "Processing",
        "value": "Dry Processed"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "robusta-peaberry": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.5%"
      },
      {
        "label": "Black & Broken",
        "value": "≤ 0.5%"
      },
      {
        "label": "Bean form",
        "value": "Round (single bean), naturally occurring ~5–8% of crop*"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      },
      {
        "label": "Processing",
        "value": "Dry Processed"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "fine-robusta-natural": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12%"
      },
      {
        "label": "Defects",
        "value": "5 (CQI)"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 15/13"
      },
      {
        "label": "Processing",
        "value": "Natural Processed"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags, or GrainPro liner on request"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "fine-robusta-honey": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12%"
      },
      {
        "label": "Defects",
        "value": "5 (CQI)"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 15/13"
      },
      {
        "label": "Processing",
        "value": "Honey Processed (partial mucilage retained during drying)"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags, or GrainPro liner on request"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "arabica-g1-s18-washed": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "arabica-g1-s16-washed": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "arabica-g2-s13-14": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
        "value": "≤ 1.0%"
      },
      {
        "label": "Screen size",
        "value": "≥ 90% on Screen 13"
      },
      {
        "label": "Processing",
        "value": "Washed"
      },
      {
        "label": "Packing",
        "value": "60kg jute bags"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "arabica-catimor-washed": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "arabica-moka": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
        "value": "≤ 0.1%"
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "excelsa-g1-s16-clean": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
    "technical": [
      {
        "label": "Moisture",
        "value": "≤ 12.5%"
      },
      {
        "label": "Foreign matter",
        "value": "≤ 0.5%"
      },
      {
        "label": "Defective beans",
        "value": "≤ 2.0"
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "roasted-robusta": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
    "technical": [
      {
        "label": "Ripeness ratio",
        "value": "85-87%"
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
        "label": "Processing",
        "value": "Natural / Honey"
      },
      {
        "label": "Packing",
        "value": "Valve-sealed bags, custom weight"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "roasted-arabica": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
    "technical": [
      {
        "label": "Ripeness ratio",
        "value": "99%"
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
        "label": "Processing",
        "value": "Washed"
      },
      {
        "label": "Packing",
        "value": "Valve-sealed bags, custom weight"
      }
    ],
    "sources": [],
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "roasted-excelsa": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
    "technical": [
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "ground-robusta": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "ground-arabica": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  },
  "ground-coffee-blend": {
    "status": "company-provided",
    "basis": "company-document",
    "reviewedAt": "2026-10-12",
    "technical": [
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
    "note": "Coffee_Product_Catalog_Spec.docx supplied by Cai Mep Coffee. Asterisked values are industry references, not verified lot measurements."
  }
};
