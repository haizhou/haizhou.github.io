/* @ds-bundle: {"format":3,"namespace":"InquiroDesignSystem_019dc4","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"CoachCard","sourcePath":"components/learning/CoachCard.jsx"},{"name":"EvidenceCard","sourcePath":"components/learning/EvidenceCard.jsx"},{"name":"ProgressRing","sourcePath":"components/learning/ProgressRing.jsx"},{"name":"INQUIRY_STAGES","sourcePath":"components/learning/StageRail.jsx"},{"name":"StageRail","sourcePath":"components/learning/StageRail.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"ac04152a6ade","components/core/Badge.jsx":"303c1b61c0e2","components/core/Button.jsx":"4adaad29db09","components/core/Card.jsx":"c3035a1dbbb6","components/core/SegmentedControl.jsx":"07cca2e9d32c","components/core/StatTile.jsx":"1bce48cd7d35","components/learning/CoachCard.jsx":"453a79bc0d73","components/learning/EvidenceCard.jsx":"a8cdab2f6374","components/learning/ProgressRing.jsx":"493771455c27","components/learning/StageRail.jsx":"233c6ba36651","ui_kits/student/StudentApp.jsx":"ac3aef76683c","ui_kits/student/StudentGroup.jsx":"96b20795679e","ui_kits/student/StudentHome.jsx":"66bebefdbc15","ui_kits/student/StudentStudio.jsx":"32a4dfe48b9c","ui_kits/student/data.js":"06b7e6a09935","ui_kits/student/icons.js":"c52b10e76591","ui_kits/teacher/RadarChart.jsx":"fb250ef30bcc","ui_kits/teacher/TeacherApp.jsx":"9e835713ab72","ui_kits/teacher/TeacherDashboard.jsx":"2532b706d546","ui_kits/teacher/TeacherGroups.jsx":"c561a7c34c3a","ui_kits/teacher/data.js":"06b7e6a09935","ui_kits/teacher/icons.js":"c52b10e76591"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InquiroDesignSystem_019dc4 = window.InquiroDesignSystem_019dc4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inquiro Avatar — initials chip with a per-user color. */
function Avatar({
  name = "?",
  color = "var(--blue)",
  size = 34,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name,
    style: {
      display: "inline-grid",
      placeItems: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-heavy)",
      fontSize: Math.round(size * 0.4),
      flexShrink: 0,
      boxShadow: "0 4px 10px rgba(18,21,28,0.14)",
      ...style
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: "#f0f0f3",
    fg: "var(--ink-700)"
  },
  blue: {
    bg: "var(--blue-soft)",
    fg: "var(--blue-700)"
  },
  teal: {
    bg: "var(--teal-soft)",
    fg: "var(--teal-700)"
  },
  lime: {
    bg: "var(--lime-soft)",
    fg: "var(--lime-ink)"
  },
  gold: {
    bg: "var(--gold-soft)",
    fg: "var(--gold-ink)"
  },
  coral: {
    bg: "var(--coral-soft)",
    fg: "#b2432a"
  },
  red: {
    bg: "var(--red-soft)",
    fg: "var(--red-ink)"
  },
  violet: {
    bg: "var(--violet-soft)",
    fg: "#5a59a8"
  },
  pink: {
    bg: "var(--pink-soft)",
    fg: "#a93b86"
  }
};

/** Inquiro Badge — small status/category pill. Set `dot` for a leading status dot. */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  icon = null,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.fg,
      display: "block"
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inquiro Button — the brand's primary action control.
 * Pill-radius is reserved for marketing/hero; product UI uses --radius-xs.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  shape = "rounded",
  icon = null,
  iconRight = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      minHeight: 32,
      padding: "0 12px",
      fontSize: "var(--text-xs)",
      gap: 6
    },
    md: {
      minHeight: 38,
      padding: "0 14px",
      fontSize: "var(--text-sm)",
      gap: 8
    },
    lg: {
      minHeight: 46,
      padding: "0 20px",
      fontSize: "var(--text-base)",
      gap: 9
    }
  };
  const variants = {
    primary: {
      background: "var(--ink-900)",
      color: "#fff",
      border: "1px solid var(--ink-900)",
      boxShadow: "var(--shadow-btn)"
    },
    accent: {
      background: "var(--blue)",
      color: "#fff",
      border: "1px solid var(--blue)",
      boxShadow: "0 10px 22px rgba(47,111,237,0.22)"
    },
    spark: {
      background: "var(--lime)",
      color: "var(--lime-ink)",
      border: "1px solid var(--lime-600)",
      boxShadow: "0 10px 22px rgba(163,209,56,0.28)"
    },
    secondary: {
      background: "#fff",
      color: "var(--ink-900)",
      border: "1px solid var(--line)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--blue)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes[size].gap,
      minHeight: sizes[size].minHeight,
      padding: sizes[size].padding,
      borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-xs)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-heavy)",
      fontSize: sizes[size].fontSize,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)",
      ...variants[variant],
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "var(--press-scale)"),
    onMouseUp: e => !disabled && (e.currentTarget.style.transform = ""),
    onMouseLeave: e => e.currentTarget.style.transform = ""
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inquiro Card — the core surface. `glass` is the futuristic teacher treatment
 * (blur + layered highlight); `plain` is the everyday product card.
 */
function Card({
  children,
  variant = "plain",
  radius = "xl",
  accent = null,
  padding = 18,
  style = {},
  ...rest
}) {
  const radii = {
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)"
  };
  const base = {
    position: "relative",
    borderRadius: radii[radius] || radii.xl,
    padding,
    overflow: "hidden"
  };
  const variants = {
    plain: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      boxShadow: "var(--shadow-card)"
    },
    glass: {
      border: "1px solid var(--border-glass)",
      background: "linear-gradient(180deg, rgba(255,255,255,0.94), rgba(250,251,253,0.78)), rgba(255,255,255,0.86)",
      boxShadow: "var(--shadow-glass)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)"
    },
    soft: {
      background: "var(--surface-inset)",
      border: "1px solid var(--border-card)",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: accent
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inquiro SegmentedControl — pill toggle group (teacher dashboard dimension switcher). */
function SegmentedControl({
  options = [],
  value,
  onChange = () => {},
  style = {},
  ...rest
}) {
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 5,
      border: "1px solid var(--line-soft)",
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,0.72)",
      boxShadow: "0 12px 26px rgba(31,42,68,0.045)",
      ...style
    }
  }, rest), opts.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange(o.value),
      style: {
        minHeight: 34,
        border: 0,
        borderRadius: "var(--radius-pill)",
        padding: "0 13px",
        background: active ? "var(--ink-800)" : "transparent",
        color: active ? "#fff" : "var(--ink-500)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-bold)",
        cursor: "pointer",
        boxShadow: active ? "0 10px 20px rgba(21,24,33,0.14)" : "none",
        transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)"
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inquiro StatTile — big-number metric tile (dashboard / hero stats). */
function StatTile({
  value,
  label,
  sub = null,
  accent = "var(--ink-900)",
  display = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: 5,
      minHeight: 92,
      padding: 18,
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--line-soft)",
      background: "rgba(255,255,255,0.7)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: display ? "var(--font-display)" : "var(--font-sans)",
      fontSize: "var(--text-4xl)",
      lineHeight: 1,
      color: accent,
      letterSpacing: "var(--tracking-tight)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)"
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-semibold)"
    }
  }, sub));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/learning/CoachCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inquiro CoachCard — the AI-scaffold callout. The AI never writes answers;
 * it asks, checks, nudges. This is its consistent on-screen voice.
 */
