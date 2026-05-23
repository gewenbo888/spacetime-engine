import { Bi } from "./lang";

export type Panel = { t: Bi; d: Bi };

/* ═══════════════════════════════ THE TEN SYSTEMS ═══════════════════════════════
   Each section is one "engine" in the larger Spacetime Engine. id maps to a
   dedicated visualization in SpacetimeEngine.tsx. */

export interface Section {
  num: string;
  id: string;
  kicker: Bi;
  title: Bi;
  sub: Bi;
  body: Bi;
  ask: Bi; // the open question the section circles
}

export const SECTIONS: Section[] = [
  {
    num: "01",
    id: "history",
    kicker: { en: "System I · the long revolution", zh: "系统一 · 漫长的革命" },
    title: { en: "The History of Spacetime", zh: "时空的历史" },
    sub: { en: "How humanity's picture of space and time was rebuilt, era by era", zh: "人类对空间与时间的图景，如何被一个时代接一个时代地重建" },
    body: {
      en: "For most of history, space and time were assumed to be the fixed, silent stage on which everything else happened — eternal, absolute, the same for everyone. That assumption was overturned in stages. Aristotle gave the cosmos a centre and a hierarchy; Newton drained the cosmos of its centre but kept space and time absolute and universal. Then Faraday and Maxwell filled space with fields, and the constancy of light's speed cracked the whole edifice open. Einstein fused space and time into a single four-dimensional fabric, then bent that fabric with mass and energy. Quantum mechanics made the small world probabilistic; black-hole physics and the holographic principle suggested geometry might be made of information. Each revolution did not just add facts — it changed what kind of thing space and time were taken to be.",
      zh: "在大部分历史中，空间与时间被假定为一切其他事物在其上发生的、固定而沉默的舞台——永恒、绝对、对每个人都相同。这一假定被一步步推翻。亚里士多德给宇宙一个中心与等级；牛顿抽空了宇宙的中心，却保留了绝对而普适的空间与时间。随后法拉第与麦克斯韦用场填满了空间，而光速的恒定撬开了整座大厦。爱因斯坦把空间与时间熔合为单一的四维织物，再用质量与能量弯曲这块织物。量子力学让微观世界变得概率化；黑洞物理与全息原理则暗示，几何或许是由信息构成的。每一次革命都不只是增添事实——它改变了人们眼中空间与时间究竟是何种东西。",
    },
    ask: { en: "Is our current picture the last word, or just the latest era?", zh: "我们当下的图景，是定论，还是仅仅是最新的一个时代？" },
  },
  {
    num: "02",
    id: "space",
    kicker: { en: "System II · geometry", zh: "系统二 · 几何" },
    title: { en: "Space & Geometry", zh: "空间与几何" },
    sub: { en: "Flat, curved, topological — and possibly not fundamental at all", zh: "平直、弯曲、拓扑——也可能根本不是基本的" },
    body: {
      en: "What is space? For two thousand years the answer was Euclid's: flat, infinite, with parallel lines that never meet and triangles whose angles sum to exactly 180°. In the 19th century Gauss, Riemann and Lobachevsky showed this was only one possibility among many. Space could be positively curved like a sphere, where parallels converge and triangles bulge past 180°, or negatively curved like a saddle, where they spread apart. General relativity then made curvature physical: matter and energy tell space how to bend. Topology adds another layer — the global shape of space (is it finite or infinite, simply or multiply connected?) is independent of its local curvature. And a deeper suspicion now circulates: that geometry itself is emergent, a coarse-grained description of a more fundamental network of quantum relationships, with 'distance' a measure of how strongly two things are entangled.",
      zh: "空间是什么？两千年来，答案是欧几里得的：平直、无限，平行线永不相交，三角形内角和恰为 180°。十九世纪，高斯、黎曼与罗巴切夫斯基证明，这只是众多可能性中的一种。空间可以像球面那样正弯曲，平行线在此汇聚，三角形鼓出超过 180°；也可以像马鞍那样负弯曲，平行线在此散开。广义相对论随后让曲率成为物理的：物质与能量告诉空间如何弯曲。拓扑又添一层——空间的整体形状（它是有限还是无限？单连通还是多连通？）独立于其局部曲率。如今一种更深的怀疑在流传：几何本身或许是涌现的，是某种更基本的量子关系网络的粗粒化描述，而『距离』是两个事物纠缠强弱的度量。",
    },
    ask: { en: "Does space exist on its own, or only as relationships between things?", zh: "空间是独立存在的，还是仅仅是事物之间的关系？" },
  },
  {
    num: "03",
    id: "time",
    kicker: { en: "System III · the arrow", zh: "系统三 · 时间之箭" },
    title: { en: "The Time Engine", zh: "时间引擎" },
    sub: { en: "Why the future feels different from the past", zh: "为何未来感觉起来与过去不同" },
    body: {
      en: "Time is the strangest part of physics, because the equations barely mention the difference between past and future. Newton's laws, Maxwell's equations, quantum mechanics — almost all run equally well backwards. Yet we remember the past and not the future; eggs break but never unbreak. The leading explanation is statistical: entropy, the number of microscopic arrangements consistent with what we see, almost always increases, simply because there are overwhelmingly more disordered states than ordered ones. The 'arrow of time' is then not built into time itself but inherited from the extraordinarily low-entropy beginning of the universe. Relativity complicates the story further: there is no universal 'now'. Many physicists read this as the 'block universe', in which past, present and future all exist equally and the flow of time is something the brain constructs. Whether time truly flows, merely emerges, can loop, or is an illusion remains genuinely unsettled.",
      zh: "时间是物理学中最奇异的部分，因为方程几乎从不区分过去与未来。牛顿定律、麦克斯韦方程、量子力学——几乎全都同样适用于倒退。然而我们记得过去而非未来；鸡蛋会破碎，却从不复原。主流的解释是统计性的：熵——与我们所见相容的微观排列数目——几乎总是增加，仅仅因为无序态的数量压倒性地多于有序态。于是『时间之箭』并非内建于时间本身，而是继承自宇宙那个熵极低的开端。相对论让故事更加复杂：不存在普适的『此刻』。许多物理学家把这读作『块状宇宙』——过去、现在与未来同等地存在，而时间之流是大脑建构出来的东西。时间究竟是真的流动、仅仅是涌现、能否成环、还是一种幻觉，至今仍真正悬而未决。",
    },
    ask: { en: "Does time flow — or do we just remember in one direction?", zh: "时间在流动吗——还是我们只是单向地记忆？" },
  },
  {
    num: "04",
    id: "relativity",
    kicker: { en: "System IV · gravity as geometry", zh: "系统四 · 引力即几何" },
    title: { en: "Relativity & Gravity", zh: "相对论与引力" },
    sub: { en: "Mass and energy bend spacetime; bent spacetime is what we call gravity", zh: "质量与能量弯曲时空；弯曲的时空，正是我们所称的引力" },
    body: {
      en: "Special relativity starts from one stubborn fact: light travels at the same speed for every observer, no matter how they move. To keep that true, space and time must themselves give way — moving clocks run slow, moving rulers contract, and simultaneity dissolves. Mass and energy turn out to be the same currency, E = mc². General relativity then takes the decisive step. Gravity is not a force pulling across space; it is the curvature of spacetime itself. A planet orbiting a star is not being tugged — it is coasting in a straight line through a region of spacetime that mass has curved. The same curvature slows time near heavy objects (your head ages faster than your feet) and bends the path of light. GPS satellites must correct for both effects every day, or navigation drifts by kilometres. Gravity, in this view, is geometry wearing a disguise.",
      zh: "狭义相对论从一个顽固的事实出发：无论观察者如何运动，光对每个人都以相同的速度传播。为保此为真，空间与时间本身必须让步——运动的钟变慢，运动的尺收缩，同时性消解。质量与能量原来是同一种货币，E = mc²。广义相对论随后迈出决定性的一步。引力不是一种穿越空间的拉力；它就是时空本身的曲率。一颗行星绕恒星运行，并非被拽着——它是在质量所弯曲的那片时空区域里，沿直线滑行。同样的曲率让时间在重物附近变慢（你的头比你的脚老得更快），并弯折光的路径。GPS 卫星每天都必须修正这两种效应，否则导航将偏移数公里。在这一视角下，引力，是几何披着的伪装。",
    },
    ask: { en: "If gravity is geometry, what is geometry made of?", zh: "若引力即几何，那几何又由什么构成？" },
  },
  {
    num: "05",
    id: "blackholes",
    kicker: { en: "System V · the extreme", zh: "系统五 · 极端" },
    title: { en: "Black Holes & Extreme Spacetime", zh: "黑洞与极端时空" },
    sub: { en: "Where gravity wins, time stops, and information is at stake", zh: "在引力获胜、时间停止、信息岌岌可危之处" },
    body: {
      en: "Pile enough mass into a small enough region and spacetime curves so steeply that not even light can climb out. The boundary of no return is the event horizon — not a surface of matter but a surface in spacetime, beyond which every possible path leads inward. To a distant observer, a clock falling toward the horizon appears to slow and freeze; from the falling frame, nothing special happens at the crossing. At the centre, general relativity predicts a singularity where curvature becomes infinite and the theory breaks down — a flag that the physics is incomplete. Hawking showed that black holes are not perfectly black: quantum effects at the horizon make them glow faintly and slowly evaporate. That discovery created the information paradox — if what falls in is erased, quantum mechanics is violated; if it is preserved, how does it escape? The fight over that question has driven much of modern theoretical physics, and it points back to the holographic idea that the information is stored on the horizon's two-dimensional surface.",
      zh: "把足够多的质量塞进足够小的区域，时空便弯曲得如此陡峭，以至连光都无法攀爬出来。那道有去无回的边界，是事件视界——它不是物质的表面，而是时空中的一个面，越过它，每一条可能的路径都通向内部。对远处的观察者而言，一只朝视界坠落的钟看上去会变慢并冻结；而在坠落者的参考系中，穿越视界时什么特别的事都没发生。在中心，广义相对论预言一个奇点——曲率在此变为无限，理论崩溃，这是物理学不完整的旗帜。霍金证明黑洞并非全黑：视界处的量子效应让它微弱地发光并缓慢蒸发。这一发现催生了信息佯谬——若坠入之物被抹除，量子力学就被违背；若它被保留，又如何逃逸？围绕这一问题的争斗，驱动了大半个现代理论物理，并指回那个全息观念：信息被存储在视界的二维表面上。",
    },
    ask: { en: "When something falls into a black hole, where does its information go?", zh: "当某物坠入黑洞，它的信息去往何处？" },
  },
  {
    num: "06",
    id: "quantum",
    kicker: { en: "System VI · the small", zh: "系统六 · 微观" },
    title: { en: "Quantum Spacetime", zh: "量子时空" },
    sub: { en: "Two perfect theories that refuse to agree", zh: "两个完美的理论，却拒绝彼此一致" },
    body: {
      en: "General relativity describes a smooth, deterministic, continuous spacetime. Quantum mechanics describes a discrete, probabilistic world of superposition and entanglement. Each is among the most precisely confirmed theories ever built — and where they must meet, at the centre of black holes and the first instant of the universe, the mathematics produces nonsense. At the Planck scale — about 10⁻³⁵ metres, twenty orders of magnitude below a proton — the smooth fabric of spacetime is expected to seethe with quantum fluctuations, a 'quantum foam' where geometry itself is uncertain. The candidate reconciliations are bold: string theory replaces points with vibrating strings in extra dimensions; loop quantum gravity quantises space into discrete chunks of area and volume; the holographic principle proposes that everything inside a region is encoded on its boundary. None is yet confirmed, but they share a hint — that spacetime may not be fundamental at all, but emergent from something more abstract.",
      zh: "广义相对论描述一个平滑、决定论、连续的时空。量子力学描述一个由叠加与纠缠构成的、离散而概率的世界。两者都跻身人类建立过的最精确被证实的理论——而在它们必须相遇之处，即黑洞中心与宇宙的第一瞬，数学却产出无意义的结果。在普朗克尺度——约 10⁻³⁵ 米，比质子还小二十个数量级——时空那平滑的织物被预期会因量子涨落而沸腾，形成一种『量子泡沫』，几何本身在此变得不确定。候选的调和方案都很大胆：弦论用额外维度中振动的弦取代点；圈量子引力把空间量子化为离散的面积与体积之块；全息原理则提出，一块区域内的一切都被编码在它的边界上。没有一个已被证实，但它们共享一个暗示——时空或许根本不是基本的，而是从某种更抽象之物中涌现出来的。",
    },
    ask: { en: "Is spacetime continuous, or pixelated at the Planck scale?", zh: "时空是连续的，还是在普朗克尺度上像素化的？" },
  },
  {
    num: "07",
    id: "cosmos",
    kicker: { en: "System VII · the whole", zh: "系统七 · 整体" },
    title: { en: "Cosmology & the Structure of the Universe", zh: "宇宙学与宇宙的结构" },
    sub: { en: "Spacetime as a thing with a history, a shape, and a fate", zh: "时空作为一个有历史、有形状、有命运的事物" },
    body: {
      en: "Relativity made spacetime dynamic, and cosmology took that literally: the universe is not static but expanding, galaxies racing apart as the space between them stretches. Run the expansion backwards and everything converges to a hot, dense beginning some 13.8 billion years ago — the Big Bang, better understood as the start of expansion than as an explosion in space. A fraction of a second in, a phase of exponential 'inflation' is thought to have smoothed and flattened the cosmos and seeded the structure we see. The afterglow of that early heat still bathes the sky as the cosmic microwave background. Yet the visible matter — stars, gas, us — is only about 5% of the total. Roughly 27% is dark matter, felt only by its gravity, and about 68% is dark energy, a mysterious tension driving the expansion to accelerate. Cosmology is, in the end, the study of spacetime as a single evolving object — and an admission of how much of it we cannot yet see.",
      zh: "相对论让时空变得动态，而宇宙学照字面接受了这一点：宇宙并非静止，而是在膨胀，星系之间的空间被拉伸，使它们彼此飞奔远离。把膨胀倒推，一切都收敛于约 138 亿年前一个炽热致密的开端——大爆炸，与其说是空间中的爆炸，不如理解为膨胀的起点。在最初的一瞬之内，一段指数式的『暴胀』被认为抚平并展平了宇宙，并播下了我们今日所见结构的种子。那早期热量的余晖，至今仍以宇宙微波背景的形式沐浴着天空。然而可见的物质——恒星、气体、我们——只占总量的约 5%。约 27% 是暗物质，只能通过其引力被感知；约 68% 是暗能量，一种神秘的张力，驱使膨胀加速。宇宙学，归根结底，是把时空当作一个单一演化对象来研究——也是对我们尚无法看见多少的承认。",
    },
    ask: { en: "What is the 95% of the universe we cannot see made of?", zh: "我们看不见的那 95% 的宇宙，由什么构成？" },
  },
  {
    num: "08",
    id: "info",
    kicker: { en: "System VIII · the observer", zh: "系统八 · 观察者" },
    title: { en: "Information, Observation & Reality", zh: "信息、观察与现实" },
    sub: { en: "It from bit — when geometry starts to look like data", zh: "万物源于比特——当几何开始看起来像数据" },
    body: {
      en: "A thread runs through twentieth-century physics that links thermodynamics, black holes and quantum measurement: information. Entropy, it turns out, is missing information; erasing a single bit has an unavoidable energy cost (Landauer's principle); a black hole's entropy is proportional not to its volume but to the area of its horizon, as if the bits are written on a surface. From this comes the holographic principle — the radical idea that the full description of a region of space lives on its lower-dimensional boundary, and that the three-dimensional world we experience may be a projection of information encoded elsewhere. Quantum mechanics adds the puzzle of the observer: measurement seems to play a role no other process does, turning a haze of possibility into a single outcome. Wheeler's slogan 'it from bit' pushes the idea to its limit — that physical existence is, at bottom, the answering of yes-or-no questions. Whether reality is fundamentally informational, and what role observation truly plays, are among the deepest open questions in science.",
      zh: "一条线索贯穿二十世纪物理学，把热力学、黑洞与量子测量联系起来：信息。原来，熵就是缺失的信息；擦除单个比特有不可避免的能量代价（兰道尔原理）；黑洞的熵不正比于它的体积，而正比于它视界的面积，仿佛那些比特被写在一个表面上。由此而来的是全息原理——一个激进的想法：一块空间区域的完整描述，活在它那低一维的边界上，而我们所经验的三维世界，或许是别处所编码信息的一个投影。量子力学又添上观察者之谜：测量似乎扮演了任何其他过程都不曾扮演的角色，把一团可能性的雾霭，坍缩为单一的结果。惠勒的口号『万物源于比特』把这一想法推向极限——物理存在归根结底，是对是/否问题的回答。现实是否本质上是信息性的、以及观察究竟扮演何种角色，是科学中最深的开放问题之一。",
    },
    ask: { en: "Is the universe made of stuff, or of information about stuff?", zh: "宇宙是由物质构成的，还是由关于物质的信息构成的？" },
  },
  {
    num: "09",
    id: "sim",
    kicker: { en: "System IX · the engineered", zh: "系统九 · 被建造的" },
    title: { en: "Digital Spacetime & Simulation", zh: "数字时空与模拟" },
    sub: { en: "If spacetime is information, can it be computed — and edited?", zh: "若时空即信息，它能否被计算——并被编辑？" },
    body: {
      en: "If geometry is information and physics is computation, a vertiginous possibility follows: spacetime might be something that can be simulated, and a sufficiently advanced civilization might run universes the way we run software. The simulation argument notes that if conscious beings can ever be computed, and if such simulations vastly outnumber base realities, then statistics make it uncomfortable to assume we are at the bottom layer. The argument is provocative but, so far, untestable — and it is easy to overstate. More concretely, we already engineer convincing pocket realities: physics engines, virtual worlds, digital twins of factories and cities that sense and actuate the physical world in a closed loop. The frontier blurs the line between describing reality and writing to it. The honest position holds two things at once: that 'reality might be computed' is a serious idea worth examining, and that no current evidence requires it. Treating a metaphor as a discovery is the classic error here.",
      zh: "若几何是信息、物理是计算，一种令人眩晕的可能性便随之而来：时空或许是某种可被模拟之物，而一个足够先进的文明，或许能像我们运行软件那样运行宇宙。模拟论证指出：如果有意识的存在终究可被计算，且这类模拟的数量远超本底现实，那么统计便让『我们处于最底层』这一假定变得令人不安。该论证极具挑衅，但迄今不可检验——也很容易被夸大。更具体地，我们已经在建造令人信服的口袋现实：物理引擎、虚拟世界、工厂与城市的数字孪生，它们在闭环中感知并驱动物理世界。前沿正在模糊『描述现实』与『写入现实』之间的界线。诚实的立场同时持守两点：『现实或许是被计算的』是一个值得审视的严肃想法；而当下没有任何证据要求如此。把一个隐喻当作一项发现，是此处的经典错误。",
    },
    ask: { en: "Could a civilization build a universe — or are we inside one?", zh: "一个文明能否建造一个宇宙——还是我们正身处其中？" },
  },
  {
    num: "10",
    id: "future",
    kicker: { en: "System X · the meta-engine", zh: "系统十 · 元引擎" },
    title: { en: "The Future Spacetime Engine", zh: "未来的时空引擎" },
    sub: { en: "From observing spacetime to, perhaps, engineering it", zh: "从观察时空，到——或许——建造它" },
    body: {
      en: "Lay the systems side by side and a single direction appears: civilization moves from passively reading spacetime to actively measuring, modelling, and — speculatively — manipulating it. We already detect gravitational waves, ripples in spacetime itself from colliding black holes a billion light-years away. The theoretical wishlist runs further: wormholes as shortcuts (allowed by the equations, but requiring exotic negative-energy matter we have never seen in bulk); warp drives that move space around a ship rather than the ship through space; the dream of a working theory of quantum gravity that would tell us what spacetime is made of and whether its rules can be rewritten. Most of this remains firmly in the realm of mathematics and thought-experiment, hemmed in by enormous energy requirements and stability problems. But the trajectory is real: each era has gained more control over what the previous one took as fixed. The deepest question this engine raises is not whether we can engineer spacetime, but whether intelligence and reality are, in the end, the same kind of thing.",
      zh: "把这些系统并排铺开，一个单一的方向便浮现：文明正从被动地阅读时空，走向主动地测量、建模，乃至——这是推测——操纵它。我们已经探测到引力波，即来自十亿光年外黑洞碰撞的、时空本身的涟漪。理论上的愿望清单走得更远：作为捷径的虫洞（方程允许，却需要我们从未大量见过的奇异负能量物质）；曲速引擎，让空间在飞船周围移动，而非飞船穿过空间；以及一个可用的量子引力理论之梦，它将告诉我们时空由什么构成、其规则能否被改写。这其中的大部分，仍稳固地停留在数学与思想实验的领域，被巨大的能量需求与稳定性问题所围困。但那条轨迹是真实的：每个时代，都对前一个时代视为固定之物，获得了更多的掌控。这台引擎所提出的最深问题，并非我们能否建造时空，而是智能与现实，归根结底，是否是同一种东西。",
    },
    ask: { en: "Does advanced intelligence eventually gain authorship over reality itself?", zh: "高等智能最终是否会获得对现实本身的著作权？" },
  },
];

