import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDot,
  Gauge,
  LineChart,
  Lock,
  Network,
  PieChart,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react";
import brokerZerodha from "@/assets/broker-zerodha.png";
import brokerUpstox from "@/assets/broker-upstox.png";
import brokerAngelOne from "@/assets/broker-angelone.png";
import brokerIcici from "@/assets/broker-icici.png";
import brokerPaisa from "@/assets/broker-5paisa.png";
import brokerDhan from "@/assets/broker-dhan.png";
import ftCircleLogo from "@/assets/fasttrade99-ft-official.png";
import { Button } from "@/components/ui/button";
import { Footer, Header } from "@/components/SiteChrome";

const brokers = [
  { name: "ZERODHA", logo: brokerZerodha },
  { name: "upstox", logo: brokerUpstox },
  { name: "AngelOne", logo: brokerAngelOne },
  { name: "ICICI direct", logo: brokerIcici },
  { name: "5paisa", logo: brokerPaisa },
  { name: "dhan", logo: brokerDhan },
];

const sideNav = ["Dashboard", "Portfolio", "Strategies", "Backtest", "Algo Trading", "Orders", "Positions", "Risk Manager", "Reports", "Followers", "Settings"];

const audienceCards = [
  {
    title: "For Traders",
    text: "Build your own strategies with no-code or low-code tools.",
    tone: "blue",
    Icon: User,
    bullets: ["Drag & Drop Strategy Builder", "Backtest with Historical Data", "Optimize & Deploy Instantly", "Real-time Performance Tracking"],
  },
  {
    title: "For Non-Traders",
    text: "Use our proven AI strategies and automate your trades.",
    tone: "green",
    Icon: Bot,
    bullets: ["Choose from Ready Strategies", "Connect Your Broker & Start", "Auto Risk Management", "Set Goals & Let AI Trade"],
  },
  {
    title: "For Business",
    text: "Connect all friends & family, manage accounts and earn performance fees.",
    tone: "violet",
    Icon: Users,
    bullets: ["Sub-Accounts Management", "Performance Fee Sharing", "Real-time Analytics", "Reports & Statements"],
  },
];

const features = [
  [Network, "Multi-Broker Integration", "Connect with multiple brokers through a single unified platform.", "text-brand-navy"],
  [ShieldCheck, "Trade-Level Risk Management", "Set Stop Loss, Target, Position Size and more for every trade.", "text-success"],
  [ShieldCheck, "Strategy-Level Risk Management", "Define risk limits, exposure, drawdown and win rate filters.", "text-brand-violet"],
  [Target, "Trailing for Target & Stop Loss", "Advanced trailing for both target and stop loss to lock in profits.", "text-brand-orange"],
  [PieChart, "No-Code Strategy Builder", "Create, test and deploy strategies with our visual builder.", "text-primary"],
  [BarChart3, "Backtesting & Optimization", "Backtest strategies on historical data and optimize performance.", "text-primary"],
  [LineChart, "Analytics & Reports", "Deep insights, custom reports and real-time performance metrics.", "text-brand-violet"],
];

const riskLevels = [
  ["01", "TRADE LEVEL", ["Stop Loss", "Target", "Position Size", "Max Loss Per Trade"], "success"],
  ["02", "STRATEGY LEVEL", ["Max Drawdown", "Daily Loss Limit", "Win Rate Filter", "Exposure Limit"], "primary"],
  ["03", "PORTFOLIO LEVEL", ["Overall Drawdown", "Capital Protection", "Correlation Check", "Diversification"], "violet"],
];

const previewLeft = [
  [BarChart3, "Real-time Charts", "Advanced charting with 100+ indicators."],
  [Gauge, "Strategy Marketplace", "Explore and use proven strategies."],
  [ShieldCheck, "Algo Automation", "Automate your trades 24x7 without coding."],
];

const previewRight = [
  [Zap, "Real-time Orders", "Place, modify and track orders instantly."],
  [ShieldCheck, "Risk Dashboard", "Track all risk metrics in one place."],
  [Target, "Performance Analytics", "Detailed performance reports and insights."],
];