function CoachCard({
  title = "Inquiry Coach",
  message,
  nudge = null,
  chips = [],
  onChip = () => {},
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      background: "#fbfcff",
      border: "1px solid #cdddf2",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-tight)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: "0 auto 0 0",
      width: 4,
      background: "var(--grad-bridge)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "13px 16px",
      borderBottom: "1px solid #e3edf8"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 26,
      height: 26,
      borderRadius: 8,
      background: "var(--grad-bridge)",
      color: "#fff",
      fontSize: 13
    },
    "aria-hidden": "true"
  }, "\u2726"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-heavy)",
      fontSize: 14,
      color: "var(--ink-800)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--blue)"
    }
  }, "Scaffold")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      padding: 14
    }
  }, message && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xs)",
      background: "var(--blue-soft)",
      border: "1px solid #c7d9ee",
      color: "var(--blue-700)",
      padding: 12,
      lineHeight: 1.55,
      fontSize: 13.5
    }
  }, message), nudge && /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "3px solid var(--gold)",
      background: "var(--gold-soft)",
      borderRadius: "var(--radius-xs)",
      padding: "10px 12px",
      color: "var(--gold-ink)",
      lineHeight: 1.5,
      fontSize: 13
    }
  }, nudge), chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    type: "button",
    onClick: () => onChip(c),
    style: {
      border: "1px solid #c7d9ee",
      background: "#fff",
      color: "var(--blue)",
      borderRadius: "var(--radius-pill)",
      padding: "7px 11px",
      fontSize: 12,
      fontWeight: "var(--weight-bold)",
      cursor: "pointer"
    }
  }, c)))));
}
Object.assign(__ds_scope, { CoachCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/CoachCard.jsx", error: String((e && e.message) || e) }); }

// components/learning/EvidenceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  PENDING: {
    tone: "gold",
    label: "To verify"
  },
  VERIFIED: {
    tone: "teal",
    label: "Verified"
  },
  DISPUTED: {
    tone: "coral",
    label: "Disputed"
  },
  USED: {
    tone: "blue",
    label: "Used in output"
  }
};

/**
 * Inquiro EvidenceCard — a shared-evidence record in the group workspace.
 * Carries status, the claim it supports/challenges, and who added it.
 */