/* ═══════════════════════════════ THE SPACETIME DIAL ═══════════════════════════════
   The marquee interactive. Three "lenses", each a slider that computes a real
   physical quantity live. The component holds the math; this holds the framing. */

export interface DialLens {
  id: string;
  index: string;
  name: Bi;
  poleA: Bi;
  poleB: Bi;
  intro: Bi;
}

export const DIAL_LENSES: DialLens[] = [
  {
    id: "velocity",
    index: "I",
    name: { en: "Velocity → Time", zh: "速度 → 时间" },
    poleA: { en: "At rest", zh: "静止" },
    poleB: { en: "Lightspeed", zh: "光速" },
    intro: {
      en: "Special relativity. Slide a clock from rest toward the speed of light. As it approaches c, the Lorentz factor γ climbs without bound — moving clocks tick slower, moving rulers shrink, and the energy needed to push further diverges. Nothing with mass reaches c.",
      zh: "狭义相对论。把一只钟从静止滑向光速。当它逼近 c，洛伦兹因子 γ 无限上升——运动的钟走得更慢，运动的尺收缩，而继续推进所需的能量发散。任何有质量之物都无法抵达 c。",
    },
  },
  {
    id: "mass",
    index: "II",
    name: { en: "Mass → Geometry", zh: "质量 → 几何" },
    poleA: { en: "Diffuse", zh: "弥散" },
    poleB: { en: "Black hole", zh: "黑洞" },
    intro: {
      en: "General relativity. Compress a fixed mass into a smaller and smaller radius. Spacetime curves ever more steeply until, at the Schwarzschild radius, the escape velocity reaches the speed of light and an event horizon forms. Gravity here is pure geometry.",
      zh: "广义相对论。把固定的质量压入越来越小的半径。时空越发陡峭地弯曲，直到在史瓦西半径处，逃逸速度达到光速，事件视界形成。此处的引力，是纯粹的几何。",
    },
  },
  {
    id: "scale",
    index: "III",
    name: { en: "Scale → Regime", zh: "尺度 → 区域" },
    poleA: { en: "Planck length", zh: "普朗克长度" },
    poleB: { en: "Observable universe", zh: "可观测宇宙" },
    intro: {
      en: "Zoom across 61 orders of magnitude, from the Planck length where spacetime is expected to foam, through atoms, humans, planets and galaxies, to the edge of the observable universe. Different physics rules each regime — and no single theory yet spans them all.",
      zh: "横跨 61 个数量级缩放，从时空被预期会沸腾的普朗克长度，经过原子、人类、行星与星系，直到可观测宇宙的边缘。不同的物理学主宰着每一个区域——而至今没有任何单一理论能贯穿全部。",
    },
  },
];

