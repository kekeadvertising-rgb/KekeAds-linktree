import { useState } from "react";

// ── UPDATE THESE URLS WHEN LIVE ──────────────────────────────────────────────
const LINKS = {
  forgetMeNot: {
    sponsor:  "https://forgetmenot.kekeads.com.ng",
    whatsapp: "https://wa.me/2348149999701?text=Hi%2C%20I%20want%20to%20sponsor%20a%20Keke%20for%20Forget%20Me%20Not",
    deck:     "https://kekeads.com.ng/forget-me-not-deck",
  },
  blueprint: {
    buy:     "https://paystack.shop/pay/KekeAds",   // replace with Blueprint payment link
    preview: "https://kekeads.com.ng/blueprint-preview",
  },
  advertise: {
    proposal:     "https://tally.so/r/mYjBDR",
    pitStops:     "https://tally.so/r/wQ2kBL",
    paystack:     "https://paystack.shop/pay/KekeAds",
    socialChange: "https://tally.so/r/social-change",
  },
  invest: {
    franchise: "https://tally.so/r/franchise",
    investor:  "https://tally.so/r/investor",
  },
  social: {
    linkedin: "https://linkedin.com/company/2084495",
    whatsapp: "https://wa.me/2348149999701",
    email:    "mailto:info@kekeads.com.ng",
    website:  "https://kekeads.com.ng",
  },
};

const BLUEPRINT_PRICE = "₦32,000";   // ← replace with actual price e.g. ₦15,000
const CAMPAIGN_THRESHOLD = "₦50,000";

const C = {
  navy:  "#0B1829", deep: "#0D1F38",
  gold:  "#C48A10", amber: "#E8A020",
  rose:  "#C8607A", roseD: "#8B3050",
  sky:   "#3B6DC8", sage: "#2A5F45",
  ivory: "#F7F2EA",
};

// ── COMPONENTS ───────────────────────────────────────────────────────────────

function Btn({ href, emoji, label, sub, variant = "default", badge }) {
  const [hov, setHov] = useState(false);
  const v = {
    default: { bg: hov ? "#1A2840" : "#0D1F38", border: hov ? C.amber : "#1E3050", color: C.ivory },
    gold:    { bg: hov ? C.amber   : C.gold,    border: C.amber, color: C.navy },
    rose:    { bg: hov ? "#A04060" : C.roseD,   border: C.rose,  color: C.ivory },
    sky:     { bg: hov ? "#2A5098" : "#1E3A70", border: C.sky,   color: C.ivory },
    sage:    { bg: hov ? "#1E4530" : "#163525", border: C.sage,  color: "#A8D8B8" },
    amber:   { bg: hov ? "#7A4A00" : "#5A3500", border: C.amber, color: C.amber },
  }[variant] || {};

  return (
    <a
      href={href || "#"}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: "12px",
        padding: "14px 16px", borderRadius: "12px", textDecoration: "none",
        transition: "all 0.2s", transform: hov ? "translateY(-1px)" : "none",
        boxShadow: hov ? "0 4px 20px rgba(0,0,0,0.35)" : "none",
        background: v.bg, border: `1px solid ${v.border}`, color: v.color,
        position: "relative", overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.2 }}>{label}</div>
        {sub && <div style={{ fontSize: "0.73rem", opacity: 0.6, marginTop: "2px" }}>{sub}</div>}
      </div>
      {badge && (
        <span style={{
          background: C.amber, color: C.navy,
          fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.06em",
          padding: "2px 7px", borderRadius: "10px", flexShrink: 0,
          textTransform: "uppercase",
        }}>{badge}</span>
      )}
      {!badge && <span style={{ opacity: 0.3, fontSize: "0.8rem", flexShrink: 0 }}>→</span>}
    </a>
  );
}

function Sec({ emoji, title, accent, children }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", paddingLeft: "2px" }}>
        <div style={{ width: "3px", height: "16px", borderRadius: "2px", background: accent || C.amber, flexShrink: 0 }} />
        <span style={{ fontSize: "0.67rem", letterSpacing: "0.14em", color: accent || C.amber, fontWeight: 700, textTransform: "uppercase" }}>
          {emoji}&nbsp;&nbsp;{title}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>{children}</div>
    </div>
  );
}

function Rule() {
  return <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #1A2E48, transparent)", margin: "4px 0 24px" }} />;
}

