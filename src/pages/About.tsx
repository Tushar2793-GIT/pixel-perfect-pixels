import { ArrowRight, BadgeCheck, BrainCircuit, Eye, Flag, Lightbulb, Rocket, ShieldCheck, Target, TrendingUp, UsersRound } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { Button } from "@/components/ui/button";

const navItems = ["About Us", "How It Works", "Features", "For Traders", "For Business", "Pricing"];

const stats = [
  ["2023", "Founded"],
  ["50K+", "Happy Users"],
  ["10M+", "Trades Executed"],
  ["25+", "Team Members"],
];

const valueItems = ["Innovation First", "Transparency Always", "Customer Success", "Integrity & Security"];

const journey = [
  ["2023", "FastTrade99 Founded"],
  ["2023", "Launched AI-Powered Strategies"],
  ["2024", "10K+ Active Users"],
  ["2024", "Multi-Broker Integration"],
  ["2025", "50K+ Users & Growing"],
  ["2026", "Smarter Global Trading Tools"],
];

const About = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex h-[102px] max-w-[1360px] items-center justify-between px-5 lg:px-6">
          <a href="/" className="flex items-center gap-3" aria-label="FastTrade99 home">
            <span className="flex size-11 items-center justify-center rounded-full bg-gradient-brand text-lg font-extrabold text-primary-foreground shadow-button ring-4 ring-secondary">FT</span>
            <span className="font-display text-[34px] font-extrabold leading-none tracking-normal text-brand-navy">
              fasttrade<span className="text-primary">99</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-extrabold text-brand-navy lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "About Us" ? "/about" : item === "Pricing" ? "/#pricing" : "#"}
                className={`relative py-10 transition-colors hover:text-primary ${item === "About Us" ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-primary" : ""}`}
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

      <section className="mx-auto max-w-[1360px] px-3 pb-8 pt-6 sm:px-5 lg:px-3">
        <div className="grid overflow-hidden rounded-lg border bg-card shadow-card lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex min-h-[410px] flex-col justify-center px-7 py-10 sm:px-10 lg:px-12">
            <p className="text-sm font-extrabold uppercase tracking-widest text-primary">About Us</p>
            <h1 className="mt-5 max-w-[560px] font-display text-4xl font-extrabold leading-[1.08] text-brand-navy sm:text-[46px]">
              Empowering Traders. Building the Future.
            </h1>
            <p className="mt-6 max-w-[590px] text-base font-bold leading-8 text-muted-foreground">
              FastTrade99 is on a mission to make trading smarter, simpler, and more accessible for everyone using the power of AI and advanced technology.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={value}>
                  <p className="font-display text-3xl font-extrabold text-primary">{value}</p>
                  <p className="mt-1 text-xs font-extrabold text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-secondary lg:min-h-[410px]">
            <img src={aboutTeam} alt="FastTrade99 team working together in a modern office" width={1280} height={720} className="h-full w-full object-cover" />
            <span className="absolute right-8 top-8 flex size-20 items-center justify-center rounded-full bg-gradient-brand font-display text-3xl font-extrabold text-primary-foreground shadow-button ring-8 ring-card/25">FT</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
            <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><Target className="size-6" /></span>
            <h2 className="mt-5 font-display text-xl font-extrabold text-brand-navy">Our Mission</h2>
            <p className="mt-4 text-sm font-bold leading-7 text-muted-foreground">
              To empower traders and investors with AI-driven tools, intelligent strategies, and robust risk management to create consistent wealth.
            </p>
          </article>
          <article className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
            <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><Eye className="size-6" /></span>
            <h2 className="mt-5 font-display text-xl font-extrabold text-brand-navy">Our Vision</h2>
            <p className="mt-4 text-sm font-bold leading-7 text-muted-foreground">
              To be the world's most trusted multi-broker trading platform that democratizes financial freedom for all.
            </p>
          </article>
          <article className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
            <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><ShieldCheck className="size-6" /></span>
            <h2 className="mt-5 font-display text-xl font-extrabold text-brand-navy">Our Values</h2>
            <ul className="mt-4 space-y-3">
              {valueItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-extrabold text-brand-navy">
                  <BadgeCheck className="size-4 shrink-0 fill-secondary text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <section className="mt-8 rounded-lg border bg-secondary px-5 py-7 shadow-sm sm:px-8">
          <h2 className="text-center font-display text-lg font-extrabold text-primary">Our Journey</h2>
          <div className="relative mt-9 grid gap-8 md:grid-cols-6">
            <div className="absolute left-6 right-6 top-[35px] hidden h-0.5 bg-border md:block" />
            {journey.map(([year, label], index) => {
              const Icon = [Flag, BrainCircuit, UsersRound, TrendingUp, Rocket, Lightbulb][index];
              return (
                <div key={`${year}-${label}`} className="relative z-10 text-center">
                  <div className="mx-auto flex size-[70px] flex-col items-center justify-center rounded-full bg-card text-primary shadow-sm ring-8 ring-secondary">
                    <Icon className="size-5" />
                    <span className="mt-1 font-display text-sm font-extrabold">{year}</span>
                  </div>
                  <p className="mt-4 text-xs font-extrabold leading-5 text-brand-navy">{label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-5 rounded-lg bg-gradient-brand px-7 py-7 text-primary-foreground shadow-button sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-md border border-primary-foreground/35 bg-card/10"><Rocket className="size-7" /></span>
            <div>
              <h2 className="font-display text-xl font-extrabold">We're just getting started.</h2>
              <p className="mt-1 text-sm font-bold text-primary-foreground/85">Join us as we build the future of smart trading.</p>
            </div>
          </div>
          <Button variant="secondary" size="lg" className="h-13 px-8 font-extrabold text-primary">
            Join Our Journey <ArrowRight className="size-4" />
          </Button>
        </section>
      </section>
    </main>
  );
};

export default About;