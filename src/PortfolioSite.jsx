import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, PlayCircle } from "lucide-react";

/**
 * Stylish Portfolio Website – single-file React component
 * Tech: TailwindCSS, Framer Motion, Lucide Icons (pre-installed in this environment)
 * How to use:
 * - Replace the PROFILE object with your real data.
 * - Replace video sources in the 3D Animation section.
 * - Add/remove tools & experience items as needed.
 */

const PROFILE = {
  name: "Musa Habibulloh Al Faruq",
  role: "Programmer & 3D Artist",
  tagline: "I am a Mobile Dev and also a 3D Artist.",
  email: "musahabibullah3@gmail.com",
  phone: "+62 857-4807-7009",
  location: "Jember, Indonesia",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/musa-habibulloh-al-faruq-370565336/",
    instagram: "https://www.instagram.com/musahabibulloh_/",
  },
};

// Tambahkan percent (0–100) dan logo (path di /public)
// Logo via Simple Icons CDN (SVG). Bisa diwarnai pakai suffix /<hexColor>
const TOOLS = [
  { name: "Blender",        level: "Advanced",     percent: 92, logo: "https://cdn.simpleicons.org/blender/fde047" },
  { name: "After Effects",  level: "Advanced",     percent: 95, logo: "https://cdn1.iconfinder.com/data/icons/smashicons-file-types-yellow/56/39_-Adobe_After_Effects-_Yellow-512.png" },
  { name: "Premiere Pro",   level: "Advanced",     percent: 95, logo: "https://cdn1.iconfinder.com/data/icons/smashicons-file-types-yellow/56/33_-Adobe_Premiere_Pro-_Yellow-512.png" },
  { name: "Cinema 4D",      level: "Intermediate", percent: 70, logo: "https://cdn.simpleicons.org/cinema4d/fde047" },
  { name: "Photoshop",      level: "Intermediate",     percent: 75, logo: "https://pngimg.com/d/photoshop_PNG22.png" },
  { name: "VsCode",    level: "Advanced", percent: 90, logo: "https://img.icons8.com/m_rounded/512/FAB005/visual-studio-code-2019.png" },
  { name: "Unreal Engine",  level: "Beginer", percent: 50, logo: "https://cdn.simpleicons.org/unrealengine/fde047" },
  { name: "Android Studio",          level: "Intermediate", percent: 85, logo: "https://img.icons8.com/androidL/512/FAB005/android-studio--v3.png" },
];


const EXPERIENCE = [
  {
    company: "Competition",
    role: "Finalist Animation Category",
    period: "2024",
    desc:
      "Finalist in the Animation Category at the KMIPN Competition Held by Politeknik Negeri Jakarta 2024.",
    image: "/kmipnn.png",   // <— tambahkan
  },
  {
    company: "Dwp Developer",
    role: "Web Developer and Mobile Developer At DWP Project",
    period: "2025",
    desc:
      "Get a real project from one of the lecturers (Ibu Trismayanti Dwi P, S.Kom, M.Cs) at Jember State Polytechnic to handle DWP parcel payments.",
    image: "/dwp.jpg",
  },
  {
    company: "Tif Exhibition 2025",
    role: "3rd place in the mobile category",
    period: "2025",
    desc:
      "Won 3rd place in the TIF exhibition, a competition held by the TIF study program, Information Technology Department, Jember State Polytechnic.",
    image: "/juara 3.jpg",
  },
];


const VIDEOS = [
  {
    title: "Video Trailer Animasi Finalis KMIPN – Video Trailer Animasi",
    src: "/videos/Trailer ANIMASI_KMIPN VI_NovaForge_Harmony of Age_POLITEKNIK NEGERI JEMBER - Nova Forge Animation (1080p, h264, youtube).mp4",
    note: "WebM format",
  },
  {
    title: "Rigging Master – Alden Karakter Rig Test",
    src: "/videos/kursi roda.mp4",
    note: "MP4 H.264",
  },
  {
    title: "Blocking vs Final –  Comparison Video",
    src: "/videos/blocking.mp4",
    note: "MP4 H.264",
  },
];


const Section = ({ id, title, children, accent = false }) => (
  <section
    id={id}
    className={`scroll-mt-24 relative ${
      accent
        ? "bg-gradient-to-br from-zinc-900 to-zinc-950"
        : "bg-zinc-950"
    }`}
  >
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium text-zinc-300 hover:text-white transition"
  >
    {children}
  </a>
);

