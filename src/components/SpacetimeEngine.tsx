"use client";

import { ReactNode } from "react";
import { LangProvider, LangToggle, T, useLang } from "./lang";
import { SECTIONS, PANELS } from "./content";
import SpacetimeField from "./SpacetimeField";
import SpacetimeDial from "./SpacetimeDial";
import HistoryTimeline from "./HistoryTimeline";
import GeometryEngine from "./GeometryEngine";
import TimeEngine from "./TimeEngine";
import GravityWell from "./GravityWell";
import BlackHole from "./BlackHole";
import QuantumFoam from "./QuantumFoam";
import CosmicExpansion from "./CosmicExpansion";
import HolographicMap from "./HolographicMap";
import RealityAnalyst from "./RealityAnalyst";
import SpacetimeRadar from "./SpacetimeRadar";
import RecursiveSpacetimeEngine from "./RecursiveSpacetimeEngine";

function ConceptPanels({ id }: { id: string }) {
  const { lang } = useLang();
  const set = PANELS[id];
  if (!set) return null;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {set.map((c, i) => (
        <div key={i} className="panel rounded-xl p-5">
          <div key={lang} className={`display text-base text-flux-400 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.t[lang]}</div>
          <p key={`d-${lang}`} className={`mt-2 text-sm leading-relaxed text-ink-300 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.d[lang]}</p>
        </div>
      ))}
    </div>
  );
}

const VIS: Record<string, ReactNode> = {
  history: <HistoryTimeline />,
  space: <GeometryEngine />,
  time: <TimeEngine />,
  relativity: <GravityWell />,
  blackholes: <BlackHole />,
  quantum: <QuantumFoam />,
  cosmos: <CosmicExpansion />,
  info: <HolographicMap />,
  sim: <ConceptPanels id="sim" />,
};

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-ink-100/10 bg-void-950/80 px-5 py-3 backdrop-blur md:px-9">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-md border border-flux-500/30 bg-void-800">
          <svg viewBox="0 0 32 32" className="h-5 w-5">
            <ellipse cx="16" cy="16" rx="11" ry="4.4" fill="none" stroke="#36e6ff" strokeWidth="1.4" opacity="0.85" />
            <ellipse cx="16" cy="16" rx="11" ry="4.4" fill="none" stroke="#9b6cff" strokeWidth="1.4" opacity="0.85" transform="rotate(60 16 16)" />
            <ellipse cx="16" cy="16" rx="11" ry="4.4" fill="none" stroke="#ffd277" strokeWidth="1.4" opacity="0.85" transform="rotate(120 16 16)" />
            <circle cx="16" cy="16" r="2.1" fill="#ffe3a6" />
          </svg>
        </div>
        <div className="leading-tight">
          <div className="display text-base text-ink-50">Spacetime Engine</div>
          <div className="zh text-[0.6rem] text-ink-500">时空引擎</div>
        </div>
      </div>
      <nav className="hidden gap-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-500 lg:flex">
        <a href="#dial" className="hover:text-flux-400">Dial</a>
        <a href="#relativity" className="hover:text-flux-400">Gravity</a>
        <a href="#blackholes" className="hover:text-flux-400">Black Holes</a>
        <a href="#quantum" className="hover:text-flux-400">Quantum</a>
        <a href="#analyst" className="hover:text-flux-400">Analyst</a>
        <a href="#future" className="hover:text-flux-400">Future</a>
      </nav>
      <div className="flex items-center gap-3">
        <LangToggle />
        <a href="https://psyverse.fun" className="hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] text-flux-500 hover:text-flux-400 sm:block">← Psyverse</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <SpacetimeField />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-void-950/30 via-transparent to-void-950" />
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 md:px-12">
        <div className="label-mono">Psyverse · the spacetime engine</div>
        <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-ink-500">
          EN · 中文 · space × time × gravity × information × reality
        </div>
        <h1 className="display mt-6 text-5xl leading-[0.94] text-ink-50 md:text-8xl">
          Spacetime <span className="spark-text">Engine</span>
        </h1>
        <h2 className="zh mt-3 text-3xl text-ink-200 md:text-5xl">时空引擎</h2>

        <p className="mt-9 max-w-2xl font-serif text-lg leading-relaxed text-ink-100 md:text-xl">
          <T v={{
            en: "For most of history, space and time were the silent stage on which everything else happened — fixed, absolute, the same for everyone. Then, in stages, that stage came alive: relative, curved, woven from energy, and perhaps from information. This is an atlas of how space and time stopped being a backdrop and became, possibly, the deepest operating system of reality.",
            zh: "在大部分历史中，空间与时间是一切其他事物在其上发生的、沉默的舞台——固定、绝对、对每个人都相同。随后，这舞台一步步活了过来：相对的、弯曲的、由能量、或许还由信息编织而成。这是一张图志，关于空间与时间如何不再只是背景，而成为——也许——现实最深的操作系统。",
          }} />
        </p>

        <div className="mt-10 max-w-2xl panel rounded-lg p-6">
          <div className="label-mono">Central thesis · 核心论点</div>
          <p className="mt-3 font-serif text-xl leading-relaxed text-ink-50 md:text-2xl">
            <T v={{
              en: "Space and time may not merely contain reality. They may themselves be part of its deepest structure.",
              zh: "空间与时间，或许不只是容纳现实。它们本身，或许就是现实最深结构的一部分。",
            }} />
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-500">
          <span>10 systems · 十大系统</span>
          <span>geometry · energy · information · causality · entropy</span>
          <span>relativity → quantum gravity → cosmos</span>
        </div>
      </div>
    </section>
  );
}

