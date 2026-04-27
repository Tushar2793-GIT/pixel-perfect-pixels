import { ArrowUpRight, BarChart3, BriefcaseBusiness, CalendarDays, Check, ChevronDown, CircleDollarSign, LineChart, LockKeyhole, Play, ShieldCheck, Sparkles, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["How It Works", "Features", "For Traders", "For Non-Traders", "For Business", "Pricing"];

const stats = [
  ["₹4Cr+", "Capital Deployed"],
  ["99+", "Active Accounts"],
  ["10–12%", "Average Monthly Returns"],
  ["72%+", "Win Rate"],
];

const steps = ["AI Scans Market", "Strategy Selection", "Auto Trade Execution", "Profit Optimization"];

const strategies = [
  ["Momentum Pro", "+12.35%", "78", "74.36%"],
  ["AI Swing", "+9.80%", "65", "70.12%"],
  ["Multi Average", "+8.92%", "54", "69.44%"],
  ["Alpha Breakout", "+10.15%", "61", "73.77%"],
];

const plans = [
  { name: "STARTER", price: "₹ 999", sub: "Perfect for beginners", features: ["Real-time Market Data", "Basic Charts & Indicators", "1 Strategy", "1 Exchange", "Email Support"] },
  { name: "TRADER", price: "₹ 2,499", sub: "For active traders", features: ["Advanced Charts", "Technical Indicators", "5 Strategies", "3 Exchanges", "Priority Support"] },
  { name: "PROFESSIONAL", price: "₹ 4,999", sub: "For serious traders", popular: true, features: ["Algo Trading", "Unlimited Strategies", "All Exchanges", "Advanced Analytics", "Priority + Call Support"] },
  { name: "BUSINESS", price: "Custom", sub: "For businesses & teams", features: ["Multi-Account Management", "API & White Label", "Custom Integrations", "Dedicated RM", "SLA & Premium Support"] },
];

const values = ["Innovation First", "Transparency Always", "Customer Success", "Integrity & Security"];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-soft text-foreground">
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="FastTrade99 home">
            <span className="flex size-11 items-center justify-center rounded-full bg-gradient-brand text-lg font-extrabold text-primary-foreground shadow-button">FT</span>
            <span className="font-display text-2xl font-bold tracking-normal text-brand-navy">fasttrade<span className="text-primary">99</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold text-brand-navy lg:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition-colors hover:text-primary">{item}</a>)}
          </div>
          <Button variant="brand" size="lg">Sign Up</Button>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-widest text-primary">For Traders</p>
          <h1 className="font-display text-5xl font-extrabold leading-tight text-brand-navy sm:text-6xl">Trade Like Institutions. Execute Like AI.</h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">AI-powered strategies, automated execution and risk-managed trading for consistent 10–12% monthly returns.</p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-brand-navy">
            {stats.map(([value, label]) => <span key={label} className="rounded-md border bg-card px-4 py-3 shadow-sm"><b className="text-primary">{value}</b> {label}</span>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="brand" size="xl">Start Trading Now <ArrowUpRight /></Button>
            <Button variant="brandOutline" size="xl">View Live Performance <BarChart3 /></Button>
          </div>
        </div>
        <div className="relative animate-float rounded-lg border bg-card p-5 shadow-card motion-reduce:animate-none">
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <div><p className="text-sm font-extrabold text-primary">Live Performance This Month</p><h2 className="font-display text-3xl font-bold text-brand-navy">+10.68%</h2></div>
            <ChevronDown className="text-primary" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Total P&L|₹42,72,380|vs Last Month +9.21%", "Capital Deployed|₹4,12,35,450|+18.45%", "Active Accounts|99+|+12 This Month"].map((item) => {
              const [a, b, c] = item.split("|");
              return <div key={a} className="rounded-md bg-secondary p-4"><p className="text-xs font-bold text-muted-foreground">{a}</p><p className="mt-2 font-display text-xl font-extrabold text-brand-navy">{b}</p><p className="mt-1 text-xs font-bold text-success">{c}</p></div>;
            })}
          </div>
          <div className="mt-5 h-48 rounded-md border bg-surface p-4">
            <div className="flex h-full items-end gap-2">
              {[28, 44, 36, 62, 54, 78, 68, 90, 82, 96, 88, 100].map((h, i) => <span key={i} className="flex-1 rounded-t-sm bg-gradient-brand" style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {[[Sparkles, "AI Momentum Engine", "Detects market strength and builds high-probability watchlists."], [Zap, "Auto Execution Engine", "TradingView signal integration with instant multi-account sync."], [ShieldCheck, "Risk Management", "Capital protection, smart averaging and drawdown control."], [LineChart, "Performance Analytics", "Real-time P&L, reports and strategy-level insights."]].map(([Icon, title, text]) => {
            const FeatureIcon = Icon as typeof Sparkles;
            return <article key={title as string} className="rounded-lg border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"><FeatureIcon className="mb-4 text-primary" /><h3 className="font-display text-lg font-extrabold text-brand-navy">{title as string}</h3><p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">{text as string}</p></article>;
          })}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center"><h2 className="font-display text-4xl font-extrabold text-brand-navy">How FastTrade99 Works</h2><p className="mt-2 font-semibold text-muted-foreground">AI-driven. Rule-based. Emotion-free.</p></div>
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((step, i) => <div key={step} className="rounded-lg border bg-card p-6 shadow-card"><span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand font-bold text-primary-foreground">{i + 1}</span><h3 className="mt-5 font-display text-xl font-extrabold text-brand-navy">{step}</h3><p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">Signals generated, risk evaluated, and orders handled instantly with zero manual delay.</p></div>)}
        </div>
      </section>

      <section id="pricing" className="border-y bg-card py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center"><p className="text-sm font-extrabold uppercase tracking-widest text-primary">Pricing</p><h2 className="mt-3 font-display text-4xl font-extrabold text-brand-navy">Simple Pricing. Powerful Value.</h2><p className="mt-3 font-semibold text-muted-foreground">Choose the perfect plan for your trading journey.</p></div>
          <div className="mx-auto mt-6 flex w-fit rounded-md border bg-background p-1"><button className="rounded-md bg-gradient-brand px-8 py-3 text-sm font-bold text-primary-foreground shadow-button">Monthly Billing</button><button className="px-8 py-3 text-sm font-bold text-brand-navy">Annual Billing <span className="ml-3 text-success">Save 20%</span></button></div>
          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {plans.map((plan) => <article key={plan.name} className={`relative rounded-lg border bg-card p-7 shadow-card ${plan.popular ? "border-primary bg-secondary" : ""}`}>{plan.popular && <span className="absolute -top-3 right-5 rounded-sm bg-gradient-brand px-4 py-1 text-xs font-bold text-primary-foreground">Most Popular</span>}<p className="font-display text-sm font-extrabold text-primary">{plan.name}</p><h3 className="mt-5 font-display text-3xl font-extrabold text-brand-navy">{plan.price} <span className="text-sm font-semibold text-muted-foreground">{plan.price !== "Custom" ? "/month" : ""}</span></h3><p className="mt-4 font-semibold text-muted-foreground">{plan.sub}</p><ul className="mt-7 space-y-4">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm font-bold text-brand-navy"><Check className="size-4 text-primary" />{feature}</li>)}</ul><Button className="mt-10 w-full" variant={plan.popular ? "brand" : "brandOutline"} size="lg">{plan.name === "BUSINESS" ? "Contact Sales" : "Get Started"}</Button><p className="mt-4 text-center text-sm font-bold text-primary">{plan.name === "BUSINESS" ? "Let's Talk" : "7-Day Free Trial"}</p></article>)}
          </div>
        </div>
      </section>

      <section id="for-business" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {["Our Mission|To empower traders and investors with AI-driven tools and consistent wealth.", "Our Vision|To be the world's trusted multi-broker trading platform that democratizes financial freedom.", "Our Values|Innovation First, Transparency Always, Customer Success, Integrity & Security"].map((item) => { const [title, text] = item.split("|"); return <article key={title} className="rounded-lg border bg-card p-6 shadow-card"><h3 className="font-display text-lg font-extrabold text-brand-navy">{title}</h3><p className="mt-3 text-sm font-semibold leading-6 text-muted-foreground">{text}</p></article>; })}
        </div>
        <div className="mt-8 rounded-lg border bg-surface p-6 shadow-card"><h3 className="text-center font-display font-extrabold text-primary">Our Journey</h3><div className="mt-6 grid gap-4 md:grid-cols-5">{["2023|FastTrade99 Founded", "2023|Launched AI-Powered Strategies", "2024|10K+ Active Users", "2024|Multi-Broker Integration", "2025|50K+ Users & Growing"].map((item) => { const [year, text] = item.split("|"); return <div key={text} className="text-center"><div className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary font-bold text-primary">{year}</div><p className="mt-3 text-xs font-extrabold text-brand-navy">{text}</p></div>; })}</div></div>
      </section>

      <section id="about-us" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-lg bg-gradient-brand p-6 text-primary-foreground shadow-button md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-center gap-4"><CalendarDays className="size-10" /><div><h2 className="font-display text-2xl font-extrabold">We're just getting started.</h2><p className="font-semibold opacity-90">Join us as we build the future of smart trading.</p></div></div>
          <Button variant="secondary" size="lg">Join Our Journey</Button>
        </div>
      </section>
    </main>
  );
};

export default Index;