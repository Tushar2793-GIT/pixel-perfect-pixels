import { useEffect, useState } from "react";
import { CalendarCheck, CheckCircle2, Loader2, Send, Sparkles, X, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Props = { open: boolean; onClose: () => void };

const inputCls =
  "h-12 w-full rounded-lg border border-primary/15 bg-background/70 px-4 text-base font-semibold text-brand-navy backdrop-blur transition-all placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:bg-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15";
const labelCls =
  "mb-2 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary/80";

export const RequestDemoModal = ({ open, onClose }: Props) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", capital: "", experience: "", broker: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSuccess(false);
      setLoading(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.capital || !form.experience) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSuccess(true);
    toast.success("Demo request received!");
    setTimeout(() => {
      onClose();
      setForm({ name: "", phone: "", email: "", capital: "", experience: "", broker: "" });
    }, 2200);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-demo-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Close demo request"
        onClick={onClose}
        className="absolute inset-0 animate-backdrop-in bg-brand-navy/60 backdrop-blur-md"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[1080px] animate-modal-in overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-[0_40px_120px_-30px_hsl(var(--primary)/0.55)]"
        style={{ perspective: "1200px" }}
      >
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -left-24 -top-24 size-72 animate-orb-drift rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 size-80 animate-orb-drift rounded-full bg-brand-violet/30 blur-3xl" style={{ animationDelay: "1.5s" }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary-glow)/0.18),transparent_60%)]" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="group absolute right-5 top-5 z-20 flex size-10 items-center justify-center rounded-full border border-primary/20 bg-card/80 text-brand-navy backdrop-blur transition-all hover:rotate-90 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <X className="size-5" />
        </button>

        <div className="relative grid lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT — Brand panel */}
          <aside className="relative hidden overflow-hidden bg-gradient-brand p-10 text-primary-foreground lg:block">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--primary-foreground)/0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary-foreground)/0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-72 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary-foreground)/0.25),transparent_70%)]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] backdrop-blur">
                <Sparkles className="size-3.5" /> Live Demo
              </span>
              <h3 id="request-demo-title" className="mt-7 font-display text-[42px] font-extrabold leading-[1.05]">
                See FastTrade99
                <span className="block bg-gradient-to-r from-primary-foreground to-primary-foreground/60 bg-clip-text text-transparent">
                  in motion.
                </span>
              </h3>
              <p className="mt-5 max-w-[320px] text-base font-semibold leading-7 text-primary-foreground/85">
                A 1:1 walkthrough with our team — live execution, multi-broker setup, and risk controls tailored to your capital.
              </p>

              <ul className="mt-9 space-y-4">
                {[
                  [Zap, "30-min personalised session"],
                  [ShieldCheck, "Risk engine, configured for you"],
                  [CalendarCheck, "Same-week scheduling"],
                ].map(([Icon, text], i) => {
                  const I = Icon as typeof Zap;
                  return (
                    <li
                      key={text as string}
                      className="flex animate-stagger-up items-center gap-3 text-[15px] font-bold"
                      style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 backdrop-blur">
                        <I className="size-4" />
                      </span>
                      {text as string}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative mt-12 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["bg-brand-orange", "bg-success", "bg-brand-gold"].map((c) => (
                    <span key={c} className={`size-8 rounded-full border-2 border-primary ${c}`} />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-extrabold">12,400+ traders onboarded</p>
                  <p className="text-xs font-bold text-primary-foreground/70">Avg. response under 4 hours</p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT — Form */}
          <div className="relative p-7 sm:p-10">
            {success ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="relative">
                  <span className="absolute inset-0 animate-ping rounded-full bg-success/30" />
                  <CheckCircle2 className="relative size-24 text-success" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-extrabold text-brand-navy">You're on the list.</h3>
                <p className="mt-3 max-w-[380px] text-base font-bold text-muted-foreground">
                  Our team will reach out within 24 hours to schedule your live walkthrough.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className="lg:hidden">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-primary">
                    <Sparkles className="size-3.5" /> Live Demo
                  </span>
                </div>
                <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-navy sm:text-[34px] lg:mt-0">
                  Tell us about <span className="bg-gradient-brand bg-clip-text text-transparent">your trading</span>
                </h3>
                <p className="mt-2 text-sm font-bold text-muted-foreground">All fields marked * are required.</p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {[
                    { key: "name", label: "Full Name *", placeholder: "Rajesh Kumar", type: "text", max: 100 },
                    { key: "phone", label: "Phone Number *", placeholder: "+91 98765 43210", type: "tel", max: 20 },
                  ].map((f, i) => (
                    <div key={f.key} className="animate-stagger-up" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                      <label className={labelCls}>{f.label}</label>
                      <Input
                        type={f.type}
                        className={inputCls}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) => update(f.key, e.target.value)}
                        maxLength={f.max}
                      />
                    </div>
                  ))}

                  <div className="animate-stagger-up sm:col-span-2" style={{ animationDelay: "0.2s" }}>
                    <label className={labelCls}>Email Address *</label>
                    <Input
                      type="email"
                      className={inputCls}
                      placeholder="rajesh@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      maxLength={255}
                    />
                  </div>

                  <div className="animate-stagger-up" style={{ animationDelay: "0.25s" }}>
                    <label className={labelCls}>Capital Range *</label>
                    <select className={inputCls} value={form.capital} onChange={(e) => update("capital", e.target.value)}>
                      <option value="">Select range</option>
                      <option value="<1L">Below ₹1 Lakh</option>
                      <option value="1-5L">₹1L – ₹5L</option>
                      <option value="5-25L">₹5L – ₹25L</option>
                      <option value="25L-1Cr">₹25L – ₹1Cr</option>
                      <option value=">1Cr">Above ₹1Cr</option>
                    </select>
                  </div>

                  <div className="animate-stagger-up" style={{ animationDelay: "0.3s" }}>
                    <label className={labelCls}>Experience *</label>
                    <select className={inputCls} value={form.experience} onChange={(e) => update("experience", e.target.value)}>
                      <option value="">Select level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="pro">Professional</option>
                    </select>
                  </div>

                  <div className="animate-stagger-up sm:col-span-2" style={{ animationDelay: "0.35s" }}>
                    <label className={labelCls}>Preferred Broker</label>
                    <select className={inputCls} value={form.broker} onChange={(e) => update("broker", e.target.value)}>
                      <option value="">Select broker (optional)</option>
                      <option value="zerodha">Zerodha</option>
                      <option value="upstox">Upstox</option>
                      <option value="angelone">AngelOne</option>
                      <option value="icici">ICICI Direct</option>
                      <option value="5paisa">5paisa</option>
                      <option value="dhan">Dhan</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 animate-stagger-up" style={{ animationDelay: "0.42s" }}>
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="brand"
                    size="lg"
                    className="group relative h-14 w-full overflow-hidden rounded-xl text-base font-extrabold shadow-button transition-transform hover:scale-[1.01]"
                  >
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent animate-shine-sweep" />
                    {loading ? (
                      <><Loader2 className="size-5 animate-spin" /> Submitting…</>
                    ) : (
                      <><Send className="size-5 transition-transform group-hover:translate-x-1" /> Schedule Live Demo</>
                    )}
                  </Button>
                  <p className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground">
                    <ShieldCheck className="size-4 text-success" />
                    Your details are encrypted · No credit card required
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
