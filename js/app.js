/**
 * Global Arbitrage & NRI Wealth Navigator
 * Interactive Core Application Logic & Financial Calculators
 * Theme: Classic White & Blue Fintech Editorial
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize UI & Components
  initNavigation();
  initCareerTable();
  initPppBasketTable();
  initDaysToIphoneCalculator();
  initHousePlanSimulator();
  initTaxArbitrageCalculator();
  initTimelineChart();
  initFxMacroChart();
  initFaqAccordion();
  initModals();
});

/* ==========================================================================
   Navigation & Active Section Observer
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll blur background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('bg-white/95', 'shadow-sm', 'border-b', 'border-slate-200');
    } else {
      header.classList.remove('bg-white/95', 'shadow-sm', 'border-b', 'border-slate-200');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Intersection Observer for scroll spy
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   Section 2: Career Mobility Table Rendering & Filtering
   ========================================================================== */
function initCareerTable() {
  const container = document.getElementById('career-table-body');
  if (!container || !window.NAVIGATOR_DATA) return;

  const data = window.NAVIGATOR_DATA.careerMatrix;

  function renderTable(filterId = 'all') {
    container.innerHTML = '';
    const items = filterId === 'all' ? data : data.filter(d => d.id === filterId);

    items.forEach(item => {
      const tr = document.createElement('tr');
      tr.className = 'border-b border-slate-100 hover:bg-blue-50/40 transition-colors';

      tr.innerHTML = `
        <td class="p-4 font-semibold text-slate-900 flex items-center gap-2.5">
          <span class="text-2xl">${item.flag}</span>
          <div>
            <div class="font-bold text-slate-900">${item.region}</div>
            <div class="text-xs text-blue-700 font-mono-num font-semibold">${item.visaCategory}</div>
          </div>
        </td>
        <td class="p-4 font-mono-num text-slate-800">
          <div class="font-bold text-emerald-700">${item.currency} ${item.grossAnnualAvg.toLocaleString()}</div>
          <div class="text-xs text-slate-500">${item.effectiveTaxRate}</div>
        </td>
        <td class="p-4 font-mono-num text-slate-800">
          <div class="font-bold text-slate-900">${item.currency} ${item.netMonthlyAvg.toLocaleString()}/mo</div>
          <div class="text-xs text-rose-600 font-medium">Rent: ~${item.currency} ${item.typicalRent.toLocaleString()}</div>
        </td>
        <td class="p-4 text-xs text-slate-700">
          <div class="flex items-center gap-1.5 text-amber-700 font-bold mb-1">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            ${item.visaSelectionRate}
          </div>
          <div class="text-slate-600 line-clamp-2">${item.prCitizenshipTimeline}</div>
        </td>
        <td class="p-4 font-mono-num">
          <div class="text-sm font-bold text-blue-700">$${item.monthlySurplusUsd.toLocaleString()} / mo</div>
          <div class="text-xs text-emerald-700 font-semibold">≈ ₹${(item.monthlySurplusInr / 100000).toFixed(2)} Lakhs</div>
        </td>
      `;
      container.appendChild(tr);
    });
  }

  renderTable('all');

  // Filter tabs
  const tabs = document.querySelectorAll('.career-filter-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active', 'border-blue-600', 'text-blue-700', 'bg-blue-50', 'font-bold');
        t.classList.add('text-slate-600', 'border-slate-200', 'bg-white');
      });
      tab.classList.add('active', 'border-blue-600', 'text-blue-700', 'bg-blue-50', 'font-bold');
      tab.classList.remove('text-slate-600', 'border-slate-200', 'bg-white');
      renderTable(tab.dataset.filter);
    });
  });
}

/* ==========================================================================
   Section 4: PPP Basket Table Rendering
   ========================================================================== */
