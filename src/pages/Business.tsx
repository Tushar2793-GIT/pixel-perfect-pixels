import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Check,
  CircleGauge,
  ClipboardCheck,
  FileChartColumn,
  Handshake,
  IndianRupee,
  Landmark,
  LineChart,
  LockKeyhole,
  Network,
  PiggyBank,
  PlugZap,
  Quote,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import businessHero from "@/assets/business-hero-boardroom.jpg";
import { Button } from "@/components/ui/button";

const navItems = ["How It Works", "Features", "Strategies", "For Traders", "For Non-Traders", "For Business", "Pricing", "About Us"];

const audiences = [
  [ShieldCheck, "Wealth Managers", "Grow AUM & client returns"],
  [ChartNoAxesCombined, "Hedge Funds & Prop Firms", "Scale strategies & improve consistency"],
  [UsersRound, "HNI & Investor Groups", "Access AI trading with transparency"],
  [CircleGauge, "Fintech Platforms", "Offer AI trading to your users"],
  [BriefcaseBusiness, "Corporate Treasury Teams", "Deploy idle capital profitably"],
  [UserCheck, "IBs & Partner Networks", "Earn through profit sharing model"],
];

const choiceCards = [
  [Bot, "AI-Powered Trading Engine", "Advanced algorithms analyse markets, select best strategies and execute automatically."],
  [UsersRound, "Multi-Account Scalability", "Manage 10 to 10,000+ accounts from a single, powerful dashboard with full control."],
  [ShieldCheck, "Risk Management First", "Capital protection, drawdown control, smart allocation and auto stop-loss."],
  [ChartNoAxesCombined, "Transparent Performance", "Real-time reporting, audit trail and fully transparent P&L at every level."],
  [IndianRupee, "Flexible Revenue Model", "Profit sharing model (30% configurable) with no fixed fees. You grow, we grow."],
  [BriefcaseBusiness, "White-Label Solutions", "Launch your branded AI trading platform with our technology and support."],
];

const steps = [
  [Handshake, "Onboard Your Business", "We understand your goals and onboard you quickly."],
  [Landmark, "Deploy Capital", "You or your clients deploy capital into the system."],
  [Bot, "AI Executes Trades", "Our AI engine scans, decides and executes trades 24/7."],
  [ChartNoAxesCombined, "Profits Are Generated", "Trades generate profits in your or client accounts."],
  [IndianRupee, "Revenue Shared", "We share 30% of the profits as per the partnership model."],
];

const useCases = [
  [WalletCards, "Wealth Managers", "Deliver superior returns to clients and increase AUM."],
  [Network, "Prop Trading Firms", "Scale proven strategies across multiple accounts."],
  [PiggyBank, "Partner & IB Networks", "Bring investors, earn through performance-based revenue."],
  [BriefcaseBusiness, "Corporate Treasury", "Put idle capital to work with controlled risk."],
  [CircleGauge, "Fintech & Platforms", "Integrate AI trading into your platform and boost stickiness"],
];

const performanceStats = [
  ["Monthly Return (Avg.)", "10 – 12%", "Consistent Growth", "text-brand-navy", "text-[clamp(1.55rem,1.45vw,1.875rem)]"],
  ["Total P&L (This Month)", "₹42,72,380", "+10.68%", "text-success", "text-[clamp(1.35rem,1.28vw,1.75rem)]"],
  ["Win Rate", "72.45%", "High Accuracy", "text-brand-navy", "text-[clamp(1.55rem,1.45vw,1.875rem)]"],
  ["Profit Factor", "2.48", "Strong Performance", "text-brand-navy", "text-[clamp(1.55rem,1.45vw,1.875rem)]"],
  ["Max Drawdown", "-6.32%", "Controlled Risk", "text-brand-navy", "text-[clamp(1.55rem,1.45vw,1.875rem)]"],
];

const security = [
  [ShieldCheck, "SEBI Compliant Brokers", "Partners with regulated brokers"],
  [LockKeyhole, "Bank-Grade Security", "256-bit encryption & secure infra"],
  [FileChartColumn, "Transparent Reporting", "Real-time P&L & trade logs"],
  [ClipboardCheck, "Audit Ready", "Full audit trail & downloadable logs"],
  [UserCheck, "Your Capital, Your Control", "Funds in your demat account"],
];