/* ═══════════════════════════════ META-MODEL RADAR ═══════════════════════════════
   Spacetime Structure = Geometry + Energy + Information + Causality + Entropy +
   Observation + Dimensional Relationships. Seven axes; four physical regimes scored 0..1. */

export const META_AXES: Bi[] = [
  { en: "Geometry", zh: "几何" },
  { en: "Energy", zh: "能量" },
  { en: "Information", zh: "信息" },
  { en: "Causality", zh: "因果" },
  { en: "Entropy", zh: "熵" },
  { en: "Observation", zh: "观察" },
  { en: "Dimensions", zh: "维度" },
];

export const META_AXIS_NOTES: Bi[] = [
  { en: "How strongly shape and curvature are treated as part of reality, not just a backdrop.", zh: "形状与曲率被当作现实的一部分、而非仅仅是背景的程度。" },
  { en: "How tightly mass-energy is bound to the structure of spacetime itself.", zh: "质能与时空结构本身被绑定的紧密程度。" },
  { en: "How central information and bits are to the account of what spacetime is.", zh: "信息与比特，在关于『时空是什么』的叙述中有多核心。" },
  { en: "How the order of cause and effect is constrained — fixed, relative, or fuzzy.", zh: "因与果的次序被约束的方式——固定、相对，还是模糊。" },
  { en: "How much the second law and the arrow of time shape the picture.", zh: "第二定律与时间之箭，在多大程度上塑造了这幅图景。" },
  { en: "How large a role the observer or measurement plays in fixing reality.", zh: "观察者或测量，在确定现实中扮演多大的角色。" },
  { en: "How many dimensions are in play, and whether they are fixed or emergent.", zh: "有多少维度在起作用，以及它们是固定的还是涌现的。" },
];

