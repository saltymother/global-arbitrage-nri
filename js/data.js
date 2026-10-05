/**
 * Global Arbitrage & NRI Wealth Navigator
 * Master Financial & Macroeconomic Dataset
 */

const NAVIGATOR_DATA = {
  // Section 2: Global Career & Visa Mobility Benchmarks
  careerMatrix: [
    {
      id: "usa",
      region: "United States (Bay Area / NYC / Seattle)",
      flag: "🇺🇸",
      currency: "USD ($)",
      grossAnnualMin: 130000,
      grossAnnualMax: 180000,
      grossAnnualAvg: 155000,
      effectiveTaxRate: "28% – 34% (Federal + State + FICA)",
      netMonthlyAvg: 8800,
      typicalRent: 2800,
      healthInsurance: "$400–$700/mo (Employer co-pay, high deductibles $2k-$5k)",
      vacationDays: "15 – 20 days (Discretionary / Unlimited PTO trap)",
      visaCategory: "H-1B Specialty Occupation",
      visaSelectionRate: "20% – 25% annual lottery draw",
      prCitizenshipTimeline: "20–50+ years backlog for India-born (EB-2 / EB-3 country caps)",
      layoffProtection: "At-will employment; 60-day grace period to exit USA or transfer visa",
      monthlySurplusUsd: 4200,
      monthlySurplusInr: 361200, // @ ₹86/$
      wealthMultiplier: "Highest absolute USD cash accumulation; zero long-term immigration security"
    },
    {
      id: "germany",
      region: "Germany (Berlin / Munich / Frankfurt)",
      flag: "🇩🇪",
      currency: "EUR (€)",
      grossAnnualMin: 68000,
      grossAnnualMax: 85000,
      grossAnnualAvg: 75000,
      effectiveTaxRate: "39% – 42% (Income Tax + Health + Pension + Care + Unemployment)",
      netMonthlyAvg: 3650, // ~€3,650 net for single Class 1
      typicalRent: 1400,
      healthInsurance: "Included in statutory social security (100% public coverage, zero deductible)",
      vacationDays: "30 days mandatory statutory paid leave",
      visaCategory: "EU Blue Card / Chancenkarte (Opportunity Card)",
      visaSelectionRate: "Guaranteed upon qualifying job contract (€45.3k tech threshold)",
      prCitizenshipTimeline: "Permanent Residence in 21 months (with B1 German) or 27 mos (A1); Passport in 3-5 years",
      layoffProtection: "3-6 month statutory notice periods; robust Works Council protection",
      monthlySurplusUsd: 1850,
      monthlySurplusInr: 159100, // @ ₹93/€
      wealthMultiplier: "Moderate cash surplus; sovereign EU passport, free education & universal social safety net"
    },
    {
      id: "netherlands",
      region: "Netherlands (Amsterdam / Eindhoven)",
      flag: "🇳🇱",
      currency: "EUR (€)",
      grossAnnualMin: 72000,
      grossAnnualMax: 92000,
      grossAnnualAvg: 82000,
      effectiveTaxRate: "32% – 38% (with 30% Ruling benefit in initial years)",
      netMonthlyAvg: 4400, // with 30% ruling
      typicalRent: 1750,
      healthInsurance: "Mandatory private health insurance (~€140/mo per adult)",
      vacationDays: "25 – 28 days paid leave",
      visaCategory: "Highly Skilled Migrant (Kennismigrant)",
      visaSelectionRate: "Guaranteed via recognized IND sponsor employer",
      prCitizenshipTimeline: "Permanent Residency / Dutch Citizenship in 5 years",
      layoffProtection: "UWVO court approval or mutual agreement with statutory severance",
      monthlySurplusUsd: 2100,
      monthlySurplusInr: 180600,
      wealthMultiplier: "Excellent English-first tech ecosystem; severe housing market constraints"
    },
    {
      id: "remote_india",
      region: "India Remote Global Contractor (Tier-1 / Tier-2 City)",
      flag: "🇮🇳 🌐",
      currency: "USD ($) / INR (₹)",
      grossAnnualMin: 48000, // $4,000/mo
      grossAnnualMax: 84000, // $7,000/mo
      grossAnnualAvg: 60000, // $5,000/mo = ₹51.6 Lakhs
      effectiveTaxRate: "10% – 14% effective tax via Section 44ADA (50% presumptive profit)",
      netMonthlyAvg: 3750, // ~$3,750 net in USD = ₹3,22,500/mo
      typicalRent: 550, // ₹45,000/mo for premium apartment in Pune/Bengaluru/Chandigarh
      healthInsurance: "Private comprehensive family super top-up (~$40/mo = ₹3,500/mo)",
      vacationDays: "Flexible / As negotiated with overseas client",
      visaCategory: "Zero visa needed — Native Indian Citizen",
      visaSelectionRate: "100% sovereign freedom; zero deportation or lottery threat",
      prCitizenshipTimeline: "Native home country citizen — zero immigration vulnerability",
      layoffProtection: "Multiple diversified clients / 30-day contractor clauses",
      monthlySurplusUsd: 2800, // ₹2,40,000/mo savings
      monthlySurplusInr: 240800,
      wealthMultiplier: "The Ultimate Arbitrage: Earning hard USD/EUR, paying ultra-low 44ADA tax, living at 1:20 local PPP"
    },
    {
      id: "india_domestic",
      region: "India Domestic Salaried Senior SWE (Bengaluru / Gurgaon)",
      flag: "🇮🇳",
      currency: "INR (₹)",
      grossAnnualMin: 2200000, // ₹22 LPA
      grossAnnualMax: 3800000, // ₹38 LPA
      grossAnnualAvg: 3000000, // ₹30 LPA
      effectiveTaxRate: "22% – 26% (New Tax Regime with zero presumptive deductions)",
      netMonthlyAvg: 2250, // ~₹1,95,000/mo net
      typicalRent: 500, // ₹40,000/mo
      healthInsurance: "Corporate policy + personal cover",
      vacationDays: "18 – 22 days annual leave",
      visaCategory: "Native Domestic Employee",
      visaSelectionRate: "Native citizen",
      prCitizenshipTimeline: "Native",
      layoffProtection: "Industrial Disputes / Shops & Est. Act (often 1-3 month severance)",
      monthlySurplusUsd: 1100, // ₹95,000/mo
      monthlySurplusInr: 94600,
      wealthMultiplier: "Rapidly growing domestic ecosystem; high nominal gadget penalty relative to income"
    }
  ],

  // Section 4: Purchasing Power Parity (PPP) Basket: Local Non-Tradables vs Global Tradables
  pppBasket: [
    {
      item: "Barber Haircut (Standard Men's Styling)",
      type: "Local Non-Tradable",
      usCostUsd: 32,
      usCostInr: 2752,
      indiaCostInr: 200,
      indiaCostUsd: 2.33,
      ratio: "13.8x Cheaper in India",
      economicDriver: "Pure domestic labor & local commercial real estate rent"
    },
    {
      item: "Cooked Restaurant Lunch (Mid-Tier)",
      type: "Local Non-Tradable",
      usCostUsd: 18,
      usCostInr: 1548,
      indiaCostInr: 250,
      indiaCostUsd: 2.91,
      ratio: "6.2x Cheaper in India",
      economicDriver: "Domestic agricultural produce, local chef/server labor"
    },
    {
      item: "Doctor Consultation (General Physician)",
      type: "Local Non-Tradable",
      usCostUsd: 150,
      usCostInr: 12900,
      indiaCostInr: 600,
      indiaCostUsd: 6.98,
      ratio: "21.5x Cheaper in India",
      economicDriver: "Balassa-Samuelson effect: subsidized Indian medical education & lower wage benchmarks"
    },
    {
      item: "Monthly Apartment Maid & Cook (Full Time 2 hrs/day)",
      type: "Local Non-Tradable",
      usCostUsd: 1200,
      usCostInr: 103200,
      indiaCostInr: 6500,
      indiaCostUsd: 75.58,
      ratio: "15.9x Cheaper in India",
      economicDriver: "Abundant domestic labor supply; non-exportable physical service"
    },
    {
      item: "1 BHK Urban Apartment Rent (Per Month)",
      type: "Local Non-Tradable",
      usCostUsd: 2600,
      usCostInr: 223600,
      indiaCostInr: 32000,
      indiaCostUsd: 372.09,
      ratio: "7.0x Cheaper in India",
      economicDriver: "Land values tied to local per-capita GDP & domestic capital costs"
    },
    {
      item: "iPhone 16 Pro (256 GB Flagship)",
      type: "Global Tradable (Silicon + IP)",
      usCostUsd: 1099,
      usCostInr: 94514,
      indiaCostInr: 129900,
      indiaCostUsd: 1510.47,
      ratio: "1.37x MORE EXPENSIVE in India",
      economicDriver: "TSMC 3nm wafer, global R&D, 18% Indian GST + Basic Customs Duty on key modules"
    },
    {
      item: "Sony PlayStation 5 Slim (Disc Edition)",
      type: "Global Tradable",
      usCostUsd: 499,
      usCostInr: 42914,
      indiaCostInr: 54990,
      indiaCostUsd: 639.42,
      ratio: "1.28x MORE EXPENSIVE in India",
      economicDriver: "Standardized AMD APU silicon, global supply chain, Indian electronics tariffs"
    },
    {
      item: "Apple MacBook Pro 14\" (M3 Pro 18GB/512GB)",
      type: "Global Tradable",
      usCostUsd: 1999,
      usCostInr: 171914,
      indiaCostInr: 199900,
      indiaCostUsd: 2324.42,
      ratio: "1.16x MORE EXPENSIVE in India",
      economicDriver: "Priced in USD by Cupertino; zero domestic component discount possible"
    },
    {
      item: "Tesla Model 3 / Premium Imported EV",
      type: "Global Tradable + Luxury Tariff",
      usCostUsd: 39000,
      usCostInr: 3354000,
      indiaCostInr: 7200000,
      indiaCostUsd: 83720.93,
      ratio: "2.15x MORE EXPENSIVE in India",
      economicDriver: "70%–100% CBU (Completely Built Unit) import customs duty to protect domestic auto"
    }
  ],

  // Section 4 Timeline: Days of Work to Buy a Flagship iPhone in India vs USA
  iphoneDaysTimeline: [
    { year: 2016, model: "iPhone 7", usDays: 2.8, indiaDays: 52, indSalaryMonthly: 38000, phoneCostInr: 60000, fabMilestone: "Zero domestic iPhone assembly; 100% CBU import with 22% duties" },
    { year: 2018, model: "iPhone XS", usDays: 2.7, indiaDays: 45, indSalaryMonthly: 52000, phoneCostInr: 99900, fabMilestone: "Foxconn & Wistron begin initial low-end SE assembly in Bengaluru" },
    { year: 2020, model: "iPhone 12", usDays: 2.5, indiaDays: 39, indSalaryMonthly: 65000, phoneCostInr: 119900, fabMilestone: "PLI (Production Linked Incentive) Scheme launched for mobile manufacturing" },
    { year: 2023, model: "iPhone 15 Pro", usDays: 2.3, indiaDays: 33, indSalaryMonthly: 82000, phoneCostInr: 134900, fabMilestone: "Made-in-India iPhone 15 shipped globally on launch day; Tata acquires Wistron plant" },
    { year: 2026, model: "iPhone 16 Pro", usDays: 2.1, indiaDays: 28, indSalaryMonthly: 98000, phoneCostInr: 129900, fabMilestone: "Customs duty cut from 20% to 15%; Foxconn expands Chennai; Tata Hosur enclosure plant scale" },
    { year: 2030, model: "iPhone 20 (Projected)", usDays: 1.8, indiaDays: 13, indSalaryMonthly: 175000, phoneCostInr: 115000, fabMilestone: "Tata Dholera & CG Semi fab commercial output; domestic PCB and camera module sourcing" },
    { year: 2035, model: "iPhone 25 (Target Parity)", usDays: 1.5, indiaDays: 5.2, indSalaryMonthly: 290000, phoneCostInr: 95000, fabMilestone: "Full domestic ecosystem maturity; Indian tech engineer earns $35k+ nominal; sub-6 day parity" }
  ],

  // Section 5: USD / INR Historical Exchange Rate & The Managed Float Trajectory
  usdInrHistory: [
    { year: 1991, rate: 22.7, event: "LPG Reforms & Balance of Payments Crisis; Rupee devalued" },
    { year: 1998, rate: 41.3, event: "Asian Financial Crisis & Pokhran II Sanctions" },
    { year: 2003, rate: 46.6, event: "Early BPO/IT boom begins; RBI begins building war chest" },
    { year: 2008, rate: 43.5, event: "Pre-GFC peak inflows; Rupee briefly touches ₹39.5" },
    { year: 2013, rate: 62.5, event: "Taper Tantrum; Fragile Five crisis; Rupee plunges from 54 to 68" },
    { year: 2018, rate: 69.7, event: "Crude oil spikes to $85; US Fed rate hikes" },
    { year: 2022, rate: 82.8, event: "Russia-Ukraine War & US Fed unprecedented 525 bps rate tightening" },
    { year: 2024, rate: 84.1, event: "RBI Forex Reserves cross historic $700 Billion milestone" },
    { year: 2026, rate: 86.4, event: "Orderly 3.2% annual managed depreciation; IT services export cushion" },
    { year: 2028, rate: 91.8, event: "Projected: Structural 2.8% inflation differential balance" },
    { year: 2030, rate: 97.5, event: "Projected: Approaching ₹100 psychological threshold without macroeconomic disruption" },
    { year: 2032, rate: 103.2, event: "Projected: ₹100 crossed calmly, cushioned by $850B+ forex assets" }
  ],

  // Section 6: Cross-Border Banking & Compliance Matrix
  bankingComparison: [
    {
      feature: "Primary Funding Source",
      nre: "Foreign remittances in foreign currency ONLY (USD, EUR, GBP, AED)",
      nro: "Legitimate income originating inside India (rent, local dividends, Indian salary, sale of domestic assets)",
      residentSavings: "Strictly for Indian Residents only (Illegal for NRIs to operate after 180 days abroad)"
    },
    {
      feature: "Taxability in India",
      nre: "100% TAX-FREE interest under Section 10(4)(ii) of the Income Tax Act",
      nro: "Taxable at 30% TDS + cess/surcharge (Can be reduced to 10%-15% via DTAA TRC)",
      residentSavings: "Taxable as per individual income tax slab rates"
    },
    {
      feature: "Repatriability Abroad",
      nre: "100% Freely and infinitely repatriable back abroad anytime with ZERO RBI approval",
      nro: "Repatriable up to $1,000,000 per financial year under LRS with Form 15CA & 15CB CA clearance",
      residentSavings: "Subject to LRS $250k limit; illegal for NRIs"
    },
    {
      feature: "Joint Account Holding",
      nre: "Can be held jointly ONLY with another NRI, or with a Resident relative on 'Former or Survivor' basis",
      nro: "Can be held jointly with an Indian Resident relative on 'Former or Survivor' basis",
      residentSavings: "Any resident citizen"
    },
    {
      feature: "Permitted Inward Purpose",
      nre: "Direct inward remittance via SWIFT with mandatory Purpose Code (e.g., P0019 / P1301)",
      nro: "Domestic RTGS/NEFT/Cheque deposits originating from verified Indian accounts",
      residentSavings: "Standard domestic transactions"
    }
  ],

  // Section 6: AML & Benami Red Flags vs Safe Strategy
  amlRules: {
    relativeExemption: {
      title: "Section 56(2)(x) Linear Relative Exemption",
      definition: "Any sum of money received from defined relatives is 100% EXEMPT from income tax without any monetary ceiling.",
      whitelisted: [
        "Spouse of the individual",
        "Brother or Sister of the individual",
        "Brother or Sister of the spouse",
        "Brother or Sister of either of the parents",
        "Lineal ascendant or descendant (Parents, Grandparents, Children, Grandchildren)",
        "Spouses of the individuals mentioned above"
      ],
      documentation: "Formal notarized Gift Deed on stamp paper, certified bank SWIFT voucher, and copy of donor's foreign passport/tax return."
    },
    smurfingTrap: {
      title: "Why 'Smurfing' and Structured Pooling ALWAYS Triggers AML Busts",
      mechanics: "An NRI attempts to bypass scrutiny by sending ₹45,000–₹50,000 each to 10 friends/distant cousins, who then forward the funds to a builder or a single central account to purchase property.",
      whyItFails: [
        "Non-relative gifts above ₹50,000 aggregate in a year are 100% taxable in the hands of the recipient as 'Income from Other Sources' (Section 56(2)(x)).",
        "FIU-IND Algorithmic Rule: Multiple structured transactions just below ₹50,000 trigger an automated Suspicious Transaction Report (STR) under PMLA Rule 7.",
        "Project Insight & AIS: The Income Tax Department's AI cross-matches bank deposit clusters with PAN/Aadhaar data; recipients receive automatic scrutiny notices.",
        "The Benami Trap: If property is registered in the friend's name while funded by the NRI, it is deemed a Benami Asset under Section 2(8) of the Benami Transactions (Prohibition) Act."
      ],
      legalPenalties: [
        "Rigorous Imprisonment: 1 to 7 years for both the beneficial owner (NRI) and the benamidar (friend/relative).",
        "Asset Confiscation: Absolute, irreversible confiscation of the real estate or asset by the Central Government without compensation.",
        "Monetary Fine: Up to 25% of the Fair Market Value (FMV) of the benami property.",
        "Civil Bar: Section 4 strictly prohibits the NRI from filing any civil suit to recover the property from the dummy owner."
      ]
    },
    safeStrategy: [
      { step: 1, title: "Direct Title in NRI's Legal Name", desc: "Always register the conveyance deed / sale deed directly in your official NRI name with passport and PAN." },
      { step: 2, title: "Channeled via NRE/NRO Bank Accounts", desc: "Every rupee must flow directly from your verified NRE or NRO account via RTGS/Cheque directly to the builder or seller. Never use cash or third-party accounts." },
      { step: 3, title: "Embassy-Attested Power of Attorney (POA)", desc: "If you cannot fly to India for registry, execute a Special Power of Attorney in favor of a trusted parent or sibling, notarized and attested at the nearest Indian Consulate/Embassy abroad, then adjudicated at the local Sub-Registrar Office in India." },
      { step: 4, title: "Mandatory Purpose Codes & FIRC", desc: "Ensure foreign remittance into your account carries RBI Purpose Code P0013 (Purchase of residential property) and obtain bank remittance advice." }
    ]
  },

  // Frequently Asked Questions
  faqs: [
    {
      q: "Can I earn USD $5,000/mo remotely from India and pay only ~10% effective income tax legally?",
      a: "Yes! Under Section 44ADA of the Indian Income Tax Act, eligible professionals (software engineers, technical consultants, UI designers, data scientists) with gross receipts up to ₹75 Lakhs (~$87,000 USD) who receive 95%+ of funds digitally can opt for presumptive taxation. The government deems only 50% of your gross revenue as taxable profit. On ₹60 Lakhs ($70,000), your deemed taxable income is ₹30 Lakhs. Under the New Tax Regime (with lower slab rates and standard deductions), your total tax liability is around ₹5.5 Lakhs—resulting in an effective tax rate of just ~9.2% on your total gross revenue! To stay compliant, you must file GST with a Letter of Undertaking (LUT) to claim zero-rated export of services and collect electronic FIRCs for all inward remittances."
    },
    {
      q: "What is an FIRC, and why is my bank refusing to issue a physical copy?",
      a: "A Foreign Inward Remittance Certificate (FIRC) is official statutory proof issued by an Authorised Dealer (AD Category I) Bank in India certifying that foreign currency arrived from abroad under a legitimate RBI Purpose Code. In modern practice, for normal service exports and software consultancy, physical FIRCs have been replaced by Electronic FIRCs (e-FIRC) or Foreign Remittance Advice (FRA) / Credit Advice. If you use Wise or Deel, the funds are routed through an Indian partner bank (e.g. Yes Bank, HDFC, ICICI). You must log into Wise/Deel or contact the partner bank to download your digital Inward Remittance Statement (IRS) or e-FIRC. Without this, the GST department can deny your zero-rated export status and demand 18% IGST plus interest!"
    },
    {
      q: "Why can't RBI just fix 1 USD = 1 INR so Indians can buy iPhones for ₹1,000?",
      a: "If the Reserve Bank of India artificially pegged ₹1 = $1 overnight, India's $200+ Billion IT services export industry (TCS, Infosys, Wipro, and global GCCs) would collapse within 48 hours. When a US company hires an Indian software engineer for ₹20 Lakhs ($23,500 at ₹85/$), it is cost-effective. At ₹1 = $1, that same Indian engineer would cost $2,000,000 USD—85 times more than a Silicon Valley engineer! Over 5.4 million IT workers would be laid off immediately, foreign investment would flee, and exports of textiles, pharmaceuticals, and engineering goods would cease completely. The exchange rate must reflect relative productivity, capital depth, and inflation differentials."
    },
    {
      q: "I am an NRI in Germany. Can I keep my existing resident Indian savings account to pay EMIs?",
      a: "No! Under FEMA regulations, once your residential status changes to Non-Resident (spending more than 182 days abroad in a financial year for employment or business), it is an offense under FEMA to continue operating a normal Resident Savings Account. You are legally required to notify your Indian bank and convert your resident account to an NRO (Non-Resident Ordinary) account. Penalties under FEMA can be up to three times the amount involved in the contravention."
    },
    {
      q: "Can I transfer funds to my mother's Indian bank account to invest in Mutual Funds?",
      a: "Yes. Mothers are defined 'lineal ascendants' under Section 56(2)(x) of the Income Tax Act. Any gift from an NRI son/daughter to their mother is 100% tax-free in the mother's hands, with no monetary cap. However: (1) Execute a signed Gift Deed stating it is an irrevocable gift out of natural love and affection; (2) The mother can invest those funds in Mutual Funds under her name; (3) Be aware that capital gains tax on those mutual funds will be assessed in her name as an Indian resident."
    },
    {
      q: "What happens if an NRI buys an apartment under a cousin's or friend's name?",
      a: "This is a direct violation of the Benami Transactions (Prohibition) Amendment Act, 2016. Because the cousin provides no consideration and the beneficial ownership remains with you, the property will be declared a 'Benami Property'. The Central Government has statutory powers to confiscate the entire property without paying a single rupee. Both you and your cousin face 1 to 7 years of rigorous imprisonment, plus a fine of 25% of the property's fair market value. Never buy assets under third-party names."
    }
  ]
};

// Expose globally for browser usage
window.NAVIGATOR_DATA = NAVIGATOR_DATA;
