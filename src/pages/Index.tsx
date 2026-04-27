import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  CircleDot,
  Code2,
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
import { Button } from "@/components/ui/button";
import { Footer, Header } from "@/components/SiteChrome";

const brokers = ["ZERODHA", "upstox", "AngelOne", "ICICI direct", "5paisa", "dhan", "+ More"];

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
  [Code2, "No-Code / Low-Code Strategy Builder", "Create, test and deploy strategies with our visual builder.", "text-primary"],
  [BarChart3, "Backtesting & Optimization", "Backtest strategies on historical data and optimize for performance.", "text-primary"],
  [PieChart, "Analytics & Reports", "Deep insights, custom reports and real-time performance metrics.", "text-brand-violet"],
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

const MiniChart = ({ dark = false }: { dark?: boolean }) => (
  <div className="relative h-full min-h-[210px] overflow-hidden rounded-md border bg-card p-4">
    <div className={`absolute inset-0 ${dark ? "bg-brand-navy" : "bg-card"}`} />
    <svg className="relative h-full w-full" viewBox="0 0 560 260" role="img" aria-label="NIFTY 50 candlestick performance chart">
      {Array.from({ length: 7 }).map((_, i) => <line key={`h-${i}`} x1="0" x2="560" y1={35 + i * 32} y2={35 + i * 32} className="stroke-border" strokeWidth="1" opacity={dark ? 0.16 : 0.75} />)}
      {Array.from({ length: 8 }).map((_, i) => <line key={`v-${i}`} y1="18" y2="230" x1={42 + i * 62} x2={42 + i * 62} className="stroke-border" strokeWidth="1" opacity={dark ? 0.12 : 0.72} />)}
      <polyline points="16,152 52,126 88,162 124,116 160,176 196,142 232,132 268,88 304,120 340,70 376,108 412,82 448,98 484,60 532,38" fill="none" className="stroke-success" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {Array.from({ length: 28 }).map((_, i) => {
        const x = 18 + i * 19;
        const high = 76 + ((i * 31) % 92);
        const low = high + 42 + ((i * 17) % 34);
        const positive = i % 4 !== 1;
        const bodyTop = positive ? high + 14 : high + 25;
        const bodyHeight = 26 + ((i * 13) % 22);
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={high} y2={low} className={positive ? "stroke-success" : "stroke-destructive"} strokeWidth="2" />
            <rect x={x - 5} y={bodyTop} width="10" height={bodyHeight} rx="2" className={positive ? "fill-success" : "fill-destructive"} />
          </g>
        );
      })}
      {dark && Array.from({ length: 26 }).map((_, i) => <rect key={`vol-${i}`} x={18 + i * 20} y={222 - ((i * 23) % 48)} width="10" height={18 + ((i * 23) % 48)} rx="2" className={i % 4 === 1 ? "fill-destructive" : "fill-success"} opacity="0.68" />)}
    </svg>
  </div>
);