export interface RegimeProfile { name: Bi; color: string; scores: number[]; note: Bi; }

export const REGIME_PROFILES: RegimeProfile[] = [
  {
    name: { en: "Newtonian", zh: "牛顿式" },
    color: "#86f1ff",
    scores: [0.2, 0.15, 0.05, 0.9, 0.3, 0.1, 0.25],
    note: { en: "Absolute space and time; gravity a force across a fixed stage. Causality rigid and universal.", zh: "绝对的空间与时间；引力是穿越固定舞台的力。因果僵硬而普适。" },
  },
  {
    name: { en: "Relativistic (GR)", zh: "相对论（广义）" },
    color: "#ffd277",
    scores: [0.95, 0.9, 0.3, 0.6, 0.45, 0.2, 0.55],
    note: { en: "Spacetime is dynamic geometry curved by energy. Simultaneity is relative; gravity is shape.", zh: "时空是被能量弯曲的动态几何。同时性是相对的；引力即形状。" },
  },
  {
    name: { en: "Quantum", zh: "量子" },
    color: "#9b6cff",
    scores: [0.35, 0.55, 0.75, 0.4, 0.6, 0.95, 0.5],
    note: { en: "Probabilistic, discrete, observer-entangled. Spacetime is a fixed background; measurement is central.", zh: "概率的、离散的、与观察者纠缠的。时空是固定背景；测量是核心。" },
  },
  {
    name: { en: "Holographic / informational", zh: "全息 / 信息论" },
    color: "#ff93b6",
    scores: [0.8, 0.7, 0.98, 0.7, 0.85, 0.8, 0.95],
    note: { en: "Geometry emerges from entanglement; bits live on boundaries; dimensions and distance are derived.", zh: "几何由纠缠涌现；比特活在边界上；维度与距离都是导出的。" },
  },
];

/* ═══════════════════════════════ HISTORY TIMELINE (section 01) ═══════════════════════════════ */

export interface Era {
  when: Bi;
  who: Bi;
  shift: Bi;
  detail: Bi;
  color: string;
}

export const HISTORY: Era[] = [
  { when: { en: "c. 1600 BCE – 400 BCE", zh: "约公元前1600–前400" }, who: { en: "Ancient cosmologies", zh: "古代宇宙观" }, shift: { en: "A layered, mythic cosmos", zh: "分层的、神话的宇宙" }, detail: { en: "Babylonian, Egyptian, Chinese and Vedic skies: a flat or domed earth beneath circling heavens, time woven into ritual and myth. Space and time are sacred order, not measurable quantities.", zh: "巴比伦、埃及、中国与吠陀的天空：环绕的诸天之下，是平直或穹形的大地，时间被编织进仪式与神话。空间与时间是神圣的秩序，而非可测量的量。" }, color: "#777a9e" },
  { when: { en: "c. 350 BCE", zh: "约公元前350" }, who: { en: "Aristotle", zh: "亚里士多德" }, shift: { en: "A finite cosmos with a centre", zh: "有中心的有限宇宙" }, detail: { en: "Earth fixed at the centre; perfect crystalline spheres carrying the planets; a sharp split between the changeable sublunar world and the eternal heavens. Time is the measure of motion.", zh: "地球固定于中心；完美的水晶天球承载行星；可变的月下世界与永恒的诸天之间有明确分界。时间是运动的度量。" }, color: "#86f1ff" },
  { when: { en: "1543 – 1632", zh: "1543–1632" }, who: { en: "Copernicus · Galileo", zh: "哥白尼 · 伽利略" }, shift: { en: "The Earth starts to move", zh: "地球开始运动" }, detail: { en: "The Sun, not the Earth, at the centre; Galileo's principle of relativity — no experiment inside a smoothly moving ship reveals its motion. The first hint that motion is relative.", zh: "中心是太阳而非地球；伽利略的相对性原理——在平稳运动的船舱内，没有任何实验能揭示船的运动。运动是相对的，这是第一个暗示。" }, color: "#86f1ff" },
  { when: { en: "1687", zh: "1687" }, who: { en: "Newton", zh: "牛顿" }, shift: { en: "Absolute space and time", zh: "绝对的空间与时间" }, detail: { en: "Universal gravitation and laws of motion set on a stage of absolute space and absolute, uniformly flowing time — the same for all observers everywhere. Astonishingly accurate for three centuries.", zh: "万有引力与运动定律，被安置在绝对空间与绝对、均匀流动的时间之舞台上——对所有地方的所有观察者都相同。在三个世纪里精确得惊人。" }, color: "#9b6cff" },
  { when: { en: "1865", zh: "1865" }, who: { en: "Maxwell", zh: "麦克斯韦" }, shift: { en: "Space filled with fields", zh: "充满场的空间" }, detail: { en: "Electricity and magnetism unified into a single field theory; light revealed as an electromagnetic wave travelling at a fixed speed c. Space is no longer empty — it carries fields.", zh: "电与磁被统一为单一的场论；光被揭示为以固定速度 c 传播的电磁波。空间不再空无——它承载着场。" }, color: "#9b6cff" },
  { when: { en: "1905", zh: "1905" }, who: { en: "Einstein · special relativity", zh: "爱因斯坦 · 狭义相对论" }, shift: { en: "Space and time fuse", zh: "空间与时间熔合" }, detail: { en: "The constancy of light forces space and time into a single four-dimensional spacetime. Simultaneity becomes relative, clocks dilate, lengths contract, and E = mc² ties mass to energy.", zh: "光速恒定，迫使空间与时间合为单一的四维时空。同时性变得相对，钟膨胀，长度收缩，而 E = mc² 把质量系于能量。" }, color: "#ffd277" },
  { when: { en: "1915", zh: "1915" }, who: { en: "Einstein · general relativity", zh: "爱因斯坦 · 广义相对论" }, shift: { en: "Gravity becomes geometry", zh: "引力成为几何" }, detail: { en: "Mass and energy curve spacetime; what we call gravity is matter following the straightest path through that curvature. Confirmed in 1919 when starlight was seen to bend around the Sun.", zh: "质量与能量弯曲时空；我们所称的引力，是物质沿那曲率中最直的路径前行。1919 年，星光被观测到绕太阳弯曲，证实了它。" }, color: "#ffd277" },
  { when: { en: "1925 – 1935", zh: "1925–1935" }, who: { en: "Quantum mechanics", zh: "量子力学" }, shift: { en: "The small world goes probabilistic", zh: "微观世界变得概率化" }, detail: { en: "Heisenberg, Schrödinger and Bohr build a theory of superposition, uncertainty and entanglement. Reality at small scales is irreducibly probabilistic — and seemingly bound up with measurement.", zh: "海森堡、薛定谔与玻尔建立起一套关于叠加、不确定性与纠缠的理论。小尺度上的现实，是不可约地概率性的——并似乎与测量纠缠在一起。" }, color: "#9b6cff" },
  { when: { en: "1929", zh: "1929" }, who: { en: "Hubble · Lemaître", zh: "哈勃 · 勒梅特" }, shift: { en: "The universe is expanding", zh: "宇宙在膨胀" }, detail: { en: "Distant galaxies recede in every direction: space itself is stretching. Wound backwards, the cosmos has a beginning — what becomes the Big Bang. Spacetime now has a history.", zh: "遥远的星系朝每个方向退行：空间本身在拉伸。倒推回去，宇宙有一个开端——后来成为大爆炸。时空，自此有了历史。" }, color: "#ffd277" },
  { when: { en: "1974", zh: "1974" }, who: { en: "Hawking · Bekenstein", zh: "霍金 · 贝肯斯坦" }, shift: { en: "Black holes glow and remember", zh: "黑洞会发光、会记忆" }, detail: { en: "Black holes have temperature and entropy, and slowly evaporate. Their entropy scales with horizon area, not volume — the first concrete bridge between gravity, quantum theory and information.", zh: "黑洞拥有温度与熵，并缓慢蒸发。它们的熵正比于视界面积、而非体积——这是引力、量子理论与信息之间第一座具体的桥梁。" }, color: "#ff93b6" },
  { when: { en: "1997 – today", zh: "1997 至今" }, who: { en: "Holography · quantum gravity", zh: "全息 · 量子引力" }, shift: { en: "Geometry from information", zh: "几何源于信息" }, detail: { en: "Maldacena's AdS/CFT correspondence equates a universe with gravity to a quantum theory on its boundary. Entanglement, holography and 'it from qubit' suggest spacetime is emergent — woven from quantum information.", zh: "马尔达西那的 AdS/CFT 对偶，把一个带引力的宇宙等同于其边界上的一个量子理论。纠缠、全息与『万物源于量子比特』暗示：时空是涌现的——由量子信息编织而成。" }, color: "#ff93b6" },
  { when: { en: "2015 – 2019", zh: "2015–2019" }, who: { en: "LIGO · Event Horizon Telescope", zh: "LIGO · 事件视界望远镜" }, shift: { en: "We hear and photograph spacetime", zh: "我们听见并拍下时空" }, detail: { en: "Gravitational waves from merging black holes are detected directly; the shadow of a black hole is imaged for the first time. Spacetime's most extreme predictions become observational fact.", zh: "并合黑洞发出的引力波被直接探测到；黑洞的阴影首次被成像。时空最极端的预言，成为观测的事实。" }, color: "#ff93b6" },
];