const stats = [
  [Network, "10+", "Broker Integrations"],
  [BarChart3, "100+", "Built-in Strategies"],
  [LineChart, "1M+", "Trades Executed"],
  [Users, "50K+", "Active Users"],
  [Gauge, "99.99%", "System Uptime"],
  [Zap, "24/7", "Auto Trading"],
  [Lock, "Bank Grade", "Security"],
];

const pricingPlans = [
  ["Starter", "₹0", "Explore the platform", ["Paper trading access", "Basic strategy templates", "Broker connection preview"]],
  ["Pro Trader", "₹999", "For active traders", ["Live algo deployment", "Advanced risk controls", "Backtesting & reports"]],
  ["Business", "Custom", "For teams and partners", ["Sub-account management", "Performance fee tracking", "Dedicated onboarding"]],
];

const MiniChart = ({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) => (
  <div className={`relative overflow-hidden rounded-md border ${dark ? "border-primary-foreground/10 bg-brand-navy" : "bg-card"} ${compact ? "h-[210px]" : "h-full min-h-[250px]"}`}>
    <svg className="h-full w-full" viewBox="0 0 620 300" role="img" aria-label="NIFTY 50 candlestick performance chart">
      {Array.from({ length: 7 }).map((_, i) => <line key={`h-${i}`} x1="28" x2="590" y1={42 + i * 36} y2={42 + i * 36} className="stroke-border" strokeWidth="1" opacity={dark ? 0.18 : 0.8} />)}
      {Array.from({ length: 8 }).map((_, i) => <line key={`v-${i}`} y1="24" y2="260" x1={54 + i * 72} x2={54 + i * 72} className="stroke-border" strokeWidth="1" opacity={dark ? 0.13 : 0.72} />)}
      <polyline points="22,178 64,142 102,176 142,122 184,188 224,148 266,136 306,92 348,124 388,76 430,116 472,88 512,106 554,66 592,44" fill="none" className="stroke-success" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
      {Array.from({ length: 34 }).map((_, i) => {
        const x = 34 + i * 16.5;
        const high = 70 + ((i * 29) % 108);
        const low = high + 38 + ((i * 17) % 36);
        const positive = i % 5 !== 1 && i % 7 !== 2;
        const bodyTop = positive ? high + 12 : high + 26;
        const bodyHeight = 22 + ((i * 13) % 24);
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={high} y2={low} className={positive ? "stroke-success" : "stroke-destructive"} strokeWidth="2" />
            <rect x={x - 5} y={bodyTop} width="10" height={bodyHeight} rx="2" className={positive ? "fill-success" : "fill-destructive"} />
          </g>
        );
      })}
      {dark && Array.from({ length: 31 }).map((_, i) => <rect key={`vol-${i}`} x={35 + i * 17} y={266 - ((i * 19) % 48)} width="9" height={18 + ((i * 19) % 48)} rx="2" className={i % 5 === 1 ? "fill-destructive" : "fill-success"} opacity="0.58" />)}
    </svg>
  </div>
);

const BrokerStrip = () => (
  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-7">
    {brokers.map((broker) => (
      <div key={broker.name} className="flex h-[72px] items-center justify-center rounded-md border border-primary/15 bg-card px-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
        <img src={broker.logo} alt={`${broker.name} broker logo`} className="max-h-12 max-w-[132px] object-contain" />
      </div>
    ))}
    <div className="flex h-[72px] items-center justify-center rounded-md border border-primary/15 bg-card px-4 text-lg font-extrabold text-primary shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">+ More</div>
  </div>
);