function SectionBlock({ s, vis }: { s: (typeof SECTIONS)[number]; vis?: ReactNode }) {
  return (
    <section id={s.id} className="relative border-t border-ink-100/8 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="label-mono"><T v={s.kicker} /></div>
        <div className="mt-3 flex items-baseline gap-4">
          <span className="display text-5xl text-flux-500/30">{s.num}</span>
          <div>
            <h2 className="display text-3xl text-ink-50 md:text-5xl"><T v={s.title} /></h2>
            <h3 className="mt-1 text-base text-flux-400 md:text-lg"><T v={s.sub} /></h3>
          </div>
        </div>
        <div className="mt-5 h-px rule-flux opacity-60" />
        <p className="mt-8 max-w-3xl font-serif text-lg leading-relaxed text-ink-200"><T v={s.body} /></p>
        <div className="mt-5 flex items-start gap-3 max-w-3xl">
          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold-400" />
          <p className="font-serif text-base italic leading-relaxed text-gold-300/90"><T v={s.ask} /></p>
        </div>
        {vis && <div className="mt-12">{vis}</div>}
      </div>
    </section>
  );
}

function Body() {
  const { lang } = useLang();
  const future = SECTIONS.find((s) => s.id === "future")!;
  const rest = SECTIONS.filter((s) => s.id !== "future");

  return (
    <main className="relative bg-void-950 text-ink-100">
      <Header />
      <Hero />

      {/* ticker */}
      <div className="border-y border-ink-100/10 bg-void-900 py-2.5 overflow-hidden">
        <div className="whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.3em] text-flux-400/80">
          {(lang === "zh"
            ? "空间 · 时间 · 引力 · 因果 · 熵 · 光速恒定 · 弯曲时空 · 事件视界 · 量子泡沫 · 暴胀 · 暗能量 · 全息原理 · 时空或许是现实的操作系统 · "
            : "SPACE · TIME · GRAVITY · CAUSALITY · ENTROPY · THE SPEED OF LIGHT IS CONSTANT · CURVED SPACETIME · EVENT HORIZON · QUANTUM FOAM · INFLATION · DARK ENERGY · HOLOGRAPHY · SPACETIME MAY BE THE OS OF REALITY · ").repeat(2)}
        </div>
      </div>

      {/* Feature — the spacetime dial */}
      <section id="dial" className="relative border-t border-ink-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The spacetime dial · 时空旋钮</div>
          <h2 className="display mt-3 text-4xl text-ink-50 md:text-5xl">
            <T v={{ en: "Turn the dial, bend reality", zh: "转动旋钮，弯曲现实" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-ink-200">
            <T v={{
              en: "Three sliders, three pillars of modern physics — each computed live from the real equations. Push a clock toward light-speed, crush a mass toward a black hole, or zoom across sixty orders of magnitude. Watch the supposedly fixed backdrop of space and time give way.",
              zh: "三个滑块，三根现代物理的支柱——每一个都由真实的方程实时计算。把一只钟推向光速，把一团质量压成黑洞，或跨越六十个数量级缩放。看那看似固定的空间与时间之背景，如何让步。",
            }} />
          </p>
          <div className="mt-10"><SpacetimeDial /></div>
        </div>
      </section>

      {/* Sections 01–09 */}
      {rest.map((s) => (
        <SectionBlock key={s.id} s={s} vis={VIS[s.id]} />
      ))}

      {/* The Reality Analyst — AI layer */}
      <section id="analyst" className="relative border-t border-ink-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The reality analyst · 现实分析者</div>
          <h2 className="display mt-3 text-4xl text-ink-50 md:text-5xl">
            <T v={{ en: "Ask the open questions", zh: "追问那些开放的问题" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-ink-200">
            <T v={{
              en: "The hardest questions about spacetime do not have one answer — they have several, depending on which expert you ask. Pose a question, then hear it from a physicist, a cosmologist, a philosopher and an information theorist in turn. Where they agree is solid ground; where they diverge is the live frontier.",
              zh: "关于时空最困难的问题，没有单一的答案——它们有数个，取决于你问的是哪位专家。提出一个问题，再依次听物理学家、宇宙学家、哲学家与信息论者作答。他们一致之处，是坚实的地面；他们分歧之处，便是活跃的前沿。",
            }} />
          </p>
          <div className="mt-10"><RealityAnalyst /></div>
        </div>
      </section>

      {/* Meta-model — the spacetime structure radar */}
      <section id="model" className="relative border-t border-ink-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">Meta-model · 元模型</div>
          <h2 className="display mt-3 text-4xl text-ink-50 md:text-5xl">
            <T v={{ en: "The structure of spacetime", zh: "时空的结构" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-ink-200">
            <T v={{
              en: "If spacetime has an anatomy, it has ingredients. Score each major regime of physics across seven of them — geometry, energy, information, causality, entropy, observation and dimensional relationships — and a distinctive shape appears. Newtonian, relativistic, quantum and holographic physics each trace a very different polygon.",
              zh: "如果时空有一套解剖结构，它便有其成分。把每一个主要的物理区域，在其中七者上打分——几何、能量、信息、因果、熵、观察与维度关系——一个独特的形状便会显现。牛顿式、相对论、量子与全息物理，各自描出截然不同的多边形。",
            }} />
          </p>
          <div className="mt-6 max-w-3xl rounded-lg border border-flux-500/20 bg-void-900/50 p-4 font-mono text-[0.7rem] leading-relaxed text-flux-400/90">
            {lang === "zh"
              ? "时空结构 = 几何 + 能量 + 信息 + 因果 + 熵 + 观察 + 维度关系"
              : "Spacetime Structure = Geometry + Energy + Information + Causality + Entropy + Observation + Dimensional Relationships"}
          </div>
          <div className="mt-12"><SpacetimeRadar /></div>
        </div>
      </section>

      {/* Section 10 — the future spacetime engine */}
      <section id={future.id} className="relative border-t border-ink-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono"><T v={future.kicker} /></div>
          <div className="mt-3 flex items-baseline gap-4">
            <span className="display text-5xl text-flux-500/30">{future.num}</span>
            <div>
              <h2 className="display text-3xl text-ink-50 md:text-5xl"><T v={future.title} /></h2>
              <h3 className="mt-1 text-base text-flux-400 md:text-lg"><T v={future.sub} /></h3>
            </div>
          </div>
          <div className="mt-5 h-px rule-flux opacity-60" />
          <p className="mt-8 max-w-3xl font-serif text-lg leading-relaxed text-ink-200"><T v={future.body} /></p>
          <div className="mt-5 flex items-start gap-3 max-w-3xl">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold-400" />
            <p className="font-serif text-base italic leading-relaxed text-gold-300/90"><T v={future.ask} /></p>
          </div>
          <div className="mt-12"><RecursiveSpacetimeEngine /></div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative border-t border-ink-100/8 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="display text-4xl leading-snug text-ink-50 md:text-6xl">
            <T v={{ en: "Space and time may not contain reality. They may be reality, structuring itself.", zh: "空间与时间，或许并不容纳现实。它们或许就是现实，在结构着自身。" }} />
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-relaxed text-ink-300">
            <T v={{
              en: "Humanity's understanding moved from absolute space and absolute time toward a dynamic spacetime intertwined with energy, information, observation and cosmic structure. Each revolution did not just refine the map — it changed what kind of thing the territory was. Whether geometry is fundamental or emergent, whether time flows or merely seems to, whether reality is made of stuff or of information about stuff — these remain open. That openness is not a gap to be embarrassed by. It is the live edge of the deepest question we know how to ask.",
              zh: "人类的理解，从绝对的空间与绝对的时间，走向一个与能量、信息、观察及宇宙结构交织的动态时空。每一次革命都不只是精修地图——它改变了疆域究竟是何种东西。几何是基本的还是涌现的，时间是真的流动还是仅仅看似如此，现实是由物质构成还是由关于物质的信息构成——这些都仍开放。那份开放，并非一道令人难堪的缺口。它是我们所知如何提出的最深问题的、活生生的边缘。",
            }} />
          </p>
          <div className="mx-auto mt-10 max-w-xl rounded-lg border border-flux-500/25 bg-void-900 p-5">
            <p className="text-xs leading-relaxed text-ink-500">
              <T v={{
                en: "A conceptual, educational resource synthesising relativity, quantum theory, cosmology and information physics. Interpretive, not the last word — every frontier here remains an open scientific and philosophical question, and speculation is marked as such.",
                zh: "一份概念性、教育性的资料，综合了相对论、量子理论、宇宙学与信息物理。它是诠释，而非定论——此处的每一道前沿，都仍是开放的科学与哲学问题，推测之处亦已如实标明。",
              }} />
            </p>
          </div>
          <div className="mx-auto mt-12 h-px w-40 rule-flux" />
          <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-flux-500/70">
            Spacetime Engine · 时空引擎 · Psyverse · 2026
          </p>
        </div>
      </section>

      <footer className="border-t border-ink-100/10 bg-void-950 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="display text-xl text-ink-50">Spacetime Engine</div>
            <div className="zh mt-1 text-sm text-ink-300">时空引擎</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              <T v={{ en: "Space, time, gravity, causality, quantum spacetime, cosmology, information — and the question of whether reality is, at bottom, a dynamic spacetime-information system.", zh: "空间、时间、引力、因果、量子时空、宇宙学、信息——以及那个问题：现实归根结底，是否是一个动态的时空-信息系统。" }} />
            </p>
          </div>
          <div>
            <div className="label-mono">Systems · 系统</div>
            <ul className="mt-4 space-y-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-500">
              {SECTIONS.slice(0, 6).map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="hover:text-flux-400">{s.num} · <T v={s.title} /></a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-mono">Companion archives</div>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-300">
              <li><a href="https://reality-stack.psyverse.fun" className="hover:text-flux-300">Reality Stack · 现实栈</a></li>
              <li><a href="https://beyond-tech.psyverse.fun" className="hover:text-flux-300">Beyond Technology · 技术之外</a></li>
              <li><a href="https://great-convergence.psyverse.fun" className="hover:text-flux-300">The Great Convergence · 大融合</a></li>
              <li className="pt-3"><a href="https://psyverse.fun" className="text-flux-500 hover:text-flux-300">↩ All Psyverse archives</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 h-px max-w-7xl rule-flux" />
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-[0.58rem] uppercase tracking-[0.3em] text-ink-500">
          <div>© 2026 Gewenbo · Psyverse</div>
          <div>EN · 中文 · educational</div>
        </div>
      </footer>
    </main>
  );
}

export default function SpacetimeEngine() {
  return (
    <LangProvider>
      <Body />
    </LangProvider>
  );
}