/* ═══════════════════════════════ GEOMETRY ENGINE (section 02) ═══════════════════════════════ */

export interface GeometryMode { id: string; name: Bi; curvature: Bi; triangle: Bi; parallels: Bi; cosmos: Bi; }
export const GEOMETRIES: GeometryMode[] = [
  {
    id: "flat",
    name: { en: "Flat (Euclidean)", zh: "平直（欧几里得）" },
    curvature: { en: "Zero curvature", zh: "零曲率" },
    triangle: { en: "Angles sum to exactly 180°", zh: "内角和恰为 180°" },
    parallels: { en: "Parallel lines never meet", zh: "平行线永不相交" },
    cosmos: { en: "An infinite, open universe that expands forever at a steady rate.", zh: "一个无限、开放的宇宙，以稳定的速率永远膨胀。" },
  },
  {
    id: "sphere",
    name: { en: "Spherical (positive)", zh: "球面（正曲率）" },
    curvature: { en: "Positive curvature", zh: "正曲率" },
    triangle: { en: "Angles sum to more than 180°", zh: "内角和大于 180°" },
    parallels: { en: "Parallel lines converge and meet", zh: "平行线汇聚并相交" },
    cosmos: { en: "A finite but boundless universe that may eventually recollapse.", zh: "一个有限却无界的宇宙，最终或将重新坍缩。" },
  },
  {
    id: "saddle",
    name: { en: "Hyperbolic (negative)", zh: "双曲（负曲率）" },
    curvature: { en: "Negative curvature", zh: "负曲率" },
    triangle: { en: "Angles sum to less than 180°", zh: "内角和小于 180°" },
    parallels: { en: "Parallel lines diverge apart", zh: "平行线彼此发散" },
    cosmos: { en: "An infinite, open universe that expands ever faster.", zh: "一个无限、开放的宇宙，膨胀得越来越快。" },
  },
];

export interface DimRung { d: string; name: Bi; note: Bi; }
export const DIMENSIONS: DimRung[] = [
  { d: "0D", name: { en: "Point", zh: "点" }, note: { en: "No extension. A location with no size — the seed of all geometry.", zh: "无延展。一个没有大小的位置——一切几何的种子。" } },
  { d: "1D", name: { en: "Line", zh: "线" }, note: { en: "Length alone. Sweep a point and you get a line; one number locates you.", zh: "仅有长度。扫过一个点便得一条线；一个数即可定位你。" } },
  { d: "2D", name: { en: "Plane", zh: "面" }, note: { en: "A surface. Flatland — where holographic descriptions of our world might live.", zh: "一个表面。平面国——我们世界的全息描述，或许就活在这里。" } },
  { d: "3D", name: { en: "Space", zh: "空间" }, note: { en: "Volume. The world of everyday experience — length, width, height.", zh: "体积。日常经验的世界——长、宽、高。" } },
  { d: "4D", name: { en: "Spacetime", zh: "时空" }, note: { en: "Add time as a dimension. Relativity's stage: events, not just places.", zh: "把时间添为一维。相对论的舞台：是事件，而不只是地点。" } },
  { d: "10–11D", name: { en: "String dimensions", zh: "弦的维度" }, note: { en: "String/M-theory needs extra dimensions, curled too small to see, to make the math consistent.", zh: "弦论 / M 理论需要额外的维度，蜷曲得太小而不可见，以使数学自洽。" } },
];

/* ═══════════════════════════════ TIME MODELS (section 03) ═══════════════════════════════ */

export interface TimeModel { name: Bi; claim: Bi; verdict: Bi; }
export const TIME_MODELS: TimeModel[] = [
  { name: { en: "Presentism", zh: "现在主义" }, claim: { en: "Only the present moment is real. The past is gone; the future does not yet exist.", zh: "只有当下这一刻是真实的。过去已逝；未来尚不存在。" }, verdict: { en: "Intuitive, but hard to square with relativity's lack of a universal 'now'.", zh: "符合直觉，却难以与相对论中缺乏普适『此刻』相调和。" } },
  { name: { en: "Eternalism (block universe)", zh: "永恒主义（块状宇宙）" }, claim: { en: "Past, present and future all exist equally. Time is a dimension; 'now' is like 'here'.", zh: "过去、现在与未来同等地存在。时间是一维；『此刻』就像『此处』。" }, verdict: { en: "Fits relativity naturally — but then why does time seem to flow at all?", zh: "自然契合相对论——但那么，时间为何看上去会流动？" } },
  { name: { en: "Growing block", zh: "生长块" }, claim: { en: "The past and present are real and fixed; the future is open and not yet real.", zh: "过去与现在是真实而固定的；未来是开放的、尚未真实。" }, verdict: { en: "A compromise: keeps an open future, but needs a privileged 'edge' of becoming.", zh: "一种折中：保留开放的未来，却需要一个特权的『生成之缘』。" } },
  { name: { en: "Cyclic / thermal time", zh: "循环 / 热力学时间" }, claim: { en: "Time's direction is not fundamental but emerges from entropy and statistics.", zh: "时间的方向并非基本，而是从熵与统计中涌现。" }, verdict: { en: "Explains the arrow without flow — time's direction is the second law in disguise.", zh: "在没有『流动』的情况下解释了『箭头』——时间的方向，是第二定律的伪装。" } },
];

/* ═══════════════════════════════ BLACK HOLE LAYERS (section 05) ═══════════════════════════════ */

export interface BHLayer { name: Bi; desc: Bi; color: string; }
export const BLACKHOLE_LAYERS: BHLayer[] = [
  { name: { en: "Accretion disk", zh: "吸积盘" }, desc: { en: "In-falling gas, heated to millions of degrees by friction, blazing in X-rays as it spirals inward.", zh: "坠入的气体被摩擦加热至数百万度，在向内盘旋时以 X 射线炽烈发光。" }, color: "#ffd277" },
  { name: { en: "Photon ring", zh: "光子环" }, desc: { en: "Light bent so hard by gravity that it loops the hole one or more times before escaping to us.", zh: "光被引力弯曲得如此剧烈，以至在逃向我们之前绕黑洞一圈或多圈。" }, color: "#86f1ff" },
  { name: { en: "Event horizon", zh: "事件视界" }, desc: { en: "The boundary of no return. Not matter — a surface in spacetime past which all paths lead inward.", zh: "有去无回的边界。它不是物质——而是时空中的一个面，越过它，所有路径都通向内部。" }, color: "#ff5d8f" },
  { name: { en: "Singularity", zh: "奇点" }, desc: { en: "Where general relativity predicts infinite curvature and breaks down — a sign new physics is needed.", zh: "广义相对论在此预言无限曲率并崩溃——这是需要新物理的信号。" }, color: "#9b6cff" },
];