const infra = [
  [UsersRound, "Multi-User Access", "Role-based dashboards & permissions"],
  [PlugZap, "Advanced API Integration", "Seamless integration with brokers, CRM & OMS"],
  [TrendingUp, "Custom Strategy Deployment", "Deploy custom or hybrid strategies"],
  [Bell, "Real-Time Alerts", "Trade, risk & performance alerts via email/WhatsApp"],
  [UserCheck, "Dedicated Account Manager", "Personal support for your business growth"],
  [CircleGauge, "SLA & Uptime Assurance", "99.9% uptime with dedicated infrastructure"],
];

const partnerPlans = [
  ["Starter Partner", "Ideal for small investor groups", "Revenue Share Model", "30%", "of Net Profits", ["Up to 50 Accounts", "Standard Strategies", "Basic Reporting", "Email Support"], "primary", "Get Started"],
  ["Growth Partner", "For wealth managers & advisors", "Revenue Share Model", "30%", "of Net Profits", ["Up to 500 Accounts", "Advanced Strategies", "Real-time Dashboards", "Priority Support"], "success", "Get Started"],
  ["Enterprise", "For large firms & institutions", "Custom Pricing", "Let's Build Together", "", ["Unlimited Accounts", "Custom Solutions", "Dedicated Infrastructure", "24/7 Dedicated Support"], "primary", "Contact Sales"],
  ["White Label Solution", "Launch your own branded platform", "License + Revenue Share", "Custom", "", ["Your Brand, Our Technology", "Full Platform Access", "Marketing & Onboarding Support", "Long Term Partnership"], "orange", "Contact Sales"],
];

const Header = () => (
  <header className="border-b bg-card/95 shadow-sm backdrop-blur">
    <nav className="mx-auto flex h-[102px] max-w-[1920px] items-center justify-between px-8 2xl:px-9">
      <a href="/" className="flex items-center gap-3" aria-label="FastTrade99 home">
        <span className="flex size-14 items-center justify-center rounded-full border-2 border-primary bg-card text-2xl font-extrabold text-primary shadow-sm">FT</span>
        <span className="font-display text-[38px] font-extrabold leading-none tracking-normal text-brand-navy">
          fasttrade<span className="text-primary">99</span>
        </span>
      </a>
      <div className="hidden items-center gap-8 text-base font-extrabold text-brand-navy xl:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={item === "About Us" ? "/about" : item === "Pricing" ? "/#pricing" : item === "For Business" ? "/business" : item === "For Non-Traders" ? "/non-traders" : item === "For Traders" ? "/traders" : "#"}
            className={`relative py-10 transition-colors hover:text-primary ${item === "For Business" ? "text-primary after:absolute after:bottom-2 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-primary" : ""}`}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="brandOutline" size="lg" className="h-14 rounded-md px-7 text-base font-extrabold">Login</Button>
        <Button variant="brand" size="lg" className="h-14 rounded-md px-7 text-base font-extrabold shadow-button">Sign Up</Button>
      </div>
    </nav>
  </header>
);

const IconBubble = ({ Icon, tone = "primary" }: { Icon: typeof ShieldCheck; tone?: "primary" | "success" | "orange" }) => (
  <span className={`flex size-16 shrink-0 items-center justify-center rounded-full bg-secondary ${tone === "success" ? "text-success" : tone === "orange" ? "text-brand-orange" : "text-primary"}`}>
    <Icon className="size-8" />
  </span>
);