const DashboardMockup = () => (
  <div className="overflow-hidden rounded-xl border bg-card shadow-card">
    <div className="flex min-h-[76px] items-center justify-between border-b px-5">
      <div className="flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-full bg-gradient-brand text-lg font-extrabold text-primary-foreground">FT</span><span className="text-2xl font-extrabold text-brand-navy">fasttrade99</span></div>
      <div className="flex items-center gap-5 text-sm font-extrabold text-brand-navy"><span className="rounded-md bg-success/10 px-3 py-1 text-success">● Live</span><Search className="size-5" /><span className="hidden sm:inline">Arjun Trader</span></div>
    </div>
    <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[190px_1fr]">
      <aside className="hidden border-r bg-muted/40 p-3 lg:block">
        {sideNav.map((item, index) => <div key={item} className={`mb-1 flex h-11 items-center gap-3 rounded-md px-4 text-sm font-extrabold ${index === 0 ? "bg-gradient-brand text-primary-foreground shadow-button" : "text-muted-foreground"}`}><CircleDot className="size-4" />{item}</div>)}
      </aside>
      <div className="space-y-4 p-4 lg:p-5">
        <h2 className="text-lg font-extrabold text-brand-navy">Portfolio Overview</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {["Total Equity|₹ 12,75,430.50|+2.81% (₹ 34,870.25)", "Today’s P&L|₹ 24,530.75|+1.96%", "Total Return|+28.56%|All Time"].map((card) => {
            const [a, b, c] = card.split("|");
            return <div key={a} className="rounded-xl border bg-background p-5"><p className="text-sm font-extrabold text-muted-foreground">{a}</p><p className="mt-3 text-2xl font-extrabold text-brand-navy">{b}</p><p className="mt-2 text-base font-extrabold text-success">{c}</p></div>;
          })}
        </div>
        <div className="grid gap-4 xl:grid-cols-[1fr_310px]">
          <div className="rounded-xl border bg-background p-4"><div className="mb-3 flex flex-wrap items-center justify-between gap-3"><p className="font-extrabold text-brand-navy">NIFTY 50 <span className="ml-3 text-success">24,813.55 +110.25 (0.45%)</span></p><span className="text-xs font-extrabold text-muted-foreground">1D 1W 1M 3M 1Y</span></div><MiniChart compact /></div>
          <div className="rounded-xl border bg-background p-5"><div className="flex justify-between"><h3 className="font-extrabold text-brand-navy">Market Watch</h3><span className="font-extrabold text-primary">View All</span></div>{["NIFTY 50|24,813.55|+0.45%", "BANKNIFTY|51,290.40|+0.67%", "RELIANCE|₹ 2,851.45|+1.35%", "TCS|₹ 4,215.30|-0.42%", "INFY|₹ 1,678.20|+0.18%"].map((row) => { const [a,b,c]=row.split("|"); return <div key={a} className="mt-5 grid grid-cols-3 gap-2 text-sm font-extrabold"><span>{a}</span><span>{b}</span><span className={c.startsWith("-") ? "text-destructive" : "text-success"}>{c}</span></div>; })}</div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{["Open Positions|18", "Winning Trades|65%", "Profit Factor|2.45", "Max Drawdown|8.62%", "Available Margin|₹ 3,45,780"].map((item) => { const [a,b]=item.split("|"); return <div key={a} className="rounded-lg border bg-background p-4"><p className="text-sm font-bold text-muted-foreground">{a}</p><p className="mt-2 text-2xl font-extrabold text-brand-navy">{b}</p></div>; })}</div>
      </div>
    </div>
  </div>
);

const AudienceVisual = ({ title }: { title: string }) => {
  if (title === "For Traders") {
    return <div className="w-full rounded-lg bg-brand-navy p-4 text-primary-foreground shadow-card"><p className="mb-3 font-extrabold">Strategy Builder</p>{[["If", ""], ["Else", "Condition"], ["Then", "Buy"], ["Else", "Sell"]].map(([a,b], i) => <div key={`${a}-${i}`} className="mb-3 rounded-md bg-primary-foreground/10 px-4 py-2 font-extrabold"><span className={`rounded px-3 py-1 text-xs ${i === 2 ? "bg-success" : i === 3 ? "bg-destructive" : "bg-primary"}`}>{a}</span> {b}</div>)}</div>;
  }
  if (title === "For Non-Traders") {
    return <div className="relative h-56 w-full overflow-hidden rounded-md bg-gradient-soft shadow-sm"><div className="absolute left-12 top-8 flex size-20 items-center justify-center rounded-lg bg-card shadow-card"><Bot className="size-14 text-primary" /></div><div className="absolute bottom-8 left-20 h-16 w-10 rounded-t bg-success/25" /><div className="absolute bottom-8 left-36 h-24 w-10 rounded-t bg-success/35" /><div className="absolute bottom-8 left-52 h-32 w-10 rounded-t bg-success/55" /><TrendingUp className="absolute bottom-9 right-8 size-32 stroke-[4] text-success" /></div>;
  }
  return <div className="relative flex h-56 w-full items-center justify-center"><div className="absolute size-44 rounded-full border-2 border-primary/25" /><div className="absolute size-28 rounded-full border border-primary/10 bg-primary/5" /><BriefcaseBusiness className="relative z-10 size-24 rounded-xl bg-secondary p-3 text-primary" />{Array.from({ length: 6 }).map((_, i) => <Users key={i} className="absolute size-10 rounded-full bg-background p-2 text-primary shadow-sm" style={{ left: `${48 + Math.cos((i / 6) * Math.PI * 2) * 78}px`, top: `${86 + Math.sin((i / 6) * Math.PI * 2) * 78}px` }} />)}</div>;
};