function EvidenceCard({
  title,
  claim,
  status = "PENDING",
  owner,
  ownerColor = "var(--blue)",
  active = false,
  style = {},
  ...rest
}) {
  const s = STATUS[status] || STATUS.PENDING;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid " + (active ? "#8db6e2" : "#d5e0ea"),
      borderRadius: "var(--radius-lg)",
      background: active ? "#f1f6ff" : "rgba(255,255,255,0.9)",
      padding: 13,
      display: "grid",
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-heavy)",
      fontSize: 13.5,
      color: "var(--ink-800)"
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: s.tone,
    dot: true
  }, s.label)), claim && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      fontSize: 12.5,
      lineHeight: 1.5
    }
  }, claim), owner && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      color: "var(--text-faint)",
      fontSize: 11.5,
      fontWeight: "var(--weight-semibold)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: owner,
    color: ownerColor,
    size: 20
  }), "Added by ", owner));
}
Object.assign(__ds_scope, { EvidenceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/EvidenceCard.jsx", error: String((e && e.message) || e) }); }

// components/learning/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inquiro ProgressRing — conic-gradient circular progress.
 * The futuristic teacher-dashboard completion indicator.
 */
function ProgressRing({
  value = 0,
  size = 76,
  thickness = 9,
  label = null,
  gradient = true,
  color = "var(--blue)",
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = gradient ? `conic-gradient(var(--blue) 0deg, var(--teal) ${pct * 3.6}deg, rgba(226,231,240,0.95) 0)` : `conic-gradient(${color} ${pct * 3.6}deg, rgba(226,231,240,0.95) 0)`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: size,
      height: size,
      borderRadius: "50%",
      background: fill,
      display: "grid",
      placeItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: thickness,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "inset 0 1px 3px rgba(31,42,68,0.06)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: Math.round(size * 0.26),
      color: "var(--ink-800)",
      lineHeight: 1
    }
  }, label != null ? label : `${Math.round(pct)}%`)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/learning/StageRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Default 10-stage inquiry flow with per-stage accent colors. */
const INQUIRY_STAGES = [{
  id: "materials",
  index: "01",
  title: "Materials",
  desc: "Read the task sources",
  color: "var(--stage-materials)"
}, {
  id: "inquiry",
  index: "02",
  title: "Pre-Inquiry",
  desc: "Form your initial position",
  color: "var(--stage-inquiry)"
}, {
  id: "artifact",
  index: "03",
  title: "Artifact",
  desc: "Express your thinking",
  color: "var(--stage-artifact)"
}, {
  id: "check",
  index: "04",
  title: "Comprehensibility",
  desc: "Can peers understand it?",
  color: "var(--stage-check)"
}, {
  id: "understanding",
  index: "05",
  title: "Peer Understanding",
  desc: "Restate before reacting",
  color: "var(--stage-understanding)"
}, {
  id: "feedback",
  index: "06",
  title: "Feedback",
  desc: "Structured, not comments",
  color: "var(--stage-feedback)"
}, {
  id: "revision",
  index: "07",
  title: "Revision",
  desc: "Change, and say why",
  color: "var(--stage-revision)"
}, {
  id: "group",
  index: "08",
  title: "Group Inquiry",
  desc: "Build together",
  color: "var(--stage-group)"
}, {
  id: "reflection",
  index: "09",
  title: "Reflection",
  desc: "What changed in you",
  color: "var(--stage-reflection)"
}];

/**
 * Inquiro StageRail — the signature vertical navigator for the learning flow.
 * Each item shows an index chip (done = check, active = gradient) + title + desc.
 */
function StageRail({
  stages = INQUIRY_STAGES,
  activeId,
  doneIds = [],
  onSelect = () => {},
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: "grid",
      gap: 6,
      ...style
    }
  }, rest), stages.map(s => {
    const active = s.id === activeId;
    const done = doneIds.includes(s.id);
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      type: "button",
      onClick: () => onSelect(s.id),
      style: {
        display: "grid",
        gridTemplateColumns: "28px minmax(0,1fr)",
        gap: 9,
        alignItems: "start",
        textAlign: "left",
        padding: "9px 10px",
        borderRadius: "var(--radius-sm)",
        border: "1px solid " + (active ? "#d4e2f2" : "transparent"),
        background: active ? "#f1f6ff" : "transparent",
        cursor: "pointer",
        transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        placeItems: "center",
        width: 26,
        height: 26,
        borderRadius: 9,
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 11,
        border: "1px solid var(--line)",
        background: done ? "var(--teal-soft)" : active ? "var(--grad-bridge)" : "linear-gradient(180deg,#fff,#f7f9fc)",
        color: done ? "var(--teal-700)" : active ? "#fff" : "var(--ink-500)",
        borderColor: active ? "var(--blue)" : done ? "#b9d8cb" : "var(--line)"
      }
    }, done ? "✓" : s.index), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--weight-heavy)",
        fontSize: 12.5,
        color: "var(--ink-800)"
      }
    }, s.title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        marginTop: 2,
        color: "var(--text-muted)",
        fontSize: 11,
        lineHeight: 1.45
      }
    }, s.desc)));
  }));
}
Object.assign(__ds_scope, { INQUIRY_STAGES, StageRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/learning/StageRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student/StudentApp.jsx
try { (() => {
// Student app shell — header + mode switcher. Exports window.StudentApp
(function () {
  const {
    Avatar,
    SegmentedControl
  } = window.InquiroDesignSystem_019dc4;
  const Icon = window.Icon;
  window.StudentApp = function StudentApp() {
    const D = window.INQ;
    const [mode, setMode] = React.useState("Task Hub");
    const [stage, setStage] = React.useState("revision");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        background: "var(--bg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "var(--grad-student-wash)",
        pointerEvents: "none",
        zIndex: 0
      }
    }), /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "14px 28px",
        background: "rgba(255,255,255,0.78)",
        borderBottom: "1px solid var(--line)",
        backdropFilter: "var(--blur-bar)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/inquiro-mark.svg",
      alt: "Inquiro",
      style: {
        width: 38,
        height: 38
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 15,
        color: "var(--ink-900)"
      }
    }, "Inquiro"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)",
        fontWeight: 600
      }
    }, "Spring 2026 \xB7 Alpha Group"))), /*#__PURE__*/React.createElement(SegmentedControl, {
      options: ["Task Hub", "Studio", "Group Space"],
      value: mode,
      onChange: setMode
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 11px",
        borderRadius: "var(--radius-pill)",
        background: "var(--lime-soft)",
        color: "var(--lime-ink)",
        fontSize: 12,
        fontWeight: 800
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "flame",
      size: 14,
      color: "#3f6212"
    }), " 6/9"), /*#__PURE__*/React.createElement(Avatar, {
      name: "Alex Rivera",
      color: "#22c55e",
      size: 34
    }))), /*#__PURE__*/React.createElement("main", {
      style: {
        position: "relative",
        zIndex: 1,
        maxWidth: 1180,
        margin: "0 auto",
        padding: "26px 28px 48px"
      }
    }, mode === "Task Hub" && /*#__PURE__*/React.createElement(window.StudentHome, {
      onOpenStudio: () => setMode("Studio"),
      onOpenGroup: () => setMode("Group Space")
    }), mode === "Studio" && /*#__PURE__*/React.createElement(window.StudentStudio, {
      stage: stage,
      setStage: setStage
    }), mode === "Group Space" && /*#__PURE__*/React.createElement(window.StudentGroup, null)));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/StudentApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student/StudentGroup.jsx
try { (() => {
// Student — Group Space. Exports window.StudentGroup
(function () {
  const {
    Badge,
    Card,
    Avatar,
    Button,
    EvidenceCard,
    CoachCard
  } = window.InquiroDesignSystem_019dc4;
  const Icon = window.Icon;
  const MOVE_TONE = {
    Challenge: "coral",
    Evidence: "teal",
    Connect: "violet"
  };
  window.StudentGroup = function StudentGroup() {
    const D = window.INQ;
    const [active, setActive] = React.useState("u-a");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "240px minmax(0,1fr) 320px",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "xl",
      padding: 14
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Members & positions"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 9,
        marginTop: 12
      }
    }, D.students.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setActive(s.id),
      style: {
        textAlign: "left",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 9,
        padding: 10,
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        border: "1px solid " + (active === s.id ? "#8db6e2" : "var(--line)"),
        background: active === s.id ? "#f1f6ff" : "#fff"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: s.name,
      color: s.color,
      size: 28
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: "var(--ink-800)"
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-muted)",
        lineHeight: 1.4
      }
    }, s.position)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 18px",
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow",
      style: {
        color: "var(--stage-group)"
      }
    }, "Shared output \xB7 Draft"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "4px 0 0",
        fontSize: 18
      }
    }, "Governance Recommendation")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "git-branch",
        size: 14
      })
    }, "Contributions")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        lineHeight: 1.65,
        color: "var(--ink-700)",
        fontSize: 14,
        whiteSpace: "pre-line"
      }
    }, D.sharedDoc.replace(/## /g, ""))), /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 18
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Discussion \xB7 tagged moves"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12,
        marginTop: 12
      }
    }, D.discussion.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: m.from,
      color: m.color,
      size: 30
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: 12.5,
        color: "var(--ink-800)"
      }
    }, m.from), /*#__PURE__*/React.createElement(Badge, {
      tone: MOVE_TONE[m.move]
    }, m.move)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        lineHeight: 1.5,
        color: "var(--ink-700)"
      }
    }, m.text))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Add to discussion\u2026",
      style: {
        flex: 1,
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-md)",
        padding: "10px 12px",
        fontSize: 13.5,
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "send",
        size: 15
      })
    }, "Send")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Shared evidence"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, D.evidence.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, D.evidence.map((e, i) => /*#__PURE__*/React.createElement(EvidenceCard, {
      key: i,
      title: e.title,
      claim: e.claim,
      status: e.status,
      owner: e.owner,
      ownerColor: e.color
    })))), /*#__PURE__*/React.createElement(CoachCard, {
      title: "Group Observer",
      message: "You've reached a conditional position. Before finalizing, list who can access the data and how appeals work.",
      chips: ["Draft access rule", "Mark unresolved"]
    })));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/StudentGroup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student/StudentHome.jsx