const Business = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto max-w-[1920px] px-4 pb-4 pt-5 sm:px-8">
        <div className="grid min-h-[610px] overflow-hidden rounded-lg bg-card lg:grid-cols-[0.37fr_0.63fr]">
          <div className="flex flex-col justify-center py-10 pr-7">
            <p className="mb-7 inline-flex w-fit rounded-lg border border-primary/20 bg-secondary px-3 py-1 text-lg font-extrabold uppercase leading-none text-primary">For Businesses</p>
            <h1 className="font-display text-[52px] font-extrabold leading-[1.18] text-brand-navy xl:text-[64px]">
              Scale Trading.<br />Maximize Returns.<br /><span className="text-primary">Powered by AI.</span>
            </h1>
            <p className="mt-6 max-w-[620px] text-[21px] font-extrabold leading-8 text-muted-foreground">
              Institutional-grade AI trading infrastructure for businesses, partners and investors. Deploy capital, manage risk and generate consistent returns — without operational complexity.
            </p>
            <div className="mt-9 grid max-w-[680px] grid-cols-4 gap-5">
              {[[ShieldCheck, "₹4Cr+", "Capital Managed"], [UsersRound, "99+", "Active Accounts"], [ChartNoAxesCombined, "10–12%", "Average Monthly Returns"], [Target, "72%+", "Win Rate"]].map(([Icon, value, label]) => {
                const StatIcon = Icon as typeof ShieldCheck;
                return (
                  <div key={label as string} className="text-center">
                    <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary text-primary"><StatIcon className="size-8" /></span>
                    <p className="mt-3 font-display text-[32px] font-extrabold leading-none text-brand-navy">{value as string}</p>
                    <p className="mt-2 text-base font-extrabold leading-5 text-muted-foreground">{label as string}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 flex gap-4">
              <Button variant="brand" className="h-[58px] rounded-md px-8 text-lg font-extrabold shadow-button">Request Business Demo <ArrowRight className="size-5" /></Button>
              <Button variant="brandOutline" className="h-[58px] rounded-md px-8 text-lg font-extrabold text-primary">View Performance Reports <LineChart className="size-5" /></Button>
            </div>
          </div>
          <div className="relative min-h-[610px] overflow-hidden rounded-xl shadow-card">
            <img src={businessHero} alt="Business team reviewing AI trading performance dashboard" width={1600} height={900} className="h-full w-full object-cover object-center contrast-[1.08] saturate-[1.12] brightness-[1.03]" />
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-card via-card/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 mix-blend-soft-light" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-4 py-2 sm:px-8">
        <div className="rounded-lg border bg-card px-7 py-7 shadow-sm">
          <h2 className="-mt-1 text-center font-display text-[28px] font-extrabold text-brand-navy">Built for Businesses. Designed for Growth.</h2>
          <div className="mt-5 grid gap-6 lg:grid-cols-6">
            {audiences.map(([Icon, title, text]) => {
              const AudienceIcon = Icon as typeof ShieldCheck;
              return (
                <article key={title as string} className="flex items-center gap-5 border-border lg:border-r lg:pr-5 last:border-r-0">
                  <IconBubble Icon={AudienceIcon} />
                  <div>
                    <h3 className="text-lg font-extrabold leading-6 text-brand-navy">{title as string}</h3>
                    <p className="mt-2 text-base font-bold leading-6 text-muted-foreground">{text as string}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-4 py-2 sm:px-8">
        <h2 className="mb-5 text-center font-display text-[30px] font-extrabold text-brand-navy">Why Businesses Choose FastTrade99</h2>
        <div className="grid gap-5 lg:grid-cols-6">
          {choiceCards.map(([Icon, title, text], index) => {
            const ChoiceIcon = Icon as typeof ShieldCheck;
            const green = index === 1 || index === 4;
            return (
              <article key={title as string} className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
                <span className={`flex size-[78px] items-center justify-center rounded-full ${green ? "bg-accent/10 text-success" : "bg-secondary text-primary"}`}><ChoiceIcon className="size-10" /></span>
                <h3 className="mt-5 text-xl font-extrabold leading-7 text-brand-navy">{title as string}</h3>
                <p className="mt-3 text-base font-bold leading-7 text-muted-foreground">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1920px] gap-5 px-4 py-2 sm:px-8 xl:grid-cols-[1fr_0.3fr]">
        <div className="rounded-lg border bg-card px-9 py-7 shadow-sm">
          <h2 className="text-center font-display text-[30px] font-extrabold text-brand-navy">How It Works For Your Business</h2>
          <div className="mt-9 grid gap-8 lg:grid-cols-5">
            {steps.map(([Icon, title, text], index) => {
              const StepIcon = Icon as typeof Handshake;
              const green = index === 1 || index === 4;
              return (
                <article key={title as string} className="relative text-center">
                  {index < steps.length - 1 && <ArrowRight className="absolute right-[-28px] top-16 hidden size-8 text-primary lg:block" />}
                  <span className={`absolute left-1/2 top-0 z-10 flex size-10 -translate-x-1/2 -translate-y-2 items-center justify-center rounded-full text-xl font-extrabold text-primary-foreground ${green ? "bg-success" : "bg-primary"}`}>{index + 1}</span>
                  <span className="mx-auto flex size-[118px] items-center justify-center rounded-full border bg-secondary text-primary shadow-sm"><StepIcon className={`size-14 ${green ? "text-success" : "text-primary"}`} /></span>
                  <h3 className="mt-5 text-xl font-extrabold text-brand-navy">{title as string}</h3>
                  <p className="mt-2 text-base font-bold leading-6 text-muted-foreground">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
        <aside className="rounded-2xl border bg-card p-8 shadow-sm">
          <h2 className="text-center font-display text-[28px] font-extrabold text-brand-navy">Key Differentiator</h2>
          <Quote className="mt-8 size-12 fill-primary text-primary" />
          <p className="mt-1 pl-10 text-[22px] font-bold leading-9 text-muted-foreground">You don't need a team of traders. Our AI does the heavy lifting. You focus on growing your business.</p>
          <p className="mt-7 font-display text-[30px] font-extrabold text-primary">We handle the rest.</p>
        </aside>
      </section>

      <section className="mx-auto grid max-w-[1920px] gap-5 px-4 py-2 sm:px-8 xl:grid-cols-[0.21fr_0.58fr_0.21fr]">
        <aside className="rounded-lg border bg-card p-7 shadow-sm">
          <h2 className="text-center font-display text-[26px] font-extrabold text-brand-navy">Business Use Cases</h2>
          <div className="mt-7 space-y-6">
            {useCases.map(([Icon, title, text]) => {
              const UseIcon = Icon as typeof WalletCards;
              return <div key={title as string} className="flex gap-5"><IconBubble Icon={UseIcon} /><div><h3 className="text-lg font-extrabold text-brand-navy">{title as string}</h3><p className="mt-1 text-base font-bold leading-6 text-muted-foreground">{text as string}</p></div></div>;
            })}
          </div>
        </aside>
        <div className="rounded-lg border bg-card p-7 shadow-sm">
          <h2 className="font-display text-[26px] font-extrabold text-brand-navy">Live Performance Snapshot</h2>
          <div className="mt-6 grid gap-2 lg:grid-cols-5">
            {performanceStats.map(([label, value, sub, tone, size]) => <div key={label} className="min-w-0 rounded-xl border bg-card p-5"><p className="text-sm font-extrabold leading-5 text-brand-navy">{label}</p><p className={`mt-4 break-words font-display font-extrabold leading-none ${tone} ${size}`}>{value}</p><p className="mt-2 text-base font-extrabold text-success">{sub}</p></div>)}
          </div>
          <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_0.5fr]">
            <div className="rounded-xl border p-6">
              <h3 className="text-2xl font-extrabold text-brand-navy">Equity Curve <span className="text-muted-foreground">(AI Accounts)</span></h3>
              <div className="relative mt-4 h-[300px] overflow-hidden rounded-md bg-gradient-to-t from-accent/10 to-transparent">
                <svg viewBox="0 0 760 300" className="h-full w-full" role="img" aria-label="Rising AI account equity curve">
                  <defs><linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--accent) / 0.28)"/><stop offset="100%" stopColor="hsl(var(--accent) / 0.03)"/></linearGradient></defs>
                  {[60,120,180,240].map((y)=><line key={y} x1="54" x2="735" y1={y} y2={y} stroke="hsl(var(--border))" strokeDasharray="5 7" />)}
                  {[[48,"20L"],[108,"15L"],[168,"10L"],[228,"5L"],[276,"0"]].map(([y,t])=><text key={t} x="10" y={Number(y)+5} fill="hsl(var(--muted-foreground))" fontSize="18" fontWeight="800">{t}</text>)}
                  <path d="M64 252 L88 246 L108 228 L130 232 L151 220 L174 225 L198 204 L219 196 L239 203 L262 185 L282 160 L302 174 L324 153 L345 137 L366 146 L388 118 L409 132 L431 124 L454 96 L476 84 L498 70 L520 51 L543 64 L565 58 L588 74 L610 50 L633 29 L655 18 L676 31 L698 23 L721 10" fill="none" stroke="hsl(var(--accent))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M64 252 L88 246 L108 228 L130 232 L151 220 L174 225 L198 204 L219 196 L239 203 L262 185 L282 160 L302 174 L324 153 L345 137 L366 146 L388 118 L409 132 L431 124 L454 96 L476 84 L498 70 L520 51 L543 64 L565 58 L588 74 L610 50 L633 29 L655 18 L676 31 L698 23 L721 10 L721 300 L64 300Z" fill="url(#equityFill)" />
                  {[[64,"Jan '24"],[174,"Mar '24"],[282,"May '24"],[388,"Jul '24"],[498,"Sep '24"],[610,"Nov '24"],[704,"Jan '25"]].map(([x,t])=><text key={t} x={Number(x)-28} y="292" fill="hsl(var(--muted-foreground))" fontSize="18" fontWeight="800">{t}</text>)}
                </svg>
              </div>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-extrabold text-brand-navy">Strategy Performance <span className="text-muted-foreground">(This Month)</span></h3>
              <div className="mt-8 flex flex-wrap items-center gap-8"><div className="flex size-44 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(hsl(var(--primary))_0_28%,hsl(var(--accent))_28%_63%,hsl(var(--brand-blue))_63%_88%,hsl(var(--brand-orange))_88%_100%)] shadow-card"><div className="flex size-24 flex-col items-center justify-center rounded-full bg-card"><b className="text-3xl text-brand-navy">+10.68%</b><span className="text-sm font-extrabold text-muted-foreground">Total Return</span></div></div><div className="min-w-[230px] flex-1 space-y-5 text-base font-extrabold"><p className="grid grid-cols-[1rem_1fr_auto] items-center gap-3"><span className="text-primary">●</span><span>Momentum Pro</span><span className="text-success">+12.35%</span></p><p className="grid grid-cols-[1rem_1fr_auto] items-center gap-3"><span className="text-success">●</span><span>AI Swing</span><span className="text-success">+9.80%</span></p><p className="grid grid-cols-[1rem_1fr_auto] items-center gap-3"><span className="text-brand-blue">●</span><span>Multi Average</span><span className="text-success">+8.92%</span></p><p className="grid grid-cols-[1rem_1fr_auto] items-center gap-3"><span className="text-brand-orange">●</span><span>Alpha Breakout</span><span className="text-success">+10.15%</span></p></div></div>
            </div>
          </div>
        </div>
        <aside className="rounded-lg border bg-card p-7 shadow-sm">
          <h2 className="text-center font-display text-[26px] font-extrabold text-brand-navy">Trust & Security</h2>
          <div className="mt-7 space-y-7">
            {security.map(([Icon, title, text]) => { const SecIcon = Icon as typeof ShieldCheck; return <div key={title as string} className="flex gap-5"><IconBubble Icon={SecIcon} /><div><h3 className="text-lg font-extrabold text-brand-navy">{title as string}</h3><p className="mt-1 text-base font-bold leading-6 text-muted-foreground">{text as string}</p></div></div>; })}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-[1920px] px-4 py-2 sm:px-8">
        <div className="rounded-lg border bg-card px-8 py-7 shadow-sm">
          <h2 className="text-center font-display text-[28px] font-extrabold text-brand-navy">Enterprise-Grade Infrastructure</h2>
          <div className="mt-7 grid gap-7 lg:grid-cols-6">
            {infra.map(([Icon, title, text]) => { const InfraIcon = Icon as typeof UsersRound; return <div key={title as string} className="flex items-center gap-5"><IconBubble Icon={InfraIcon} /><div><h3 className="font-extrabold text-brand-navy">{title as string}</h3><p className="mt-1 text-sm font-bold leading-6 text-muted-foreground">{text as string}</p></div></div>; })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-4 pb-6 pt-2 sm:px-8">
        <h2 className="mb-5 text-center font-display text-[28px] font-extrabold text-brand-navy">Partnership Models That Work For You</h2>
        <div className="grid gap-5 xl:grid-cols-[1fr_0.47fr]">
          <div className="grid gap-5 lg:grid-cols-4">
            {partnerPlans.map(([name, sub, label, value, suffix, features, tone, cta]) => (
              <article key={name as string} className={`rounded-2xl border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-card ${tone === "success" ? "border-accent/30 hover:border-accent" : tone === "orange" ? "border-brand-orange/35 hover:border-brand-orange" : "hover:border-primary"}`}>
                <h3 className={`font-display text-[25px] font-extrabold ${tone === "success" ? "text-success" : tone === "orange" ? "text-brand-orange" : "text-primary"}`}>{name as string}</h3>
                <p className="mt-2 text-sm font-bold text-muted-foreground">{sub as string}</p>
                <p className="mt-6 text-base font-extrabold text-brand-navy">{label as string}</p>
                <p className={`mt-3 font-display text-[42px] font-extrabold leading-none ${tone === "success" ? "text-success" : "text-brand-navy"}`}>{value as string}</p>
                {suffix && <p className="mt-2 text-base font-bold text-muted-foreground">{suffix as string}</p>}
                <ul className="mt-7 space-y-4 text-left text-sm font-bold text-muted-foreground">{(features as string[]).map((feature) => <li key={feature} className="flex items-center gap-3"><Check className={`size-4 ${tone === "success" ? "text-success" : tone === "orange" ? "text-brand-orange" : "text-primary"}`} />{feature}</li>)}</ul>
                <Button variant="brandOutline" className={`mt-7 h-14 w-full rounded-md text-lg font-extrabold ${tone === "success" ? "border-accent/30 text-success" : tone === "orange" ? "border-brand-orange/35 text-brand-orange" : "text-primary"}`}>{cta as string}</Button>
              </article>
            ))}
          </div>
          <aside className="rounded-lg bg-brand-navy p-8 text-primary-foreground shadow-card">
            <h3 className="font-display text-[28px] font-extrabold">Why Partner With FastTrade99?</h3>
            <ul className="mt-7 space-y-5 text-base font-bold text-primary-foreground/85">{["Proven AI Engine delivering 10–12% monthly returns", "Fully automated — No manual trading required", "Scalable, secure & transparent", "Performance based — We win when you win", "Long-term partnership for mutual growth"].map((item) => <li key={item} className="flex gap-4"><BadgeCheck className="size-5 shrink-0 fill-primary text-brand-navy" />{item}</li>)}</ul>
            <p className="mt-8 font-display text-[28px] font-extrabold leading-tight">Ready to grow your business with AI-powered trading?</p>
            <div className="mt-6 flex gap-4"><Button variant="brand" className="h-14 rounded-md px-9 text-base font-extrabold">Request Demo</Button><Button variant="brandOutline" className="h-14 rounded-md border-primary-foreground/30 bg-transparent px-9 text-base font-extrabold text-primary-foreground hover:bg-card/10">Talk to Our Team</Button></div>
            <p className="mt-5 text-base font-bold text-primary-foreground/75">No Hidden Fees <span className="mx-5">•</span> No Lock-in Period <span className="mx-5">•</span> Cancel Anytime</p>
          </aside>
        </div>
        <div className="mt-2 grid gap-4 rounded-2xl bg-brand-navy p-6 text-primary-foreground lg:grid-cols-[0.68fr_0.32fr]">
          <div><h3 className="font-display text-xl font-extrabold">Trusted by Businesses Across India</h3><div className="mt-5 grid grid-cols-6 gap-5">{[[ShieldCheck,"₹4Cr+","Capital Deployed"],[UsersRound,"99+","Active Accounts"],[ChartNoAxesCombined,"10–12%","Average Monthly Returns"],[Target,"72%+","Win Rate"],[CircleGauge,"24/7","AI Trading"],[BriefcaseBusiness,"100%","Transparency"]].map(([Icon,value,label])=>{const TrustIcon=Icon as typeof ShieldCheck; return <div key={label as string} className="flex items-center gap-3"><TrustIcon className="size-8 text-primary"/><div><p className="font-display text-2xl font-extrabold">{value as string}</p><p className="text-xs font-bold text-primary-foreground/70">{label as string}</p></div></div>})}</div></div>
          <div className="border-primary-foreground/10 lg:border-l lg:pl-8"><Quote className="size-12 fill-primary text-primary"/><p className="-mt-8 ml-16 text-base font-bold leading-7 text-primary-foreground/85">FastTrade99 has helped us deliver consistent returns to our clients without building a trading team. Their AI infrastructure is our competitive advantage.</p><div className="mt-4 ml-16 flex gap-2">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-7 fill-brand-gold text-brand-gold" />)}</div></div>
        </div>
      </section>
    </main>
  );
};

export default Business;