const Index = () => (
  <main id="top" className="min-h-screen bg-background text-foreground">
    <Header />

    <section className="mx-auto grid max-w-[1920px] gap-8 px-6 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 xl:gap-12">
      <div className="flex flex-col justify-center">
        <h1 className="font-display text-5xl font-extrabold leading-[1.18] text-brand-navy sm:text-6xl xl:text-[76px]">
          Trade Smarter with <span className="block text-primary">AI-Powered</span> Multi-Broker Platform
        </h1>
        <p className="mt-8 max-w-[760px] text-xl font-bold leading-9 text-muted-foreground">
          FastTrade99 connects with multiple brokers, empowers you to build strategies with no-code or low-code and executes trades with advanced multi-level risk management.
        </p>
        <div className="mt-8 grid gap-4 text-base font-extrabold text-brand-navy sm:grid-cols-3">
          {["Multi-Broker Access", "Advanced Risk Management", "No-Code Strategy Builder"].map((item) => (
            <span key={item} className="flex items-center gap-3"><Check className="size-6 rounded-full border-2 border-success p-0.5 text-success" />{item}</span>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap gap-6">
          <Button variant="brand" size="lg" className="h-16 rounded-md px-9 text-xl font-extrabold shadow-button">Start Trading Now →</Button>
          <Button variant="brandOutline" size="lg" className="h-16 rounded-md px-9 text-xl font-extrabold">Explore Strategies →</Button>
        </div>
        <p className="mt-9 text-sm font-extrabold text-muted-foreground">Integrated with Leading Brokers</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-7">
          {brokers.map((broker) => <div key={broker} className="flex h-16 items-center justify-center rounded-md border bg-card px-4 text-sm font-extrabold text-brand-navy shadow-sm">{broker}</div>)}
        </div>
      </div>

      <div className="rounded-lg border bg-card p-2 shadow-card">
        <div className="flex items-center justify-between border-b p-5">
          <div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand text-lg font-extrabold text-primary-foreground">FT</span><span className="text-2xl font-extrabold text-brand-navy">fasttrade99</span></div>
          <div className="flex items-center gap-5 text-sm font-extrabold text-brand-navy"><span className="rounded-md bg-success/10 px-3 py-1 text-success">● Live</span><Search className="size-5" /><span>Arjun Trader</span></div>
        </div>
        <div className="grid min-h-[620px] grid-cols-[210px_1fr] gap-5 p-5">
          <aside className="space-y-2">
            {sideNav.map((item, index) => <div key={item} className={`flex h-11 items-center gap-3 rounded-md px-4 text-sm font-extrabold ${index === 0 ? "bg-gradient-brand text-primary-foreground" : "text-muted-foreground"}`}><CircleDot className="size-4" />{item}</div>)}
          </aside>
          <div className="space-y-5">
            <h2 className="text-lg font-extrabold text-brand-navy">Portfolio Overview</h2>
            <div className="grid gap-4 lg:grid-cols-3">
              {["Total Equity|₹ 12,75,430.50|+2.81% (₹ 34,870.25)", "Today’s P&L|₹ 24,530.75|+1.96%", "Total Return|+28.56%|All Time"].map((card) => {
                const [a, b, c] = card.split("|");
                return <div key={a} className="rounded-lg border bg-background p-6"><p className="text-sm font-extrabold text-muted-foreground">{a}</p><p className="mt-3 text-2xl font-extrabold text-brand-navy">{b}</p><p className="mt-2 text-base font-extrabold text-success">{c}</p></div>;
              })}
            </div>
            <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
              <div><div className="mb-3 flex items-center justify-between"><p className="font-extrabold text-brand-navy">NIFTY 50 <span className="ml-3 text-success">24,813.55 +110.25 (0.45%)</span></p><span className="text-sm font-extrabold text-muted-foreground">1D 1W 1M 3M 1Y</span></div><MiniChart /></div>
              <div className="rounded-lg border bg-background p-5"><div className="flex justify-between"><h3 className="font-extrabold text-brand-navy">Market Watch</h3><span className="font-extrabold text-primary">View All</span></div>{["NIFTY 50|24,813.55|+0.45%", "BANKNIFTY|51,290.40|+0.67%", "RELIANCE|₹ 2,851.45|+1.35%", "TCS|₹ 4,215.30|-0.42%", "INFY|₹ 1,678.20|+0.18%"].map((row) => { const [a,b,c]=row.split("|"); return <div key={a} className="mt-6 grid grid-cols-3 text-sm font-extrabold"><span>{a}</span><span>{b}</span><span className={c.startsWith("-") ? "text-destructive" : "text-success"}>{c}</span></div>; })}</div>
            </div>
            <div className="grid gap-4 lg:grid-cols-5">{["Open Positions|18", "Winning Trades|65%", "Profit Factor|2.45", "Max Drawdown|8.62%", "Available Margin|₹ 3,45,780"].map((item) => { const [a,b]=item.split("|"); return <div key={a} className="rounded-md border bg-background p-4"><p className="text-sm font-bold text-muted-foreground">{a}</p><p className="mt-2 text-2xl font-extrabold text-brand-navy">{b}</p></div>; })}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" className="mx-auto max-w-[1920px] px-6 py-8 lg:px-10">
      <div className="text-center"><p className="text-lg font-extrabold uppercase text-primary">Built For Everyone</p><h2 className="mt-3 font-display text-4xl font-extrabold text-brand-navy">One Platform. Endless Possibilities.</h2></div>
      <div className="mt-7 grid gap-6 lg:grid-cols-3">
        {audienceCards.map(({ title, text, tone, Icon, bullets }) => (
          <article key={title} className={`grid min-h-[330px] grid-cols-[1fr_220px] gap-4 rounded-lg border bg-card p-8 shadow-sm ${tone === "green" ? "border-success/25 bg-success/5" : tone === "violet" ? "border-primary/25 bg-secondary" : "border-primary/20 bg-primary/5"}`}>
            <div><div className="flex items-start gap-5"><span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-background text-primary"><Icon className="size-9" /></span><div><h3 className={`font-display text-3xl font-extrabold ${tone === "green" ? "text-success" : "text-primary"}`}>{title}</h3><p className="mt-3 text-base font-bold leading-7 text-muted-foreground">{text}</p></div></div><ul className="mt-8 space-y-5">{bullets.map((b) => <li key={b} className="flex items-center gap-4 text-base font-bold text-brand-navy"><Check className={`size-6 rounded-full p-1 text-primary ${tone === "green" ? "bg-success text-primary-foreground" : "bg-primary text-primary-foreground"}`} />{b}</li>)}</ul></div>
            <div className="flex items-end justify-center">{title === "For Traders" ? <div className="w-full rounded-lg bg-brand-navy p-4 text-primary-foreground"><p className="mb-3 font-extrabold">Strategy Builder</p>{["If", "Else Condition", "Then Buy", "Else Sell"].map((x, i) => <div key={x} className="mb-3 rounded-md bg-primary-foreground/10 px-4 py-2 font-extrabold"><span className="rounded bg-primary px-3 py-1 text-xs">{x.split(" ")[0]}</span> {i === 1 ? "Condition" : i === 2 ? "Buy" : i === 3 ? "Sell" : ""}</div>)}</div> : title === "For Non-Traders" ? <div className="relative h-52 w-full"><Bot className="absolute left-10 top-0 size-24 text-primary" /><TrendingUp className="absolute bottom-6 right-2 size-32 text-success" /></div> : <div className="relative flex h-52 w-full items-center justify-center"><BriefcaseBusiness className="size-28 text-primary" />{Array.from({ length: 6 }).map((_, i) => <Users key={i} className="absolute size-10 text-primary" style={{ left: `${48 + Math.cos(i) * 76}px`, top: `${82 + Math.sin(i) * 76}px` }} />)}</div>}</div>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-[1920px] px-6 py-7 lg:px-10">
      <p className="text-center text-lg font-extrabold uppercase text-primary">Powerful Features</p>
      <div className="mt-4 grid rounded-lg border bg-card shadow-sm md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {features.map(([Icon, title, text, color]) => { const FeatureIcon = Icon as typeof Network; return <article key={title as string} className="min-h-[250px] border-b p-6 text-center md:border-r xl:border-b-0"><FeatureIcon className={`mx-auto size-16 ${color as string}`} /><h3 className="mt-5 text-xl font-extrabold leading-7 text-brand-navy">{title as string}</h3><p className="mt-4 text-base font-bold leading-7 text-muted-foreground">{text as string}</p></article>; })}
      </div>
    </section>

    <section className="mt-4 bg-brand-navy px-6 py-12 text-primary-foreground lg:px-10">
      <div className="mx-auto grid max-w-[1920px] items-center gap-8 xl:grid-cols-[0.65fr_repeat(3,1fr)_0.65fr]">
        <div><p className="text-xl font-extrabold uppercase text-primary-glow">Multi-Level Risk Management</p><h2 className="mt-6 font-display text-5xl font-extrabold leading-tight">Protect Capital.<br />Maximize Returns.</h2><p className="mt-6 text-xl font-bold leading-8 text-primary-foreground/72">Our multi-layer risk management system helps you trade with discipline and consistency in every market condition.</p><Button variant="brandOutline" className="mt-8 h-14 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">Explore Risk Engine →</Button></div>
        {riskLevels.map(([num, title, items, tone]) => <article key={num as string} className={`min-h-[330px] rounded-lg border p-7 ${tone === "success" ? "border-success/45 bg-success/10" : tone === "primary" ? "border-primary/45 bg-primary/10" : "border-brand-violet/45 bg-brand-violet/10"}`}><div className="flex items-center gap-5"><ShieldCheck className={`size-20 ${tone === "success" ? "text-success" : tone === "primary" ? "text-primary-glow" : "text-brand-violet"}`} /><div><p className="text-4xl font-extrabold">{num as string}</p><h3 className="text-2xl font-extrabold">{title as string}</h3></div></div><ul className="mt-7 space-y-4 text-lg font-bold text-primary-foreground/78">{(items as string[]).map((i) => <li key={i} className="flex items-center gap-3"><Check className="size-5 text-success" />{i}</li>)}</ul><div className="mt-7 rounded-full border border-primary-foreground/15 py-3 text-center font-extrabold">{num === "01" ? "Control every trade" : num === "02" ? "Protect your strategies" : "Protect your portfolio"}</div></article>)}
        <div className="text-center"><ShieldCheck className="mx-auto size-44 rounded-full bg-success/10 p-8 text-success" /><h3 className="mt-6 text-4xl font-extrabold uppercase text-success">Safe Trading<br />Smart Growth</h3></div>
      </div>
    </section>

    <section className="mx-auto max-w-[1920px] px-6 py-9 lg:px-10">
      <div className="text-center"><p className="text-lg font-extrabold uppercase text-primary">Platform Preview</p><h2 className="font-display text-4xl font-extrabold text-brand-navy">Everything You Need to Trade Better</h2></div>
      <div className="mt-5 grid items-center gap-6 rounded-lg border bg-card p-7 shadow-sm xl:grid-cols-[280px_1fr_280px]">
        <div className="space-y-9">{previewLeft.map(([Icon, title, text]) => { const I = Icon as typeof BarChart3; return <div key={title as string} className="flex gap-5"><I className="size-12 shrink-0 rounded-full bg-secondary p-2 text-primary" /><div><h3 className="font-extrabold text-brand-navy">{title as string}</h3><p className="mt-1 text-sm font-bold leading-6 text-muted-foreground">{text as string}</p></div></div>; })}</div>
        <div className="grid rounded-lg bg-brand-navy p-4 text-primary-foreground lg:grid-cols-[1.15fr_0.85fr]"><div><div className="mb-3 flex gap-3 text-xs font-extrabold"><span>NIFTY 50</span><span>1m</span><span>5m</span><span>15m</span><span>1H</span><span>D</span><span>W</span><span>M</span><span>Indicators</span></div><h3 className="text-3xl font-extrabold text-success">24,813.55</h3><p className="font-extrabold text-success">+110.25 (0.45%)</p><MiniChart dark /></div><div className="space-y-4 p-4"><div className="rounded-md border border-primary-foreground/10 p-4"><h3 className="font-extrabold">Positions (6)</h3><p className="mt-3 text-success">Total P&L +₹ 24,530.75</p>{["RELIANCE +₹ 6,210.00", "BANKNIFTY +₹ 5,320.00", "TCS -₹ 1,150.00", "INFY +₹ 2,450.00"].map((x) => <p key={x} className="mt-3 text-sm font-bold">{x}</p>)}<div className="mt-4 flex gap-3"><Button variant="brand" size="sm">New Order</Button><Button variant="brandOutline" size="sm" className="bg-transparent text-primary-foreground">Strategy Builder</Button></div></div><div className="rounded-md border border-primary-foreground/10 p-4"><h3 className="font-extrabold">Risk Summary</h3><div className="mt-4 h-4 overflow-hidden rounded-full bg-primary-foreground/15"><div className="h-full w-[60%] bg-success" /></div><p className="mt-4 text-sm font-bold">Daily Risk Limit ₹ 50,000</p></div></div></div>
        <div className="space-y-9">{previewRight.map(([Icon, title, text]) => { const I = Icon as typeof Zap; return <div key={title as string} className="flex gap-5"><I className="size-12 shrink-0 rounded-full bg-secondary p-2 text-primary" /><div><h3 className="font-extrabold text-brand-navy">{title as string}</h3><p className="mt-1 text-sm font-bold leading-6 text-muted-foreground">{text as string}</p></div></div>; })}</div>
      </div>
      <div className="mt-6 grid rounded-lg bg-gradient-brand p-6 text-primary-foreground md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">{stats.map(([Icon, value, label]) => { const I = Icon as typeof Network; return <div key={label as string} className="flex items-center gap-4 border-primary-foreground/15 px-5 py-3 xl:border-r"><I className="size-14 rounded-full bg-primary-foreground/15 p-3" /><div><p className="text-3xl font-extrabold">{value as string}</p><p className="font-bold">{label as string}</p></div></div>; })}</div>
      <div className="mt-6 grid items-center gap-6 rounded-lg bg-secondary px-8 py-7 lg:grid-cols-[260px_1fr_auto]"><Bot className="mx-auto size-40 text-primary" /><div><h2 className="font-display text-4xl font-extrabold text-brand-navy">Ready to Take Your Trading to the Next Level?</h2><p className="mt-3 text-xl font-bold text-muted-foreground">Join FastTrade99 and experience the power of AI, automation and advanced risk management.</p></div><div className="flex flex-wrap gap-5"><Button variant="brand" className="h-16 px-10 text-xl font-extrabold">Start Your Free Trial</Button><Button variant="brandOutline" className="h-16 px-10 text-xl font-extrabold">Book a Demo</Button><p className="w-full text-center text-base font-extrabold text-muted-foreground">No Credit Card Required • 7-Day Free Trial</p></div></div>
    </section>

    <Footer />
  </main>
);

export default Index;