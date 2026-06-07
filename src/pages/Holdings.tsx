import React, { useState, useMemo } from 'react';
import { 
  SAAR_CONVENIENCE_DATA, 
  WRAP_REPUBLIC_BRAND, 
  MORNING_CRUMBS_BRAND 
} from '../data/companyData';
import { 
  Cpu, 
  CheckCircle, 
  MapPin, 
  Sliders, 
  Coffee, 
  Utensils, 
  Activity, 
  ArrowUpRight, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Send, 
  Clock, 
  CheckCircle2, 
  X, 
  Terminal, 
  Layers3, 
  TrendingUp, 
  Smartphone, 
  Info 
} from 'lucide-react';

const SAMPLE_PRODUCTS = [
  { id: 'staple-1', name: 'Premium Organic Milk (1L)', price: 1.80, category: 'Grocery Staples', daysToExpiry: 6 },
  { id: 'fresh-1', name: 'Fresh Scottish Strawberry Punnet', price: 3.50, category: 'Fresh & Chilled', daysToExpiry: 3 },
  { id: 'bev-1', name: 'SAAR Gold Brewed Coffee (250ml)', price: 2.75, category: 'Beverages', daysToExpiry: 12 },
  { id: 'snack-1', name: 'Hand-Cut Highland Salt Crisps', price: 1.45, category: 'Snacks', daysToExpiry: 30 },
  { id: 'meal-1', name: 'Artisanal Chilled Salmon Ready Meal', price: 7.95, category: 'Fresh & Chilled', daysToExpiry: 1 },
];

