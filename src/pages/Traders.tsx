import {
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  Bot,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  CircleSlash,
  Clock3,
  FileText,
  Headphones,
  LineChart,
  Network,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UsersRound,
  Zap,
} from "lucide-react";
import traderHero from "@/assets/trader-hero-command-center.jpg";
import traderAvatars from "@/assets/trader-testimonial-avatars.jpg";
import { Button } from "@/components/ui/button";

const navItems = ["How It Works", "Features", "Strategies", "For Traders", "For Non-Traders", "For Business", "Pricing", "About Us"];

const featureBlocks = [
  [BrainCircuit, "AI Momentum Engine", ["Detects market strength in real-time", "Decides number of averages dynamically", "Builds high-probability watchlist every day"], "primary"],
  [Zap, "Auto Execution Engine", ["TradingView signal integration", "Instant order execution", "Multi-account sync", "Scale up to 100+ accounts"], "primary"],
  [ShieldCheck, "Risk Management System", ["Capital protection at every step", "Smart averaging, not blind averaging", "Drawdown control & exposure management"], "success"],
  [BarChart3, "Performance Analytics", ["Real-time P&L and trade tracking", "Strategy-level performance", "Portfolio-level insights & reports", "Advanced analytics dashboard"], "primary"],
];

const workSteps = [
  [LineChart, "AI Scans Market", ["Nifty & top stocks analyzed", "Momentum strength calculated", "Opportunities shortlisted"], "primary"],
  [Target, "Strategy Selection", ["Best strategy picked dynamically", "Buy / Sell signals generated", "Risk & reward evaluated"], "primary"],
  [Bot, "Auto Trade Execution", ["Orders executed instantly", "Zero manual delay", "Multi-account execution"], "success"],
  [TrendingUp, "Profit Optimization", ["Averaging based on market movement", "Profit booking & trailing", "Risk always under control"], "primary"],
];

const metrics = [
  ["Monthly Return (Avg.)", "10 – 12%", "Consistent Growth"],
  ["Total P&L (This Month)", "+₹42,72,380", "+10.68%"],
  ["Win Rate", "72.45%", "High Accuracy"],
  ["Profit Factor", "2.48", "Strong Performance"],
];

const strategies = [
  ["Momentum Pro", "+12.35%", "78", "74.36%"],
  ["AI Swing", "+9.80%", "65", "70.12%"],
  ["Multi Average", "+8.92%", "54", "69.44%"],
  ["Alpha Breakout", "+10.15%", "61", "73.77%"],
];

const loveItems = [
  [CircleSlash, "No Need to\nWatch Charts\nAll Day"],
  [Bot, "AI Handles Entry,\nExit & Averaging"],
  [BrainCircuit, "Emotion-Free\nRule Based\nTrading"],
  [UsersRound, "Works for\nBeginners &\nProfessionals"],
  [Network, "Scalable Across\nMultiple Accounts"],
  [Clock3, "More Time for\nLife, We Handle\nthe Trade"],
];

const intelligence = [
  [Target, "Momentum-Based Averaging", "AI decides dynamic averages based on market strength & movement."],
  [ShieldCheck, "AI Knows When NOT to Trade", "Avoid low probability setups. We trade only when edge is in our favor."],
  [ChartNoAxesCombined, "Adaptive to Market Conditions", "Strategies adapt automatically to bullish, bearish or sideways markets."],
];

const compliance = [
  [ShieldCheck, "Capital Protection\nis Our Priority"],
  [Target, "Controlled Exposure\nin Every Trade"],
  [TrendingUp, "Smart Stop-Loss\n& Drawdown Control"],
  [FileText, "Fully Transparent\nTrades & Reports"],
  [ShieldCheck, "Regulatory Compliant\n& Safe"],
  [UsersRound, "Your Capital. Our\nResponsibility."],
];