const PlatformPreview = () => (
  <div className="mt-5 grid items-center gap-6 rounded-xl border bg-card p-6 shadow-sm xl:grid-cols-[280px_1fr_280px]">
    <div className="space-y-8">{previewLeft.map(([Icon, title, text]) => { const I = Icon as typeof BarChart3; return <div key={title as string} className="flex gap-5"><I className="size-12 shrink-0 rounded-full bg-secondary p-2 text-primary" /><div><h3 className="font-extrabold text-brand-navy">{title as string}</h3><p className="mt-1 text-sm font-bold leading-6 text-muted-foreground">{text as string}</p></div></div>; })}</div>
    <div className="grid overflow-hidden rounded-xl border border-primary/25 bg-brand-navy text-primary-foreground shadow-card lg:grid-cols-[54px_1.3fr_0.72fr_0.55fr]">
      <div className="hidden border-r border-primary-foreground/10 bg-primary-foreground/5 py-3 lg:block">{[BarChart3, LineChart, Gauge, Network, Target, ShieldCheck, PieChart].map((Icon, i) => <span key={i} className="mx-auto mb-3 flex size-9 items-center justify-center rounded-md text-primary-foreground/70 first:bg-primary/30 first:text-primary-foreground"><Icon className="size-5" /></span>)}</div>
      <div className="p-4"><div className="mb-3 flex flex-wrap items-center gap-4 text-xs font-extrabold text-primary-foreground/70"><span>NIFTY 50</span><ChevronDown className="size-4" /><span>1m</span><span>5m</span><span>15m</span><span>1H</span><span>D</span><span>W</span><span>M</span><span>Indicators</span></div><h3 className="text-3xl font-extrabold text-success">24,813.55</h3><p className="font-extrabold text-success">+110.25 (0.45%)</p><MiniChart dark compact /></div>
      <div className="border-t border-primary-foreground/10 p-4 lg:border-l lg:border-t-0"><h3 className="font-extrabold">Positions (6)</h3><p className="mt-4 text-sm text-primary-foreground/70">Total P&L</p><p className="mt-1 text-xl font-extrabold text-success">+₹ 24,530.75</p>{["RELIANCE|+ ₹ 6,210.00", "BANKNIFTY|+ ₹ 5,320.00", "TCS|- ₹ 1,150.00", "INFY|+ ₹ 2,450.00"].map((x) => { const [a,b]=x.split("|"); return <p key={a} className="mt-4 flex justify-between text-sm font-bold"><span>{a}</span><span className={b.includes("-") ? "text-destructive" : "text-success"}>{b}</span></p>; })}<div className="mt-5 grid grid-cols-2 gap-3"><Button variant="brand" size="sm">New Order</Button><Button variant="brandOutline" size="sm" className="bg-transparent text-primary-foreground">Strategy Builder</Button></div></div>
      <div className="border-t border-primary-foreground/10 p-4 lg:border-l lg:border-t-0"><h3 className="font-extrabold">Risk Summary</h3><div className="mt-5 flex items-center gap-4"><div className="size-24 rounded-full border-[16px] border-success border-r-brand-gold border-b-brand-orange" /><div className="space-y-3 text-xs font-bold"><p>Low Risk <span className="float-right ml-5">60%</span></p><p>Medium Risk 30%</p><p>High Risk 10%</p></div></div><div className="mt-6 rounded-lg border border-primary-foreground/10 p-4"><p className="font-extrabold">Daily Risk Limit</p><p className="mt-3 text-2xl font-extrabold">₹ 50,000</p><p className="mt-2 text-sm font-bold text-primary-foreground/65">Used: ₹ 18,450 (36.9%)</p><div className="mt-3 h-3 overflow-hidden rounded-full bg-primary-foreground/15"><div className="h-full w-[37%] rounded-full bg-success" /></div></div></div>
    </div>
    <div className="space-y-8">{previewRight.map(([Icon, title, text]) => { const I = Icon as typeof Zap; return <div key={title as string} className="flex gap-5"><I className="size-12 shrink-0 rounded-full bg-secondary p-2 text-primary" /><div><h3 className="font-extrabold text-brand-navy">{title as string}</h3><p className="mt-1 text-sm font-bold leading-6 text-muted-foreground">{text as string}</p></div></div>; })}</div>
  </div>
);