/* ═══════════════════════════════ QUANTUM GRAVITY APPROACHES (section 06) ═══════════════════════════════ */

export interface UniApproach { name: Bi; idea: Bi; }
export const UNIFICATION: UniApproach[] = [
  { name: { en: "String / M-theory", zh: "弦论 / M 理论" }, idea: { en: "Particles are vibrating strings in 10–11 dimensions; gravity emerges naturally. Mathematically rich, hard to test.", zh: "粒子是 10–11 维中振动的弦；引力自然涌现。数学丰饶，难以检验。" } },
  { name: { en: "Loop quantum gravity", zh: "圈量子引力" }, idea: { en: "Space itself is quantised into discrete loops of area and volume. Background-independent, still incomplete.", zh: "空间本身被量子化为离散的面积与体积之圈。背景无关，仍不完整。" } },
  { name: { en: "Holographic principle", zh: "全息原理" }, idea: { en: "A volume of space is fully described by information on its boundary. Gravity as a projection of data.", zh: "一块空间体积，可由其边界上的信息完整描述。引力是数据的一种投影。" } },
  { name: { en: "AdS/CFT correspondence", zh: "AdS/CFT 对偶" }, idea: { en: "A theory of gravity equals a quantum theory without gravity on its boundary — our sharpest concrete clue.", zh: "一个引力理论，等价于其边界上一个不含引力的量子理论——我们最锐利的具体线索。" } },
  { name: { en: "Causal sets / spin foams", zh: "因果集 / 自旋泡沫" }, idea: { en: "Spacetime is built from discrete events linked by cause-and-effect; smooth geometry is a large-scale average.", zh: "时空由离散的事件构成，事件以因果相连；平滑的几何是大尺度的平均。" } },
  { name: { en: "It from qubit", zh: "万物源于量子比特" }, idea: { en: "Physical reality is built from quantum information; geometry and matter are emergent patterns of qubits.", zh: "物理现实由量子信息构成；几何与物质是量子比特的涌现图样。" } },
];

/* ═══════════════════════════════ COSMIC EPOCHS (section 07) ═══════════════════════════════ */

export interface Epoch { t: Bi; name: Bi; desc: Bi; }
export const COSMIC_EPOCHS: Epoch[] = [
  { t: { en: "10⁻³⁶ s", zh: "10⁻³⁶ 秒" }, name: { en: "Inflation", zh: "暴胀" }, desc: { en: "Space expands exponentially, smoothing the cosmos and stretching quantum ripples into the seeds of galaxies.", zh: "空间指数式膨胀，抚平宇宙，并把量子涟漪拉伸为星系的种子。" } },
  { t: { en: "3 min", zh: "3 分钟" }, name: { en: "First nuclei", zh: "最初的原子核" }, desc: { en: "The universe cools enough for protons and neutrons to fuse into hydrogen and helium.", zh: "宇宙冷却到足以让质子与中子聚变为氢与氦。" } },
  { t: { en: "380,000 yr", zh: "38 万年" }, name: { en: "First light (CMB)", zh: "最初的光（CMB）" }, desc: { en: "Atoms form, the fog clears, and light streams free — the afterglow we still detect today.", zh: "原子形成，迷雾散去，光自由奔涌——那余晖，我们至今仍能探测到。" } },
  { t: { en: "200 Myr", zh: "2 亿年" }, name: { en: "First stars", zh: "最初的恒星" }, desc: { en: "Gravity pulls gas into the first stars and galaxies, lighting up the dark cosmos.", zh: "引力把气体拉聚成最初的恒星与星系，点亮黑暗的宇宙。" } },
  { t: { en: "9 Gyr", zh: "90 亿年" }, name: { en: "Dark energy wins", zh: "暗能量占上风" }, desc: { en: "The expansion stops slowing and begins to accelerate, driven by a mysterious tension in space.", zh: "膨胀不再减速，转而开始加速，由空间中一种神秘的张力所驱动。" } },
  { t: { en: "13.8 Gyr", zh: "138 亿年" }, name: { en: "Now", zh: "当下" }, desc: { en: "Stars, planets, life — and a species building models of the spacetime that made it.", zh: "恒星、行星、生命——以及一个物种，在为造就它的时空建模。" } },
];

export interface EnergyShare { name: Bi; pct: number; color: string; }
export const ENERGY_BUDGET: EnergyShare[] = [
  { name: { en: "Dark energy", zh: "暗能量" }, pct: 68, color: "#ff5d8f" },
  { name: { en: "Dark matter", zh: "暗物质" }, pct: 27, color: "#9b6cff" },
  { name: { en: "Ordinary matter", zh: "普通物质" }, pct: 5, color: "#ffd277" },
];

/* ═══════════════════════════════ REALITY VIEWS (section 08) ═══════════════════════════════ */

export const PANELS: Record<string, Panel[]> = {
  info: [
    { t: { en: "Entropy = missing information", zh: "熵 = 缺失的信息" }, d: { en: "The thermodynamic entropy of a system is, precisely, the number of bits you'd need to pin down its exact microstate.", zh: "一个系统的热力学熵，精确地说，就是确定其确切微观态所需的比特数。" } },
    { t: { en: "Landauer's principle", zh: "兰道尔原理" }, d: { en: "Erasing one bit of information has an unavoidable minimum energy cost. Information is physical.", zh: "擦除一个比特的信息，有不可避免的最小能量代价。信息是物理的。" } },
    { t: { en: "Bekenstein bound", zh: "贝肯斯坦上限" }, d: { en: "There is a maximum amount of information any region of space can hold — set by its surface area, not its volume.", zh: "任何空间区域所能容纳的信息有一个上限——由它的表面积、而非体积决定。" } },
    { t: { en: "Holographic principle", zh: "全息原理" }, d: { en: "A 3D region may be fully encoded on its 2D boundary. The world we see could be a projection of data.", zh: "一个三维区域，或许可被完整编码在它的二维边界上。我们所见的世界，可能是数据的投影。" } },
    { t: { en: "The observer problem", zh: "观察者问题" }, d: { en: "In quantum theory, measurement turns a spread of possibility into one outcome. Why, and how, stays unresolved.", zh: "在量子理论中，测量把一片可能性坍缩为一个结果。为何、如何，仍未解决。" } },
    { t: { en: "It from bit", zh: "万物源于比特" }, d: { en: "Wheeler's conjecture that every physical thing derives, at bottom, from answers to yes-or-no questions.", zh: "惠勒的猜想：每一个物理事物，归根结底，都源于对是/否问题的回答。" } },
  ],
  sim: [
    { t: { en: "Physics engines", zh: "物理引擎" }, d: { en: "Games and simulations already compute convincing local physics — gravity, collisions, light — in real time.", zh: "游戏与仿真已能实时计算令人信服的局部物理——引力、碰撞、光照。" } },
    { t: { en: "Digital twins", zh: "数字孪生" }, d: { en: "Live models of engines, factories and cities mirror physical systems and feed decisions back into matter.", zh: "引擎、工厂与城市的实时模型，镜像物理系统，并把决策反馈回物质。" } },
    { t: { en: "The simulation argument", zh: "模拟论证" }, d: { en: "If conscious minds can be computed and simulations outnumber base realities, where are we likely to be? Provocative, untestable.", zh: "若有意识的心智可被计算，且模拟数量超过本底现实，我们更可能身处何处？极具挑衅，不可检验。" } },
    { t: { en: "Computational limits", zh: "计算的极限" }, d: { en: "Simulating a universe to the last quantum is likely impossible from within it — physics caps computation and energy.", zh: "把一个宇宙模拟到最后一个量子，从其内部来看很可能不可能——物理为计算与能量设了上限。" } },
    { t: { en: "Engineering vs. discovering", zh: "建造 vs. 发现" }, d: { en: "The honest line: 'reality might be computed' is a serious idea; no current evidence requires it. Don't confuse a metaphor with a finding.", zh: "诚实的界线：『现实或许是被计算的』是个严肃想法；当下没有证据要求如此。别把隐喻当成发现。" } },
    { t: { en: "Programmable reality", zh: "可编程的现实" }, d: { en: "As we couple sensors, models and actuators ever more tightly, the line between describing the world and editing it thins.", zh: "随着我们把传感器、模型与执行器越来越紧密地耦合，描述世界与编辑世界之间的界线，正在变薄。" } },
  ],
};