function initPppBasketTable() {
  const container = document.getElementById('ppp-basket-body');
  if (!container || !window.NAVIGATOR_DATA) return;

  const basket = window.NAVIGATOR_DATA.pppBasket;
  container.innerHTML = '';

  basket.forEach(item => {
    const isTradable = item.type.includes('Tradable');
    const badgeColor = isTradable 
      ? 'bg-rose-50 text-rose-700 border-rose-200 font-medium' 
      : 'bg-blue-50 text-blue-700 border-blue-200 font-medium';

    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-100 hover:bg-blue-50/30 transition-colors';
    tr.innerHTML = `
      <td class="p-4">
        <div class="font-semibold text-slate-900">${item.item}</div>
        <span class="inline-block text-[11px] px-2 py-0.5 mt-1 rounded border ${badgeColor}">
          ${item.type}
        </span>
      </td>
      <td class="p-4 font-mono-num text-slate-800">
        $${item.usCostUsd.toLocaleString()} 
        <span class="text-xs text-slate-500">(₹${item.usCostInr.toLocaleString()})</span>
      </td>
      <td class="p-4 font-mono-num text-slate-800">
        ₹${item.indiaCostInr.toLocaleString()}
        <span class="text-xs text-slate-500">($${item.indiaCostUsd.toFixed(2)})</span>
      </td>
      <td class="p-4 font-bold ${isTradable ? 'text-rose-600' : 'text-blue-700'}">
        ${item.ratio}
      </td>
      <td class="p-4 text-xs text-slate-600 max-w-xs leading-relaxed">
        ${item.economicDriver}
      </td>
    `;
    container.appendChild(tr);
  });
}

/* ==========================================================================
   Section 3 / Calculators: Gadget "Days of Work" Calculator
   ========================================================================== */
