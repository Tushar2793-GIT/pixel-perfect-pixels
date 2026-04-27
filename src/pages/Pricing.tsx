import { useState } from "react";
import { Check, Clock3, Headphones, LockKeyhole, ShieldCheck } from "lucide-react";
import { Footer, Header } from "@/components/SiteChrome";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 999,
    subtitle: "Perfect for beginners",
    trial: "7-Day Free Trial",
    features: ["Real-time Market Data", "Basic Charts & Indicators", "1 Strategy", "1 Exchange", "Email Support"],
  },
  {
    name: "Trader",
    monthlyPrice: 2499,
    subtitle: "For active traders",
    trial: "7-Day Free Trial",
    features: ["Advanced Charts", "Technical Indicators", "5 Strategies", "3 Exchanges", "Priority Support"],
  },
  {
    name: "Professional",
    monthlyPrice: 4999,
    subtitle: "For serious traders",
    trial: "7-Day Free Trial",
    popular: true,
    features: ["Algo Trading", "Unlimited Strategies", "All Exchanges", "Advanced Analytics", "Priority + Call Support"],
  },
  {
    name: "Business",
    monthlyPrice: null,
    subtitle: "For businesses & teams",
    trial: "Let’s Talk",
    features: ["Multi-Account Management", "API & White Label", "Custom Integrations", "Dedicated RM", "SLA & Premium Support"],
  },
];

const trustItems = [
  [LockKeyhole, "No Hidden Fees", "Transparent pricing"],
  [ShieldCheck, "Secure & Compliant", "Bank-grade security"],
  [Clock3, "Cancel Anytime", "No long-term lock-in"],
  [Headphones, "24/7 Support", "We’re here to help"],
];

const formatPrice = (value: number) => `₹ ${Math.round(value).toLocaleString("en-IN")}`;

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
  <main className="min-h-screen bg-background text-foreground">
    <Header activeItem="Pricing" />

    <section className="mx-auto max-w-[1920px] px-5 py-10 lg:px-8 2xl:px-10">
      <div className="text-center">
        <p className="text-sm font-extrabold uppercase tracking-widest text-primary">Pricing</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-brand-navy sm:text-5xl">Simple Pricing. Powerful Value.</h1>
        <p className="mt-4 text-lg font-bold text-muted-foreground">Choose the perfect plan for your trading journey.</p>
        <div className="mx-auto mt-6 grid max-w-[480px] grid-cols-3 overflow-hidden rounded-lg border bg-card p-1 shadow-sm">
          <button type="button" onClick={() => setBillingCycle("monthly")} className={`h-12 rounded-md text-sm font-extrabold transition-all ${billingCycle === "monthly" ? "bg-gradient-brand text-primary-foreground shadow-button" : "text-brand-navy hover:bg-secondary"}`}>Monthly Billing</button>
          <button type="button" onClick={() => setBillingCycle("annual")} className={`h-12 rounded-md text-sm font-extrabold transition-all ${billingCycle === "annual" ? "bg-gradient-brand text-primary-foreground shadow-button" : "text-brand-navy hover:bg-secondary"}`}>Annual Billing</button>
          <span className="flex h-12 items-center justify-center rounded-md text-sm font-extrabold text-success">Save 20%</span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 2xl:grid-cols-4">
        {plans.map((plan) => {
          const discountedMonthly = plan.monthlyPrice ? plan.monthlyPrice * 0.8 : null;
          const displayPrice = plan.monthlyPrice ? formatPrice(billingCycle === "annual" ? discountedMonthly! : plan.monthlyPrice) : "Custom";
          return (
          <article key={plan.name} className={`group relative flex min-h-[590px] flex-col rounded-xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-card ${plan.popular ? "border-primary shadow-card ring-2 ring-primary/20" : "border-border"}`}>
            {plan.popular && <span className="absolute -top-4 right-8 rounded-md bg-primary px-5 py-2 text-sm font-extrabold text-primary-foreground shadow-button">Most Popular</span>}
            <h2 className="text-lg font-extrabold uppercase tracking-wide text-primary">{plan.name}</h2>
            <div className="mt-6 flex items-end gap-2">
              <p className="font-display text-4xl font-extrabold text-brand-navy transition-colors group-hover:text-primary">{displayPrice}</p>
              {plan.monthlyPrice && <span className="pb-1 text-base font-extrabold text-muted-foreground">/month</span>}
            </div>
            {billingCycle === "annual" && plan.monthlyPrice && <p className="mt-2 text-sm font-extrabold text-success">Billed yearly: {formatPrice(discountedMonthly! * 12)} after 20% discount</p>}
            <p className="mt-4 text-base font-bold text-muted-foreground">{plan.subtitle}</p>
            <ul className="mt-8 flex-1 space-y-5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-4 text-base font-bold text-brand-navy">
                  <Check className="size-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant={plan.popular ? "brand" : "brandOutline"} className="mt-10 h-14 rounded-md text-lg font-extrabold">{plan.name === "Business" ? "Contact Sales" : "Get Started"}</Button>
            <p className="mt-5 text-center text-sm font-extrabold text-primary">{plan.trial}</p>
          </article>
          );
        })}
      </div>

      <div className="mt-10 grid overflow-hidden rounded-xl border bg-card shadow-sm sm:grid-cols-2 xl:grid-cols-4">
        {trustItems.map(([Icon, title, text], index) => {
          const TrustIcon = Icon as typeof LockKeyhole;
          return (
            <div key={title as string} className={`flex items-center gap-5 p-7 ${index !== trustItems.length - 1 ? "xl:border-r" : ""}`}>
              <TrustIcon className="size-12 shrink-0 rounded-full border border-primary/15 bg-secondary p-3 text-primary" />
              <div>
                <h2 className="text-lg font-extrabold text-brand-navy">{title as string}</h2>
                <p className="mt-1 text-base font-bold text-muted-foreground">{text as string}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    <Footer />
  </main>
  );
};

export default Pricing;