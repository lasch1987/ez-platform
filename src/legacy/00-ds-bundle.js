/* @ds-bundle: {"format":4,"namespace":"EZDrumSchoolDesignSystem_874c26","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"ListRow","sourcePath":"components/lists/ListRow.jsx"},{"name":"NavItem","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"BeatCounter","sourcePath":"components/practice/BeatCounter.jsx"},{"name":"TempoRing","sourcePath":"components/practice/TempoRing.jsx"},{"name":"ProgressBar","sourcePath":"components/progress/ProgressBar.jsx"},{"name":"SessionSteps","sourcePath":"components/progress/SessionSteps.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"f87e08f0fb67","components/core/Badge.jsx":"c8a3aeeccce6","components/core/Button.jsx":"3626600e7022","components/core/Icon.jsx":"0ee84630d991","components/core/IconButton.jsx":"95066af4176b","components/forms/Input.jsx":"0ab1b623fdb6","components/forms/Stepper.jsx":"636eaa18104e","components/lists/ListRow.jsx":"4cc33779b6dc","components/navigation/SidebarNav.jsx":"23420b2c2bac","components/navigation/TabBar.jsx":"db1e8b99409f","components/navigation/Tabs.jsx":"721d88c896dd","components/practice/BeatCounter.jsx":"30323a649133","components/practice/TempoRing.jsx":"c90294ea183e","components/progress/ProgressBar.jsx":"01ce24057082","components/progress/SessionSteps.jsx":"62314f1c887c","components/surfaces/Card.jsx":"c4bc4e541d5f","components/surfaces/FeatureCard.jsx":"c2af1ace919f","ui_kits/ios/Phone.jsx":"3336368d59db","ui_kits/ios/Screens.jsx":"e0edd76e93be","ui_kits/student-web/SwAudio.jsx":"df011d50b030","ui_kits/student-web/SwCaja.jsx":"c14ddc2618da","ui_kits/student-web/SwCamino.jsx":"65c0cf4977e1","ui_kits/student-web/SwClases.jsx":"847016b01bb7","ui_kits/student-web/SwDaw.jsx":"54fa78385b71","ui_kits/student-web/SwFx.jsx":"3e2d40349279","ui_kits/student-web/SwLibro.jsx":"076dbc7d054e","ui_kits/student-web/SwOnboarding.jsx":"c82028c55ac7","ui_kits/student-web/SwProgreso.jsx":"c53cd0c5f0f7","ui_kits/student-web/SwRepertorio.jsx":"f8c6f26e76f7","ui_kits/student-web/SwRudimentos.jsx":"cf87a3187d56","ui_kits/student-web/SwShell.jsx":"e4e4fe3bbf23","ui_kits/student-web/tweaks-panel.jsx":"d259e3a86f73","ui_kits/web/Sidebar.jsx":"a749e4577c99","ui_kits/web/StaffViews.jsx":"5d35c82ef92d","ui_kits/web/StudentHome.jsx":"94f8832c0445"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EZDrumSchoolDesignSystem_874c26 = window.EZDrumSchoolDesignSystem_874c26 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name = "",
  size = 36,
  ring,
  style
}) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(180deg,#FFE29A,#F6B51E)",
      color: "#17181C",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * .38,
      boxShadow: ring ? "0 0 0 2px var(--accent)" : "none",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 8%",
      transform: "scale(1.9)",
      transformOrigin: "50% 8%"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  success: {
    bg: "var(--ez-success)",
    fg: "#fff"
  },
  warning: {
    bg: "var(--ez-yellow-400)",
    fg: "#17181C"
  },
  neutral: {
    bg: "var(--surface-inset)",
    fg: "var(--text-secondary)"
  },
  danger: {
    bg: "var(--ez-danger)",
    fg: "#fff"
  },
  info: {
    bg: "var(--ez-blue)",
    fg: "#fff"
  },
  accent: {
    bg: "var(--accent)",
    fg: "var(--text-on-accent)"
  }
};
function Badge({
  tone = "neutral",
  count,
  children,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  if (count != null) return /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      borderRadius: 999,
      background: "var(--ez-danger)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      fontFamily: "var(--font-body)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, count);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 10px",
      borderRadius: 6,
      background: t.bg,
      color: t.fg,
      fontSize: 11,
      fontWeight: 600,
      fontFamily: "var(--font-body)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "icons/";
function Icon({
  name,
  size = 18,
  color = "currentColor",
  style,
  ...rest
}) {
  const url = "url(" + ((window.__resources && window.__resources["icon_" + name.replace(/-/g, "_")]) || (CDN + name + ".svg")) + ")";
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 34,
    px: 14,
    fs: 13,
    ic: 14
  },
  md: {
    h: 44,
    px: 20,
    fs: 14,
    ic: 16
  },
  lg: {
    h: 54,
    px: 28,
    fs: 16,
    ic: 18
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const v = {
    primary: {
      background: "var(--accent-gradient)",
      color: "var(--text-on-accent)",
      boxShadow: hover ? "0 10px 30px rgba(47,87,245,.45)" : "var(--shadow-glow-accent)",
      border: "none"
    },
    secondary: {
      background: hover ? "var(--surface-card-hover)" : "var(--surface-card)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: hover ? "var(--surface-card)" : "transparent",
      color: "var(--text-primary)",
      border: "1px solid transparent"
    },
    dark: {
      background: hover ? "#2B2C33" : "#1E1F24",
      color: "#fff",
      border: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      height: s.h,
      padding: "0 " + s.px + "px",
      width: fullWidth ? "100%" : undefined,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: s.fs,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      transform: down && !disabled ? "scale(.97)" : "none",
      transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base), background var(--dur-base)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  size = 40,
  variant = "ghost",
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    ghost: {
      background: hover ? "var(--surface-card)" : "transparent",
      color: "var(--text-primary)",
      border: "1px solid transparent"
    },
    surface: {
      background: "var(--surface-card-solid)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-card-light)"
    },
    primary: {
      background: "var(--accent-gradient)",
      color: "var(--text-on-accent)",
      border: "none",
      boxShadow: "var(--shadow-glow-accent)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label
  }, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: 0,
      transition: "background var(--dur-base)",
      ...v,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * .45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  icon,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 42,
      padding: "0 14px",
      borderRadius: 10,
      background: "var(--surface-inset)",
      border: "1px solid " + (focus ? "var(--accent)" : "var(--border-subtle)"),
      boxShadow: focus ? "0 0 0 3px var(--accent-ring)" : "none",
      color: "var(--text-muted)",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--text-primary)",
      fontFamily: "inherit",
      fontSize: 14
    }
  }))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function Stepper({
  value = 120,
  min = 30,
  max = 240,
  step = 5,
  unit = "BPM",
  onChange,
  size = "md",
  style
}) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  const big = size === "lg";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: big ? 20 : 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "minus",
    variant: "surface",
    size: big ? 40 : 32,
    label: "Bajar",
    onClick: () => set(value - step)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: big ? 22 : 16,
      color: "var(--text-primary)",
      minWidth: big ? 96 : 76,
      textAlign: "center"
    }
  }, value, " ", unit), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "plus",
    variant: "surface",
    size: big ? 40 : 32,
    label: "Subir",
    onClick: () => set(value + step)
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/lists/ListRow.jsx
try { (() => {
function ListRow({
  icon,
  color = "var(--ez-blue)",
  leading,
  title,
  subtitle,
  meta,
  trailing,
  chevron,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      borderRadius: 12,
      background: hover && onClick ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      cursor: onClick ? "pointer" : "default",
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      ...style
    }
  }, leading || icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: color,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, subtitle)), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, meta), trailing, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-muted)"
  }));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  icon,
  label,
  active,
  badge,
  onClick,
  collapsed
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    title: collapsed ? label : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      height: 36,
      padding: collapsed ? 0 : "0 12px",
      justifyContent: collapsed ? "center" : "flex-start",
      borderRadius: 10,
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: active ? 600 : 500,
      textAlign: "left",
      background: active ? "var(--accent-gradient)" : hover ? "rgba(255,255,255,.06)" : "transparent",
      color: active ? "var(--text-on-accent)" : "rgba(255,255,255,.86)",
      boxShadow: active ? "var(--shadow-nav-active)" : "none",
      transition: "background var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), !collapsed && badge != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    count: badge
  }));
}
function SidebarNav({
  items = [],
  active,
  onSelect,
  collapsed,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, items.map(it => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      flex: 1
    }
  }) : /*#__PURE__*/React.createElement(NavItem, _extends({
    key: it.id
  }, it, {
    collapsed: collapsed,
    active: it.id === active,
    onClick: () => onSelect && onSelect(it.id)
  }))));
}
Object.assign(__ds_scope, { NavItem, SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function TabBar({
  items = [],
  active,
  onSelect,
  centerAvatar,
  style
}) {
  const half = Math.floor(items.length / 2);
  const cell = it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect && onSelect(it.id),
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        background: "none",
        border: "none",
        cursor: "pointer",
        color: on ? "var(--light-text-primary)" : "var(--light-text-muted)",
        fontFamily: "var(--font-body)",
        fontSize: 10,
        fontWeight: on ? 600 : 500
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20,
      color: on ? "var(--accent)" : "currentColor"
    }), it.label);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 64,
      padding: "0 8px",
      background: "#fff",
      borderTop: "1px solid var(--light-border)",
      ...style
    }
  }, items.slice(0, half).map(cell), centerAvatar && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: centerAvatar,
    size: 46,
    ring: true,
    style: {
      marginTop: -18,
      boxShadow: "0 0 0 3px #fff, 0 0 0 5px var(--accent), var(--shadow-glow-accent)"
    }
  })), items.slice(half).map(cell));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange,
  variant = "underline",
  style
}) {
  if (variant === "pill") return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 2,
      padding: 3,
      borderRadius: 10,
      background: "var(--surface-inset)",
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange && onChange(it.id),
      style: {
        height: 26,
        padding: "0 12px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: on ? 600 : 500,
        background: on ? "var(--surface-card-solid)" : "transparent",
        color: on ? "var(--text-primary)" : "var(--text-secondary)",
        boxShadow: on ? "var(--shadow-card-light)" : "none"
      }
    }, it.label);
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid var(--border-subtle)",
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange && onChange(it.id),
      style: {
        flex: 1,
        height: 34,
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: on ? 600 : 500,
        color: on ? "var(--text-primary)" : "var(--text-muted)",
        borderBottom: on ? "2px solid var(--accent)" : "2px solid transparent",
        marginBottom: -1
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/practice/BeatCounter.jsx
try { (() => {
function BeatCounter({
  beats = 4,
  active = 1,
  size = 40,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      ...style
    }
  }, Array.from({
    length: beats
  }, (_, i) => {
    const on = i + 1 === active;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: size,
        height: size,
        borderRadius: 8,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: size * .38,
        background: on ? "var(--accent)" : "var(--surface-card-solid)",
        color: on ? "var(--text-on-accent)" : "var(--text-primary)",
        border: "1px solid " + (on ? "transparent" : "var(--border-subtle)"),
        boxShadow: on ? "var(--shadow-glow-accent)" : "none",
        transition: "background var(--dur-fast)"
      }
    }, i + 1);
  }));
}
Object.assign(__ds_scope, { BeatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/practice/BeatCounter.jsx", error: String((e && e.message) || e) }); }

// components/practice/TempoRing.jsx
try { (() => {
function TempoRing({
  time = "03:00",
  bpm = 120,
  progress = .75,
  size = 150,
  stroke = 12,
  style
}) {
  const r = (size - stroke) / 2,
    c = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--track)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--ez-teal)",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - progress),
    style: {
      transition: "stroke-dashoffset var(--dur-slow) linear"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * .22,
      letterSpacing: "-.01em"
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: size * .075,
      color: "var(--text-secondary)"
    }
  }, bpm, " BPM")));
}
Object.assign(__ds_scope, { TempoRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/practice/TempoRing.jsx", error: String((e && e.message) || e) }); }

// components/progress/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  tone = "accent",
  height = 6,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const c = {
    accent: "var(--accent-gradient)",
    green: "var(--ez-green)",
    blue: "var(--ez-blue)",
    purple: "var(--ez-purple)"
  }[tone] || tone;
  return /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height,
      borderRadius: 999,
      background: "var(--track)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: 999,
      background: c,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/progress/SessionSteps.jsx
try { (() => {
const DONE = ["var(--ez-green)", "var(--ez-green)", "var(--ez-green)", "var(--ez-blue)"];
function SessionSteps({
  total = 20,
  current = 5,
  visible = 6,
  size = 20,
  onSelect,
  style
}) {
  const dot = (n, key) => {
    const done = n < current,
      cur = n === current;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onSelect && onSelect(n),
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        border: cur ? "2px solid #fff" : "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: size * .5,
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: done ? DONE[(n - 1) % 4] : cur ? "var(--accent)" : "var(--surface-inset)",
        color: done ? "#fff" : cur ? "var(--text-on-accent)" : "var(--text-secondary)",
        boxShadow: cur ? "0 0 0 2px var(--accent)" : "none"
      }
    }, n);
  };
  const items = [];
  for (let n = 1; n <= Math.min(visible, total); n++) items.push(dot(n, n));
  if (total > visible) {
    items.push(/*#__PURE__*/React.createElement("span", {
      key: "e",
      style: {
        color: "var(--text-muted)",
        fontSize: size * .6
      }
    }, "\xB7\xB7\xB7"));
    items.push(dot(total, "t"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      ...style
    }
  }, items);
}
Object.assign(__ds_scope, { SessionSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/SessionSteps.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  padding = 16,
  interactive,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: interactive && hover ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding,
      color: "var(--text-primary)",
      cursor: interactive ? "pointer" : "default",
      transition: "background var(--dur-base), transform var(--dur-base) var(--ease-out)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function FeatureCard({
  icon,
  color = "var(--ez-coral)",
  title,
  subtitle,
  onClick,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    onClick: onClick,
    padding: 14,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minHeight: 120,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 7,
      background: color,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-secondary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 500
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, subtitle)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios/Phone.jsx
try { (() => {
(() => {
  const {
    Icon
  } = window.EZDrumSchoolDesignSystem_874c26;
  function Phone({
    children,
    bottom
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 340,
        height: 720,
        borderRadius: 52,
        background: "#111",
        padding: 10,
        boxShadow: "var(--shadow-phone)",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ez-light",
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: 42,
        overflow: "hidden",
        background: "#fff",
        color: "var(--text-primary)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 46,
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 26px 0 30px",
        fontSize: 14,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: "50%",
        top: 10,
        transform: "translateX(-50%)",
        width: 100,
        height: 28,
        borderRadius: 20,
        background: "#111"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "signal",
      size: 15
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "wifi",
      size: 15
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "battery-full",
      size: 17
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "auto",
        display: "flex",
        flexDirection: "column"
      }
    }, children), bottom, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 22,
        flex: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: bottom ? "#fff" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 120,
        height: 5,
        borderRadius: 3,
        background: "#111"
      }
    }))));
  }
  Object.assign(window, {
    Phone
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios/Phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ios/Screens.jsx
try { (() => {
(() => {
  const {
    Button,
    IconButton,
    Avatar,
    SessionSteps,
    ListRow,
    TabBar,
    TempoRing,
    BeatCounter,
    Stepper,
    Tabs,
    Icon
  } = window.EZDrumSchoolDesignSystem_874c26;
  const A = "../../assets/";
  const NavBar = ({
    title,
    sub,
    right,
    onBack
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "6px 16px 10px",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--text-primary)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: sub ? "center" : "left",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 16
    }
  }, title), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      minWidth: 22,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, right));
  function HomeScreen({
    onStart
  }) {
    const [cur, setCur] = React.useState(5);
    const rows = [["activity", "var(--ez-blue)", "Calentamiento", "3 min"], ["drum", "var(--ez-purple)", "Técnica principal", "15 min"], ["music", "var(--ez-purple)", "Canción", "15 min"], ["star", "var(--ez-green)", "Juego libre", "2 min"]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "4px 16px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: A + "characters/alumno.png",
      size: 34
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 17
      }
    }, "Hola, Mateo!"), /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        borderRadius: 18,
        padding: "18px 16px",
        minHeight: 150,
        background: "linear-gradient(120deg,#FFF6DC 0%,#FFE7A6 100%)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + "characters/alumno.png",
      alt: "",
      style: {
        position: "absolute",
        right: 0,
        top: 8,
        height: 230
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 18
      }
    }, "Sesi\xF3n ", cur), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--text-secondary)"
      }
    }, "Din\xE1mica en la caja"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: "play",
      size: "md",
      onClick: onStart
    }, "Iniciar clase")))), /*#__PURE__*/React.createElement(SessionSteps, {
      total: 20,
      current: cur,
      onSelect: setCur,
      size: 20,
      visible: 6
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15
      }
    }, "Hoy har\xE1s"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, rows.map(([i, c, t, m]) => /*#__PURE__*/React.createElement(ListRow, {
      key: t,
      icon: i,
      color: c,
      title: t,
      meta: m,
      onClick: onStart
    }))));
  }
  function HomeTabs() {
    const [t, setT] = React.useState("inicio");
    return /*#__PURE__*/React.createElement(TabBar, {
      active: t,
      onSelect: setT,
      centerAvatar: A + "characters/alumno.png",
      items: [{
        id: "inicio",
        label: "Inicio",
        icon: "house"
      }, {
        id: "prog",
        label: "Programa",
        icon: "calendar-days"
      }, {
        id: "pro",
        label: "Progreso",
        icon: "chart-no-axes-column"
      }, {
        id: "mas",
        label: "Más",
        icon: "grip"
      }]
    });
  }
  function MissionScreen({
    onBack,
    onNext
  }) {
    const [bpm, setBpm] = React.useState(120);
    const [left, setLeft] = React.useState(180);
    const [playing, setPlaying] = React.useState(true);
    const [beat, setBeat] = React.useState(1);
    React.useEffect(() => {
      if (!playing) return;
      const i = setInterval(() => setBeat(b => b % 4 + 1), 60000 / bpm);
      return () => clearInterval(i);
    }, [playing, bpm]);
    React.useEffect(() => {
      if (!playing) return;
      const i = setInterval(() => setLeft(l => l > 0 ? l - 1 : 180), 1000);
      return () => clearInterval(i);
    }, [playing]);
    const mm = String(Math.floor(left / 60)).padStart(2, "0") + ":" + String(left % 60).padStart(2, "0");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: "stretch"
      }
    }, /*#__PURE__*/React.createElement(NavBar, {
      title: "Misi\xF3n 15",
      right: "1 de 4",
      onBack: onBack
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        lineHeight: 1.5,
        margin: "10px 0 16px"
      }
    }, "Paso 1 \xB7 3 minutos", /*#__PURE__*/React.createElement("br", null), "Calentamiento"), /*#__PURE__*/React.createElement(TempoRing, {
      time: mm,
      bpm: bpm,
      progress: left / 180,
      size: 170,
      stroke: 13
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: playing ? "pause" : "play",
      variant: "primary",
      size: 44,
      onClick: () => setPlaying(!playing),
      style: {
        marginTop: -22,
        position: "relative"
      }
    }), /*#__PURE__*/React.createElement(Stepper, {
      value: bpm,
      onChange: setBpm,
      style: {
        marginTop: 18
      }
    }), /*#__PURE__*/React.createElement(BeatCounter, {
      active: beat,
      size: 38,
      style: {
        marginTop: 20
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        alignSelf: "stretch",
        display: "flex",
        alignItems: "flex-end",
        gap: 6,
        padding: "0 14px 6px"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + "characters/bit.png",
      alt: "Bit",
      style: {
        height: 100
      }
    }), /*#__PURE__*/React.createElement("div", {
      onClick: onNext,
      style: {
        cursor: "pointer",
        flex: 1,
        background: "var(--ez-yellow-50)",
        border: "1px solid var(--ez-yellow-100)",
        borderRadius: 14,
        padding: "10px 12px",
        fontSize: 12,
        lineHeight: 1.45,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("b", null, "\xA1Vamos!"), /*#__PURE__*/React.createElement("br", null), "Mant\xE9n el pulso con calma.")));
  }
  function Notation() {
    const st = "RLLRLRRL".split("");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 18px"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 300 70",
      style: {
        width: "100%"
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "0",
      x2: "300",
      y1: 14 + i * 8,
      y2: 14 + i * 8,
      stroke: "#C9CAD0",
      strokeWidth: "1"
    })), [0, 1, 2, 3].map(g => /*#__PURE__*/React.createElement("rect", {
      key: g,
      x: 14 + g * 72,
      y: "6",
      width: "40",
      height: "4",
      fill: "#17181C"
    })), st.map((s, i) => {
      const x = 14 + Math.floor(i / 2) * 72 + i % 2 * 36;
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("line", {
        x1: x + 4,
        x2: x + 4,
        y1: "8",
        y2: "40",
        stroke: "#17181C",
        strokeWidth: "1.6"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: x,
        cy: "42",
        rx: "5",
        ry: "3.6",
        fill: "#17181C",
        transform: "rotate(-20 " + x + " 42)"
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 6px",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        fontWeight: 700
      }
    }, st.map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: i
    }, s))));
  }
  function RudimentScreen({
    onBack
  }) {
    const [tab, setTab] = React.useState("partitura");
    const [bpm, setBpm] = React.useState(60);
    const [play, setPlay] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(NavBar, {
      title: "Rudimento 1",
      sub: "Golpe simple",
      right: /*#__PURE__*/React.createElement(Icon, {
        name: "settings-2",
        size: 18
      }),
      onBack: onBack
    }), /*#__PURE__*/React.createElement(Tabs, {
      active: tab,
      onChange: setTab,
      items: [{
        id: "practicar",
        label: "Practicar"
      }, {
        id: "partitura",
        label: "Partitura"
      }, {
        id: "video",
        label: "Video"
      }],
      style: {
        margin: "0 16px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 150,
        display: "flex",
        alignItems: "center"
      }
    }, tab === "partitura" ? /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Notation, null)) : /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, "Vista no incluida en la referencia")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 18
      }
    }, bpm, " BPM"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "86%"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "minus",
      variant: "surface",
      size: 36,
      onClick: () => setBpm(Math.max(30, bpm - 5))
    }), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "30",
      max: "160",
      value: bpm,
      onChange: e => setBpm(+e.target.value),
      style: {
        flex: 1,
        accentColor: "var(--ez-yellow-500)"
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "plus",
      variant: "surface",
      size: 36,
      onClick: () => setBpm(Math.min(160, bpm + 5))
    })), /*#__PURE__*/React.createElement(IconButton, {
      icon: play ? "pause" : "play",
      variant: "primary",
      size: 64,
      onClick: () => setPlay(!play),
      style: {
        margin: "8px 0 18px"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ListRow, {
      icon: "trending-up",
      color: "transparent",
      title: /*#__PURE__*/React.createElement("span", {
        style: {
          color: "#fff"
        }
      }, "Escalera de BPM"),
      trailing: /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 16,
        color: "#fff"
      }),
      onClick: () => {},
      style: {
        background: "#1E1F24",
        border: "none"
      }
    }), /*#__PURE__*/React.createElement(ListRow, {
      icon: "trophy",
      color: "transparent",
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "trophy",
        size: 22
      }),
      title: "Mi r\xE9cord",
      chevron: true,
      onClick: () => {}
    })));
  }
  Object.assign(window, {
    HomeScreen,
    HomeTabs,
    MissionScreen,
    RudimentScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ios/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwAudio.jsx
try { (() => {
(() => {
  let ctx, master, noiseBuf;
  function ac() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createDynamicsCompressor();
      master.threshold.value = -18;
      master.ratio.value = 4;
      master.attack.value = .01;
      master.release.value = .1;
      const g = ctx.createGain();
      g.gain.value = .8;
      master.connect(g);
      g.connect(ctx.destination);
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function env(g, t, a, peak, dec) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dec);
  }
  function noise(t, dur, type, freq, q, vol, out) {
    const s = ctx.createBufferSource();
    s.buffer = noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    if (q) f.Q.value = q;
    const g = ctx.createGain();
    env(g, t, .002, vol, dur);
    s.connect(f);
    f.connect(g);
    g.connect(out);
    s.start(t);
    s.stop(t + dur + .05);
  }
  function tone(t, f0, f1, dur, vol, out, type = "sine") {
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + dur * .8);
    const g = ctx.createGain();
    env(g, t, .003, vol, dur);
    o.connect(g);
    g.connect(out);
    o.start(t);
    o.stop(t + dur + .05);
  }
  const KITS = {
    kick: (t, v, o) => {
      tone(t, 150, 42, .45, 1 * v, o);
      noise(t, .02, "lowpass", 1200, 0, .25 * v, o);
    },
    snare: (t, v, o) => {
      tone(t, 240, 160, .12, .45 * v, o, "triangle");
      noise(t, .2, "highpass", 1400, 0, .6 * v, o);
    },
    hihat: (t, v, o) => noise(t, .05, "highpass", 7500, 0, .35 * v, o),
    hihatOpen: (t, v, o) => noise(t, .32, "highpass", 7000, 0, .3 * v, o),
    tom1: (t, v, o) => tone(t, 260, 170, .32, .7 * v, o),
    tom2: (t, v, o) => tone(t, 200, 130, .36, .7 * v, o),
    tom3: (t, v, o) => tone(t, 150, 95, .42, .75 * v, o),
    crash: (t, v, o) => {
      noise(t, 1.4, "highpass", 4500, 0, .35 * v, o);
      noise(t, .9, "bandpass", 9000, 1, .2 * v, o);
    },
    ride: (t, v, o) => {
      noise(t, .6, "bandpass", 8000, 3, .3 * v, o);
      tone(t, 1200, 1150, .5, .05 * v, o, "square");
    },
    click: (t, v, o) => tone(t, 1500, 1400, .04, .5 * v, o, "square"),
    clickAccent: (t, v, o) => tone(t, 2200, 2100, .05, .6 * v, o, "square"),
    stick: (t, v, o) => {
      noise(t, .06, "bandpass", 3200, 2, .7 * v, o);
      tone(t, 900, 500, .05, .2 * v, o, "triangle");
    }
  };
  const EZAudio = {
    now: () => ac().currentTime,
    play(kind, when = 0, vol = 1, bus) {
      const c = ac();
      const t = Math.max(c.currentTime, when || c.currentTime);
      (KITS[kind] || KITS.click)(t, vol, bus || master);
    },
    bus(gain = 1) {
      ac();
      const g = ctx.createGain();
      g.gain.value = gain;
      g.connect(master);
      return g;
    },
    master: () => {
      ac();
      return master;
    }
  };
  window.EZAudio = EZAudio;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwAudio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwCaja.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const TOOLS = [["El Pajarito", "Relajación y control", "Técnica"], ["El Metrónomo", "Tu mejor amigo", "Tiempo"], ["El Semáforo", "Autocontrol", "Mental"], ["La Escalera de BPM", "Sube paso a paso", "Velocidad"], ["El Ascensor", "4 intensidades", "Dinámica"], ["La Ola", "Crescendo y decrescendo", "Dinámica"], ["Manos Separadas", "Control independiente", "Independencia"], ["Pies Poderosos", "Bombo y hi-hat", "Independencia"], ["Ghost Notes", "Caja que habla", "Técnica"], ["Toms Creativos", "Llena tu kit", "Creatividad"], ["Fills con Propósito", "Conecta las secciones", "Creatividad"], ["Control Remoto", "Dirige la dinámica", "Tecnología"], ["Escucha Activa", "Aprende de tus canciones", "Musicalidad"], ["Graba y Analiza", "Mide tu progreso", "Grabación"], ["Notación Básica", "Lo que tocas en papel", "Teoría"], ["Canción por Partes", "Sección por sección", "Estilo"], ["Click en 2 y 4", "Siente el pulso", "Tiempo"], ["Juego Libre", "Tu creatividad", "Creatividad"]].map(([t, s, c], i) => ({
    id: i + 1,
    t,
    s,
    c,
    art: "tools/tool-" + String(i + 1).padStart(2, "0") + ".png"
  }));
  const CAT = {
    "Técnica": ["#E3EBFE", "#1F4FD1"],
    "Tiempo": ["#FDE6E2", "#C2341F"],
    "Mental": ["#EEEDEA", "#4A4C52"],
    "Velocidad": ["#DFF1FB", "#0E6E9E"],
    "Dinámica": ["#EDE5FE", "#6A3BD8"],
    "Independencia": ["#FDE7DD", "#B4480F"],
    "Creatividad": ["#DDF5EF", "#0E7A62"],
    "Tecnología": ["#DDF5E7", "#1D7A47"],
    "Musicalidad": ["#FDE7DD", "#B4480F"],
    "Grabación": ["#FFDCD7", "#B4271A"],
    "Teoría": ["#EEEDEA", "#4A4C52"],
    "Estilo": ["#EDE5FE", "#6A3BD8"]
  };
  const Cat = ({
    c,
    big
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: big ? 28 : 24,
      padding: "0 10px",
      borderRadius: 8,
      background: CAT[c][0],
      color: CAT[c][1],
      fontSize: big ? 13.5 : 12,
      fontWeight: 600
    }
  }, c);
  function ToolCard({
    t,
    i,
    sel,
    onSel
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onSel,
      className: "rv lift tool",
      style: {
        "--i": Math.min(i, 12),
        textAlign: "left",
        padding: 0,
        cursor: "pointer",
        background: "#fff",
        borderRadius: 16,
        border: "1.5px solid " + (sel ? "var(--accent)" : "#EFEBE4"),
        boxShadow: sel ? "0 0 0 3px var(--accent-ring), 0 12px 26px rgba(23,24,28,.10)" : "0 6px 18px rgba(23,24,28,.04)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 104,
        background: CAT[t.c][0],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(t.art),
      alt: "",
      className: "tool-art",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        mixBlendMode: "multiply"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 12px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13.5,
        color: "#17181C"
      }
    }, t.id, ". ", t.t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068"
      }
    }, t.s), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Cat, {
      c: t.c
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 15,
      color: "#8A8D96"
    }))));
  }
  function ToolDetail({
    t,
    onPrev,
    onNext
  }) {
    const [tab, setTab] = React.useState("que");
    React.useEffect(() => setTab("que"), [t.id]);
    const isBird = t.id === 1;
    const ex = [["1. Golpes sueltos", "2 min", "profe/con-mateo.png"], ["2. Rebote controlado", "3 min", "mateo/bateria-tocando.png"], ["3. Acentos suaves", "3 min", "profe/baqueta.png"]];
    const {
      Tabs
    } = window.EZDrumSchoolDesignSystem_874c26;
    return /*#__PURE__*/React.createElement("aside", {
      className: "rv",
      style: {
        "--i": 2,
        background: "#fff",
        borderRadius: 22,
        border: "1px solid #EFEBE4",
        boxShadow: "0 16px 40px rgba(23,24,28,.08)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onPrev,
      "aria-label": "Anterior",
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "1px solid #EFEBE4",
        background: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "#5D6068"
      }
    }, t.id, " de 24"), /*#__PURE__*/React.createElement("button", {
      onClick: onNext,
      "aria-label": "Siguiente",
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "1px solid #EFEBE4",
        background: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "swap",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 210,
        borderRadius: 18,
        overflow: "hidden",
        background: CAT[t.c][0]
      }
    }, /*#__PURE__*/React.createElement(window.Ripples, {
      color: CAT[t.c][1] + "44",
      size: 220,
      style: {
        left: "50%",
        top: "50%",
        marginLeft: -110,
        marginTop: -110
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: img(isBird ? "tools/pajarito-detalle.png" : t.art),
      alt: "",
      className: "floaty",
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        objectFit: isBird ? "cover" : "contain",
        mixBlendMode: "multiply"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26,
        fontWeight: 700
      }
    }, t.id, ". ", t.t), /*#__PURE__*/React.createElement(Cat, {
      c: t.c,
      big: true
    })), /*#__PURE__*/React.createElement(Tabs, {
      active: tab,
      onChange: setTab,
      items: [{
        id: "que",
        label: "Qué es"
      }, {
        id: "como",
        label: "Cómo usarla"
      }, {
        id: "ej",
        label: "Ejercicios"
      }, {
        id: "video",
        label: "Video"
      }]
    }), tab === "que" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "#3F4249"
      }
    }, isBird ? "Te ayuda a tocar relajado, con las manos sueltas y sin tensión. La baqueta se sostiene como un pajarito: firme pero sin apretarlo." : t.s + "."), isBird && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        padding: 14,
        borderRadius: 14,
        background: "var(--accent-soft)",
        fontSize: 13.5,
        lineHeight: 1.5,
        color: "#2C2E33"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lightbulb",
      size: 22,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement("span", null, "Una mano relajada te da m\xE1s control, mejor sonido y menor cansancio."))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#8A8D96",
        padding: "10px 0"
      }
    }, "Contenido no incluido en la referencia.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 16
      }
    }, "Ejercicios sugeridos"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13.5,
        fontWeight: 600
      }
    }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, ex.map(([n, m, p]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      className: "row-hover",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 8,
        borderRadius: 14,
        border: "1px solid #EFEBE4",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: "var(--accent)",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        height: 44,
        borderRadius: 8,
        overflow: "hidden",
        background: "#F1ECE4",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(p),
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13.5
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#8A8D96",
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 12
    }), m)), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16,
      color: "#8A8D96"
    })))), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "play",
      fullWidth: true
    }, "Practicar ahora"));
  }
  function SwCaja() {
    const [f, setF] = React.useState("Todas");
    const [sel, setSel] = React.useState(1);
    const shown = TOOLS.filter(t => f === "Todas" || t.c === f);
    const t = TOOLS.find(x => x.id === sel);
    return /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        padding: 24,
        "--side": "340px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "grid",
      eyebrow: "CAJA DE HERRAMIENTAS",
      title: "Peque\xF1as herramientas, grandes resultados",
      body: "Explora, aprende y practica cada herramienta. Todas te ayudan a tocar con m\xE1s control, musicalidad y confianza.",
      art: "mateo/celebrando-baqueta.png",
      artStyle: {
        right: 150,
        height: 250
      },
      bit: "bit/saludando.png",
      tagline: "\xA1Cada herramienta te hace crecer!",
      height: 240
    }), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1,
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, ["Todas", "Técnica", "Tiempo", "Dinámica", "Independencia", "Creatividad", "Grabación", "Teoría", "Estilo"].map(c => /*#__PURE__*/React.createElement(Chip, {
      key: c,
      active: f === c,
      onClick: () => setF(c)
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
        gap: 14
      }
    }, shown.map((x, i) => /*#__PURE__*/React.createElement(ToolCard, {
      key: x.id,
      t: x,
      i: i + 2,
      sel: x.id === sel,
      onSel: () => setSel(x.id)
    })))), /*#__PURE__*/React.createElement("div", {
      className: "sw-sticky"
    }, /*#__PURE__*/React.createElement(ToolDetail, {
      t: t,
      onPrev: () => setSel(sel > 1 ? sel - 1 : 18),
      onNext: () => setSel(sel < 18 ? sel + 1 : 1)
    })));
  }
  Object.assign(window, {
    SwCaja
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwCaja.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwCamino.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const LEVELS = [{
    n: 1,
    name: "PULSO",
    desc: "Bases sólidas y control del tempo",
    meta: "Semanas 1–4 · Sesiones 1–8",
    done: 4,
    total: 8,
    art: "mateo/cara-audifonos.png",
    tint: "#DCE8FF",
    s: [[1, "Mi punto", "de partida"], [2, "El pulso", "por dentro"], [3, "Groove", "estable"], [4, "Click en", "2 y 4"], [5, "Dinámica", "en la caja"], [6, "Silencio", "y precisión"], [7, "Golpe doble", "y rebote"], [8, "Mi primer", "mini fill"]]
  }, {
    n: 2,
    name: "DINÁMICA",
    desc: "Control de la intensidad y más recursos",
    meta: "Semanas 5–7 · Sesiones 9–15",
    done: 0,
    total: 7,
    art: "mateo/audifonos-bateria.png",
    tint: "#FFEBC7",
    s: [[9, "Ghost notes", "y 4 intensidades"], [10, "Crescendo", "con redoble"], [11, "Tresillos", "en el groove"], [12, "Flams", "y adornos"], [13, "Toms y", "colores"], [14, "Control", "remoto en vivo"], [15, "Mi mini", "solo"]]
  }, {
    n: 3,
    name: "PROPÓSITO",
    desc: "Estilos, lectura y tu propio solo",
    meta: "Semanas 8–10 · Sesiones 16–20",
    done: 0,
    total: 5,
    art: "mateo/celebrando-baqueta.png",
    tint: "#FFDAD5",
    s: [[16, "Leo grooves", "de semicorcheas"], [17, "Cuatro estilos,", "un tempo"], [18, "Secuencias", "como en el culto"], [19, "Mi solo", "y mi firma"], [20, "Toma final", "y celebración"]]
  }];
  const CURRENT = 5;
  function Node({
    n,
    a,
    b,
    x,
    y,
    onPick,
    picked
  }) {
    const done = n < CURRENT,
      cur = n === CURRENT;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onPick(n),
      className: "node" + (cur ? " node-cur" : ""),
      style: {
        position: "absolute",
        left: x + "%",
        top: y,
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        width: 100 / 8.5 + "%",
        minWidth: 64,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: cur ? 46 : 40,
        height: cur ? 46 : 40,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: cur ? 19 : 16,
        background: done ? "#34B76C" : cur ? "var(--accent)" : "#fff",
        color: done || cur ? "#fff" : "#2C2E33",
        boxShadow: cur ? "0 0 0 5px #fff, 0 0 0 7px var(--accent), var(--shadow-glow-accent)" : done ? "0 0 0 4px #fff, 0 4px 10px rgba(52,183,108,.35)" : "0 0 0 4px #fff, 0 0 0 5px #E8E3DA",
        outline: picked ? "2px dashed var(--accent)" : "none",
        outlineOffset: 8
      }
    }, n, done && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        right: -5,
        bottom: -3,
        width: 17,
        height: 17,
        borderRadius: "50%",
        background: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-check",
      size: 16,
      color: "#34B76C"
    })), cur && /*#__PURE__*/React.createElement("span", {
      className: "halo"
    })), cur && /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 14,
        color: "#17181C",
        marginBottom: -4
      }
    }, "Ahora"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        lineHeight: 1.3,
        color: cur ? "#17181C" : "#5D6068",
        textAlign: "center"
      }
    }, a, /*#__PURE__*/React.createElement("br", null), b));
  }
  function Path({
    s,
    onPick,
    picked
  }) {
    const n = s.length,
      xs = s.map((_, i) => 6 + i * (88 / (n - 1))),
      ys = s.map((_, i) => i % 2 ? 26 : 12);
    const P = xs.map((x, i) => [x * 10, ys[i] + 21]),
      dx = (P[1][0] - P[0][0]) / 2;
    const d = "M " + P[0].join(" ") + P.slice(1).map((p, i) => " C " + (P[i][0] + dx) + " " + P[i][1] + ", " + (p[0] - dx) + " " + p[1] + ", " + p[0] + " " + p[1]).join("");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: 1,
        minWidth: 0,
        height: 150
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 1000 150",
      preserveAspectRatio: "none",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: d + " C 990 60, 1010 110, 990 150",
      fill: "none",
      stroke: "#D9D3C8",
      strokeWidth: "2",
      strokeDasharray: "6 7",
      vectorEffect: "non-scaling-stroke",
      className: "march"
    })), s.map(([num, a, b], i) => /*#__PURE__*/React.createElement(Node, {
      key: num,
      n: num,
      a: a,
      b: b,
      x: xs[i],
      y: ys[i],
      onPick: onPick,
      picked: picked === num
    })));
  }
  function LevelCard({
    L,
    i,
    onPick,
    picked
  }) {
    const LP = window.SW_LEVEL[L.n];
    return /*#__PURE__*/React.createElement("section", {
      className: "rv lift",
      style: {
        "--i": i,
        background: "#fff",
        borderRadius: 22,
        border: "1px solid #EFEBE4",
        boxShadow: "0 10px 30px rgba(23,24,28,.05)",
        padding: "16px 20px 10px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        overflow: "hidden",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(LevelPill, {
      n: L.n
    }, "NIVEL ", L.n), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 23,
        fontWeight: 800,
        letterSpacing: ".01em",
        color: "#17181C"
      }
    }, L.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "#5D6068",
        flex: 1
      }
    }, L.desc), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "#8A8D96"
      }
    }, L.meta), /*#__PURE__*/React.createElement(Bar, {
      value: L.done / L.total * 100,
      color: "#34B76C",
      height: 8,
      style: {
        width: 74
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "#5D6068"
      }
    }, L.done, " / ", L.total, " completadas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: 128,
        height: 128,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 6,
        borderRadius: "50%",
        background: "radial-gradient(circle at 40% 35%, #fff, " + LP.solid + "55 70%)"
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: img(L.art),
      alt: "",
      className: "floaty",
      style: {
        position: "absolute",
        left: "50%",
        bottom: 0,
        transform: "translateX(-50%)",
        height: 132,
        maxWidth: 150,
        objectFit: "contain",
        objectPosition: "bottom"
      }
    })), /*#__PURE__*/React.createElement(Path, {
      s: L.s,
      onPick: onPick,
      picked: picked
    })));
  }
  function SessionSheet({
    n,
    onClose
  }) {
    const all = LEVELS.flatMap(L => L.s.map(s => ({
      L,
      s
    })));
    const it = all.find(x => x.s[0] === n);
    if (!it) return null;
    const done = n < CURRENT,
      cur = n === CURRENT;
    return /*#__PURE__*/React.createElement("div", {
      className: "sheet",
      style: {
        position: "fixed",
        right: 28,
        bottom: 28,
        width: 340,
        zIndex: 30,
        background: "#17181C",
        color: "#fff",
        borderRadius: 22,
        padding: 20,
        boxShadow: "0 30px 60px rgba(23,24,28,.35)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(cur ? "bit/celebrando.png" : done ? "bit/corazon.png" : "bit/pensando.png"),
      alt: "",
      style: {
        position: "absolute",
        right: 8,
        top: 8,
        height: 84,
        opacity: .95
      }
    }), /*#__PURE__*/React.createElement(LevelPill, {
      n: it.L.n,
      solid: true
    }, "NIVEL ", it.L.n, " \xB7 ", it.L.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26,
        fontWeight: 700
      }
    }, "Sesi\xF3n ", n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: "rgba(255,255,255,.75)",
        marginTop: -8
      }
    }, it.s[1], " ", it.s[2]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: done ? "rotate-ccw" : cur ? "play" : "lock",
      disabled: !done && !cur
    }, done ? "Repasar" : cur ? "Iniciar sesión" : "Bloqueada"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose,
      style: {
        color: "#fff"
      }
    }, "Cerrar")));
  }
  function Side() {
    const days = ["L", "M", "X", "J", "V", "S", "D"];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      i: 1,
      title: "Mi progreso general"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Ring, {
      value: 25,
      size: 136,
      stroke: 13,
      color: "var(--accent)"
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 32
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: 25,
      suffix: "%"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068"
      }
    }, "5 de 20", /*#__PURE__*/React.createElement("br", null), "sesiones")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        fontSize: 13.5
      }
    }, [["circle-check", "#34B76C", "Completadas", 4], ["circle-dot", "var(--accent)", "En curso", 1], ["circle", "#B4B6BD", "Por hacer", 15]].map(([ic, c, l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      color: c
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: "#3F4249"
      }
    }, l), /*#__PURE__*/React.createElement("b", null, v)))))), /*#__PURE__*/React.createElement(Panel, {
      i: 2,
      title: "Mi racha de pr\xE1ctica"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("music/fuego.png"),
      alt: "",
      className: "flicker",
      style: {
        width: 46
      }
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: 7
    }), " d\xEDas seguidos")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, days.map((d, i) => /*#__PURE__*/React.createElement("span", {
      key: d,
      className: "rv",
      style: {
        "--i": i + 4,
        width: 32,
        height: 32,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12.5,
        fontWeight: 700,
        background: i < 5 ? "#34B76C" : "#F1ECE4",
        color: i < 5 ? "#fff" : "#8A8D96"
      }
    }, d)))), /*#__PURE__*/React.createElement(Panel, {
      i: 3,
      title: "Mis logros",
      action: /*#__PURE__*/React.createElement("a", {
        href: "#",
        style: {
          fontSize: 13.5,
          fontWeight: 600
        }
      }, "Ver todos")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center"
      }
    }, [["badge/pulso-estable.png", "Pulso estable", "3 sesiones"], ["badge/primera-cancion.png", "Primera canción", "completa"], ["badge/cuatro-intensidades.png", "4 intensidades", "S9"]].map(([b, t, s]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "badge-pop",
      style: {
        width: 92,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(b),
      alt: "",
      style: {
        width: 64
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        color: "#17181C"
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#8A8D96"
      }
    }, s))))), /*#__PURE__*/React.createElement(Panel, {
      i: 4,
      title: "Recompensa final",
      icon: /*#__PURE__*/React.createElement("img", {
        src: img("icon3d/trofeo.png"),
        alt: "",
        style: {
          width: 28,
          borderRadius: 6
        }
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600
      }
    }, "Tu toma final"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontSize: 13,
        lineHeight: 1.5,
        color: "#5D6068"
      }
    }, "Al completar las 20 sesiones grabar\xE1s tu versi\xF3n final. \xA1Ser\xE1 incre\xEDble!")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 70,
        height: 84,
        borderRadius: 14,
        background: "#17181C",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "spin-slow",
      style: {
        position: "absolute",
        inset: -20,
        background: "conic-gradient(from 0deg, var(--accent), #7C4DEB, #EE4433, var(--accent))",
        opacity: .55
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 18,
      color: "#17181C"
    }))))));
  }
  function SwCamino() {
    const [picked, setPicked] = React.useState(null);
    const meta = /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        marginTop: 14,
        fontSize: 13.5,
        color: "#3F4249",
        flexWrap: "wrap"
      }
    }, [["calendar", "26 oct – 30 dic 2026"], ["clock", "10 semanas"], ["calendar-check", "20 sesiones"]].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 18
    }), t)));
    return /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        padding: 24,
        "--side": "320px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "staff",
      title: "Tu camino",
      subtitle: "Groove con prop\xF3sito",
      body: "Un recorrido de 20 sesiones para desarrollar tu t\xE9cnica, tu groove y tu propio estilo tocando las canciones que te gustan.",
      meta: meta,
      art: "mateo/bateria-tocando.png",
      artStyle: {
        right: 120,
        height: 270
      },
      bit: "bit/baqueta.png",
      tagline: "\xA1Un paso a la vez!",
      height: 250
    }), LEVELS.map((L, i) => /*#__PURE__*/React.createElement(LevelCard, {
      key: L.n,
      L: L,
      i: i + 1,
      onPick: setPicked,
      picked: picked
    }))), /*#__PURE__*/React.createElement(Side, null), picked && /*#__PURE__*/React.createElement(SessionSheet, {
      key: picked,
      n: picked,
      onClose: () => setPicked(null)
    }));
  }
  Object.assign(window, {
    SwCamino
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwCamino.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwClases.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button,
    Tabs
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const CLASSES = [{
    n: 4,
    t: "Groove básico",
    d: "Jue 22 OCT",
    st: "done",
    th: "clases/thumb-4.png"
  }, {
    n: 5,
    t: "Dinámica en la caja",
    d: "Lun 26 OCT",
    st: "next",
    th: "clases/thumb-5.png"
  }, {
    n: 6,
    t: "Independencia",
    d: "Jue 29 OCT",
    st: "live",
    th: "clases/thumb-6.png"
  }, {
    n: 7,
    t: "Fills con propósito",
    d: "Lun 02 NOV",
    st: "lock",
    th: "clases/thumb-7.png"
  }, {
    n: 8,
    t: "Aplicación en canción",
    d: "Jue 05 NOV",
    st: "lock",
    th: "clases/thumb-8.png"
  }];
  const ST = {
    done: ["Completada", "#DDF5E7", "#1D7A47"],
    next: ["Próxima", "var(--accent)", "#fff"],
    live: ["En curso", "#E3EBFE", "#1F4FD1"],
    lock: ["Bloqueada", "#EEEDEA", "#4A4C52"]
  };
  const MOMENTS = [["Conectamos", "#34B76C", "#E4F6EB"], ["Calentamos", "#3B74F0", "#E3EBFE"], ["Aprendemos", "#F2A516", "#FFF2D6"], ["Practicamos", "#EE4433", "#FFE3DF"], ["Grabamos", "#7C4DEB", "#EDE5FE"], ["Cerramos", "#2E9E6E", "#DDF5EF"]];
  const EVENTS = {
    22: ["#34B76C"],
    24: ["#3B74F0", "#EE4433"],
    26: ["var(--accent)"],
    29: ["#34B76C"],
    30: ["#EE4433"],
    31: ["#7C4DEB"]
  };
  const LEGEND = [["Clase", "#34B76C"], ["Tarea", "#3B74F0"], ["Evaluación", "#EE4433"], ["Evento", "#7C4DEB"]];
  function NextClass({
    onOpen
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "rv lift",
      style: {
        "--i": 2,
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        minHeight: 184,
        borderRadius: 20,
        overflow: "hidden",
        background: "linear-gradient(110deg,#15161B 0%,#1E2030 60%,#2A2140 100%)",
        color: "#fff",
        boxShadow: "0 18px 40px rgba(23,24,28,.18)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("clases/proxima.png"),
      alt: "",
      style: {
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: "46%",
        objectFit: "cover",
        maskImage: "linear-gradient(90deg, transparent, #000 40%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 40%)"
      }
    }), /*#__PURE__*/React.createElement(window.Ripples, {
      color: "rgba(138,164,255,.5)",
      size: 220,
      style: {
        right: 60,
        top: -20
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        padding: "8px 0",
        borderRadius: 14,
        background: "#fff",
        color: "#17181C",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 8px 18px rgba(0,0,0,.3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "Lun"), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 34,
        lineHeight: 1
      }
    }, "26"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        letterSpacing: ".1em"
      }
    }, "OCT")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        opacity: .8
      }
    }, "Sesi\xF3n 5"), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600
      }
    }, "Din\xE1mica en la caja"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 16,
        fontSize: 13,
        opacity: .8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15
    }), "60 min"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-round",
      size: 15
    }), "Presencial")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      onClick: onOpen,
      style: {
        minWidth: 220
      }
    }, "Ver clase"))));
  }
  function Calendar({
    sel,
    onSel
  }) {
    const days = [];
    for (let i = 0; i < 3; i++) days.push(null);
    for (let d = 1; d <= 31; d++) days.push(d);
    return /*#__PURE__*/React.createElement(Panel, {
      i: 3,
      title: "Mi calendario",
      action: /*#__PURE__*/React.createElement("a", {
        href: "#",
        style: {
          fontSize: 13.5,
          fontWeight: 600
        }
      }, "Ver mes"),
      pad: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        rowGap: 4,
        textAlign: "center",
        fontSize: 12.5
      }
    }, ["L", "M", "X", "J", "V", "S", "D"].map(d => /*#__PURE__*/React.createElement("span", {
      key: d,
      style: {
        color: "#8A8D96",
        fontWeight: 600,
        paddingBottom: 4
      }
    }, d)), days.map((d, i) => d ? /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onSel(d),
      className: "cal-day",
      style: {
        position: "relative",
        height: 30,
        border: "none",
        borderRadius: 9,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        fontWeight: d === 26 || d === sel ? 700 : 500,
        background: d === 26 ? "var(--accent)" : d === sel ? "var(--accent-soft)" : "transparent",
        color: d === 26 ? "#fff" : "#2C2E33"
      }
    }, d, EVENTS[d] && d !== 26 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 2,
        display: "flex",
        justifyContent: "center",
        gap: 2
      }
    }, EVENTS[d].map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        width: 5,
        height: 5,
        borderRadius: 3,
        background: c
      }
    })))) : /*#__PURE__*/React.createElement("span", {
      key: i
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
        color: "#5D6068"
      }
    }, LEGEND.map(([l, c]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 4,
        background: c
      }
    }), l))));
  }
  function ClassCard({
    c,
    i,
    sel,
    onSel
  }) {
    const [l, bg, fg] = ST[c.st];
    return /*#__PURE__*/React.createElement("button", {
      onClick: onSel,
      className: "rv lift tool",
      style: {
        "--i": i,
        textAlign: "left",
        padding: 0,
        cursor: "pointer",
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "1.5px solid " + (sel ? "var(--accent)" : "#EFEBE4"),
        boxShadow: sel ? "0 0 0 3px var(--accent-ring), 0 12px 26px rgba(23,24,28,.10)" : "0 6px 18px rgba(23,24,28,.04)",
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 92,
        overflow: "hidden",
        background: "#17181C"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(c.th),
      alt: "",
      className: "tool-art",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: c.st === "lock" ? "grayscale(.6) brightness(.7)" : "none"
      }
    }), c.st === "done" && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "#34B76C",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    })), c.st === "lock" && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: "rgba(0,0,0,.45)",
        backdropFilter: "blur(4px)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16,
      color: "#fff"
    }))), c.st === "live" && /*#__PURE__*/React.createElement("span", {
      className: "ping",
      style: {
        position: "absolute",
        top: 10,
        left: 10,
        width: 10,
        height: 10,
        borderRadius: 5,
        background: "#3B74F0"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 12px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068"
      }
    }, "Sesi\xF3n ", c.n), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 14,
        color: "#17181C",
        lineHeight: 1.25,
        minHeight: 35
      }
    }, c.t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068",
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 13
    }), c.d), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068",
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 13
    }), "60 min \xB7 Presencial"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 6,
        alignSelf: "flex-start",
        height: 24,
        padding: "0 10px",
        borderRadius: 8,
        background: bg,
        color: fg,
        fontSize: 12,
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, c.st === "lock" && /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 12
    }), l)));
  }
  function Moments() {
    const [a, setA] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => setA(x => (x + 1) % 6), 1800);
      return () => clearInterval(t);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, MOMENTS.map(([l, c, bg], i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: l
    }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      color: i <= a ? c : "#C9CAD0",
      style: {
        transition: "background-color .4s"
      }
    }), /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setA(i),
      className: "rv",
      style: {
        "--i": i + 6,
        flex: 1,
        minWidth: 0,
        borderRadius: 14,
        overflow: "hidden",
        background: "#fff",
        border: "1.5px solid " + (i === a ? c : "#EFEBE4"),
        boxShadow: i === a ? "0 12px 24px " + c + "40" : "none",
        transform: i === a ? "translateY(-4px)" : "none",
        transition: "all .45s cubic-bezier(.34,1.56,.64,1)",
        cursor: "default"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 78,
        background: bg,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("clases/momento-" + (i + 1) + ".png"),
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: i === a ? "scale(1.08)" : "none",
        transition: "transform .6s"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 10px",
        fontSize: 13,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: c,
        color: "#fff",
        fontSize: 12,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, i + 1), l)))));
  }
  function Detail({
    c
  }) {
    const [tab, setTab] = React.useState("res");
    const [goals, setGoals] = React.useState([true, true, false]);
    React.useEffect(() => setTab("res"), [c.n]);
    const mats = [["kit/bateria-electronica.png", "Batería electrónica"], ["kit/baquetas.png", "Baquetas"], ["music/metronomo.png", "Metrónomo"], ["kit/tablet.png", "Tableta"]];
    const G = ["Controlar volumen y acentos", "Aplicar dinámica en un groove simple", "Escuchar y corregir con grabación"];
    return /*#__PURE__*/React.createElement("aside", {
      className: "rv",
      style: {
        "--i": 2,
        background: "#fff",
        borderRadius: 22,
        border: "1px solid #EFEBE4",
        boxShadow: "0 16px 40px rgba(23,24,28,.08)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 20
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600
      }
    }, "Detalle de la clase")), /*#__PURE__*/React.createElement("div", {
      key: c.n,
      className: "swap",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 150,
        borderRadius: 16,
        overflow: "hidden",
        background: "#17181C"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(c.th),
      alt: "",
      className: "kenburns",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 10,
        left: 10,
        height: 24,
        padding: "0 10px",
        borderRadius: 7,
        background: ST[c.st][1],
        color: ST[c.st][2],
        fontSize: 11.5,
        fontWeight: 800,
        letterSpacing: ".04em",
        display: "inline-flex",
        alignItems: "center"
      }
    }, ST[c.st][0].toUpperCase()), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "play-pulse",
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "rgba(255,255,255,.22)",
        backdropFilter: "blur(6px)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 20,
      color: "#fff"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: "#5D6068"
      }
    }, "Sesi\xF3n ", c.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1.15
      }
    }, c.t)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "center",
        fontSize: 13,
        color: "#3F4249",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15
    }), "60 min"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-round",
      size: 15
    }), "Presencial"), /*#__PURE__*/React.createElement(LevelPill, {
      n: 1
    }, "Nivel 1 \xB7 PULSO")), /*#__PURE__*/React.createElement(Tabs, {
      active: tab,
      onChange: setTab,
      items: [{
        id: "res",
        label: "Resumen"
      }, {
        id: "act",
        label: "Actividades"
      }, {
        id: "mat",
        label: "Materiales"
      }, {
        id: "tar",
        label: "Tarea"
      }]
    }), tab === "res" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: "#3F4249"
      }
    }, "Hoy trabajaremos el control de la din\xE1mica en la caja para que tu groove suene m\xE1s musical y expresivo."), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 14.5
      }
    }, "Objetivos de la clase"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, G.map((g, i) => /*#__PURE__*/React.createElement("button", {
      key: g,
      onClick: () => setGoals(x => x.map((v, j) => j === i ? !v : v)),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        color: "#3F4249",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: goals[i] ? "var(--accent)" : "#fff",
        border: "1.5px solid " + (goals[i] ? "var(--accent)" : "#C9CAD0"),
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .25s cubic-bezier(.34,1.56,.64,1)",
        transform: goals[i] ? "scale(1)" : "scale(.9)"
      }
    }, goals[i] && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        textDecoration: goals[i] ? "none" : "none"
      }
    }, g)))), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 14.5
      }
    }, "Materiales"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 8
      }
    }, mats.map(([p, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      className: "badge-pop",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        textAlign: "center",
        fontSize: 11.5,
        color: "#5D6068"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: "100%",
        height: 58,
        borderRadius: 12,
        background: "#F7F4EE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(p),
      alt: "",
      style: {
        maxWidth: "80%",
        maxHeight: 46,
        mixBlendMode: "multiply"
      }
    })), l)))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#8A8D96",
        padding: "16px 0"
      }
    }, "Contenido no incluido en la referencia.")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "play",
      fullWidth: true,
      disabled: c.st === "lock"
    }, c.st === "done" ? "Repasar clase" : "Iniciar clase"));
  }
  function SwClases() {
    const [tab, setTab] = React.useState("prox");
    const [sel, setSel] = React.useState(5);
    const [day, setDay] = React.useState(26);
    const c = CLASSES.find(x => x.n === sel);
    const TABS = [["prox", "calendar", "Próximas clases"], ["mis", "calendar-days", "Mis clases"], ["tar", "clipboard-check", "Tareas"], ["grab", "film", "Grabaciones"], ["eval", "file-check", "Evaluaciones"]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "night",
      title: "Clases",
      subtitle: "Aqu\xED empiezan tus grandes momentos.",
      art: "escena/bateria-riendo.png",
      artStyle: {
        right: 250,
        height: 250,
        bottom: -4
      },
      bit: "bit/animado.png",
      bitStyle: {
        right: 170,
        height: 120
      },
      tagline: "\xA1Cada clase te acerca a tu mejor versi\xF3n!",
      height: 230
    }), /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        "--side": "350px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1,
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        padding: 5,
        borderRadius: 16,
        background: "#fff",
        border: "1px solid #EFEBE4",
        alignSelf: "flex-start"
      }
    }, TABS.map(([id, ic, l]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setTab(id),
      style: {
        height: 40,
        padding: "0 14px",
        borderRadius: 12,
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        fontWeight: tab === id ? 700 : 500,
        background: tab === id ? "var(--accent)" : "transparent",
        color: tab === id ? "#fff" : "#3F4249",
        boxShadow: tab === id ? "var(--shadow-glow-accent)" : "none",
        transition: "all .25s"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16
    }), l))), tab === "prox" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.5fr) minmax(260px,1fr)",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600
      }
    }, "Tu pr\xF3xima clase"), /*#__PURE__*/React.createElement(NextClass, {
      onOpen: () => setSel(5)
    })), /*#__PURE__*/React.createElement(Calendar, {
      sel: day,
      onSel: setDay
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600
      }
    }, "Todas tus clases"), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13.5,
        fontWeight: 600
      }
    }, "Ver todas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
        gap: 12
      }
    }, CLASSES.map((x, i) => /*#__PURE__*/React.createElement(ClassCard, {
      key: x.n,
      c: x,
      i: i + 3,
      sel: x.n === sel,
      onSel: () => setSel(x.n)
    }))), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600
      }
    }, "Momentos de una clase"), /*#__PURE__*/React.createElement(Moments, null)) : /*#__PURE__*/React.createElement(window.SwPlaceholder, {
      label: TABS.find(t => t[0] === tab)[2]
    })), /*#__PURE__*/React.createElement("div", {
      className: "sw-sticky"
    }, /*#__PURE__*/React.createElement(Detail, {
      c: c
    }))));
  }
  Object.assign(window, {
    SwClases
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwClases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwDaw.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const N = 32;
  const TRACKS = [{
    id: "hihat",
    l: "Hi-hat",
    c: "#E9A21A",
    k: "hihat",
    key: "D"
  }, {
    id: "caja",
    l: "Caja",
    c: "#EE4433",
    k: "snare",
    key: "S"
  }, {
    id: "bombo",
    l: "Bombo",
    c: "#2F7FD8",
    k: "kick",
    key: "A"
  }, {
    id: "tom1",
    l: "Tom 1",
    ic: "tom",
    c: "#2E9E6E",
    k: "tom1",
    key: "F"
  }, {
    id: "tom2",
    l: "Tom 2",
    ic: "tom",
    c: "#2E9E6E",
    k: "tom2",
    key: "G"
  }, {
    id: "tom3",
    l: "Tom 3",
    ic: "tom",
    c: "#2E9E6E",
    k: "tom3",
    key: "H"
  }, {
    id: "crash",
    l: "Crash",
    c: "#A79E92",
    k: "crash",
    key: "J"
  }, {
    id: "ride",
    l: "Ride",
    c: "#A79E92",
    k: "ride",
    key: "K"
  }];
  const pat = o => TRACKS.map(t => Array.from({
    length: N
  }, (_, i) => (o[t.id] || []).includes(i)));
  const range = (a, b, s = 1) => {
    const r = [];
    for (let i = a; i < b; i += s) r.push(i);
    return r;
  };
  const PRESETS = {
    "Groove básico": {
      bpm: 80,
      p: {
        hihat: range(0, 32, 2),
        caja: [4, 12, 20, 28],
        bombo: [0, 8, 16, 24],
        crash: [0]
      }
    },
    "Worship 1": {
      bpm: 90,
      p: {
        hihat: range(0, 32, 2),
        caja: [4, 12, 20, 28],
        bombo: [0, 6, 10, 16, 22, 26],
        tom1: [29],
        tom2: [30],
        tom3: [31],
        crash: [0, 16]
      }
    },
    "Pop 1": {
      bpm: 100,
      p: {
        hihat: range(0, 32, 1),
        caja: [4, 12, 20, 28, 30],
        bombo: [0, 3, 8, 11, 16, 19, 24, 27],
        crash: [0]
      }
    },
    "Balada 6/8": {
      bpm: 70,
      p: {
        ride: range(0, 24, 2),
        caja: [6, 18],
        bombo: [0, 12],
        tom3: [22],
        tom2: [23],
        crash: [0]
      }
    },
    "Urbano": {
      bpm: 90,
      p: {
        hihat: [0, 2, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 23, 24, 26, 28, 30],
        caja: [8, 24],
        bombo: [0, 3, 6, 10, 16, 19, 22, 26]
      }
    }
  };
  const DEFAULT = pat({
    hihat: range(0, 32, 2),
    caja: [4, 9, 12, 20, 25, 28],
    bombo: [0, 6, 8, 16, 22, 24, 26],
    tom1: [29],
    tom2: [30],
    tom3: [31],
    crash: [0, 16],
    ride: [10, 26]
  });
  const wave = (seed, n = 40) => Array.from({
    length: n
  }, (_, i) => 3 + Math.abs(Math.sin(i * (0.5 + seed * .13)) * 10 + Math.sin(i * (1.7 + seed * .2)) * 6) * (1 - Math.abs(i - n / 2) / n));
  function Wave({
    seed,
    color,
    n,
    h = 22,
    playing
  }) {
    const b = React.useMemo(() => wave(seed, n), [seed, n]);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 1.5,
        height: h,
        flex: 1,
        minWidth: 0
      }
    }, b.map((v, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: playing ? "eqw" : "",
      style: {
        flex: 1,
        height: Math.min(h, v * h / 20),
        borderRadius: 1,
        background: color,
        animationDelay: i % 6 * .08 + "s"
      }
    })));
  }
  function Knob({
    label,
    value,
    min,
    max,
    fmt,
    onChange,
    color = "var(--accent)"
  }) {
    const drag = React.useRef(null);
    const pct = (value - min) / (max - min),
      ang = -135 + pct * 270;
    const down = e => {
      drag.current = {
        y: e.clientY,
        v: value
      };
      const mv = ev => {
        const d = (drag.current.y - ev.clientY) / 150 * (max - min);
        onChange(Math.max(min, Math.min(max, drag.current.v + d)));
      };
      const up = () => {
        window.removeEventListener("pointermove", mv);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", mv);
      window.addEventListener("pointerup", up);
    };
    const r = 26,
      c = 2 * Math.PI * r,
      arc = c * .75;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        userSelect: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onPointerDown: down,
      style: {
        position: "relative",
        width: 64,
        height: 64,
        cursor: "ns-resize",
        touchAction: "none"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "64",
      height: "64",
      style: {
        position: "absolute",
        inset: 0,
        transform: "rotate(135deg)"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "32",
      r: r,
      fill: "none",
      stroke: "#E8E3DA",
      strokeWidth: "5",
      strokeDasharray: arc + " " + c,
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32",
      cy: "32",
      r: r,
      fill: "none",
      stroke: color,
      strokeWidth: "5",
      strokeDasharray: arc * pct + " " + c,
      strokeLinecap: "round"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 10,
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 30%, #3A3C44, #15161B)",
        boxShadow: "0 4px 10px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.15)",
        transform: "rotate(" + ang + "deg)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        left: "50%",
        top: 5,
        width: 3,
        height: 12,
        marginLeft: -1.5,
        borderRadius: 2,
        background: "#fff"
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "#17181C",
        fontWeight: 600
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068",
        marginTop: -4
      }
    }, fmt(value)));
  }
  function Seq({
    grid,
    step,
    cw,
    onCell,
    flashes,
    tracksState,
    setTrack,
    tool
  }) {
    const painting = React.useRef(null);
    React.useEffect(() => {
      const up = () => painting.current = null;
      window.addEventListener("pointerup", up);
      return () => window.removeEventListener("pointerup", up);
    }, []);
    const anySolo = tracksState.some(t => t.solo);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        background: "#fff",
        borderRadius: 18,
        border: "1px solid #EFEBE4",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        width: 250,
        borderRight: "1px solid #EFEBE4"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 30,
        borderBottom: "1px solid #EFEBE4"
      }
    }), TRACKS.map((t, r) => {
      const st = tracksState[r],
        dim = st.mute || anySolo && !st.solo;
      return /*#__PURE__*/React.createElement("div", {
        key: t.id,
        style: {
          height: 42,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 10px",
          borderBottom: "1px solid #F3EFE8",
          opacity: dim ? .45 : 1,
          transition: "opacity .2s"
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: img("daw/" + (t.ic || t.id) + ".png"),
        alt: "",
        className: flashes[r] ? "hitpop" : "",
        style: {
          width: 32,
          height: 28,
          objectFit: "contain",
          borderRadius: 8
        }
      }), /*#__PURE__*/React.createElement("b", {
        style: {
          flex: 1,
          fontSize: 13.5,
          fontWeight: 600
        }
      }, t.l), [["S", "solo", "#F2A516"], ["M", "mute", "#EE4433"]].map(([L, k, c]) => /*#__PURE__*/React.createElement("button", {
        key: L,
        onClick: () => setTrack(r, {
          [k]: !st[k]
        }),
        style: {
          width: 22,
          height: 22,
          borderRadius: 6,
          border: "1px solid " + (st[k] ? c : "#E5DFD5"),
          background: st[k] ? c : "#fff",
          color: st[k] ? "#fff" : "#5D6068",
          fontSize: 11,
          fontWeight: 700,
          cursor: "pointer",
          padding: 0
        }
      }, L)), /*#__PURE__*/React.createElement("input", {
        type: "range",
        min: "0",
        max: "1",
        step: ".01",
        value: st.vol,
        onChange: e => setTrack(r, {
          vol: +e.target.value
        }),
        style: {
          width: 54,
          accentColor: t.c
        }
      }));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        overflowX: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: N * cw
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 30,
        display: "flex",
        borderBottom: "1px solid #EFEBE4",
        position: "relative"
      }
    }, range(0, N).map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: cw,
        flex: "none",
        borderLeft: i % 4 ? "1px solid transparent" : "1px solid #D9D3C8",
        fontSize: 11.5,
        color: "#5D6068",
        padding: "6px 0 0 4px",
        height: i % 4 ? 10 : 30,
        alignSelf: "flex-end",
        boxSizing: "border-box",
        borderLeftColor: i % 4 ? "#EAE5DC" : "#C9C2B6"
      }
    }, i % 4 ? "" : i / 4 + 1))), TRACKS.map((t, r) => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: {
        height: 42,
        display: "flex",
        borderBottom: "1px solid #F3EFE8",
        background: r === 0 ? "rgba(233,162,26,.06)" : "transparent"
      }
    }, grid[r].map((on, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      onPointerDown: e => {
        e.preventDefault();
        const v = tool === "erase" ? false : !on;
        painting.current = v;
        onCell(r, i, v);
      },
      onPointerEnter: () => painting.current !== null && onCell(r, i, painting.current),
      style: {
        width: cw,
        flex: "none",
        height: "100%",
        borderLeft: "1px solid " + (i % 4 ? "#F3EFE8" : "#E2DCD1"),
        background: Math.floor(i / 4) % 2 ? "rgba(23,24,28,.018)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: tool === "erase" ? "not-allowed" : "pointer",
        boxSizing: "border-box"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      className: i === step ? "cellhit" : "cellin",
      style: {
        width: t.id.match(/crash|ride/) ? cw * .45 : cw - 6,
        height: t.id.match(/crash|ride/) ? cw * .45 : 22,
        maxWidth: 22,
        borderRadius: t.id.match(/crash|ride/) ? 3 : 4,
        transform: t.id.match(/crash|ride/) ? "rotate(45deg)" : "none",
        background: t.c,
        boxShadow: i === step ? "0 0 14px " + t.c : "inset 0 -2px 0 rgba(0,0,0,.15)"
      }
    }))))), step >= 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 18,
        bottom: 0,
        left: step * cw + cw / 2,
        width: 2,
        marginLeft: -1,
        background: "#17181C",
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        top: -4,
        left: -5,
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: "9px solid #17181C"
      }
    })))));
  }
  const PADS = [["crash", 14, 6], ["hihat", 2, 30], ["tom1", 30, 18], ["tom2", 54, 14], ["ride", 78, 4], ["tom3", 74, 32], ["caja", 24, 54], ["bombo", 50, 72]];
  function VirtualKit({
    hit,
    flashes
  }) {
    return /*#__PURE__*/React.createElement(Panel, {
      i: 3,
      title: "Instrumento virtual",
      pad: 16,
      action: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          color: "#8A8D96"
        }
      }, "Teclas A S D F G H J K")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 250
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("kit/bateria-electronica.png"),
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "contain",
        mixBlendMode: "multiply"
      }
    }), PADS.map(([id, x, y]) => {
      const r = TRACKS.findIndex(t => t.id === id),
        t = TRACKS[r];
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onPointerDown: () => hit(r),
        className: flashes[r] ? "hitpop" : "",
        style: {
          position: "absolute",
          left: x + "%",
          top: y + "%",
          height: 28,
          padding: "0 12px",
          borderRadius: 99,
          border: "2px solid #fff",
          background: t.c,
          color: "#fff",
          fontFamily: "var(--font-body)",
          fontSize: 12.5,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: flashes[r] ? "0 0 0 8px " + t.c + "33, 0 0 24px " + t.c : "0 4px 10px rgba(23,24,28,.2)",
          transition: "box-shadow .15s"
        }
      }, t.l, /*#__PURE__*/React.createElement("sup", {
        style: {
          marginLeft: 6,
          fontSize: 9,
          opacity: .8
        }
      }, t.key));
    })));
  }
  function Effects() {
    const [fx, setFx] = React.useState("comp");
    const [on, setOn] = React.useState(true);
    const [k, setK] = React.useState({
      th: -18,
      ra: 4,
      at: 10,
      re: 100
    });
    React.useEffect(() => {
      const m = window.EZAudio.master();
      const t = m.context.currentTime;
      m.threshold.setValueAtTime(on ? k.th : 0, t);
      m.ratio.setValueAtTime(on ? k.ra : 1, t);
      m.attack.setValueAtTime(k.at / 1000, t);
      m.release.setValueAtTime(k.re / 1000, t);
    }, [k, on]);
    const FX = [["comp", "gauge", "Compresor"], ["eq", "audio-lines", "EQ"], ["rev", "waves", "Reverb"], ["cho", "orbit", "Chorus"]];
    const pts = Array.from({
      length: 30
    }, (_, i) => {
      const x = i / 29,
        inDb = -60 + x * 60,
        out = inDb > k.th ? k.th + (inDb - k.th) / k.ra : inDb;
      return [x * 100, 60 - (out + 60)];
    });
    return /*#__PURE__*/React.createElement(Panel, {
      i: 4,
      title: "Efectos",
      pad: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, FX.map(([id, ic, l]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setFx(id),
      style: {
        height: 44,
        padding: "0 14px",
        borderRadius: 12,
        border: "2px solid " + (fx === id ? "var(--accent)" : "transparent"),
        background: "#17181C",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: fx === id ? "var(--shadow-glow-accent)" : "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      color: fx === id ? "#8AA4FF" : "#fff"
    }), l)), /*#__PURE__*/React.createElement("button", {
      "aria-label": "A\xF1adir efecto",
      style: {
        width: 52,
        height: 44,
        borderRadius: 12,
        border: "2px dashed #D9D3C8",
        background: "transparent",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }))), fx === "comp" ? /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 16,
        background: "#F7F4EE",
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 16
      }
    }, "Compresor"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOn(!on),
      "aria-label": "Activar compresor",
      style: {
        width: 40,
        height: 22,
        borderRadius: 11,
        border: "none",
        background: on ? "var(--accent)" : "#D9D3C8",
        position: "relative",
        cursor: "pointer",
        transition: "background .2s"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        top: 3,
        left: on ? 21 : 3,
        width: 16,
        height: 16,
        borderRadius: 8,
        background: "#fff",
        transition: "left .25s cubic-bezier(.34,1.56,.64,1)"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        opacity: on ? 1 : .45
      }
    }, /*#__PURE__*/React.createElement(Knob, {
      label: "Umbral",
      value: k.th,
      min: -60,
      max: 0,
      fmt: v => Math.round(v) + " dB",
      onChange: v => setK({
        ...k,
        th: v
      })
    }), /*#__PURE__*/React.createElement(Knob, {
      label: "Ratio",
      value: k.ra,
      min: 1,
      max: 20,
      fmt: v => v.toFixed(0) + ":1",
      onChange: v => setK({
        ...k,
        ra: v
      })
    }), /*#__PURE__*/React.createElement(Knob, {
      label: "Ataque",
      value: k.at,
      min: 0,
      max: 100,
      fmt: v => Math.round(v) + " ms",
      onChange: v => setK({
        ...k,
        at: v
      })
    }), /*#__PURE__*/React.createElement(Knob, {
      label: "Liberaci\xF3n",
      value: k.re,
      min: 10,
      max: 1000,
      fmt: v => Math.round(v) + " ms",
      onChange: v => setK({
        ...k,
        re: v
      })
    }), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 100 60",
      style: {
        width: 110,
        height: 76,
        borderRadius: 10,
        background: "#15161B",
        flex: "none"
      }
    }, [15, 30, 45].map(y => /*#__PURE__*/React.createElement("line", {
      key: y,
      x1: "0",
      x2: "100",
      y1: y,
      y2: y,
      stroke: "#2A2C33"
    })), /*#__PURE__*/React.createElement("polyline", {
      points: pts.map(p => p.join(",")).join(" "),
      fill: "none",
      stroke: "#8AA4FF",
      strokeWidth: "2"
    })))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#8A8D96",
        padding: 16
      }
    }, "Panel no incluido en la referencia."));
  }
  function Library({
    loadPreset,
    active,
    playing
  }) {
    const [tab, setTab] = React.useState("son");
    const [cat, setCat] = React.useState("Todos");
    const [q, setQ] = React.useState("");
    const [favs, setFavs] = React.useState({
      "Hi-hat cerrado": 1,
      "Caja acústica": 1,
      "Caja electrónica": 1,
      "Bombo profundo": 1,
      "Balada 6/8": 1
    });
    const [pl, setPl] = React.useState(null);
    const SOUNDS = [["Hi-hat cerrado", "hihat", "#E9A21A"], ["Hi-hat abierto", "hihatOpen", "#E9A21A"], ["Caja acústica", "snare", "#EE4433"], ["Caja electrónica", "snare", "#EE4433"], ["Bombo profundo", "kick", "#2F7FD8"], ["Tom 1", "tom1", "#2E9E6E"], ["Tom 2", "tom2", "#2E9E6E"]].filter(s => s[0].toLowerCase().includes(q.toLowerCase()));
    const LOOPS = [["Groove básico", "#E9A21A", "80 BPM · 4/4"], ["Worship 1", "#2F7FD8", "90 BPM · 4/4"], ["Pop 1", "#EE4433", "100 BPM · 4/4"], ["Balada 6/8", "#2E9E6E", "70 BPM · 6/8"], ["Urbano", "#7C4DEB", "90 BPM · 4/4"]];
    const fav = n => setFavs(f => ({
      ...f,
      [n]: !f[n]
    }));
    const Heart = ({
      n
    }) => /*#__PURE__*/React.createElement("button", {
      onClick: () => fav(n),
      className: "heart",
      "aria-label": "Favorito",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 4,
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 17,
      color: favs[n] ? "#EE4433" : "#8A8D96"
    }));
    const Seg = ({
      items,
      v,
      set
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        padding: 3,
        borderRadius: 12,
        background: "#F1ECE4"
      }
    }, items.map(([id, l]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => set(id),
      style: {
        flex: 1,
        height: 34,
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: v === id ? 700 : 500,
        background: v === id ? "#17181C" : "transparent",
        color: v === id ? "#fff" : "#3F4249",
        transition: "all .2s"
      }
    }, l)));
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      i: 2,
      pad: 14
    }, /*#__PURE__*/React.createElement(Seg, {
      items: [["son", "Sonidos"], ["pis", "Pistas"], ["mis", "Mis loops"]],
      v: tab,
      set: setTab
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 38,
        padding: "0 12px",
        borderRadius: 12,
        background: "#F7F4EE",
        color: "#8A8D96"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }), /*#__PURE__*/React.createElement("input", {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Buscar sonidos...",
      style: {
        flex: 1,
        minWidth: 0,
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: "var(--font-body)",
        fontSize: 13.5
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, ["Todos", "Batería", "Percusión", "Loops", "Efectos"].map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setCat(c),
      style: {
        height: 30,
        padding: "0 12px",
        borderRadius: 9,
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        fontWeight: cat === c ? 700 : 500,
        background: cat === c ? "var(--accent)" : "#F1ECE4",
        color: cat === c ? "#fff" : "#3F4249"
      }
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, tab === "son" && SOUNDS.map(([n, k, c], i) => /*#__PURE__*/React.createElement("div", {
      key: n,
      className: "row-hover",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 6px",
        borderTop: i ? "1px solid #F3EFE8" : "none",
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        window.EZAudio.play(k);
        setPl(n);
        setTimeout(() => setPl(p => p === n ? null : p), 400);
      },
      "aria-label": "Escuchar",
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: "1px solid #E5DFD5",
        background: pl === n ? "var(--accent)" : "#fff",
        color: pl === n ? "#fff" : "#17181C",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 13
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 110,
        fontSize: 13.5,
        flex: "none"
      }
    }, n), /*#__PURE__*/React.createElement(Wave, {
      seed: i + 1,
      color: c,
      n: 26,
      h: 20,
      playing: pl === n
    }), /*#__PURE__*/React.createElement(Heart, {
      n: n
    }))), tab !== "son" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#8A8D96",
        padding: 12
      }
    }, "Vista no incluida en la referencia."))), /*#__PURE__*/React.createElement(Panel, {
      i: 3,
      title: "Loops / Pistas",
      pad: 14
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, LOOPS.map(([n, c, m], i) => {
      const on = active === n;
      return /*#__PURE__*/React.createElement("div", {
        key: n,
        className: "row-hover",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 6px",
          borderRadius: 10,
          background: on ? "var(--accent-soft)" : "transparent"
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => loadPreset(n),
        "aria-label": "Cargar loop",
        style: {
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "none",
          background: on ? "var(--accent)" : "#17181C",
          color: "#fff",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: on && playing ? "pause" : "play",
        size: 13
      })), /*#__PURE__*/React.createElement(Wave, {
        seed: i * 3 + 2,
        color: c,
        n: 34,
        h: 24,
        playing: on && playing
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          width: 92,
          display: "flex",
          flexDirection: "column",
          flex: "none"
        }
      }, /*#__PURE__*/React.createElement("b", {
        style: {
          fontSize: 13
        }
      }, n), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11.5,
          color: "#8A8D96"
        }
      }, m)), /*#__PURE__*/React.createElement(Heart, {
        n: n
      }));
    }))));
  }
  function SwDaw() {
    const [grid, setGrid] = React.useState(DEFAULT);
    const [hist, setHist] = React.useState({
      past: [],
      future: []
    });
    const [bpm, setBpm] = React.useState(90);
    const [sig, setSig] = React.useState("4 / 4");
    const [playing, setPlaying] = React.useState(false);
    const [rec, setRec] = React.useState(false);
    const [step, setStep] = React.useState(-1);
    const [tool, setTool] = React.useState("pencil");
    const [cw, setCw] = React.useState(24);
    const [view, setView] = React.useState("editor");
    const [active, setActive] = React.useState(null);
    const [toast, setToast] = React.useState(null);
    const [flashes, setFlashes] = React.useState({});
    const [tracks, setTracks] = React.useState(TRACKS.map((t, i) => ({
      vol: i >= 6 ? .55 : .8,
      mute: false,
      solo: false
    })));
    const R = React.useRef({});
    R.current = {
      grid,
      bpm,
      tracks,
      rec,
      step
    };
    const sched = React.useRef({
      t: null,
      next: 0,
      i: 0
    });
    const buses = React.useRef(null);
    const say = m => {
      setToast(m);
      clearTimeout(say.t);
      say.t = setTimeout(() => setToast(null), 1800);
    };
    const flash = r => {
      setFlashes(f => ({
        ...f,
        [r]: Date.now()
      }));
      setTimeout(() => setFlashes(f => {
        const n = {
          ...f
        };
        delete n[r];
        return n;
      }), 160);
    };
    const audible = r => {
      const ts = R.current.tracks,
        anySolo = ts.some(t => t.solo);
      return !ts[r].mute && (!anySolo || ts[r].solo);
    };
    const getBus = r => {
      if (!buses.current) buses.current = TRACKS.map(() => window.EZAudio.bus(1));
      buses.current.forEach((b, i) => b.gain.value = R.current.tracks[i].vol);
      return buses.current[r];
    };
    const commit = g => {
      setHist(h => ({
        past: [...h.past.slice(-30), grid],
        future: []
      }));
      setGrid(g);
    };
    const onCell = (r, i, v) => {
      if (grid[r][i] === v) return;
      commit(grid.map((row, rr) => rr === r ? row.map((c, ii) => ii === i ? v : c) : row));
      if (v) {
        window.EZAudio.play(TRACKS[r].k, 0, .8, getBus(r));
        flash(r);
      }
    };
    const hit = r => {
      window.EZAudio.play(TRACKS[r].k, 0, 1, getBus(r));
      flash(r);
      if (R.current.rec && R.current.step >= 0) {
        const s = R.current.step;
        setGrid(g => g.map((row, rr) => rr === r ? row.map((c, ii) => ii === s ? true : c) : row));
      }
    };
    const stop = () => {
      clearInterval(sched.current.t);
      sched.current.t = null;
      setPlaying(false);
      setStep(-1);
      setRec(false);
    };
    const start = () => {
      if (sched.current.t) return;
      const A = window.EZAudio;
      sched.current.next = A.now() + .06;
      sched.current.i = Math.max(0, R.current.step);
      sched.current.t = setInterval(() => {
        const now = A.now();
        while (sched.current.next < now + .12) {
          const i = sched.current.i,
            t = sched.current.next,
            dur = 60 / R.current.bpm / 4;
          R.current.grid.forEach((row, r) => {
            if (row[i] && audible(r)) {
              A.play(TRACKS[r].k, t, 1, getBus(r));
              setTimeout(() => flash(r), (t - now) * 1000);
            }
          });
          setTimeout(() => setStep(i), Math.max(0, (t - now) * 1000));
          sched.current.i = (i + 1) % N;
          sched.current.next += dur;
        }
      }, 25);
      setPlaying(true);
    };
    React.useEffect(() => () => clearInterval(sched.current.t), []);
    React.useEffect(() => {
      const m = {
        A: 2,
        S: 1,
        D: 0,
        F: 3,
        G: 4,
        H: 5,
        J: 6,
        K: 7
      };
      const kd = e => {
        if (e.target.tagName === "INPUT") return;
        if (e.code === "Space") {
          e.preventDefault();
          sched.current.t ? stop() : start();
          return;
        }
        const r = m[e.key.toUpperCase()];
        if (r !== undefined && !e.repeat) hit(r);
      };
      window.addEventListener("keydown", kd);
      return () => window.removeEventListener("keydown", kd);
    });
    const loadPreset = n => {
      if (active === n && playing) {
        stop();
        return;
      }
      const P = PRESETS[n];
      commit(pat(P.p));
      setBpm(P.bpm);
      setSig(n.includes("6/8") ? "6 / 8" : "4 / 4");
      setActive(n);
      if (!sched.current.t) start();
      say("Loop cargado: " + n);
    };
    const undo = () => setHist(h => {
      if (!h.past.length) return h;
      const p = h.past[h.past.length - 1];
      setGrid(p);
      return {
        past: h.past.slice(0, -1),
        future: [grid, ...h.future]
      };
    });
    const redo = () => setHist(h => {
      if (!h.future.length) return h;
      const f = h.future[0];
      setGrid(f);
      return {
        past: [...h.past, grid],
        future: h.future.slice(1)
      };
    });
    const setTrack = (r, patch) => setTracks(ts => ts.map((t, i) => i === r ? {
      ...t,
      ...patch
    } : t));
    const tbtn = (ic, on, fn, label, bg) => /*#__PURE__*/React.createElement("button", {
      onClick: fn,
      "aria-label": label,
      title: label,
      style: {
        width: 40,
        height: 40,
        borderRadius: 12,
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: on ? bg || "var(--accent)" : "transparent",
        color: on ? "#fff" : "#17181C",
        transition: "all .2s"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 19
    }));
    const tr = (ic, fn, label, bg, fg, big, cls) => /*#__PURE__*/React.createElement("button", {
      onClick: fn,
      "aria-label": label,
      title: label,
      className: cls,
      style: {
        width: big ? 56 : 46,
        height: big ? 56 : 46,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
        color: fg,
        boxShadow: bg === "#fff" ? "0 2px 8px rgba(23,24,28,.08)" : "0 8px 20px " + bg + "66",
        transition: "transform .15s"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: big ? 24 : 19
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        "--side": "440px",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "spot",
      title: "Mini DAW",
      subtitle: "Crea, practica y graba tus ideas.",
      art: "mateo/laptop-audifonos.png",
      artStyle: {
        right: 170,
        height: 190,
        bottom: 0
      },
      bit: "bit/con-audifonos.png",
      bitStyle: {
        right: 40,
        height: 120
      },
      tagline: "\xA1Tu creatividad tambi\xE9n suma!",
      height: 200
    }), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        borderRadius: 14,
        background: "#fff",
        border: "1px solid #EFEBE4"
      }
    }, tbtn("undo-2", false, undo, "Deshacer"), tbtn("redo-2", false, redo, "Rehacer")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "save",
      onClick: () => say("Proyecto guardado"),
      style: {
        background: "#fff",
        color: "#17181C",
        border: "1px solid #EFEBE4"
      }
    }, "Guardar"), /*#__PURE__*/React.createElement(Button, {
      icon: "upload",
      onClick: () => say("Exportando mi-groove.wav…")
    }, "Exportar")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        borderRadius: 18,
        border: "1px solid #EFEBE4",
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "#3F4249"
      }
    }, "Tempo"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setBpm(Math.max(40, bpm - 1)),
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: "1px solid #E5DFD5",
        background: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 14
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
      key: bpm,
      className: "bump",
      style: {
        display: "inline-block",
        fontFamily: "var(--font-display)",
        fontSize: 32
      }
    }, bpm), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#5D6068"
      }
    }, "BPM")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setBpm(Math.min(200, bpm + 1)),
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: "1px solid #E5DFD5",
        background: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    })))), /*#__PURE__*/React.createElement("label", {
      style: {
        background: "#fff",
        borderRadius: 18,
        border: "1px solid #EFEBE4",
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "#3F4249"
      }
    }, "Comp\xE1s"), /*#__PURE__*/React.createElement("select", {
      value: sig,
      onChange: e => setSig(e.target.value),
      style: {
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: "var(--font-display)",
        fontSize: 26,
        fontWeight: 700,
        color: "#17181C",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("option", null, "4 / 4"), /*#__PURE__*/React.createElement("option", null, "3 / 4"), /*#__PURE__*/React.createElement("option", null, "6 / 8")))))), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 2,
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
        padding: 10,
        borderRadius: 18,
        background: "#fff",
        border: "1px solid #EFEBE4"
      }
    }, tr("skip-back", () => {
      setStep(-1);
      sched.current.i = 0;
    }, "Al inicio", "#fff", "#17181C"), tr(playing ? "pause" : "play", () => playing ? (clearInterval(sched.current.t), sched.current.t = null, setPlaying(false)) : start(), "Reproducir (espacio)", "var(--accent)", "#fff", true), tr("square", stop, "Detener", "#fff", "#17181C"), tr("circle", () => {
      setRec(!rec);
      if (!rec) {
        start();
        say("Grabando: toca el instrumento virtual");
      }
    }, "Grabar", "#EE4433", "#fff", false, rec ? "rec-on" : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        padding: 3,
        borderRadius: 12,
        background: "#F1ECE4",
        marginLeft: 12
      }
    }, [["editor", "Editor"], ["mezcla", "Mezcla"], ["efectos", "Efectos"]].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setView(id),
      style: {
        height: 36,
        padding: "0 22px",
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        fontWeight: view === id ? 700 : 500,
        background: view === id ? "#17181C" : "transparent",
        color: view === id ? "#fff" : "#3F4249"
      }
    }, l))), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), tbtn("mouse-pointer-2", tool === "pointer", () => setTool("pointer"), "Cursor"), tbtn("pencil", tool === "pencil", () => setTool("pencil"), "Lápiz"), tbtn("eraser", tool === "erase", () => setTool("erase"), "Borrar"), tbtn("square-dashed", tool === "select", () => setTool("select"), "Seleccionar"), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        flexDirection: "column",
        padding: "2px 10px",
        borderRadius: 10,
        border: "1px solid #EFEBE4",
        fontSize: 11,
        color: "#8A8D96"
      }
    }, "Cuantizar", /*#__PURE__*/React.createElement("select", {
      style: {
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        color: "#17181C",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("option", null, "1/16"), /*#__PURE__*/React.createElement("option", null, "1/8"), /*#__PURE__*/React.createElement("option", null, "1/4"))), /*#__PURE__*/React.createElement(Icon, {
      name: "zoom-out",
      size: 18
    }), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "16",
      max: "36",
      value: cw,
      onChange: e => setCw(+e.target.value),
      style: {
        width: 100,
        accentColor: "var(--accent)"
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "zoom-in",
      size: 18
    })), view === "editor" ? /*#__PURE__*/React.createElement(Seq, {
      grid: grid,
      step: step,
      cw: cw,
      onCell: onCell,
      flashes: flashes,
      tracksState: tracks,
      setTrack: setTrack,
      tool: tool
    }) : view === "mezcla" ? /*#__PURE__*/React.createElement("div", {
      className: "swap",
      style: {
        display: "flex",
        gap: 10,
        padding: 16,
        borderRadius: 18,
        background: "#17181C"
      }
    }, TRACKS.map((t, r) => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "12px 0",
        borderRadius: 14,
        background: "#22232A"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: 10,
        height: 160,
        borderRadius: 5,
        background: "#2F3038",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: tracks[r].vol * 100 + "%",
        background: "linear-gradient(0deg," + t.c + "," + t.c + "88)",
        transition: "height .1s"
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: flashes[r] ? "100%" : "0%",
        background: "rgba(255,255,255,.25)",
        transition: "height .08s"
      }
    })), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "0",
      max: "1",
      step: ".01",
      value: tracks[r].vol,
      onChange: e => setTrack(r, {
        vol: +e.target.value
      }),
      style: {
        width: 80,
        accentColor: t.c
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: img("daw/" + (t.ic || t.id) + ".png"),
      alt: "",
      style: {
        width: 34
      }
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        color: "#fff",
        fontSize: 12.5
      }
    }, t.l)))) : /*#__PURE__*/React.createElement("div", {
      className: "swap",
      style: {
        padding: 30,
        borderRadius: 18,
        background: "#fff",
        border: "1px solid #EFEBE4",
        textAlign: "center",
        fontSize: 13,
        color: "#8A8D96"
      }
    }, "Usa el panel de Efectos de abajo."), /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        "--side": "440px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1.15fr)",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(VirtualKit, {
      hit: hit,
      flashes: flashes
    }), /*#__PURE__*/React.createElement(Effects, null)), /*#__PURE__*/React.createElement(Library, {
      loadPreset: loadPreset,
      active: active,
      playing: playing
    })), toast && /*#__PURE__*/React.createElement("div", {
      className: "sheet",
      style: {
        position: "fixed",
        left: "50%",
        bottom: 28,
        transform: "translateX(-50%)",
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 18px 10px 10px",
        borderRadius: 16,
        background: "#17181C",
        color: "#fff",
        fontSize: 14,
        boxShadow: "0 18px 40px rgba(23,24,28,.35)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("bit/aplaudiendo.png"),
      alt: "",
      style: {
        height: 40
      }
    }), toast));
  }
  Object.assign(window, {
    SwDaw
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwDaw.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwFx.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const AS = "../../assets/";
  const img = p => AS + p;
  function Reveal({
    i = 0,
    as = "div",
    style,
    className = "",
    children,
    ...rest
  }) {
    const T = as;
    return /*#__PURE__*/React.createElement(T, _extends({
      className: "rv " + className,
      style: {
        "--i": i,
        ...style
      }
    }, rest), children);
  }
  function useMounted(delay = 60) {
    const [m, setM] = React.useState(false);
    React.useEffect(() => {
      const t = setTimeout(() => setM(true), delay);
      return () => clearTimeout(t);
    }, []);
    return m;
  }
  function CountUp({
    to,
    dur = 1100,
    suffix = ""
  }) {
    const [v, setV] = React.useState(0);
    React.useEffect(() => {
      let raf, t0;
      const step = t => {
        if (!t0) t0 = t;
        const p = Math.min(1, (t - t0) / dur);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [to]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, v, suffix);
  }
  function Ring({
    value = 0,
    size = 140,
    stroke = 14,
    color = "var(--accent)",
    track = "#EEEAE3",
    children
  }) {
    const m = useMounted();
    const r = (size - stroke) / 2,
      c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: size,
        height: size,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      style: {
        transform: "rotate(-90deg)"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: track,
      strokeWidth: stroke
    }), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: m ? c * (1 - value / 100) : c,
      style: {
        transition: "stroke-dashoffset 1.3s cubic-bezier(.22,1,.36,1)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }
    }, children));
  }
  function Bar({
    value = 0,
    color = "var(--accent)",
    height = 8,
    track = "#EEEAE3",
    style
  }) {
    const m = useMounted(120);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        borderRadius: 99,
        background: track,
        overflow: "hidden",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sheen",
      style: {
        width: (m ? value : 0) + "%",
        height: "100%",
        borderRadius: 99,
        background: color,
        transition: "width 1.2s cubic-bezier(.22,1,.36,1)"
      }
    }));
  }
  function Eq({
    n = 5,
    color = "#fff",
    h = 18,
    playing = true
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "flex-end",
        gap: 2,
        height: h
      }
    }, Array.from({
      length: n
    }, (_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: playing ? "eq" : "",
      style: {
        width: 3,
        height: h,
        borderRadius: 2,
        background: color,
        transformOrigin: "bottom",
        transform: playing ? undefined : "scaleY(.3)",
        animationDelay: i * 0.13 + "s"
      }
    })));
  }
  const NOTES = ["music/nota-azul.png", "music/nota-roja.png", "music/nota-amarilla.png", "music/estrella.png"];
  function FloatingNotes({
    count = 6,
    area = {
      left: "45%",
      width: "40%"
    }
  }) {
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        ...area,
        pointerEvents: "none"
      }
    }, Array.from({
      length: count
    }, (_, i) => /*#__PURE__*/React.createElement("img", {
      key: i,
      src: img(NOTES[i % NOTES.length]),
      className: "drift",
      alt: "",
      style: {
        position: "absolute",
        left: 8 + i * 37 % 84 + "%",
        bottom: -10,
        width: 22 + i % 3 * 6,
        animationDelay: i * 1.1 + "s",
        animationDuration: 6 + i % 3 + "s"
      }
    })));
  }
  function Ripples({
    color = "rgba(255,255,255,.7)",
    size = 260,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        width: size,
        height: size,
        pointerEvents: "none",
        ...style
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ripple",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "2px solid " + color,
        animationDelay: i * 1.2 + "s"
      }
    })));
  }
  const BACKDROPS = {
    staff: {
      bg: "linear-gradient(120deg,#FFF4EF 0%,#FFE9E1 55%,#FFDCCF 100%)",
      ink: "#F0533F"
    },
    burst: {
      bg: "linear-gradient(120deg,#F1FBF5 0%,#E2F6EA 55%,#CFF0DC 100%)",
      ink: "#2E9E6E"
    },
    spot: {
      bg: "linear-gradient(120deg,#F5F0FF 0%,#ECE3FF 55%,#DDD0FF 100%)",
      ink: "#7C4DEB"
    },
    grid: {
      bg: "linear-gradient(120deg,#FFF5EC 0%,#FFEBDA 55%,#FFDDC2 100%)",
      ink: "#F26B3A"
    },
    night: {
      bg: "radial-gradient(60% 120% at 70% 10%, rgba(90,124,255,.35), transparent 60%), radial-gradient(50% 90% at 95% 100%, rgba(238,68,51,.28), transparent 70%), radial-gradient(40% 80% at 20% 110%, rgba(124,77,235,.30), transparent 70%), linear-gradient(120deg,#0F1016 0%,#171925 60%,#1F1622 100%)",
      ink: "#8AA4FF",
      dark: true
    },
    studio: {
      bg: "radial-gradient(55% 110% at 75% 0%, rgba(46,196,166,.30), transparent 60%), radial-gradient(45% 90% at 100% 100%, rgba(90,124,255,.30), transparent 70%), linear-gradient(120deg,#0E1214 0%,#131B1E 60%,#161A26 100%)",
      ink: "#5FE0C4",
      dark: true
    }
  };
  function Backdrop({
    variant
  }) {
    const ink = BACKDROPS[variant].ink;
    if (variant === "staff") return /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 800 260",
      preserveAspectRatio: "none",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: .35
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("path", {
      key: i,
      className: "staffline",
      d: "M-20 " + (150 + i * 12) + " C 200 " + (90 + i * 12) + ", 420 " + (230 + i * 12) + ", 820 " + (120 + i * 12),
      fill: "none",
      stroke: ink,
      strokeWidth: "1.2"
    })));
    if (variant === "burst") return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      className: "spin-slow",
      style: {
        position: "absolute",
        width: 900,
        height: 900,
        right: -260,
        top: -330,
        background: "repeating-conic-gradient(from 0deg, rgba(46,158,110,.10) 0deg 8deg, transparent 8deg 20deg)",
        borderRadius: "50%",
        maskImage: "radial-gradient(circle, #000 20%, transparent 65%)",
        WebkitMaskImage: "radial-gradient(circle, #000 20%, transparent 65%)"
      }
    });
    if (variant === "spot") return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        overflow: "hidden"
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "beam",
      style: {
        position: "absolute",
        top: -40,
        left: 52 + i * 14 + "%",
        width: 120,
        height: 420,
        background: "linear-gradient(180deg, rgba(124,77,235,.28), transparent 80%)",
        transformOrigin: "top center",
        filter: "blur(6px)",
        animationDelay: i * -2.3 + "s"
      }
    })));
    if (variant === "night" || variant === "studio") return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        overflow: "hidden"
      }
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "beam",
      style: {
        position: "absolute",
        top: -60,
        left: 38 + i * 15 + "%",
        width: 110,
        height: 460,
        background: "linear-gradient(180deg, " + ink + "55, transparent 80%)",
        transformOrigin: "top center",
        filter: "blur(8px)",
        mixBlendMode: "screen",
        animationDelay: i * -1.9 + "s"
      }
    })), Array.from({
      length: 22
    }, (_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: "bokeh",
      style: {
        position: "absolute",
        left: i * 41 % 98 + "%",
        top: i * 23 % 92 + "%",
        width: 3 + i % 4 * 3,
        height: 3 + i % 4 * 3,
        borderRadius: "50%",
        background: i % 3 ? "#fff" : ink,
        opacity: .14 + i % 3 * .08,
        animationDelay: i * .35 + "s"
      }
    })), variant === "studio" && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(95,224,196,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(95,224,196,.08) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "linear-gradient(90deg, transparent 20%, #000 80%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 20%, #000 80%)"
      }
    }));
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(242,107,58,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(242,107,58,.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "linear-gradient(90deg, transparent 30%, #000 70%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 30%, #000 70%)"
      }
    });
  }
  function HeroStage({
    variant = "staff",
    eyebrow,
    title,
    subtitle,
    body,
    meta,
    art,
    artStyle,
    bit,
    bitStyle,
    tagline,
    height = 250,
    children,
    aside
  }) {
    const d = BACKDROPS[variant],
      dk = !!d.dark;
    return /*#__PURE__*/React.createElement("section", {
      className: "rv",
      style: {
        "--i": 0,
        position: "relative",
        minHeight: height,
        borderRadius: 22,
        overflow: "hidden",
        background: d.bg,
        containerType: "inline-size",
        border: "1px solid " + (dk ? "rgba(255,255,255,.06)" : "rgba(23,24,28,.05)")
      }
    }, /*#__PURE__*/React.createElement(Backdrop, {
      variant: variant
    }), /*#__PURE__*/React.createElement(Ripples, {
      color: d.ink + "55",
      size: 300,
      style: {
        right: 150,
        top: -10
      }
    }), /*#__PURE__*/React.createElement(FloatingNotes, null), art && /*#__PURE__*/React.createElement("img", {
      src: img(art),
      alt: "",
      className: "floaty sw-art",
      style: {
        position: "absolute",
        right: 90,
        bottom: -6,
        height: height + 10,
        filter: "drop-shadow(0 18px 28px rgba(23,24,28,.18))",
        ...artStyle
      }
    }), bit && /*#__PURE__*/React.createElement("img", {
      src: img(bit),
      alt: "Bit",
      className: "bob sw-bit",
      style: {
        position: "absolute",
        right: 22,
        bottom: 10,
        height: 104,
        ...bitStyle
      }
    }), tagline && /*#__PURE__*/React.createElement("span", {
      className: "wiggle sw-tag",
      style: {
        position: "absolute",
        right: 36,
        top: 22,
        fontFamily: "var(--font-hand)",
        fontSize: 30,
        lineHeight: 1,
        color: dk ? "#fff" : "#17181C",
        transform: "rotate(-8deg)",
        textAlign: "center",
        maxWidth: 190
      }
    }, tagline), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: "30px 32px",
        maxWidth: "min(520px, 56%)",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, eyebrow && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: ".18em",
        color: dk ? "rgba(255,255,255,.65)" : "#5D6068"
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 46,
        fontWeight: 800,
        lineHeight: 1.02,
        letterSpacing: "-.02em",
        color: dk ? "#fff" : "#17181C",
        textWrap: "balance"
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        color: dk ? "rgba(255,255,255,.78)" : "#5D6068"
      }
    }, subtitle), body && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontSize: 14.5,
        lineHeight: 1.6,
        color: dk ? "rgba(255,255,255,.75)" : "#3F4249",
        textWrap: "pretty"
      }
    }, body), meta, children), aside && /*#__PURE__*/React.createElement("div", {
      className: "sw-aside",
      style: {
        position: "absolute",
        top: 18,
        right: 18,
        display: "flex",
        gap: 12,
        zIndex: 3
      }
    }, aside));
  }
  function Panel({
    i = 1,
    title,
    icon,
    action,
    children,
    style,
    pad = 20
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "rv lift",
      style: {
        "--i": i,
        background: "#fff",
        borderRadius: 20,
        border: "1px solid #EFEBE4",
        boxShadow: "0 1px 2px rgba(23,24,28,.04), 0 10px 30px rgba(23,24,28,.05)",
        padding: pad,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minWidth: 0,
        ...style
      }
    }, title && /*#__PURE__*/React.createElement("header", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, icon, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        flex: 1,
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600,
        color: "#17181C"
      }
    }, title), action), children);
  }
  function Chip({
    active,
    onClick,
    children,
    icon
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      className: "chip",
      style: {
        height: 38,
        padding: "0 16px",
        borderRadius: 12,
        border: "1px solid " + (active ? "transparent" : "#ECE7DF"),
        background: active ? "var(--accent)" : "#fff",
        color: active ? "#fff" : "#2C2E33",
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        fontWeight: active ? 700 : 500,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        boxShadow: active ? "var(--shadow-glow-accent)" : "none",
        transition: "all .2s cubic-bezier(.22,1,.36,1)",
        whiteSpace: "nowrap"
      }
    }, icon, children);
  }
  const LEVEL = {
    1: {
      label: "N1 PULSO",
      bg: "#DCE8FF",
      fg: "#1F4FD1",
      solid: "#3B74F0"
    },
    2: {
      label: "N2 DINÁMICA",
      bg: "#FFEBC7",
      fg: "#9A5B00",
      solid: "#F2A516"
    },
    3: {
      label: "N3 PROPÓSITO",
      bg: "#FFDAD5",
      fg: "#B4271A",
      solid: "#EE4433"
    }
  };
  function LevelPill({
    n,
    solid,
    children
  }) {
    const l = LEVEL[n];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        height: 26,
        padding: "0 12px",
        borderRadius: 99,
        background: solid ? l.solid : l.bg,
        color: solid ? "#fff" : l.fg,
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: ".02em",
        whiteSpace: "nowrap"
      }
    }, children || l.label);
  }
  Object.assign(window, {
    SW_IMG: img,
    Reveal,
    CountUp,
    Ring,
    Bar,
    Eq,
    FloatingNotes,
    Ripples,
    HeroStage,
    Panel,
    Chip,
    LevelPill,
    SW_LEVEL: LEVEL
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwFx.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwLibro.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button,
    Tabs
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const LEVELS = [["pulso", "PULSO", 1, 8], ["groove", "GROOVE", 2, 4], ["flow", "FLOW", 3, 0], ["click", "CLICK", 4, 0], ["stage", "STAGE", 5, 0], ["firma", "FIRMA", 6, 0]];
  const CATS = [["todas", "book-open", "Todas las sesiones"], ["teoria", "book-open-text", "Teoría"], ["ejercicios", "repeat", "Ejercicios"], ["rudimentos", "drum", "Rudimentos"], ["canciones", "music", "Canciones"], ["juegos", "gamepad-2", "Juegos"], ["fav", "heart", "Mis favoritas"]];
  const SESS = {
    2: [["Mantén el Groove", "Teoría + Ejercicios", "done", "pencil"], ["Manos coordinadas", "Rudimento + Ejercicios", "cur", "pencil"], ["Dinámica básica", "Teoría + Práctica", "lock", "calendar"], ["Hi-hat con control", "Ejercicios + Canción", "lock", "music"], ["Ritmos en canciones", "Práctica + Juego", "lock", "gamepad-2"]],
    3: [["Fills sencillos", "Rudimento + Ejercicio", "lock", "drum"], ["Independencia 1", "Ejercicios", "lock", "repeat"], ["Groove en canción", "Práctica + Canción", "lock", "music"], ["Control de tempo", "Teoría + Ejercicios", "lock", "calendar"], ["Mi primer cover", "Canción + Grabación", "lock", "mic"]]
  };
  const ST = {
    done: ["Completada", "circle-check", "#1D7A47", "#DDF5E7"],
    cur: ["En curso", "loader", "var(--accent)", "var(--accent-soft)"],
    lock: ["Bloqueada", "lock", "#4A4C52", "#EEEDEA"]
  };
  const has = (tags, c) => c === "todas" || c === "teoria" && /Teor/.test(tags) || c === "ejercicios" && /Ejercicio/.test(tags) || c === "rudimentos" && /Rudimento/.test(tags) || c === "canciones" && /Canci/.test(tags) || c === "juegos" && /Juego/.test(tags);
  const ART = {
    2: ["libro/mateo-sentado-baquetas.png", "libro/mateo-puno.png", "libro/mateo-bateria.png", "libro/mateo-audifonos-bateria.png", "libro/mateo-bateria-riendo.png"],
    3: ["libro/mateo-bateria-riendo.png", "libro/mateo-bateria.png", "libro/mateo-audifonos-tablet.png", "libro/mateo-pensando-libro.png", "libro/mateo-leyendo-guino.png"]
  };
  const FLOW = [["activity", "#17181C", "PULSO"], ["music", "#3B74F0", "RITMO"], ["drum", "#EE4433", "GROOVE"], ["chart-no-axes-column-increasing", "#2E9E6E", "PROGRESO"]];
  function LevelCard({
    l,
    i,
    active,
    onPick
  }) {
    const [id, name, n, done] = l;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onPick,
      className: "rv lift lvl",
      style: {
        "--i": i + 1,
        position: "relative",
        padding: 0,
        border: "none",
        cursor: "pointer",
        borderRadius: 16,
        overflow: "hidden",
        background: "transparent",
        boxShadow: active ? "0 0 0 3px #fff, 0 0 0 6px var(--accent), 0 16px 30px rgba(23,24,28,.2)" : "0 8px 20px rgba(23,24,28,.10)",
        transform: active ? "translateY(-4px)" : "none",
        transition: "all .35s cubic-bezier(.34,1.56,.64,1)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("libro/nivel-" + id + ".png"),
      alt: name,
      className: "lvl-art",
      style: {
        display: "block",
        width: "100%",
        aspectRatio: "126/180",
        objectFit: "cover",
        objectPosition: "top"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: 8,
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 8px",
        borderRadius: 10,
        background: "rgba(255,255,255,.92)",
        backdropFilter: "blur(6px)"
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      value: done / 12 * 100,
      color: n === 1 ? "#34B76C" : "var(--accent)",
      height: 6,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 11,
        color: "#17181C"
      }
    }, done, "/12")), n > 2 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "rgba(0,0,0,.35)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 12,
      color: "#fff"
    })));
  }
  function SessCard({
    s,
    n,
    k,
    i,
    sel,
    onSel,
    fav
  }) {
    const [t, tags, st, ic] = s,
      S = ST[st];
    return /*#__PURE__*/React.createElement("button", {
      onClick: onSel,
      className: "rv lift tool",
      style: {
        "--i": i,
        textAlign: "left",
        padding: 0,
        cursor: "pointer",
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "2px solid " + (sel ? "var(--accent)" : "#EFEBE4"),
        boxShadow: sel ? "0 0 0 4px var(--accent-ring), 0 14px 28px rgba(23,24,28,.10)" : "0 6px 18px rgba(23,24,28,.04)",
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 96,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("libro/s" + n + "-" + (k + 1) + ".png"),
      alt: "",
      className: "tool-art",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: st === "lock" ? "saturate(.55)" : "none"
      }
    }), fav && /*#__PURE__*/React.createElement("img", {
      src: img("music/corazon.png"),
      alt: "",
      style: {
        position: "absolute",
        top: 6,
        right: 6,
        width: 22
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 12px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068"
      }
    }, "Sesi\xF3n ", k + 1), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 14,
        color: "#17181C",
        lineHeight: 1.25
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068",
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 13
    }), tags), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 6,
        alignSelf: "flex-start",
        height: 26,
        padding: "0 10px",
        borderRadius: 8,
        background: S[3],
        color: S[2],
        fontSize: 12,
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: S[1],
      size: 14,
      className: st === "cur" ? "spin-icon" : ""
    }), S[0])));
  }
  function Page({
    n,
    k,
    s,
    big
  }) {
    const lvl = LEVELS[n - 1],
      tilt = big ? 0 : 1;
    return /*#__PURE__*/React.createElement("div", {
      className: "book-page",
      style: {
        position: "relative",
        borderRadius: big ? 6 : "6px 14px 14px 6px",
        overflow: "hidden",
        padding: big ? "28px 28px 18px" : "18px 18px 12px",
        background: "linear-gradient(90deg, #E9E2D6 0, #FBF8F2 6%, #FBF8F2 100%)",
        boxShadow: "inset 6px 0 10px -6px rgba(0,0,0,.25), 0 18px 34px rgba(23,24,28,.18)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        minHeight: big ? 520 : 360
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: 8,
        background: "repeating-linear-gradient(0deg,#E7E0D3 0 2px,#F6F1E8 2px 4px)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "flex-start",
        height: 26,
        padding: "0 10px",
        borderRadius: 6,
        background: "var(--accent)",
        color: "#fff",
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 14,
        letterSpacing: ".04em",
        display: "inline-flex",
        alignItems: "center"
      }
    }, lvl[1]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: big ? 18 : 15,
        color: "#2C2E33"
      }
    }, "Sesi\xF3n ", k + 1), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: big ? 44 : 32,
        fontWeight: 800,
        lineHeight: .98,
        color: "#17181C",
        maxWidth: "58%",
        textWrap: "balance"
      }
    }, s[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: big ? 16 : 13.5,
        color: "#3F4249",
        maxWidth: "48%",
        marginTop: 4
      }
    }, k === 0 && n === 2 ? "El Groove empieza con el pulso." : s[1] + "."), /*#__PURE__*/React.createElement("img", {
      src: img(ART[n][k]),
      alt: "",
      className: "floaty",
      style: {
        position: "absolute",
        right: big ? 20 : 4,
        top: big ? 30 : 18,
        height: big ? 300 : 200,
        maxWidth: "52%",
        objectFit: "contain",
        objectPosition: "top right"
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: img("libro/bit-idea.png"),
      alt: "",
      className: "bob",
      style: {
        position: "absolute",
        right: big ? 30 : 10,
        top: big ? 250 : 165,
        height: big ? 90 : 64
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 4,
        paddingTop: big ? 40 : 20
      }
    }, FLOW.map(([ic, c, l], i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: l
    }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: big ? 20 : 15,
      color: "#17181C",
      style: {
        marginTop: big ? 18 : 13
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "flow-dot",
      style: {
        "--d": i * .35 + "s",
        width: big ? 56 : 42,
        height: big ? 56 : 42,
        borderRadius: "50%",
        background: c,
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: big ? 26 : 20
    })), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: big ? 13 : 11,
        color: "#17181C"
      }
    }, l))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
        color: "#5D6068",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null, k + 1), /*#__PURE__*/React.createElement("img", {
      src: img("logo/ez-mark-black.png"),
      alt: "EZ",
      style: {
        height: 14
      }
    })));
  }
  function Reader({
    n,
    k,
    onClose
  }) {
    const s = SESS[n][k];
    const [p, setP] = React.useState(0);
    const [dir, setDir] = React.useState(1);
    const go = d => {
      setDir(d);
      setP(x => Math.max(0, Math.min(2, x + d)));
    };
    React.useEffect(() => {
      const kd = e => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      };
      window.addEventListener("keydown", kd);
      return () => window.removeEventListener("keydown", kd);
    }, []);
    const pages = [/*#__PURE__*/React.createElement(Page, {
      key: "a",
      n: n,
      k: k,
      s: s,
      big: true
    }), /*#__PURE__*/React.createElement("div", {
      key: "b",
      className: "book-page",
      style: {
        minHeight: 520,
        borderRadius: 6,
        padding: 32,
        background: "linear-gradient(90deg,#E9E2D6 0,#FBF8F2 6%)",
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 32,
        fontWeight: 800
      }
    }, "\xBFQu\xE9 es el groove?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        lineHeight: 1.6,
        color: "#2C2E33",
        maxWidth: 520
      }
    }, "En esta sesi\xF3n aprender\xE1s qu\xE9 es el groove y por qu\xE9 es la base de toda la m\xFAsica. Practicaremos con un patr\xF3n simple y lo llevaremos al kit."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "center",
        padding: 16,
        borderRadius: 14,
        background: "var(--accent-soft)",
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("onb/cara-pensando.png"),
      alt: "",
      style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        objectFit: "cover",
        background: "#fff"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-hand)",
        fontSize: 24,
        lineHeight: 1.15,
        color: "#17181C"
      }
    }, "\"Si tu cabeza se mueve sola, \xA1ya encontraste el groove!\"")), /*#__PURE__*/React.createElement("img", {
      src: img("libro/bit-libro.png"),
      alt: "",
      className: "bob",
      style: {
        alignSelf: "flex-end",
        height: 130,
        marginTop: "auto"
      }
    })), /*#__PURE__*/React.createElement("div", {
      key: "c",
      className: "book-page",
      style: {
        minHeight: 520,
        borderRadius: 6,
        padding: 32,
        background: "linear-gradient(90deg,#E9E2D6 0,#FBF8F2 6%)",
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 32,
        fontWeight: 800
      }
    }, "Tu primer patr\xF3n"), [["Hi-hat", "#E9A21A", [1, 1, 1, 1, 1, 1, 1, 1]], ["Caja", "#EE4433", [0, 0, 1, 0, 0, 0, 1, 0]], ["Bombo", "#2F7FD8", [1, 0, 0, 0, 1, 0, 0, 0]]].map(([l, c, r]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        width: 70,
        fontSize: 15
      }
    }, l), r.map((v, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: v ? "cellin" : "",
      style: {
        flex: 1,
        height: 38,
        borderRadius: 8,
        background: v ? c : "#EEE8DD",
        animationDelay: i * .05 + "s"
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        fontSize: 13,
        color: "#5D6068",
        paddingLeft: 80
      }
    }, ["1", "y", "2", "y", "3", "y", "4", "y"].map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        textAlign: "center"
      }
    }, c))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "auto 0 0",
        fontSize: 15,
        color: "#3F4249"
      }
    }, "T\xF3calo a 70 BPM, cuatro veces seguidas, sin parar. Luego s\xFAbelo a 80."))];
    return /*#__PURE__*/React.createElement("div", {
      className: "reader",
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(12,13,18,.72)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: "min(760px, 100%)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        perspective: 1800
      }
    }, /*#__PURE__*/React.createElement("div", {
      key: p,
      className: dir > 0 ? "flip-next" : "flip-prev"
    }, pages[p]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "arrow-left",
      onClick: () => go(-1),
      disabled: p === 0,
      style: {
        background: "rgba(255,255,255,.12)",
        color: "#fff",
        border: "none"
      }
    }, "Anterior"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        gap: 8
      }
    }, pages.map((_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        width: i === p ? 26 : 8,
        height: 8,
        borderRadius: 4,
        background: i === p ? "var(--accent)" : "rgba(255,255,255,.35)",
        transition: "width .3s"
      }
    }))), p < 2 ? /*#__PURE__*/React.createElement(Button, {
      iconRight: "arrow-right",
      onClick: () => go(1)
    }, "Siguiente p\xE1gina") : /*#__PURE__*/React.createElement(Button, {
      icon: "check",
      onClick: onClose
    }, "Terminar lectura"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Cerrar",
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,.12)",
        color: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    })))));
  }
  function Detail({
    n,
    k,
    fav,
    onFav,
    onOpen
  }) {
    const s = SESS[n][k];
    const [tab, setTab] = React.useState("res");
    React.useEffect(() => setTab("res"), [n, k]);
    return /*#__PURE__*/React.createElement("aside", {
      className: "rv",
      style: {
        "--i": 2,
        background: "#fff",
        borderRadius: 22,
        border: "1px solid #EFEBE4",
        boxShadow: "0 16px 40px rgba(23,24,28,.08)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 20
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        flex: 1,
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 600
      }
    }, "Detalle de la p\xE1gina"), /*#__PURE__*/React.createElement("button", {
      onClick: onFav,
      className: "heart",
      "aria-label": "Favorita",
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        width: 30,
        height: 30,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, fav ? /*#__PURE__*/React.createElement("img", {
      src: img("music/corazon.png"),
      alt: "",
      style: {
        width: 26
      }
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 22,
      color: "#8A8D96"
    }))), /*#__PURE__*/React.createElement("div", {
      key: n + "-" + k,
      className: "page-in",
      style: {
        perspective: 1200
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-tilt"
    }, /*#__PURE__*/React.createElement(Page, {
      n: n,
      k: k,
      s: s
    }))), /*#__PURE__*/React.createElement(Tabs, {
      active: tab,
      onChange: setTab,
      items: [{
        id: "res",
        label: "Resumen"
      }, {
        id: "act",
        label: "Actividades"
      }, {
        id: "mat",
        label: "Materiales"
      }, {
        id: "not",
        label: "Notas"
      }]
    }), tab === "res" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: "#3F4249"
      }
    }, "En esta sesi\xF3n aprender\xE1s qu\xE9 es el groove y por qu\xE9 es la base de toda la m\xFAsica. Practicaremos con un patr\xF3n simple y lo llevaremos al kit."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: 13,
        color: "#3F4249"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 16
    }), "60 min"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 6,
        alignItems: "center",
        height: 28,
        padding: "0 10px",
        borderRadius: 8,
        background: "var(--accent-soft)",
        color: "var(--accent-press)",
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chart-no-axes-column-increasing",
      size: 15
    }), "Nivel ", n, " \xB7 ", LEVELS[n - 1][1]), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 15
    }), s[1]))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#8A8D96",
        padding: "10px 0"
      }
    }, "Contenido no incluido en la referencia."), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: s[2] === "lock" ? "lock" : "play",
      fullWidth: true,
      disabled: s[2] === "lock",
      onClick: onOpen
    }, s[2] === "lock" ? "Página bloqueada" : "Abrir página"));
  }
  function Section({
    n,
    cat,
    sel,
    setSel,
    favs,
    i0
  }) {
    const [open, setOpen] = React.useState(true);
    const list = SESS[n].map((s, k) => ({
      s,
      k
    })).filter(({
      s,
      k
    }) => cat === "fav" ? favs[n + "-" + k] : has(s[1], cat));
    return /*#__PURE__*/React.createElement("section", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        fontFamily: "var(--font-display)",
        fontSize: 21,
        fontWeight: 600,
        color: "#17181C"
      }
    }, "Nivel ", n, " \xB7 ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 800
      }
    }, LEVELS[n - 1][1]), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 18,
      style: {
        transform: open ? "none" : "rotate(-90deg)",
        transition: "transform .25s"
      }
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, "Ver todas")), open && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
        gap: 12
      }
    }, list.map(({
      s,
      k
    }, i) => /*#__PURE__*/React.createElement(SessCard, {
      key: k,
      s: s,
      n: n,
      k: k,
      i: i0 + i,
      sel: sel[0] === n && sel[1] === k,
      fav: favs[n + "-" + k],
      onSel: () => setSel([n, k])
    })), !list.length && /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1",
        padding: 24,
        textAlign: "center",
        fontSize: 13.5,
        color: "#8A8D96",
        border: "2px dashed #EAE4DA",
        borderRadius: 16
      }
    }, "Nada en esta categor\xEDa para este nivel.")));
  }
  function SwLibro() {
    const [cat, setCat] = React.useState("todas");
    const [sel, setSel] = React.useState([2, 0]);
    const [lvl, setLvl] = React.useState(2);
    const [favs, setFavs] = React.useState({});
    const [reader, setReader] = React.useState(false);
    const key = sel[0] + "-" + sel[1];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "night",
      title: "Mi Libro",
      subtitle: "Paso a paso, tu historia en la bater\xEDa.",
      art: "libro/mateo-libro-pulgar.png",
      artStyle: {
        right: 300,
        height: 240,
        bottom: -14
      },
      bit: "libro/bit-corazon.png",
      bitStyle: {
        right: 200,
        height: 130
      },
      tagline: "Cada p\xE1gina te hace sonar mejor.",
      height: 220
    }), /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        "--side": "380px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(6,minmax(0,1fr))",
        gap: 12
      }
    }, LEVELS.map((l, i) => /*#__PURE__*/React.createElement(LevelCard, {
      key: l[0],
      l: l,
      i: i,
      active: lvl === l[2],
      onPick: () => setLvl(l[2])
    }))), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 7,
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, CATS.map(([id, ic, l]) => /*#__PURE__*/React.createElement(Chip, {
      key: id,
      active: cat === id,
      onClick: () => setCat(id),
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 16
      })
    }, l))), [2, 3].filter(n => lvl <= 2 || n === lvl || true).map((n, j) => /*#__PURE__*/React.createElement(Section, {
      key: n,
      n: n,
      cat: cat,
      sel: sel,
      setSel: setSel,
      favs: favs,
      i0: 8 + j * 5
    }))), /*#__PURE__*/React.createElement("div", {
      className: "sw-sticky"
    }, /*#__PURE__*/React.createElement(Detail, {
      n: sel[0],
      k: sel[1],
      fav: !!favs[key],
      onFav: () => setFavs(f => ({
        ...f,
        [key]: !f[key]
      })),
      onOpen: () => setReader(true)
    }))), reader && /*#__PURE__*/React.createElement(Reader, {
      n: sel[0],
      k: sel[1],
      onClose: () => setReader(false)
    }));
  }
  Object.assign(window, {
    SwLibro
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwLibro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwOnboarding.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  function Letters({
    text,
    delay = 0,
    step = 45
  }) {
    let k = 0;
    return /*#__PURE__*/React.createElement(React.Fragment, null, text.split("\n").map((line, li) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: li
    }, li > 0 && /*#__PURE__*/React.createElement("br", null), line.split("").map((ch, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ltr",
      style: {
        display: "inline-block",
        whiteSpace: "pre",
        animationDelay: delay + k++ * step + "ms"
      }
    }, ch)))));
  }
  const px = d => ({
    transform: "translate3d(calc(var(--mx,0) * " + d + "px), calc(var(--my,0) * " + d + "px), 0)",
    transition: "transform .25s ease-out"
  });
  function EqStrip({
    n = 48,
    h = 46
  }) {
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: h,
        display: "flex",
        alignItems: "flex-end",
        gap: 3,
        padding: "0 2vw",
        opacity: .5,
        pointerEvents: "none",
        zIndex: 1
      }
    }, Array.from({
      length: n
    }, (_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: "eq",
      style: {
        flex: 1,
        height: h,
        borderRadius: "3px 3px 0 0",
        background: i % 5 === 0 ? "var(--accent)" : "rgba(255,200,140,.55)",
        transformOrigin: "bottom",
        animationDuration: .5 + i % 7 * .09 + "s",
        animationDelay: i * .037 + "s"
      }
    })));
  }
  function Marquee({
    text
  }) {
    const row = Array.from({
      length: 8
    }, () => text).join("   ✦   ");
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 52,
        overflow: "hidden",
        whiteSpace: "nowrap",
        zIndex: 1,
        pointerEvents: "none",
        maskImage: "linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)",
        WebkitMaskImage: "linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "marquee",
      style: {
        display: "inline-block",
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 64,
        letterSpacing: ".06em",
        color: "transparent",
        WebkitTextStroke: "1px rgba(255,255,255,.14)"
      }
    }, row, "   \u2726   ", row));
  }
  function Molinos({
    warm
  }) {
    const blade = (c, n) => "repeating-conic-gradient(from 0deg, " + c + " 0deg " + 180 / n + "deg, transparent " + 180 / n + "deg " + 360 / n + "deg)";
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: -30,
        overflow: "hidden",
        pointerEvents: "none",
        ...px(-14)
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "molino",
      style: {
        position: "absolute",
        width: 1400,
        height: 1400,
        left: "58%",
        top: "50%",
        marginLeft: -700,
        marginTop: -700,
        background: blade("rgba(255,190,110,.07)", 12),
        maskImage: "radial-gradient(circle, #000 10%, transparent 62%)",
        WebkitMaskImage: "radial-gradient(circle, #000 10%, transparent 62%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "molino rev",
      style: {
        position: "absolute",
        width: 900,
        height: 900,
        left: "58%",
        top: "52%",
        marginLeft: -450,
        marginTop: -450,
        background: blade("rgba(90,124,255,.16)", 8),
        maskImage: "radial-gradient(circle, #000 8%, transparent 60%)",
        WebkitMaskImage: "radial-gradient(circle, #000 8%, transparent 60%)",
        animationDuration: "26s"
      }
    }), [[12, 18, 220, "rgba(255,170,80,.12)", 18], [86, 80, 260, "rgba(124,77,235,.14)", 22], [90, 14, 160, "rgba(90,124,255,.16)", 14]].map(([x, y, s, c, d], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "molino" + (i % 2 ? " rev" : ""),
      style: {
        position: "absolute",
        left: x + "%",
        top: y + "%",
        width: s,
        height: s,
        marginLeft: -s / 2,
        marginTop: -s / 2,
        borderRadius: "50%",
        background: blade(c, 6),
        animationDuration: d + "s",
        maskImage: "radial-gradient(circle, #000 20%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(circle, #000 20%, transparent 70%)"
      }
    })), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "beam",
      style: {
        position: "absolute",
        top: -80,
        left: 44 + i * 16 + "%",
        width: 140,
        height: "120%",
        background: "linear-gradient(180deg, " + (i === 1 ? "rgba(90,124,255,.35)" : "rgba(255,180,100,.28)") + ", transparent 70%)",
        transformOrigin: "top center",
        filter: "blur(10px)",
        mixBlendMode: "screen",
        animationDelay: i * -2.2 + "s"
      }
    })), Array.from({
      length: 34
    }, (_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: "bokeh",
      style: {
        position: "absolute",
        left: i * 37 % 100 + "%",
        top: i * 53 % 100 + "%",
        width: 4 + i % 5 * 4,
        height: 4 + i % 5 * 4,
        borderRadius: "50%",
        background: i % 4 ? "rgba(255,200,140,.55)" : "rgba(140,170,255,.6)",
        filter: "blur(" + i % 3 + "px)",
        opacity: .35,
        animationDelay: i * .27 + "s"
      }
    })), Array.from({
      length: 9
    }, (_, i) => /*#__PURE__*/React.createElement("img", {
      key: i,
      src: img(["music/nota-azul.png", "music/nota-roja.png", "music/estrella.png"][i % 3]),
      alt: "",
      className: "drift",
      style: {
        position: "absolute",
        left: 8 + i * 10 + "%",
        bottom: -30,
        width: 22 + i % 3 * 8,
        animationDelay: i * .9 + "s",
        animationDuration: 8 + i % 4 + "s"
      }
    })));
  }
  const Field = ({
    label,
    children,
    hint
  }) => /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontSize: 13,
      color: "#3F4249",
      fontWeight: 500
    }
  }, label, children, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "#8A8D96",
      fontWeight: 400
    }
  }, hint));
  const box = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    height: 46,
    padding: "0 14px",
    borderRadius: 12,
    border: "1.5px solid #E8E2D8",
    background: "#fff",
    transition: "border-color .2s, box-shadow .2s"
  };
  function TextIn({
    value,
    onChange,
    placeholder,
    type = "text",
    right,
    ok,
    left
  }) {
    const [f, setF] = React.useState(false);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...box,
        borderColor: f ? "var(--accent)" : "#E8E2D8",
        boxShadow: f ? "0 0 0 4px var(--accent-ring)" : "none"
      }
    }, left, /*#__PURE__*/React.createElement("input", {
      type: type,
      value: value,
      onChange: e => onChange(e.target.value),
      placeholder: placeholder,
      onFocus: () => setF(true),
      onBlur: () => setF(false),
      style: {
        flex: 1,
        minWidth: 0,
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        color: "#17181C"
      }
    }), ok && /*#__PURE__*/React.createElement("span", {
      className: "cellin",
      style: {
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "#34B76C",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    })), right);
  }
  const Sel = ({
    value,
    onChange,
    opts
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      ...box,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      flex: 1,
      appearance: "none",
      WebkitAppearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "#17181C"
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 16
  }));
  function Progress({
    step,
    total = 4
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6,
        flex: 1,
        justifyContent: "center"
      }
    }, Array.from({
      length: total
    }, (_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        width: i === step ? 36 : 22,
        height: 5,
        borderRadius: 3,
        background: i <= step ? "var(--accent)" : "#E5DFD5",
        transition: "all .4s cubic-bezier(.34,1.56,.64,1)"
      }
    })));
  }
  function Head({
    onBack,
    step,
    skip,
    onSkip
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      "aria-label": "Atr\xE1s",
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "none",
        background: "#F1ECE4",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })), step >= 0 ? /*#__PURE__*/React.createElement(Progress, {
      step: step
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), skip ? /*#__PURE__*/React.createElement("button", {
      onClick: onSkip,
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "#3F4249"
      }
    }, skip) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40
      }
    }));
  }
  const Bubble = ({
    bit,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    className: "rv",
    style: {
      "--i": 6,
      display: "flex",
      alignItems: "flex-end",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img(bit),
    alt: "Bit",
    className: "bob",
    style: {
      height: 96,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "12px 16px",
      borderRadius: "18px 18px 18px 4px",
      background: "#fff",
      boxShadow: "0 10px 26px rgba(23,24,28,.10)",
      fontSize: 14,
      lineHeight: 1.45,
      color: "#2C2E33",
      marginBottom: 28
    }
  }, children));
  function Splash({
    go
  }) {
    const [dot, setDot] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => setDot(d => (d + 1) % 4), 2600);
      return () => clearInterval(t);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      className: "onb-splash",
      style: {
        position: "relative",
        zIndex: 2,
        flex: 1,
        display: "grid",
        gridTemplateColumns: "minmax(340px, 480px) minmax(0,1fr)",
        alignItems: "center",
        gap: 40,
        padding: "40px 6vw"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 22,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("logo/ez-drumschool-wordmark-white.png"),
      alt: "EZ DrumSchool",
      className: "rv logo-glow",
      style: {
        "--i": 0,
        width: 260
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "rv",
      style: {
        "--i": 1,
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: ".34em",
        lineHeight: 1.8,
        color: "rgba(255,255,255,.85)"
      }
    }, "M\xC1S QUE BATER\xCDA,", /*#__PURE__*/React.createElement("br", null), "ES TU HISTORIA."), /*#__PURE__*/React.createElement("span", {
      className: "rv wiggle",
      style: {
        "--i": 2,
        fontFamily: "var(--font-hand)",
        fontSize: 40,
        lineHeight: 1.05,
        color: "#fff",
        transform: "rotate(-4deg)",
        alignSelf: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Letters, {
      text: "Un ritmo para\ncada etapa",
      delay: 500
    })), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 3,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 10,
        maxWidth: 380
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      onClick: () => go("rol"),
      iconRight: "arrow-right",
      className: "cta-shine"
    }, "Comenzar"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "lg",
      fullWidth: true,
      onClick: () => go("login"),
      style: {
        background: "transparent",
        color: "#fff",
        border: "1.5px solid rgba(255,255,255,.7)"
      }
    }, "Ya tengo una cuenta")), /*#__PURE__*/React.createElement("span", {
      className: "rv",
      style: {
        "--i": 4,
        display: "flex",
        gap: 8
      }
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        width: i === dot ? 26 : 9,
        height: 9,
        borderRadius: 5,
        background: i === dot ? "var(--accent)" : "rgba(255,255,255,.45)",
        transition: "all .4s"
      }
    }))), /*#__PURE__*/React.createElement("span", {
      className: "rv",
      style: {
        "--i": 5,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: ".34em",
        color: "rgba(255,255,255,.7)"
      }
    }, "APRENDE \xB7 PRACTICA \xB7 AVANZA")), /*#__PURE__*/React.createElement("div", {
      className: "onb-art",
      style: {
        position: "relative",
        height: "min(78vh, 680px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rings",
      style: {
        position: "absolute",
        left: "50%",
        top: "58%",
        width: 520,
        height: 520,
        marginLeft: -260,
        marginTop: -260
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "beat-ring",
      style: {
        position: "absolute",
        inset: 90,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(90,124,255,.35), transparent 65%)"
      }
    }), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ripple",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "2px solid rgba(140,170,255,.55)",
        animationDelay: i * 1.2 + "s"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        ...px(10)
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("onb/bateria.png"),
      alt: "",
      className: "beat",
      style: {
        position: "absolute",
        left: "50%",
        bottom: 0,
        width: "min(620px, 92%)",
        marginLeft: "calc(min(620px, 92%) / -2)",
        filter: "drop-shadow(0 30px 40px rgba(0,0,0,.5))"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        ...px(22)
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("onb/mateo-baquetas.png"),
      alt: "Mateo",
      className: "hero-mateo",
      style: {
        position: "absolute",
        left: "50%",
        bottom: "14%",
        height: "78%",
        transform: "translateX(-58%)",
        filter: "drop-shadow(0 24px 30px rgba(0,0,0,.45))"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        ...px(34)
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("onb/bit-saludo.png"),
      alt: "Bit",
      className: "bob",
      style: {
        position: "absolute",
        left: "58%",
        bottom: "6%",
        height: "26%"
      }
    })), /*#__PURE__*/React.createElement("img", {
      src: img("bit/celebrando.png"),
      alt: "",
      className: "spark-pop",
      style: {
        position: "absolute",
        right: "8%",
        top: "6%",
        height: 90,
        opacity: .0
      }
    }), [[18, 18, "music/nota-azul.png", 44], [78, 22, "music/estrella.png", 48], [12, 52, "music/nota-roja.png", 36], [84, 58, "music/corona.png", 54]].map(([x, y, s, w], i) => /*#__PURE__*/React.createElement("img", {
      key: i,
      src: img(s),
      alt: "",
      className: "orbit",
      style: {
        position: "absolute",
        left: x + "%",
        top: y + "%",
        width: w,
        animationDelay: i * -1.5 + "s",
        translate: "calc(var(--mx,0) * " + (40 + i * 8) + "px) calc(var(--my,0) * " + (40 + i * 8) + "px)"
      }
    }))));
  }
  function Login({
    go,
    done
  }) {
    const [u, setU] = React.useState("");
    const [p, setP] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [err, setErr] = React.useState("");
    const submit = () => {
      if (!u || p.length < 4) {
        setErr("Escribe tu usuario y una contraseña de al menos 4 caracteres.");
        return;
      }
      done();
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      onBack: () => go("splash"),
      step: -1
    }), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "8px 0 4px",
        fontFamily: "var(--font-display)",
        fontSize: 34,
        fontWeight: 800
      }
    }, "\xA1Hola de nuevo!"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: "#5D6068"
      }
    }, "Entra y sigue tocando donde lo dejaste.")), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 2,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Usuario o correo"
    }, /*#__PURE__*/React.createElement(TextIn, {
      value: u,
      onChange: v => {
        setU(v);
        setErr("");
      },
      placeholder: "baterista_pro",
      left: /*#__PURE__*/React.createElement(Icon, {
        name: "user-round",
        size: 17,
        color: "#8A8D96"
      })
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Contrase\xF1a"
    }, /*#__PURE__*/React.createElement(TextIn, {
      type: show ? "text" : "password",
      value: p,
      onChange: v => {
        setP(v);
        setErr("");
      },
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      left: /*#__PURE__*/React.createElement(Icon, {
        name: "lock",
        size: 17,
        color: "#8A8D96"
      }),
      right: /*#__PURE__*/React.createElement("button", {
        onClick: e => {
          e.preventDefault();
          setShow(!show);
        },
        "aria-label": "Mostrar contrase\xF1a",
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          display: "inline-flex"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: show ? "eye-off" : "eye",
        size: 18,
        color: "#5D6068"
      }))
    })), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        alignSelf: "flex-end",
        fontSize: 13.5,
        fontWeight: 600
      }
    }, "\xBFOlvidaste tu contrase\xF1a?"), err && /*#__PURE__*/React.createElement("span", {
      className: "swap",
      style: {
        fontSize: 13,
        color: "var(--ez-danger)",
        display: "flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-alert",
      size: 16
    }), err)), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 3,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      iconRight: "arrow-right",
      onClick: submit
    }, "Entrar"), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: "center",
        fontSize: 14,
        color: "#5D6068"
      }
    }, "\xBFEres nuevo? ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("rol");
      },
      style: {
        fontWeight: 700
      }
    }, "Crea tu cuenta"))), /*#__PURE__*/React.createElement(Bubble, {
      bit: "onb/bit-saludo.png"
    }, "\xA1Qu\xE9 bueno verte! Tu bater\xEDa te estaba esperando."));
  }
  function Rol({
    go,
    setRole
  }) {
    const R = [["alumno", "Alumno", "Quiero aprender y practicar.", "onb/mateo-audifonos.png", "linear-gradient(120deg,#E6ECFF,#C9D6FF)"], ["profesor", "Profesor", "Quiero enseñar y gestionar mis clases.", "onb/profe-baquetas.png", "linear-gradient(120deg,#FFEDE6,#FFD3C4)"], ["padre", "Padre / Madre", "Quiero acompañar el progreso de mi hijo(a).", "onb/abrazo.png", "linear-gradient(120deg,#E5F7EC,#C9EDD7)"]];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      onBack: () => go("splash"),
      step: 0,
      skip: "Saltar",
      onSkip: () => go("registro")
    }), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "8px 0 4px",
        fontFamily: "var(--font-display)",
        fontSize: 36,
        fontWeight: 800
      }
    }, "\xBFQui\xE9n eres?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        color: "#5D6068"
      }
    }, "Elige tu rol para empezar.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, R.map(([id, t, d, a, bg], i) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => {
        setRole(id);
        go(id === "alumno" ? "registro" : id === "padre" ? "padre" : "listo");
      },
      className: "rv role",
      style: {
        "--i": i + 2,
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: 138,
        padding: "0 18px 0 0",
        borderRadius: 20,
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
        background: bg,
        textAlign: "left",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(a),
      alt: "",
      className: "role-art",
      style: {
        width: "48%",
        height: 150,
        objectFit: "contain",
        objectPosition: "bottom",
        alignSelf: "flex-end"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 18,
        fontWeight: 600,
        color: "#17181C"
      }
    }, "Soy"), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26,
        fontWeight: 800,
        lineHeight: 1,
        color: "#17181C"
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "#3F4249",
        marginTop: 6,
        lineHeight: 1.35
      }
    }, d)), /*#__PURE__*/React.createElement("span", {
      className: "role-go",
      style: {
        position: "absolute",
        right: 14,
        bottom: 14,
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(23,24,28,.12)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18
    }))))), /*#__PURE__*/React.createElement(Bubble, {
      bit: "onb/bit-baquetas.png"
    }, /*#__PURE__*/React.createElement("b", null, "\xA1Genial!"), /*#__PURE__*/React.createElement("br", null), "Cada uno vive la m\xFAsica a su manera. ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent)"
      }
    }, "\u266A")));
  }
  const AVATARS = ["onb/cara-feliz.png", "onb/cara-lentes.png", "onb/cara-audifonos.png", "onb/cara-riendo.png", "onb/cara-tranquilo.png"];
  function Avatar({
    src,
    size = 150,
    tint = "linear-gradient(160deg,#DCE4FF,#B8C8FF)"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: size,
        height: size,
        alignSelf: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "avatar-ring",
      style: {
        position: "absolute",
        inset: -8,
        borderRadius: "50%",
        background: "conic-gradient(from 0deg, var(--accent), #7C4DEB, #EE4433, var(--accent))",
        opacity: .9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: -3,
        borderRadius: "50%",
        background: "#fff"
      }
    }), /*#__PURE__*/React.createElement("span", {
      key: src,
      className: "cellin",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        overflow: "hidden",
        background: tint
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(src),
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        right: -2,
        bottom: 6,
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(23,24,28,.18)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "camera",
      size: 19
    })));
  }
  function Registro({
    go,
    form,
    set
  }) {
    const okUser = /^[a-z0-9_]{4,}$/i.test(form.user);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      onBack: () => go("rol"),
      step: 1
    }), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "4px 0 4px",
        fontFamily: "var(--font-display)",
        fontSize: 30,
        fontWeight: 800
      }
    }, "Registro de alumno"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: "#5D6068"
      }
    }, "Crea tu perfil y empieza tu historia en EZ.")), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 2,
        display: "flex",
        justifyContent: "center",
        padding: "8px 0"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: form.avatar,
      size: 132
    })), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 3,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Nombre de usuario",
      hint: "Este ser\xE1 tu nombre en la app. Puedes usar letras, n\xFAmeros y _"
    }, /*#__PURE__*/React.createElement(TextIn, {
      value: form.user,
      onChange: v => set({
        user: v
      }),
      ok: okUser
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Nombre completo"
    }, /*#__PURE__*/React.createElement(TextIn, {
      value: form.name,
      onChange: v => set({
        name: v
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1.3fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Edad"
    }, /*#__PURE__*/React.createElement(Sel, {
      value: form.age,
      onChange: v => set({
        age: v
      }),
      opts: ["7 años", "8 años", "9 años", "10 años", "11 años", "12 años", "13 años", "14 años"]
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Fecha de nacimiento"
    }, /*#__PURE__*/React.createElement(TextIn, {
      value: form.dob,
      onChange: v => set({
        dob: v
      }),
      right: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar",
        size: 18
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#3F4249",
        fontWeight: 500
      }
    }, "G\xE9nero ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#8A8D96",
        fontWeight: 400
      }
    }, "(opcional)")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, [["Masculino", "mars"], ["Femenino", "venus"], ["Otro", null]].map(([g, ic]) => {
      const on = form.gender === g;
      return /*#__PURE__*/React.createElement("button", {
        key: g,
        onClick: () => set({
          gender: g
        }),
        style: {
          height: 38,
          padding: "0 14px",
          borderRadius: 10,
          border: "1.5px solid " + (on ? "var(--accent)" : "#E8E2D8"),
          background: on ? "var(--accent)" : "#fff",
          color: on ? "#fff" : "#2C2E33",
          fontFamily: "var(--font-body)",
          fontSize: 13.5,
          fontWeight: on ? 700 : 500,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          transition: "all .2s"
        }
      }, on && /*#__PURE__*/React.createElement(Icon, {
        name: "circle-check",
        size: 15
      }), !on && ic && /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 15
      }), g);
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "#3F4249",
        fontWeight: 600
      }
    }, "Selecciona tu avatar"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, AVATARS.map(a => {
      const on = form.avatar === a;
      return /*#__PURE__*/React.createElement("button", {
        key: a,
        onClick: () => set({
          avatar: a
        }),
        "aria-label": "Avatar",
        style: {
          width: 62,
          height: 62,
          padding: 0,
          borderRadius: 14,
          overflow: "hidden",
          cursor: "pointer",
          border: "3px solid " + (on ? "var(--accent)" : "transparent"),
          background: "#F1ECE4",
          boxShadow: on ? "var(--shadow-glow-accent)" : "none",
          transform: on ? "translateY(-3px)" : "none",
          transition: "all .25s cubic-bezier(.34,1.56,.64,1)"
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: img(a),
        alt: "",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top"
        }
      }));
    })))), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      iconRight: "arrow-right",
      disabled: !okUser || !form.name,
      onClick: () => go("padre")
    }, "Siguiente")));
  }
  function Padre({
    go,
    form,
    set,
    role
  }) {
    const okMail = /\S+@\S+\.\S+/.test(form.mail);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      onBack: () => go(role === "padre" ? "rol" : "registro"),
      step: 2
    }), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "4px 0 4px",
        fontFamily: "var(--font-display)",
        fontSize: 30,
        fontWeight: 800
      }
    }, "Datos del padre o madre"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        color: "#5D6068"
      }
    }, "Necesitamos algunos datos para acompa\xF1ar el proceso de tu hijo(a).")), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 2,
        display: "flex",
        justifyContent: "center",
        padding: "8px 0"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: "onb/mama.png",
      size: 132,
      tint: "linear-gradient(160deg,#FFE8DE,#FFD3C4)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 3,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Nombre completo"
    }, /*#__PURE__*/React.createElement(TextIn, {
      value: form.pname,
      onChange: v => set({
        pname: v
      })
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Relaci\xF3n con el alumno"
    }, /*#__PURE__*/React.createElement(Sel, {
      value: form.rel,
      onChange: v => set({
        rel: v
      }),
      opts: ["Madre", "Padre", "Tutor(a)", "Otro familiar"]
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Correo electr\xF3nico"
    }, /*#__PURE__*/React.createElement(TextIn, {
      value: form.mail,
      onChange: v => set({
        mail: v
      }),
      right: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 18
      }),
      ok: okMail
    })), /*#__PURE__*/React.createElement(Field, {
      label: "N\xFAmero de celular"
    }, /*#__PURE__*/React.createElement(TextIn, {
      value: form.phone,
      onChange: v => set({
        phone: v
      }),
      left: /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          paddingRight: 10,
          borderRight: "1px solid #E8E2D8",
          fontSize: 15,
          color: "#17181C"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 15,
          borderRadius: 2,
          background: "linear-gradient(90deg,#D91023 33%,#fff 33% 66%,#D91023 66%)",
          boxShadow: "0 0 0 1px #eee"
        }
      }), "+51")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "4px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 14
      }
    }, "Recibir notificaciones"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#8A8D96"
      }
    }, "Te enviaremos avances, reportes y avisos importantes.")), /*#__PURE__*/React.createElement("button", {
      onClick: () => set({
        notif: !form.notif
      }),
      "aria-label": "Recibir notificaciones",
      style: {
        width: 52,
        height: 30,
        borderRadius: 15,
        border: "none",
        background: form.notif ? "var(--accent)" : "#D9D3C8",
        position: "relative",
        cursor: "pointer",
        transition: "background .25s"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        position: "absolute",
        top: 3,
        left: form.notif ? 25 : 3,
        width: 24,
        height: 24,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,.2)",
        transition: "left .3s cubic-bezier(.34,1.56,.64,1)"
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      iconRight: "arrow-right",
      disabled: !form.pname || !okMail,
      onClick: () => go("listo")
    }, "Siguiente")), /*#__PURE__*/React.createElement(Bubble, {
      bit: "onb/bit-corazon.png"
    }, /*#__PURE__*/React.createElement("b", null, "\xA1Gracias!"), /*#__PURE__*/React.createElement("br", null), "Tu apoyo hace que este viaje sea especial. ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#EE4433"
      }
    }, "\u2665")));
  }
  function Confetti() {
    const C = ["#2F57F5", "#EE4433", "#34B76C", "#7C4DEB", "#FFB547", "#fff"];
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 3
      }
    }, Array.from({
      length: 60
    }, (_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: "confetti",
      style: {
        position: "absolute",
        left: i * 17 % 100 + "%",
        top: -20,
        width: 6 + i % 3 * 3,
        height: 10 + i % 4 * 3,
        background: C[i % C.length],
        borderRadius: i % 3 ? 2 : "50%",
        animationDelay: i % 20 * .12 + "s",
        animationDuration: 2.6 + i % 5 * .4 + "s",
        "--x": (i % 7 - 3) * 30 + "px",
        "--r": i * 47 % 720 + "deg"
      }
    })));
  }
  function Listo({
    done
  }) {
    const [n, setN] = React.useState(0);
    React.useEffect(() => {
      const t = [600, 1200, 1800].map((ms, i) => setTimeout(() => setN(i + 1), ms));
      return () => t.forEach(clearTimeout);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        zIndex: 2,
        flex: 1,
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(340px,460px)",
        alignItems: "center",
        gap: 40,
        padding: "40px 6vw"
      },
      className: "onb-splash"
    }, /*#__PURE__*/React.createElement(Confetti, null), /*#__PURE__*/React.createElement("div", {
      className: "onb-art",
      style: {
        position: "relative",
        height: "min(78vh, 660px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "55%",
        width: 560,
        height: 560,
        marginLeft: -280,
        marginTop: -280
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ripple",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "2px solid rgba(255,200,140,.5)",
        animationDelay: i * 1.2 + "s"
      }
    }))), /*#__PURE__*/React.createElement("img", {
      src: img("onb/bateria.png"),
      alt: "",
      style: {
        position: "absolute",
        left: "50%",
        bottom: 0,
        width: "min(620px, 92%)",
        transform: "translateX(-50%)"
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: img("onb/mateo-puno.png"),
      alt: "Mateo",
      className: "jump",
      style: {
        position: "absolute",
        left: "50%",
        bottom: "16%",
        height: "74%",
        transform: "translateX(-60%)",
        filter: "drop-shadow(0 24px 30px rgba(0,0,0,.45))"
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: img("onb/bit-corona.png"),
      alt: "Bit",
      className: "bob",
      style: {
        position: "absolute",
        left: "56%",
        bottom: "6%",
        height: "28%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "rv pop-title",
      style: {
        "--i": 0,
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 64,
        fontWeight: 800,
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement(Letters, {
      text: "\xA1Todo listo!",
      delay: 200,
      step: 60
    })), /*#__PURE__*/React.createElement("span", {
      className: "rv",
      style: {
        "--i": 1,
        fontSize: 22,
        lineHeight: 1.3
      }
    }, "Bienvenido a", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "EZ DrumSchool")), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 2,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        padding: 22,
        borderRadius: 20,
        background: "rgba(255,255,255,.08)",
        border: "1px solid rgba(255,255,255,.14)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)"
      }
    }, ["Tu cuenta ha sido creada", "Tu perfil está configurado", "Ya puedes explorar la app"].map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontSize: 16,
        opacity: i < n ? 1 : .35,
        transition: "opacity .4s"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: i < n ? "#34B76C" : "rgba(255,255,255,.2)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transform: i < n ? "scale(1)" : "scale(.7)",
        transition: "all .4s cubic-bezier(.34,1.56,.64,1)"
      }
    }, i < n && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15,
      color: "#fff"
    })), t))), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 3
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      iconRight: "arrow-right",
      onClick: done
    }, "Comenzar")), /*#__PURE__*/React.createElement("span", {
      className: "rv wiggle",
      style: {
        "--i": 4,
        fontFamily: "var(--font-hand)",
        fontSize: 38,
        lineHeight: 1.05,
        alignSelf: "center",
        transform: "rotate(-6deg)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Letters, {
      text: "Ahora sí...\n¡A tocar!",
      delay: 2200,
      step: 55
    }))));
  }
  function SideArt({
    step,
    form
  }) {
    const A = {
      login: ["onb/mateo-guino-baquetas.png", "Bienvenido de vuelta"],
      rol: ["onb/mateo-pulgar.png", "Tu historia empieza aquí"],
      registro: ["onb/mateo-redoblante.png", "Un perfil, mil ritmos"],
      padre: ["onb/mama-selfie.png", "Juntos suena mejor"]
    }[step];
    return /*#__PURE__*/React.createElement("div", {
      className: "onb-art",
      style: {
        position: "relative",
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        alignSelf: "stretch"
      }
    }, /*#__PURE__*/React.createElement("span", {
      key: step + "t",
      className: "rv wiggle",
      style: {
        position: "absolute",
        top: "10%",
        left: "8%",
        fontFamily: "var(--font-hand)",
        fontSize: 44,
        lineHeight: 1,
        color: "#fff",
        transform: "rotate(-6deg)"
      }
    }, A[1]), /*#__PURE__*/React.createElement("img", {
      src: img("logo/ez-drumschool-wordmark-white.png"),
      alt: "EZ DrumSchool",
      style: {
        position: "absolute",
        top: 34,
        right: 40,
        width: 150,
        opacity: .9
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        bottom: "22%",
        width: 460,
        height: 460,
        marginLeft: -230
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "ripple",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "2px solid rgba(140,170,255,.45)",
        animationDelay: i * 1.2 + "s"
      }
    }))), /*#__PURE__*/React.createElement("img", {
      key: step,
      src: img(A[0]),
      alt: "",
      className: "art-swap",
      style: {
        ...px(18),
        position: "relative",
        height: "min(70vh, 600px)",
        maxWidth: "90%",
        objectFit: "contain",
        filter: "drop-shadow(0 30px 40px rgba(0,0,0,.5))"
      }
    }));
  }
  function SwOnboarding({
    onDone
  }) {
    const [step, setStep] = React.useState("splash");
    const [role, setRole] = React.useState("alumno");
    const [form, setForm] = React.useState({
      user: "baterista_pro",
      name: "Santiago Rojas",
      age: "10 años",
      dob: "10 / 04 / 2015",
      gender: "Masculino",
      avatar: AVATARS[0],
      pname: "María Torres",
      rel: "Madre",
      mail: "maria.torres@email.com",
      phone: "987 654 321",
      notif: true
    });
    const set = p => setForm(f => ({
      ...f,
      ...p
    }));
    const go = s => setStep(s);
    const card = step !== "splash" && step !== "listo";
    const root = React.useRef(null);
    const [bursts, setBursts] = React.useState([]);
    const move = e => {
      const el = root.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width,
        y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", (x - .5).toFixed(3));
      el.style.setProperty("--my", (y - .5).toFixed(3));
      el.style.setProperty("--px", (x * 100).toFixed(1) + "%");
      el.style.setProperty("--py", (y * 100).toFixed(1) + "%");
    };
    const click = e => {
      if (!e.target.closest("button")) return;
      const id = Date.now() + Math.random();
      setBursts(b => [...b, {
        id,
        x: e.clientX,
        y: e.clientY
      }]);
      setTimeout(() => setBursts(b => b.filter(q => q.id !== id)), 800);
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: root,
      onMouseMove: move,
      onClickCapture: click,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "flex",
        overflow: "auto",
        background: "radial-gradient(60% 80% at 70% 40%, rgba(120,70,30,.55), transparent 70%), radial-gradient(50% 60% at 10% 100%, rgba(47,87,245,.25), transparent 70%), linear-gradient(160deg,#120F0E 0%,#1B1512 50%,#0E0D12 100%)"
      }
    }, /*#__PURE__*/React.createElement(Molinos, null), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        background: "radial-gradient(420px circle at var(--px,60%) var(--py,40%), rgba(140,170,255,.16), transparent 60%)"
      }
    }), (step === "splash" || step === "listo") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EqStrip, null), /*#__PURE__*/React.createElement(Marquee, {
      text: step === "splash" ? "APRENDE · PRACTICA · AVANZA" : "¡A TOCAR!"
    })), bursts.map(b => /*#__PURE__*/React.createElement("span", {
      key: b.id,
      "aria-hidden": "true",
      style: {
        position: "fixed",
        left: b.x,
        top: b.y,
        zIndex: 80,
        pointerEvents: "none"
      }
    }, Array.from({
      length: 10
    }, (_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: "burst",
      style: {
        position: "absolute",
        width: 7,
        height: 7,
        marginLeft: -3.5,
        marginTop: -3.5,
        borderRadius: "50%",
        background: ["#2F57F5", "#EE4433", "#34B76C", "#FFB547", "#fff"][i % 5],
        "--a": i * 36 + "deg"
      }
    })), /*#__PURE__*/React.createElement("i", {
      className: "burst-ring",
      style: {
        position: "absolute",
        width: 60,
        height: 60,
        marginLeft: -30,
        marginTop: -30,
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,.8)"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-grain",
      "aria-hidden": "true",
      style: {
        position: "absolute"
      }
    }), step === "splash" && /*#__PURE__*/React.createElement(Splash, {
      go: go
    }), step === "listo" && /*#__PURE__*/React.createElement(Listo, {
      done: onDone
    }), card && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        zIndex: 2,
        flex: 1,
        display: "flex",
        alignItems: "stretch",
        gap: 30,
        padding: "28px 4vw"
      }
    }, /*#__PURE__*/React.createElement(SideArt, {
      step: step,
      form: form
    }), /*#__PURE__*/React.createElement("div", {
      key: step,
      className: "card-in",
      style: {
        transform: "perspective(1400px) rotateY(calc(var(--mx,0) * -4deg)) rotateX(calc(var(--my,0) * 3deg))",
        transition: "transform .3s ease-out",
        width: "min(470px, 100%)",
        flex: "none",
        alignSelf: "center",
        maxHeight: "calc(100vh - 56px)",
        overflow: "auto",
        background: "#FBF8F3",
        borderRadius: 30,
        padding: "24px 26px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        boxShadow: "0 40px 80px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.08)"
      }
    }, step === "login" && /*#__PURE__*/React.createElement(Login, {
      go: go,
      done: onDone
    }), step === "rol" && /*#__PURE__*/React.createElement(Rol, {
      go: go,
      setRole: setRole
    }), step === "registro" && /*#__PURE__*/React.createElement(Registro, {
      go: go,
      form: form,
      set: set
    }), step === "padre" && /*#__PURE__*/React.createElement(Padre, {
      go: go,
      form: form,
      set: set,
      role: role
    }))));
  }
  Object.assign(window, {
    SwOnboarding
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwOnboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwProgreso.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  function Nivel() {
    return /*#__PURE__*/React.createElement(Panel, {
      i: 1,
      title: "Tu nivel actual",
      style: {
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("badge/medalla-nivel.png"),
      alt: "",
      className: "medal",
      style: {
        width: 92
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 40,
        fontWeight: 800,
        lineHeight: 1
      }
    }, "Nivel 1"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        color: "#3F4249",
        marginTop: 4
      }
    }, "PULSO"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0
      }
    }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement(React.Fragment, {
      key: n
    }, n > 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 3,
        background: "#ECE7DF"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 18,
        background: n === 1 ? "var(--accent)" : "#F1ECE4",
        color: n === 1 ? "#fff" : "#5D6068",
        boxShadow: n === 1 ? "var(--shadow-glow-accent)" : "none"
      }
    }, n)))));
  }
  function Resumen() {
    return /*#__PURE__*/React.createElement(Panel, {
      i: 2,
      title: "Resumen de tu progreso",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "chart-no-axes-column-increasing",
        size: 22
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(Ring, {
      value: 65,
      size: 200,
      stroke: 26,
      color: "var(--accent)"
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 44,
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: 65,
      suffix: "%"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: "#3F4249",
        marginTop: 4
      }
    }, "Completado")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 14,
        height: 14,
        borderRadius: 7,
        background: "var(--accent)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, "Completadas"), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 22
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: 13
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 14,
        height: 14,
        borderRadius: 7,
        background: "#D9D3C8"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, "Pendientes"), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 22
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: 7
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid #EFEBE4",
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#3F4249"
      }
    }, "Total de sesiones"), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26
      }
    }, "20")))));
  }
  function Competencias() {
    const rows = [["music", "#3B74F0", "Pulso y tempo", 90], ["drum", "#F26B3A", "Dinámica", 70], ["arrow-left-right", "#34B76C", "Independencia", 60], ["book-open", "#7C4DEB", "Lectura", 50]];
    const [hover, setHover] = React.useState(null);
    return /*#__PURE__*/React.createElement(Panel, {
      i: 3,
      title: "Tus competencias",
      icon: /*#__PURE__*/React.createElement("img", {
        src: img("music/estrella.png"),
        alt: "",
        style: {
          width: 28
        }
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, rows.map(([ic, c, l, v], i) => /*#__PURE__*/React.createElement("div", {
      key: l,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        cursor: "default"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: c,
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
        transform: hover === i ? "scale(1.1) rotate(-6deg)" : "none",
        transition: "transform .3s cubic-bezier(.34,1.56,.64,1)",
        boxShadow: "0 6px 14px " + c + "55"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: "#17181C"
      }
    }, l), /*#__PURE__*/React.createElement(Bar, {
      value: v,
      color: c,
      height: 11
    })), /*#__PURE__*/React.createElement("b", {
      style: {
        width: 48,
        textAlign: "right",
        fontSize: 18
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: v,
      suffix: "%"
    }))))));
  }
  function Actividad() {
    const rows = [["circle-check", "#34B76C", "Completaste la Sesión 5 · Dinámica en la caja", "Hoy, 4:30 PM"], ["circle-play", "#3B74F0", "Realizaste tu Misión 15", "Ayer, 6:20 PM"], ["star", "#F2A516", "Lograste el nivel 1", "Ayer, 5:15 PM"]];
    return /*#__PURE__*/React.createElement(Panel, {
      i: 4,
      title: "Tu actividad reciente",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar",
        size: 22
      }),
      action: /*#__PURE__*/React.createElement("a", {
        href: "#",
        style: {
          fontSize: 15,
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          gap: 6
        }
      }, "Ver todo ", /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, rows.map(([ic, c, t, w], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "rv row-hover",
      style: {
        "--i": i + 5,
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 8px",
        borderTop: "1px solid #EFEBE4",
        borderRadius: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 24,
      color: c
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14.5
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "#8A8D96"
      }
    }, w)))));
  }
  function Mision() {
    return /*#__PURE__*/React.createElement(Panel, {
      i: 5,
      title: "Tu pr\xF3xima misi\xF3n",
      icon: /*#__PURE__*/React.createElement("img", {
        src: img("music/diana.png"),
        alt: "",
        style: {
          width: 28
        }
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        borderRadius: 18,
        padding: 20,
        minHeight: 150,
        background: "linear-gradient(120deg, var(--accent-soft), #fff 80%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(window.Ripples, {
      color: "rgba(47,87,245,.25)",
      size: 200,
      style: {
        right: 10,
        top: -20
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "tick",
      style: {
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 16px rgba(23,24,28,.1)",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "timer",
      size: 30,
      color: "#17181C"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 28,
        fontWeight: 700
      }
    }, "Misi\xF3n 15"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#3F4249",
        margin: "2px 0 14px"
      }
    }, "Practica 5 d\xEDas esta semana"), /*#__PURE__*/React.createElement(Button, {
      iconRight: "arrow-right"
    }, "Ir a mi misi\xF3n")), /*#__PURE__*/React.createElement("img", {
      src: img("kit/pad-mision.png"),
      alt: "",
      className: "floaty",
      style: {
        position: "relative",
        width: 150,
        mixBlendMode: "multiply"
      }
    })));
  }
  function SwProgreso() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        "--side": "330px",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "burst",
      title: "Tu progreso",
      body: "Ves c\xF3mo avanzas en tu aprendizaje.",
      art: "mateo/bateria-baquetas-arriba.png",
      artStyle: {
        right: 40,
        height: 300
      },
      height: 270
    }, /*#__PURE__*/React.createElement("div", {
      className: "glint",
      style: {
        marginTop: 18,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 20px",
        borderRadius: 18,
        background: "rgba(255,255,255,.75)",
        backdropFilter: "blur(8px)",
        maxWidth: 440,
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("icon3d/trofeo.png"),
      alt: "",
      className: "wiggle",
      style: {
        width: 62,
        mixBlendMode: "multiply"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 700
      }
    }, "\xA1Vas muy bien!"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#3F4249"
      }
    }, "Ya completaste el 65% de tu programa.")))), /*#__PURE__*/React.createElement(Nivel, null)), /*#__PURE__*/React.createElement("div", {
      className: "sw-2"
    }, /*#__PURE__*/React.createElement(Resumen, null), /*#__PURE__*/React.createElement(Competencias, null)), /*#__PURE__*/React.createElement("div", {
      className: "sw-2"
    }, /*#__PURE__*/React.createElement(Actividad, null), /*#__PURE__*/React.createElement(Mision, null)));
  }
  Object.assign(window, {
    SwProgreso
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwProgreso.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwRepertorio.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button,
    Tabs
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const SONGS = [{
    id: 1,
    t: "Firmes en fe",
    a: "Miel San Marcos",
    n: 1,
    bpm: 90,
    sec: 4,
    p: 80,
    g: "Worship",
    fav: false,
    hue: ["#2F57F5", "#7C4DEB"]
  }, {
    id: 2,
    t: "Tu fidelidad",
    a: "Marcos Witt",
    n: 1,
    bpm: 72,
    sec: 5,
    p: 40,
    g: "Worship",
    fav: false,
    hue: ["#F26B3A", "#EE4433"]
  }, {
    id: 3,
    t: "Grande eres tú",
    a: "Samu Robles",
    n: 2,
    bpm: 98,
    sec: 6,
    p: 60,
    g: "Worship",
    fav: true,
    hue: ["#F2A516", "#EE4433"]
  }, {
    id: 4,
    t: "Tu amor me sostiene",
    a: "Alex Zurdo",
    n: 3,
    bpm: 100,
    sec: 5,
    p: 20,
    g: "Urbano",
    fav: false,
    hue: ["#2EC4A6", "#2F57F5"]
  }, {
    id: 5,
    t: "Dios de promesas",
    a: "Jaime Murrell",
    n: 3,
    bpm: 90,
    sec: 6,
    p: 0,
    g: "Pop",
    fav: false,
    hue: ["#EE4433", "#7C4DEB"]
  }, {
    id: 6,
    t: "Nada me separará",
    a: "Oasis (versión)",
    n: 2,
    bpm: 110,
    sec: 5,
    p: 40,
    g: "Rock",
    fav: false,
    hue: ["#7C4DEB", "#EE5DA8"]
  }];
  const MAP = [["Intro", "#7E93B8", "0:00 – 0:18", 18], ["Estrofa", "#F2A516", "0:18 – 1:10", 52], ["Coro", "#F26157", "1:10 – 2:10", 60], ["Puente", "#5AB8F0", "2:10 – 2:50", 40]];
  function Stage({
    hue,
    height = 160,
    playing,
    children,
    radius = "18px 18px 0 0"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "stage",
      style: {
        position: "relative",
        height,
        borderRadius: radius,
        overflow: "hidden",
        background: "radial-gradient(70% 90% at 50% 120%, " + hue[0] + "AA, transparent 70%), radial-gradient(40% 60% at 15% 0%, " + hue[1] + "99, transparent 70%), radial-gradient(40% 60% at 85% 0%, " + hue[0] + "88, transparent 70%), #0E0F14"
      }
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "beam",
      style: {
        position: "absolute",
        top: -30,
        left: 14 + i * 23 + "%",
        width: 70,
        height: height + 80,
        background: "linear-gradient(180deg," + (i % 2 ? hue[0] : hue[1]) + "88, transparent 75%)",
        transformOrigin: "top center",
        filter: "blur(5px)",
        mixBlendMode: "screen",
        animationDelay: i * -1.7 + "s",
        animationPlayState: playing === false ? "paused" : "running"
      }
    })), Array.from({
      length: 14
    }, (_, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: "bokeh",
      style: {
        position: "absolute",
        left: i * 53 % 96 + "%",
        top: 20 + i * 29 % 60 + "%",
        width: 4 + i % 4 * 3,
        height: 4 + i % 4 * 3,
        borderRadius: "50%",
        background: "#fff",
        opacity: .18 + i % 3 * .1,
        animationDelay: i * .4 + "s"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "55%",
        background: "linear-gradient(0deg, rgba(8,8,12,.92), transparent)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0
      }
    }, children));
  }
  function SongCard({
    s,
    i,
    sel,
    onSel,
    onFav
  }) {
    return /*#__PURE__*/React.createElement("article", {
      onClick: onSel,
      className: "rv lift song",
      style: {
        "--i": i,
        cursor: "pointer",
        background: "#fff",
        borderRadius: 18,
        border: "1px solid " + (sel ? "var(--accent)" : "#EFEBE4"),
        boxShadow: sel ? "0 0 0 3px var(--accent-ring), 0 14px 30px rgba(23,24,28,.10)" : "0 8px 24px rgba(23,24,28,.05)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Stage, {
      hue: s.hue,
      height: 150
    }, /*#__PURE__*/React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        onFav();
      },
      "aria-label": "Favorita",
      className: "heart",
      style: {
        position: "absolute",
        top: 12,
        right: 12,
        width: 34,
        height: 34,
        borderRadius: "50%",
        border: "none",
        background: "rgba(0,0,0,.25)",
        backdropFilter: "blur(6px)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, s.fav ? /*#__PURE__*/React.createElement("img", {
      src: img("music/corazon.png"),
      alt: "",
      style: {
        width: 22
      }
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 18,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 16,
        bottom: 12,
        right: 16,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 700,
        textShadow: "0 2px 10px rgba(0,0,0,.4)"
      }
    }, "R", s.id, " \xB7 ", s.t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        opacity: .85
      }
    }, s.a), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(LevelPill, {
      n: s.n,
      solid: true
    }), sel && /*#__PURE__*/React.createElement(Eq, {
      n: 4,
      h: 16
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 16px",
        fontSize: 13,
        color: "#3F4249"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15
    }), s.bpm, " BPM"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "list-music",
      size: 15
    }), s.sec, " secciones"), /*#__PURE__*/React.createElement(Bar, {
      value: s.p,
      color: window.SW_LEVEL[s.n].solid,
      height: 8,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        width: 36,
        textAlign: "right"
      }
    }, s.p, "%")));
  }
  function Wave({
    playing,
    pos
  }) {
    const bars = React.useMemo(() => Array.from({
      length: 84
    }, (_, i) => 6 + Math.abs(Math.sin(i * .55) * 18 + Math.sin(i * 1.7) * 8)), []);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 2,
        height: 44
      }
    }, bars.map((h, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: playing ? "eqw" : "",
      style: {
        flex: 1,
        height: h,
        borderRadius: 2,
        background: i / bars.length < pos ? "var(--accent)" : "#C9D3F5",
        animationDelay: i % 7 * .09 + "s"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: pos * 100 + "%",
        top: -4,
        bottom: -4,
        width: 2,
        background: "#17181C",
        borderRadius: 2,
        transition: "left .25s linear"
      }
    }));
  }
  function Detail({
    s
  }) {
    const [tab, setTab] = React.useState("mapa");
    const [playing, setPlaying] = React.useState(false);
    const [pos, setPos] = React.useState(0);
    const [res, setRes] = React.useState("pista");
    React.useEffect(() => {
      setPlaying(false);
      setPos(0);
    }, [s.id]);
    React.useEffect(() => {
      if (!playing) return;
      const t = setInterval(() => setPos(p => p >= 1 ? 0 : p + 0.006), 100);
      return () => clearInterval(t);
    }, [playing]);
    const total = MAP.reduce((a, m) => a + m[3], 0);
    let acc = 0;
    const curSec = MAP.findIndex(m => {
      acc += m[3];
      return pos < acc / total;
    });
    const RES = [["pista", "music", "Pista original"], ["click", "timer", "Pista con click"], ["drums", "drum", "Solo batería"], ["vol", "sliders-vertical", "Bajar volumen"], ["loop", "repeat", "Loop A–B"]];
    const checks = [["Escucho y conozco", s.p >= 20], ["Toco el groove", s.p >= 40], ["Control de dinámica", s.p >= 60], ["Toco con la pista", s.p >= 100]];
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "swap",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        borderRadius: 22,
        overflow: "hidden",
        background: "#0E0F14",
        boxShadow: "0 20px 40px rgba(23,24,28,.18)"
      }
    }, /*#__PURE__*/React.createElement(Stage, {
      hue: s.hue,
      height: 240,
      playing: playing,
      radius: "0"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 14,
        right: 14,
        display: "flex",
        gap: 8,
        color: "#fff"
      }
    }, s.fav && /*#__PURE__*/React.createElement("img", {
      src: img("music/corazon.png"),
      alt: "",
      style: {
        width: 26
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "ellipsis-vertical",
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 18,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        fontWeight: 700,
        lineHeight: 1.05
      }
    }, "R", s.id, " \xB7 ", s.t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        opacity: .85
      }
    }, s.a), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(LevelPill, {
      n: s.n,
      solid: true
    }), [s.g, s.bpm + " BPM", s.sec + " secciones"].map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        height: 26,
        padding: "0 12px",
        borderRadius: 99,
        border: "1px solid rgba(255,255,255,.35)",
        display: "inline-flex",
        alignItems: "center",
        fontSize: 12.5
      }
    }, t))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      icon: playing ? "pause" : "play",
      onClick: () => setPlaying(!playing),
      style: {
        flex: 1
      }
    }, playing ? "Pausar pista" : "Reproducir pista original"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "timer",
      style: {
        flex: 1,
        background: "#fff",
        color: "#17181C",
        border: "none"
      }
    }, "Practicar con click"))), /*#__PURE__*/React.createElement(Panel, {
      i: 0,
      pad: 18
    }, /*#__PURE__*/React.createElement(Tabs, {
      active: tab,
      onChange: setTab,
      items: [{
        id: "mapa",
        label: "Mapa de la canción"
      }, {
        id: "partitura",
        label: "Partitura"
      }, {
        id: "video",
        label: "Video"
      }, {
        id: "prog",
        label: "Mi progreso"
      }]
    }), tab === "mapa" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 3
      }
    }, MAP.map(([l, c, tm, w], i) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        flex: w,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 36,
        borderRadius: 8,
        background: c,
        color: "#fff",
        fontWeight: 700,
        fontSize: 13.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: playing && curSec === i ? "translateY(-3px)" : "none",
        boxShadow: playing && curSec === i ? "0 8px 18px " + c + "88" : "none",
        transition: "all .3s"
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#5D6068",
        textAlign: "center"
      }
    }, tm)))), /*#__PURE__*/React.createElement(Wave, {
      playing: playing,
      pos: pos
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 110,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        color: "#8A8D96"
      }
    }, "Vista no incluida en la referencia")), /*#__PURE__*/React.createElement(Panel, {
      i: 1,
      title: "Recursos de pr\xE1ctica",
      pad: 18
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: 8
      }
    }, RES.map(([id, ic, l]) => {
      const on = res === id;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => setRes(id),
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-body)",
          fontSize: 12,
          color: "#3F4249",
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 54,
          height: 54,
          borderRadius: 14,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: on ? "var(--accent)" : "var(--accent-soft)",
          color: on ? "#fff" : "var(--accent)",
          boxShadow: on ? "var(--shadow-glow-accent)" : "none",
          transition: "all .25s cubic-bezier(.34,1.56,.64,1)",
          transform: on ? "translateY(-3px)" : "none"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 24
      })), l);
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      i: 2,
      title: "Notas de la canci\xF3n",
      pad: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        fontSize: 13,
        lineHeight: 1.55,
        color: "#3F4249"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 18
    }), /*#__PURE__*/React.createElement("span", null, "Groove de semicorcheas, din\xE1mica en estrofa y coro. Aplicar lo trabajado en clase."))), /*#__PURE__*/React.createElement(Panel, {
      i: 3,
      title: "Mi avance",
      pad: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Ring, {
      value: s.p,
      size: 78,
      stroke: 9,
      color: "#2EC4A6"
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 17
      }
    }, s.p, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7,
        fontSize: 12
      }
    }, checks.map(([l, ok]) => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        color: ok ? "#17181C" : "#8A8D96"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ok ? "circle-check" : "circle",
      size: 15,
      color: ok ? "#34B76C" : "#C9CAD0"
    }), l)))))));
  }
  function SwRepertorio() {
    const [songs, setSongs] = React.useState(SONGS);
    const [sel, setSel] = React.useState(1);
    const [f, setF] = React.useState("Todas");
    const shown = songs.filter(s => f === "Todas" || (f === "Favoritas" ? s.fav : f === "6/8" ? false : s.g === f));
    const song = songs.find(s => s.id === sel);
    return /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        padding: 24,
        "--side": "400px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "spot",
      eyebrow: "TU REPERTORIO",
      title: "Canciones que te inspiran",
      body: "Aqu\xED est\xE1n las canciones que trabajamos en clase. Escucha, practica, mira el mapa y toca con prop\xF3sito.",
      art: "mateo/bateria-baquetas-arriba.png",
      artStyle: {
        right: 70,
        height: 250
      },
      bit: "bit/audifonos.png",
      tagline: "\xA1Toca lo que te gusta!",
      height: 240
    }), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1,
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, ["Todas", "Worship", "Pop", "Rock", "Urbano", "6/8"].map(c => /*#__PURE__*/React.createElement(Chip, {
      key: c,
      active: f === c,
      onClick: () => setF(c)
    }, c)), /*#__PURE__*/React.createElement(Chip, {
      active: f === "Favoritas",
      onClick: () => setF("Favoritas"),
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "star",
        size: 15,
        color: f === "Favoritas" ? "#fff" : "#EE4433"
      })
    }, "Favoritas"), /*#__PURE__*/React.createElement("label", {
      style: {
        marginLeft: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "4px 12px",
        borderRadius: 12,
        background: "#fff",
        border: "1px solid #ECE7DF",
        fontSize: 11,
        color: "#8A8D96"
      }
    }, "Ordenar por", /*#__PURE__*/React.createElement("select", {
      style: {
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        color: "#17181C",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("option", null, "M\xE1s recientes"), /*#__PURE__*/React.createElement("option", null, "Nivel"), /*#__PURE__*/React.createElement("option", null, "BPM")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
        gap: 16
      }
    }, shown.map((s, i) => /*#__PURE__*/React.createElement(SongCard, {
      key: s.id,
      s: s,
      i: i + 2,
      sel: s.id === sel,
      onSel: () => setSel(s.id),
      onFav: () => setSongs(ss => ss.map(x => x.id === s.id ? {
        ...x,
        fav: !x.fav
      } : x))
    })), !shown.length && /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1",
        padding: 40,
        textAlign: "center",
        color: "#8A8D96",
        fontSize: 14
      }
    }, "No hay canciones en esta categor\xEDa todav\xEDa."))), /*#__PURE__*/React.createElement("div", {
      className: "sw-sticky"
    }, /*#__PURE__*/React.createElement(Detail, {
      s: song
    })));
  }
  Object.assign(window, {
    SwRepertorio
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwRepertorio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwRudimentos.jsx
try { (() => {
(() => {
  const {
    Icon,
    Button,
    Tabs
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const T = ["#FFF3D6", "#E1ECFF", "#FFE1DD", "#EDE5FE", "#FFE9DA", "#DDF5E7"];
  const C = ["#E19A00", "#2F57F5", "#EE4433", "#7C4DEB", "#F26B3A", "#2E9E6E"];
  const tint = [0, 1, 2, 3, 4, 5, 0, 1, 2, 5, 3, 2, 1, 5, 3];
  const RUD = [["Single Stroke Roll", "R L R L R L R L", "basicos", 80], ["Double Stroke Roll", "R R L L R R L L", "basicos", 60], ["Paradiddle", ">R L R R >L R L L", "dobles", 40], ["Flam", "lR rL lR rL", "flama", 20], ["Flam Accent", "lR L R rL R L", "flama", 0], ["Drag", "llR L rrL R", "redoble", 0], ["Single Paradiddle", ">R L R R >L R L L", "dobles", 0], ["Double Paradiddle", ">R L R L R R >L R L R L L", "dobles", 0], ["Paradiddle Diddle", ">R L R R L L", "dobles", 0], ["Swiss Army Triplet", "rR L R rR L R", "hibridos", 0], ["Inverted Paradiddle", "R L L R L R R L", "dobles", 0], ["Six Stroke Roll", ">R L L R R >L", "acento", 0], ["Seven Stroke Roll", "R R L L R R >L", "redoble", 0], ["Nine Stroke Roll", "R R L L R R L L >R", "redoble", 0], ["Ten Stroke Roll", "R R L L R R L L >R >L", "redoble", 0]].map(([t, s, c, p], i) => ({
    id: i + 1,
    t,
    s: s.split(" "),
    c,
    p,
    ti: tint[i],
    art: "rudimentos/pad-" + String(i + 1).padStart(2, "0") + ".png"
  }));
  const CATS = [["todos", "Todos"], ["stick", "Stick Control"], ["basicos", "P. Básicos"], ["dobles", "P. Dobles"], ["flama", "P. de flama"], ["acento", "P. de acento"], ["redoble", "P. de redoble"], ["hibridos", "P. híbridos"]];
  const parse = tk => ({
    acc: tk[0] === ">",
    grace: /^[lr]+[RL]$/.test(tk) ? tk.slice(0, -1).toUpperCase() : "",
    hand: tk.slice(-1)
  });
  function Sticking({
    s,
    cur = -1,
    size = 13,
    color = "#17181C"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        gap: 2,
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: size,
        minHeight: size * 2
      }
    }, s.map((tk, i) => {
      const p = parse(tk),
        on = i === cur;
      return /*#__PURE__*/React.createElement("span", {
        key: i,
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1,
          color: on ? "var(--accent)" : color,
          transform: on ? "translateY(-3px) scale(1.25)" : "none",
          transition: "transform .08s, color .08s"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: size * .75,
          height: size * .8,
          opacity: p.acc ? 1 : 0
        }
      }, ">"), /*#__PURE__*/React.createElement("span", null, p.grace && /*#__PURE__*/React.createElement("sup", {
        style: {
          fontSize: size * .6,
          opacity: .7
        }
      }, p.grace.toLowerCase()), p.hand));
    }));
  }
  function RudCard({
    r,
    i,
    sel,
    onSel
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onSel,
      className: "rv lift tool",
      style: {
        "--i": Math.min(i, 12),
        textAlign: "left",
        padding: 0,
        cursor: "pointer",
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
        border: "1.5px solid " + (sel ? "var(--accent)" : "#EFEBE4"),
        boxShadow: sel ? "0 0 0 3px var(--accent-ring), 0 12px 26px rgba(23,24,28,.10)" : "0 6px 18px rgba(23,24,28,.04)",
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: T[r.ti],
        padding: "10px 10px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: C[r.ti],
        color: "#fff",
        fontSize: 11.5,
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, r.id), /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13,
        color: "#17181C",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, r.t)), /*#__PURE__*/React.createElement("img", {
      src: img(r.art),
      alt: "",
      className: "tool-art",
      style: {
        width: "100%",
        height: 74,
        objectFit: "cover",
        objectPosition: "center 30%",
        mixBlendMode: "multiply",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 10px 10px",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Sticking, {
      s: r.s.length > 8 ? r.s.slice(0, 8) : r.s,
      size: r.s.length > 8 ? 11 : 12
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      value: r.p,
      color: C[r.ti],
      height: 7,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: "#5D6068",
        width: 28,
        textAlign: "right"
      }
    }, r.p, "%"))));
  }
  function Notation({
    s,
    cur
  }) {
    const n = s.length,
      W = 300,
      step = (W - 20) / n;
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + W + " 64",
      style: {
        width: "100%"
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "0",
      x2: W,
      y1: 10 + i * 7,
      y2: 10 + i * 7,
      stroke: "#D9DADF",
      strokeWidth: "1"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "4",
      width: step * (n - 1) + 4,
      height: "3.5",
      fill: "#17181C",
      rx: "1"
    }), s.map((tk, i) => {
      const x = 16 + i * step,
        on = i === cur,
        p = parse(tk);
      return /*#__PURE__*/React.createElement("g", {
        key: i,
        style: {
          transition: "all .08s"
        }
      }, /*#__PURE__*/React.createElement("line", {
        x1: x + 4,
        x2: x + 4,
        y1: "6",
        y2: "38",
        stroke: on ? "var(--accent)" : "#17181C",
        strokeWidth: "1.6"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: x,
        cy: "39",
        rx: "5",
        ry: "3.6",
        fill: on ? "var(--accent)" : "#17181C",
        transform: "rotate(-20 " + x + " 39)"
      }), p.acc && /*#__PURE__*/React.createElement("text", {
        x: x,
        y: "56",
        fontSize: "10",
        textAnchor: "middle",
        fill: "#17181C"
      }, ">"), on && /*#__PURE__*/React.createElement("circle", {
        cx: x,
        cy: "39",
        r: "10",
        fill: "none",
        stroke: "var(--accent)",
        strokeWidth: "1.5",
        opacity: ".5"
      }));
    }));
  }
  function Detail({
    r
  }) {
    const [tab, setTab] = React.useState("res");
    const [bpm, setBpm] = React.useState(90);
    const [play, setPlay] = React.useState(false);
    const [cur, setCur] = React.useState(-1);
    const [vid, setVid] = React.useState(false);
    const [vt, setVt] = React.useState(0);
    const timer = React.useRef();
    React.useEffect(() => {
      setPlay(false);
      setCur(-1);
      setTab("res");
    }, [r.id]);
    React.useEffect(() => {
      clearInterval(timer.current);
      if (!play) {
        setCur(-1);
        return;
      }
      let i = 0;
      const ms = 60000 / bpm / 2;
      const tick = () => {
        const p = parse(r.s[i % r.s.length]);
        if (p.grace) window.EZAudio.play("stick", 0, .35);
        setTimeout(() => window.EZAudio.play("stick", 0, p.acc ? 1 : .55), p.grace ? 30 : 0);
        setCur(i % r.s.length);
        i++;
      };
      tick();
      timer.current = setInterval(tick, ms);
      return () => clearInterval(timer.current);
    }, [play, bpm, r.id]);
    React.useEffect(() => {
      if (!vid) return;
      const t = setInterval(() => setVt(v => v >= 84 ? 0 : v + 1), 1000);
      return () => clearInterval(t);
    }, [vid]);
    const fmt = s => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    const bars = React.useMemo(() => Array.from({
      length: 34
    }, (_, i) => 5 + Math.abs(Math.sin(i * .8) * 12 + Math.sin(i * 2.1) * 4)), []);
    return /*#__PURE__*/React.createElement("aside", {
      className: "rv",
      style: {
        "--i": 2,
        background: "#fff",
        borderRadius: 22,
        border: "1px solid #EFEBE4",
        boxShadow: "0 16px 40px rgba(23,24,28,.08)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 20
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        flex: 1,
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 700
      }
    }, r.id, ". ", r.t), /*#__PURE__*/React.createElement("img", {
      src: img("music/estrella.png"),
      alt: "",
      className: "wiggle",
      style: {
        width: 28
      }
    })), /*#__PURE__*/React.createElement(Tabs, {
      active: tab,
      onChange: setTab,
      items: [{
        id: "res",
        label: "Resumen"
      }, {
        id: "como",
        label: "Cómo hacerlo"
      }, {
        id: "ej",
        label: "Ejercicios"
      }, {
        id: "ap",
        label: "Aplicación"
      }, {
        id: "pr",
        label: "Progreso"
      }]
    }), tab === "res" ? /*#__PURE__*/React.createElement("div", {
      key: r.id,
      className: "swap",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "150px minmax(0,1fr)",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 14,
        overflow: "hidden",
        background: "#17181C",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("rudimentos/detalle-manos.png"),
      alt: "",
      className: play ? "hit" : "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        animationDuration: 60 / bpm / 2 + "s"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 14,
        border: "1px solid #EFEBE4",
        padding: 10
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13.5
      }
    }, "Notaci\xF3n"), /*#__PURE__*/React.createElement(Notation, {
      s: r.s,
      cur: cur
    }), /*#__PURE__*/React.createElement(Sticking, {
      s: r.s,
      cur: cur,
      size: 11.5
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 14,
        border: "1px solid #EFEBE4",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13.5
      }
    }, "Audioplay"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setPlay(!play),
      "aria-label": "Reproducir",
      style: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        border: "none",
        background: "var(--accent)",
        color: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-glow-accent)",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: play ? "pause" : "play",
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        height: 28
      }
    }, bars.map((h, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      className: play ? "eqw" : "",
      style: {
        flex: 1,
        height: h,
        borderRadius: 2,
        background: play && i % r.s.length === cur ? "var(--accent)" : "#C9D3F5",
        animationDelay: i % 5 * .1 + "s"
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setBpm(Math.max(40, bpm - 5)),
      style: {
        width: 28,
        height: 28,
        borderRadius: "50%",
        border: "1px solid #E5DFD5",
        background: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: "center",
        height: 30,
        lineHeight: "30px",
        borderRadius: 10,
        background: "#F7F4EE",
        fontWeight: 700,
        fontSize: 14
      }
    }, bpm, " BPM"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setBpm(Math.min(200, bpm + 5)),
      style: {
        width: 28,
        height: 28,
        borderRadius: "50%",
        border: "1px solid #E5DFD5",
        background: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        padding: 12,
        borderRadius: 14,
        border: "1px solid #EFEBE4"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("music/diana.png"),
      alt: "",
      style: {
        width: 32,
        height: 32
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13.5
      }
    }, "Objetivo"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 12,
        lineHeight: 1.5,
        color: "#5D6068"
      }
    }, "Desarrollar control, igualdad de sonido y resistencia."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        padding: 12,
        borderRadius: 14,
        background: "var(--accent-soft)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("mateo/cara-feliz.png"),
      alt: "",
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 13.5
      }
    }, "Consejos de Mateo"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 12,
        lineHeight: 1.5,
        color: "#3F4249"
      }
    }, "\"Mant\xE9n las manos relajadas. El sonido debe ser igual en cada golpe.\"")))), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 16
      }
    }, "Video demostraci\xF3n"), /*#__PURE__*/React.createElement("div", {
      onClick: () => setVid(!vid),
      style: {
        position: "relative",
        height: 190,
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        background: "#0E0F14"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("rudimentos/video.png"),
      alt: "",
      className: vid ? "kenburns" : "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), !vid && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "play-pulse",
      style: {
        width: 58,
        height: 58,
        borderRadius: "50%",
        background: "rgba(255,255,255,.25)",
        backdropFilter: "blur(6px)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 24,
      color: "#fff"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "18px 12px 10px",
        background: "linear-gradient(0deg, rgba(0,0,0,.75), transparent)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 3,
        borderRadius: 2,
        background: "rgba(255,255,255,.3)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        display: "block",
        height: "100%",
        width: vt / 84 * 100 + "%",
        background: "var(--accent)",
        borderRadius: 2,
        transition: "width 1s linear"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: vid ? "pause" : "play",
      size: 16
    }), fmt(vt), " / 1:24", /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 16
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "maximize",
      size: 16
    }))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#8A8D96",
        padding: "16px 0"
      }
    }, "Contenido no incluido en la referencia."));
  }
  function StatCards() {
    const glass = {
      borderRadius: 18,
      padding: "12px 16px",
      background: "rgba(255,255,255,.08)",
      border: "1px solid rgba(255,255,255,.14)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minWidth: 170
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 2,
        ...glass
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        opacity: .75
      }
    }, "Tu nivel actual"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("music/estrella.png"),
      alt: "",
      style: {
        width: 28
      }
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        letterSpacing: ".04em"
      }
    }, "GROOVE")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Bar, {
      value: 30,
      color: "#5FE0C4",
      track: "rgba(255,255,255,.18)",
      height: 7,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5
      }
    }, "12 / 40"))), /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 3,
        ...glass,
        flexDirection: "row",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Ring, {
      value: 30,
      size: 70,
      stroke: 8,
      color: "#5FE0C4",
      track: "rgba(255,255,255,.16)"
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement(CountUp, {
      to: 30,
      suffix: "%"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        opacity: .75
      }
    }, "Rudimentos practicados"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600
      }
    }, "12 de 40"))));
  }
  function SwRudimentos() {
    const [cat, setCat] = React.useState("todos");
    const [sel, setSel] = React.useState(1);
    const shown = RUD.filter(r => cat === "todos" || r.c === cat);
    const r = RUD.find(x => x.id === sel);
    const checks = /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 10
      }
    }, ["Mejor control", "Más velocidad", "Más musicalidad"].map((t, i) => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: "rv",
      style: {
        "--i": i + 2,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        color: "#fff",
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "#5FE0C4",
        color: "#0E1214",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    })), t)));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "studio",
      title: "Rudimentos",
      subtitle: "La base de todo gran baterista.",
      meta: checks,
      art: "mateo/baquetas-arriba-v2.png",
      artStyle: {
        right: 470,
        height: 250,
        bottom: -16
      },
      bit: "bit/con-baquetas.png",
      bitStyle: {
        right: 390,
        height: 120
      },
      height: 250,
      aside: /*#__PURE__*/React.createElement(StatCards, null)
    }), /*#__PURE__*/React.createElement("div", {
      className: "sw-stats-inline",
      style: {
        display: "none",
        gap: 12,
        padding: 14,
        borderRadius: 20,
        background: "#131B1E"
      }
    }, /*#__PURE__*/React.createElement(StatCards, null)), /*#__PURE__*/React.createElement("div", {
      className: "sw-split",
      style: {
        "--side": "430px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1,
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, CATS.map(([id, l]) => /*#__PURE__*/React.createElement(Chip, {
      key: id,
      active: cat === id,
      onClick: () => setCat(id)
    }, l))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
        gap: 12
      }
    }, shown.map((x, i) => /*#__PURE__*/React.createElement(RudCard, {
      key: x.id,
      r: x,
      i: i + 2,
      sel: x.id === sel,
      onSel: () => setSel(x.id)
    })), !shown.length && /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1",
        padding: 40,
        textAlign: "center",
        color: "#8A8D96",
        fontSize: 14
      }
    }, "A\xFAn no hay rudimentos en esta categor\xEDa."))), /*#__PURE__*/React.createElement("div", {
      className: "sw-sticky"
    }, /*#__PURE__*/React.createElement(Detail, {
      r: r
    }))));
  }
  Object.assign(window, {
    SwRudimentos
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwRudimentos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/SwShell.jsx
try { (() => {
(() => {
  const {
    SidebarNav,
    Icon,
    Badge
  } = window.EZDrumSchoolDesignSystem_874c26;
  const img = window.SW_IMG;
  const NAV = [{
    id: "inicio",
    label: "Inicio",
    icon: "house"
  }, {
    id: "camino",
    label: "Tu camino",
    icon: "circle-play"
  }, {
    id: "clases",
    label: "Clases",
    icon: "calendar"
  }, {
    id: "progreso",
    label: "Mi progreso",
    icon: "chart-no-axes-column-increasing"
  }, {
    id: "repertorio",
    label: "Tu repertorio",
    icon: "music"
  }, {
    id: "rudimentos",
    label: "Rudimentos",
    icon: "drum"
  }, {
    id: "caja",
    label: "Caja de herramientas",
    icon: "wrench"
  }, {
    id: "daw",
    label: "Mini DAW",
    icon: "audio-waveform"
  }, {
    id: "libro",
    label: "Mi libro",
    icon: "book-open"
  }, {
    id: "portafolio",
    label: "Portafolio",
    icon: "folder"
  }, {
    id: "sp",
    divider: true
  }, {
    id: "notif",
    label: "Notificaciones",
    icon: "bell",
    badge: 3
  }, {
    id: "buscar",
    label: "Buscar",
    icon: "search"
  }];
  function useNarrow(q = "(max-width: 1100px)") {
    const [n, setN] = React.useState(() => window.matchMedia(q).matches);
    React.useEffect(() => {
      const m = window.matchMedia(q),
        h = () => setN(m.matches);
      m.addEventListener("change", h);
      return () => m.removeEventListener("change", h);
    }, []);
    return n;
  }
  function SwSidebar({
    active,
    onSelect
  }) {
    const narrow = useNarrow();
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: narrow ? 76 : 232,
        flex: "none",
        position: "sticky",
        top: 0,
        height: "100vh",
        background: "radial-gradient(120% 50% at 0% 0%, rgba(47,87,245,.16), transparent 60%), #141518",
        padding: "22px 14px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(narrow ? "logo/ez-mark-white.png" : "logo/evams-zapata-white.png"),
      alt: "Evams Zapata",
      style: {
        width: narrow ? 46 : 150,
        alignSelf: "center"
      }
    }), /*#__PURE__*/React.createElement(SidebarNav, {
      items: NAV,
      active: active,
      onSelect: onSelect,
      collapsed: narrow,
      style: {
        flex: 1,
        gap: 6
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => onSelect("inicio"),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: 10,
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,.08)",
        background: "rgba(255,255,255,.04)",
        color: "#fff",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: "50%",
        overflow: "hidden",
        background: "#FFE6B8",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("mateo/cara-feliz.png"),
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), !narrow && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        fontSize: 14
      }
    }, "Mateo"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "rgba(255,255,255,.55)"
      }
    }, "Alumno")), !narrow && /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 16
    })));
  }
  function SwTopbar({
    sub,
    search
  }) {
    return /*#__PURE__*/React.createElement("header", {
      className: "rv",
      style: {
        "--i": 0,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 28px",
        borderBottom: "1px solid #EFEBE4",
        background: "rgba(251,248,243,.78)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        position: "sticky",
        top: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "hello",
      style: {
        width: 52,
        height: 52,
        borderRadius: "50%",
        overflow: "hidden",
        background: "#FFE6B8",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("mateo/cara-feliz.png"),
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 700,
        color: "#17181C",
        whiteSpace: "nowrap"
      }
    }, "Hola, Mateo ", /*#__PURE__*/React.createElement("span", {
      className: "wave"
    }, "\uD83D\uDC4B")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        color: "#5D6068"
      }
    }, sub)), search && /*#__PURE__*/React.createElement("label", {
      className: "sw-search",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        width: 300,
        height: 42,
        padding: "0 14px",
        borderRadius: 12,
        background: "#F1ECE4",
        color: "#8A8D96"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: search,
      style: {
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        color: "#17181C"
      }
    })), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Notificaciones",
      style: {
        position: "relative",
        width: 42,
        height: 42,
        borderRadius: 12,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#17181C"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 21
    }), /*#__PURE__*/React.createElement("span", {
      className: "ping",
      style: {
        position: "absolute",
        top: 9,
        right: 10,
        width: 8,
        height: 8,
        borderRadius: 4,
        background: "var(--ez-danger)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "linear-gradient(160deg,#EEF2FF,#DCE4FF)",
        display: "inline-flex",
        alignItems: "flex-end",
        justifyContent: "center",
        overflow: "hidden",
        flex: "none",
        boxShadow: "inset 0 0 0 2px #fff"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("bit/saludando.png"),
      alt: "Bit",
      style: {
        height: 50
      }
    })));
  }
  function SwPlaceholder({
    label
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "rv",
      style: {
        "--i": 1,
        margin: 28,
        minHeight: 520,
        border: "2px dashed #E5DFD5",
        borderRadius: 22,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        textAlign: "center",
        color: "#5D6068"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img("bit/pensando.png"),
      alt: "",
      className: "bob",
      style: {
        height: 140
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        color: "#17181C"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        maxWidth: 380
      }
    }, "Esta secci\xF3n a\xFAn no tiene referencia de dise\xF1o. Se deja en blanco a prop\xF3sito."));
  }
  function SwInicio({
    go
  }) {
    const {
      Button
    } = window.EZDrumSchoolDesignSystem_874c26;
    const tiles = [["camino", "icon3d/tu-camino.png", "Tu camino", "Sesión 5 de 20", 25, "#F0533F"], ["progreso", "icon3d/tu-progreso.png", "Tu progreso", "Racha de 7 días", 65, "#2E9E6E"], ["repertorio", "icon3d/tu-repertorio.png", "Tu repertorio", "R1 · Firmes en fe", 80, "#7C4DEB"], ["caja", "icon3d/caja.png", "Caja de herramientas", "18 herramientas", 40, "#F26B3A"]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(HeroStage, {
      variant: "spot",
      eyebrow: "GROOVE CON PROP\xD3SITO \xB7 SESI\xD3N 5",
      title: "\xA1Hola, Mateo!",
      subtitle: "Hoy trabajamos Din\xE1mica en la caja",
      art: "mateo/bateria-baquetas-arriba.png",
      bit: "bit/celebrando.png",
      tagline: "\xA1A tocar!",
      height: 280
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "play",
      onClick: () => go("camino")
    }, "Iniciar clase"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: 16
      }
    }, tiles.map(([id, ic, t, s, v, c], i) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => go(id),
      className: "rv lift tile",
      style: {
        "--i": i + 1,
        textAlign: "left",
        background: "#fff",
        border: "1px solid #EFEBE4",
        borderRadius: 20,
        padding: 18,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img(ic),
      alt: "",
      className: "tile-ic",
      style: {
        width: 56,
        height: 56,
        borderRadius: 14
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 18,
      color: "#8A8D96"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 18,
        fontWeight: 600,
        color: "#17181C"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#5D6068",
        marginTop: 2
      }
    }, s)), /*#__PURE__*/React.createElement(Bar, {
      value: v,
      color: c,
      height: 7
    })))));
  }
  Object.assign(window, {
    SwSidebar,
    SwTopbar,
    SwPlaceholder,
    SwInicio
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/SwShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student-web/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student-web/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Sidebar.jsx
try { (() => {
(() => {
  const {
    SidebarNav,
    Avatar,
    Icon,
    Badge
  } = window.EZDrumSchoolDesignSystem_874c26;
  const A = "../../assets/";
  const STUDENT_NAV = [{
    id: "inicio",
    label: "Inicio",
    icon: "house"
  }, {
    id: "clases",
    label: "Clases",
    icon: "calendar"
  }, {
    id: "progreso",
    label: "Mi progreso",
    icon: "chart-line"
  }, {
    id: "rudimentos",
    label: "Rudimentos",
    icon: "drum"
  }, {
    id: "caja",
    label: "Caja de herramientas",
    icon: "wrench"
  }, {
    id: "libro",
    label: "Mi libro",
    icon: "book-open"
  }, {
    id: "portafolio",
    label: "Portafolio",
    icon: "folder-open"
  }, {
    id: "sp",
    divider: true
  }, {
    id: "notif",
    label: "Notificaciones",
    icon: "bell",
    badge: 3
  }, {
    id: "buscar",
    label: "Buscar",
    icon: "search"
  }];
  const ROLES = [{
    id: "alumno",
    name: "Mateo",
    role: "Alumno",
    img: A + "characters/alumno.png"
  }, {
    id: "padre",
    name: "Ana Torres",
    role: "Padre o tutor",
    img: A + "characters/madre.png"
  }, {
    id: "profesor",
    name: "Carlos Ruiz",
    role: "Profesor",
    img: A + "characters/profesor.png"
  }, {
    id: "admin",
    name: "Evams Zapata",
    role: "Admin",
    img: A + "characters/padre.png"
  }];
  function RoleMenu({
    role,
    onRole,
    compact
  }) {
    const [open, setOpen] = React.useState(false);
    const r = ROLES.find(x => x.id === role);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, open && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: "calc(100% + 8px)",
        left: 0,
        width: 200,
        background: "#2B2C33",
        border: "1px solid var(--border-strong)",
        borderRadius: 12,
        padding: 6,
        boxShadow: "0 12px 30px rgba(0,0,0,.4)",
        zIndex: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        letterSpacing: ".14em",
        color: "var(--text-muted)",
        padding: "6px 8px"
      }
    }, "VER COMO"), ROLES.map(x => /*#__PURE__*/React.createElement("button", {
      key: x.id,
      onClick: () => {
        onRole(x.id);
        setOpen(false);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        width: "100%",
        padding: 6,
        border: "none",
        borderRadius: 8,
        background: x.id === role ? "rgba(246,181,30,.16)" : "transparent",
        color: "#fff",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: x.img,
      size: 26
    }), x.role))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(!open),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        width: "100%",
        padding: compact ? 4 : 8,
        borderRadius: 12,
        border: "1px solid var(--border-subtle)",
        background: "rgba(255,255,255,.05)",
        color: "#fff",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        textAlign: "left",
        justifyContent: compact ? "center" : "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: r.img,
      size: compact ? 30 : 34
    }), !compact && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, r.name.split(" ")[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--text-muted)"
      }
    }, r.role)), !compact && /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14
    })));
  }
  function Sidebar({
    active,
    onSelect,
    role,
    onRole
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: "var(--sidebar-width)",
        flex: "none",
        background: "var(--surface-sidebar)",
        padding: "18px 10px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + "logo/ez-drumschool-wordmark-white.png",
      alt: "EZ DrumSchool",
      style: {
        width: 112,
        marginLeft: 6
      }
    }), /*#__PURE__*/React.createElement(SidebarNav, {
      items: STUDENT_NAV,
      active: active,
      onSelect: onSelect,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(RoleMenu, {
      role: role,
      onRole: onRole
    }));
  }
  function Rail({
    role,
    onRole
  }) {
    const icons = ["house", "calendar", "chart-line", "users", "book-open", "bell", "settings"];
    const [a, setA] = React.useState(0);
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 64,
        flex: "none",
        background: "var(--surface-sidebar)",
        padding: "16px 10px 12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + "logo/ez-mark-white.png",
      alt: "EZ",
      style: {
        width: 36,
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement(SidebarNav, {
      collapsed: true,
      active: String(a),
      onSelect: id => setA(+id),
      items: icons.map((ic, i) => ({
        id: String(i),
        icon: ic,
        label: ic
      })),
      style: {
        width: 40,
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(RoleMenu, {
      role: role,
      onRole: onRole,
      compact: true
    }));
  }
  Object.assign(window, {
    Sidebar,
    Rail,
    ROLES,
    EZ_ASSETS: A
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/StaffViews.jsx
try { (() => {
(() => {
  const {
    Button,
    Avatar,
    Badge,
    ListRow,
    Tabs,
    Card,
    Icon,
    IconButton
  } = window.EZDrumSchoolDesignSystem_874c26;
  const A = window.EZ_ASSETS;
  const C = A + "characters/";
  function Header({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, children));
  }
  function Bars() {
    const v = [8, 12, 10, 22, 30, 38, 52];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        gap: 8,
        height: 64
      }
    }, v.map((h, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 16,
        height: h,
        borderRadius: 3,
        background: "var(--ez-blue)",
        opacity: .35 + i * .1
      }
    })));
  }
  function Lines() {
    const s = [["#E53935", [40, 52, 46, 60, 58, 70, 74]], ["#F6B51E", [30, 34, 44, 40, 55, 52, 64]], ["#2E9E6E", [20, 28, 26, 38, 44, 50, 56]], ["#4C7EF3", [26, 22, 34, 30, 36, 46, 48]]];
    const W = 520,
      H = 120,
      pt = a => a.map((y, i) => i * W / 6 + "," + (H - y * 1.4)).join(" ");
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 " + W + " " + H,
      style: {
        width: "100%",
        height: 130
      }
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "0",
      x2: W,
      y1: 10 + i * 34,
      y2: 10 + i * 34,
      stroke: "#ECECEF"
    })), s.map(([c, a]) => /*#__PURE__*/React.createElement("polyline", {
      key: c,
      points: pt(a),
      fill: "none",
      stroke: c,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  }
  function ParentView() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Header, {
      title: "Progreso de Mateo"
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: C + "alumno.png",
      size: 36,
      ring: true
    })), /*#__PURE__*/React.createElement(Card, {
      padding: 18,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, "Minutos de pr\xE1ctica"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 36,
        fontWeight: 700
      }
    }, "145"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, "esta semana")), /*#__PURE__*/React.createElement(Bars, null)), /*#__PURE__*/React.createElement(Card, {
      padding: 18
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, "Competencias C1 \u2013 C7"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 12,
        fontSize: 11,
        color: "var(--text-muted)"
      }
    }, [["Caja", "#E53935"], ["Hi-Hat", "#F6B51E"], ["Toms", "#2E9E6E"], ["Bombo", "#4C7EF3"]].map(([n, c]) => /*#__PURE__*/React.createElement("span", {
      key: n,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 4,
        background: c
      }
    }), n)))), /*#__PURE__*/React.createElement(Lines, null)), /*#__PURE__*/React.createElement(Card, {
      padding: 14,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, [0, 1].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: 92,
        height: 64,
        borderRadius: 10,
        overflow: "hidden",
        background: "radial-gradient(circle,#5A4426,#1E1F24)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + "illustrations/alumno-bateria-bit.png",
      alt: "",
      style: {
        position: "absolute",
        width: 104,
        left: -6,
        top: -16
      }
    })))), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14,
        fontWeight: 600
      }
    }, "D\xEDa 1 vs \xDAltima toma"), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      color: "var(--text-muted)"
    })));
  }
  function TeacherView() {
    const rows = [["10:00", "Mateo", "Sesión 5 · Dinámica", "success", "En clase", "alumno"], ["11:00", "Valentina", "Sesión 3 · Hi-Hat", "neutral", "Programada", "madre"], ["12:00", "Santiago", "Sesión 6 · Canción", "neutral", "Programada", "profesor"], ["16:00", "André", "Sesión 1 · Introducción", "neutral", "Programada", "padre"]];
    const [week, setWeek] = React.useState(0);
    const label = ["26 oct – 1 nov 2026", "2 – 8 nov 2026", "9 – 15 nov 2026"][week] || "26 oct – 1 nov 2026";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Header, {
      title: "Agenda de clases"
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "plus"
    }, "Nueva clase")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      size: 30,
      onClick: () => setWeek(Math.max(0, week - 1))
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-right",
      size: 30,
      onClick: () => setWeek(Math.min(2, week + 1))
    }), /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, rows.map(([t, n, s, tone, st, img]) => /*#__PURE__*/React.createElement(ListRow, {
      key: t,
      onClick: () => {},
      leading: /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          color: "var(--text-muted)",
          width: 38
        }
      }, t), /*#__PURE__*/React.createElement(Avatar, {
        src: C + img + ".png",
        size: 32
      })),
      title: n,
      subtitle: s,
      trailing: /*#__PURE__*/React.createElement(Badge, {
        tone: tone
      }, st)
    }))));
  }
  function AdminView() {
    const all = [["Mateo García", "Alumno", "alumno", "success", "Activo"], ["Ana Torres", "Padre", "madre", "success", "Activo"], ["Carlos Ruiz", "Profesor", "profesor", "success", "Activo"], ["Laura Pérez", "Padre", "madre", "warning", "Pendiente"]];
    const [f, setF] = React.useState("todos");
    const map = {
      alumnos: "Alumno",
      profesores: "Profesor",
      padres: "Padre"
    };
    const rows = f === "todos" ? all : all.filter(r => r[1] === map[f]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Header, {
      title: "Usuarios"
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "plus"
    }, "Invitar usuario")), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      active: f,
      onChange: setF,
      items: [{
        id: "todos",
        label: "Todos"
      }, {
        id: "alumnos",
        label: "Alumnos"
      }, {
        id: "profesores",
        label: "Profesores"
      }, {
        id: "padres",
        label: "Padres"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, rows.map(([n, r, img, tone, st]) => /*#__PURE__*/React.createElement(ListRow, {
      key: n,
      leading: /*#__PURE__*/React.createElement(Avatar, {
        src: C + img + ".png",
        size: 32
      }),
      title: n,
      subtitle: r,
      trailing: /*#__PURE__*/React.createElement(Badge, {
        tone: tone
      }, st)
    }))));
  }
  Object.assign(window, {
    ParentView,
    TeacherView,
    AdminView
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/StaffViews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/StudentHome.jsx
try { (() => {
(() => {
  const {
    Button,
    IconButton,
    Avatar,
    FeatureCard,
    ProgressBar,
    Card,
    Icon,
    Badge
  } = window.EZDrumSchoolDesignSystem_874c26;
  const A = window.EZ_ASSETS;
  function Hero({
    onStart
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        minHeight: 290,
        background: "radial-gradient(60% 90% at 78% 40%, rgba(246,181,30,.32) 0%, rgba(246,181,30,0) 60%), radial-gradient(40% 60% at 95% 100%, rgba(242,107,58,.25), transparent 70%), linear-gradient(105deg,#23242A 0%,#2E2F36 50%,#3A2F22 100%)",
        border: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + "illustrations/alumno-bateria-bit.png",
      alt: "",
      style: {
        position: "absolute",
        right: 24,
        top: 6,
        height: 520,
        pointerEvents: "none",
        filter: "drop-shadow(0 20px 40px rgba(0,0,0,.45))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 16,
        right: 16,
        display: "flex",
        gap: 10,
        alignItems: "center",
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notificaciones",
      style: {
        background: "rgba(0,0,0,.25)",
        backdropFilter: "blur(12px)"
      }
    }), /*#__PURE__*/React.createElement(Avatar, {
      src: A + "characters/alumno.png",
      size: 36,
      ring: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: "64px 40px 40px",
        maxWidth: 460,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "var(--ls-eyebrow)",
        color: "var(--text-secondary)"
      }
    }, "GROOVE CON PROP\xD3SITO \xB7 SESI\xD3N 5"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-hero)",
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: "-.01em"
      }
    }, "\xA1Hola, Mateo!"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 18px",
        fontFamily: "var(--font-display)",
        fontSize: 20,
        lineHeight: 1.35,
        color: "var(--text-secondary)"
      }
    }, "Hoy trabajamos", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff",
        fontWeight: 500,
        fontSize: 22
      }
    }, "Din\xE1mica en la caja")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "play",
      onClick: onStart
    }, "Iniciar clase"))));
  }
  function Streak() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        color: "var(--ez-green)"
      }
    }, "7 d\xEDas"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 3,
        alignItems: "flex-end"
      }
    }, [6, 10, 8, 14, 12].map((h, i) => /*#__PURE__*/React.createElement("i", {
      key: i,
      style: {
        width: 8,
        height: h,
        borderRadius: 2,
        background: "var(--ez-green)",
        opacity: .5 + i * .1
      }
    }))));
  }
  function StudentHome({
    onStart
  }) {
    const [done, setDone] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Hero, {
      onStart: onStart
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,minmax(0,1fr))",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(FeatureCard, {
      icon: "calendar",
      color: "var(--ez-coral)",
      title: "Tu camino",
      subtitle: "Sesi\xF3n 5 de 20"
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: 5,
      max: 20
    })), /*#__PURE__*/React.createElement(FeatureCard, {
      icon: "chart-no-axes-combined",
      color: "var(--ez-green)",
      title: "Tu progreso",
      subtitle: "Racha de pr\xE1ctica"
    }, /*#__PURE__*/React.createElement(Streak, null)), /*#__PURE__*/React.createElement(FeatureCard, {
      icon: "music",
      color: "var(--ez-purple)",
      title: "Tu repertorio",
      subtitle: "R1 \xB7 Firmes en fe"
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: 35,
      tone: "purple"
    })), /*#__PURE__*/React.createElement(FeatureCard, {
      icon: "wrench",
      color: "var(--ez-orange)",
      title: "Caja de herramientas",
      subtitle: "12 herramientas"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, [["gauge", "var(--ez-blue)"], ["audio-lines", "var(--ez-blue)"], ["timer", "var(--ez-orange)"]].map(([n, c]) => /*#__PURE__*/React.createElement("span", {
      key: n,
      style: {
        width: 26,
        height: 22,
        borderRadius: 6,
        background: c,
        opacity: .9,
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n,
      size: 13
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 15,
        fontWeight: 500
      }
    }, "Tu siguiente meta"), /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      padding: 16,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "rgba(240,83,63,.15)",
        color: "var(--ez-coral)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "target",
      size: 28
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        lineHeight: 1.4
      }
    }, "Mejorar el control de din\xE1mica en la caja a 80 BPM"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: 60,
      max: 80,
      height: 7,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--text-secondary)"
      }
    }, "60 / 80 BPM"))), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      color: "var(--text-secondary)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 15,
        fontWeight: 500
      }
    }, "\xDAltima pr\xE1ctica"), /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      padding: 10,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        flex: 1
      },
      onClick: () => setDone(!done)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: 104,
        height: 72,
        borderRadius: 10,
        overflow: "hidden",
        background: "radial-gradient(circle at 50% 40%,#5A4426,#1E1F24)",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + "illustrations/alumno-bateria-bit.png",
      alt: "",
      style: {
        position: "absolute",
        width: 120,
        left: -6,
        top: -18
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: "rgba(0,0,0,.55)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 14,
      color: "#fff"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600
      }
    }, "Mi toma de ayer"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--text-secondary)"
      }
    }, "2:35 \xB7 72 BPM"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Buen progreso"))), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 18,
      color: "var(--text-secondary)"
    })))));
  }
  function Placeholder({
    label
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 500,
        border: "1px dashed var(--border-strong)",
        borderRadius: "var(--radius-xl)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        color: "var(--text-muted)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: A + "characters/bit.png",
      alt: "",
      style: {
        height: 140,
        opacity: .9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 18,
        color: "var(--text-primary)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        maxWidth: 360
      }
    }, "Esta vista no aparece en la referencia. Se deja en blanco a prop\xF3sito hasta tener su dise\xF1o."));
  }
  Object.assign(window, {
    StudentHome,
    Placeholder
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/StudentHome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.BeatCounter = __ds_scope.BeatCounter;

__ds_ns.TempoRing = __ds_scope.TempoRing;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SessionSteps = __ds_scope.SessionSteps;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

})();
