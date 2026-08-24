# Shiv Shiv Sparkline — Exact Image & Media Asset Inventory

**Document Version:** 1.0.0  
**Inspection Date:** August 2026  
**Scope:** Complete Codebase Asset Audit (HTML, CSS, JS, Filesystem)

---

## 1. Master Image & Media Asset Table

| # | Filename | Exact Folder | Page | Section | What Image Should Show | Status | Recommended Dimensions/Ratio | Required/Optional |
| :-: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: |
| **01** | `hero-video.mp4` | `assets/videos/` | `index.html` | Homepage Hero (`#home-hero`) | Cinematic industrial high-voltage transmission, grid substation, and power infrastructure footage. | **Already Present** | 1920×1080 (16:9) | **Required (Mandatory)** |
| **02** | `company-building.webp` | `assets/images/about/` | `about.html` | Section 01: Profile (`#company-profile`) | Modern corporate headquarters, engineering facility, or industrial sourcing/distribution logistics center. | **Missing** | 1200×900 / 800×600 (4:3) | **Required** |
| **03** | `founder.webp` | `assets/images/founder/` | `about.html` | Section 02: Leadership (`#founder`) | Professional corporate executive portrait of the Founder & Managing Director in formal attire. | **Missing** | 900×1200 / 600×800 (3:4) | **Required** |
| **04** | `electrical.webp` | `assets/images/services/` | `about.html` | Section 04: Core Services (`#core-services`) | High-voltage power cables, cable spools, conductors, and electrical trading distribution inventory. | **Missing** | 800×600 / 600×450 (4:3) | **Required** |
| **05** | `solar.webp` | `assets/images/services/` | `about.html` | Section 04: Core Services (`#core-services`) | Commercial/industrial rooftop or ground-mount solar PV array installations and solar components. | **Missing** | 800×600 / 600×450 (4:3) | **Required** |
| **06** | `epc.webp` | `assets/images/services/` | `about.html` | Section 04: Core Services (`#core-services`) | Active electrical EPC construction site, substation engineering coordination, or on-site project logistics. | **Missing** | 800×600 / 600×450 (4:3) | **Required** |
| **07** | `procurement.webp` | `assets/images/services/` | `about.html` | Section 04: Core Services (`#core-services`) | Industrial supply chain warehouse, organized switchgear/hardware inventory, and freight dispatch staging. | **Missing** | 800×600 / 600×450 (4:3) | **Required** |
| **08** | `gst-preview.webp` | `assets/images/certificates/` | `about.html` | Section 06: Compliance (`#certifications`) | Official GST registration certificate preview document / compliance card. | **Missing** | 800×1100 / 600×800 (A4 / 3:4) | **Required** |
| **09** | `msme-preview.webp` | `assets/images/certificates/` | `about.html` | Section 06: Compliance (`#certifications`) | Official MSME / Udyam registration certificate preview document / compliance card. | **Missing** | 800×1100 / 600×800 (A4 / 3:4) | **Required** |
| **10** | `company-profile-preview.webp` | `assets/images/certificates/` | `about.html` | Section 06: Compliance (`#certifications`) | Corporate brochure cover / enterprise capability document preview card. | **Missing** | 800×1100 / 600×800 (A4 / 3:4) | **Required** |
| **11** | `journey-01.webp` | `assets/images/timeline/` | `about.html` | Section 07: Milestones (`#success-story`) | Company establishment, founding team / facility beginnings in Rajasthan power sector. | **Missing** | 800×450 / 600×350 (16:9) | **Required** |
| **12** | `journey-02.webp` | `assets/images/timeline/` | `about.html` | Section 07: Milestones (`#success-story`) | Logistical distribution expansion, transport fleet, or regional contractor supply scaling. | **Missing** | 800×450 / 600×350 (16:9) | **Required** |
| **13** | `journey-03.webp` | `assets/images/timeline/` | `about.html` | Section 07: Milestones (`#success-story`) | Solar division launch, clean energy sourcing, and commercial rooftop solar projects in Rajasthan. | **Missing** | 800×450 / 600×350 (16:9) | **Required** |

---

## Existing Assets