function initDaysToIphoneCalculator() {
  const salaryInput = document.getElementById('calc-salary');
  const currencySelect = document.getElementById('calc-currency');
  const workingDaysInput = document.getElementById('calc-workdays');
  const productSelect = document.getElementById('calc-product-select');
  const customCostInput = document.getElementById('calc-custom-cost');
  const customCostWrapper = document.getElementById('calc-custom-cost-wrapper');

  // Outputs
  const outDays = document.getElementById('calc-out-days');
  const outHours = document.getElementById('calc-out-hours');
  const outIncomePct = document.getElementById('calc-out-income-pct');
  const outUsComparison = document.getElementById('calc-out-us-comp');
  const outProgressMeter = document.getElementById('calc-progress-fill');
  const outVerdict = document.getElementById('calc-verdict-text');

  if (!salaryInput || !outDays) return;

  const FX_RATES = {
    INR: 1,
    USD: 86.4,
    EUR: 93.5,
    GBP: 111.0
  };

  const PRODUCTS = {
    iphone16pro: { name: "iPhone 16 Pro (256 GB)", inr: 129900, usd: 1099 },
    iphone16promax: { name: "iPhone 16 Pro Max", inr: 144900, usd: 1199 },
    iphone16: { name: "iPhone 16 (Standard)", inr: 79900, usd: 799 },
    ps5slim: { name: "Sony PS5 Slim Disc", inr: 54990, usd: 499 },
    macbookpro14: { name: "MacBook Pro 14\" M3 Pro", inr: 199900, usd: 1999 },
    custom: { name: "Custom Product", inr: 100000, usd: 1160 }
  };

  productSelect.addEventListener('change', () => {
    if (productSelect.value === 'custom') {
      customCostWrapper.classList.remove('hidden');
    } else {
      customCostWrapper.classList.add('hidden');
    }
    compute();
  });

  function compute() {
    const rawSalary = parseFloat(salaryInput.value) || 0;
    const currency = currencySelect.value;
    const workDays = parseFloat(workingDaysInput.value) || 22;
    const selectedProdKey = productSelect.value;

    let productCostInr = 0;
    if (selectedProdKey === 'custom') {
      productCostInr = parseFloat(customCostInput.value) || 0;
    } else {
      productCostInr = PRODUCTS[selectedProdKey].inr;
    }

    // Convert salary to INR
    const monthlyNetSalaryInr = rawSalary * (FX_RATES[currency] || 1);

    if (monthlyNetSalaryInr <= 0 || workDays <= 0 || productCostInr <= 0) {
      outDays.textContent = "—";
      outHours.textContent = "—";
      outIncomePct.textContent = "—%";
      return;
    }

    const dailyNetInr = monthlyNetSalaryInr / workDays;
    const hourlyNetInr = dailyNetInr / 8;

    const daysNeeded = productCostInr / dailyNetInr;
    const hoursNeeded = productCostInr / hourlyNetInr;
    const pctOfMonthly = (productCostInr / monthlyNetSalaryInr) * 100;

    outDays.textContent = daysNeeded < 1 ? daysNeeded.toFixed(2) : daysNeeded.toFixed(1);
    outHours.textContent = Math.round(hoursNeeded).toLocaleString();
    outIncomePct.textContent = `${Math.round(pctOfMonthly)}% of monthly net`;

    // US comparison ratio
    const usSwedays = 2.4;
    const ratioToUs = (daysNeeded / usSwedays).toFixed(1);
    if (daysNeeded <= 3) {
      outUsComparison.textContent = `⚡ Global Tech Elite: At par with Silicon Valley Engineers (${daysNeeded.toFixed(1)} days vs ${usSwedays} days in US)!`;
      outUsComparison.className = "text-xs font-bold text-emerald-700";
    } else if (daysNeeded <= 8) {
      outUsComparison.textContent = `🚀 EU / Remote Benchmark: At par with Senior European Engineers (~6-8 days)`;
      outUsComparison.className = "text-xs font-bold text-blue-700";
    } else {
      outUsComparison.textContent = `⚠️ Purchasing Power Gap: Requires ${ratioToUs}x more work days than a US SWE (${daysNeeded.toFixed(1)} days vs ${usSwedays} days)`;
      outUsComparison.className = "text-xs font-bold text-amber-700";
    }

    // Progress meter (0 to 30 days scale)
    const meterPct = Math.min(100, Math.max(5, (daysNeeded / 35) * 100));
    outProgressMeter.style.width = `${meterPct}%`;

    // Verdict text
    if (daysNeeded <= 4) {
      outVerdict.textContent = "Target 2035 Parity Achieved! You can purchase modern flagship silicon with less than a single week's labor.";
    } else if (daysNeeded <= 12) {
      outVerdict.textContent = "2030 Transition Zone: Comfortable electronics purchasing power with moderate savings discipline.";
    } else {
      outVerdict.textContent = "2026 Structural Gap: Global silicon tradables command a heavy labor penalty under standard domestic wage structures.";
    }
  }

  [salaryInput, currencySelect, workingDaysInput, customCostInput].forEach(elem => {
    elem.addEventListener('input', compute);
  });

  compute();
}

/* ==========================================================================
   Section 3 / Calculators: Cross-Border Savings Simulator ("The 3-Year House Plan")
   ========================================================================== */
let houseChartInstance = null;