const AnimatedRobot = () => (
  <div className="relative mx-auto h-[236px] w-[270px] animate-float">
    <div className="absolute inset-x-8 bottom-1 h-5 rounded-full bg-primary/10 blur-sm" />
    <div className="absolute left-14 top-5 h-28 w-40 rounded-[2.75rem] border bg-card shadow-card"><div className="absolute left-7 top-8 h-10 w-24 rounded-2xl bg-brand-navy"><span className="absolute left-5 top-3 size-4 animate-blink rounded-full bg-primary-glow" /><span className="absolute right-5 top-3 size-4 animate-blink rounded-full bg-primary-glow" /><span className="absolute bottom-2 left-11 h-1.5 w-8 rounded-full bg-success" /></div><span className="absolute -left-3 top-9 h-11 w-5 rounded-full bg-primary" /><span className="absolute -right-3 top-9 h-11 w-5 rounded-full bg-primary" /></div>
    <div className="absolute left-[91px] top-[120px] h-20 w-20 rounded-[1.4rem] border bg-card p-3 shadow-sm"><img src={ftCircleLogo} alt="FastTrade99 FT logo" className="size-full rounded-full object-cover" /></div>
    <div className="absolute left-4 top-[132px] h-20 w-8 -rotate-12 rounded-full bg-card shadow-sm" /><div className="absolute right-8 top-[116px] h-24 w-8 origin-bottom animate-wave rounded-full bg-card shadow-sm" /><div className="absolute right-2 top-[88px] text-4xl text-primary">✌</div>
    <div className="absolute bottom-0 left-16 h-12 w-8 rounded-full bg-primary/20" /><div className="absolute bottom-0 right-16 h-12 w-8 rounded-full bg-primary/20" />
  </div>
);

