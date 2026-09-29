import { ArrowDown, ArrowRight, ArrowUpRight, Brain, HeartHandshake, Leaf, Menu, MoveUpRight, Sparkles } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;
const portrait = assetPath("/images/maya-reynolds.png");
const officeImages = [
  assetPath("/images/therapy-office-1.jpeg"),
  assetPath("/images/therapy-office-2.jpeg"),
];

const services = [
  { number: "01", icon: Brain, title: "Anxiety & panic", text: "When worry, panic, or overthinking take up too much room, therapy can help you understand the patterns and build practical ways to feel steadier." },
  { number: "02", icon: HeartHandshake, title: "Trauma therapy", text: "Move at a pace that feels safe as we work with the effects of past experiences, strengthen regulation, and make more space for choice in the present." },
  { number: "03", icon: Leaf, title: "Burnout & perfectionism", text: "For professionals, creatives, and entrepreneurs carrying constant pressure, therapy offers room to slow down and find more sustainable ways to work and live." },
];

const faqs = [
  ["What can I expect in a first session?", "We’ll talk about what brings you to therapy, what you hope might change, and what would help you feel supported. It’s also a chance for you to ask questions and see whether working together feels like a good fit."],
  ["Do you offer in-person and online therapy?", "Yes. Dr. Reynolds offers in-person sessions at her Santa Monica office and secure telehealth sessions for clients located in California."],
  ["What approaches do you use?", "Treatment is collaborative and tailored to you. Depending on your goals, Dr. Reynolds integrates cognitive behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques."],
  ["Who do you work with?", "Dr. Reynolds works with adults experiencing anxiety, panic, trauma, burnout, perfectionism, and the effects of earlier experiences or chronic stress."],
];