function initHousePlanSimulator() {
  const savingsInput = document.getElementById('house-savings');
  const currencySelect = document.getElementById('house-currency');
  const durationInput = document.getElementById('house-duration');
  const durationLabel = document.getElementById('house-duration-label');
  const depreciationInput = document.getElementById('house-depreciation');
  const depreciationLabel = document.getElementById('house-depreciation-label');
  const yieldInput = document.getElementById('house-yield');
  const yieldLabel = document.getElementById('house-yield-label');

  // Outputs
  const outCorpusInr = document.getElementById('house-out-corpus-inr');
  const outCorpusForeign = document.getElementById('house-out-corpus-foreign');
  const outFxKicker = document.getElementById('house-out-fx-kicker');
  const outTier1Pct = document.getElementById('house-out-tier1-pct');
  const outTier2Pct = document.getElementById('house-out-tier2-pct');
  const outTier1Fill = document.getElementById('house-out-tier1-fill');
  const outTier2Fill = document.getElementById('house-out-tier2-fill');

  if (!savingsInput || !outCorpusInr) return;

  const BASE_RATES = {
    USD: 86.4,
    EUR: 93.5,
    GBP: 111.0
  };

  function simulate() {
    const monthlySaving = parseFloat(savingsInput.value) || 0;
    const currency = currencySelect.value;
    const years = parseInt(durationInput.value) || 3;
    const annualDeprecPct = (parseFloat(depreciationInput.value) || 0) / 100;
    const annualYieldPct = (parseFloat(yieldInput.value) || 0) / 100;

    durationLabel.textContent = `${years} Year${years > 1 ? 's' : ''}`;
    depreciationLabel.textContent = `${(annualDeprecPct * 100).toFixed(1)}% p.a.`;
    yieldLabel.textContent = `${(annualYieldPct * 100).toFixed(1)}% p.a.`;

    const totalMonths = years * 12;
    const baseRate = BASE_RATES[currency] || 86.4;
    const monthlyYield = annualYieldPct / 12;
    const monthlyDeprec = annualDeprecPct / 12;

    let accumulatedForeign = 0;
    let accumulatedInr = 0;
    let baselineInrNoDeprec = 0;

    const chartLabels = [];
    const chartDataPrincipal = [];
    const chartDataTotalInr = [];

    let currentRate = baseRate;

    for (let m = 1; m <= totalMonths; m++) {
      currentRate *= (1 + monthlyDeprec);
      accumulatedForeign = (accumulatedForeign + monthlySaving) * (1 + monthlyYield);
      
      // INR conversion
      const thisMonthInrValue = monthlySaving * currentRate;
      accumulatedInr = (accumulatedInr + thisMonthInrValue) * (1 + monthlyYield);

      // Baseline without FX depreciation
      const thisMonthBaseInr = monthlySaving * baseRate;
      baselineInrNoDeprec = (baselineInrNoDeprec + thisMonthBaseInr) * (1 + monthlyYield);

      if (m % 6 === 0 || m === totalMonths) {
        chartLabels.push(`M${m}`);
        const totalPrincipalInr = (monthlySaving * m * baseRate) / 100000;
        const totalInrLakhs = accumulatedInr / 100000;
        chartDataPrincipal.push(Math.round(totalPrincipalInr));
        chartDataTotalInr.push(Math.round(totalInrLakhs));
      }
    }

    const fxKickerInr = Math.max(0, accumulatedInr - baselineInrNoDeprec);

    // Format outputs
    const corpusLakhs = accumulatedInr / 100000;
    const corpusCrores = accumulatedInr / 10000000;

    if (corpusCrores >= 1) {
      outCorpusInr.textContent = `₹${corpusCrores.toFixed(2)} Crores`;
    } else {
      outCorpusInr.textContent = `₹${corpusLakhs.toFixed(1)} Lakhs`;
    }

    outCorpusForeign.textContent = `${currency} ${Math.round(accumulatedForeign).toLocaleString()} accumulated`;
    outFxKicker.textContent = `+₹${(fxKickerInr / 100000).toFixed(1)}L gained purely via FX depreciation`;

    // Real Estate Benchmarks
    const tier1Cost = 15000000;
    const tier2Cost = 8500000;

    const t1Pct = Math.min(100, Math.round((accumulatedInr / tier1Cost) * 100));
    const t2Pct = Math.min(100, Math.round((accumulatedInr / tier2Cost) * 100));

    outTier1Pct.textContent = `${t1Pct}% Funded`;
    outTier2Pct.textContent = `${t2Pct}% Funded`;

    outTier1Fill.style.width = `${t1Pct}%`;
    outTier2Fill.style.width = `${t2Pct}%`;

    // Update Chart.js
    renderHouseChart(chartLabels, chartDataPrincipal, chartDataTotalInr);
  }

  function renderHouseChart(labels, principalData, totalData) {
    const canvas = document.getElementById('housePlanChart');
    if (!canvas || !window.Chart) return;

    if (houseChartInstance) {
      houseChartInstance.destroy();
    }

    const ctx = canvas.getContext('2d');
    houseChartInstance = new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total Accumulated Corpus (INR Lakhs)',
            data: totalData,
            borderColor: '#2563EB',
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.3,
            pointBackgroundColor: '#2563EB'
          },
          {
            label: 'Base Foreign Principal (At constant FX)',
            data: principalData,
            borderColor: '#94A3B8',
            borderDash: [5, 5],
            borderWidth: 1.5,
            fill: false,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#334155', font: { family: 'Plus Jakarta Sans', size: 12, weight: '600' } }
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ₹${context.raw} Lakhs`
            }
          }
        },
        scales: {
          x: {
            grid: { color: '#E2E8F0' },
            ticks: { color: '#64748B' }
          },
          y: {
            grid: { color: '#E2E8F0' },
            ticks: {
              color: '#64748B',
              callback: (val) => `₹${val}L`
            }
          }
        }
      }
    });
  }

  [savingsInput, currencySelect, durationInput, depreciationInput, yieldInput].forEach(elem => {
    elem.addEventListener('input', simulate);
  });

  simulate();
}

/* ==========================================================================
   Section 3: Remote Global Arbitrage & Section 44ADA Tax Engine
   ========================================================================== */
function initTaxArbitrageCalculator() {
  const annualUsdInput = document.getElementById('tax-usd-input');
  const usdValueLabel = document.getElementById('tax-usd-label');

  // Outputs
  const outGrossInr = document.getElementById('tax-out-gross-inr');
  const outDeemedProfit = document.getElementById('tax-out-deemed-profit');
  const out44adaTax = document.getElementById('tax-out-44ada-tax');
  const outEffectiveRate = document.getElementById('tax-out-effective-rate');
  const outSalariedTax = document.getElementById('tax-out-salaried-tax');
  const outAnnualSaved = document.getElementById('tax-out-annual-saved');

  if (!annualUsdInput || !outGrossInr) return;

  function calculateTax() {
    const usdRevenue = parseFloat(annualUsdInput.value) || 60000;
    usdValueLabel.textContent = `$${usdRevenue.toLocaleString()} USD`;

    const FX = 86.4;
    const grossInr = usdRevenue * FX;
    const deemedProfitInr = grossInr * 0.50;

    function computeNewRegimeTax(taxableIncome) {
      if (taxableIncome <= 700000) return 0;
      let tax = 0;
      if (taxableIncome > 1500000) {
        tax += (taxableIncome - 1500000) * 0.30;
        tax += 300000 * 0.20;
        tax += 200000 * 0.15;
        tax += 300000 * 0.10;
        tax += 400000 * 0.05;
      } else if (taxableIncome > 1200000) {
        tax += (taxableIncome - 1200000) * 0.20;
        tax += 200000 * 0.15;
        tax += 300000 * 0.10;
        tax += 400000 * 0.05;
      } else if (taxableIncome > 1000000) {
        tax += (taxableIncome - 1000000) * 0.15;
        tax += 300000 * 0.10;
        tax += 400000 * 0.05;
      } else if (taxableIncome > 700000) {
        tax += (taxableIncome - 700000) * 0.10;
        tax += 400000 * 0.05;
      }
      return tax * 1.04;
    }

    const tax44ada = computeNewRegimeTax(deemedProfitInr);
    const taxSalaried = computeNewRegimeTax(grossInr - 75000);

    const effectiveRate44ada = ((tax44ada / grossInr) * 100).toFixed(1);
    const effectiveRateSalaried = ((taxSalaried / grossInr) * 100).toFixed(1);
    const annualSavingsInr = Math.max(0, taxSalaried - tax44ada);

    outGrossInr.textContent = `₹${(grossInr / 100000).toFixed(2)} Lakhs`;
    outDeemedProfit.textContent = `₹${(deemedProfitInr / 100000).toFixed(2)} Lakhs`;
    out44adaTax.textContent = `₹${(tax44ada / 100000).toFixed(2)} Lakhs`;
    outEffectiveRate.textContent = `${effectiveRate44ada}% of Gross`;
    outSalariedTax.textContent = `₹${(taxSalaried / 100000).toFixed(2)}L (${effectiveRateSalaried}%)`;
    outAnnualSaved.textContent = `₹${(annualSavingsInr / 100000).toFixed(2)} Lakhs / yr`;
  }

  annualUsdInput.addEventListener('input', calculateTax);
  calculateTax();
}

/* ==========================================================================
   Section 4 Chart: The Path to the "4-Day iPhone" (2016 - 2035)
   ========================================================================== */
function initTimelineChart() {
  const canvas = document.getElementById('iphoneTimelineChart');
  if (!canvas || !window.Chart || !window.NAVIGATOR_DATA) return;

  const timeline = window.NAVIGATOR_DATA.iphoneDaysTimeline;
  const labels = timeline.map(t => `${t.year} (${t.model})`);
  const indiaDays = timeline.map(t => t.indiaDays);
  const usDays = timeline.map(t => t.usDays);

  const ctx = canvas.getContext('2d');
  new window.Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'India Tech Engineer (Days of Work)',
          data: indiaDays,
          backgroundColor: '#DC2626',
          borderColor: '#B91C1C',
          borderWidth: 1,
          borderRadius: 6
        },
        {
          label: 'US Tech Engineer (Days of Work)',
          data: usDays,
          backgroundColor: '#2563EB',
          borderColor: '#1D4ED8',
          borderWidth: 1,
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#334155', font: { family: 'Plus Jakarta Sans', size: 12, weight: '600' } }
        },
        tooltip: {
          callbacks: {
            afterBody: (context) => {
              const idx = context[0].dataIndex;
              return `Milestone: ${timeline[idx].fabMilestone}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: '#E2E8F0' },
          ticks: { color: '#64748B', font: { size: 11 } }
        },
        y: {
          grid: { color: '#E2E8F0' },
          ticks: {
            color: '#64748B',
            callback: (val) => `${val} Days`
          }
        }
      }
    }
  });
}