export default function Holdings() {
  // Navigation tab switcher state
  const [activeSegment, setActiveSegment] = useState<'convenience' | 'wrap' | 'crumbs' | 'intelligence' | 'future'>('convenience');

  // Simulator operational state variables
  const [weatherState, setWeatherState] = useState<'sun' | 'rain' | 'snow'>('sun');
  const [isMatchDay, setIsMatchDay] = useState<boolean>(false);
  const [isPaydayCycle, setIsPaydayCycle] = useState<boolean>(false);
  const [expiryDaysLeft, setExpiryDaysLeft] = useState<number>(3);
  const [deliveryMiles, setDeliveryMiles] = useState<number>(2.5);
  const [basket, setBasket] = useState<{ [id: string]: number }>({
    'fresh-1': 1,
    'bev-1': 2
  });

  // Additional 6-Module Simulator State variables
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<'morning' | 'afternoon' | 'night'>('afternoon');
  const [demographicZone, setDemographicZone] = useState<'residential' | 'suburban' | 'student'>('residential');
  const [currentStockLevel, setCurrentStockLevel] = useState<number>(45);
  const [reorderThreshold, setReorderThreshold] = useState<number>(25);
  const [competitorPriceLevel, setCompetitorPriceLevel] = useState<'low' | 'matched' | 'premium'>('matched');
  const [riderAvailability, setRiderAvailability] = useState<'low' | 'normal' | 'high'>('normal');
  const [deliveryDemandSurge, setDeliveryDemandSurge] = useState<'low' | 'medium' | 'peak'>('medium');
  const [activeModuleTab, setActiveModuleTab] = useState<number>(1);

  // Derived simulator values
  const demandMulti = useMemo(() => {
    let base = 1.0;
    if (weatherState === 'rain') base += 0.25;
    if (weatherState === 'snow') base += 0.40;
    if (isMatchDay) base += 0.55;
    if (isPaydayCycle) base += 0.30;
    return parseFloat(base.toFixed(2));
  }, [weatherState, isMatchDay, isPaydayCycle]);

  const activePromoSalmon = useMemo(() => {
    const originalPrice = 7.95;
    let discount = 0;
    if (expiryDaysLeft === 2) discount = 15;
    if (expiryDaysLeft === 1) discount = 35;
    if (expiryDaysLeft === 0) discount = 65;
    const finalPrice = originalPrice * (1 - discount / 100);
    return {
      original: originalPrice,
      discountPct: discount,
      current: parseFloat(finalPrice.toFixed(2))
    };
  }, [expiryDaysLeft]);

  const basketSubtotal = useMemo(() => {
    let sum = 0;
    SAMPLE_PRODUCTS.forEach(p => {
      const quantity = basket[p.id] || 0;
      sum += quantity * p.price;
    });
    return parseFloat(sum.toFixed(2));
  }, [basket]);

  const lastMileCharge = useMemo(() => {
    const baseFee = 2.50;
    const distanceCost = deliveryMiles * 0.75;
    let surge = 1.0;
    if (weatherState !== 'sun') surge += 0.20;
    if (isMatchDay) surge += 0.35;
    return parseFloat(((baseFee + distanceCost) * surge).toFixed(2));
  }, [deliveryMiles, weatherState, isMatchDay]);

  // Derived 6-Module Advanced Calculations
  const m1Calculations = useMemo(() => {
    let baseOrders = 45;
    if (demographicZone === 'residential') {
      if (selectedTimeOfDay === 'morning') baseOrders = 35;
      else if (selectedTimeOfDay === 'afternoon') baseOrders = 45;
      else baseOrders = 60;
    } else if (demographicZone === 'suburban') {
      if (selectedTimeOfDay === 'morning') baseOrders = 65;
      else if (selectedTimeOfDay === 'afternoon') baseOrders = 40;
      else baseOrders = 35;
    } else {
      if (selectedTimeOfDay === 'morning') baseOrders = 20;
      else if (selectedTimeOfDay === 'afternoon') baseOrders = 55;
      else baseOrders = 90;
    }

    let multi = 1.0;
    if (weatherState === 'rain') multi += 0.15;
    if (weatherState === 'snow') multi += 0.30;
    if (isMatchDay) multi += 0.55;
    if (isPaydayCycle) multi += 0.25;

    const predictedOrders = Math.round(baseOrders * multi);
    
    let confidence = 94.6;
    if (weatherState === 'snow') confidence -= 2.1;
    if (isMatchDay) confidence -= 1.5;
    if (selectedTimeOfDay === 'night') confidence += 0.8;
    confidence = Math.min(Math.max(confidence, 91.2), 98.7);

    let staplesPct = 40, freshPct = 35, otherPct = 25;
    if (selectedTimeOfDay === 'morning') {
      staplesPct = 55; freshPct = 30; otherPct = 15;
    } else if (selectedTimeOfDay === 'night') {
      staplesPct = 20; freshPct = 15; otherPct = 65;
    }

    return {
      predictedOrders,
      confidence: parseFloat(confidence.toFixed(1)),
      multi: parseFloat(multi.toFixed(2)),
      staplesPct,
      freshPct,
      otherPct
    };
  }, [demographicZone, selectedTimeOfDay, weatherState, isMatchDay, isPaydayCycle]);

  const m2Calculations = useMemo(() => {
    const isTriggered = currentStockLevel <= reorderThreshold;
    const requiredCoverage = 100 - currentStockLevel;
    const unitsToOrder = Math.ceil(requiredCoverage * 1.5);
    const unitPrice = 2.10;
    const totalCost = unitsToOrder * unitPrice;
    
    let etaMins = 25;
    if (riderAvailability === 'low') etaMins += 15;
    if (riderAvailability === 'high') etaMins -= 7;
    if (weatherState === 'snow') etaMins += 20;
    if (weatherState === 'rain') etaMins += 8;
    etaMins = Math.max(etaMins, 10);

    return {
      isTriggered,
      unitsToOrder,
      totalCost: parseFloat(totalCost.toFixed(2)),
      etaMins,
      sku: "Scottish Strawberry Punnets (Tray x12)",
      supplier: "United Wholesale Scotland (Glasgow Depot)"
    };
  }, [currentStockLevel, reorderThreshold, riderAvailability, weatherState]);

  const m3Calculations = useMemo(() => {
    const originalPrice = 7.95;
    let expiryDiscount = 0;
    if (expiryDaysLeft === 3) expiryDiscount = 5;
    else if (expiryDaysLeft === 2) expiryDiscount = 15;
    else if (expiryDaysLeft === 1) expiryDiscount = 35;
    else if (expiryDaysLeft === 0) expiryDiscount = 65;

    let competitorAdjustment = 0;
    if (competitorPriceLevel === 'low') competitorAdjustment = -0.50;
    if (competitorPriceLevel === 'premium') competitorAdjustment = 0.75;

    const baseAdjusted = originalPrice + competitorAdjustment;
    const finalPrice = Math.max(1.99, baseAdjusted * (1 - expiryDiscount / 100));
    const savedPct = Math.round(((originalPrice - finalPrice) / originalPrice) * 100);

    return {
      originalPrice,
      expiryDiscount,
      finalPrice: parseFloat(finalPrice.toFixed(2)),
      discountPct: savedPct > 0 ? savedPct : 0,
      competitorPrice: parseFloat((originalPrice - 0.20 + competitorAdjustment).toFixed(2))
    };
  }, [expiryDaysLeft, competitorPriceLevel]);

  const m4Calculations = useMemo(() => {
    const itemsCount = Object.keys(basket).length;
    let dynamicCrossSell = "Artisanal Scottish Bakery Box";
    let extraDiscountTrigger = "Spend £" + Math.max(0, (15 - basketSubtotal)).toFixed(2) + " more to unlock group-wide 10% cash savings!";
    
    if (selectedTimeOfDay === 'morning') {
      dynamicCrossSell = "Morning Crumbs Espresso Brew";
    } else if (selectedTimeOfDay === 'night') {
      dynamicCrossSell = "Late-Night Crunch Combo Pack";
    }

    const hasIncentiveUnlocked = basketSubtotal >= 15;

    return {
      itemsCount,
      dynamicCrossSell,
      extraDiscountTrigger,
      hasIncentiveUnlocked
    };
  }, [basket, basketSubtotal, selectedTimeOfDay]);

  const m5Calculations = useMemo(() => {
    const baseFee = 1.95;
    const mileRate = 0.55;
    const distanceCharge = deliveryMiles * mileRate;
    
    let surgeonFactor = 1.0;
    if (deliveryDemandSurge === 'medium') surgeonFactor = 1.25;
    else if (deliveryDemandSurge === 'peak') surgeonFactor = 1.65;

    let riderSurcharge = 0;
    if (riderAvailability === 'low') riderSurcharge = 1.50;
    else if (riderAvailability === 'high') riderSurcharge = -0.50;

    const calculatedTotal = ((baseFee + distanceCharge) * surgeonFactor) + riderSurcharge;
    const finalFee = Math.max(1.50, parseFloat(calculatedTotal.toFixed(2)));

    return {
      baseFee,
      distanceCharge: parseFloat(distanceCharge.toFixed(2)),
      surgeMultiplier: surgeonFactor,
      riderSurcharge,
      finalFee
    };
  }, [deliveryMiles, deliveryDemandSurge, riderAvailability]);

  const m6Calculations = useMemo(() => {
    const dailyVolume = m1Calculations.predictedOrders * 18;
    const baseAOV = 12.50;
    const paydayIncr = isPaydayCycle ? 3.50 : 0;
    const matchDayIncr = isMatchDay ? 2.20 : 0;
    const aovBoost = (m4Calculations.hasIncentiveUnlocked ? 1.85 : 0.45);
    const simulatedAOV = baseAOV + paydayIncr + matchDayIncr + aovBoost;

    let wastageRate = 9.8;
    if (m3Calculations.discountPct > 10) {
      wastageRate = 1.8;
    } else if (expiryDaysLeft <= 1) {
      wastageRate = 12.4;
    }

    const dailyRevenue = dailyVolume * simulatedAOV;

    return {
      dailyVolume,
      simulatedAOV: parseFloat(simulatedAOV.toFixed(2)),
      wastageRate: parseFloat(wastageRate.toFixed(1)),
      dailyRevenue: parseFloat(dailyRevenue.toFixed(2))
    };
  }, [m1Calculations, isPaydayCycle, isMatchDay, m4Calculations, m3Calculations, expiryDaysLeft]);



  const handleAdd = (id: string) => {
    setBasket(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleSub = (id: string) => {
    setBasket(prev => {
      const copy = { ...prev };
      if (copy[id] > 1) copy[id]--;
      else delete copy[id];
      return copy;
    });
  };

  return (
    <div className="bg-[#FAF9F5] py-20 min-h-screen text-slate-800 animate-fade-in text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Elite Branding Header */}
        <div className="text-left max-w-4xl mb-14 relative">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 bg-[#FAF3E5] border border-[#EAC282]/40">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A8892A] font-extrabold flex items-center gap-1.5">
              <span>⚜️</span> SAAR STRATEGIC VENTURE INDEX
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Corporate Holdings &amp; Subsidiary Ecosystem
          </h1>
          <p className="text-slate-700 font-light text-base md:text-lg mt-4 leading-relaxed">
            SAAR Holdings Ltd operates as the ultimate parent entity over wholly owned high-street brands, physical delivery grids, and machine learning software layers. Inspect our subsidiary divisions below via our interactive workspace platform.
          </p>
        </div>

        {/* REIMAGINED INTERACTIVE DESK: 2 Column Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT SIDE: Segment Navigation Sidebar */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest block pl-1">
              Select Operating Sector
            </span>

            <div className="flex flex-col gap-2.5">
              {/* Sector Switcher Button Array */}
              {[
                {
                  id: 'convenience',
                  name: 'SAAR Convenience Store',
                  status: 'ACTIVE OPERATIONS',
                  icon: '🛒',
                  statusTheme: 'text-emerald-700 bg-emerald-50 border-emerald-200'
                },
                {
                  id: 'wrap',
                  name: 'Wrap Republic Project',
                  status: 'SETUP / STAGING',
                  icon: '🌯',
                  statusTheme: 'text-cyan-700 bg-cyan-50 border-cyan-200'
                },
                {
                  id: 'crumbs',
                  name: 'Morning Crumbs Bakery',
                  status: 'CONCEPT MODEL',
                  icon: '🥐',
                  statusTheme: 'text-purple-700 bg-purple-50 border-[#EAC282]/30'
                },
                {
                  id: 'intelligence',
                  name: 'SAAR Intelligence IP',
                  status: 'TECH SPIN-OUT',
                  icon: '🧠',
                  statusTheme: 'text-amber-700 bg-amber-50 border-amber-200'
                },
                {
                  id: 'future',
                  name: 'Logistical Pipeline Tranches',
                  status: 'MEDIUM TERM SCALE',
                  icon: '🔮',
                  statusTheme: 'text-slate-600 bg-slate-50 border-slate-205'
                }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSegment(tab.id as any)}
                  className={`w-full p-5 text-left border cursor-pointer transition-all duration-300 relative group flex gap-4 items-center ${
                    activeSegment === tab.id
                      ? 'bg-slate-950 text-white border-slate-950 shadow-2xl translate-x-2'
                      : 'bg-white text-slate-800 border-slate-205 hover:bg-slate-50 hover:border-[#A8892A]/50'
                  }`}
                >
                  {/* Left Icon: Larger round frame */}
                  <div className={`w-14 h-14 rounded-full border flex items-center justify-center text-2xl shrink-0 transition-colors ${
                    activeSegment === tab.id
                      ? 'bg-[#A8892A]/20 border-[#A8892A]/50 text-[#EAC282]'
                      : 'bg-[#FAF6EE] border-[#A8892A]/30 text-slate-950 group-hover:border-[#A8892A]/60'
                  }`}>
                    {tab.icon}
                  </div>

                  {/* Right Meta Data & Name */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 mb-2">
                      <span className={`text-[10px] font-mono font-extrabold tracking-wider px-3 py-1 border uppercase leading-none rounded-xs shrink-0 ${
                        activeSegment === tab.id
                          ? 'text-[#EAC282] bg-slate-900 border-[#A8892A]/55'
                          : tab.statusTheme
                      }`}>
                        {tab.icon} {tab.status}
                      </span>
                      {activeSegment === tab.id && (
                        <span className="text-[#A8892A] text-sm font-mono shrink-0">●</span>
                      )}
                    </div>
                    
                    <h4 className={`font-serif text-base md:text-lg font-black leading-tight ${
                      activeSegment === tab.id ? 'text-white' : 'text-slate-950'
                    }`}>
                      {tab.name}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Governance Reference Box */}
            <div className="bg-slate-900 text-slate-100 p-6 border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-[#A8892A] uppercase tracking-[0.2em] font-bold block">
                CONSOLIDATION MATRIX
              </span>
              <p className="text-xs text-slate-400 leading-normal font-light">
                All business accounting parameters, asset valuations, and physical leases are consolidated under secure Scottish administrative indices.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#A8892A] font-mono uppercase font-bold border-t border-slate-800 pt-3">
                <ShieldCheck size={11} /> 100% REGULATED PORTFOLIO
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Workspace Content Area */}
          <div className="lg:col-span-9 bg-white border border-slate-200 shadow-sm p-6 sm:p-10 relative overflow-hidden flex flex-col justify-between">
            {/* Elegant visual orientation ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A8892A]"></div>

            {/* SEGMENT 1: SAAR CONVENIENCE STORE LIMITED */}
            {activeSegment === 'convenience' && (
              <div className="space-y-8 animate-fade-in text-left">
                
                {/* Visual Header and Meta */}
                <div className="border-b border-slate-100 pb-5 space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A8892A] uppercase font-bold tracking-widest">
                    <span>🛒</span> ACTIVE REGISTERED SUBSIDIARY
                  </div>
                  <h2 className="font-serif text-3xl font-black text-slate-950">
                    {SAAR_CONVENIENCE_DATA.name}
                  </h2>
                  <p className="text-sm text-slate-500 font-mono">
                    Company Registered No. <strong className="font-bold text-slate-950">{SAAR_CONVENIENCE_DATA.registration}</strong> · Siting Focus Core
                  </p>
                </div>

                {/* Grid Overview Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
                  <div className="space-y-4">
                    <h4 className="font-serif text-lg font-bold text-[#A8892A]">Strategic Mission Brief:</h4>
                    <p className="text-base text-slate-800 font-light leading-relaxed">
                      {SAAR_CONVENIENCE_DATA.mission}
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      "By decoupling daily supply stocking logistics onto synchronized regional dark storefront hubs, we establish high margin outcomes with near 0% systemic food waste."
                    </p>
                  </div>

                  {/* Micro Quick Stats Map box */}
                  <div className="bg-[#FAF9F5] p-5 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400 font-bold block uppercase mb-1.5">CONVENIENCE STORES METRICS</span>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 border border-slate-200/80">
                          <span className="text-xs text-slate-500 block font-mono">Current Val:</span>
                          <span className="text-base font-bold text-slate-950">£120,000</span>
                        </div>
                        <div className="bg-white p-3 border border-slate-205">
                          <span className="text-xs text-slate-500 block font-mono">Active Hubs:</span>
                          <span className="text-base font-bold text-[#A8892A]">2 Pilot Sited</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 font-mono mt-4 pt-4 border-t border-slate-200/60 leading-tight">
                      💼 Authorized Wholesaler: <strong>United Wholesale Scotland</strong>
                    </div>
                  </div>
                </div>

                {/* Sited Pilot locations list */}
                <div className="space-y-6 pt-6 border-t border-slate-100/80">
                  <h3 className="font-serif text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2">
                    <span>📍</span> Active Sited Grocery Pilot Hubs (Walk-In &amp; Dark Stores)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SAAR_CONVENIENCE_DATA.pilots.map((pilot, idx) => (
                      <div key={idx} className="bg-[#FCFAF6] border-2 border-slate-200 p-6 relative overflow-hidden flex flex-col justify-between hover:border-[#A8892A] hover:bg-white transition-all shadow-xs group">
                        {/* Soft visual watermark pin inside card */}
                        <div className="absolute -bottom-4 -right-4 text-[#A8892A]/5 pointer-events-none text-8xl font-black transition-transform group-hover:scale-110">
                          📍
                        </div>

                        <div>
                          <span className="text-xs font-mono font-black text-[#A8892A] bg-amber-50 border border-[#EAC282]/40 rounded-xs px-2.5 py-1 uppercase tracking-wider inline-block mb-3">
                            🛡️ {pilot.type}
                          </span>
                          <h4 className="font-serif font-black text-slate-950 text-lg md:text-xl mb-2 group-hover:text-[#A8892A] transition-colors">{pilot.name}</h4>
                          <p className="text-sm text-[#A8892A] font-semibold font-mono flex items-center gap-2 mb-3.5">
                            <MapPin size={14} className="shrink-0" /> {pilot.address}
                          </p>
                          <p className="text-sm text-slate-700 font-light leading-relaxed">
                            {pilot.description}
                          </p>
                        </div>
                        
                        <div className="text-[10px] font-mono text-slate-400 mt-5 pt-3 border-t border-slate-100 uppercase tracking-widest">
                          Operational Status: 100% Configured Live
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SAAR-INT SIMULATOR PANEL */}
                <div className="bg-white border-2 border-[#EAC282]/50 shadow-lg p-6 md:p-8 mt-6 relative overflow-hidden text-slate-900">
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#FAF3E5] rounded-full blur-2xl pointer-events-none opacity-40"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-150">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-[#FAF6EE] border border-[#A8892A]/35 text-[#A8892A]">
                        <Cpu size={18} />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-black text-slate-950 tracking-tight">
                        SAAR-INT Central Cognitive Simulator
                      </h3>
                    </div>
                    <div className="inline-flex gap-1.5 items-center px-3 py-1 bg-[#FAF6EE] border border-[#EAC282]/30 rounded-xs text-xs font-mono font-bold text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      SYSTEM STATUS: ONLINE
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-slate-750 font-light leading-relaxed mb-8 text-left max-w-4xl">
                    See how physical inputs on SAAR server algorithms automatically modify price tags, regional demand, and last-mile carrier fees. Toggle physical environments, inventory metrics, and competition parameters below to watch each module optimize live.
                  </p>

                  <div className="flex flex-col gap-6 text-left w-full">
                    {/* Controls Panel - Full Width Modular Horizontal Sub-grid */}
                    <div className="w-full bg-[#FCFBF8] border border-slate-205 p-6 md:p-8 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-150 pb-4">
                        <span className="text-sm font-sans text-slate-950 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                          Live SAAR-INT Model Controls
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-bold bg-[#FAF6EE] px-2.5 py-1 rounded-xs border border-[#EAC282]/30 inline-block">
                          INPUT CONTROLS PANEL · ACTIVE SIMULATION
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {/* Column 1: Climatic & Temporal Variables */}
                        <div className="space-y-4">
                          {/* Climate Switcher */}
                          <div className="space-y-2 text-left">
                            <label className="block text-xs font-mono text-slate-700 font-extrabold uppercase tracking-wide">Climate Scenario:</label>
                            <div className="grid grid-cols-3 gap-1">
                              {[
                                { id: 'sun', label: '☀️ Sun' },
                                { id: 'rain', label: '☔ Rain' },
                                { id: 'snow', label: '❄️ Cold' }
                              ].map((c) => (
                                <button
                                  key={c.id}
                                  onClick={() => setWeatherState(c.id as any)}
                                  className={`text-xs font-mono py-2 text-center transition-all cursor-pointer ${
                                    weatherState === c.id 
                                      ? 'bg-[#A8892A] text-white font-black shadow-3xs' 
                                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                  }`}
                                >
                                  {c.label}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Time of Day */}
                          <div className="space-y-2 text-left">
                            <label className="block text-xs font-mono text-slate-700 font-extrabold uppercase tracking-wide">Time of Day Interval:</label>
                            <div className="grid grid-cols-3 gap-1">
                              {[
                                { id: 'morning', label: '🌅 Morning' },
                                { id: 'afternoon', label: '☀️ Noon' },
                                { id: 'night', label: '🌙 Late' }
                              ].map((t) => (
                                <button
                                  key={t.id}
                                  onClick={() => setSelectedTimeOfDay(t.id as any)}
                                  className={`text-xs font-mono py-2 text-center transition-all cursor-pointer ${
                                    selectedTimeOfDay === t.id 
                                      ? 'bg-slate-900 text-white font-black' 
                                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                  }`}
                                >
                                  {t.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Column 2: Demographic Matrix & Events */}
                        <div className="space-y-4">
                          {/* Store Site Profile Zone */}
                          <div className="space-y-2 text-left">
                            <label className="block text-xs font-mono text-slate-700 font-extrabold uppercase tracking-wide">Demographic Zone Matrix:</label>
                            <select 
                              className="w-full text-xs font-mono bg-white border border-slate-200 p-2 text-slate-800 outline-none focus:border-[#A8892A] cursor-pointer"
                              value={demographicZone}
                              onChange={(e) => setDemographicZone(e.target.value as any)}
                            >
                              <option value="residential">🏡 Glasgow Southside Residential (High-end)</option>
                              <option value="suburban">🚗 Dunblane Suburban Commuter (Families)</option>
                              <option value="student">🎓 Stirling University Hub (Students &amp; Nightlife)</option>
                            </select>
                          </div>

                          {/* Surges Checkboxes */}
                          <div className="space-y-2 text-left">
                            <label className="block text-xs font-mono text-slate-700 font-extrabold uppercase tracking-wide">Dynamic Market Surges:</label>
                            <div className="grid grid-cols-2 gap-2">
                              <label className="border border-slate-200 p-2 bg-white flex items-center gap-1.5 cursor-pointer hover:bg-slate-50 transition-colors">
                                <input 
                                  type="checkbox" 
                                  checked={isMatchDay} 
                                  onChange={(e) => setIsMatchDay(e.target.checked)}
                                  className="accent-[#A8892A] w-3.5 h-3.5 cursor-pointer"
                                />
                                <div className="text-left select-none leading-none">
                                  <span className="block text-[10px] font-bold text-slate-800">Match Day</span>
                                  <span className="text-[9px] font-mono text-slate-400 block mt-0.5">Uplift demand</span>
                                </div>
                              </label>

                              <label className="border border-slate-200 p-2 bg-white flex items-center gap-1.5 cursor-pointer hover:bg-slate-50 transition-colors">
                                <input 
                                  type="checkbox" 
                                  checked={isPaydayCycle} 
                                  onChange={(e) => setIsPaydayCycle(e.target.checked)}
                                  className="accent-[#A8892A] w-3.5 h-3.5 cursor-pointer"
                                />
                                <div className="text-left select-none leading-none font-bold">
                                  <span className="block text-[10px] font-bold text-slate-800">Payday</span>
                                  <span className="text-[9px] font-mono text-slate-400 block mt-0.5">Yield scale</span>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Column 3: Stocking & Threshold Limits */}
                        <div className="space-y-4">
                          <label className="block text-xs font-mono text-slate-700 font-extrabold uppercase tracking-wide">Stocking &amp; Levels:</label>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-slate-600">Current Stock Level:</span>
                              <span className={`font-black ${currentStockLevel <= reorderThreshold ? 'text-red-500 font-extrabold' : 'text-slate-700'}`}>{currentStockLevel}%</span>
                            </div>
                            <input 
                              type="range" 
                              min="5" 
                              max="95" 
                              step="5"
                              value={currentStockLevel}
                              onChange={(e) => setCurrentStockLevel(Number(e.target.value))}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#A8892A]" 
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-slate-600">Reorder Threshold:</span>
                              <span className="text-slate-700 font-bold">{reorderThreshold}%</span>
                            </div>
                            <input 
                              type="range" 
                              min="10" 
                              max="50" 
                              step="5"
                              value={reorderThreshold}
                              onChange={(e) => setReorderThreshold(Number(e.target.value))}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700" 
                            />
                          </div>
                        </div>

                        {/* Column 4: Expiry, Competition & Routing */}
                        <div className="space-y-4">
                          <label className="block text-xs font-mono text-slate-700 font-extrabold uppercase tracking-wide">Expiry, Competitors &amp; Distance:</label>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-slate-600">Inventory Expiry Level:</span>
                              <span className="text-[#A8892A] font-extrabold uppercase">{expiryDaysLeft} Days Left</span>
                            </div>
                            <input 
                              type="range" 
                              min="0" 
                              max="3" 
                              step="1"
                              value={expiryDaysLeft}
                              onChange={(e) => setExpiryDaysLeft(Number(e.target.value))}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#A8892A]" 
                            />
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-slate-600">Competitor Price Level:</span>
                              <span className="text-slate-700 font-bold uppercase">{competitorPriceLevel}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                              {['low', 'matched', 'premium'].map(level => (
                                <button
                                  key={level}
                                  onClick={() => setCompetitorPriceLevel(level as any)}
                                  className={`text-[9px] font-mono py-1.5 border transition-all cursor-pointer ${
                                    competitorPriceLevel === level 
                                      ? 'bg-slate-900 border-slate-900 text-white font-extrabold' 
                                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                  }`}
                                >
                                  {level.toUpperCase()}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-slate-600">Delivery Distance:</span>
                              <span className="text-slate-700 font-bold">{deliveryMiles} Miles</span>
                            </div>
                            <input 
                              type="range" 
                              min="0.5" 
                              max="6.0" 
                              step="0.5"
                              value={deliveryMiles}
                              onChange={(e) => setDeliveryMiles(Number(e.target.value))}
                              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#A8892A]" 
                            />
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Active Decisions Output Modules View */}
                    <div className="w-full space-y-4">
                      
                      {/* Interactive Module Tab Headers */}
                      <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider block pl-1">
                        Inspect AI Decisions Core (6 Modules)
                      </span>

                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 border-b border-slate-200 pb-2">
                        {[
                          { tab: 1, icon: '📊', short: 'M1', name: 'Demand' },
                          { tab: 2, icon: '📦', short: 'M2', name: 'Procure' },
                          { tab: 3, icon: '🏷️', short: 'M3', name: 'Pricing' },
                          { tab: 4, icon: '🛒', short: 'M4', name: 'Basket' },
                          { tab: 5, icon: '🚴', short: 'M5', name: 'Delivery' },
                          { tab: 6, icon: '📈', short: 'M6', name: 'KPIs' }
                        ].map(item => (
                          <button
                            key={item.tab}
                            onClick={() => setActiveModuleTab(item.tab)}
                            className={`flex flex-col items-center py-2 px-1 border-t transition-all cursor-pointer ${
                              activeModuleTab === item.tab
                                ? 'border-[#A8892A] bg-[#FAF8F3] text-[#A8892A] font-extrabold'
                                : 'border-transparent bg-white text-slate-500 hover:text-slate-800'
                            }`}
                          >
                            <span className="text-sm">{item.icon}</span>
                            <span className="text-[10px] font-mono block mt-0.5 font-bold">{item.short}</span>
                            <span className="text-[8px] tracking-tight uppercase text-slate-400 block">{item.name}</span>
                          </button>
                        ))}
                      </div>

                      {/* Display content pane matching selected tab */}
                      <div className="bg-[#FAFBF9] border border-slate-200 p-5 min-h-[340px] flex flex-col justify-between">
                        
                        {/* TAB 1 CONTENT */}
                        {activeModuleTab === 1 && (
                          <div className="space-y-4 animate-fade-in text-left">
                            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                              <div>
                                <h4 className="font-serif font-black text-slate-900 text-sm">Module 1: Hyper-Local Demand Forecasting Engine</h4>
                                <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">Real-time local demographic &amp; weather parsing</p>
                              </div>
                              <span className="text-xs font-mono font-extrabold px-2 py-0.5 bg-cyan-50 border border-cyan-200 text-cyan-700 uppercase">
                                XGBoost ML Core
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                              <div className="bg-white p-3 border border-slate-200/80">
                                <span className="text-[9px] text-slate-400 block leading-none mb-1 uppercase font-bold">Hourly Predicted Sales</span>
                                <span className="text-2xl font-black text-slate-950 font-sans">{m1Calculations.predictedOrders} UT</span>
                                <span className="text-[9px] text-[#A8892A] block mt-1">Estimated SKU flow</span>
                              </div>
                              <div className="bg-white p-3 border border-slate-200/80">
                                <span className="text-[9px] text-slate-400 block leading-none mb-1 uppercase font-bold">Forecasting Confidence</span>
                                <span className="text-2xl font-black text-emerald-600 font-sans">{m1Calculations.confidence}%</span>
                                <span className="text-[9px] text-slate-400 block mt-1">Stochastic error limit</span>
                              </div>
                              <div className="bg-white p-3 border border-slate-200/80">
                                <span className="text-[9px] text-slate-400 block leading-none mb-1 uppercase font-bold">Regional Multiplier</span>
                                <span className="text-2xl font-black text-[#A8892A] font-sans">{m1Calculations.multi}x</span>
                                <span className="text-[9px] text-slate-400 block mt-1">Sourced environmental factor</span>
                              </div>
                            </div>

                            {/* Predictive Product Mix distribution */}
                            <div className="space-y-2 pt-2">
                              <span className="text-[10px] font-mono text-slate-600 font-bold block uppercase leading-none">Automated SKU Classification distribution:</span>
                              <div className="h-6 w-full flex rounded-xs overflow-hidden text-[9px] font-mono text-white text-center leading-6">
                                <div className="bg-slate-900 font-extrabold animate-pulse" style={{ width: `${m1Calculations.staplesPct}%` }}>
                                  Staples ({m1Calculations.staplesPct}%)
                                </div>
                                <div className="bg-[#A8892A] font-extrabold animate-pulse" style={{ width: `${m1Calculations.freshPct}%` }}>
                                  Fresh ({m1Calculations.freshPct}%)
                                </div>
                                <div className="bg-slate-500 font-extrabold animate-pulse" style={{ width: `${m1Calculations.otherPct}%` }}>
                                  Other ({m1Calculations.otherPct}%)
                                </div>
                              </div>
                            </div>

                            <div className="bg-slate-100 p-2.5 rounded-xs font-mono text-[10px] text-slate-600 flex items-start gap-2 border border-slate-205">
                              <Terminal size={12} className="text-slate-500 shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-slate-800">Telemetry logs:</strong> Models trained on hourly transactions. Local weather patterns mapped. Glasgow South-side match day is elevated. Stirling Student Late-night captures intense margins.
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TAB 2 CONTENT */}
                        {activeModuleTab === 2 && (
                          <div className="space-y-4 animate-fade-in text-left">
                            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                              <div>
                                <h4 className="font-serif font-black text-slate-900 text-sm">Module 2: Automated Procurement System</h4>
                                <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">Direct integration with United Wholesale Scotland</p>
                              </div>
                              <span className={`text-xs font-mono font-extrabold px-2 py-0.5 border uppercase ${
                                m2Calculations.isTriggered 
                                  ? 'bg-red-50 text-red-600 border-red-200 animate-pulse' 
                                  : 'bg-emerald-50 text-emerald-600 border-emerald-250'
                              }`}>
                                {m2Calculations.isTriggered ? 'PO Triggered' : 'System Calm'}
                              </span>
                            </div>

                            <div className="space-y-3">
                              <div className="p-3 bg-white border border-slate-200">
                                <div className="grid grid-cols-2 gap-y-2 text-xs font-mono">
                                  <span className="text-slate-400 text-[10px]">Vendor API End-point:</span>
                                  <span className="text-slate-800 font-bold text-right truncate">United Wholesale Scotland</span>
                                  <span className="text-slate-400 text-[10px]/normal">Auto-reorder SKU:</span>
                                  <span className="text-[#A8892A] font-bold text-right text-[10px]/normal">{m2Calculations.sku}</span>
                                  <span className="text-slate-400 text-[10px]">Computed Quantity:</span>
                                  <span className="text-slate-800 font-black text-right">{m2Calculations.isTriggered ? `${m2Calculations.unitsToOrder} UT` : '0 UT (Stock OK)'}</span>
                                  <span className="text-slate-400 text-[10px]">Estimated Bulk Invoice:</span>
                                  <span className="text-emerald-600 font-black text-right">{m2Calculations.isTriggered ? `£${m2Calculations.totalCost}` : '£0.00'}</span>
                                  <span className="text-slate-400 text-[10px]">Lead-Time ETA:</span>
                                  <span className="text-slate-900 font-bold text-right">{m2Calculations.etaMins} Mins (Automated dispatch)</span>
                                </div>
                              </div>

                              {m2Calculations.isTriggered ? (
                                <div className="bg-red-50 text-red-800 p-2.5 rounded-xs font-mono text-[10px] text-center border border-red-200 leading-snug">
                                  ⚠️ <strong>REORDER PROTOCOL ENGAGED:</strong> Current stock ({currentStockLevel}%) fell below reorder benchmark ({reorderThreshold}%). Purchase order contract successfully stowed and transmitted to Glasgow warehouse.
                                </div>
                              ) : (
                                <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-xs font-mono text-[10px] text-center border border-emerald-200 leading-snug">
                                  ✅ <strong>STORES IN BULK BALANCE:</strong> Current stock ({currentStockLevel}%) holds sufficient safety reserves above threshold ({reorderThreshold}%). API polling continues in standby mode.
                                </div>
                              )}
                            </div>

                            <button 
                              onClick={() => {
                                alert(`Simulating transmission to United Wholesale Scotland API...\n\nPO Request: ${m2Calculations.unitsToOrder} Units of ${m2Calculations.sku}\nTotal Invoice: £${m2Calculations.totalCost}\nAPI STATUS: OK (201 Created)`);
                              }}
                              className="w-full font-mono font-bold text-[10px] py-1.5 bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer leading-none text-center"
                            >
                              🖥️ FORCE VERIFY API PROTOCOL HANDSHAKE
                            </button>
                          </div>
                        )}

                        {/* TAB 3 CONTENT */}
                        {activeModuleTab === 3 && (
                          <div className="space-y-4 animate-fade-in text-left">
                            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                              <div>
                                <h4 className="font-serif font-black text-slate-900 text-sm">Module 3: Dynamic Pricing Algorithm</h4>
                                <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">E-ink ESL tag interface · Elastic margins optimizer</p>
                              </div>
                              <span className="text-xs font-mono font-extrabold px-2 py-0.5 bg-purple-50 border border-purple-200 text-purple-700 uppercase">
                                Real-time ESL Sync
                              </span>
                            </div>

                            <p className="text-xs font-light text-slate-600 leading-relaxed">
                              This module adjusts product shelf prices dynamically. Products nearing their expiry limits automatically trigger a decay pricing reduction curve, capturing maximum possible sell-through and dropping waste down towards zero.
                            </p>

                            <div className="bg-white p-4 border border-slate-200 text-left space-y-3 font-mono text-xs">
                              <div className="flex justify-between items-baseline border-b border-slate-100 pb-1.5">
                                <span className="text-slate-500 text-[10px]">Product SKU Item:</span>
                                <span className="font-serif font-bold text-slate-950">Artisanal Chilled Salmon Ready Meal</span>
                              </div>
                              <div className="flex justify-between items-baseline border-b border-slate-100 pb-1.5">
                                <span className="text-slate-500 text-[10px]">Original List Price:</span>
                                <span className="line-through text-slate-400">£{m3Calculations.originalPrice.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between items-baseline border-b border-slate-100 pb-1.5">
                                <span className="text-slate-500 text-[10px]">Applied Expiry Discount:</span>
                                <span className="text-red-500 font-extrabold">-{m3Calculations.expiryDiscount}% ({expiryDaysLeft} days left)</span>
                              </div>
                              <div className="flex justify-between items-baseline border-b border-slate-100 pb-1.5">
                                <span className="text-slate-500 text-[10px]">Competitor Price Level:</span>
                                <span className="text-slate-800 font-bold">Local benchmark £{m3Calculations.competitorPrice.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between items-baseline text-sm">
                                <span className="text-slate-600 font-bold text-[11px]">Dynamic E-Tag Shelf Price:</span>
                                <span className="text-emerald-600 font-black font-serif text-lg">£{m3Calculations.finalPrice.toFixed(2)}</span>
                              </div>
                            </div>

                            <div className="text-[10px] font-mono text-[#A8892A] bg-amber-50 p-2 text-center border border-[#EAC282]/30 leading-snug">
                              ⚡ <strong>COGNITIVE PRICE PROPAGATION:</strong> Dynamic pricing is updated immediately across electronic ESL tags. Sells-through is maximized at <strong>{m3Calculations.discountPct}% faster velocities</strong> compared to static rates.
                            </div>
                          </div>
                        )}

                        {/* TAB 4 CONTENT */}
                        {activeModuleTab === 4 && (
                          <div className="space-y-4 animate-fade-in text-left">
                            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                              <div>
                                <h4 className="font-serif font-black text-slate-900 text-sm">Module 4: Basket Optimisation Engine</h4>
                                <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">Cross-selling models &amp; multi-buy thresholds</p>
                              </div>
                              <span className="text-xs font-mono font-extrabold px-2 py-0.5 bg-[#FAF3E5] border border-[#EAC282]/50 text-[#A8892A] uppercase">
                                Customer AOV Boost
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                              {/* Left: Interactive item adding */}
                              <div className="bg-white p-3 border border-slate-200 space-y-2">
                                <span className="text-slate-400 text-[9px] block uppercase font-bold">SIMULATED BASKET BUILDER</span>
                                <div className="space-y-1.5 max-h-[160px] overflow-y-auto">
                                  {SAMPLE_PRODUCTS.map(p => (
                                    <div key={p.id} className="flex justify-between items-center text-[10px] pb-1 border-b border-slate-100">
                                      <span className="truncate pr-1 text-slate-800 max-w-[110px]">{p.name} (£{p.price.toFixed(2)})</span>
                                      <div className="flex items-center gap-1">
                                        <button 
                                          onClick={() => handleSub(p.id)} 
                                          className="w-4 h-4 rounded-xs border border-slate-300 bg-slate-50 text-slate-800 flex items-center justify-center font-bold font-sans cursor-pointer hover:bg-slate-200"
                                        >
                                          -
                                        </button>
                                        <span className="font-bold text-slate-900 w-3 text-center">{basket[p.id] || 0}</span>
                                        <button 
                                          onClick={() => handleAdd(p.id)} 
                                          className="w-4 h-4 rounded-xs border border-slate-300 bg-slate-50 text-slate-800 flex items-center justify-center font-bold font-sans cursor-pointer hover:bg-slate-200"
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right: Dynamic Outcomes */}
                              <div className="bg-white p-3 border border-slate-200 space-y-3 flex flex-col justify-between">
                                <div className="space-y-2">
                                  <span className="text-slate-400 text-[9px] block uppercase font-bold">OPTIMISATION DECISIONS</span>
                                  <div>
                                    <span className="text-[9px] text-slate-400 block leading-none">Basket Subtotal</span>
                                    <span className="text-base font-serif font-bold text-slate-950">£{basketSubtotal.toFixed(2)}</span>
                                  </div>
                                  <div className="border-t border-slate-100 pt-2 text-[10px]">
                                    <span className="text-slate-500 font-extrabold uppercase text-[8px] block">Hour-based Cross-Sell Target:</span>
                                    <span className="text-indigo-600 block font-bold mt-0.5">✨ {m4Calculations.dynamicCrossSell}</span>
                                  </div>
                                </div>
                                <div className="border-t border-slate-100 pt-1.5 text-[9px] leading-relaxed">
                                  <span className="text-slate-450 uppercase text-[8px] block">Threshold Incentive Model:</span>
                                  {m4Calculations.hasIncentiveUnlocked ? (
                                    <span className="text-emerald-600 font-bold block">🌟 FREE DELIVERY BONUS LOCKED IN!</span>
                                  ) : (
                                    <span className="text-amber-700 font-bold block">{m4Calculations.extraDiscountTrigger}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TAB 5 CONTENT */}
                        {activeModuleTab === 5 && (
                          <div className="space-y-4 animate-fade-in text-left">
                            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                              <div>
                                <h4 className="font-serif font-black text-slate-900 text-sm">Module 5: Dynamic Delivery Pricing Engine</h4>
                                <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">Spatial distance algorithms &amp; rider congestion balancing</p>
                              </div>
                              <span className="text-xs font-mono font-extrabold px-2 py-0.5 bg-indigo-50 border border-indigo-200 text-indigo-700 uppercase">
                                Logistical Hub Fare
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Mathematical Breakdown */}
                              <div className="bg-white p-3 border border-slate-200 text-xs font-mono space-y-2">
                                <span className="text-slate-400 text-[9px] block uppercase font-bold">FARE COMPONENTS</span>
                                <div className="flex justify-between">
                                  <span>Base Dispatch Fare:</span>
                                  <span>£{m5Calculations.baseFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Distance Weight ({deliveryMiles} mi):</span>
                                  <span>£{m5Calculations.distanceCharge.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-1">
                                  <span>Surge Multiplier:</span>
                                  <span className="text-[#A8892A] font-bold">{m5Calculations.surgeMultiplier}x</span>
                                </div>
                                <div className="flex justify-between text-slate-500 border-b border-slate-100 pb-1">
                                  <span>Rider Scarcity Adj:</span>
                                  <span className={m5Calculations.riderSurcharge > 0 ? 'text-red-500 font-bold' : 'text-emerald-600 font-bold'}>
                                    {m5Calculations.riderSurcharge >= 0 ? `+£${m5Calculations.riderSurcharge.toFixed(2)}` : `-£${Math.abs(m5Calculations.riderSurcharge).toFixed(2)}`}
                                  </span>
                                </div>
                                <div className="flex justify-between text-sm pt-1">
                                  <span className="font-bold text-[10px]">TOTAL DELIVERY FEE:</span>
                                  <span className="text-slate-950 font-black">£{m5Calculations.finalFee.toFixed(2)}</span>
                                </div>
                              </div>

                              {/* Graphic Representation */}
                              <div className="bg-white p-3 border border-slate-200 flex flex-col justify-between font-mono text-[10px] text-slate-600">
                                <span className="text-slate-400 text-[9px] block uppercase font-bold">LOGISTICS DRILL CORRIDOR</span>
                                <div className="space-y-4 pt-1.5">
                                  <div className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full border border-slate-400 bg-slate-900 flex items-center justify-center text-[8px] text-white font-bold">🛒</span>
                                    <div>
                                      <strong className="text-slate-900 text-[9px] block leading-none">Shawlands Hub Store</strong>
                                      <span className="text-[8px] text-slate-500 leading-none">Starting node dispatch</span>
                                    </div>
                                  </div>
                                  <div className="h-4 border-l-2 border-dashed border-[#A8892A] ml-2.5"></div>
                                  <div className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full border border-slate-450 bg-[#FAF3E5] flex items-center justify-center text-[10px] font-bold">🚴</span>
                                    <div>
                                      <strong className="text-slate-900 text-[9px] block leading-none">Logistics Distance Passage</strong>
                                      <span className="text-[8px] text-[#A8892A] font-extrabold leading-none">{deliveryMiles} Spatial Miles</span>
                                    </div>
                                  </div>
                                  <div className="h-4 border-l-2 border-dashed border-slate-350 ml-2.5"></div>
                                  <div className="flex flex-row items-center gap-2">
                                    <span className="w-5 h-5 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center text-[9px] font-bold">🏠</span>
                                    <div>
                                      <strong className="text-emerald-800 text-[9px] block leading-none">Customer Drop Point</strong>
                                      <span className="text-[8px] text-slate-500 leading-none font-light">Estimated dynamic SLA delivery</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TAB 6 CONTENT */}
                        {activeModuleTab === 6 && (
                          <div className="space-y-4 animate-fade-in text-left">
                            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                              <div>
                                <h4 className="font-serif font-black text-slate-900 text-sm">Module 6: Network Performance Analytics Dashboard</h4>
                                <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">Aggregated location and Group KPIs decision tree</p>
                              </div>
                              <span className="text-xs font-mono font-extrabold px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 uppercase">
                                Real-time Financial Matrix
                              </span>
                            </div>

                            <p className="text-xs font-light text-slate-600 leading-relaxed">
                              Real-time algorithmic feedback balances order flow against shelf wastage. Observe how optimized stocking rates and decay pricing parameters protect overall yield on-the-spot.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left font-mono">
                              <div className="bg-white p-3 border border-slate-200">
                                <span className="text-[8px] text-slate-400 block mb-1 uppercase font-bold leading-none">Simulated Daily Traffic</span>
                                <span className="text-base font-extrabold text-slate-950 block">{m6Calculations.dailyVolume} Orders</span>
                                <span className="text-[8px] text-slate-500 block leading-none mt-1">Sustained locations average</span>
                              </div>
                              <div className="bg-white p-3 border border-slate-200">
                                <span className="text-[8px] text-slate-400 block mb-1 uppercase font-bold leading-none">Dynamic Average Basket</span>
                                <span className="text-base font-extrabold text-slate-950 block">£{m6Calculations.simulatedAOV.toFixed(2)}</span>
                                <span className="text-[8px] text-[#A8892A] font-bold block leading-none mt-1">paydays/impulses included</span>
                              </div>
                              <div className="bg-white p-3 border border-slate-200">
                                <span className="text-[8px] text-slate-400 block mb-1 uppercase font-bold leading-none">Current Wastage Rate</span>
                                <span className={`text-base font-black block ${m6Calculations.wastageRate > 5 ? 'text-red-500' : 'text-emerald-500'}`}>
                                  {m6Calculations.wastageRate}%
                                </span>
                                <span className="text-[8px] text-slate-500 block leading-none mt-1">Minimized via dynamic tags</span>
                              </div>
                              <div className="bg-white p-3 border border-slate-200">
                                <span className="text-[8px] text-slate-400 block mb-1 uppercase font-bold leading-none">Estimated Location Revenue</span>
                                <span className="text-base font-extrabold text-emerald-600 block">£{m6Calculations.dailyRevenue.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</span>
                                <span className="text-[8px] text-slate-450 block leading-none mt-1">Simulated Daily gross margin</span>
                              </div>
                            </div>

                            <div className="bg-slate-100 p-2 border border-slate-200 font-mono text-[9px] text-slate-600 rounded-xs flex items-center justify-between">
                              <span>🛡️ <strong>Certified metrics:</strong> Calculated and logged live for corporate evaluation audits in Glasgow.</span>
                              <span className="font-bold underline cursor-pointer text-slate-900" onClick={() => alert('Diagnostic complete: All data metrics validated inside M1 - M6 central decision array.')}>COMPY TEST KPI</span>
                            </div>
                          </div>
                        )}

                        {/* BOTTOM INTERACTIVE DECK METADATA */}
                        <div className="border-t border-slate-150 pt-2 text-[9px] font-mono text-slate-400 flex flex-col md:flex-row justify-between items-start md:items-center gap-1.5 leading-none">
                          <span>🛠️ SAAR COGNITIVE INTERFACE MODULE: CLICK M1 to M6 TABS TO TOGGLE DECISIONS</span>
                          <span>UPDATED SECURELY BY CENTRAL DIGITAL INFRASTRUCTURE LAYER</span>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

                {/* Scaling strategy phases */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h4 className="font-serif text-lg font-bold text-slate-950 flex items-center gap-1.5">
                    <span>🔄</span> SAAR Convenience Strategic Plan (100+ Stores)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {SAAR_CONVENIENCE_DATA.phases.map((ph, idx) => (
                      <div key={idx} className="bg-white border p-5 relative leading-relaxed">
                        <span className="text-xs font-mono text-[#A8892A] tracking-wider uppercase font-bold block mb-1">
                          {ph.timeline}
                        </span>
                        <h5 className="font-serif font-bold text-slate-950 text-base mb-2">{ph.title}</h5>
                        <p className="text-sm text-slate-700 leading-relaxed font-light">{ph.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* SEGMENT 2: WRAP REPUBLIC */}
            {activeSegment === 'wrap' && (
              <div className="space-y-8 animate-fade-in text-left">
                
                {/* Visual Header and Meta */}
                <div className="border-b border-slate-100 pb-5 space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 uppercase font-bold tracking-widest">
                    <span>🌯</span> UPCOMING SUBSIDIARY · SETUP &amp; STAGING
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-slate-950">
                    {WRAP_REPUBLIC_BRAND.name}
                  </h2>
                  <p className="text-sm text-slate-500 font-mono">
                    High-Street Siting &amp; Digital Virtual Kitchen Framework
                  </p>
                </div>

                {/* Info Text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-serif text-base font-bold text-[#A8892A]">Strategic Concept Pitch:</h4>
                    <p className="text-sm text-slate-800 font-light leading-relaxed">
                      {WRAP_REPUBLIC_BRAND.concept}
                    </p>
                    <div className="bg-[#FAF3E5] border border-[#EAC282]/40 p-4 font-sans text-sm text-amber-950 leading-relaxed">
                      <strong className="block font-serif font-bold mb-1">🏬 Sauchiehall Premium Siting:</strong>
                      {WRAP_REPUBLIC_BRAND.address}
                    </div>
                  </div>

                  {/* Financial projections */}
                  <div className="bg-[#FAF9F5] p-5 border border-slate-200 space-y-4 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider block mb-2 leading-none">
                        STAGE RUN-RATE ACQUISITION ESTIMATE
                      </span>
                      <div className="space-y-3">
                        <div className="flex justify-between items-baseline border-b border-slate-200 pb-1.5">
                          <span className="text-sm text-slate-605 font-mono">Consolidated Volume:</span>
                          <span className="font-serif text-lg font-bold text-emerald-600">£1,000,000+</span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-slate-200 pb-1.5">
                          <span className="text-sm text-slate-605 font-mono">Expected Net Yield:</span>
                          <span className="font-serif text-base font-bold text-[#A8892A]">42% Net Margin</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm text-slate-605 font-mono">Staging Level:</span>
                          <span className="font-mono text-xs font-bold text-cyan-600 uppercase">Acquisition Phase</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-600 font-mono leading-normal pt-3 border-t border-slate-200/50">
                      ⚡ <strong>Late Night Synergy Trigger:</strong> Proximity to major Glasgow nightlife corridor captures immense foot traffic queues.
                    </div>
                  </div>
                </div>

                {/* Virtual Kitchen Segment display */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-mono uppercase text-[#A8892A] tracking-wider block font-black">
                    Consolidated Digital Virtual Kitchen Networks:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {WRAP_REPUBLIC_BRAND.virtualBrands.map((brandGroup, idx) => (
                      <div key={idx} className="bg-[#FAFBF9] border border-slate-200 p-5">
                        <span className="text-xs font-mono text-[#A8892A] uppercase font-bold tracking-wider block mb-2 pb-1 border-b border-slate-200">
                          ⛳ {brandGroup.holder}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {brandGroup.brands.map((b, bIdx) => (
                            <span key={bIdx} className="text-xs uppercase font-mono bg-white text-slate-800 border border-slate-200 px-2.5 py-1 font-extrabold shadow-3xs hover:border-[#A8892A]">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sourced Recipe Menu Preview */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h3 className="font-serif text-lg font-bold text-slate-950 flex items-center gap-1.5">
                    <span>🌯</span> Brand Blueprint Menu Preview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {WRAP_REPUBLIC_BRAND.menuSample.map((m, idx) => (
                      <div key={idx} className="bg-white p-4 border border-slate-200/95 shadow-3xs hover:border-[#A8892A] transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-serif font-black text-slate-950 text-sm leading-tight pr-2">{m.name}</h5>
                          <span className="font-mono text-[#A8892A] font-bold text-sm shrink-0">£{m.price.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-slate-600 font-light leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* SEGMENT 3: MORNING CRUMBS */}
            {activeSegment === 'crumbs' && (
              <div className="space-y-8 animate-fade-in text-left">
                
                {/* Visual Header and Meta */}
                <div className="border-b border-slate-100 pb-5 space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-500 uppercase font-bold tracking-widest">
                    <span>🥐</span> TECHNICAL CONFIGURATION CONCEPT STAGE
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-slate-950">
                    {MORNING_CRUMBS_BRAND.name}
                  </h2>
                  <p className="text-sm text-slate-500 font-mono">
                    "{MORNING_CRUMBS_BRAND.tagline}" · Speciality Beverages &amp; Hot Baked Pastries
                  </p>
                </div>

                {/* Concept text and aesthetic */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-8 space-y-4 leading-relaxed">
                    <h4 className="font-serif text-base font-bold text-[#A8892A]">Premium High-Street Bakery Concept</h4>
                    <p className="text-sm text-slate-800 font-light">
                      {MORNING_CRUMBS_BRAND.concept}
                    </p>
                    <p className="text-sm text-slate-600 font-light leading-normal">
                      The Morning Crumbs blueprint seeks to capture high commuter pedestrian volumes by deploying a refined, premium grab-and-go storefront footprint targeting peak morning rituals (6:00 AM – 11:30 AM).
                    </p>
                  </div>

                  {/* Brand Visual Identity Palette block */}
                  <div className="md:col-span-4 bg-[#FAF5EE] border border-amber-200 p-5 space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider block mb-1.5 leading-none">
                        🎨 STAGING THEME ACCENTS
                      </span>
                      <p className="text-xs text-slate-700 leading-snug mb-3">
                        Visual layout uses comforting oat tints and warm espresso branding blocks.
                      </p>
                      <div className="grid grid-cols-2 gap-1.5 text-xs font-mono font-bold">
                        <div className="bg-[#3D1F0D] text-white p-2.5 text-center">Espresso</div>
                        <div className="bg-[#C4A0C0] text-slate-950 p-2.5 text-center">Lilac Accent</div>
                        <div className="bg-[#EBD4E9] text-slate-950 p-2.5 text-center">Pale Purple</div>
                        <div className="bg-[#FAF5EE] text-slate-950 border border-amber-200 p-2.5 text-center">Oat Tint</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sourced Recipe Directory nested grids */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h4 className="font-serif text-lg font-bold text-slate-950 flex items-center gap-1.5">
                    <span>☕</span> Recipe Directory Blueprint
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Savouries */}
                    <div className="bg-white border border-slate-200 p-5 space-y-4">
                      <span className="text-xs font-mono font-extrabold text-slate-500 uppercase tracking-widest block border-b border-slate-100 pb-1.5">
                        🥖 SAVOURY HOT BAKES
                      </span>
                      <div className="space-y-4">
                        {MORNING_CRUMBS_BRAND.menu.savoury.map((item, idx) => (
                          <div key={idx} className="space-y-1 block leading-normal">
                            <div className="flex justify-between items-baseline font-serif text-slate-950 font-bold text-sm">
                              <span>{item.name}</span>
                              <span className="font-mono text-slate-500 text-xs">£{item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-slate-605 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dranks */}
                    <div className="bg-white border border-slate-200 p-5 space-y-4">
                      <span className="text-xs font-mono font-extrabold text-[#A8892A] uppercase tracking-widest block border-b border-slate-100 pb-1.5">
                        ☕ SPECIALTY CHAISS &amp; LATTES
                      </span>
                      <div className="space-y-4">
                        {MORNING_CRUMBS_BRAND.menu.drinks.map((item, idx) => (
                          <div key={idx} className="space-y-1 block leading-normal">
                            <div className="flex justify-between items-baseline font-serif text-slate-950 font-bold text-sm">
                              <span>{item.name}</span>
                              <span className="font-mono text-slate-505 text-xs">£{item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-slate-605 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sweet bakes */}
                    <div className="bg-white border border-slate-200 p-5 space-y-4">
                      <span className="text-xs font-mono font-extrabold text-purple-500 uppercase tracking-widest block border-b border-slate-100 pb-1.5">
                        🥐 SWEET HANDMADES
                      </span>
                      <div className="space-y-4">
                        {MORNING_CRUMBS_BRAND.menu.bakes.map((item, idx) => (
                          <div key={idx} className="space-y-1 block leading-normal">
                            <div className="flex justify-between items-baseline font-serif text-slate-950 font-bold text-sm">
                              <span>{item.name}</span>
                              <span className="font-mono text-slate-505 text-xs">£{item.price.toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-slate-605 font-light leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* SEGMENT 4: SAAR Intelligence company (CTO Miss Pratibha) */}
            {activeSegment === 'intelligence' && (
              <div className="space-y-8 animate-fade-in text-left">
                
                {/* Visual Header and Meta */}
                <div className="border-b border-slate-100 pb-5 space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A8892A] uppercase font-bold tracking-widest">
                    <span>🧠</span> INTELLECTUAL PROPERTY &amp; DEPLOYMENT SEGMENT
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-slate-950">
                    SAAR Intelligence Company
                  </h2>
                  <p className="text-sm text-slate-500 font-mono">
                    Under technology construction · Scheduled Spin-out Q4 2026
                  </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 leading-relaxed">
                  
                  <div className="md:col-span-8 space-y-4 text-left">
                    <h3 className="font-serif text-lg font-bold text-slate-950">The Central Ledger &amp; API Suite</h3>
                    
                    <p className="text-sm text-slate-800 font-light leading-relaxed">
                      Formed to serve as the absolute digital and algorithmic intellectual property bank of SAAR Holdings. The company owns, designs, and protects all software codebase frameworks, dynamic ESL shelf tags, predictive inventory modeling scripts, and intra-group APIs constructed since inception.
                    </p>

                    <p className="text-sm text-slate-800 font-normal py-2 bg-[#FAF9F5] px-4 border border-dashed border-slate-300">
                      🎯 <strong>Core B2B Scaling Goal:</strong> To transition third-party independent convenience stores from legacy 12% food waste down to under 2% automated levels on a scalable SaaS license framework.
                    </p>
                  </div>

                  {/* Architecture lead */}
                  <div className="md:col-span-4 bg-[#FAF9F5] p-5 border border-slate-200 flex flex-col justify-center text-left">
                    <div>
                      <span className="text-xs font-mono text-slate-500 font-bold block uppercase mb-2">ARCHITECT LEAD IN CHARGE</span>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-950 text-white font-serif flex items-center justify-center font-bold text-xs shrink-0 border border-[#A8892A]">P</div>
                        <div className="leading-none pt-0.5">
                          <h4 className="font-serif font-black text-slate-900 text-sm">Miss Pratibha</h4>
                          <span className="text-xs font-mono text-[#A8892A] uppercase font-bold">Chief Technology Officer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Core list of IP Holdings */}
                <div className="space-y-3 pt-4 border-t border-slate-100 text-left">
                  <h4 className="text-xs font-mono uppercase text-slate-950 font-bold tracking-wider">
                    🏛️ Registered IP Assets Checklist:
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm leading-normal text-slate-800">
                    {[
                      { title: "Proprietary ESL Shelf Sync Logic (API-V1)", desc: "Synchronizes pricing matrix over e-ink labels in milliseconds." },
                      { title: "Wholesale Partner API Integration Module", desc: "Automates SKU stock requests directly based on warehouse inventory benchmarks." },
                      { title: "Dynamic Expiry Discounter Engines (SAAR-INT)", desc: "Triggers sliding margin discount rules as SKU stock nears decay limits." },
                      { title: "SaaS Multi-Tenant Client Gateways", desc: "Allows independent merchants to deploy SAAR algorithms on monthly recurring subscriptions." }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-[#FAFBF9] hover:bg-slate-50 transition-colors p-4 border border-slate-200">
                        <span className="font-mono text-xs font-bold text-slate-950 block mb-1">✔️ {item.title}</span>
                        <p className="text-xs text-slate-605 font-light leading-snug">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* SEGMENT 5: PIPELINES FOR FUTURE VENTURES */}
            {activeSegment === 'future' && (
              <div className="space-y-8 animate-fade-in text-left">
                
                {/* Visual Header and Meta */}
                <div className="border-b border-slate-100 pb-5 space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-505 uppercase font-bold tracking-widest">
                    <span>🔮</span> LONG-TERM PIPELINE STRATEGY
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-slate-950">
                    Strategic Expansion Pipelines
                  </h2>
                  <p className="text-sm text-slate-500 font-mono">
                    Scheduled rollout phases triggered by group location indices scale benchmarks
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-left">
                  
                  {/* Pipeline 1: SAAR Deliveries */}
                  <div className="border border-slate-200 p-6 flex flex-col justify-between hover:border-[#A8892A] transition-all">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 shrink-0 font-bold">🚚</div>
                        <div className="leading-tight">
                          <span className="text-xs font-mono text-indigo-505 uppercase block font-bold leading-none mb-1">Phase 2 Pipeline Entry</span>
                          <h4 className="font-serif font-black text-slate-950 text-base">SAAR Deliveries</h4>
                        </div>
                      </div>

                      <p className="text-sm text-slate-700 font-light leading-relaxed">
                        An in-house last-mile logistical driver dispatch network. Shifting courier transactions from external aggregators (UberEats, Deliveroo, JustEat) once we secure scale benchmarks (20+ stores), capturing 100% of spatial delivery fee margins.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-6 text-xs font-mono text-slate-500 leading-normal text-left">
                      📍 Status: <strong>Scheduled upon reaching 20+ sustained physical hubs</strong>
                    </div>
                  </div>

                  {/* Pipeline 2: SAAR Logistics & Q-Commerce */}
                  <div className="border border-slate-200 p-6 flex flex-col justify-between hover:border-[#A8892A] transition-all">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#FAF3E5] border border-amber-100 flex items-center justify-center text-[#A8892A] shrink-0 font-bold">📦</div>
                        <div className="leading-tight">
                          <span className="text-xs font-mono text-[#A8892A] uppercase block font-bold leading-none mb-1">Phase 3 Growth Option</span>
                          <h4 className="font-serif font-black text-slate-950 text-base">SAAR Logistics &amp; Q-Commerce</h4>
                        </div>
                      </div>

                      <p className="text-sm text-slate-700 font-light leading-relaxed">
                        Establishment of a localized wholesale redistribution center. The logistics division will transport diverse bulk foods, home appliances, devices, and consumer electronics to regional micro depots for same-day delivery dispatches.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-6 text-xs font-mono text-slate-505 leading-normal text-left">
                      📍 Status: <strong>Scheduled at full group structural maturity (35+ sites)</strong>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* Global Bottom Legal Compliance Footer Info inside the Workspace Card */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-slate-505 leading-normal">
              <span className="font-bold flex items-center gap-1.5 shrink-0 text-slate-700">
                <span>🛡️</span> GLASGOW BOARD INDEX PORTFOLIO
              </span>
              <span className="text-right">
                All rights reserved © 2026. Certified under Scottish statutory corporate directives.
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
