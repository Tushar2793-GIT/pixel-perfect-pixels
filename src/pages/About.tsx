import { ArrowRight, BadgeCheck, BrainCircuit, Eye, Flag, Lightbulb, Rocket, ShieldCheck, Target, TrendingUp, UsersRound } from "lucide-react";
import aboutTeam from "@/assets/about-team-mixed.jpg";
import ftCircleLogo from "@/assets/fasttrade99-ft-official.png";
import { Button } from "@/components/ui/button";
import { Footer, Header } from "@/components/SiteChrome";


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
      <Header activeItem="About Us" />

      <section className="mx-auto max-w-[1920px] px-5 pb-8 pt-6 sm:px-6 lg:px-8 2xl:px-10">
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
            <span className="absolute right-8 top-8 flex size-20 items-center justify-center rounded-full bg-card p-1.5 shadow-button ring-8 ring-card/30">
              <img src={ftCircleLogo} alt="FastTrade99 FT logo" className="size-full rounded-full object-cover" />
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
            <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><Target className="size-6" /></span>
            <h2 className="mt-5 font-display text-xl font-extrabold text-brand-navy">Our Mission</h2>
            <p className="mt-4 text-sm font-bold leading-7 text-muted-foreground">
              To empower traders and investors with AI-driven tools, intelligent strategies, and robust risk management to create consistent wealth.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
            <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><Eye className="size-6" /></span>
            <h2 className="mt-5 font-display text-xl font-extrabold text-brand-navy">Our Vision</h2>
            <p className="mt-4 text-sm font-bold leading-7 text-muted-foreground">
              To be the world's most trusted multi-broker trading platform that democratizes financial freedom for all.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
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

        <section className="mt-8 overflow-hidden rounded-2xl border bg-secondary px-5 py-8 shadow-sm sm:px-8">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-widest text-primary">Our Journey</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-brand-navy">From an idea to smarter trading</h2>
          </div>
          <div className="relative mt-10 grid gap-8 md:grid-cols-6">
            <div className="absolute left-6 right-6 top-[35px] hidden h-1 rounded-full bg-gradient-brand opacity-25 md:block" />
            {journey.map(([year, label], index) => {
              const Icon = [Flag, BrainCircuit, UsersRound, TrendingUp, Rocket, Lightbulb][index];
              return (
                <div key={`${year}-${label}`} className="group relative z-10 text-center">
                  <div className="mx-auto flex size-[74px] flex-col items-center justify-center rounded-full bg-card text-primary shadow-sm ring-8 ring-secondary transition-all group-hover:-translate-y-2 group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-button">
                    <Icon className="size-5" />
                    <span className="mt-1 font-display text-sm font-extrabold">{year}</span>
                  </div>
                  <p className="mt-4 rounded-lg bg-card/80 px-2 py-3 text-xs font-extrabold leading-5 text-brand-navy shadow-sm transition-all group-hover:text-primary">{label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-5 rounded-2xl bg-gradient-brand px-7 py-9 text-primary-foreground shadow-button sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div className="flex items-center gap-7">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-primary-foreground/30 bg-card/10 shadow-button"><Rocket className="size-8" /></span>
            <div>
              <h2 className="font-display text-[34px] font-extrabold leading-tight">We're just getting started.</h2>
              <p className="mt-2 text-xl font-bold text-primary-foreground/75">Join us as we build the future of smart trading.</p>
            </div>
          </div>
          <Button variant="secondary" size="lg" className="h-[72px] rounded-xl px-12 text-xl font-extrabold text-primary shadow-sm hover:-translate-y-1 hover:shadow-card">
            Join Our Journey <ArrowRight className="size-4" />
          </Button>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default About;