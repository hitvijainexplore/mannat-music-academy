import { useEffect, useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ChevronDown, Instagram, Menu, Music2, Quote, X } from 'lucide-react';

const WHATSAPP_MESSAGE = 'Hi Mannat Music Academy, I would like to know more about your music classes.';
const WHATSAPP_URL = `https://wa.me/916284189575?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const INSTAGRAM_ACADEMY = 'https://www.instagram.com/mannatmusicacademy/';
const INSTAGRAM_FLUTE = 'https://www.instagram.com/mannat.flute/';

const images = {
  sitar: 'https://images.pexels.com/photos/39943661/pexels-photo-39943661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  veena: 'https://images.pexels.com/photos/39943664/pexels-photo-39943664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  flute: 'https://images.pexels.com/photos/39139127/pexels-photo-39139127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  lesson: 'https://images.pexels.com/photos/8520416/pexels-photo-8520416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  group: 'https://images.pexels.com/photos/8520508/pexels-photo-8520508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

type Course = { number: string; title: string; copy: string; image: string };

const courses: Course[] = [
  { number: '01', title: 'Hindustani Classical Vocals', copy: 'Build a strong foundation in Sur, Taal, Raag, Alankars and classical vocal techniques.', image: images.sitar },
  { number: '02', title: 'Vocal Training', copy: 'Improve pitch, voice culture, vocal range, agility and expression.', image: images.veena },
  { number: '03', title: 'Flute', copy: 'Learn flute through structured lessons designed for beginners and progressing learners.', image: images.flute },
  { number: '04', title: 'Online Music Classes', copy: 'Learn from anywhere through interactive live online classes.', image: images.lesson },
  { number: '05', title: 'Personal Classes', copy: 'Focused guidance designed around your individual learning journey.', image: images.sitar },
  { number: '06', title: 'Group Classes', copy: 'Learn together, practise together and grow together.', image: images.group },
];

const faqs = [
  ['What music classes does Mannat Music Academy offer?', 'Mannat offers Hindustani Classical Music, vocal training, flute, Sur, Taal, Raag, Alankar and voice culture lessons.'],
  ['Do you offer online music classes?', 'Yes. The academy offers interactive live online classes through Google Meet.'],
  ['Do you teach Hindustani Classical Music?', 'Yes. Hindustani Classical Music is the primary focus of the academy, with structured vocal training for different learning levels.'],
  ['Are classes available for beginners?', 'Yes. Beginners are welcome, along with intermediate learners and serious music learners.'],
  ['Do you offer vocal training?', 'Yes. Vocal training includes pitch, voice culture, Sur, Taal, Raag and classical vocal techniques.'],
  ['Do you teach flute online?', 'Yes. Mannat Music Academy (Flute) offers live interactive online flute classes.'],
  ['Are classes available for children?', 'Yes. Classes are available for kids, teenagers and adults.'],
  ['Are adults allowed to join?', 'Absolutely. The academy teaches learners across age groups.'],
  ['Do you offer personal and group classes?', 'Yes. You can enquire about both personal classes and group classes.'],
  ['How can I join a class?', 'Message Mannat Music Academy directly on WhatsApp at +91 6284 189 575.'],
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand-mark ${light ? 'brand-mark--light' : ''}`} href="#home" aria-label="Mannat Music Academy home">
      <span className="brand-emblem"><Music2 size={18} strokeWidth={1.5} /></span>
      <span className="brand-type"><strong>Mannat</strong><small>Music Academy</small></span>
    </a>
  );
}

