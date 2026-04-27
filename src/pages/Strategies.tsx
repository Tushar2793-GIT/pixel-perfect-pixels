import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  LineChart,
  LockKeyhole,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["How It Works", "Features", "Strategies", "For Traders", "For Non-Traders", "For Business", "Pricing", "About Us"];

const strategyAdvantages = [
  [ClipboardCheck, "Backtested\nStrategies", "Tested over historical\ndata for reliability"],
  [BrainCircuit, "AI Optimization", "AI fine-tunes parameters\nfor better results"],
  [ShieldCheck, "Risk Management", "Built-in SL, Target &\nposition sizing"],
  [Target, "Continuous Learning", "Strategies evolve with\nmarket conditions"],
];

const dashboardMenu = ["Data", "Dashboard", "Strategies", "Backtest", "Marketplace", "Reports", "Settings"];
const strategyStats = [
  ["Total Strategies", "24"],
  ["Profitable", "18"],
  ["Win Rate", "75%"],
  ["Avg Return", "+24.35%"],
];
const tableRows = [
  ["Momentum Master", "NIFTY", "+36.38%", "76%", "8.2%"],
  ["Breakout Pro", "BANKNIFTY", "+22.48%", "72%", "9.1%"],
  ["AI Trend Rider", "RELIANCE", "+18.67%", "70%", "7.4%"],
  ["Swing Smart", "TCS", "+17.52%", "68%", "8.9%"],
];

const Header = () => (
  <header className="border-b bg-card/95 shadow-sm backdrop-blur">
    <nav className="mx-auto flex h-[102px] max-w-[1560px] items-center justify-between px-5 lg:px-6">
      <a href="/" className="flex items-center gap-3" aria-label="FastTrade99 home">
        <span className="flex size-11 items-center justify-center rounded-full bg-gradient-brand text-lg font-extrabold text-primary-foreground shadow-button ring-4 ring-secondary">FT</span>
        <span className="font-display text-[34px] font-extrabold leading-none tracking-normal text-brand-navy">
          fasttrade<span className="text-primary">99</span>
        </span>
      </a>
      <div className="hidden items-center gap-8 text-sm font-extrabold text-brand-navy xl:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={item === "About Us" ? "/about" : item === "Pricing" ? "/#pricing" : item === "For Business" ? "/business" : item === "For Non-Traders" ? "/non-traders" : item === "For Traders" ? "/traders" : item === "Strategies" ? "/strategies" : "#"}
            className={`relative py-10 transition-colors hover:text-primary ${item === "Strategies" ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-primary" : ""}`}
          >
            {item}
          </a>
        ))}
      </div>
      <Button variant="brand" size="lg" className="h-14 rounded-md px-8 text-base shadow-button">
        Sign Up
      </Button>
    </nav>
  </header>
);