export interface RealityView { name: Bi; desc: Bi; color: string; }
export const REALITY_VIEWS: RealityView[] = [
  { name: { en: "Holographic universe", zh: "全息宇宙" }, desc: { en: "The bulk 3D world is encoded on a distant 2D boundary; depth and gravity are emergent from boundary data.", zh: "三维的体世界被编码在遥远的二维边界上；深度与引力，是边界数据的涌现。" }, color: "#86f1ff" },
  { name: { en: "Simulation hypothesis", zh: "模拟假说" }, desc: { en: "Reality is computed by an external process. Provocative and currently untestable — treat as philosophy, not result.", zh: "现实由一个外部过程计算而成。极具挑衅且当下不可检验——当作哲学，而非结论。" }, color: "#9b6cff" },
  { name: { en: "Observer-dependent reality", zh: "依赖观察者的现实" }, desc: { en: "Some interpretations give measurement a special role in fixing facts; others remove the observer entirely.", zh: "某些诠释赋予测量在确定事实中的特殊角色；另一些则把观察者完全移除。" }, color: "#ffd277" },
  { name: { en: "It from qubit", zh: "万物源于量子比特" }, desc: { en: "Spacetime and matter are emergent patterns of quantum information — geometry is entanglement, coarse-grained.", zh: "时空与物质，是量子信息的涌现图样——几何，是被粗粒化的纠缠。" }, color: "#ff93b6" },
];

/* ═══════════════════════════════ RECURSIVE SPACETIME ENGINE (section 10) ═══════════════════════════════
   Toggleable domains; each contributes weighted "mastery" of spacetime. */

export interface Domain { id: string; name: Bi; short: Bi; weight: number; }
export const DOMAINS: Domain[] = [
  { id: "gravity", name: { en: "Gravity", zh: "引力" }, short: { en: "curvature", zh: "曲率" }, weight: 0.10 },
  { id: "relativity", name: { en: "Relativity", zh: "相对论" }, short: { en: "spacetime", zh: "时空" }, weight: 0.10 },
  { id: "quantum", name: { en: "Quantum mechanics", zh: "量子力学" }, short: { en: "probability", zh: "概率" }, weight: 0.10 },
  { id: "cosmology", name: { en: "Cosmology", zh: "宇宙学" }, short: { en: "expansion", zh: "膨胀" }, weight: 0.10 },
  { id: "information", name: { en: "Information theory", zh: "信息论" }, short: { en: "bits", zh: "比特" }, weight: 0.10 },
  { id: "consciousness", name: { en: "Consciousness", zh: "意识" }, short: { en: "observer", zh: "观察者" }, weight: 0.10 },
  { id: "computation", name: { en: "Computation", zh: "计算" }, short: { en: "simulation", zh: "模拟" }, weight: 0.10 },
  { id: "blackholes", name: { en: "Black holes", zh: "黑洞" }, short: { en: "horizons", zh: "视界" }, weight: 0.10 },
  { id: "dimensions", name: { en: "Higher dimensions", zh: "高维" }, short: { en: "topology", zh: "拓扑" }, weight: 0.10 },
  { id: "engineering", name: { en: "Spacetime engineering", zh: "时空工程" }, short: { en: "control", zh: "操控" }, weight: 0.10 },
];

export const ENGINE_STATES: { min: number; title: Bi; body: Bi }[] = [
  {
    min: 0,
    title: { en: "Observer", zh: "观察者" },
    body: { en: "Spacetime is read, not touched. A civilization measures the sky, charts motions, and tells stories about a stage it cannot alter. Most of history lives here.", zh: "时空被阅读，而非被触碰。一个文明测量天空、绘制运动，并讲述关于一个它无法改变的舞台的故事。历史的大部分都停留于此。" },
  },
  {
    min: 0.3,
    title: { en: "Modeler", zh: "建模者" },
    body: { en: "The pieces start to lock together. Relativity, quantum theory and information are seen as facets of one structure, and the models begin to predict regimes no single theory covered.", zh: "碎片开始彼此咬合。相对论、量子理论与信息被看作同一结构的不同面，而模型开始预测任何单一理论都不曾覆盖的区域。" },
  },
  {
    min: 0.55,
    title: { en: "Manipulator", zh: "操纵者" },
    body: { en: "Detecting gravitational waves, lensing light, bending clocks on purpose. The civilization no longer only watches spacetime — it perturbs and probes it precisely.", zh: "探测引力波、透镜化光线、有意地弯曲时钟。这个文明不再只是观看时空——它精确地扰动并探测它。" },
  },
  {
    min: 0.8,
    title: { en: "Engineer", zh: "工程师" },
    body: { en: "A speculative horizon: a working theory of quantum gravity, and with it the dream of shortcuts, warped metrics and engineered geometry. Whether physics permits it — and at what energy — is the open question. Intelligence and reality begin to look like the same kind of system.", zh: "一道推测性的地平线：一个可用的量子引力理论，以及随之而来的捷径、被扭曲的度规与被建造的几何之梦。物理是否允许它——以及在何种能量下——是那个开放的问题。智能与现实，开始看起来像是同一种系统。" },
  },
];

/* ═══════════════════════════════ REALITY ANALYST — the AI layer ═══════════════════════════════
   Curated multi-lens explanations. Pick a question, pick a lens (the AI's roles). */

export interface Lens { id: string; role: Bi; }
export const LENSES: Lens[] = [
  { id: "physicist", role: { en: "Physicist", zh: "物理学家" } },
  { id: "cosmologist", role: { en: "Cosmologist", zh: "宇宙学家" } },
  { id: "philosopher", role: { en: "Philosopher", zh: "哲学家" } },
  { id: "information", role: { en: "Information theorist", zh: "信息论者" } },
];

