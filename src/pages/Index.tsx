import { useMemo, useState } from "react";
import { BadgeIndianRupee, CheckCircle2, Headphones, RotateCcw, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer, Header } from "@/components/SiteChrome";


const plans = [
  {
    name: "STARTER",
    monthlyPrice: 999,
    sub: "Perfect for beginners",
    features: ["Real-time Market Data", "Basic Charts & Indicators", "1 Strategy", "1 Exchange", "Email Support"],
  },
  {
    name: "TRADER",
    monthlyPrice: 2499,
    sub: "For active traders",
    features: ["Advanced Charts", "Technical Indicators", "5 Strategies", "3 Exchanges", "Priority Support"],
  },
  {
    name: "PROFESSIONAL",
    monthlyPrice: 4999,
    sub: "For serious traders",
    popular: true,
    features: ["Algo Trading", "Unlimited Strategies", "All Exchanges", "Advanced Analytics", "Priority + Call Support"],
  },
  {
    name: "BUSINESS",
    monthlyPrice: null,
    sub: "For businesses & teams",
    features: ["Multi-Account Management", "API & White Label", "Custom Integrations", "Dedicated RM", "SLA & Premium Support"],
  },
];

const benefits = [
  [BadgeIndianRupee, "No Hidden Fees", "Transparent pricing"],
  [ShieldCheck, "Secure & Compliant", "Bank-grade security"],
  [RotateCcw, "Cancel Anytime", "No long-term lock-in"],
  [Headphones, "24/7 Support", "We're here to help"],
];

const formatRupees = (amount: number) => `₹ ${Math.round(amount).toLocaleString("en-IN")}`;

const Index = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const pricedPlans = useMemo(
    () =>
      plans.map((plan) => ({
        ...plan,
        price:
          plan.monthlyPrice === null
            ? "Custom"
            : billingCycle === "monthly"
              ? formatRupees(plan.monthlyPrice)
              : formatRupees(plan.monthlyPrice * 12 * 0.8),
        suffix: plan.monthlyPrice === null ? "" : billingCycle === "monthly" ? "/month" : "/year",
      })),
    [billingCycle],
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header activeItem="Pricing" />

      <section id="pricing" className="mx-auto max-w-[1360px] px-3 pb-8 pt-6 sm:px-5 lg:px-3">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-widest text-primary">Pricing</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-[46px]">
            Simple Pricing. Powerful Value.
          </h1>
          <p className="mt-4 text-base font-bold text-muted-foreground">Choose the perfect plan for your trading journey.</p>
        </div>

        <div className="mx-auto mt-5 grid w-full max-w-[494px] grid-cols-[1fr_1fr_auto] rounded-lg border bg-card p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`h-12 rounded-md px-6 text-sm font-extrabold transition-all ${billingCycle === "monthly" ? "bg-gradient-brand text-primary-foreground shadow-button" : "text-brand-navy hover:bg-secondary"}`}
          >
            Monthly Billing
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`h-12 rounded-md px-6 text-sm font-extrabold transition-all ${billingCycle === "annual" ? "bg-gradient-brand text-primary-foreground shadow-button" : "text-brand-navy hover:bg-secondary"}`}
          >
            Annual Billing
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className="h-12 whitespace-nowrap rounded-md px-4 text-sm font-extrabold text-success transition-colors hover:bg-secondary"
          >
            Save 20%
          </button>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {pricedPlans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex min-h-[640px] flex-col rounded-lg border bg-card px-8 py-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:bg-secondary hover:shadow-card ${plan.popular ? "border-primary bg-secondary shadow-card" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-7 rounded-sm bg-gradient-brand px-5 py-1 text-xs font-extrabold text-primary-foreground shadow-button">
                  Most Popular
                </span>
              )}
              <p className="font-display text-sm font-extrabold uppercase tracking-normal text-primary">{plan.name}</p>
              <div className="mt-8 flex items-end gap-2">
                <h2 className="font-display text-[42px] font-extrabold leading-none text-brand-navy">{plan.price}</h2>
                {plan.suffix && <span className="pb-1 text-base font-bold text-muted-foreground">{plan.suffix}</span>}
              </div>
              <p className="mt-6 text-base font-bold text-muted-foreground">{plan.sub}</p>

              <ul className="mt-10 space-y-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-[15px] font-bold leading-5 text-brand-navy">
                    <CheckCircle2 className="size-5 shrink-0 fill-secondary text-primary transition-transform group-hover:scale-110" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-14">
                <Button className="h-16 w-full text-base font-extrabold" variant={plan.popular ? "brand" : "brandOutline"} size="lg">
                  {plan.name === "BUSINESS" ? "Contact Sales" : "Get Started"}
                </Button>
                <p className="mt-5 text-center text-sm font-extrabold text-primary">
                  {plan.name === "BUSINESS" ? "Let's Talk" : billingCycle === "monthly" ? "7-Day Free Trial" : "20% Annual Savings Applied"}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(([Icon, title, text]) => {
            const BenefitIcon = Icon as typeof BadgeIndianRupee;
            return (
              <article key={title as string} className="flex items-center gap-5 rounded-lg border bg-card px-8 py-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full border bg-secondary text-primary">
                  <BenefitIcon className="size-7" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-extrabold text-brand-navy">{title as string}</h2>
                  <p className="mt-1 text-base font-bold text-muted-foreground">{text as string}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Index;