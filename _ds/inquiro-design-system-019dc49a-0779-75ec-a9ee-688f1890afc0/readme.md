# Inquiro Design System

The design system for an **AI-scaffolded collaborative inquiry learning** platform — a classroom product where students form their own understanding, express it, get understood by peers, give and receive structured feedback, revise with a recorded rationale, and build a shared output together. The AI is a **scaffold, not an answer engine**: it asks, checks, and nudges, and it makes the *learning process* (reasoning, evidence use, revision, collaboration) visible to teachers.

"Inquiro" is the design-system name applied to this prototype; the product itself is described in-app as *Collaborative Inquiry Learning* / *AI Writing Learning Platform*. Two energies live in one system:

- **Student side — lively & inviting.** Lime-energy spark, rounded surfaces, an ink hero, a friendly stage flow.
- **Teacher side — futuristic & visualized.** Glassmorphism, blue→teal→gold gradients, progress rings, radar charts, "process insight" over raw chat.

## Sources

This system was reverse-engineered from one attached codebase (read-only, mounted locally):

- **`ai_agent_group/`** — a Next.js 16 / React 19 / TypeScript app (`lucide-react` icons). Key files read:
  - `docs/system_blueprint.md` — the full system design (roles, 10-stage flow, data model, IA). The product spec.
  - `src/app/globals.css` (~11.5k lines) — the source visual language (tokens, `.aiw-*` marketing, `.studio-*` student studios, `.teacher-*` dashboard).
  - `src/app/page.tsx`, `components/layout/AppShell.tsx` — homepage + app shell.
  - `src/components/teacher/TeacherLiveAnalytics.tsx`, `lib/services/dashboard.ts` — teacher dashboard.
  - `src/lib/mock-data.ts` — the realistic "AI Campus Surveillance" inquiry task used throughout the UI kits.

No real logos or brand imagery exist in the source (the only `public/` assets are unrelated knowledge-graph PNGs). The Inquiro mark in `assets/` was created for this system.

---

## CONTENT FUNDAMENTALS

**Voice — the coach asks, it never answers.** Copy is built around *questions and checklists*, never solutions. The product literally states it is "not an AI Tutor, AI Chatbot, AI writing tool or auto-grader." Scaffold prompts read like: *"How does this evidence support your claim?"*, *"Why did you change it?"*, *"Restate before you react."*

**Person.** Student-facing copy is **second person ("you" / "I")** and reflective — field labels are first-person prompts: *"My initial position is…"*, *"What am I still unsure about?"*. Teacher-facing copy is **observational, third-person**: *"Observe what is happening across student dimensions."*

**Tone.** Calm, plain, pedagogical. Short declaratives. It names learning constructs directly — *reasoning, evidence, revision rationale, perspective-taking, evidence episode, contribution link* — without dumbing them down. No hype, no exclamation marks, no marketing fluff.

**Casing.** Sentence case for body and most headings. **Mono UPPERCASE eyebrows** for section labels and data tags (`LIVE LEARNING ANALYTICS`, `LEARNING FLOW`). Stage labels are Title Case. Process terms often stay capitalized as concepts (Evidence Episode, Peer Understanding).

**Bilingual.** The source mixes English UI with Chinese explanatory copy (the blueprint is in Chinese). Keep English as the primary UI language; Chinese is fine for descriptive/teacher context. A `LanguageToggle` exists in the source.

**Numbers & labels.** Concrete and few — `6 of 9 stages`, `78% class pulse`, `2 contributions linked`. Avoid invented stats. Status is a short verb-phrase: *Verified*, *To verify*, *Used in output*, *On track*, *Conditional position reached*.

**Emoji.** None in product UI. (One ✦ glyph marks the AI coach.) Don't introduce emoji.

**Examples (good):**
- *"See the thinking, not just the answer."*
- *"Revise — and record why."*
- *"You marked one uncertainty — keep it visible so peers look for it."*
- *"The group turned a support-vs-oppose disagreement into a conditional governance plan."*

---

## VISUAL FOUNDATIONS

**Two skins, one token set.** Everything derives from `tokens/`. The student and teacher surfaces differ by *treatment*, not by a different palette.

**Color.** Neutral ink (`#12151c`) on a near-white page (`#f7f7fb`). The brand triad is **blue `#2f6fed` (teacher) → teal `#21a985` (the bridge color) → gold `#efad44`**, expressed as the signature `--grad-flow` bar. **Lime `#c9f35b`** is the student-energy accent (spark CTAs, highlights, text selection). Warm accents (coral, red, violet, pink) carry categorical/status meaning. Each of the 9 learning stages has its own accent (`--stage-*`) so the flow is color-coded everywhere it appears.

**Type.** Three families. **Space Grotesk** (display) for headings + big data numerals — gives the futuristic edge. **Inter** (sans) for all UI and body — the real product font. **Space Mono** for eyebrows, data tags, version stamps, and the `.inq-eyebrow` uppercase label motif. The product leans **heavy** (weights 700–900 are common). Scale runs 11→64px; hero numbers are large and tight (`letter-spacing: -0.01em`).

**Backgrounds.** No photography. The student page carries a soft **radial wash** (`--grad-student-wash`, lime+teal in the corners); the teacher console carries an **ambient glass wash** (`--grad-teacher-wash`, three faint blue/teal/gold light leaks) behind blurred panels. Heroes use solid ink (`#12151c`) with a wash overlay. Otherwise flat near-white surfaces — no busy textures.

