# Binary Break India | Advocacy Research Archive

**Binary Break India** is a high-end, interactive digital experience mapping the ontological evolution of gender identity in India. This project serves as an advocacy tool and historical archive, decolonizing the narrative of gender identity—moving from pre-colonial sacredness to modern legislative challenges.

[![Version](https://img.shields.io/badge/version-1.0.0-pink?style=for-the-badge)](https://github.com/)
[![License](https://img.shields.io/badge/license-CC--BY--SA--4.0-blue?style=for-the-badge)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Tech](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

## 🎯 The Mission

The project aim is to challenge the "medical gatekeeping" proposed in the **2026 Legislative Pivot**. By providing a high-fidelity visual history, the site educates stakeholders on how India’s gender-fluid history was systematically erased by colonial impositions and why modern "self-identification" is a return to indigenous roots rather than a Western import.

---

## 🏛️ Research Pillars

### 1. Pre-Colonial Fluidity
*   **Ancient Tritiya Prakrti:** Analysis of Vedic "third nature" and spiritual authority.
*   **Mughal Administrative Elite:** Documenting the *Khwaja Sira* as imperial nobility, generals, and political advisors.

### 2. The Colonial Erasure
*   **Criminalization:** The impact of Section 377 and the 1871 Criminal Tribes Act on indigenous gender identities.

### 3. Judicial Milestones
*   **NALSA (2014):** The shift from biological to psychological sex.
*   **Puttaswamy (2017):** Establishing gender as a fundamental right to privacy.
*   **Navtej Johar (2018):** The decriminalization of identity.

### 4. The 2026 Legislative Pivot
*   **The Threat:** Critical analysis of proposed medical boards and the criminalization of "allurement" which threatens the support systems of the trans community.

---

## 🛠️ Technical Implementation

The site is built with a focus on **Glassmorphism**, **Performance**, and **Micro-interactions**.

*   **Custom Cursor System:** A vanilla JS "magnetic" cursor that reacts to interactive elements (disabled on mobile for UX).
*   **Parallax Glows:** Dynamic background radial gradients that respond to mouse movement.
*   **Glitch CSS FX:** Specifically utilized in the "2026 Pivot" section to symbolize systemic disruption and legislative backsliding.
*   **Performance First:** 
    *   Local font hosting (Outfit, Unbounded, Borel) with `font-display: swap`.
    *   SVG-based icons (Lucide) for infinite scalability.
    *   Zero external dependencies (all CSS/JS served locally).

---

## 📂 Project Structure

```text
├── index.html              # Main architecture & advocacy content
├── assets/
│   ├── css/
│   │   └── tailwind.css    # Compiled Tailwind utility classes
│   ├── js/
│   │   └── lucide.js       # Local Lucide Icon library
│   ├── fonts/              # High-end typography (Woff2)
│   │   ├── borel/          # Signature-style font
│   │   ├── outfit/         # Modern body copy
│   │   └── unbounded/      # Ultra-bold display headings
│   ├── icons/
│   │   ├── favicon.svg     # Brand favicon
│   │   ├── om-icon.svg     # Timeline marker
│   │   └── companylogo.webp # CuteSense Studios identifier
└── pdf/
    └── Binary_Break_India_Research.pdf # Full academic research paper
```

---

## 🚀 Setup & Deployment

1.  **Local Development:**
    *   The project is designed to run in a static environment. Simply open `index.html` in a modern browser.
    *   Ensure the `assets/fonts/` directory is populated to maintain the intended visual hierarchy.

2.  **Asset Management:**
    *   Icons are handled via `lucide.createIcons()`. 
    *   Interactions are managed via the `section-reveal` class and `IntersectionObserver`-style logic in the script block.

3.  **Deployment:**
    *   Host via **GitHub Pages**, **Vercel**, or **Netlify**.
    *   Ensure `Binary_Break_India_Research.pdf` is present in the `pdf/` folder for the "Take Action" and "Archive" buttons to function.

---

## ⚖️ Credits & Licensing

*   **Creative Direction:** [CuteSense Studios](https://github.com/)
*   **Data Sources:** National Human Rights Commission (NHRC) India, Supreme Court of India Archives, NALSA vs. Union of India (2014).
*   **Frameworks:** Developed with Tailwind CSS and Lucide.

**License:**  
Licensed under **CC BY-SA 4.0**. You are free to share and adapt this material, provided you attribute **CuteSense Studios** and keep the same license.

---
*Mapping the trajectory of identity. Perfected by people, powered by advocacy.*
---
*Drafted by Gemini and refined for accuracy by CuteSense Team* 