try { (() => {
// Student — Task Hub (lively, restyled home). Exports window.StudentHome
(function () {
  const {
    Badge,
    Avatar,
    Button,
    Card,
    INQUIRY_STAGES
  } = window.InquiroDesignSystem_019dc4;
  const Icon = window.Icon;
  function FlowStrip({
    active,
    doneCount
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        overflowX: "auto",
        paddingBottom: 4
      }
    }, INQUIRY_STAGES.map((s, i) => {
      const done = i < doneCount;
      const isActive = s.id === active;
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        style: {
          flex: "1 0 0",
          minWidth: 78
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 6,
          borderRadius: 999,
          background: done || isActive ? s.color : "var(--surface-soft)",
          opacity: done ? 1 : isActive ? 1 : 0.5
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: "var(--text-faint)"
        }
      }, s.index), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          fontWeight: 800,
          color: isActive ? "var(--ink-800)" : "var(--text-muted)",
          lineHeight: 1.25
        }
      }, s.title));
    }));
  }
  window.StudentHome = function StudentHome({
    onOpenStudio,
    onOpenGroup
  }) {
    const D = window.INQ;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-2xl)",
        padding: "30px 30px 26px",
        background: "var(--ink-900)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--grad-student-wash)",
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow",
      style: {
        color: "var(--lime)"
      }
    }, "Active inquiry \xB7 ", D.task.course), /*#__PURE__*/React.createElement(Badge, {
      tone: "lime"
    }, "Due ", D.task.due)), /*#__PURE__*/React.createElement("h1", {
      style: {
        color: "#fff",
        fontSize: 40,
        lineHeight: 1.05,
        maxWidth: 720,
        margin: "0 0 14px"
      }
    }, D.task.title), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "rgba(255,255,255,0.72)",
        fontSize: 15.5,
        maxWidth: 620,
        margin: "0 0 22px"
      }
    }, D.task.question), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "spark",
      shape: "pill",
      size: "lg",
      onClick: onOpenStudio,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18,
        color: "#3f6212"
      })
    }, "Continue: Revision"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      shape: "pill",
      onClick: onOpenGroup,
      style: {
        background: "rgba(255,255,255,0.1)",
        color: "#fff",
        borderColor: "rgba(255,255,255,0.22)"
      },
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "users-round",
        size: 18
      })
    }, "Group space")))), /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 20
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Your learning flow"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "4px 0 0",
        fontSize: 19
      }
    }, "6 of 9 stages complete")), /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      dot: true
    }, "On track")), /*#__PURE__*/React.createElement(FlowStrip, {
      active: "revision",
      doneCount: 6
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 20
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "My artifact"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "8px 0 4px",
        fontSize: 17
      }
    }, "Limited-Use Governance Flow"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 14px",
        fontSize: 13.5
      }
    }, "You revised v1 \u2192 v2 after Blair's evidence feedback. Two peers understood your core idea."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 10
      }
    }, [["2", "Versions"], ["2", "Peer reviews"], ["1", "Revision logged"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        padding: 12,
        borderRadius: "var(--radius-md)",
        background: "var(--surface-soft)"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26,
        color: "var(--ink-800)"
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)",
        fontWeight: 700
      }
    }, l))))), /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 20
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Alpha Group"), /*#__PURE__*/React.createElement("button", {
      onClick: onOpenGroup,
      style: {
        border: 0,
        background: "none",
        color: "var(--blue)",
        fontWeight: 800,
        fontSize: 12.5,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, "Open ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 14,
      color: "var(--blue)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 9
      }
    }, D.students.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: s.name,
      color: s.color,
      size: 30
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 800,
        color: "var(--ink-800)"
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: 240
      }
    }, s.position))))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/StudentHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student/StudentStudio.jsx
try { (() => {
// Student — Studio (Revision stage workspace). Exports window.StudentStudio
(function () {
  const {
    Badge,
    Card,
    Button,
    CoachCard,
    StageRail
  } = window.InquiroDesignSystem_019dc4;
  const Icon = window.Icon;
  window.StudentStudio = function StudentStudio({
    stage,
    setStage
  }) {
    const D = window.INQ;
    const [text, setText] = React.useState("I support limited AI surveillance only if the school provides transparent notice, human review, data minimization, and clear retention limits. Low-confidence model output should never trigger automatic punishment.");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "210px minmax(0,1fr) 320px",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "xl",
      padding: 12
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "2px 4px 12px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Journey"), /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: "var(--font-display)",
        color: "var(--blue)",
        fontSize: 16
      }
    }, "07")), /*#__PURE__*/React.createElement(StageRail, {
      activeId: stage,
      doneIds: ["materials", "inquiry", "artifact", "check", "understanding", "feedback"],
      onSelect: setStage
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 18px",
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow",
      style: {
        color: "var(--stage-revision)"
      }
    }, "Stage 07 \xB7 Revision"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "4px 0 0",
        fontSize: 19
      }
    }, "Revise \u2014 and record why")), /*#__PURE__*/React.createElement(Badge, {
      tone: "gold",
      dot: true
    }, "Draft v2")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      value: text,
      onChange: e => setText(e.target.value),
      style: {
        width: "100%",
        minHeight: 150,
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-md)",
        padding: 14,
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--ink-700)",
        resize: "vertical",
        outline: "none",
        background: "#fff"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Why did you change it?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginTop: 8
      }
    }, ["Peer didn't understand", "Evidence was thin", "Influenced by a peer", "Found a logic gap"].map((r, i) => /*#__PURE__*/React.createElement("span", {
      key: r,
      style: {
        padding: "7px 11px",
        borderRadius: "var(--radius-pill)",
        fontSize: 12,
        fontWeight: 800,
        cursor: "pointer",
        border: "1px solid " + (i === 1 ? "var(--gold)" : "var(--line)"),
        background: i === 1 ? "var(--gold-soft)" : "#fff",
        color: i === 1 ? "var(--gold-ink)" : "var(--text-muted)"
      }
    }, r)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 10,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Save draft"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16
      })
    }, "Log revision")))), /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 18
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Version history"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8,
        marginTop: 12
      }
    }, D.versions.map(v => /*#__PURE__*/React.createElement("div", {
      key: v.v,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 12,
        alignItems: "center",
        padding: 12,
        borderRadius: "var(--radius-md)",
        border: "1px solid " + (v.current ? "#c7e0d8" : "var(--line)"),
        background: v.current ? "var(--teal-soft)" : "#fff"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: 12,
        color: v.current ? "var(--teal-700)" : "var(--text-muted)"
      }
    }, v.v), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--ink-700)"
      }
    }, v.note), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        color: "var(--text-faint)"
      }
    }, v.time)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(CoachCard, {
      message: "Blair said your privacy rules are thin. Which specific rule will you add \u2014 retention, access, or appeal?",
      nudge: "Name the feedback you're responding to, so your revision links back to it.",
      chips: ["Add retention limit", "Add access rule", "Add appeal step"]
    }), /*#__PURE__*/React.createElement(Card, {
      variant: "plain",
      padding: 16
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Feedback driving this revision"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10,
        marginTop: 12
      }
    }, D.feedback.map((f, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 12,
        borderRadius: "var(--radius-md)",
        background: "var(--surface-soft)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: f.tone
    }, f.type), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: "var(--text-faint)",
        fontWeight: 700
      }
    }, f.from)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        lineHeight: 1.5,
        color: "var(--ink-700)"
      }
    }, f.text)))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/StudentStudio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student/data.js