const testimonials = [
  ["FastTrade99 has completely changed my trading journey. AI picks the right trades and delivers consistent results.", "Rohit M.", "Full-Time Trader", "left"],
  ["The automation and risk management are top-notch. Finally, I can trade stress-free and see real growth.", "Neha P.", "Swing Trader", "center"],
  ["Best platform for anyone who wants professional trading without sitting in front of charts all day.", "Vikram S.", "Position Trader", "right"],
];

const Header = () => (
  <header className="border-b bg-card/95 shadow-sm backdrop-blur">
    <nav className="mx-auto flex h-[102px] max-w-[1920px] items-center justify-between px-8 2xl:px-9">
      <a href="/" className="flex items-center gap-3" aria-label="FastTrade99 home">
        <span className="flex size-14 items-center justify-center rounded-full border-2 border-primary bg-card text-2xl font-extrabold text-primary shadow-sm">FT</span>
        <span className="font-display text-[38px] font-extrabold leading-none tracking-normal text-brand-navy">fasttrade<span className="text-primary">99</span></span>
      </a>
      <div className="hidden items-center gap-8 text-base font-extrabold text-brand-navy xl:flex">
        {navItems.map((item) => (
          <a key={item} href={item === "About Us" ? "/about" : item === "Pricing" ? "/#pricing" : item === "For Business" ? "/business" : item === "For Non-Traders" ? "/non-traders" : item === "For Traders" ? "/traders" : "#"} className={`relative py-10 transition-colors hover:text-primary ${item === "For Traders" ? "text-primary after:absolute after:bottom-2 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-primary" : ""}`}>{item}</a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="brandOutline" size="lg" className="h-14 rounded-md px-7 text-base font-extrabold">Login</Button>
        <Button variant="brand" size="lg" className="h-14 rounded-md px-7 text-base font-extrabold shadow-button">Sign Up</Button>
      </div>
    </nav>
  </header>
);

const IconCircle = ({ Icon, tone = "primary" }: { Icon: typeof ShieldCheck; tone?: "primary" | "success" }) => (
  <span className={`flex size-20 shrink-0 items-center justify-center rounded-full shadow-button ${tone === "success" ? "bg-success text-success-foreground" : "bg-gradient-brand text-primary-foreground"}`}>
    <Icon className="size-10" />
  </span>
);

const Traders = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />

    <section className="mx-auto max-w-[1920px] px-6 pb-2 pt-5 2xl:px-8">
      <div className="grid min-h-[610px] overflow-hidden rounded-xl border bg-card shadow-sm lg:grid-cols-[0.34fr_0.66fr]">
        <div className="flex flex-col justify-center px-7 py-9 xl:px-10">
          <p className="mb-7 inline-flex w-fit rounded-lg bg-secondary px-3 py-1 text-base font-extrabold uppercase leading-none text-primary">For Traders</p>
          <h1 className="font-display text-[clamp(3rem,3.65vw,4.25rem)] font-extrabold leading-[1.08] text-brand-navy">Trade Like Institutions.<br /><span className="text-primary">Execute Like AI.</span></h1>
          <p className="mt-6 max-w-[620px] text-[21px] font-extrabold leading-8 text-muted-foreground">AI-powered strategies, automated execution and risk-managed trading for consistent 10–12% monthly returns.</p>
          <div className="mt-10 grid grid-cols-4 gap-5">
            {[[BadgeIndianRupee, "₹4Cr+", "Capital Deployed"], [Bot, "99+", "Live Accounts"], [Target, "10–12%", "Average Monthly\nReturns"], [BarChart3, "High", "Momentum\nPrecision"]].map(([Icon, value, label]) => { const StatIcon = Icon as typeof ShieldCheck; return <div key={label as string} className="border-r border-border last:border-r-0 pr-3"><span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary"><StatIcon className="size-7" /></span><p className="mt-4 font-display text-[34px] font-extrabold leading-none text-brand-navy">{value as string}</p><p className="mt-3 whitespace-pre-line text-base font-extrabold leading-5 text-muted-foreground">{label as string}</p></div>; })}
          </div>
          <div className="mt-9 grid grid-cols-2 gap-5">
            <Button variant="brand" className="h-16 rounded-md text-lg font-extrabold shadow-button">Start Trading Now <ArrowRight className="size-6" /></Button>
            <Button variant="brandOutline" className="h-16 rounded-md text-lg font-extrabold text-primary">View Live Performance <LineChart className="size-6" /></Button>
          </div>
        </div>
        <div className="relative min-h-[610px] overflow-hidden bg-brand-navy">
          <img src={traderHero} alt="Professional trader monitoring FastTrade99 AI trading charts" width={1600} height={900} className="h-full w-full object-cover object-center contrast-[1.06] saturate-[1.12]" />
          <div className="absolute inset-y-0 left-0 w-52 bg-gradient-to-r from-card via-card/70 to-transparent" />
          <div className="absolute right-5 top-5 w-[390px] rounded-xl border border-primary-foreground/10 bg-brand-navy/90 p-7 text-primary-foreground shadow-card backdrop-blur">
            <div className="flex items-center justify-between"><h2 className="text-xl font-extrabold">Live Performance</h2><span className="rounded-md border border-primary-foreground/15 px-4 py-2 text-sm font-bold">This Month</span></div>
            <p className="mt-6 text-base font-bold text-primary-foreground/70">Total P&L</p><p className="mt-2 font-display text-[42px] font-extrabold text-success">+10.68%</p><p className="mt-1 text-[27px] font-extrabold">₹42,72,380</p><p className="mt-4 text-base font-extrabold text-primary-foreground/70">vs Last Month <span className="text-success">+9.21%</span></p>
            <svg viewBox="0 0 320 116" className="mt-4 h-[116px] w-full" aria-label="Live performance curve"><path d="M8 102 L30 88 L48 91 L66 74 L84 79 L102 61 L120 68 L138 51 L156 58 L174 38 L192 44 L210 35 L228 43 L246 24 L264 29 L282 18 L310 5" fill="none" stroke="hsl(var(--success))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 102 L30 88 L48 91 L66 74 L84 79 L102 61 L120 68 L138 51 L156 58 L174 38 L192 44 L210 35 L228 43 L246 24 L264 29 L282 18 L310 5 L310 116 L8 116Z" fill="hsl(var(--success) / 0.18)" /></svg>
          </div>
          <div className="absolute bottom-5 right-5 grid w-[390px] grid-cols-2 gap-3 text-primary-foreground"><div className="rounded-xl border border-primary-foreground/10 bg-brand-navy/90 p-6 backdrop-blur"><p className="font-extrabold text-primary-foreground/80">Capital Deployed</p><p className="mt-4 text-[28px] font-extrabold">₹4,12,35,450</p><p className="mt-4 font-extrabold text-success">+18.45%</p></div><div className="rounded-xl border border-primary-foreground/10 bg-brand-navy/90 p-6 backdrop-blur"><p className="font-extrabold text-primary-foreground/80">Active Accounts</p><p className="mt-4 text-[28px] font-extrabold">99+</p><p className="mt-4 font-extrabold text-success">+12 This Month</p></div></div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-[1920px] px-6 py-2 2xl:px-8">
      <div className="grid rounded-xl border bg-card px-8 py-7 shadow-sm xl:grid-cols-4">
        {featureBlocks.map(([Icon, title, bullets, tone], index) => { const FeatureIcon = Icon as typeof ShieldCheck; return <article key={title as string} className="flex gap-7 border-border px-6 first:pl-0 last:pr-0 xl:border-r last:border-r-0"><IconCircle Icon={FeatureIcon} tone={tone as "primary" | "success"} /><div><h2 className="text-[22px] font-extrabold text-brand-navy">{title as string}</h2><ul className="mt-4 space-y-3">{(bullets as string[]).map((item) => <li key={item} className="flex gap-3 text-base font-bold leading-6 text-muted-foreground"><Check className={`mt-1 size-4 shrink-0 ${tone === "success" ? "text-success" : "text-primary"}`} />{item}</li>)}</ul></div>{index < featureBlocks.length - 1 && null}</article>; })}
      </div>
    </section>

    <section className="mx-auto max-w-[1920px] px-6 py-2 2xl:px-8">
      <div className="rounded-xl bg-card py-6">
        <h2 className="text-center font-display text-[34px] font-extrabold text-brand-navy">How FastTrade99 Works</h2><p className="text-center text-xl font-extrabold text-muted-foreground">AI-driven. Rule-based. Emotion-free.</p>
        <div className="mt-7 grid gap-16 xl:grid-cols-4">
          {workSteps.map(([Icon, title, bullets, tone], index) => { const StepIcon = Icon as typeof ShieldCheck; return <article key={title as string} className={`relative flex min-h-[194px] items-center gap-7 rounded-xl border p-7 shadow-sm ${tone === "success" ? "bg-success/5" : "bg-secondary/35"}`}>{index < workSteps.length - 1 && <ArrowRight className="absolute -right-12 top-1/2 hidden size-10 -translate-y-1/2 text-primary xl:block" />}<StepIcon className={`size-20 shrink-0 ${tone === "success" ? "text-success" : "text-primary"}`} /><div><div className="flex items-center gap-4"><span className={`flex size-10 items-center justify-center rounded-full text-xl font-extrabold text-primary-foreground ${tone === "success" ? "bg-success" : "bg-gradient-brand"}`}>{index + 1}</span><h3 className="text-[22px] font-extrabold text-brand-navy">{title as string}</h3></div><ul className="mt-5 space-y-3">{(bullets as string[]).map((item) => <li key={item} className="flex gap-3 text-base font-bold text-muted-foreground"><Check className={`mt-1 size-4 shrink-0 ${tone === "success" ? "text-success" : "text-primary"}`} />{item}</li>)}</ul></div></article>; })}
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-[1920px] gap-4 px-6 py-2 2xl:px-8 xl:grid-cols-[0.62fr_0.38fr]">
      <div className="rounded-xl border bg-card p-8 shadow-sm"><h2 className="font-display text-[30px] font-extrabold text-brand-navy">Live Performance Snapshot</h2><div className="mt-5 grid grid-cols-4 gap-5">{metrics.map(([label, value, sub]) => <article key={label} className="rounded-xl border bg-card px-6 py-5 shadow-sm"><p className="text-base font-extrabold text-brand-navy">{label}</p><p className="mt-4 font-display text-[38px] font-extrabold leading-none text-brand-navy">{value}</p><p className={`mt-3 text-lg font-extrabold ${sub.startsWith("+") ? "text-success" : "text-muted-foreground"}`}>{sub}</p></article>)}</div><div className="mt-5 grid gap-0 lg:grid-cols-[0.58fr_0.42fr]"><div className="rounded-l-xl border bg-card p-6"><h3 className="text-xl font-extrabold text-brand-navy">Equity Curve</h3><svg viewBox="0 0 620 250" className="mt-2 h-[250px] w-full" aria-label="May equity curve"><defs><linearGradient id="traderEq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--success) / 0.22)"/><stop offset="100%" stopColor="hsl(var(--success) / 0.03)"/></linearGradient></defs>{[35,78,121,164,207].map((y)=><line key={y} x1="55" x2="590" y1={y} y2={y} stroke="hsl(var(--border))"/>)}{[[38,"50L"],[81,"40L"],[124,"30L"],[167,"20L"],[210,"10L"],[238,"0"]].map(([y,t])=><text key={t} x="8" y={Number(y)} fill="hsl(var(--brand-navy))" fontSize="15" fontWeight="800">{t}</text>)}<path d="M60 210 L86 197 L112 189 L138 172 L164 161 L190 154 L216 139 L242 127 L268 132 L294 111 L320 120 L346 88 L372 76 L398 91 L424 58 L450 70 L476 46 L502 31 L528 42 L554 17 L586 15" fill="none" stroke="hsl(var(--success))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M60 210 L86 197 L112 189 L138 172 L164 161 L190 154 L216 139 L242 127 L268 132 L294 111 L320 120 L346 88 L372 76 L398 91 L424 58 L450 70 L476 46 L502 31 L528 42 L554 17 L586 15 L586 238 L60 238Z" fill="url(#traderEq)" />{[[70,"May 1"],[190,"May 7"],[310,"May 13"],[430,"May 19"],[540,"May 25"],[585,"May 31"]].map(([x,t])=><text key={t} x={Number(x)-24} y="244" fill="hsl(var(--brand-navy))" fontSize="15" fontWeight="800">{t}</text>)}</svg></div><div className="rounded-r-xl border border-l-0 bg-card p-6"><h3 className="text-xl font-extrabold text-brand-navy">Strategy Performance</h3><div className="mt-7 flex items-center gap-8"><div className="relative size-52 rounded-full" style={{ background: "conic-gradient(hsl(var(--success)) 0 38%, hsl(var(--brand-blue)) 38% 62%, hsl(var(--brand-violet)) 62% 84%, hsl(var(--brand-orange)) 84% 100%)" }}><div className="absolute inset-12 flex flex-col items-center justify-center rounded-full bg-card text-center"><span className="font-display text-3xl font-extrabold text-brand-navy">+10.68%</span><span className="font-bold text-muted-foreground">Total Return</span></div></div><ul className="flex-1 space-y-6">{strategies.map(([name, ret], index) => <li key={name} className="flex items-center justify-between gap-6 text-base font-extrabold"><span className="flex items-center gap-3 text-brand-navy"><span className={`size-3 rounded-full ${index === 0 ? "bg-success" : index === 1 ? "bg-primary" : index === 2 ? "bg-brand-violet" : "bg-brand-orange"}`} />{name}</span><span className="text-success">{ret}</span></li>)}</ul></div></div></div></div>
      <div className="rounded-xl border bg-card p-8 shadow-sm"><h2 className="font-display text-[30px] font-extrabold text-brand-navy">Top Strategies <span className="text-lg text-muted-foreground">(This Month)</span></h2><div className="mt-6 overflow-hidden rounded-xl border"><div className="grid grid-cols-[1.35fr_0.8fr_0.7fr_0.8fr] bg-secondary px-6 py-4 text-base font-extrabold text-brand-navy"><span>Strategy</span><span>Return</span><span>Trades</span><span>Win Rate</span></div>{strategies.map(([name, ret, trades, win]) => <div key={name} className="grid grid-cols-[1.35fr_0.8fr_0.7fr_0.8fr] border-t px-6 py-6 text-base font-extrabold"><span className="text-brand-navy">{name}</span><span className="text-success">{ret}</span><span className="text-brand-navy">{trades}</span><span className="text-success">{win}</span></div>)}</div><div className="mt-9 flex items-center gap-6 rounded-xl bg-secondary p-7"><Sparkles className="size-12 shrink-0 text-primary" /><p className="text-xl font-extrabold leading-7 text-brand-navy">AI selects & adapts best strategies based on market conditions for higher probability & consistent results.</p></div></div>
    </section>

    <section className="mx-auto max-w-[1920px] px-6 py-2 2xl:px-8"><div className="rounded-xl border bg-card px-8 py-7 shadow-sm"><h2 className="text-center font-display text-[34px] font-extrabold text-brand-navy">Why Traders Love FastTrade99</h2><div className="mt-7 grid gap-6 lg:grid-cols-6">{loveItems.map(([Icon, text]) => { const LoveIcon = Icon as typeof ShieldCheck; return <article key={text as string} className="flex items-center gap-5 border-border lg:border-r last:border-r-0"><span className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary"><LoveIcon className="size-10" /></span><h3 className="whitespace-pre-line text-lg font-extrabold leading-7 text-brand-navy">{text as string}</h3></article>; })}</div></div></section>

    <section className="mx-auto grid max-w-[1920px] gap-4 px-6 py-2 2xl:px-8 xl:grid-cols-[0.46fr_0.27fr_0.27fr]">
      <div className="rounded-xl border bg-card p-8 shadow-sm"><h2 className="font-display text-[30px] font-extrabold text-brand-navy">Strategy Intelligence</h2><div className="mt-8 grid gap-6 lg:grid-cols-[0.52fr_0.48fr]"><div className="space-y-8">{intelligence.map(([Icon, title, text]) => { const IntelIcon = Icon as typeof ShieldCheck; return <article key={title as string} className="flex gap-6"><span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"><IntelIcon className="size-8" /></span><div><h3 className="text-lg font-extrabold text-brand-navy">{title as string}</h3><p className="mt-2 text-base font-bold leading-6 text-muted-foreground">{text as string}</p></div></article>; })}</div><div className="rounded-xl bg-brand-navy p-8 text-primary-foreground shadow-card"><h3 className="text-2xl font-extrabold">Our Core Edge</h3><ul className="mt-6 space-y-5">{["AI Powered Market Analysis", "High Probability Setups Only", "Dynamic Strategies", "Strict Risk Management", "Consistent 10–12% Monthly Returns"].map((item) => <li key={item} className="flex items-center gap-4 text-lg font-extrabold"><Check className="size-6 text-success" />{item}</li>)}</ul><div className="mx-auto mt-9 flex size-36 rotate-45 items-center justify-center rounded-3xl bg-primary/25 shadow-button ring-1 ring-primary/40"><span className="-rotate-45 font-display text-5xl font-extrabold text-primary-foreground">AI</span></div></div></div></div>
      <div className="rounded-xl border bg-card p-8 shadow-sm"><h2 className="font-display text-[28px] font-extrabold text-brand-navy">Live Market Pulse <span className="text-base text-muted-foreground">(AI View)</span></h2><div className="mt-6 space-y-7">{[["NIFTY 50", "22,530.70"], ["BANK NIFTY", "48,125.40"]].map(([name, value]) => <div key={name} className="border-b pb-5"><p className="text-lg font-extrabold text-brand-navy">{name}</p><div className="mt-2 flex items-center justify-between"><p className="font-display text-3xl font-extrabold text-brand-navy">{value}</p><svg viewBox="0 0 190 50" className="h-12 w-48"><path d="M4 34 L18 18 L31 27 L45 20 L58 24 L72 13 L86 33 L100 22 L115 30 L130 18 L145 26 L160 10 L180 18" fill="none" stroke="hsl(var(--success))" strokeWidth="4" strokeLinecap="round" /></svg></div></div>)}<div><p className="text-lg font-extrabold text-brand-navy">Market Momentum</p><p className="mt-2 font-display text-[36px] font-extrabold text-success">Strong</p><p className="font-bold text-muted-foreground">Bullish Bias</p></div><div><div className="flex items-center justify-between text-base font-extrabold text-brand-navy"><span>AI Confidence Score</span><span>85%</span></div><div className="mt-3 h-3 rounded-full bg-secondary"><div className="h-full w-[85%] rounded-full bg-success" /></div></div></div></div>
      <div className="rounded-xl border bg-card p-8 shadow-sm"><h2 className="font-display text-[28px] font-extrabold text-brand-navy">Capital Allocation <span className="text-base text-muted-foreground">(This Month)</span></h2><div className="mt-6 flex items-center gap-8"><div className="relative size-56 rounded-full" style={{ background: "conic-gradient(hsl(var(--primary)) 0 40%, hsl(var(--success)) 40% 70%, hsl(var(--brand-violet)) 70% 90%, hsl(var(--brand-orange)) 90% 100%)" }}><div className="absolute inset-14 flex flex-col items-center justify-center rounded-full bg-card text-center"><span className="font-display text-[30px] font-extrabold text-brand-navy">₹4.12Cr+</span><span className="font-bold text-muted-foreground">Total Deployed</span></div></div><ul className="flex-1 space-y-5 text-base font-extrabold text-brand-navy">{[["Momentum Pro", "40%"], ["AI Swing", "30%"], ["Multi Average", "20%"], ["Alpha Breakout", "10%"]].map(([name, percent], i) => <li key={name} className="flex justify-between"><span className="flex items-center gap-3"><span className={`size-3 rounded-full ${i === 0 ? "bg-primary" : i === 1 ? "bg-success" : i === 2 ? "bg-brand-violet" : "bg-brand-orange"}`} />{name}</span><span>{percent}</span></li>)}</ul></div><div className="mt-8 rounded-xl bg-secondary px-7 py-6 text-center"><p className="text-xl font-extrabold text-brand-navy">Diversified. Controlled. Optimized.</p><p className="mt-2 text-base font-bold text-muted-foreground">Built for consistent long-term growth.</p></div></div>
    </section>

    <section className="mx-auto max-w-[1920px] px-6 pb-8 pt-2 2xl:px-8"><div className="rounded-xl border bg-card px-8 py-7 shadow-sm"><h2 className="text-center font-display text-[34px] font-extrabold text-brand-navy">Risk & Compliance First</h2><div className="mt-7 grid gap-6 lg:grid-cols-6">{compliance.map(([Icon, text]) => { const CompIcon = Icon as typeof ShieldCheck; return <article key={text as string} className="flex items-center justify-center gap-5"><span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"><CompIcon className="size-8" /></span><h3 className="whitespace-pre-line text-base font-extrabold leading-6 text-brand-navy">{text as string}</h3></article>; })}</div></div><div className="mt-5 grid overflow-hidden rounded-xl bg-brand-navy text-primary-foreground shadow-card xl:grid-cols-[0.58fr_0.42fr]"><div className="bg-primary/25 p-8"><h2 className="font-display text-[30px] font-extrabold">What Traders Say</h2><div className="mt-6 grid gap-4 lg:grid-cols-3">{testimonials.map(([quote, name, role, position]) => <article key={name as string} className="rounded-xl bg-card p-6 text-brand-navy"><Quote className="size-10 fill-success text-success" /><p className="mt-2 text-base font-bold leading-7">{quote as string}</p><div className="mt-7 flex items-center gap-4"><span className="size-16 shrink-0 overflow-hidden rounded-full bg-secondary"><img src={traderAvatars} alt={`${name as string} trader portrait`} width={1536} height={512} loading="lazy" className={`h-full w-[300%] max-w-none object-cover ${position === "left" ? "object-left" : position === "center" ? "-translate-x-1/3 object-center" : "-translate-x-2/3 object-right"}`} /></span><div><p className="font-extrabold">{name as string}</p><p className="text-sm font-bold text-muted-foreground">{role as string}</p><div className="mt-1 flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-brand-gold text-brand-gold" />)}</div></div></div></article>)}</div></div><div className="flex flex-col justify-center p-12"><h2 className="font-display text-[42px] font-extrabold leading-tight">Ready to Trade Smarter with AI?</h2><p className="mt-5 text-2xl font-bold leading-9 text-primary-foreground/80">Join thousands of traders earning consistent returns with FastTrade99.</p><div className="mt-9 grid grid-cols-2 gap-6"><Button variant="brand" className="h-[72px] rounded-xl text-xl font-extrabold shadow-button">Start Trading Now <ArrowRight className="size-7" /></Button><Button variant="brandOutline" className="h-[72px] rounded-xl border-primary-foreground/40 bg-transparent text-xl font-extrabold text-primary-foreground hover:bg-card/10">Book a Free Demo <CalendarDays className="size-6" /></Button></div><div className="mt-9 grid grid-cols-4 gap-4 text-sm font-extrabold text-primary-foreground/75">{[[ShieldCheck, "Instant Setup"], [ShieldCheck, "Secure & Encrypted"], [Headphones, "24/7 Support"], [CalendarDays, "Cancel Anytime"]].map(([Icon, text]) => { const FootIcon = Icon as typeof ShieldCheck; return <span key={text as string} className="flex items-center gap-2"><FootIcon className="size-5" />{text as string}</span>; })}</div></div></div></section>
  </main>
);

export default Traders;