function WhatsAppLink({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <a className={className} href={WHATSAPP_URL} target="_blank" rel="noreferrer">{children}</a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    const timer = window.setTimeout(() => setVisible(true), 80);
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); window.clearTimeout(timer); };
  }, []);

  const activeCourseData = useMemo(() => courses[activeCourse], [activeCourse]);

  return (
    <main className={visible ? 'page page--ready' : 'page'}>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-inner">
          <BrandMark />
          <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
            {['About', 'Classes', 'Flute', 'Journey', 'Testimonials', 'FAQ', 'Contact'].map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}
            <WhatsAppLink className="nav-cta">Talk on WhatsApp <ArrowUpRight size={15} /></WhatsAppLink>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-notes" aria-hidden="true"><span>सा</span><span>re</span><span>गा</span><span>म</span><span>Pa</span></div>
        <div className="hero-orbit hero-orbit--one" /><div className="hero-orbit hero-orbit--two" />
        <div className="hero-sculpture" aria-hidden="true"><div className="sound-rings"><i /><i /><i /><i /></div><div className="sculpture-core"><Music2 size={62} strokeWidth={0.7} /></div><div className="sculpture-glow" /></div>
        <div className="container hero-content">
          <p className="eyebrow hero-eyebrow">Mannat Music Academy <span /></p>
          <h1>Where passion<br /><em>becomes music.</em></h1>
          <p className="hero-copy">Discover Hindustani Classical Music through structured vocal and flute training, personalised guidance and live interactive classes.</p>
          <div className="hero-actions"><WhatsAppLink className="button button--gold">Start Learning <ArrowUpRight size={17} /></WhatsAppLink><a className="text-link" href="#about">Learn about us <ArrowDownRight size={16} /></a></div>
          <div className="hero-signature"><span>Learn.</span><span>Practise.</span><span>Perform.</span></div>
        </div>
        <a href="#about" className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={16} /></a>
      </section>

      <section className="intro section section--ivory" id="about">
        <div className="container intro-grid">
          <div className="intro-visual reveal"><div className="image-frame image-frame--large"><img src={images.sitar} alt="Indian classical musician playing a sitar" loading="lazy" /></div><span className="image-note">A practice in listening<br />and expression</span></div>
          <div className="intro-copy reveal"><p className="eyebrow">01 / The beginning</p><h2>Music is not just learned.<br /><em>It is felt.</em></h2><p className="lead">Mannat Music Academy is dedicated to nurturing musical talent through structured, accessible and passionate music education.</p><p>From the first swara to a deeper understanding of Raag, our classes create space for curiosity, discipline and the joy of finding your own voice. Learn Hindustani Classical Music, vocal training or flute online, with personal attention that meets you where you are.</p><div className="intro-details"><span>Vocal · Flute</span><span>All age groups</span><span>Live online</span></div></div>
        </div>
      </section>

      <section className="classes section section--navy" id="classes">
        <div className="container">
          <div className="section-heading reveal"><div><p className="eyebrow eyebrow--gold">02 / The practice</p><h2>What you can<br /><em>learn here.</em></h2></div><p className="section-intro">A thoughtful path through the building blocks of Indian classical music, shaped around your pace, your practice and your purpose.</p></div>
          <div className="course-explorer reveal"><div className="course-list">{courses.map((course, index) => <button className={`course-row ${activeCourse === index ? 'course-row--active' : ''}`} key={course.number} onMouseEnter={() => setActiveCourse(index)} onFocus={() => setActiveCourse(index)}><span className="course-number">{course.number}</span><span className="course-title">{course.title}</span><ArrowUpRight className="course-arrow" size={18} /></button>)}</div><div className="course-preview"><img src={activeCourseData.image} alt={`${activeCourseData.title} learning at Mannat Music Academy`} /><div className="course-preview-copy"><span>{activeCourseData.number}</span><p>{activeCourseData.copy}</p></div></div></div>
        </div>
      </section>

      <section className="students section section--copper"><div className="container students-inner"><div className="students-number reveal"><span>+</span>900</div><div className="students-copy reveal"><p className="eyebrow">03 / The community</p><h2>Many voices.<br /><em>One love for music.</em></h2><p>Students learning online, across age groups and stages of their musical journey — from beginners discovering their voice to dedicated learners building their foundation.</p></div></div></section>

      <section className="journey section section--ivory" id="journey"><div className="container"><div className="section-heading section-heading--journey reveal"><div><p className="eyebrow">04 / The journey</p><h2>Four steps.<br /><em>A lifetime of music.</em></h2></div><p className="section-intro">Progress is not a race. It is a rhythm you return to, one practice at a time.</p></div><div className="journey-line">{[['01', 'Learn', 'Understand the fundamentals of Sur, Taal and Raag.'], ['02', 'Practice', 'Develop consistency through guided practice and exercises.'], ['03', 'Refine', 'Improve voice, technique, expression and musical understanding.'], ['04', 'Perform', 'Build confidence and express yourself through music.']].map(([number, title, copy]) => <div className="journey-step reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

      <section className="flute section" id="flute"><div className="flute-image"><img src={images.flute} alt="Flute player in traditional Indian attire" loading="lazy" /><span className="flute-caption">Mannat Music Academy <i>/ flute</i></span></div><div className="flute-copy"><p className="eyebrow eyebrow--gold">05 / A second voice</p><h2>Let the<br /><em>breath</em><br />become music.</h2><p>Explore the flute through live, interactive online lessons for kids, adults, beginners and progressing learners.</p><div className="flute-tags"><span>Flute online classes</span><span>Kids & adults</span><span>All age groups</span></div><WhatsAppLink className="button button--outline">Learn flute on WhatsApp <ArrowUpRight size={17} /></WhatsAppLink></div></section>

      <section className="gallery section section--navy" id="testimonials"><div className="container"><div className="gallery-head reveal"><div><p className="eyebrow eyebrow--gold">06 / In the room</p><h2>Small moments<br /><em>become milestones.</em></h2></div><a className="text-link text-link--light" href={INSTAGRAM_ACADEMY} target="_blank" rel="noreferrer">Follow the journey <Instagram size={16} /></a></div><div className="gallery-grid reveal"><figure className="gallery-item gallery-item--tall"><img src={images.flute} alt="Flute learning moment" loading="lazy" /><figcaption>Listening closely</figcaption></figure><figure className="gallery-item gallery-item--wide"><img src={images.group} alt="Teacher and student sharing a music lesson" loading="lazy" /><figcaption>Learning together</figcaption></figure><figure className="gallery-item gallery-item--small"><img src={images.veena} alt="Indian classical instrument practice" loading="lazy" /><figcaption>Finding Sur</figcaption></figure></div></div></section>

      <section className="quote-section section section--ivory"><div className="container quote-layout"><div className="quote-label reveal"><Quote size={32} strokeWidth={1} /><p className="eyebrow">07 / A feeling shared</p></div><blockquote className="reveal">“The right guidance makes practice feel less like a task and more like coming home to yourself.”<cite>— Mannat Music Academy</cite></blockquote></div></section>

      <section className="why section section--sand"><div className="container why-grid"><div className="why-title reveal"><p className="eyebrow">08 / The Mannat way</p><h2>Why learn<br /><em>with Mannat?</em></h2><p>Rooted in the classical tradition. Open to the way you learn best.</p></div><div className="why-list reveal">{['Hindustani Classical Foundation', 'Beginner-Friendly Learning', 'Personal Attention', 'Live Interactive Classes', 'Personal & Group Classes', 'Kids & Adults', 'Online Learning', 'Structured Practice', 'Focus on Sur, Taal & Raag'].map((point, index) => <div className="why-item" key={point}><span>0{index + 1}</span><strong>{point}</strong><ArrowUpRight size={16} /></div>)}</div></div></section>

      <section className="faq section section--ivory" id="faq"><div className="container faq-grid"><div className="faq-title reveal"><p className="eyebrow">09 / Good to know</p><h2>Questions,<br /><em>answered.</em></h2><p>Everything you need to take the first step.</p><WhatsAppLink className="text-link">Ask us on WhatsApp <ArrowUpRight size={16} /></WhatsAppLink></div><div className="faq-list reveal">{faqs.map(([question, answer], index) => <div className={`faq-item ${activeFaq === index ? 'faq-item--open' : ''}`} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

      <section className="final-cta section section--navy"><div className="final-ornament" aria-hidden="true">∿</div><div className="container final-inner reveal"><p className="eyebrow eyebrow--gold">Begin where you are</p><h2>Your musical journey<br /><em>starts with one note.</em></h2><p>Ready to learn, practise and grow?</p><WhatsAppLink className="button button--gold button--large">Start your musical journey <ArrowUpRight size={18} /></WhatsAppLink></div></section>

      <footer className="site-footer" id="contact"><div className="container footer-grid"><div><BrandMark light /><p className="footer-description">Hindustani Classical Music<br />Vocal Training · Flute · Online Classes</p></div><div className="footer-column"><span>Contact</span><a href="tel:+916284189575">+91 6284 189 575</a><a href="mailto:mannatmuzicacademy@gmail.com">mannatmuzicacademy@gmail.com</a></div><div className="footer-column"><span>Find us</span><a href={INSTAGRAM_ACADEMY} target="_blank" rel="noreferrer">@mannatmusicacademy <Instagram size={14} /></a><a href={INSTAGRAM_FLUTE} target="_blank" rel="noreferrer">@mannat.flute <Instagram size={14} /></a></div><div className="footer-column"><span>Hours</span><p>11:00 AM – 9:00 PM</p><WhatsAppLink className="footer-whatsapp">WhatsApp us <ArrowUpRight size={14} /></WhatsAppLink></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Mannat Music Academy</span><span>Music begins with listening.</span></div></footer>
      <WhatsAppLink className="mobile-whatsapp">WhatsApp Mannat <ArrowUpRight size={16} /></WhatsAppLink>
    </main>
  );
}

export default App;