function Pill({ num, label }) {
  return (
    <div style={{
      textAlign: "center", padding: "10px 6px",
      background: "rgba(255,255,255,0.025)", borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.055)",
    }}>
      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: C.amber, lineHeight: 1 }}>{num}</div>
      <div style={{ fontSize: "0.6rem", color: "#5A7090", marginTop: "3px", letterSpacing: "0.05em" }}>{label}</div>
    </div>
  );
}

// ── BUNDLE OFFER CARD ─────────────────────────────────────────────────────────
function BundleCard() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1A1000, #0E0A00)",
      border: `1px solid ${C.amber}`,
      borderRadius: "14px", padding: "16px", marginBottom: "12px",
      position: "relative", overflow: "hidden",
    }}>
      {/* glow */}
      <div style={{
        position: "absolute", top: "-30px", right: "-30px",
        width: "120px", height: "120px",
        background: `radial-gradient(circle, rgba(196,138,16,0.18) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* tag */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "5px",
        background: "rgba(196,138,16,0.18)", border: `1px solid rgba(196,138,16,0.4)`,
        borderRadius: "20px", padding: "3px 10px",
        fontSize: "0.65rem", color: C.amber, fontWeight: 800,
        letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px",
      }}>
        ✦ &nbsp;EXCLUSIVE BUNDLE OFFER
      </div>

      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: C.ivory, lineHeight: 1.2, marginBottom: "6px" }}>
        Book a Forget Me Not campaign<br />
        <span style={{ color: C.amber }}>over {CAMPAIGN_THRESHOLD}</span>
      </div>

      <div style={{ fontSize: "0.82rem", color: "#AA9060", marginBottom: "14px", lineHeight: 1.5 }}>
        …and receive a free copy of{" "}
        <span style={{ color: C.ivory, fontWeight: 700 }}>The KekeAds Blueprint</span>
        {" "}— the complete guide to building your own Keke transit media business.
        <br />
        <span style={{ color: "#6A5030", fontSize: "0.74rem" }}>
          Standalone price: {BLUEPRINT_PRICE} &nbsp;·&nbsp; Free when you book.
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Btn
          href={LINKS.advertise.paystack}
          emoji="🛺"
          label={`Book Campaign (${CAMPAIGN_THRESHOLD}+) & Get Blueprint Free`}
          sub="Pay via Paystack · Blueprint delivered on confirmation"
          variant="gold"
          badge="FREE BOOK"
        />
        <Btn
          href={LINKS.advertise.proposal}
          emoji="📝"
          label="Request a Custom Proposal First"
          sub="We'll send you a quote before you commit"
          variant="default"
        />
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("all");

  const tabs = [
    { id: "all",       label: "All" },
    { id: "campaign",  label: "🌸 Campaign" },
    { id: "blueprint", label: "📖 Blueprint" },
    { id: "advertise", label: "🛺 Advertise" },
  ];

  const show = (id) => tab === "all" || tab === id;

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(160deg, #060C18 0%, ${C.navy} 45%, #0A1520 100%)`,
      fontFamily: "'DM Sans','Inter',-apple-system,sans-serif",
      color: C.ivory, padding: "0 0 60px",
    }}>

      {/* BG glow */}
      <div style={{
        position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "500px", height: "260px",
        background: "radial-gradient(ellipse, rgba(59,109,200,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "420px", margin: "0 auto", padding: "0 16px", position: "relative" }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", padding: "40px 0 24px" }}>
          <div style={{ margin: "0 auto 16px", width: "90px", height: "90px", boxShadow: "0 0 32px rgba(196,138,16,0.28)" }}>
            <img
              src="/KekeAds_Logo.jpg"
              alt="KekeAds Logo"
              style={{ width: "90px", height: "90px", borderRadius: "50%", display: "block", objectFit: "cover" }}
            />
          </div>

          <div style={{ fontSize: "1.55rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
            KekeAds Worldwide
          </div>
          <div style={{ fontSize: "0.72rem", color: C.amber, marginTop: "5px", letterSpacing: "0.1em", fontWeight: 700, textTransform: "uppercase" }}>
            Nigeria's First Patented Keke Transit Media
          </div>
          <div style={{ fontSize: "0.7rem", color: "#4A6080", marginTop: "3px" }}>
            10+ Cities &nbsp;·&nbsp; 2,105+ Units &nbsp;·&nbsp; 511M+ Impressions
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", margin: "18px 0 0" }}>
            <Pill num="2,105+" label="Keke Units" />
            <Pill num="10+"    label="Cities" />
            <Pill num="511M+"  label="Impressions" />
          </div>
        </div>

        {/* ── FORGET ME NOT HERO ── */}
        {show("campaign") && (
          <>
            <div style={{
              background: "linear-gradient(135deg, #180C14, #100810)",
              border: `1px solid ${C.rose}`, borderRadius: "16px",
              padding: "18px", marginBottom: "10px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", right: "-8px", top: "-8px",
                fontSize: "4.5rem", opacity: 0.07, lineHeight: 1, pointerEvents: "none",
              }}>✿</div>

              {/* FRSC badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                background: "rgba(200,96,122,0.14)", border: "1px solid rgba(200,96,122,0.28)",
                borderRadius: "20px", padding: "3px 10px",
                fontSize: "0.65rem", color: C.rose, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px",
              }}>
                🌸 &nbsp;Live Campaign · KekeAds × FRSC Nigeria
              </div>

              <div style={{ fontSize: "1.35rem", fontWeight: 800, lineHeight: 1.15 }}>
                Forget Me Not
              </div>
              <div style={{ fontSize: "0.8rem", color: C.amber, fontWeight: 600, marginTop: "2px" }}>
                Safe Roads Africa
              </div>
              <div style={{ fontSize: "0.76rem", color: "#8A7080", marginTop: "8px", lineHeight: 1.55 }}>
                5,289 Nigerians died on roads in 2025 (FRSC). Sponsor a Keke.
                Honour a life. Protect another. Starting from $50.
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px" }}>
                <Btn href={LINKS.forgetMeNot.sponsor}  emoji="🌸" label="Sponsor a Keke Today"            sub="$50 panel · $250 full Keke · $5,000 city pilot" variant="rose" />
                <Btn href={LINKS.forgetMeNot.whatsapp} emoji="💬" label="Dedicate in Memory of a Loved One" sub="WhatsApp us to set up a tribute dedication"       variant="default" />
                <Btn href={LINKS.forgetMeNot.deck}     emoji="📋" label="Download Sponsorship Deck"        sub="Full campaign overview + all tiers"                variant="default" />
              </div>
            </div>

            {/* BUNDLE NUDGE under campaign */}
            <div style={{
              background: "rgba(196,138,16,0.08)", border: "1px solid rgba(196,138,16,0.2)",
              borderRadius: "10px", padding: "10px 14px",
              fontSize: "0.75rem", color: "#AA9050", lineHeight: 1.5,
              marginBottom: "24px", display: "flex", gap: "8px", alignItems: "flex-start",
            }}>
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>📖</span>
              <span>
                Book a campaign over {CAMPAIGN_THRESHOLD} and receive{" "}
                <strong style={{ color: C.amber }}>The KekeAds Blueprint free</strong> — the complete guide to building
                a Keke transit media business (worth {BLUEPRINT_PRICE}).{" "}
                <a href="#bundle" style={{ color: C.amber, textDecoration: "underline" }}>See bundle offer ↓</a>
              </span>
            </div>
          </>
        )}

        {/* ── TABS ── */}
        <div style={{ display: "flex", gap: "6px", marginBottom: "20px", overflowX: "auto", scrollbarWidth: "none" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "6px 13px", borderRadius: "20px",
              border: tab === t.id ? `1px solid ${C.amber}` : "1px solid #1E3050",
              background: tab === t.id ? "rgba(196,138,16,0.14)" : "transparent",
              color: tab === t.id ? C.amber : "#4A6080",
              fontSize: "0.73rem", fontWeight: 600,
              cursor: "pointer", whiteSpace: "nowrap",
              fontFamily: "inherit", transition: "all 0.18s",
            }}>{t.label}</button>
          ))}
        </div>

        {/* ── BUNDLE OFFER (anchor) ── */}
        {show("blueprint") && (
          <>
            <div id="bundle">
              <Sec emoji="✦" title="Bundle Offer — Book & Get Blueprint Free" accent={C.amber}>
                <BundleCard />
              </Sec>
            </div>
            <Rule />
          </>
        )}

        {/* ── BLUEPRINT STANDALONE ── */}
        {show("blueprint") && (
          <>
            <Sec emoji="📖" title="The KekeAds Blueprint" accent="#7ABF8A">
              <div style={{ background: "linear-gradient(135deg, #0C160A, #080E06)", border: "1px solid #253520", borderRadius: "12px", overflow: "hidden", marginBottom: "4px" }}>
                <img src="/IMG_2659.jpeg" alt="The KekeAds Blueprint" style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "160px" }} />
                <div style={{ padding: "14px" }}>
                  <div style={{ fontSize: "0.76rem", color: "#6A9A7A", lineHeight: 1.55, marginBottom: "12px" }}>
                    The complete guide to building and running a Keke transit media business —
                    the model, routes, driver partnerships, wealth creation, and your first 30-day action plan.
                    <br /><span style={{ color: "#4A6A50" }}>23 pages · Instant delivery after payment.</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <Btn href={LINKS.blueprint.buy}     emoji="📘" label={`Buy The KekeAds Blueprint — ${BLUEPRINT_PRICE}`} sub="Or get it FREE when you book a campaign over ₦50,000" variant="sage" badge="OR FREE" />
                    <Btn href={LINKS.blueprint.preview} emoji="👁"  label="Preview — Read First Chapter Free"                sub="No payment required · See if it's right for you"       variant="default" />
                  </div>
                </div>
              </div>
            </Sec>
            <Rule />
          </>
        )}

        {/* ── ADVERTISE ── */}
        {show("advertise") && (
          <>
            <Sec emoji="🛺" title="Advertise with KekeAds" accent={C.sky}>
              {/* One Keke banner */}
              <img src="/IMG_2661.jpeg" alt="One Keke. One Campaign." style={{ width: "100%", borderRadius: "12px", display: "block", objectFit: "cover", maxHeight: "180px", marginBottom: "4px" }} />
              <Btn href={LINKS.advertise.paystack}     emoji="💳" label={`Book Campaign (${CAMPAIGN_THRESHOLD}+) — Get Blueprint Free`} sub="Secure your slot · Blueprint delivered on confirmation" variant="sky" badge="FREE BOOK" />
              <Btn href={LINKS.advertise.proposal}     emoji="📝" label="Request a Custom Campaign Proposal"                             sub="Tell us your city, brand, and budget"                  variant="default" />
              {/* Align Your Brand CSR card */}
              <img src="/IMG_2662.jpeg" alt="Align Your Brand With Safety & Life" style={{ width: "100%", borderRadius: "12px", display: "block", objectFit: "cover", maxHeight: "160px", marginTop: "4px" }} />
              <Btn href={LINKS.advertise.pitStops}     emoji="📍" label="Pit Stops — Community Brand Activations"                        sub="On-ground activations at Keke hubs"                   variant="default" />
              <Btn href={LINKS.advertise.socialChange} emoji="🤝" label="Social Change Campaigns"                                        sub="NGO, government & public sector rates"                variant="default" />
            </Sec>
            <Rule />
          </>
        )}

        {/* ── INVEST ── */}
        {tab === "all" && (
          <>
            <Sec emoji="📈" title="Invest & Grow" accent={C.amber}>
              <Btn href={LINKS.invest.franchise} emoji="🏙️" label="Franchise — Run KekeAds in Your City" sub="Own the Keke media network in your market" variant="gold" />
              <Btn href={LINKS.invest.investor}  emoji="💼" label="Investor Enquiry"                      sub="Current raise: ₦250M for 10% equity"       variant="default" />
            </Sec>
            <Rule />
          </>
        )}

        {/* ── CONNECT ── */}
        <Sec emoji="🔗" title="Connect" accent="#4A6080">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <Btn href={LINKS.social.linkedin} emoji="in"  label="LinkedIn"  sub="KekeAds Page"            variant="sky"     />
            <Btn href={LINKS.social.whatsapp} emoji="💬"  label="WhatsApp"  sub="+234 814 999 9701"       variant="sage"    />
            <Btn href={LINKS.social.email}    emoji="✉️"  label="Email"     sub="info@kekeads.com.ng"     variant="default" />
            <Btn href={LINKS.social.website}  emoji="🌐"  label="Website"   sub="kekeads.com.ng"          variant="default" />
          </div>
        </Sec>

        {/* ── FOOTER ── */}
        <div style={{
          textAlign: "center", marginTop: "32px", paddingTop: "18px",
          borderTop: "1px solid #0C1826",
        }}>
          <div style={{ fontSize: "0.7rem", color: "#2A4060", lineHeight: 1.7 }}>
            KekeAds Worldwide Ltd · RC 854961 · Smate & Smate International Ltd<br />
            <span style={{ color: "#5A3A20" }}>FRSC Partner · Forget Me Not — Safe Roads Africa</span><br />
            <span style={{ color: "#1E2E40" }}>Starting in Nigeria. Built for Africa. 🌸</span>
          </div>
        </div>

      </div>
    </div>
  );
}