try { (() => {
// Shared mock content for the Inquiro UI kits — lifted from the source codebase
// (src/lib/mock-data.ts): the "AI Campus Surveillance" inquiry task.
window.INQ = {
  task: {
    title: "Should AI Campus Surveillance Be Used in Schools?",
    question: "If schools can deploy AI surveillance, what boundaries and governance conditions are necessary?",
    course: "AI and Society Inquiry",
    due: "May 30",
    stage: "revision"
  },
  students: [{
    id: "u-a",
    name: "Alex",
    color: "#22c55e",
    position: "Limited use, only with transparent notice + human review",
    artifact: "Limited-Use Governance Flow",
    metrics: {
      inquiry: 92,
      expression: 88,
      understanding: 74,
      feedback: 70,
      revision: 95,
      contribution: 86
    }
  }, {
    id: "u-b",
    name: "Blair",
    color: "#6366f1",
    position: "Opposes broad deployment — trust + privacy risk",
    artifact: "Privacy Risks & Student Rights Brief",
    metrics: {
      inquiry: 80,
      expression: 84,
      understanding: 90,
      feedback: 88,
      revision: 60,
      contribution: 78
    }
  }, {
    id: "u-c",
    name: "Casey",
    color: "#0ea5e9",
    position: "Separate technical feasibility from governance",
    artifact: "How Accuracy Data Shapes Boundaries",
    metrics: {
      inquiry: 76,
      expression: 72,
      understanding: 68,
      feedback: 64,
      revision: 70,
      contribution: 71
    }
  }, {
    id: "u-d",
    name: "Drew",
    color: "#eab308",
    position: "Worries about constant-observation pressure",
    artifact: "Being Observed & School Relationships",
    metrics: {
      inquiry: 70,
      expression: 66,
      understanding: 72,
      feedback: 60,
      revision: 58,
      contribution: 64
    }
  }],
  teacher: {
    name: "Ms. Lin",
    color: "#f97316"
  },
  feedback: [{
    type: "EVIDENCE",
    tone: "gold",
    from: "Blair",
    text: "Your safety logic is clear, but the privacy rules need detail — retention limits and access permissions."
  }, {
    type: "CONNECTION",
    tone: "violet",
    from: "Drew",
    text: "Your limited-use proposal connects with my point about students' right to know when they're monitored."
  }],
  versions: [{
    v: "v1",
    note: "Initial expression — mostly safety benefits.",
    time: "May 12 · 09:00"
  }, {
    v: "v2",
    note: "Added privacy + governance conditions after peer feedback.",
    time: "May 12 · 11:00",
    current: true
  }],
  evidence: [{
    title: "Data Minimization Principle",
    claim: "Schools should not store surveillance data indefinitely.",
    status: "VERIFIED",
    owner: "Blair",
    color: "#6366f1"
  }, {
    title: "Accuracy Drops in Crowds",
    claim: "Model output should not directly trigger punishment.",
    status: "USED",
    owner: "Casey",
    color: "#0ea5e9"
  }],
  discussion: [{
    from: "Blair",
    color: "#6366f1",
    move: "Challenge",
    text: "If students don't know how long data is stored, the system isn't transparent."
  }, {
    from: "Casey",
    color: "#0ea5e9",
    move: "Evidence",
    text: "The accuracy table shows more false alerts in crowds — output shouldn't auto-punish."
  }, {
    from: "Drew",
    color: "#eab308",
    move: "Connect",
    text: "Make notice + appeals a usage condition instead of a yes/no."
  }],
  sharedDoc: "## Group Position\n\nAI campus surveillance should not be deployed broadly. It may be used only as a safety support tool when the school defines limited scenarios, transparent notice, data minimization, human review, retention limits, and an appeal process.\n\n## Still Unresolved\n\nWho can access surveillance data, and how can students appeal effectively?",
  episodes: [{
    type: "REVISION_FROM_FEEDBACK",
    title: "Alex added governance conditions after peer feedback",
    who: "Alex",
    time: "11:05"
  }, {
    type: "DISAGREEMENT_INTEGRATED",
    title: "Group turned support-vs-oppose into a conditional plan",
    who: "Alpha Group",
    time: "12:25"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/data.js", error: String((e && e.message) || e) }); }

// ui_kits/student/icons.js
try { (() => {
// Real lucide icons (the product uses lucide-react). Renders <i data-lucide>
// and (re)hydrates via lucide.createIcons after each render.
window.Icon = function Icon({
  name,
  size = 18,
  color = "currentColor",
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          "stroke-width": strokeWidth
        },
        nameAttr: "data-lucide"
      });
    }
  }, [name, size, color, strokeWidth]);
  return React.createElement("span", {
    ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    },
    "aria-hidden": "true"
  });
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/teacher/RadarChart.jsx
try { (() => {
// Teacher — Radar chart (process dimensions). Exports window.RadarChart
(function () {
  const DIMS = ["Inquiry", "Expression", "Understanding", "Feedback", "Revision", "Contribution"];
  const KEYS = ["inquiry", "expression", "understanding", "feedback", "revision", "contribution"];
  window.RadarChart = function RadarChart({
    student,
    size = 260
  }) {
    const cx = size / 2,
      cy = size / 2,
      R = size / 2 - 38;
    const n = DIMS.length;
    const pt = (i, r) => {
      const a = Math.PI * 2 * i / n - Math.PI / 2;
      return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
    };
    const poly = r => DIMS.map((_, i) => pt(i, r).join(",")).join(" ");
    const shape = student ? KEYS.map((k, i) => pt(i, student.metrics[k] / 100 * R).join(",")).join(" ") : poly(R * 0.6);
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "radarFill",
      x1: "0",
      y1: "0",
      x2: "1",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0",
      stopColor: "#2f6fed",
      stopOpacity: "0.55"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "1",
      stopColor: "#21a985",
      stopOpacity: "0.42"
    }))), [1, 0.66, 0.33].map(f => /*#__PURE__*/React.createElement("polygon", {
      key: f,
      points: poly(R * f),
      fill: "none",
      stroke: "rgba(47,111,237,0.16)",
      strokeWidth: "1"
    })), DIMS.map((_, i) => {
      const [x, y] = pt(i, R);
      return /*#__PURE__*/React.createElement("line", {
        key: i,
        x1: cx,
        y1: cy,
        x2: x,
        y2: y,
        stroke: "rgba(47,111,237,0.12)",
        strokeWidth: "1"
      });
    }), /*#__PURE__*/React.createElement("polygon", {
      points: shape,
      fill: "url(#radarFill)",
      stroke: "#2f6fed",
      strokeWidth: "2"
    }), KEYS.map((k, i) => {
      const v = student ? student.metrics[k] / 100 : 0.6;
      const [x, y] = pt(i, v * R);
      return /*#__PURE__*/React.createElement("circle", {
        key: k,
        cx: x,
        cy: y,
        r: "3.2",
        fill: "#2f6fed"
      });
    }), DIMS.map((d, i) => {
      const [x, y] = pt(i, R + 20);
      return /*#__PURE__*/React.createElement("text", {
        key: d,
        x: x,
        y: y,
        textAnchor: "middle",
        dominantBaseline: "middle",
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 9.5,
          fontWeight: 700,
          fill: "var(--text-faint)"
        }
      }, d);
    }));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teacher/RadarChart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teacher/TeacherApp.jsx
try { (() => {
// Teacher app shell — futuristic console. Exports window.TeacherApp
(function () {
  const {
    Avatar,
    SegmentedControl
  } = window.InquiroDesignSystem_019dc4;
  const Icon = window.Icon;
  window.TeacherApp = function TeacherApp() {
    const [mode, setMode] = React.useState("Dashboard");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        background: "radial-gradient(circle at 50% -12%, rgba(47,111,237,0.10), transparent 42%), linear-gradient(180deg,#fbfcff 0%, #f5f7fb 60%, #f7f8fb 100%)"
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "14px 30px",
        background: "rgba(255,255,255,0.7)",
        borderBottom: "1px solid var(--line-soft)",
        backdropFilter: "var(--blur-glass)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/inquiro-mark.svg",
      alt: "Inquiro",
      style: {
        width: 38,
        height: 38
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 15,
        color: "var(--ink-900)"
      }
    }, "Inquiro ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-faint)",
        fontWeight: 500
      }
    }, "Console")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)",
        fontWeight: 600
      }
    }, "AI & Society Inquiry \xB7 Spring 2026"))), /*#__PURE__*/React.createElement(SegmentedControl, {
      options: ["Dashboard", "Group Process"],
      value: mode,
      onChange: setMode
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "7px 11px",
        borderRadius: "var(--radius-pill)",
        background: "var(--blue-soft)",
        color: "var(--blue-700)",
        fontSize: 12,
        fontWeight: 800
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "radio",
      size: 14,
      color: "var(--blue)"
    }), " Live"), /*#__PURE__*/React.createElement(Avatar, {
      name: "Ms. Lin",
      color: "#f97316",
      size: 34
    }))), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 1240,
        margin: "0 auto",
        padding: "26px 30px 48px"
      }
    }, mode === "Dashboard" && /*#__PURE__*/React.createElement(window.TeacherDashboard, null), mode === "Group Process" && /*#__PURE__*/React.createElement(window.TeacherGroups, null)));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teacher/TeacherApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teacher/TeacherDashboard.jsx
