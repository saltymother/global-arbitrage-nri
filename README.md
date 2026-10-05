# Global Arbitrage & NRI Wealth Navigator
### *The 4-Day iPhone & Global Mobility Blueprint*

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Production-emerald?style=flat&logo=github)](https://saltymother.github.io/global-arbitrage-nri/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Commit Signing](https://img.shields.io/badge/Git%20Commit-Cryptographically%20Signed-success?logo=git)](https://github.com/saltymother/global-arbitrage-nri)

---

## 🌐 Overview
**Global Arbitrage & NRI Wealth Navigator** is a high-performance web platform designed to analyze the macroeconomic realities of working abroad versus in India. The platform bridges career immigration hurdles (H-1B vs. EU Blue Card), Purchasing Power Parity (PPP), the structural puzzle of the "4-Day iPhone", the RBI's managed currency float toward ₹100/USD, and strict statutory cross-border compliance (FEMA, FIRC, Section 44ADA, and the Benami Transactions Act).

---

## 🔑 Core Features & Modules

### 1. Visual & UI Architecture
- **Fintech & Editorial Hybrid Design:** Dark mode default with deep indigo/slate canvas, electric cyan (`#22D3EE`), emerald green (`#10B981`), and subtle gold accents.
- **Glassmorphic Components:** Elevated cards with frosted backdrops (`backdrop-blur-md`), dynamic hover states, and smooth typography (Plus Jakarta Sans, Inter, JetBrains Mono).
- **Responsive Sticky Header:** Live currency benchmarks (USD/INR, EUR/INR, Forex Reserves) with active scroll spy observer.

### 2. Analytical & Macroeconomic Sections
1. **USA vs. EU Careers & Visas:**
   - H-1B lottery risk (20–25% selection rate, 60-day layoff grace period, multi-decade green card backlog) vs. EU Blue Card (guaranteed PR in 21–27 months, EU citizenship in 3–5 years).
   - Detailed compensation, taxes, rents, and monthly surplus metrics across US, Germany, Netherlands, and India.
2. **The Remote Global Arbitrage Model:**
   - International contractor structures (Wise, Deel) with zero-rated export of services under GST Letter of Undertaking (LUT RFD-11).
   - Foreign Inward Remittance Certificate (FIRC / e-FIRC) compliance under FEMA.
   - Presumptive Taxation under Section 44ADA (50% deemed profit on professional income up to ₹75 Lakhs, resulting in ~9–12% effective income tax).
3. **The 4-Day iPhone & Purchasing Power Parity (PPP):**
   - The Balassa-Samuelson effect: Why local non-tradables (haircuts, cooked meals, maid services) are 6x–15x cheaper in India, while global silicon tradables (iPhone 16 Pro, PS5, MacBook Pro) cost identical or higher nominal prices.
   - The roadmap from ~28 working days in 2026 down to 4–6 days by 2035 via domestic semiconductor fabrication (Dholera, Tata, CG Semi) and labor productivity convergence.
4. **Macroeconomics: Why ₹1 ≠ $1 and the ₹100/USD Trajectory:**
   - Why artificial 1:1 parity would destroy India's $200B+ IT export sector and displace 5.4 million engineers.
   - Natural 3–3.5% annual depreciation matching inflation differentials.
   - RBI's $700B+ Forex war chest buffering against currency crises.
5. **Cross-Border Legal Banking: NRE/NRO vs. The Benami Trap:**
   - Complete breakdown of NRE (100% tax-free interest, freely repatriable) vs. NRO (30% TDS, $1M repatriation cap) vs. Resident Accounts (illegal for NRIs).
   - Section 56(2)(x) Linear Relatives Exemption (100% tax-free with zero limit).
   - The "Smurfing" fallacy: Why ₹50,000 non-relative gifts trigger FIU-IND Suspicious Transaction Reports (STRs) and Project Insight AI audits.
   - The Benami Transactions (Prohibition) Act: Confiscation of property, 1–7 years imprisonment, 25% FMV fine, and the safe Consulate-Attested Power of Attorney (POA) strategy.

### 3. Interactive Web Tools & Calculators
- **Gadget "Days of Work" Calculator:** Input net salary, work days, and product choice to compute exact days/hours of work required, with real-time peer comparison badges and progress meters.
- **Cross-Border Savings Simulator ("The 3-Year House Plan"):** Model monthly foreign savings, currency depreciation kicker, and compound yield to test Tier-1 vs. Tier-2 debt-free real estate acquisition feasibility with interactive Chart.js visualizations.
- **Section 44ADA Tax Arbitrage Engine:** Live calculation of tax saved under presumptive taxation versus salaried employee taxation.

---

## 🛠️ Tech Stack
- **Architecture:** Zero-dependency Single Page Application (SPA).
- **Styling:** Tailwind CSS + Custom modern fintech CSS extensions.
- **Icons:** Lucide Icons.
- **Data Visualization:** Chart.js.
- **Typography:** Plus Jakarta Sans & JetBrains Mono via Google Fonts.

---

## 🚀 Local Development & Preview
To run the project locally:
```bash
cd global_arbitrage_nri
python3 server.py
# Open http://localhost:8088 in your browser
```

Or open directly in Google Chrome:
```bash
open -a "Google Chrome" index.html
```

---

## 📜 Version History & Governance
All changes, deployments, and cryptographically verified releases are immutably recorded in [`version.md`](./version.md) adhering to workspace engineering mandates.