const StrategyDashboard = () => (
  <div className="grid h-full min-h-[580px] overflow-hidden rounded-xl bg-brand-navy text-primary-foreground shadow-card lg:grid-cols-[0.2fr_0.8fr]">
    <aside className="flex flex-col gap-5 border-r border-primary-foreground/5 bg-brand-navy/80 px-5 py-8">
      {dashboardMenu.map((item) => (
        <div key={item} className={`flex items-center gap-3 rounded-md px-4 py-3 text-sm font-extrabold ${item === "Strategies" ? "bg-gradient-brand text-primary-foreground shadow-button" : "text-primary-foreground/72"}`}>
          <span className="flex size-7 items-center justify-center rounded-md border border-primary-foreground/12 bg-primary-foreground/5">
            {item === "Strategies" ? <BriefcaseBusiness className="size-4" /> : item === "Dashboard" ? <Gauge className="size-4" /> : item === "Backtest" ? <BarChart3 className="size-4" /> : <LockKeyhole className="size-4" />}
          </span>
          {item}
        </div>
      ))}
    </aside>

    <section className="flex flex-col gap-5 bg-brand-navy px-6 py-7">
      <h2 className="text-xl font-extrabold">Strategy Performance</h2>
      <div className="rounded-xl bg-card/5 p-5 ring-1 ring-primary-foreground/5">
        <svg viewBox="0 0 760 210" className="h-[210px] w-full" aria-label="Strategy performance equity curve">
          <defs>
            <linearGradient id="strategyLineFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--success) / 0.24)" />
              <stop offset="100%" stopColor="hsl(var(--success) / 0.03)" />
            </linearGradient>
          </defs>
          {[24,62,100,138,176].map((y) => <line key={y} x1="38" x2="740" y1={y} y2={y} stroke="hsl(var(--primary-foreground) / 0.08)" />)}
          {[[24, "1000"], [62, "900"], [100, "800"], [138, "700"], [176, "600"]].map(([y, label]) => <text key={label} x="0" y={Number(y) + 4} fill="hsl(var(--primary-foreground) / 0.58)" fontSize="13" fontWeight="800">{label}</text>)}
          <path d="M42 174 L77 144 L111 159 L147 137 L183 151 L219 108 L257 132 L293 154 L331 114 L367 91 L404 119 L441 150 L478 105 L515 91 L552 112 L589 83 L626 40 L663 76 L700 45 L738 30" fill="none" stroke="hsl(var(--success))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 174 L77 144 L111 159 L147 137 L183 151 L219 108 L257 132 L293 154 L331 114 L367 91 L404 119 L441 150 L478 105 L515 91 L552 112 L589 83 L626 40 L663 76 L700 45 L738 30 L738 205 L42 205Z" fill="url(#strategyLineFill)" />
          {[[42,"Jan"],[165,"Feb"],[286,"Mar"],[408,"Apr"],[530,"May"],[652,"Jun"],[732,"Jul"]].map(([x,label]) => <text key={label} x={Number(x)} y="204" fill="hsl(var(--primary-foreground) / 0.58)" fontSize="13" fontWeight="800">{label}</text>)}
        </svg>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {strategyStats.map(([label, value]) => (
          <article key={label} className="rounded-lg bg-card/6 px-5 py-5 ring-1 ring-primary-foreground/5">
            <p className="text-sm font-extrabold text-primary-foreground/72">{label}</p>
            <p className={`mt-3 text-2xl font-extrabold ${value.includes("%") || value === "18" ? "text-success" : "text-primary-foreground"}`}>{value}</p>
          </article>
        ))}
      </div>

      <div className="flex-1 overflow-hidden rounded-xl bg-card/4 ring-1 ring-primary-foreground/5">
        <div className="flex items-center justify-between px-5 py-4">
          <h3 className="text-lg font-extrabold">Top Performing Strategies</h3>
          <a href="#" className="text-sm font-extrabold text-primary-glow">View All</a>
        </div>
        <div className="grid grid-cols-[1.25fr_0.7fr_0.8fr_0.7fr_0.7fr] bg-primary-foreground/4 px-5 py-3 text-sm font-extrabold text-primary-foreground/72">
          <span>Strategy Name</span><span>Asset</span><span>Return</span><span>Win Rate</span><span>Max DD</span>
        </div>
        {tableRows.map((row, index) => (
          <div key={row[0]} className={`grid grid-cols-[1.25fr_0.7fr_0.8fr_0.7fr_0.7fr] px-5 py-4 text-sm font-extrabold ${index % 2 === 0 ? "bg-primary-foreground/6" : "bg-transparent"}`}>
            <span>{row[0]}</span><span>{row[1]}</span><span className="text-success">{row[2]}</span><span>{row[3]}</span><span>{row[4]}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const Strategies = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />

    <section className="mx-auto max-w-[1920px] px-5 pb-8 pt-8 lg:px-8 2xl:px-10">
      <div className="grid items-center gap-12 xl:grid-cols-[0.35fr_0.65fr] 2xl:gap-16">
        <div className="flex min-h-[610px] flex-col justify-center">
          <p className="text-base font-extrabold uppercase tracking-wider text-primary">Strategies</p>
          <h1 className="mt-8 font-display text-[clamp(3.1rem,4.2vw,4.75rem)] font-extrabold leading-[1.08] text-brand-navy">
            Smart Strategies.<br />Stronger Performance.
          </h1>
          <p className="mt-8 max-w-[470px] text-[clamp(1.18rem,1.35vw,1.45rem)] font-bold leading-9 text-muted-foreground">
            FastTrade99 provides AI-powered strategies and automated tools to help you trade with confidence and consistency.
          </p>

          <ul className="mt-10 space-y-5">
            {["AI-Generated & Backtested Strategies", "No-Code Strategy Builder", "Multi-Asset & Multi-Timeframe", "Performance Analytics", "Risk-Managed Execution"].map((item) => (
              <li key={item} className="flex items-center gap-4 text-[clamp(1rem,1.1vw,1.18rem)] font-extrabold text-brand-navy">
                <CheckCircle2 className="size-7 shrink-0 fill-primary text-primary-foreground" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto grid max-w-[620px] grid-cols-2 gap-8 pt-12">
            <Button variant="brand" className="h-20 rounded-md text-xl font-extrabold shadow-button">Create Strategy</Button>
            <Button variant="brandOutline" className="h-20 rounded-md text-xl font-extrabold text-primary">Explore Marketplace</Button>
          </div>
        </div>

        <StrategyDashboard />
      </div>
    </section>

    <section className="mx-auto max-w-[1920px] px-5 pb-8 lg:px-8 2xl:px-10">
      <h2 className="text-center font-display text-[28px] font-extrabold text-brand-navy">Strategy Advantage</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {strategyAdvantages.map(([Icon, title, text]) => {
          const AdvantageIcon = Icon as typeof ShieldCheck;
          return (
            <article key={title as string} className="grid min-h-[190px] grid-cols-[88px_1fr] items-center gap-5 rounded-xl border bg-card px-8 py-7 shadow-sm">
              <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary">
                <AdvantageIcon className="size-9" />
              </span>
              <div>
                <h3 className="whitespace-pre-line text-xl font-extrabold leading-7 text-brand-navy">{title as string}</h3>
                <p className="mt-3 whitespace-pre-line text-base font-bold leading-7 text-muted-foreground">{text as string}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>

    <section className="mx-auto max-w-[1920px] px-5 pb-10 lg:px-8 2xl:px-10">
      <div className="grid min-h-[140px] items-center overflow-hidden rounded-xl bg-gradient-brand text-primary-foreground shadow-button lg:grid-cols-[132px_1fr_auto]">
        <div className="flex h-full items-center justify-center bg-primary/20">
          <Bot className="size-16" />
        </div>
        <div className="px-7 py-7">
          <h2 className="font-display text-[clamp(1.55rem,2.25vw,2.4rem)] font-extrabold leading-tight">Build, Backtest & Deploy winning strategies effortlessly.</h2>
          <p className="mt-3 text-[clamp(1rem,1.35vw,1.35rem)] font-bold text-primary-foreground/85">Start your journey with FastTrade99 today.</p>
        </div>
        <div className="px-7 pb-7 lg:pb-0">
          <Button variant="secondary" className="h-20 rounded-md px-12 text-xl font-extrabold text-primary shadow-sm">Start Free Trial</Button>
        </div>
      </div>
    </section>
  </main>
);

export default Strategies;