try { (() => {
// Teacher — Dashboard. Exports window.TeacherDashboard
(function () {
  const {
    Badge,
    Card,
    Avatar,
    Button,
    SegmentedControl,
    StatTile,
    ProgressRing
  } = window.InquiroDesignSystem_019dc4;
  const Icon = window.Icon;
  const DIM_LABEL = {
    contribution: "Contribution",
    feedback: "Feedback",
    revision: "Revision",
    understanding: "Understanding"
  };
  window.TeacherDashboard = function TeacherDashboard() {
    const D = window.INQ;
    const [dim, setDim] = React.useState("contribution");
    const [sel, setSel] = React.useState(D.students[0].id);
    const ranked = [...D.students].sort((a, b) => b.metrics[dim] - a.metrics[dim]);
    const selected = D.students.find(s => s.id === sel);
    const pulse = Math.round(D.students.reduce((t, s) => t + s.metrics.contribution, 0) / D.students.length);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "2xl",
      padding: 28,
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) 300px",
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--grad-teacher-wash)",
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow",
      style: {
        color: "var(--blue)"
      }
    }, "Live \xB7 ", D.task.course), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 36,
        lineHeight: 1.1,
        margin: "10px 0 12px",
        maxWidth: 540
      }
    }, D.task.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        maxWidth: 480,
        margin: "0 0 18px"
      }
    }, "Alpha Group reached a conditional position. The shared output still needs clear data-access rules and an appeal mechanism."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "layout-dashboard",
        size: 16
      })
    }, "Open group process"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "bell",
        size: 16
      })
    }, "3 attention items"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "grid",
        gap: 12,
        alignContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8,
        padding: 20,
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--line-soft)",
        background: "rgba(255,255,255,0.72)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        fontSize: 12,
        fontWeight: 700
      }
    }, "Class pulse"), /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 52,
        lineHeight: 0.95,
        color: "var(--ink-900)"
      }
    }, pulse, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "end",
        gap: 5,
        height: 36,
        marginTop: 4
      }
    }, [58, 71, 64, 86, 78, 64, 90, 72].map((h, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        flex: 1,
        height: h + "%",
        borderRadius: "999px 999px 4px 4px",
        background: "var(--grad-bridge)"
      }
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 14
      }
    }, [["Pre-inquiry", 100], ["Artifacts", 100], ["Peer understanding", 33], ["Revisions logged", 25]].map(([label, v]) => /*#__PURE__*/React.createElement(Card, {
      key: label,
      variant: "glass",
      radius: "lg",
      padding: 16,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: v,
      size: 62,
      thickness: 8
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: "var(--ink-800)"
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)"
      }
    }, "of 4 students"))))), /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "2xl",
      padding: 22
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Live learning analytics"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "5px 0 0",
        fontSize: 21
      }
    }, "Process across student dimensions")), /*#__PURE__*/React.createElement(SegmentedControl, {
      options: Object.entries(DIM_LABEL).map(([value, label]) => ({
        value,
        label
      })),
      value: dim,
      onChange: setDim
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "300px minmax(0,1fr)",
        gap: 20,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        placeItems: "center",
        padding: 8,
        borderRadius: "var(--radius-xl)",
        background: "linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,253,0.7))",
        border: "1px solid var(--line-soft)"
      }
    }, /*#__PURE__*/React.createElement(window.RadarChart, {
      student: selected,
      size: 268
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, ranked.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setSel(s.id),
      style: {
        display: "grid",
        gridTemplateColumns: "64px 1fr 32px",
        gap: 10,
        alignItems: "center",
        textAlign: "left",
        padding: "8px 12px",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        border: "1px solid " + (s.id === sel ? "rgba(47,111,237,0.35)" : "var(--line)"),
        background: s.id === sel ? "#f4f8ff" : "#fff"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: s.name,
      color: s.color,
      size: 24
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: "var(--ink-800)"
      }
    }, s.name)), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 8,
        borderRadius: 999,
        background: "var(--surface-soft)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        inset: 0,
        width: s.metrics[dim] + "%",
        background: s.color,
        borderRadius: 999
      }
    })), /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--ink-700)",
        textAlign: "right"
      }
    }, s.metrics[dim])))), selected && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14,
        borderRadius: "var(--radius-md)",
        background: "var(--blue-soft)",
        border: "1px solid #c7d9ee"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: "var(--blue-700)"
      }
    }, selected.name, " \xB7 ", selected.artifact), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "5px 0 0",
        fontSize: 12.5,
        color: "var(--blue-700)",
        lineHeight: 1.5
      }
    }, selected.position))))), /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "2xl",
      padding: 22
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Evidence episodes \xB7 auto-detected"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10,
        marginTop: 14
      }
    }, D.episodes.map((e, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 14,
        alignItems: "center",
        padding: 14,
        borderRadius: "var(--radius-md)",
        background: "rgba(255,255,255,0.7)",
        border: "1px solid var(--line-soft)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        placeItems: "center",
        width: 36,
        height: 36,
        borderRadius: 11,
        background: i === 0 ? "var(--gold-soft)" : "var(--teal-soft)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i === 0 ? "sparkles" : "git-merge",
      size: 18,
      color: i === 0 ? "#8a6410" : "#16765b"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 800,
        color: "var(--ink-800)"
      }
    }, e.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--text-muted)",
        fontFamily: "var(--font-mono)",
        marginTop: 2
      }
    }, e.who, " \xB7 ", e.time)), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 14,
        color: "var(--blue)"
      })
    }, "Mark"))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teacher/TeacherDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teacher/TeacherGroups.jsx
