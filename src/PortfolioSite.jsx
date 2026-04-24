import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const PROFILE = {
  name: "Musa Habibulloh Al Faruq",
  role: "Programmer · 3D Artist",
  tagline:
    "Web, mobile, dan animasi 3D dengan hasil rapi dan mudah dipakai.",
  email: "musahabibullah3@gmail.com",
  phone: "+62 857-4807-7009",
  whatsapp: "https://wa.me/6285748077009",
  location: "Jember, Indonesia",
  socials: {
    github: "https://github.com/musahabibulloh17",
    linkedin: "https://www.linkedin.com/in/musa-habibulloh-al-faruq-370565336/",
    instagram: "https://www.instagram.com/musahabibulloh_/",
  },
};

const SERVICES = [];

const TOOLS = [
  { name: "Blender", logo: "https://cdn.simpleicons.org/blender/fde047" },
  { name: "After Effects", logo: "https://cdn1.iconfinder.com/data/icons/smashicons-file-types-yellow/56/39_-Adobe_After_Effects-_Yellow-512.png" },
  { name: "Premiere Pro", logo: "https://cdn1.iconfinder.com/data/icons/smashicons-file-types-yellow/56/33_-Adobe_Premiere_Pro-_Yellow-512.png" },
  { name: "Cinema 4D", logo: "https://cdn.simpleicons.org/cinema4d/fde047" },
  { name: "Photoshop", logo: "https://pngimg.com/d/photoshop_PNG22.png" },
  { name: "VS Code", logo: "https://img.icons8.com/m_rounded/512/FAB005/visual-studio-code-2019.png" },
  { name: "Unreal Engine", logo: "https://cdn.simpleicons.org/unrealengine/fde047" },
  { name: "Android Studio", logo: "https://img.icons8.com/androidL/512/FAB005/android-studio--v3.png" },
];

const EXPERIENCE = [
  {
    company: "KMIPN",
    role: "Finalis – Kategori Animasi",
    period: "2024",
    desc:
      "Finalis Animasi KMIPN Politeknik Negeri Jakarta. Membuat trailer animasi dengan pencahayaan stylized.",
    image: "/kmipnn.png",
  },
  {
    company: "DWP Project",
    role: "Web & Mobile Developer",
    period: "2025",
    desc:
      "Membangun pengalaman pembayaran paket untuk klien internal dengan stack web & mobile modern.",
    image: "/dwp.jpg",
  },
  {
    company: "TIF Exhibition",
    role: "Juara 3 – Kategori Mobile",
    period: "2025",
    desc:
      "Juara 3 kategori mobile di TIF Exhibition. Fokus pada usabilitas, keandalan, dan UI yang rapi.",
    image: "/juara 3.jpg",
  },
];

const VIDEOS = [];

const ACHIEVEMENTS = [
  { title: "Finalis KMIPN – Animasi", year: "2024", detail: "Trailer animasi stylized untuk KMIPN." },
  { title: "Juara 3 TIF Exhibition – Mobile", year: "2025", detail: "Aplikasi mobile dengan fokus usability." },
  { title: "DWP Project – Web & Mobile", year: "2025", detail: "Pengalaman pembayaran paket untuk klien internal." },
];