| Filename | Exact Location | File Size | Page & Section Where Used | Role & Notes |
| :--- | :--- | :--- | :--- | :--- |
| `hero-video.mp4` | `assets/videos/hero-video.mp4` | 22.14 MB (22,140,196 bytes) | `index.html` — `#home-hero` | **Mandatory Hero Background Video.** Active in code with 70% offset centering, autoplay, loop, and multi-directional gradient overlays. |

---

## Missing Assets

The following 12 image assets are explicitly referenced in `about.html` with class `.premium-lazy-img` and are currently rendering through their respective CSS/HTML fallback canvas frames:

1. **`assets/images/about/company-building.webp`** — Headquarter / primary sourcing unit image.
2. **`assets/images/founder/founder.webp`** — Founder & Managing Director portrait image.
3. **`assets/images/services/electrical.webp`** — Electrical trading services card visual.
4. **`assets/images/services/solar.webp`** — Solar solutions services card visual.
5. **`assets/images/services/epc.webp`** — EPC project support services card visual.
6. **`assets/images/services/procurement.webp`** — EPC procurement channels card visual.
7. **`assets/images/certificates/gst-preview.webp`** — GST registration preview card.
8. **`assets/images/certificates/msme-preview.webp`** — MSME registration preview card.
9. **`assets/images/certificates/company-profile-preview.webp`** — Corporate profile preview card.
10. **`assets/images/timeline/journey-01.webp`** — Timeline Milestone 01 visual.
11. **`assets/images/timeline/journey-02.webp`** — Timeline Milestone 02 visual.
12. **`assets/images/timeline/journey-03.webp`** — Timeline Milestone 03 visual.

---

## Unused Assets

* **None.** There are currently zero orphaned, unreferenced, or unused media files in the `assets/` directory.

---

## Naming Rules

To maintain 100% architectural and operational consistency across future development, all future image assets must follow these strict rules:

1. **Format:** WebP (`.webp`) is standard for all photographs and preview cards due to superior lossless/lossy compression and Vite optimization. High-fidelity vector assets must remain inline SVGs.
2. **Casing & Separators:** Strictly **all-lowercase with hyphen separators** (e.g. `company-building.webp`, `journey-01.webp`). Never use camelCase, spaces, or underscores.
3. **Directory Organization:** Assets must be strictly organized by functional feature domain inside `assets/images/`:
   * `assets/images/about/` — General corporate facility & organizational imagery.
   * `assets/images/founder/` — Executive leadership portraits.
   * `assets/images/services/` — Core offerings & service category cards.
   * `assets/images/certificates/` — Compliance & registration preview cards.
   * `assets/images/timeline/` — Chronological journey milestone visuals.
   * `assets/videos/` — Video media only.
4. **Compression Target:** Recommended image file sizes between **40 KB – 180 KB** per image to ensure instant page load speeds without sacrificing visual sharpness on high-DPI (Retina) displays.

---

## Final Upload Checklist

Below is the single checklist of the exact 12 image files to prepare and place into the repository:

- [ ] **`assets/images/about/`**
  - [ ] `company-building.webp` *(HQ / industrial sourcing facility landscape)*
- [ ] **`assets/images/founder/`**
  - [ ] `founder.webp` *(Founder & Managing Director formal executive portrait)*
- [ ] **`assets/images/services/`**
  - [ ] `electrical.webp` *(Power cables & electrical trading distribution visual)*
  - [ ] `solar.webp` *(Commercial solar power arrays visual)*
  - [ ] `epc.webp` *(Electrical EPC site & project coordination visual)*
  - [ ] `procurement.webp` *(Warehouse logistics & material staging visual)*
- [ ] **`assets/images/certificates/`**
  - [ ] `gst-preview.webp` *(GST document preview card)*
  - [ ] `msme-preview.webp` *(MSME document preview card)*
  - [ ] `company-profile-preview.webp` *(Company profile brochure cover preview card)*
- [ ] **`assets/images/timeline/`**
  - [ ] `journey-01.webp` *(Company establishment milestone visual)*
  - [ ] `journey-02.webp` *(Logistics & sourcing expansion milestone visual)*
  - [ ] `journey-03.webp` *(Solar division milestone visual)*