try { (() => {
// Teacher — Group Process tracking. Exports window.TeacherGroups
(function () {
  const {
    Badge,
    Card,
    Avatar,
    Button
  } = window.InquiroDesignSystem_019dc4;
  const Icon = window.Icon;
  const MOVES = [["Challenge", 6, "coral"], ["Evidence", 8, "teal"], ["Connect", 5, "violet"], ["Decide", 2, "blue"]];
  window.TeacherGroups = function TeacherGroups() {
    const D = window.INQ;
    const maxMove = Math.max(...MOVES.map(m => m[1]));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) 320px",
        gap: 18,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "2xl",
      padding: 24
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow",
      style: {
        color: "var(--stage-group)"
      }
    }, "Alpha Group \xB7 shared question"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 26,
        lineHeight: 1.12,
        margin: "10px 0 16px",
        maxWidth: 620
      }
    }, "Under what conditions, if any, should AI campus surveillance be allowed?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      dot: true
    }, "Conditional position reached"), /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "1 unresolved question"), /*#__PURE__*/React.createElement(Badge, {
      tone: "blue"
    }, "2 contributions linked"))), /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "2xl",
      padding: 22
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Disagreement \u2192 integration"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: 14,
        alignItems: "center",
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        borderRadius: "var(--radius-lg)",
        background: "var(--coral-soft)",
        border: "1px solid #f0c4b8"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: "#b2432a",
        marginBottom: 6
      }
    }, "Tension"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: "var(--ink-700)",
        lineHeight: 1.5
      }
    }, "Alex weighs safety response; Blair & Drew weigh privacy and the feeling of being watched.")), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 22,
      color: "var(--text-faint)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        borderRadius: "var(--radius-lg)",
        background: "var(--teal-soft)",
        border: "1px solid #b9ddcf"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: "var(--teal-700)",
        marginBottom: 6
      }
    }, "Integrated outcome"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        color: "var(--ink-700)",
        lineHeight: 1.5
      }
    }, "Became boundary conditions: limited scenarios, notice, human review, appeals, retention limits.")))), /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "2xl",
      padding: 22
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Contribution links \xB7 personal \u2192 shared output"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10,
        marginTop: 14
      }
    }, [["Alex", "#22c55e", "Personal artifact", "Limited-use framework became the group position"], ["Blair", "#6366f1", "Evidence", "Data minimization became a governance condition"]].map(([name, color, type, desc]) => /*#__PURE__*/React.createElement("div", {
      key: name,
      style: {
        display: "grid",
        gridTemplateColumns: "auto auto 1fr",
        gap: 12,
        alignItems: "center",
        padding: 12,
        borderRadius: "var(--radius-md)",
        background: "rgba(255,255,255,0.7)",
        border: "1px solid var(--line-soft)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: name,
      color: color,
      size: 28
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, type), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--ink-700)"
      }
    }, desc)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "xl",
      padding: 18
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Member positions"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10,
        marginTop: 12
      }
    }, D.students.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: s.name,
      color: s.color,
      size: 26
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 800,
        color: "var(--ink-800)"
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-muted)",
        lineHeight: 1.4
      }
    }, s.position)))))), /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "xl",
      padding: 18
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow"
    }, "Discussion moves"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 11,
        marginTop: 14
      }
    }, MOVES.map(([label, n, tone]) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        display: "grid",
        gridTemplateColumns: "78px 1fr 22px",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 8,
        borderRadius: 999,
        background: "var(--surface-soft)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        inset: 0,
        width: n / maxMove * 100 + "%",
        background: "var(--grad-bridge)",
        borderRadius: 999
      }
    })), /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--ink-700)"
      }
    }, n))))), /*#__PURE__*/React.createElement(Card, {
      variant: "glass",
      radius: "xl",
      padding: 18,
      style: {
        background: "var(--ink-900)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "inq-eyebrow",
      style: {
        color: "var(--lime)"
      }
    }, "Suggested intervention"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 14px",
        fontSize: 13.5,
        color: "rgba(255,255,255,0.82)",
        lineHeight: 1.55
      }
    }, "Ask the group to specify who can access surveillance data, and how a student appeals a false alert."), /*#__PURE__*/React.createElement(Button, {
      variant: "spark",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "message-square",
        size: 14,
        color: "#3f6212"
      })
    }, "Send prompt"))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teacher/TeacherGroups.jsx", error: String((e && e.message) || e) }); }

