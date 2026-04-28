import {
  ArrowRight,
  BadgeIndianRupee,
  BadgeCheck,
  Bot,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  HandCoins,
  Headphones,
  IndianRupee,
  LineChart,
  LockKeyhole,
  Play,
  Quote,
  Rocket,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  UserRound,
  UsersRound,
} from "lucide-react";
import heroClean from "@/assets/nontrader-hero-clean.png";
import phoneVisual from "@/assets/nontrader-phone.png";
import shieldVisual from "@/assets/nontrader-shield-premium.png";
import ctaDevice from "@/assets/nontrader-cta-investor-device.png";
import investorAvatars from "@/assets/nontrader-investor-avatars.jpg";
import { Button } from "@/components/ui/button";
import { Footer, Header } from "@/components/SiteChrome";


const heroChecks = ["AI Manages Everything", "Fully Automated Trading", "Capital Protection First", "Transparent Performance", "Withdraw Anytime"];

const heroStats = [
  [BadgeIndianRupee, "₹4Cr+", "Capital Deployed"],
  [UsersRound, "99+", "Active Accounts"],
  [ChartNoAxesCombined, "10–12%", "Average Monthly\nReturns"],
  [Target, "72%+", "Win Rate"],
  [CircleDollarSign, "", "Profit Factor"],
  [Rocket, "", "Strategies Running"],
];

const steps = [
  [LineChart, "We Analyze\nThe Market", ["AI scans markets in real-time", "Detects momentum & high-probability setups", "Creates smart watchlist"], "primary"],
  [BrainCircuit, "AI Selects Best\nStrategies", ["Chooses the right strategy based on market condition", "Decides entry, exit & averaging plan"], "success"],
  [Bot, "Auto Executes\nTrades", ["Trades executed instantly across multiple accounts", "No manual action", "Zero emotional trading"], "primary"],
  [ChartNoAxesCombined, "Manages &\nOptimizes", ["AI manages positions", "Averages only when needed", "Books profit & controls risk"], "primary"],
  [HandCoins, "You Earn\nWe Grow", ["Enjoy consistent monthly returns", "Withdraw anytime", "Full transparency"], "success"],
];

const loveItems = [
  [UsersRound, "No Trading\nExperience Needed", "Perfect for beginners\nand busy professionals"],
  [ShieldCheck, "AI Manages\nEverything", "Market analysis, trade\nexecution, risk & profit"],
  [BadgeCheck, "Consistent\nMonthly Returns", "10–12% average\nmonthly performance"],
  [ChartNoAxesCombined, "Fully Automated\n& Hands-Free", "Set it once, relax and\nlet AI do the rest"],
  [UserRound, "Capital Protection\nFirst", "Advanced risk management\nto protect your capital"],
  [ShieldCheck, "Transparent\n& Reliable", "Live performance,\nreal-time tracking"],
  [ShieldCheck, "Withdraw\nAnytime", "No lock-in. Full flexibility\nto withdraw profits"],
  [ShieldCheck, "SECURE &\nCOMPLIANT", "Your funds are safe with\nbank-grade security"],
];

const strategies = [
  ["Momentum Pro", "+12.35%", "74.36%"],
  ["AI Swing", "+9.80%", "70.12%"],
  ["Multi Average", "+8.92%", "69.44%"],
  ["Alpha Breakout", "+10.15%", "73.77%"],
];

const whatYouGet = [
  "AI-Powered Trading Strategies",
  "Real-time Market Monitoring",
  "Auto Trade Execution",
  "Smart Averaging & Exit",
  "Real-time Performance Dashboard",
  "24/7 System Monitoring",
  "Dedicated Support",
];

const safeItems = [
  [BadgeIndianRupee, "Funds in your\nown Demat Account"],
  [ShieldCheck, "We never handle\nyour funds"],
  [ShieldCheck, "Bank-Grade Security\n& Encryption"],
  [BadgeCheck, "Regulatory Compliant\n& Transparent"],
];

const plans = [
  ["Starter", "₹999", "/month", "Perfect for trying out\nAI trading", "1 Account", false],
  ["Professional", "₹2,499", "/month", "Ideal for serious\ninvestors", "Up to 3 Accounts", false],
  ["Premium", "₹4,999", "/month", "Maximum growth\npotential", "Up to 10 Accounts", true],
  ["Custom Plan", "Contact Us", "", "For HNI & Bulk\nAccounts", "Custom Accounts", false],
];