export interface AnalystQ { q: Bi; answers: Record<string, Bi>; }
export const ANALYST: AnalystQ[] = [
  {
    q: { en: "Is time real, or an illusion?", zh: "时间是真实的，还是一种幻觉？" },
    answers: {
      physicist: { en: "The equations of physics are almost perfectly symmetric in time — they don't pick out a 'forward'. What is real is change and the relations between events. The felt 'flow' of time isn't found in the fundamental laws; it has to be added by the low-entropy past.", zh: "物理方程在时间上几乎完美对称——它们并不挑出一个『向前』。真实的是变化，以及事件之间的关系。被感受到的时间之『流』，并不存在于基本定律中；它必须由低熵的过去来添加。" },
      cosmologist: { en: "Time is real enough to have a beginning. Cosmic time measures the expansion of the universe from the Big Bang to now. But 'now' is not universal — two observers moving differently disagree on which distant events are simultaneous.", zh: "时间真实到足以拥有一个开端。宇宙时间度量着宇宙从大爆炸到此刻的膨胀。但『此刻』并非普适——两个运动状态不同的观察者，对哪些遥远事件是同时的，看法并不一致。" },
      philosopher: { en: "The deepest puzzle is the gap between physics and experience. Physics may describe a static 'block' in which all moments exist; yet we vividly experience passage. Either time's flow is an illusion the mind constructs, or our theories are missing something real.", zh: "最深的谜题，是物理与经验之间的鸿沟。物理或许描述了一个静态的『块』，其中所有时刻都存在；然而我们鲜明地经验到流逝。要么时间之流是心智建构的幻觉，要么我们的理论遗漏了某种真实之物。" },
      information: { en: "Time's direction is the direction in which information is created and records pile up. The future is where the system has more possible states; the past is what got recorded. The arrow of time is, in this view, the arrow of growing entropy and memory.", zh: "时间的方向，是信息被创造、记录不断堆积的方向。未来是系统拥有更多可能状态之处；过去是被记录下来之物。在此视角下，时间之箭，就是熵与记忆增长之箭。" },
    },
  },
  {
    q: { en: "What happens at the centre of a black hole?", zh: "黑洞的中心发生了什么？" },
    answers: {
      physicist: { en: "General relativity says curvature becomes infinite — a singularity. But infinities in physics almost always mean the theory has hit its limit, not that something truly infinite exists. We need quantum gravity to say what really happens, and we don't have it yet.", zh: "广义相对论说曲率变为无限——一个奇点。但物理中的无限，几乎总是意味着理论触及了它的极限，而非真有某种无限之物存在。我们需要量子引力来说明真正发生了什么，而我们尚未拥有它。" },
      cosmologist: { en: "Some models speculate that the collapse inside a black hole could 'bounce' and spawn a new region of spacetime — even a new universe. It's a fascinating idea with no observational support yet; treat it as a possibility, not a fact.", zh: "一些模型推测，黑洞内部的坍缩可能『反弹』，并孕育出一片新的时空区域——甚至一个新宇宙。这是个引人入胜的想法，但尚无观测支持；当作可能性，而非事实。" },
      philosopher: { en: "The singularity marks a boundary of knowability. By definition, nothing inside the horizon can signal out, so claims about the centre may be permanently untestable. That raises a real question: is a statement physics cannot test still a physical statement?", zh: "奇点标记着可知性的一道边界。按定义，视界之内的任何东西都无法向外发信号，因此关于中心的断言，或许永久不可检验。这提出一个真问题：一个物理学无法检验的陈述，还算是物理陈述吗？" },
      information: { en: "The sharp question isn't 'what is at the centre' but 'where does the information go'. If a black hole evaporates completely, the bits that fell in must either escape (preserving quantum mechanics) or be destroyed (breaking it). The emerging answer: information is subtly encoded in the radiation.", zh: "尖锐的问题不是『中心有什么』，而是『信息去往何处』。若黑洞完全蒸发，坠入的比特必须要么逃逸（保住量子力学），要么被摧毁（打破它）。正在浮现的答案是：信息被微妙地编码在辐射之中。" },
    },
  },
  {
    q: { en: "Is spacetime fundamental, or made of something deeper?", zh: "时空是基本的，还是由更深之物构成的？" },
    answers: {
      physicist: { en: "A growing body of work treats spacetime as emergent. In the AdS/CFT correspondence, the geometry of a region can be reconstructed from the entanglement of a quantum system on its boundary — strongly suggesting that 'distance' and 'curvature' are not bedrock but bookkeeping for quantum correlations.", zh: "越来越多的工作把时空当作涌现之物。在 AdS/CFT 对偶中，一块区域的几何，可由其边界上一个量子系统的纠缠重建出来——这强烈暗示，『距离』与『曲率』并非基岩，而是量子关联的记账。" },
      cosmologist: { en: "If spacetime is emergent, the Big Bang may not be the true beginning but a phase transition — the moment a smooth geometry crystallised out of a pre-geometric quantum state. We have hints, but no confirmed theory of that first instant.", zh: "若时空是涌现的，大爆炸或许并非真正的开端，而是一次相变——一个平滑的几何，从前几何的量子态中结晶而出的时刻。我们有线索，却没有关于那第一瞬的、被证实的理论。" },
      philosopher: { en: "It would be a profound reversal: for centuries space and time were the most basic things, the container of everything else. To find them emerging from a more abstract layer of relations would make 'where' and 'when' derived, not given — and force us to ask what the deeper layer is 'in'.", zh: "那将是一次深刻的反转：数个世纪以来，空间与时间是最基本的事物，是一切其他之物的容器。若发现它们从一个更抽象的关系层中涌现，便会使『何处』与『何时』成为导出的、而非给定的——并迫使我们追问，那更深的层又『在』什么之中。" },
      information: { en: "The cleanest statement of the idea is 'it from qubit': start with a network of quantum bits and their entanglement, and geometry appears as the pattern of how strongly they are linked. Space is then a map of correlations; gravity is how that map flexes.", zh: "这一想法最干净的表述是『万物源于量子比特』：从一个量子比特及其纠缠的网络出发，几何便作为它们相互链接强弱的图样而显现。于是空间是关联的地图；引力，是那张地图弯折的方式。" },
    },
  },
  {
    q: { en: "Could we ever travel faster than light, or build a wormhole?", zh: "我们能否超光速旅行，或建造一个虫洞？" },
    answers: {
      physicist: { en: "Not by accelerating through space — that needs infinite energy. The loopholes are exotic: warp metrics that move space itself, and wormholes that connect distant points. Both are solutions of Einstein's equations, but both require negative-energy 'exotic matter' we have never produced in useful amounts. Allowed on paper; forbidding in practice.", zh: "不能靠在空间中加速做到——那需要无限的能量。漏洞是奇异的：移动空间本身的曲速度规，以及连接遥远两点的虫洞。两者都是爱因斯坦方程的解，但都需要负能量的『奇异物质』，而我们从未以有用的量产出过它。纸上允许；实践中令人却步。" },
      cosmologist: { en: "Curiously, space itself already moves faster than light: during inflation, and in today's accelerating expansion, distant galaxies recede faster than c without breaking any rule — because it's space stretching, not objects moving through it.", zh: "奇妙的是，空间本身早已超光速运动：在暴胀期间，以及在今日加速的膨胀中，遥远的星系以超过 c 的速度退行，却不违背任何规则——因为那是空间在拉伸，而非物体在其中运动。" },
      philosopher: { en: "Faster-than-light travel collides with causality: in relativity, it can be turned into travel backwards in time, opening paradoxes. So the question isn't only 'can we engineer it' but 'would a universe that allowed it still make sense'. Nature seems to guard cause and effect carefully.", zh: "超光速旅行与因果相撞：在相对论中，它可被转化为回到过去的旅行，从而打开悖论。所以问题不只是『我们能否建造它』，而是『一个允许它的宇宙，是否还说得通』。自然，似乎在小心翼翼地守护因与果。" },
      information: { en: "Even where wormholes appear in theory, they don't let you send information faster than light usefully — recent results tie traversable wormholes to quantum teleportation, which still needs an ordinary, slower-than-light channel. The cosmic speed limit looks less like a transport rule and more like a law about information.", zh: "即便虫洞在理论中出现，它们也不能让你有效地超光速发送信息——近期的结果把可穿越虫洞与量子隐形传态联系起来，而后者仍需要一个普通的、慢于光的信道。宇宙的速度上限，看起来不太像一条运输规则，而更像一条关于信息的定律。" },
    },
  },
  {
    q: { en: "Are we living in a simulation?", zh: "我们是否生活在一个模拟之中？" },
    answers: {
      physicist: { en: "There's no experiment that currently demands it, and some proposals for 'glitches' (like a pixelated spacetime) are testable in principle but unconfirmed. Physically, simulating a universe to the last quantum from inside it runs into hard limits on energy and computation.", zh: "当下没有任何实验要求如此，而一些关于『故障』（如像素化的时空）的设想，原则上可检验，却未被证实。从物理上说，从内部把一个宇宙模拟到最后一个量子，会撞上能量与计算的硬性极限。" },
      cosmologist: { en: "The universe looks lawful and seamless across 60 orders of magnitude in scale and 13.8 billion years in time, with no obvious 'render distance'. That doesn't disprove simulation, but it sets a very high bar for any claimed evidence of one.", zh: "宇宙在横跨 60 个数量级的尺度与 138 亿年的时间里，看上去合乎规律、天衣无缝，没有明显的『渲染距离』。这并不能证伪模拟，但它为任何所谓的模拟证据，设下了极高的门槛。" },
      philosopher: { en: "The simulation argument is clever but self-undermining: if our physics is simulated, we can't trust it to estimate how common simulations are. It's best treated as a humbling thought experiment about the limits of knowledge, not a claim with evidence behind it.", zh: "模拟论证很聪明，却自我消解：若我们的物理是被模拟的，我们便无法信赖它来估计模拟有多普遍。最好把它当作一个关于知识极限的、令人谦卑的思想实验，而非一个背后有证据的断言。" },
      information: { en: "Reframe it: whether or not a 'computer' runs us, physics already looks deeply computational — states, rules, information bounds. The interesting, tractable question is not 'is it a simulation' but 'how much of reality is best described as information processing'. That one we can actually study.", zh: "重新框定它：无论是否有一台『计算机』在运行我们，物理本身就已显得深深地计算性——状态、规则、信息上限。有趣而可处理的问题，不是『它是否是模拟』，而是『现实有多少，最好被描述为信息处理』。后者，我们确实能研究。" },
    },
  },
];