const Index = () => (
  <main id="top" className="min-h-screen bg-background text-foreground">
    <Header />

    <section className="mx-auto grid max-w-[1920px] items-center gap-8 px-5 py-8 lg:grid-cols-[0.44fr_0.56fr] lg:px-8 xl:gap-10 2xl:px-10">
      <div className="min-w-0">
        <h1 className="font-display text-4xl font-extrabold leading-[1.12] text-brand-navy sm:text-5xl xl:text-[64px] 2xl:text-[74px]">Trade Smarter with <span className="block text-primary">AI-Powered</span> Multi-Broker Platform</h1>
        <p className="mt-6 max-w-[760px] text-lg font-bold leading-8 text-muted-foreground xl:text-xl">FastTrade99 connects with multiple brokers, empowers you to build strategies with no-code or low-code and executes trades with advanced multi-level risk management.</p>
        <div className="mt-7 grid gap-4 text-base font-extrabold text-brand-navy sm:grid-cols-3"><span className="flex items-center gap-3"><Check className="size-6 rounded-full border-2 border-success p-0.5 text-success" />Multi-Broker Access</span><span className="flex items-center gap-3"><Check className="size-6 rounded-full border-2 border-success p-0.5 text-success" />Advanced Risk Management</span><span className="flex items-center gap-3"><Check className="size-6 rounded-full border-2 border-success p-0.5 text-success" />No-Code Strategy Builder</span></div>
        <div className="mt-8 flex flex-wrap gap-5"><Button variant="brand" size="lg" className="h-14 rounded-md px-8 text-lg font-extrabold shadow-button">Start Trading Now →</Button><Button variant="brandOutline" size="lg" className="h-14 rounded-md px-8 text-lg font-extrabold">Explore Strategies →</Button></div>
        <p className="mt-8 text-sm font-extrabold text-muted-foreground">Integrated with Leading Brokers</p>
        <BrokerStrip />
      </div>
      <DashboardMockup />
    </section>

    <section id="how-it-works" className="mx-auto max-w-[1920px] px-5 py-8 lg:px-8 2xl:px-10">
      <div className="text-center"><p className="text-lg font-extrabold uppercase text-primary">Built For Everyone</p><h2 className="mt-3 font-display text-4xl font-extrabold text-brand-navy">One Platform. Endless Possibilities.</h2></div>
      <div className="mt-7 grid gap-6 xl:grid-cols-3">
        {audienceCards.map(({ title, text, tone, Icon, bullets }) => (
          <article key={title} className={`grid min-h-[340px] gap-5 rounded-xl border p-7 shadow-sm lg:grid-cols-[1fr_230px] ${tone === "green" ? "border-success/25 bg-success/5" : tone === "violet" ? "border-primary/25 bg-secondary" : "border-primary/20 bg-primary/5"}`}>
            <div><div className="flex items-start gap-5"><span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-background text-primary shadow-sm"><Icon className="size-9" /></span><div><h3 className={`font-display text-3xl font-extrabold ${tone === "green" ? "text-success" : "text-primary"}`}>{title}</h3><p className="mt-3 text-base font-bold leading-7 text-muted-foreground">{text}</p></div></div><ul className="mt-8 space-y-5">{bullets.map((b) => <li key={b} className="flex items-center gap-4 text-base font-bold text-brand-navy"><Check className={`size-6 rounded-full p-1 text-primary-foreground ${tone === "green" ? "bg-success" : "bg-primary"}`} />{b}</li>)}</ul></div>
            <div className="flex items-end justify-center"><AudienceVisual title={title} /></div>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-[1920px] px-5 py-7 lg:px-8 2xl:px-10">
      <div className="grid rounded-xl border bg-card shadow-sm md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {features.map(([Icon, title, text, color]) => { const FeatureIcon = Icon as typeof Network; return <article key={title as string} className="min-h-[220px] border-b p-5 text-center md:border-r xl:border-b-0"><FeatureIcon className={`mx-auto size-14 ${color as string}`} /><h3 className="mt-4 text-lg font-extrabold leading-7 text-brand-navy">{title as string}</h3><p className="mt-3 text-sm font-bold leading-6 text-muted-foreground">{text as string}</p></article>; })}
      </div>
    </section>

    <section className="mt-4 bg-brand-navy px-5 py-12 text-primary-foreground lg:px-8 2xl:px-10">
      <div className="mx-auto grid max-w-[1920px] items-center gap-7 xl:grid-cols-[0.65fr_repeat(3,1fr)_0.65fr]"><div><p className="text-xl font-extrabold uppercase text-primary-glow">Multi-Level Risk Management</p><h2 className="mt-6 font-display text-5xl font-extrabold leading-tight">Protect Capital.<br />Maximize Returns.</h2><p className="mt-6 text-xl font-bold leading-8 text-primary-foreground/72">Our multi-layer risk management system helps you trade with discipline and consistency in every market condition.</p><Button variant="brandOutline" className="mt-8 h-14 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">Explore Risk Engine →</Button></div>{riskLevels.map(([num, title, items, tone]) => <article key={num as string} className={`min-h-[330px] rounded-xl border p-7 ${tone === "success" ? "border-success/45 bg-success/10" : tone === "primary" ? "border-primary/45 bg-primary/10" : "border-brand-violet/45 bg-brand-violet/10"}`}><div className="flex items-center gap-5"><ShieldCheck className={`size-20 ${tone === "success" ? "text-success" : tone === "primary" ? "text-primary-glow" : "text-brand-violet"}`} /><div><p className="text-4xl font-extrabold">{num as string}</p><h3 className="text-2xl font-extrabold">{title as string}</h3></div></div><ul className="mt-7 space-y-4 text-lg font-bold text-primary-foreground/78">{(items as string[]).map((i) => <li key={i} className="flex items-center gap-3"><Check className="size-5 text-success" />{i}</li>)}</ul><div className="mt-7 rounded-full border border-primary-foreground/15 py-3 text-center font-extrabold">{num === "01" ? "Control every trade" : num === "02" ? "Protect your strategies" : "Protect your portfolio"}</div></article>)}<div className="text-center"><ShieldCheck className="mx-auto size-44 rounded-full bg-success/10 p-8 text-success" /><h3 className="mt-6 text-4xl font-extrabold uppercase text-success">Safe Trading<br />Smart Growth</h3></div></div>
    </section>

    <section className="mx-auto max-w-[1920px] px-5 py-9 lg:px-8 2xl:px-10">
      <div className="text-center"><p className="text-lg font-extrabold uppercase tracking-widest text-primary">Platform Preview</p><h2 className="font-display text-4xl font-extrabold text-brand-navy">Everything You Need to Trade Better</h2></div>
      <PlatformPreview />
      <div className="mt-6 grid overflow-hidden rounded-xl bg-gradient-brand p-5 text-primary-foreground shadow-button md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{stats.map(([Icon, value, label], index) => { const I = Icon as typeof Network; return <div key={label as string} className={`flex items-center gap-4 px-5 py-3 ${index !== stats.length - 1 ? "xl:border-r xl:border-primary-foreground/20" : ""}`}><I className="size-14 rounded-full bg-primary-foreground/15 p-3" /><div><p className="text-3xl font-extrabold">{value as string}</p><p className="font-bold text-primary-foreground/82">{label as string}</p></div></div>; })}</div>
      <div className="mt-6 grid items-center gap-8 overflow-hidden rounded-xl border border-primary/10 bg-secondary px-8 py-8 shadow-sm lg:grid-cols-[300px_1fr_auto]"><AnimatedRobot /><div><p className="text-sm font-extrabold uppercase tracking-widest text-primary">AI automation built for disciplined trading</p><h2 className="mt-3 max-w-[760px] font-display text-4xl font-extrabold leading-tight text-brand-navy">Ready to Take Your Trading to the Next Level?</h2><p className="mt-4 max-w-[720px] text-xl font-bold leading-8 text-muted-foreground">Join FastTrade99 and experience smarter execution, connected brokers, automated strategies and multi-level risk control in one professional workspace.</p></div><div className="grid gap-4"><Button variant="brand" className="h-16 px-10 text-xl font-extrabold shadow-button">Start Your Free Trial</Button><Button variant="brandOutline" className="h-16 px-10 text-xl font-extrabold">Book a Demo</Button><p className="text-center text-sm font-extrabold text-muted-foreground">No Credit Card Required</p></div></div>
    </section>

    <section id="pricing" className="scroll-mt-28 bg-secondary px-5 py-12 lg:px-8 2xl:px-10">
      <div className="mx-auto max-w-[1920px]">
        <div className="text-center">
          <p className="text-lg font-extrabold uppercase tracking-widest text-primary">Pricing</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold text-brand-navy">Choose the Plan That Fits Your Trading</h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map(([name, price, caption, items], index) => (
            <article key={name as string} className={`flex min-h-[360px] flex-col rounded-xl border bg-card p-7 shadow-sm ${index === 1 ? "border-primary shadow-card" : "border-primary/10"}`}>
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="font-display text-3xl font-extrabold text-brand-navy">{name as string}</h3><p className="mt-2 text-base font-bold text-muted-foreground">{caption as string}</p></div>
                {index === 1 && <span className="rounded-full bg-primary px-4 py-2 text-sm font-extrabold text-primary-foreground">Popular</span>}
              </div>
              <p className="mt-7 font-display text-5xl font-extrabold text-brand-navy">{price as string}<span className="text-base font-bold text-muted-foreground">{price === "Custom" ? "" : "/mo"}</span></p>
              <ul className="mt-8 flex-1 space-y-4">
                {(items as string[]).map((item) => <li key={item} className="flex items-center gap-3 text-base font-bold text-brand-navy"><Check className="size-6 rounded-full bg-success p-1 text-primary-foreground" />{item}</li>)}
              </ul>
              <Button variant={index === 1 ? "brand" : "brandOutline"} className="mt-8 h-14 rounded-md text-lg font-extrabold">{index === 2 ? "Contact Sales" : "Get Started"}</Button>
            </article>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default Index;