const investorQuotes = [
  ["I don't have any trading knowledge.\nFastTrade99 handles everything and\nI'm getting consistent monthly returns.", "Ankit Sharma", "Business Owner, Pune", "left"],
  ["The dashboard is transparent and returns\nare real. I can see everything in real-time.\nVery happy with the performance.", "Priya Mehta", "Marketing Head, Bengaluru", "center"],
  ["I started with small capital and now\nmy portfolio has grown steadily.\nBest decision I made!", "Rohit Verma", "Chartered Accountant, Delhi", "right"],
];


const NonTraders = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header activeItem="For Non-Traders" />

      <section className="mx-auto max-w-[1920px] px-6 pb-2 pt-5 2xl:px-8">
        <div className="grid min-h-[610px] overflow-hidden rounded-xl border bg-card shadow-sm lg:grid-cols-[0.31fr_0.69fr]">
          <div className="flex flex-col justify-center px-6 py-8 lg:px-7 xl:px-9">
            <p className="mb-6 inline-flex w-fit rounded-lg bg-secondary px-3 py-1 text-base font-extrabold uppercase leading-none text-primary">For Non-Traders</p>
            <h1 className="font-display text-[clamp(2.65rem,3.05vw,3.6rem)] font-extrabold leading-[1.1] text-brand-navy">
              Invest Smarter.<br /><span className="text-primary">We Handle the Rest.</span>
            </h1>
            <p className="mt-5 max-w-[470px] text-[clamp(1.05rem,1.1vw,1.32rem)] font-bold leading-8 text-muted-foreground">Let our AI-powered trading system manage the markets while you relax. No charts. No stress. Just consistent 10–12% monthly returns.</p>
            <ul className="mt-6 space-y-3">
              {heroChecks.map((item) => <li key={item} className="flex items-center gap-4 text-lg font-extrabold text-brand-navy"><CheckCircle2 className="size-6 shrink-0 fill-primary text-primary-foreground" />{item}</li>)}
            </ul>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Button variant="brand" className="h-16 rounded-md px-6 text-base font-extrabold shadow-button xl:text-lg">Start Investing Now <ArrowRight className="size-6" /></Button>
              <Button variant="brandOutline" className="h-16 rounded-md px-6 text-base font-extrabold text-primary xl:text-lg">How It Works <span className="flex size-9 items-center justify-center rounded-full border-2 border-primary"><Play className="ml-0.5 size-4 fill-primary" /></span></Button>
            </div>
          </div>
          <div className="relative min-h-[610px] overflow-hidden rounded-xl bg-secondary">
            <img src={heroClean} alt="Relaxed investor with FastTrade99 investment dashboard" width={1253} height={696} className="h-full w-full object-cover object-center contrast-[1.04] saturate-[1.08]" />
          </div>
        </div>

        <div className="grid gap-5 rounded-b-xl border border-t-0 bg-card px-6 py-8 shadow-sm md:grid-cols-3 xl:grid-cols-6 xl:gap-0">
          {heroStats.map(([Icon, value, label]) => {
            const StatIcon = Icon as typeof ShieldCheck;
            return <article key={label as string} className="flex min-h-[92px] items-center justify-center gap-5 border-border px-4 xl:border-r last:border-r-0"><span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><StatIcon className="size-8" /></span><div><p className="font-display text-[31px] font-extrabold leading-none text-brand-navy">{(value as string) || "—"}</p><p className="mt-2 whitespace-pre-line text-base font-extrabold leading-5 text-muted-foreground">{label as string}</p></div></article>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 py-2 2xl:px-8">
        <h2 className="text-center font-display text-[32px] font-extrabold text-brand-navy">How FastTrade99 Works for You</h2>
        <div className="mt-5 grid gap-7 xl:grid-cols-5">
          {steps.map(([Icon, title, bullets, tone], index) => {
            const StepIcon = Icon as typeof LineChart;
            const green = tone === "success";
            return (
              <article key={title as string} className={`relative rounded-2xl border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card ${green ? "bg-accent/5 hover:border-accent" : "bg-secondary/60 hover:border-primary"}`}>
                {index < steps.length - 1 && <ArrowRight className="absolute -right-6 top-1/2 hidden size-8 -translate-y-1/2 text-primary xl:block" />}
                <span className={`flex size-12 items-center justify-center rounded-full text-2xl font-extrabold text-primary-foreground ${green ? "bg-success" : "bg-gradient-brand"}`}>{index + 1}</span>
                <div className="mt-7 flex items-center gap-6"><StepIcon className={`size-14 ${green ? "text-success" : "text-primary"}`} /><h3 className="whitespace-pre-line text-[22px] font-extrabold leading-7 text-brand-navy">{title as string}</h3></div>
                <ul className="mt-5 space-y-3">{(bullets as string[]).map((item) => <li key={item} className="flex gap-3 text-sm font-bold leading-6 text-muted-foreground"><Check className={`mt-1 size-4 shrink-0 ${green ? "text-success" : "text-primary"}`} />{item}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1920px] gap-5 px-6 py-2 2xl:px-8 xl:grid-cols-[0.48fr_0.52fr]">
        <div className="rounded-xl border bg-card px-8 py-9 shadow-sm">
          <h2 className="text-center font-display text-[28px] font-extrabold text-brand-navy">Why Non-Traders Love FastTrade99</h2>
          <div className="mt-8 grid grid-cols-2 gap-y-12 lg:grid-cols-4">
            {loveItems.map(([Icon, title, text]) => { const LoveIcon = Icon as typeof UsersRound; return <article key={title as string} className="min-h-[168px] border-border px-5 text-center lg:border-r [&:nth-child(4n)]:border-r-0"><span className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary text-primary"><LoveIcon className="size-8" /></span><h3 className="mt-4 whitespace-pre-line text-base font-extrabold leading-5 text-brand-navy">{title as string}</h3><p className="mt-3 whitespace-pre-line text-sm font-bold leading-6 text-muted-foreground">{text as string}</p></article>; })}
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-center font-display text-[28px] font-extrabold text-brand-navy">Live Performance Snapshot</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-[0.46fr_0.54fr]">
            <div className="space-y-3">
              <div className="rounded-xl border bg-card p-5"><p className="text-base font-extrabold text-brand-navy">Monthly Return (Avg.)</p><p className="mt-3 font-display text-[36px] font-extrabold text-brand-navy">10 – 12%</p><p className="font-bold text-muted-foreground">Consistent Growth</p></div>
              <div className="rounded-xl border bg-card p-5"><p className="text-base font-extrabold text-brand-navy">Total P&L (This Month)</p><p className="mt-3 font-display text-[36px] font-extrabold text-brand-navy">+₹42,72,380</p><p className="font-extrabold text-success">+10.68%</p></div>
              <div className="rounded-xl border bg-card p-5"><p className="text-base font-extrabold text-brand-navy">Equity Curve <span className="text-muted-foreground">(All Accounts)</span></p><svg viewBox="0 0 520 170" className="mt-2 h-[155px] w-full" role="img" aria-label="Equity curve all accounts"><defs><linearGradient id="nonTraderFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--accent) / 0.28)"/><stop offset="100%" stopColor="hsl(var(--accent) / 0.02)"/></linearGradient></defs>{[35,70,105,140].map((y)=><line key={y} x1="44" x2="500" y1={y} y2={y} stroke="hsl(var(--border))" />)}{[[28,"20L"],[64,"15L"],[100,"5L"],[137,"0"]].map(([y,t])=><text key={t} x="5" y={Number(y)} fill="hsl(var(--brand-navy))" fontSize="15" fontWeight="800">{t}</text>)}<path d="M48 136 L72 123 L92 118 L112 105 L132 96 L152 92 L172 80 L192 84 L212 69 L232 62 L252 50 L272 58 L292 43 L312 48 L332 32 L352 38 L372 24 L392 31 L412 16 L432 25 L452 11 L472 19 L496 6" fill="none" stroke="hsl(var(--accent))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M48 136 L72 123 L92 118 L112 105 L132 96 L152 92 L172 80 L192 84 L212 69 L232 62 L252 50 L272 58 L292 43 L312 48 L332 32 L352 38 L372 24 L392 31 L412 16 L432 25 L452 11 L472 19 L496 6 L496 165 L48 165Z" fill="url(#nonTraderFill)" />{[[50,"Jan 24"],[175,"Apr 24"],[300,"Jul 24"],[410,"Oct 24"],[475,"Jan 25"]].map(([x,t])=><text key={t} x={Number(x)-20} y="166" fill="hsl(var(--brand-navy))" fontSize="15" fontWeight="800">{t}</text>)}</svg></div>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <h3 className="text-xl font-extrabold text-brand-navy">Top Performing Strategies <span className="text-base text-muted-foreground">(This Month)</span></h3>
              <div className="mt-5 overflow-hidden rounded-xl border"><div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] bg-secondary px-5 py-4 text-sm font-extrabold text-brand-navy"><span>Strategy</span><span>Return</span><span>Win Rate</span></div>{strategies.map(([name, ret, win]) => <div key={name} className="grid grid-cols-[1.4fr_0.8fr_0.8fr] border-t px-5 py-6 text-base font-bold"><span className="text-brand-navy">{name}</span><span className="font-extrabold text-success">{ret}</span><span className="font-extrabold text-success">{win}</span></div>)}</div>
              <div className="mt-5 flex items-center gap-5 rounded-xl border bg-secondary/50 p-5"><ShieldCheck className="size-12 shrink-0 text-primary" /><p className="text-base font-extrabold leading-6 text-brand-navy">Our AI system is built with strict risk controls to ensure long-term consistent performance.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1920px] gap-5 px-6 py-2 2xl:px-8 xl:grid-cols-[0.3fr_0.24fr_0.46fr]">
        <div className="rounded-xl border bg-card p-7 shadow-sm"><h2 className="text-center font-display text-[28px] font-extrabold text-brand-navy">What You Get</h2><div className="mt-6 grid grid-cols-[1fr_0.75fr] items-end gap-5"><ul className="space-y-4">{whatYouGet.map((item)=><li key={item} className="flex items-center gap-4 text-base font-extrabold text-brand-navy"><CheckCircle2 className="size-6 shrink-0 fill-success text-primary-foreground" />{item}</li>)}</ul><img src={phoneVisual} alt="FastTrade99 mobile portfolio dashboard" className="w-full object-contain" /></div></div>
        <div className="overflow-hidden rounded-xl border bg-card px-5 pb-6 pt-7 shadow-sm"><h2 className="text-center font-display text-[28px] font-extrabold leading-tight text-brand-navy">Your Capital is Safe</h2><div className="mt-6 grid h-[calc(100%-72px)] grid-cols-[0.58fr_0.42fr] items-center gap-2"><ul className="space-y-7">{safeItems.map(([Icon,label])=>{const SafeIcon=Icon as typeof ShieldCheck; return <li key={label as string} className="flex items-center gap-4"><span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"><SafeIcon className="size-7" /></span><span className="whitespace-pre-line text-[17px] font-extrabold leading-6 text-brand-navy">{label as string}</span></li>})}</ul><img src={shieldVisual} alt="Premium blue security shield confirming capital safety" width={768} height={1024} loading="lazy" className="h-full max-h-[310px] w-full scale-125 object-contain object-center drop-shadow-xl" /></div></div>
        <div className="rounded-xl border bg-card p-7 shadow-sm"><h2 className="text-center font-display text-[28px] font-extrabold text-brand-navy">How Much Do You Need</h2><p className="text-center text-xl font-extrabold text-muted-foreground">Start small. Grow big.</p><div className="mt-8 grid gap-4 lg:grid-cols-4">{plans.map(([name, price, suffix, sub, account, popular])=><article key={name as string} className={`relative rounded-xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-2 hover:border-primary hover:shadow-card ${popular ? "border-primary shadow-card" : ""}`}>{popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-success px-5 py-1 text-xs font-extrabold text-success-foreground">Most Popular</span>}<h3 className="text-lg font-extrabold text-primary">{name as string}</h3><p className="mt-6 font-display text-[34px] font-extrabold leading-none text-brand-navy">{price as string} <span className="text-sm font-bold text-muted-foreground">{suffix as string}</span></p><p className="mt-5 whitespace-pre-line text-sm font-bold leading-6 text-muted-foreground">{sub as string}</p><p className="mt-8 flex items-center justify-center gap-2 text-base font-extrabold text-brand-navy"><Check className="size-5 text-success" />{account as string}</p></article>)}</div><div className="mt-6 grid gap-4 md:grid-cols-4">{[[BadgeIndianRupee,"No Hidden Fees"],[Clock3,"Cancel Anytime"],[Headphones,"24/7 Support"],[UsersRound,"Secure & Trusted"]].map(([Icon,label])=>{const PlanIcon=Icon as typeof ShieldCheck; return <div key={label as string} className="flex items-center justify-center gap-3 rounded-lg border bg-secondary/50 px-4 py-3 text-sm font-extrabold text-brand-navy"><PlanIcon className="size-7 text-primary" />{label as string}</div>})}</div></div>
      </section>

      <section className="mx-auto max-w-[1920px] px-6 pb-8 pt-2 2xl:px-8">
        <div className="rounded-xl border bg-card px-7 py-6 shadow-sm"><h2 className="text-center font-display text-[30px] font-extrabold text-brand-navy">What Our Non-Trader Investors Say</h2><div className="mt-6 grid gap-6 xl:grid-cols-[1fr_1fr_1fr_0.7fr]">{investorQuotes.map(([quote, name, role, position])=><article key={name as string} className="rounded-xl border bg-card p-7 shadow-sm"><Quote className="size-12 fill-primary text-primary" /><p className="-mt-7 ml-14 whitespace-pre-line text-base font-bold leading-7 text-brand-navy">{quote as string}</p><div className="mt-8 flex items-center gap-5"><span className="size-20 shrink-0 overflow-hidden rounded-full border-4 border-background bg-secondary shadow-sm"><img src={investorAvatars} alt={`${name as string} investor portrait`} width={512} height={512} loading="lazy" className={`h-full w-[300%] max-w-none object-cover ${position === "left" ? "object-left" : position === "center" ? "-translate-x-1/3 object-center" : "-translate-x-2/3 object-right"}`} /></span><div><p className="text-lg font-extrabold text-brand-navy">{name as string}</p><p className="font-bold text-muted-foreground">{role as string}</p><div className="mt-2 flex gap-1">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-5 fill-brand-gold text-brand-gold" />)}</div></div></div></article>)}<aside className="flex flex-col justify-center rounded-xl bg-card p-7"><ShieldCheck className="size-24 text-success" /><p className="mt-6 text-[22px] font-extrabold leading-8 text-brand-navy">Trusted by<br />100+ Non-Trader<br />Investors Across India</p><div className="mt-12 flex gap-2">{Array.from({length:3}).map((_,i)=><Star key={i} className="size-7 fill-brand-gold text-brand-gold" />)}</div><p className="mt-7 text-lg font-bold leading-7 text-muted-foreground">Our average investor retains for 8+ months</p></aside></div></div>

        <div className="mt-5 grid min-h-[178px] overflow-hidden rounded-xl bg-brand-navy text-primary-foreground shadow-card lg:grid-cols-[0.2fr_0.36fr_0.44fr]"><div className="relative flex items-end justify-center bg-card/5"><img src={ctaDevice} alt="Investor tracking FastTrade99 AI growth dashboard" width={1024} height={512} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[34%_70%] contrast-[1.08] saturate-[1.14]" /></div><div className="flex flex-col justify-center px-8 py-8"><h2 className="font-display text-[34px] font-extrabold leading-tight">Ready to Grow Your Wealth with AI?</h2><p className="mt-3 text-[20px] font-bold leading-8 text-primary-foreground/80">Join 100+ investors who trust FastTrade99 to grow their wealth the smart and stress-free way.</p></div><div className="flex flex-col justify-center gap-7 px-8 py-7"><div className="flex gap-6"><Button className="h-[72px] flex-1 rounded-xl bg-accent text-xl font-extrabold text-accent-foreground hover:bg-accent/90">Start Investing Now <ArrowRight className="size-7" /></Button><Button variant="brandOutline" className="h-[72px] flex-1 rounded-xl border-primary-foreground/40 bg-transparent text-xl font-extrabold text-primary-foreground hover:bg-card/10">Book a Free Demo <CalendarDays className="size-6" /></Button></div><div className="grid grid-cols-4 gap-5 text-sm font-extrabold text-primary-foreground/80">{[[BadgeCheck,"Instant Onboarding"],[ShieldCheck,"Secure & Encrypted"],[Clock3,"Withdraw Anytime"],[Headphones,"24/7 Support"]].map(([Icon,label])=>{const CtaIcon=Icon as typeof ShieldCheck; return <span key={label as string} className="flex items-center gap-2"><CtaIcon className="size-5" />{label as string}</span>})}</div></div></div>
      </section>
      <Footer />
    </main>
  );
};

export default NonTraders;
