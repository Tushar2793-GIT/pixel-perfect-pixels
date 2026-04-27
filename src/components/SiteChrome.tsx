import { Linkedin, Send, ShieldCheck, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["How It Works", "Features", "Strategies", "For Traders", "For Non-Traders", "For Business", "Pricing", "About Us"];

const navHref = (item: string) =>
  item === "About Us"
    ? "/about"
    : item === "Pricing"
      ? "/#pricing"
      : item === "For Business"
        ? "/business"
        : item === "For Non-Traders"
          ? "/non-traders"
          : item === "For Traders"
            ? "/traders"
            : item === "Strategies"
              ? "/strategies"
              : "/#top";

export const BrandLogo = ({ dark = false }: { dark?: boolean }) => (
  <a href="/" className="flex items-center gap-3" aria-label="FastTrade99 home">
    <span className="flex size-12 items-center justify-center rounded-full bg-gradient-brand text-xl font-extrabold text-primary-foreground shadow-button ring-4 ring-primary/10">FT</span>
    <span className={`font-display text-[36px] font-extrabold leading-none tracking-normal ${dark ? "text-primary-foreground" : "text-brand-navy"}`}>
      fasttrade<span className="text-primary-glow">99</span>
    </span>
  </a>
);

export const Header = ({ activeItem }: { activeItem?: string }) => (
  <header className="sticky top-0 z-40 border-b bg-card/95 shadow-sm backdrop-blur">
    <nav className="mx-auto flex h-[92px] max-w-[1920px] items-center justify-between px-6 lg:px-8 2xl:px-10">
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
        <Button variant="brandOutline" size="lg" className="hidden h-12 rounded-md px-7 text-base font-extrabold sm:inline-flex">Login</Button>
        <Button variant="brand" size="lg" className="h-12 rounded-md px-7 text-base font-extrabold shadow-button">Sign Up</Button>
      </div>
    </nav>
  </header>
);

const footerGroups = [
  ["Platform", ["How It Works", "Features", "Strategies", "Pricing", "Risk Management"]],
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