/* ==========================================================================
   Section 5 Chart: USD / INR Managed Float & The ₹100 Debate
   ========================================================================== */
function initFxMacroChart() {
  const canvas = document.getElementById('fxMacroChart');
  if (!canvas || !window.Chart || !window.NAVIGATOR_DATA) return;

  const data = window.NAVIGATOR_DATA.usdInrHistory;
  const labels = data.map(d => d.year);
  const rates = data.map(d => d.rate);

  const ctx = canvas.getContext('2d');
  new window.Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'USD / INR Exchange Rate (RBI Managed Float)',
          data: rates,
          borderColor: '#1D4ED8',
          backgroundColor: 'rgba(37, 99, 235, 0.08)',
          borderWidth: 3,
          fill: true,
          tension: 0.25,
          pointRadius: 4,
          pointBackgroundColor: rates.map((r, idx) => data[idx].year >= 2028 ? '#D97706' : '#1D4ED8')
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#334155', font: { family: 'Plus Jakarta Sans', size: 12, weight: '600' } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `1 USD = ₹${ctx.raw}`,
            afterBody: (context) => {
              const idx = context[0].dataIndex;
              return `Macro Context: ${data[idx].event}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: '#E2E8F0' },
          ticks: { color: '#64748B' }
        },
        y: {
          grid: { color: '#E2E8F0' },
          ticks: {
            color: '#64748B',
            callback: (val) => `₹${val}`
          }
        }
      }
    }
  });
}

/* ==========================================================================
   Section 7: Expandable FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById('faq-container');
  if (!container || !window.NAVIGATOR_DATA) return;

  const faqs = window.NAVIGATOR_DATA.faqs;
  container.innerHTML = '';

  faqs.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'glass-card border border-slate-200 rounded-xl overflow-hidden bg-white';

    card.innerHTML = `
      <button class="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-700 transition-colors focus:outline-none" aria-expanded="false" data-faq="${index}">
        <span class="flex items-center gap-3">
          <span class="text-xs px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-mono-num font-bold border border-blue-200">Q${index + 1}</span>
          ${item.q}
        </span>
        <i data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform duration-300"></i>
      </button>
      <div class="accordion-content px-5 pb-5 text-sm text-slate-700 leading-relaxed border-t border-slate-100 hidden bg-slate-50/50">
        <p class="pt-4">${item.a}</p>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();

  container.querySelectorAll('button[data-faq]').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('[data-lucide="chevron-down"]');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

/* ==========================================================================
   Interactive Modals (Formulas & Compliance)
   ========================================================================== */
function initModals() {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !modalCloseBtn) return;

  const MODAL_CONTENT = {
    pppFormula: {
      title: "Mathematical Foundations: Purchasing Power Parity (PPP) & Balassa-Samuelson",
      content: `
        <div class="space-y-4 text-sm text-slate-700">
          <div class="p-4 bg-blue-50/70 rounded-lg border border-blue-200 font-mono-num text-blue-900 font-semibold">
            P_PPP = P_domestic / P_foreign<br>
            S_PPP = (P_non_tradable^α * P_tradable^(1-α))_IN / (P_non_tradable^α * P_tradable^(1-α))_US
          </div>
          <p><strong class="text-slate-900">Why Tradables Don't Obey Local PPP:</strong></p>
          <p>The Law of One Price (LOOP) holds strictly for tradable goods with low transportation costs: <code>P_tradable(Domestic) = E × P_tradable(Foreign) + Tariffs + Taxes</code>.</p>
          <p>Because Apple cannot prevent gray-market export, selling an iPhone for ₹25,000 in India while it sells for $1,000 in the US would result in instantaneous global supply arbitrage. Therefore, global tradable prices stay pinned to international dollar prices, while domestic services (haircuts, rent, domestic help) stay pinned to local labor productivity.</p>
        </div>
      `
    },
    taxFormula: {
      title: "Section 44ADA Presumptive Taxation Framework",
      content: `
        <div class="space-y-4 text-sm text-slate-700">
          <div class="p-4 bg-emerald-50/70 rounded-lg border border-emerald-200 font-mono-num text-emerald-900 font-semibold">
            Deemed Taxable Profit = 50% of Gross Professional Receipts<br>
            Threshold: Gross Receipts ≤ ₹75,00,000 (if 95%+ digital/banking)
          </div>
          <p><strong class="text-slate-900">Key Statutory Conditions:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Applicable to specified professionals: Software Engineers, IT Consultants, Technical Architects, Accountants, Designers (Section 44AA(1)).</li>
            <li>No requirement to maintain formal books of accounts (Section 44AA) or get books audited (Section 44AB).</li>
            <li>Export of services is treated as a Zero-Rated Supply under GST Section 16 of the IGST Act, provided an online Letter of Undertaking (LUT) is submitted annually on the GST portal.</li>
          </ul>
        </div>
      `
    },
    benamiRules: {
      title: "The Benami Transactions (Prohibition) Amendment Act, 2016",
      content: `
        <div class="space-y-4 text-sm text-slate-700">
          <div class="p-4 bg-rose-50/80 rounded-lg border border-rose-200 font-mono-num text-rose-900 font-semibold">
            Section 2(8): Any transaction where property is transferred to one person for a consideration provided by another person, held for the immediate or future benefit of the provider.
          </div>
          <p><strong class="text-slate-900">Mandatory Consequences of Conviction:</strong></p>
          <ul class="list-disc pl-5 space-y-2">
            <li><span class="text-rose-700 font-bold">Asset Confiscation:</span> Confiscation of the property by the Adjudicating Authority; no compensation is payable.</li>
            <li><span class="text-rose-700 font-bold">Rigorous Imprisonment:</span> Minimum 1 year, extendable up to 7 years.</li>
            <li><span class="text-rose-700 font-bold">Civil Immunity Bar:</span> Section 4 strictly prohibits the NRI from filing any civil suit or claim to recover the property.</li>
          </ul>
        </div>
      `
    }
  };

  function openModal(key) {
    const data = MODAL_CONTENT[key];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.content;
    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Attach modal trigger buttons
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(btn.dataset.modal);
    });
  });
}