// ui_kits/teacher/data.js
try { (() => {
// Shared mock content for the Inquiro UI kits — lifted from the source codebase
// (src/lib/mock-data.ts): the "AI Campus Surveillance" inquiry task.
window.INQ = {
  task: {
    title: "Should AI Campus Surveillance Be Used in Schools?",
    question: "If schools can deploy AI surveillance, what boundaries and governance conditions are necessary?",
    course: "AI and Society Inquiry",
    due: "May 30",
    stage: "revision"
  },
  students: [{
    id: "u-a",
    name: "Alex",
    color: "#22c55e",
    position: "Limited use, only with transparent notice + human review",
    artifact: "Limited-Use Governance Flow",
    metrics: {
      inquiry: 92,
      expression: 88,
      understanding: 74,
      feedback: 70,
      revision: 95,
      contribution: 86
    }
  }, {
    id: "u-b",
    name: "Blair",
    color: "#6366f1",
    position: "Opposes broad deployment — trust + privacy risk",
    artifact: "Privacy Risks & Student Rights Brief",
    metrics: {
      inquiry: 80,
      expression: 84,
      understanding: 90,
      feedback: 88,
      revision: 60,
      contribution: 78
    }
  }, {
    id: "u-c",
    name: "Casey",
    color: "#0ea5e9",
    position: "Separate technical feasibility from governance",
    artifact: "How Accuracy Data Shapes Boundaries",
    metrics: {
      inquiry: 76,
      expression: 72,
      understanding: 68,
      feedback: 64,
      revision: 70,
      contribution: 71
    }
  }, {
    id: "u-d",
    name: "Drew",
    color: "#eab308",
    position: "Worries about constant-observation pressure",
    artifact: "Being Observed & School Relationships",
    metrics: {
      inquiry: 70,
      expression: 66,
      understanding: 72,
      feedback: 60,
      revision: 58,
      contribution: 64
    }
  }],
  teacher: {
    name: "Ms. Lin",
    color: "#f97316"
  },
  feedback: [{
    type: "EVIDENCE",
    tone: "gold",
    from: "Blair",
    text: "Your safety logic is clear, but the privacy rules need detail — retention limits and access permissions."
  }, {
    type: "CONNECTION",
    tone: "violet",
    from: "Drew",
    text: "Your limited-use proposal connects with my point about students' right to know when they're monitored."
  }],
  versions: [{
    v: "v1",
    note: "Initial expression — mostly safety benefits.",
    time: "May 12 · 09:00"
  }, {
    v: "v2",
    note: "Added privacy + governance conditions after peer feedback.",
    time: "May 12 · 11:00",
    current: true
  }],
  evidence: [{
    title: "Data Minimization Principle",
    claim: "Schools should not store surveillance data indefinitely.",
    status: "VERIFIED",
    owner: "Blair",
    color: "#6366f1"
  }, {
    title: "Accuracy Drops in Crowds",
    claim: "Model output should not directly trigger punishment.",
    status: "USED",
    owner: "Casey",
    color: "#0ea5e9"
  }],
  discussion: [{
    from: "Blair",
    color: "#6366f1",
    move: "Challenge",
    text: "If students don't know how long data is stored, the system isn't transparent."
  }, {
    from: "Casey",
    color: "#0ea5e9",
    move: "Evidence",
    text: "The accuracy table shows more false alerts in crowds — output shouldn't auto-punish."
  }, {
    from: "Drew",
    color: "#eab308",
    move: "Connect",
    text: "Make notice + appeals a usage condition instead of a yes/no."
  }],
  sharedDoc: "## Group Position\n\nAI campus surveillance should not be deployed broadly. It may be used only as a safety support tool when the school defines limited scenarios, transparent notice, data minimization, human review, retention limits, and an appeal process.\n\n## Still Unresolved\n\nWho can access surveillance data, and how can students appeal effectively?",
  episodes: [{
    type: "REVISION_FROM_FEEDBACK",
    title: "Alex added governance conditions after peer feedback",
    who: "Alex",
    time: "11:05"
  }, {
    type: "DISAGREEMENT_INTEGRATED",
    title: "Group turned support-vs-oppose into a conditional plan",
    who: "Alpha Group",
    time: "12:25"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teacher/data.js", error: String((e && e.message) || e) }); }

// ui_kits/teacher/icons.js
try { (() => {
// Real lucide icons (the product uses lucide-react). Renders <i data-lucide>
// and (re)hydrates via lucide.createIcons after each render.
window.Icon = function Icon({
  name,
  size = 18,
  color = "currentColor",
  strokeWidth = 2,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          "stroke-width": strokeWidth
        },
        nameAttr: "data-lucide"
      });
    }
  }, [name, size, color, strokeWidth]);
  return React.createElement("span", {
    ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    },
    "aria-hidden": "true"
  });
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/teacher/icons.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.CoachCard = __ds_scope.CoachCard;

__ds_ns.EvidenceCard = __ds_scope.EvidenceCard;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.INQUIRY_STAGES = __ds_scope.INQUIRY_STAGES;

__ds_ns.StageRail = __ds_scope.StageRail;

})();
