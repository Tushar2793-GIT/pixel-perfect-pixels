import { Linkedin, Send, ShieldCheck, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import fastTradeLogo from "@/assets/fasttrade99-logo-official.png";
import { Button } from "@/components/ui/button";
import { RequestDemoModal } from "@/components/RequestDemoModal";

const navItems = ["How It Works", "Strategies", "For Traders", "For Non-Traders", "For Business", "Pricing", "About Us"];

const navHref = (item: string) =>
  item === "About Us"
    ? "/about"
    : item === "Pricing"
      ? "/pricing"
      : item === "How It Works"
        ? "/#how-it-works"
      : item === "For Business"
        ? "/business"
        : item === "For Non-Traders"
          ? "/non-traders"
          : item === "For Traders"
            ? "/traders"
            : item === "Strategies"
              ? "/strategies"
              : item === "Risk Management"
                ? "/#risk-management"
                : item === "Strategy Builder" || item === "Backtesting" || item === "Marketplace"
                  ? "/strategies"
                  : item === "Algo Trading"
                    ? "/traders"
              : "/#top";

export const BrandLogo = ({ dark = false }: { dark?: boolean }) => (
  <a href="/" className="flex items-center" aria-label="FastTrade99 home">
    <span className={`flex h-14 w-[190px] items-center overflow-hidden rounded-md sm:h-16 sm:w-[270px] ${dark ? "bg-primary-foreground px-3" : "bg-card px-1"}`}>
      <img src={fastTradeLogo} alt="FastTrade99" className="h-full w-full object-contain" />
    </span>
  </a>
);

export const Header = ({ activeItem }: { activeItem?: string }) => {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-card/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex h-[82px] max-w-[1920px] items-center justify-between gap-3 px-4 sm:h-[92px] sm:px-6 lg:px-8 2xl:px-10">
          <BrandLogo />
          <div className="hidden items-center gap-8 text-sm font-extrabold text-brand-navy xl:flex 2xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={navHref(item)}
                className={`relative py-9 transition-colors hover:text-primary ${item === activeItem ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-primary" : ""}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setDemoOpen(true)}
              variant="brandOutline"
              size="lg"
              className="group hidden h-12 rounded-md px-6 text-base font-extrabold lg:inline-flex"
            >
              <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Request Demo
            </Button>
            <Button variant="brandOutline" size="lg" className="hidden h-12 rounded-md px-7 text-base font-extrabold md:inline-flex">Login</Button>
            <Button variant="brand" size="lg" className="h-11 rounded-md px-5 text-sm font-extrabold shadow-button sm:h-12 sm:px-7 sm:text-base">Sign Up</Button>
          </div>
        </nav>
      </header>
      <RequestDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

const footerGroups = [
  ["Platform", ["How It Works", "Strategies", "Pricing", "Risk Management"]],
  ["For Traders", ["Strategy Builder", "Backtesting", "Algo Trading", "Marketplace"]],
  ["For Non-Traders", ["Auto Trading", "AI Strategies", "How It Works", "Pricing"]],
  ["For Business", ["Sub-Accounts", "Performance Fee", "Analytics", "Reports"]],
  ["Company", ["About Us", "Careers", "Blog", "Contact Us"]],
];

export const Footer = () => (
  <footer className="mt-8 overflow-hidden bg-brand-navy text-primary-foreground">
    <div className="relative mx-auto grid max-w-[1920px] gap-10 px-8 py-8 lg:grid-cols-[1.45fr_repeat(6,1fr)] 2xl:px-14">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.16),transparent_68%)]" />
      <div className="relative">
        <BrandLogo dark />
        <p className="mt-4 max-w-[330px] text-base font-bold leading-7 text-primary-foreground/72">
          AI-powered multi-broker trading platform with advanced risk management and smart automation for traders, investors and businesses.
        </p>
        <div className="mt-5 flex gap-4">
          {[Linkedin, Twitter, Youtube, Send].map((Icon, index) => (
            <a key={index} href="#" aria-label="FastTrade99 social link" className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary">
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>

      {footerGroups.map(([title, links]) => (
        <div key={title as string} className="relative">
          <h2 className="text-base font-extrabold text-primary-foreground">{title as string}</h2>
          <ul className="mt-4 space-y-3 text-base font-bold text-primary-foreground/72">
            {(links as string[]).map((link) => (
              <li key={link}><a href={navHref(link)} className="transition-colors hover:text-primary-glow">{link}</a></li>
            ))}
          </ul>
        </div>
      ))}

      <div className="relative">
        <h2 className="text-base font-extrabold text-primary-foreground">Trusted & Secure</h2>
        <ul className="mt-4 space-y-4 text-base font-bold text-primary-foreground/78">
          {["SSL Encrypted", "ISO 27001 Certified", "Secure & Compliant"].map((item) => (
            <li key={item} className="flex items-center gap-3"><ShieldCheck className="size-6 text-success" />{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-bold text-primary-foreground/45">© 2026 FastTrade99. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
