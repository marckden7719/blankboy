import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logoBB from "@/assets/logoBB.jpeg";
import bbWhite from "@/assets/aaa.png";

function Pixels({ count = 30, color = "#C6FF00" }: { count?: number; color?: string }) {
  const [isClient, setIsClient] = useState(false);
  const [pixels, setPixels] = useState<Array<{ size: number; left: number; top: number; delay: number; dur: number }>>([]);

  useEffect(() => {
    setIsClient(true);
    const newPixels = Array.from({ length: count }).map(() => ({
      size: 4 + Math.random() * 8,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      dur: 4 + Math.random() * 6,
    }));
    setPixels(newPixels);
  }, [count]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pixels.map((p, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: color,
            opacity: 0.5,
            animation: `pixel-drift ${p.dur}s ease-in ${p.delay}s infinite`,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      ))}
    </div>
  );
}

function Section({ id, children, className = "" }: any) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 py-28 ${className}`}>
      {children}
    </section>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-4 py-2.5 md:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoBB} alt="BLANK BOY" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-display text-sm tracking-widest text-white">BLANK BOY</span>
        </Link>
        <nav className="hidden gap-7 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
          <Link to="/#about" className="hover:text-neon-green">About</Link>
          <Link to="/#vision" className="hover:text-neon-green">Vision</Link>
          <Link to="/#features" className="hover:text-neon-green">Features</Link>
          <Link to="/store" className="hover:text-neon-green">Store</Link>
          <Link to="/#community" className="hover:text-neon-green">Community</Link>
        </nav>
        <div className="flex gap-3">
          <a
            href="https://pump.fun/coin/C9A8fWA2X5rUZMQdKFugSXPjnRPNUHgBKiJZuky4pump"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--electric-purple)] px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white hover:opacity-90"
          >
            BUY $BBOY
          </a>
          <Link
            to="/store"
            className="rounded-full bg-[var(--neon-green)] px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-black hover:opacity-90"
          >
            PRE-ORDER
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 noise" />
      <Pixels count={40} color="#C6FF00" />
      <Pixels count={20} color="#8B3DFF" />

      <div className="pointer-events-none absolute left-1/2 top-[55%] -z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-full w-full animate-spin-slow rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(198,255,0,0.18) 60deg, transparent 120deg, rgba(139,61,255,0.18) 200deg, transparent 260deg, rgba(0,163,255,0.18) 320deg, transparent 360deg)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display mt-2 text-6xl leading-none tracking-tight md:text-8xl"
        >
          <span className="text-white text-glow-white animate-glitch inline-block">Own Your</span>{" "}
          <span className="text-neon-green text-glow-green inline-block">BlankBoy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base"
        >
          The World's First Physical AI Companion for Web3. BlankBoy is currently available for pre-order. Reserve your companion today and become one of the first pioneers helping shape the future of physical AI. Every BlankBoy begins as a blank canvas and evolves into a unique companion through AI, personalization, and community experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#product"
            className="group relative overflow-hidden rounded-full bg-[var(--neon-green)] px-8 py-4 font-display text-sm tracking-widest text-black glow-green transition hover:scale-105"
          >
            PRE-ORDER NOW
          </a>
          <a
            href="https://pump.fun/coin/C9A8fWA2X5rUZMQdKFugSXPjnRPNUHgBKiJZuky4pump"
            target="_blank"
            rel="noreferrer"
            className="rounded-full glass px-8 py-4 font-display text-sm tracking-widest text-white transition hover:scale-105 hover:text-neon-green border border-[var(--electric-purple)]"
          >
            BUY $BBOY
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState("Available For Pre-Order");
  const price = 99;

  return (
    <Section id="product">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-full bg-white/5 blur-3xl" />
          <Pixels count={15} color="#FFFFFF" />
          <div className="rounded-3xl glass p-8 flex items-center justify-center">
            <img
              src={bbWhite}
              alt="BlankBoy Genesis Edition"
              className="w-full max-w-[600px] animate-float object-contain"
              style={{ filter: "drop-shadow(0 0 40px rgba(255,255,255,0.3))" }}
            />
          </div>
        </div>
        <div>
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[var(--neon-green)] text-black text-xs font-bold uppercase tracking-widest">
            FOUNDING EDITION
          </div>
          <h2 className="font-display mt-2 text-5xl leading-none text-white md:text-6xl">
            BlankBoy <span className="text-neon-green text-glow-green">Genesis Edition</span>
          </h2>
          <p className="mt-4 text-2xl font-display text-white">${price}</p>
          <p className="mt-4 text-lg text-white/75 leading-relaxed">
            The first generation of BlankBoy AI Companions. Built for pioneers. Designed for the future.
          </p>

          <ul className="mt-6 space-y-3 text-white/75">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-green)]" />
              Premium BlankBoy Figure
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-green)]" />
              Genesis Edition Packaging
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-green)]" />
              Unique Serial Number
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-green)]" />
              Early Supporter Status
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-green)]" />
              Community Membership Access
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-green)]" />
              Future AI Companion Access
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-green)]" />
              Digital Identity Integration
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--neon-green)]" />
              Founder Recognition
            </li>
          </ul>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-white/70 text-sm">Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
                >
                  -
                </button>
                <span className="text-white font-display text-xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Status:</span>
              <span className="text-[var(--neon-green)] font-display text-sm">{status}</span>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => alert("Pre-order coming soon!")}
                className="flex-1 group relative overflow-hidden rounded-full bg-[var(--neon-green)] px-8 py-4 font-display text-sm tracking-widest text-black glow-green transition hover:scale-105"
              >
                PRE-ORDER NOW
              </button>
              <a
                href="https://pump.fun/coin/C9A8fWA2X5rUZMQdKFugSXPjnRPNUHgBKiJZuky4pump"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full glass px-8 py-4 font-display text-sm tracking-widest text-white transition hover:scale-105 hover:text-neon-green border border-[var(--electric-purple)] text-center"
              >
                BUY $BBOY
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyPreOrder() {
  return (
    <Section id="why">
      <div className="mb-14 text-center">
        <p className="font-display text-xs tracking-[0.5em] text-neon-blue">// 01 · PIONEER</p>
        <h2 className="font-display mt-3 text-5xl text-white md:text-6xl">Become An Early Pioneer</h2>
      </div>
      <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16">
        <Pixels count={20} color="#00A3FF" />
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--neon-blue)] opacity-20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[var(--electric-purple)] opacity-20 blur-3xl" />
        <div className="relative text-center max-w-3xl mx-auto">
          <p className="text-xl text-white/80 leading-relaxed">
            BlankBoy is more than a product. It is the beginning of a new category where physical companions evolve through artificial intelligence and community participation. By joining early, you become part of the origin story.
          </p>
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { step: 1, title: "Reserve Your BlankBoy" },
    { step: 2, title: "Receive Early Supporter Confirmation" },
    { step: 3, title: "Receive Production Updates" },
    { step: 4, title: "Receive Your Companion" },
    { step: 5, title: "Begin Your Journey Together" },
  ];

  return (
    <Section id="how">
      <div className="mb-14 text-center">
        <p className="font-display text-xs tracking-[0.5em] text-neon-purple">// 02 · PROCESS</p>
        <h2 className="font-display mt-3 text-5xl text-white md:text-6xl">How It Works</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative overflow-hidden rounded-2xl glass p-6 text-center"
            style={{ boxShadow: `inset 0 0 0 1px #C6FF0033` }}
          >
            <div
              className="mx-auto mb-4 h-10 w-10 rounded-full bg-[var(--neon-green)] text-black flex items-center justify-center font-display text-lg"
            >
              {s.step}
            </div>
            <p className="font-display text-white">{s.title}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function GenesisCollection() {
  return (
    <Section id="genesis">
      <div className="mb-14 text-center">
        <p className="font-display text-xs tracking-[0.5em] text-neon-orange">// 03 · LIMITED</p>
        <h2 className="font-display mt-3 text-5xl text-white md:text-6xl">Genesis Collection</h2>
      </div>
      <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16">
        <Pixels count={20} color="#FF9D00" />
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--neon-orange)] opacity-20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-[var(--electric-purple)] opacity-20 blur-3xl" />
        <div className="relative text-center max-w-3xl mx-auto">
          <p className="text-xl text-white/80 leading-relaxed">
            The first production run will be limited. Each BlankBoy Genesis Edition will receive a unique identity within the ecosystem and special recognition as an early supporter.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Benefits() {
  const benefits = [
    "Priority Shipping",
    "Founder Status",
    "Exclusive Community Access",
    "Early Feature Access",
    "Future Companion Upgrades",
    "Limited Edition Rewards",
    "Genesis Holder Recognition",
  ];

  return (
    <Section id="benefits">
      <div className="mb-14 text-center">
        <p className="font-display text-xs tracking-[0.5em] text-neon-green">// 04 · PERKS</p>
        <h2 className="font-display mt-3 text-5xl text-white md:text-6xl">Early Supporter Benefits</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative overflow-hidden rounded-2xl glass p-6 text-center"
            style={{ boxShadow: `inset 0 0 0 1px #C6FF0033` }}
          >
            <p className="font-display text-white">{b}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function TokenInfo() {
  const tokenDetails = [
    { label: "Name", value: "Blank Boy" },
    { label: "Symbol", value: "BBOY" },
    { label: "Contract Address", value: "C9A8fWA2X5rUZMQdKFugSXPjnRPNUHgBKiJZuky4pump" },
  ];
  return (
    <Section id="token">
      <div className="mb-14 text-center">
        <p className="font-display text-xs tracking-[0.5em] text-neon-purple">// 05 · TOKEN</p>
        <h2 className="font-display mt-3 text-5xl text-white md:text-6xl">$BBOY Token</h2>
      </div>
      <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-12">
        <Pixels count={20} color="#C6FF00" />
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--neon-green)] opacity-20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[var(--electric-purple)] opacity-20 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-3">
          {tokenDetails.map((detail, i) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-6"
              style={{ boxShadow: `inset 0 0 0 1px #C6FF0033` }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">{detail.label}</p>
              <p className="mt-3 font-display text-lg text-white break-all">{detail.value}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://pump.fun/coin/C9A8fWA2X5rUZMQdKFugSXPjnRPNUHgBKiJZuky4pump"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-full bg-[var(--neon-green)] px-8 py-4 font-display text-sm tracking-widest text-black glow-green transition hover:scale-105"
          >
            BUY $BBOY
          </a>
          <a
            href="https://pump.fun/coin/C9A8fWA2X5rUZMQdKFugSXPjnRPNUHgBKiJZuky4pump"
            target="_blank"
            rel="noreferrer"
            className="rounded-full glass px-8 py-4 font-display text-sm tracking-widest text-white transition hover:scale-105 hover:text-neon-green border border-[var(--electric-purple)]"
          >
            VIEW CHART
          </a>
        </div>
      </div>
    </Section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");

  return (
    <Section id="waitlist">
      <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16">
        <Pixels count={25} color="#C6FF00" />
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--neon-green)] opacity-20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-[var(--electric-purple)] opacity-20 blur-3xl" />
        <div className="relative text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white">Join The Waitlist</h2>
          <p className="mt-4 text-white/75">
            Enter your email to receive updates when the next generation of BlankBoy becomes available.
          </p>
          <div className="mt-8 flex gap-3 flex-col md:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full glass text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[var(--neon-green)]"
            />
            <button
              onClick={() => alert("Thanks for joining the waitlist!")}
              className="group relative overflow-hidden rounded-full bg-[var(--neon-green)] px-8 py-4 font-display text-sm tracking-widest text-black glow-green transition hover:scale-105"
            >
              JOIN WAITLIST
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoBB} alt="BLANK BOY" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-display text-sm tracking-widest text-white">BLANK BOY</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              To create the world's most loved AI companion
            </p>
          </div>
        </div>
        <div className="flex gap-5 text-xs uppercase tracking-[0.25em] text-white/60">
          <Link to="/" className="hover:text-neon-green">Home</Link>
          <a href="https://x.com/Blankboy_sol" target="_blank" rel="noreferrer" className="hover:text-neon-green">Twitter</a>
          <a href="https://t.me/BlankBoyOnSol" target="_blank" rel="noreferrer" className="hover:text-neon-green">Telegram</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          © {new Date().getFullYear()} BlankBoy
        </p>
      </div>
    </footer>
  );
}

export const Route = createFileRoute("/store")({
  component: StorePage,
});

function StorePage() {
  return (
    <main className="relative min-h-screen text-white">
      <Nav />
      <Hero />
      <Product />
      <WhyPreOrder />
      <HowItWorks />
      <GenesisCollection />
      <Benefits />
      <TokenInfo />
      <Waitlist />
      <Footer />
    </main>
  );
}