const Hero = () => (
  <header className="relative isolate overflow-hidden bg-zinc-950">
    {/* top decorative blob */}
    <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

    {/* navbar */}
    <div className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-extrabold tracking-tight text-white text-lg">
          {PROFILE.name.split(" ")[0]}
          <span className="text-yellow-400">.</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#tools">Tools</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#animation">3D Animation</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>
    </div>

    {/* hero content */}
    <div id="top" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="inline-flex items-center rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
            hi, i’m
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
            {PROFILE.name.toUpperCase()}
          </h1>
          <p className="mt-3 text-lg text-zinc-300">{PROFILE.role}</p>
          <p className="mt-4 max-w-xl text-zinc-400">{PROFILE.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-4 py-2 text-zinc-900 font-semibold shadow-sm hover:brightness-95 transition"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#animation"
              className="inline-flex items-center gap-2 rounded-2xl bg-zinc-800 px-4 py-2 text-white ring-1 ring-white/10 hover:bg-zinc-700 transition"
            >
              <PlayCircle className="h-4 w-4" /> Watch 3D Reels
            </a>
          </div>
        </motion.div>

        {/* profile card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-3 ring-1 ring-white/10 shadow-2xl">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#fde047_0%,#fde047_55%,#18181b_55%,#18181b_100%)] flex items-end justify-end">
              {/* placeholder portrait */}
              <div className="m-4 h-[80%] w-[55%] rounded-2xl bg-[url('/muzza.png')] bg-cover bg-center shadow-xl ring-1 ring-white/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </header>
);

const About = () => (
  <Section id="about" title="About Me" accent>
    <div className="grid gap-10 md:grid-cols-3">
      <p className="md:col-span-2 text-zinc-300 leading-relaxed">
        Saya adalah Mahasiswa D4 Teknik Informatika Politeknik Negeri Jember, dengan minat besar pada teknologi, desain, dan pengembangan kreatif. Fokus utama saya saat ini adalah Web Development dan Mobile Development, 
        dengan pengalaman menggunakan Laravel, Blade, Dart, dan Flutter. 
        Selain itu, saya juga mengeksplorasi dunia desain 3D menggunakan 
        Blender untuk mengasah keterampilan visual dan kreativitas. 
        Saya memiliki semangat belajar yang tinggi, berorientasi pada pengembangan diri, 
        dan terus berusaha menciptakan karya-karya yang bermanfaat serta aplikatif. 
        Kombinasi kemampuan teknis dan kreativitas menjadi modal saya dalam menghadapi tantangan dan 
        berkontribusi di bidang teknologi dan desain..
      </p>
      <div className="rounded-2xl bg-zinc-900/60 p-6 ring-1 ring-white/10">
        <h3 className="text-sm font-semibold text-zinc-200">Quick Facts</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-400">
          <li>⚡ Fast learner, detail‑oriented</li>
          <li>🎯 Strong in lighting & look‑dev</li>
          <li>🧩 Comfortable with cross‑tool pipelines</li>
        </ul>
      </div>
    </div>
  </Section>
);

const LEVEL_TO_PERCENT = { Advanced: 85, Intermediate: 65, Beginner: 40 };

const Tools = () => (
  <Section id="tools" title="Tools I Use">
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {TOOLS.map((t) => {
        // pakai percent dari data, fallback ke mapping level
        const p = typeof t.percent === "number" ? t.percent : (LEVEL_TO_PERCENT[t.level] ?? 60);

        return (
          <motion.div
            key={t.name}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-zinc-900/60 p-5 ring-1 ring-white/10 shadow-lg"
          >
            {/* Header: logo + name + level */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {t.logo ? (
                  <img
                    src={t.logo}
                    alt={t.name}
                    className="h-7 w-7 rounded-md object-contain ring-1 ring-white/10 bg-zinc-800"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-7 w-7 rounded-md ring-1 ring-white/10 bg-zinc-800" />
                )}
                <p className="font-semibold text-white">{t.name}</p>
              </div>
              <span className="text-xs text-yellow-300/90">{t.level}</span>
            </div>

            {/* Progress bar */}
            <div className="mt-3">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full shadow-[0_0_16px_#fde04780]"
                  style={{
                    width: `${p}%`,
                    background: "linear-gradient(90deg,#fde047 0%,#f59e0b 50%,#b45309 100%)",
                  }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-500">
                <span>{p}%</span>
                {/* indikator kecil */}
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 inline-block" />
                  proficiency
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);


const Experience = () => (
  <Section id="experience" title="Experience" accent>
    <div className="space-y-8">
      {EXPERIENCE.map((e) => (
        <motion.article
          key={e.company + e.period}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 shadow overflow-hidden"
        >
          <div className="grid md:grid-cols-[260px_1fr]">
            {/* Thumbnail */}
            <div className="relative h-44 md:h-full">
              {e.image ? (
                <img
                  src={e.image}
                  alt={`${e.company} – ${e.role}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#27272a,#18181b)]" />
              )}
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white font-semibold">{e.role}</h3>
                <span className="text-xs text-zinc-400 shrink-0">{e.period}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{e.company}</p>
              <p className="mt-3 leading-relaxed text-zinc-300">{e.desc}</p>

              {/* Optional: tombol lihat besar */}
              {e.image && (
                <a
                  href={e.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-xs text-zinc-300 hover:text-white underline decoration-zinc-600"
                >
                  Lihat foto lebih besar
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);


const Animation = () => (
  <Section id="animation" title="3D Animation Reels">
    <p className="text-zinc-400">Hasil Render dan Beberapa karya Animasi saya dari Blender tertera dibawah sini.</p>
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {VIDEOS.map((v, i) => (
        <motion.figure
          key={i}
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl bg-zinc-900/60 p-3 ring-1 ring-white/10 shadow-lg"
        >
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
            {v.src ? (
              <video controls className="h-full w-full">
                <source src={v.src} />
              </video>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-zinc-600 text-sm">
                https://www.youtube.com/watch?v=dMU7oxzcwTM
              </div>
            )}
          </div>
          <figcaption className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium text-white">{v.title}</span>
            <span className="text-[11px] text-zinc-500">{v.note}</span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact" accent>
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-zinc-300"><Mail className="h-5 w-5 text-yellow-300"/> {PROFILE.email}</div>
        <div className="flex items-center gap-3 text-zinc-300"><Phone className="h-5 w-5 text-yellow-300"/> {PROFILE.phone}</div>
        <div className="flex items-center gap-3 text-zinc-300"><MapPin className="h-5 w-5 text-yellow-300"/> {PROFILE.location}</div>
        <div className="flex items-center gap-4 pt-2">
          <a className="rounded-xl bg-zinc-900 p-2 ring-1 ring-white/10 hover:bg-zinc-800" href={PROFILE.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5 text-white"/></a>
          <a className="rounded-xl bg-zinc-900 p-2 ring-1 ring-white/10 hover:bg-zinc-800" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-white"/></a>
          <a className="rounded-xl bg-zinc-900 p-2 ring-1 ring-white/10 hover:bg-zinc-800" href={PROFILE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5 text-white"/></a>
        </div>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl bg-zinc-900/60 p-6 ring-1 ring-white/10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input className="rounded-xl bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none ring-1 ring-white/10 focus:ring-yellow-400" placeholder="Your name" />
          <input className="rounded-xl bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none ring-1 ring-white/10 focus:ring-yellow-400" placeholder="Your email" />
          <textarea rows={4} className="sm:col-span-2 rounded-xl bg-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none ring-1 ring-white/10 focus:ring-yellow-400" placeholder="Message" />
        </div>
        <button className="mt-4 inline-flex items-center rounded-2xl bg-yellow-400 px-5 py-2 font-semibold text-zinc-900 hover:brightness-95">Send</button>
        <p className="mt-2 text-xs text-zinc-500">(This is a demo form. Hook it to Formspree/EmailJS or your backend.)</p>
      </form>
    </div>
    <p className="mt-10 text-center text-xs text-zinc-500">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
  </Section>
);

export default function PortfolioSite() {
  React.useEffect(() => {
    // smooth scrolling
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
    <div className="min-h-screen bg-zinc-950 text-white font-[Inter]">
      <Hero />
      <About />
      <Tools />
      <Experience />
      <Animation />
      <Contact />
    </div>
  );
}
