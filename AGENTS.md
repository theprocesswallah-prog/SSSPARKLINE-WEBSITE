# Agent Operating Guidelines & Permanent Rules — Shiv Shiv Sparkline

This document defines the permanent operating rules, constraints, and architecture guidelines for any AI coding assistant, subagent, or developer working on the **Shiv Shiv Sparkline** website repository.

---

## 1. NON-NEGOTIABLE CORE RULES

### 1.1 Homepage Hero Video is Mandatory
* **Rule:** The hero background video located at `assets/videos/hero-video.mp4` and configured in `index.html` is **PERMANENT AND MANDATORY**.
* **Strict Prohibitions:**
  * DO NOT remove the video element.
  * DO NOT replace the video file or source path.
  * DO NOT change its playback parameters (`autoplay muted loop playsinline preload="auto"`).
  * DO NOT change its video framing or object positioning (`object-position: 70% center`).
  * DO NOT alter its overlay gradient system or replace it with alternative image/slider treatments.

### 1.2 Preserve Existing Architecture & Technology Stack
* **Rule:** The website is strictly built using **vanilla HTML5, modular CSS3 (custom properties), native ES6+ JavaScript, and Vite**.
* **Strict Prohibitions:**
  * DO NOT convert the project to React, Next.js, Vue, Angular, Svelte, or TypeScript without explicit, documented user approval.
  * DO NOT introduce CSS utility frameworks such as Tailwind CSS or Bootstrap unless explicitly requested and approved.
  * Keep dependencies strictly minimal — preserve the lightweight, zero-runtime-overhead design.

### 1.3 Preserve the Premium Corporate Visual Identity
* **Rule:** Maintain the authoritative, high-whitespace, typography-first aesthetic with its symmetrical dark slate theme (`#071120`, `#0B1324`, `#111827`), electric royal blue accents (`#2563EB`), and permanent solid white header.
* Any UI additions must adhere to the defined color tokens, typography scales, glassmorphism standards, and subtle 800ms cubic-bezier transition curves.

---

## 2. CODE QUALITY & ARCHITECTURAL DISCIPLINE

### 2.1 Reuse Existing Styles and Controllers
* **CSS:** Always reuse tokens declared in `css/variables.css` and classes from `css/layout.css`, `css/components.css`, `css/navigation.css`, and `css/animation.css`.
* **Prohibition:** DO NOT create duplicate stylesheets, duplicate color hex values, or conflicting style overrides.
* **JavaScript:** Utilize the existing controller classes (`NavigationController`, `ScrollController`, `AdvancedAnimationController`, and orchestration routines in `main.js`). DO NOT inject inline script tags or fragmented script snippets.

### 2.2 Strict Script Loading Standard (`type="module"`)
* All `<script>` imports in HTML documents must use `type="module"` (e.g. `<script type="module" src="./js/main.js"></script>`). This ensures Vite properly bundles and outputs production scripts into `dist/assets/` during `npm run build`.

### 2.3 Single Source of Truth for Global Elements
* Navigation Header and Footer structures across `index.html`, `about.html`, `products.html`, `projects.html`, and `contact.html` must remain 100% synchronized in markup structure, class naming, links, and hierarchy.

### 2.4 Mobile & Responsive Fidelity
* All modifications must be verified across standard breakpoints:
  * Desktop (1200px+)
  * Laptop (1024px – 1199px)
  * Tablet (768px – 991px)
  * Mobile (<= 767px)
* Ensure touch targets are at least 44px, drawer animations are smooth, and page layouts do not produce horizontal overflow (`overflow-x: hidden`).

---

## 3. BUSINESS & CONTENT ACCURACY

### 3.1 Never Invent Business Information
* DO NOT invent or fabricate corporate claims, client names, certifications, revenue figures, or corporate addresses.
* If specific business data is missing (e.g. Founder name, direct phone line, registered office address, GSTIN), clearly mark it with a standard placeholder or explicitly ask the user for clarification.

### 3.2 Rajasthan Regional Industrial Context
* Shiv Shiv Sparkline operates primarily in Rajasthan, serving electrical utilities, industrial plants, renewable energy developers, and EPC infrastructure projects. Ensure all copy matches this industrial B2B tone.

---

## 4. WORKFLOW & VERIFICATION PROTOCOL

### 4.1 Git & Safety Rules
* **NEVER** perform destructive Git operations (`git reset --hard`, `git push --force`, `git clean -fd` targeting untracked assets).
* Maintain a clean working tree and ensure commits are atomic, focused, and well-described.
* Preserve remote tracking (`origin/main`).

### 4.2 Local Testing & Build Verification
* Before concluding any feature or bug fix:
  1. Test changes locally with `npm run dev`.
  2. Execute `npm run build` to ensure the production bundle compiles with **zero errors and zero bundling warnings**.
  3. Verify that the output files in `dist/` are intact and all asset references resolve correctly.

### 4.3 Keep Changes Focused and Reviewable
* Do not perform sweeping unsolicited refactors. Focus on the explicit task at hand, follow the established patterns in the codebase, and verify correctness before completing the task.
