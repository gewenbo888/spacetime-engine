"use client";

import { useState } from "react";
import { useLang, T } from "./lang";
import { GEOMETRIES, DIMENSIONS } from "./content";

/* Curved space made visible. Pick flat, spherical or hyperbolic geometry; a grid
   and a triangle redraw to show how curvature changes the most basic facts — the
   sum of a triangle's angles, the fate of parallel lines. Below, the dimension
   ladder from a point to the eleven dimensions string theory asks for. */

const W = 360, H = 260;

function GeoSVG({ mode }: { mode: string }) {
  // a grid that bows according to curvature, plus a geodesic triangle
  const k = mode === "sphere" ? 1 : mode === "saddle" ? -1 : 0;
  const cx = W / 2, cy = H / 2;

  function bow(x: number, y: number): [number, number] {
    if (k === 0) return [x, y];
    const nx = (x - cx) / (W / 2);
    const ny = (y - cy) / (H / 2);
    const r2 = nx * nx + ny * ny;
    const f = 1 + k * 0.22 * (1 - r2); // pinch outward (sphere) / inward (saddle)
    return [cx + (x - cx) * f, cy + (y - cy) * f];
  }

  const lines: string[] = [];
  for (let gx = 30; gx <= W - 30; gx += 33) {
    let d = "";
    for (let gy = 30; gy <= H - 30; gy += 5) {
      const [px, py] = bow(gx, gy);
      d += (gy === 30 ? "M" : "L") + ` ${px.toFixed(1)} ${py.toFixed(1)}`;
    }
    lines.push(d);
  }
  for (let gy = 30; gy <= H - 30; gy += 33) {
    let d = "";
    for (let gx = 30; gx <= W - 30; gx += 5) {
      const [px, py] = bow(gx, gy);
      d += (gx === 30 ? "M" : "L") + ` ${px.toFixed(1)} ${py.toFixed(1)}`;
    }
    lines.push(d);
  }

  // triangle vertices, edges bowed by curvature
  const A: [number, number] = [cx, 56];
  const B: [number, number] = [82, H - 56];
  const Cv: [number, number] = [W - 82, H - 56];
  function edge(p: [number, number], q: [number, number]) {
    const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    const toC = [cx - mx, cy - my];
    const bend = k === 0 ? 0 : -k * 24;
    const ctrlX = mx + (toC[0] / (Math.hypot(toC[0], toC[1]) + 0.01)) * bend;
    const ctrlY = my + (toC[1] / (Math.hypot(toC[0], toC[1]) + 0.01)) * bend;
    return `M ${p[0]} ${p[1]} Q ${ctrlX} ${ctrlY} ${q[0]} ${q[1]}`;
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[440px]">
      {lines.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="rgba(54,230,255,0.16)" strokeWidth={1} />
      ))}
      <path d={edge(A, B)} fill="none" stroke="#ffd277" strokeWidth={2} />
      <path d={edge(B, Cv)} fill="none" stroke="#ffd277" strokeWidth={2} />
      <path d={edge(Cv, A)} fill="none" stroke="#ffd277" strokeWidth={2} />
      {[A, B, Cv].map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3.5} fill="#ffe3a6" />
      ))}
    </svg>
  );
}

export default function GeometryEngine() {
  const { lang } = useLang();
  const [mi, setMi] = useState(0);
  const g = GEOMETRIES[mi];

  return (
    <div className="space-y-12">
      <div className="panel rounded-2xl p-5 md:p-8">
        <div className="flex flex-wrap gap-2">
          {GEOMETRIES.map((x, i) => (
            <button
              key={x.id}
              onClick={() => setMi(i)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.1em] transition ${
                i === mi ? "border-flux-500/60 bg-flux-500/10 text-flux-400" : "border-ink-100/10 text-ink-500 hover:text-flux-400"
              }`}
            >
              <T v={x.name} />
            </button>
          ))}
        </div>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)]">
          <div className="flex justify-center"><GeoSVG mode={g.id} /></div>
          <div>
            <div className="display text-2xl flux-glow"><T v={g.curvature} /></div>
            <dl className="mt-4 space-y-3">
              {[
                { k: { en: "Triangle angles", zh: "三角形内角和" }, v: g.triangle },
                { k: { en: "Parallel lines", zh: "平行线" }, v: g.parallels },
                { k: { en: "If the cosmos is shaped this way", zh: "若宇宙是这般形状" }, v: g.cosmos },
              ].map((row, i) => (
                <div key={i} className="rounded-lg border border-ink-100/10 bg-void-900/50 p-3">
                  <dt className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink-500"><T v={row.k} /></dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-200"><T v={row.v} /></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-400">
          {lang === "zh"
            ? "广义相对论让这道选择成为物理问题，而非数学品味：物质与能量决定了空间在每一点的弯曲方式。宇宙学测量表明，我们的宇宙在大尺度上极其接近平直——这本身就是个需要解释的谜。"
            : "General relativity makes this choice physical rather than a matter of mathematical taste: matter and energy decide how space bends at every point. Cosmological measurements find our universe almost exactly flat on large scales — itself a mystery in need of explanation."}
        </p>
      </div>

      {/* dimension ladder */}
      <div>
        <div className="label-mono mb-4">{lang === "zh" ? "维度的阶梯" : "the ladder of dimensions"}</div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {DIMENSIONS.map((d, i) => (
            <div key={i} className="panel rounded-xl p-4">
              <div className="display text-2xl flux-text">{d.d}</div>
              <div className="mt-1 text-sm text-ink-100"><T v={d.name} /></div>
              <p className="mt-2 text-xs leading-relaxed text-ink-400"><T v={d.note} /></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