**Surfaces / cards.** Two card identities:
- **Plain** (everyday): white, `1px` hairline border (`--line`), `--radius-xl` (22px), soft `--shadow-card`.
- **Glass** (teacher/futuristic): translucent white gradient, `--line-soft` border, `backdrop-filter: blur(22px) saturate(1.2)`, a top inner-highlight line, `--shadow-glass`, `--radius-2xl` (28px).
Inner/list cards drop to 16–18px radius. A 4px **left accent rail** color-codes cards by stage.

**Radii.** Product UI (buttons, inputs, badges) stays at **8px**; panels and glass frames use the **18 / 22 / 28px** family; chips/segmented controls are **fully pill**. This split is deliberate — small controls feel crisp, big surfaces feel soft and modern.

**Shadows.** Soft and low-contrast — colored faintly toward slate (`rgba(31,42,68,…)`). `--shadow-card` for resting cards, `--shadow-lift` on hover, `--shadow-glass` (with an inset white top highlight) for glass, `--shadow-hero` for floating product frames. No hard or black drop shadows.

**Borders.** Hairline `1px`. Solid `--line` on plain surfaces; translucent `--line-soft` on glass. Active/selected states tint the border blue (`#d4e2f2` / `rgba(47,111,237,0.35)`).

**Buttons.** Pill **or** 8px rounded. `primary` = ink fill, `accent` = blue fill, `spark` = lime fill (student CTA), `secondary` = white/outline, `ghost` = transparent blue. Default lift on hover; **press = `scale(0.98)`** shrink. Min-height 38px (44–46 for `lg`).

**Hover / press.** Hover lifts `translateY(-2px)` and deepens the shadow, or tints the background to the soft tone (`--blue-soft` etc.) with a blue border. Press shrinks. Transitions are quick — **140–180ms** on `--ease-out` (`cubic-bezier(0.22,1,0.36,1)`). Nav/list rows tint, don't lift.

**Transparency & blur.** Reserved for **chrome and the teacher skin**: sticky headers (`blur(18px)`), glass panels (`blur(22px) saturate(1.2)`), and ambient washes. Product content cards stay opaque. Don't blur reading surfaces.

**Data viz.** Conic-gradient **ProgressRing**, gradient **spark bars**, a **radar/spider chart** (blue→teal fill) for student dimensions, and thin pill **meter bars** filled with `--grad-bridge` or a per-user color. This is the heart of the "futuristic" teacher feel — favor a clear chart over a wall of numbers.

**Motion.** Restrained. Fades/tints and small lifts only; no bounces, no infinite decorative loops. Easing is the standard `--ease-out`.

**Layout rules.** Three-column workspaces are the backbone (rail | center | context). Sticky translucent top bar. Content max-width ~1180–1240px, centered. Generous 16–18px gaps. The 9-stage `StageRail` is the student's spatial anchor.

---

## ICONOGRAPHY

**System: lucide.** The source app uses **`lucide-react`** exclusively (e.g. `Brain`, `MessageSquareText`, `RefreshCw`, `UsersRound`, `Sparkles`, `CheckCircle2`, `GitBranch`, `ShieldCheck`, `ArrowRight`). The UI kits load the matching **lucide UMD** build from CDN and render through `ui_kits/*/icons.js` (a tiny `<Icon name>` wrapper around `lucide.createIcons`). **Use lucide for everything** — match its 2px stroke, outline style. Default size 14–18px in UI, ~22px for feature marks.

- **Stroke icons only** — no filled/duotone icon sets, no emoji as icons.
- **No unicode glyphs as icons**, with one intentional exception: the AI coach's **✦** spark mark and a **✓** check inside the stage chip.
- **No hand-drawn SVG** for product iconography. (The radar chart is data-viz, not an icon, and is the only bespoke SVG.)
- **Brand mark** (`assets/inquiro-mark.svg`, `inquiro-wordmark.svg`) — a 3-node inquiry graph (individual → peer → shared) in the brand gradient on an ink rounded square. Created for this system; swap if a real logo arrives.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point (imports only). Consumers link this.
- `readme.md` — this guide. · `SKILL.md` — Claude Code skill wrapper.

**`tokens/`** — `fonts.css` (Google Fonts CDN), `colors.css`, `typography.css`, `spacing.css` (radii/shadows/motion), `base.css` (element resets + `.inq-eyebrow`).

**`assets/`** — `inquiro-mark.svg`, `inquiro-wordmark.svg`.

**`components/`** (namespace `window.InquiroDesignSystem_019dc4`)
- `core/` — `Button`, `Badge`, `Avatar`, `Card`, `SegmentedControl`, `StatTile`.
- `learning/` — `StageRail` (+ `INQUIRY_STAGES`), `ProgressRing`, `CoachCard`, `EvidenceCard`.

**`ui_kits/`**
- `student/` — interactive student workspace (Task Hub · Studio · Group Space).
- `teacher/` — interactive futuristic teacher console (Dashboard · Group Process).

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

> **Caveat — fonts.** Inter is the real product font; **Space Grotesk** and **Space Mono** were added by this system for character and are loaded from Google Fonts (no binaries bundled). Swap for the brand's real display/mono faces if/when provided.