function Button({ children, href = "#contact", light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={href}>{children}<ArrowUpRight size={16} strokeWidth={1.8} /></a>;
}

export default function Home() {
  return <main>
    <div className="announcement"><span className="announce-dot" /> In-person therapy in Santa Monica · Online throughout California</div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Dr. Maya Reynolds home"><span className="brand-mark">m<span>.</span></span><span className="brand-name">Maya Reynolds, PsyD<small>Psychology & psychotherapy</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#services">How I can help</a><a href="#approach">My approach</a><a href="#office">The office</a><a href="#faqs">FAQs</a></nav>
      <Button>Let’s connect</Button><details className="mobile-menu"><summary aria-label="Open navigation"><Menu /></summary><nav className="mobile-menu-panel" aria-label="Mobile navigation"><a href="#about">About</a><a href="#services">How I can help</a><a href="#approach">My approach</a><a href="#office">The office</a><a href="#faqs">FAQs</a><a href="#contact">Let’s connect</a></nav></details>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> A thoughtful place to begin again</p>
        <h1>Anxiety &amp; trauma therapy in <em>Santa Monica, CA</em></h1>
        <p className="hero-intro">You can be holding it all together and still feel overwhelmed inside. Therapy can help you make sense of what’s heavy, feel more grounded, and find a way forward that feels like yours.</p>
        <div className="hero-actions"><Button>Get in touch</Button><a className="text-link" href="#about">Get to know me <ArrowDown size={15} /></a></div>
        <div className="hero-note"><span className="note-icon"><Sparkles size={17} /></span><span>Warm, collaborative care for adults<br />In person in Santa Monica or online in California</span></div>
      </div>
      <div className="hero-art">
        <div className="hero-photo" role="img" aria-label="Soft coastal light and warm natural tones create a calm welcome"><div className="sun-disc" /><div className="coastline" /></div>
        <div className="hero-photo-caption"><span>THERAPY FOR THE WHOLE YOU</span><span>01 — 04</span></div>
        <div className="hero-seal"><span>space to breathe<br />room to grow</span><div className="seal-star">✳</div></div>
      </div>
      <div className="hero-bottom"><span>PSYD · LICENSED CLINICAL PSYCHOLOGIST</span><span>LOS ANGELES COUNTY <MoveUpRight size={13} /></span></div>
    </section>

    <section className="intro section-pad" id="about">
      <div className="intro-image-wrap"><div className="intro-image"><img src={portrait} alt="Portrait of Dr. Maya Reynolds" /></div><div className="image-note">A little more room<br />to be yourself.</div></div>
      <div className="intro-copy"><p className="eyebrow"><span className="eyebrow-line" /> A note from Dr. Reynolds</p><h2>You don’t have to look like you’re struggling to deserve support.</h2><p>I’m Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica. I work with adults who are thoughtful, capable, and often used to pushing through—even when anxiety, stress, or the weight of past experiences is catching up with them.</p><p>My hope is to offer a space where you feel respected and understood, and where practical tools can sit alongside the deeper work of reconnecting with yourself.</p><a className="text-link dark-link" href="#approach">A little about how I work <ArrowRight size={16} /></a><div className="signature">Maya <span>Reynolds, PsyD</span></div></div>
    </section>

    <section className="who section-pad" id="services">
      <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> Support for what you’re carrying</p><h2>There’s a way forward,<br /><em>at your pace.</em></h2></div><p className="section-side-copy">You don’t need to have it all figured out before you begin. We can start with what’s here today.</p></div>
      <div className="service-grid">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" className="card-link" aria-label={`Learn more about ${title}`}><ArrowUpRight size={17} /></a></article>)}</div>
      <div className="service-footnote"><span>INDIVIDUAL THERAPY FOR ADULTS</span><span>CBT · EMDR · MINDFULNESS · BODY-ORIENTED WORK</span></div>
    </section>

    <section className="expertise section-pad">
      <div className="expertise-copy"><p className="eyebrow"><span className="eyebrow-line" /> When the inside feels like too much</p><h2>Support that sees<br />the <em>whole picture.</em></h2><p>Anxiety and trauma can live in our thoughts, our bodies, and the ways we move through relationships and work. We’ll make sense of your experience together and choose an approach that fits your needs—not a formula.</p><Button>Explore working together</Button></div>
      <div className="expertise-list"><div><span>01</span><div><h3>Find steadier ground</h3><p>Practical support for anxiety, panic, and feeling constantly on edge.</p></div><ArrowUpRight size={18} /></div><div><span>02</span><div><h3>Make room for healing</h3><p>Careful, paced trauma work with safety and stabilization at the center.</p></div><ArrowUpRight size={18} /></div><div><span>03</span><div><h3>Let go of impossible pressure</h3><p>Support for burnout, perfectionism, and the urge to always push harder.</p></div><ArrowUpRight size={18} /></div><div className="expertise-quote">“You can bring the capable part of you—and the tired part, too.”</div></div>
    </section>

    <section className="approach section-pad" id="approach"><div className="approach-orbit"><div className="orbit-center">Care that<br /><em>moves with you</em></div><span className="orbit-tag tag-one">CBT</span><span className="orbit-tag tag-two">EMDR</span><span className="orbit-tag tag-three">Mindfulness</span><span className="orbit-tag tag-four">Body-oriented</span><div className="orbit-line orbit-a"/><div className="orbit-line orbit-b"/></div><div className="approach-copy"><p className="eyebrow"><span className="eyebrow-line" /> A grounded, collaborative process</p><h2>Insight and practical tools, <em>together.</em></h2><p>Therapy with me is structured enough to feel supportive, with room for reflection and depth. I integrate evidence-based methods such as CBT and EMDR with mindfulness and body-oriented techniques, tailoring the work to what you need.</p><p>In trauma therapy, we move carefully. Building safety and steadiness in daily life matters just as much as what happens in the room.</p><div className="approach-badge"><span>01</span> Your story leads the way</div></div></section>

    <section className="quote-band"><div className="quote-mark">“</div><blockquote>Healing isn’t about becoming someone else.<br /><em>It’s about finding your way back to yourself.</em></blockquote><span>DR. MAYA REYNOLDS · SANTA MONICA</span></section>

    <section className="cta section-pad" id="contact"><div><p className="eyebrow"><span className="eyebrow-line" /> When you feel ready</p><h2>Finding the right therapist<br />is a <em>first step.</em></h2><p>Getting started can begin with a conversation about what’s bringing you to therapy and what support might feel right for you.</p><Button light>Get in touch</Button><span className="cta-small">In person in Santa Monica · Online across California</span></div><div className="cta-art"><div className="cta-arch"><div className="cta-sun" /></div><span className="cta-art-label">A GENTLE PLACE TO START</span></div></section>

    {/* <section className="office section-pad" id="office"><div className="office-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> A little space to exhale</p><h2>Our office, a calmer<br /><em>place to land.</em></h2></div><p>My Santa Monica office is quiet, private, and filled with natural light. It’s a comfortable, uncluttered space where you can arrive as you are and take a breath before we begin.</p></div><div className="office-gallery"><div className="office-image office-image-one"><img src={officeImages[0]} alt="Comfortable therapy office at Dr. Reynolds’ practice" /></div><div className="office-image office-image-two"><img src={officeImages[1]} alt="A quiet, private office with a calm atmosphere" /></div><div className="office-address"><span className="address-pin">⌖</span><span>IN-PERSON SESSIONS<br /><strong>123th Street 45 W<br />Santa Monica, CA 90401</strong></span><a href="https://maps.google.com/?q=123th+Street+45+W+Santa+Monica+CA+90401" aria-label="View office address"><ArrowUpRight size={18} /></a></div></div><div className="office-foot"><span>01 / A QUIET, PRIVATE SPACE</span><span>ALSO OFFERING SECURE CALIFORNIA TELEHEALTH</span></div></section>

    <section className="faq section-pad" id="faqs"><div className="faq-heading"><p className="eyebrow"><span className="eyebrow-line" /> A few helpful details</p><h2>Questions are<br /><em>welcome here.</em></h2><p>Starting therapy can bring up a lot of questions. Here are a few answers to help you know what to expect.</p><Button>Ask me directly</Button></div><div className="faq-list">{faqs.map(([q, a], i) => <details key={q} className="faq-item"><summary><span className="faq-number">0{i + 1}</span>{q}<span className="faq-plus">+</span></summary><p>{a}</p></details>)}</div></section>

    <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#top"><span className="brand-mark">m<span>.</span></span><span className="brand-name">Maya Reynolds, PsyD<small>Psychology & psychotherapy</small></span></a><span className="footer-motto">A grounded place to begin.<br /><em>Space to be, room to grow.</em></span><Button>Let’s connect</Button></div><div className="footer-bottom"><span>© DR. MAYA REYNOLDS, PSYD</span><span>123th Street 45 W · Santa Monica, CA 90401</span><div><a href="#about">ABOUT</a><a href="#services">SERVICES</a><a href="#faqs">FAQS</a></div><a className="back-top" href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
} */}