const Section = ({ id, title, eyebrow, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        {eyebrow && <p className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-3">{eyebrow}</p>}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      </motion.div>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700 border border-slate-200">
    <span className="h-2 w-2 rounded-full bg-emerald-500" />
    {children}
  </span>
);

const Card = ({ children, className = "", theme }) => {
  const base =
    theme === "dark"
      ? "rounded-2xl bg-[#101218] border border-white/10 p-6 shadow-lg"
      : "rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow";
  return <div className={`${base} ${className}`}>{children}</div>;
};

const Navbar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "Tentang" },
    { href: "#portfolio", label: "Portofolio" },
    { href: "#achievements", label: "My Achievement" },
    { href: "#tools", label: "Tools" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <motion.div 
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div>
            <p className="font-bold text-slate-900 leading-tight">Musa</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
          <motion.button
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm ml-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </motion.button>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="md:hidden rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Hero = () => (
  <header className="relative isolate overflow-hidden" id="top">
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.15fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h1 className="text-4xl leading-tight font-black text-slate-900 sm:text-5xl">
          MUSA HABIBULLOH AL FARUQ
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
          {PROFILE.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 shadow-sm border border-slate-200"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="h-4 w-4" />
            Kontak Saya
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="relative"
      >
        <Card className="relative overflow-hidden p-0">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#0f1116]">
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/8 px-3 py-2 text-xs text-zinc-200 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Sedang mengerjakan
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl bg-white/90 px-4 py-3 border border-slate-200 text-slate-900">
              <div>
                <p className="text-sm text-slate-900">Musa Habibulloh Al Faruq</p>
                <p className="text-xs text-slate-600">Programmer & 3D Artist</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center">
                  M
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-[url('/muzza.png')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          </div>
        </Card>
      </motion.div>
    </div>
  </header>
);

const About = () => (
  <Section id="about" eyebrow="" title="About Me">
    <motion.p 
      className="text-base text-slate-700 leading-relaxed"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      Saya mahasiswa D4 Teknik Informatika Politeknik Negeri Jember yang fokus pada pengembangan Web, Mobile, 
      dan seni 3D. Saya menggabungkan logika pemrograman dengan estetika visual untuk menciptakan 
      pengalaman digital yang fungsional, rapi, dan mudah dipakai.
    </motion.p>
  </Section>
);

const Services = () => null;

const Tools = () => (
  <Section id="tools" eyebrow="" title="Tools">
    <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {TOOLS.map((t, index) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.05,
            ease: [0.25, 0.4, 0.25, 1]
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <Card className="flex items-center justify-center p-6 h-full">
            {t.logo ? (
              <img
                src={t.logo}
                alt={t.name}
                loading="lazy"
                className="h-12 w-12 object-contain"
              />
            ) : (
              <div className="h-12 w-12 rounded-lg bg-slate-100 border border-slate-200" />
            )}
            <span className="sr-only">{t.name}</span>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="portfolio" eyebrow="" title="Portofolio">
    <div className="grid gap-8 md:grid-cols-2">
      {EXPERIENCE.map((e, index) => (
        <motion.article
          key={e.company + e.period}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.25, 0.4, 0.25, 1]
          }}
          whileHover={{ 
            y: -4,
            transition: { duration: 0.2 }
          }}
          className="h-full"
        >
          <Card className="h-full p-0 overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              {e.image ? (
                <motion.img
                  src={e.image}
                  alt={`${e.company} – ${e.role}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <div className="absolute inset-0 bg-slate-100" />
              )}
            </div>
            <div className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">{e.company}</p>
              <h3 className="text-xl font-bold text-slate-900">{e.role}</h3>
              <p className="text-sm text-slate-500 font-medium">{e.period}</p>
              <p className="text-sm leading-relaxed text-slate-700">{e.desc}</p>
            </div>
          </Card>
        </motion.article>
      ))}
    </div>
  </Section>
);

const Animation = () => null;

const Contact = () => (
  <Section id="contact" eyebrow="" title="Contact Me">
    <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
      <Card className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-4">Kontak Langsung</p>
          <div className="space-y-4 text-sm text-slate-700">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-slate-600"/> {PROFILE.email}</div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-slate-600"/> {PROFILE.phone}</div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-slate-600"/> {PROFILE.location}</div>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-3">Sosial Media</p>
          <div className="flex items-center gap-3 flex-wrap">
            <motion.a 
              className="rounded-xl bg-slate-50 p-3 border border-slate-200 hover:bg-slate-100 transition" 
              href={PROFILE.socials.github} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5 text-slate-800"/>
            </motion.a>
            <motion.a 
              className="rounded-xl bg-slate-50 p-3 border border-slate-200 hover:bg-slate-100 transition" 
              href={PROFILE.socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5 text-slate-800"/>
            </motion.a>
            <motion.a 
              className="rounded-xl bg-slate-50 p-3 border border-slate-200 hover:bg-slate-100 transition" 
              href={PROFILE.socials.instagram} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="h-5 w-5 text-slate-800"/>
            </motion.a>
            <motion.a 
              className="rounded-xl bg-slate-50 p-3 border border-slate-200 hover:bg-slate-100 transition" 
              href={PROFILE.whatsapp} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="WhatsApp"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="h-5 w-5 text-slate-800"/>
            </motion.a>
          </div>
        </div>
      </Card>

      <Card>
        <form onSubmit={(e)=>e.preventDefault()} className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none border border-slate-200 focus:border-slate-400 focus:bg-white transition" placeholder="Nama kamu" />
            <input className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none border border-slate-200 focus:border-slate-400 focus:bg-white transition" placeholder="Email kamu" />
            <textarea rows={5} className="sm:col-span-2 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none border border-slate-200 focus:border-slate-400 focus:bg-white transition" placeholder="Pesan Anda" />
          </div>
          <motion.button 
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition shadow-sm border border-slate-200"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Kirim Pesan
          </motion.button>
        </form>
      </Card>
    </div>
    <p className="mt-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
  </Section>
);

const Achievements = () => (
  <Section id="achievements" eyebrow="" title="My Achievement">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ACHIEVEMENTS.map((a, index) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: [0.25, 0.4, 0.25, 1]
          }}
          whileHover={{
            y: -4,
            transition: { duration: 0.2 }
          }}
        >
          <Card className="space-y-3 h-full">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">{a.year}</p>
            <h3 className="text-lg font-bold text-slate-900 leading-snug">{a.title}</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{a.detail}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default function PortfolioSite() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  React.useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Tools />
      <Achievements />
      <Experience />
      <Contact />
    </div>
  );
}
