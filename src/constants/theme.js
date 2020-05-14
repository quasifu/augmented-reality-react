export const AVERY_DENNISON = {
  name: "AVERY_DENNISON Simple",
  rounding: 4,
  spacing: 24,
  defaultMode: "light",
  global: {
    colors: {
      brand: "#82D8D8",
      background: {
        dark: "#1a1d1a",
        light: "#E9E9E9",
      },
      "background-strong": {
        dark: "#111311",
        light: "#ffffff",
      },
      "background-weak": {
        dark: "#434643",
        light: "#eaeaea",
      },
      "background-menu": {
        dark: "#5A595C",
        light: "#5A595C",
      },
      "background-xweak": {
        dark: "#6d6f6d",
        light: "#c0c1c0",
      },
      text: {
        dark: "#EEEEEE",
        light: "#1a1d1a",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#161816",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#434643",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#6d6f6d",
      },
      border: "background-xweak",
      control: "brand",
      "active-background": "background-weak",
      "active-text": "text-strong",
      "selected-background": "background-strong",
      "selected-text": "text-strong",
      "status-critical": "#DE6E4B",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      focus: "#6FFFB0",
      orange: "#de6e4b",
      green: "#26413c",
      "graph-0": {
        light: "#cccccc",
        dark: "#cccccc",
      },
      "graph-1": {
        dark: "green",
        light: "green",
      },
      "graph-2": {
        dark: "orange",
        light: "orange",
      },
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    graph: {
      colors: {
        light: ["brand"],
        dark: ["brand"],
      },
    },
    control: {
      border: {
        radius: "4px",
      },
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "4px",
      large: "12px",
      xlarge: "24px",
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "4px",
          large: "6px",
          xlarge: "12px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "3px",
          small: "6px",
          medium: "12px",
          large: "24px",
          xlarge: "48px",
        },
        size: {
          xxsmall: "24px",
          xsmall: "48px",
          small: "96px",
          medium: "192px",
          large: "384px",
          xlarge: "768px",
          full: "100%",
        },
      },
      medium: {
        value: 1536,
      },
      large: {},
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "6px",
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px",
      responsiveBreakpoint: "small",
    },
    input: {
      padding: "12px",
      weight: 600,
    },
    spacing: "24px",
    size: {
      xxsmall: "48px",
      xsmall: "96px",
      small: "192px",
      medium: "384px",
      large: "768px",
      xlarge: "1152px",
      xxlarge: "1536px",
      full: "100%",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  button: {
    border: {
      width: "2px",
      radius: "18px",
    },
    padding: {
      vertical: "4px",
      horizontal: "22px",
    },
  },
  checkBox: {
    check: {
      radius: "4px",
    },
    toggle: {
      radius: "24px",
      size: "48px",
    },
    size: "24px",
  },
  radioButton: {
    size: "24px",
  },
  heading: {
    level: {
      "1": {
        small: {
          size: "34px",
          height: "40px",
          maxWidth: "816px",
        },
        medium: {
          size: "50px",
          height: "56px",
          maxWidth: "1200px",
        },
        large: {
          size: "82px",
          height: "88px",
          maxWidth: "1968px",
        },
        xlarge: {
          size: "114px",
          height: "120px",
          maxWidth: "2736px",
        },
      },
      "2": {
        small: {
          size: "26px",
          height: "32px",
          maxWidth: "624px",
        },
        medium: {
          size: "34px",
          height: "40px",
          maxWidth: "816px",
        },
        large: {
          size: "50px",
          height: "56px",
          maxWidth: "1200px",
        },
        xlarge: {
          size: "66px",
          height: "72px",
          maxWidth: "1584px",
        },
      },
      "3": {
        small: {
          size: "22px",
          height: "28px",
          maxWidth: "528px",
        },
        medium: {
          size: "26px",
          height: "32px",
          maxWidth: "624px",
        },
        large: {
          size: "34px",
          height: "40px",
          maxWidth: "816px",
        },
        xlarge: {
          size: "42px",
          height: "48px",
          maxWidth: "1008px",
        },
      },
      "4": {
        small: {
          size: "18px",
          height: "24px",
          maxWidth: "432px",
        },
        medium: {
          size: "18px",
          height: "24px",
          maxWidth: "432px",
        },
        large: {
          size: "18px",
          height: "24px",
          maxWidth: "432px",
        },
        xlarge: {
          size: "18px",
          height: "24px",
          maxWidth: "432px",
        },
      },
      "5": {
        small: {
          size: "16px",
          height: "22px",
          maxWidth: "384px",
        },
        medium: {
          size: "16px",
          height: "22px",
          maxWidth: "384px",
        },
        large: {
          size: "16px",
          height: "22px",
          maxWidth: "384px",
        },
        xlarge: {
          size: "16px",
          height: "22px",
          maxWidth: "384px",
        },
      },
      "6": {
        small: {
          size: "14px",
          height: "20px",
          maxWidth: "336px",
        },
        medium: {
          size: "14px",
          height: "20px",
          maxWidth: "336px",
        },
        large: {
          size: "14px",
          height: "20px",
          maxWidth: "336px",
        },
        xlarge: {
          size: "14px",
          height: "20px",
          maxWidth: "336px",
        },
      },
    },
    font: {
      family: "Roboto",
    },
  },
  calendar: {
    small: {
      fontSize: "14px",
      lineHeight: 1.375,
      daySize: "27.428571428571427px",
    },
    medium: {
      fontSize: "18px",
      lineHeight: 1.45,
      daySize: "54.857142857142854px",
    },
    large: {
      fontSize: "30px",
      lineHeight: 1.11,
      daySize: "109.71428571428571px",
    },
  },
  clock: {
    analog: {
      hour: {
        width: "8px",
        size: "24px",
      },
      minute: {
        width: "4px",
        size: "12px",
      },
      second: {
        width: "3px",
        size: "9px",
      },
      size: {
        small: "72px",
        medium: "96px",
        large: "144px",
        xlarge: "216px",
        huge: "288px",
      },
    },
    digital: {
      text: {
        xsmall: {
          size: "10px",
          height: 1.5,
        },
        small: {
          size: "14px",
          height: 1.43,
        },
        medium: {
          size: "18px",
          height: 1.375,
        },
        large: {
          size: "22px",
          height: 1.167,
        },
        xlarge: {
          size: "26px",
          height: 1.1875,
        },
        xxlarge: {
          size: "34px",
          height: 1.125,
        },
      },
    },
  },
  paragraph: {
    small: {
      size: "14px",
      height: "20px",
      maxWidth: "336px",
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "528px",
    },
    xlarge: {
      size: "26px",
      height: "32px",
      maxWidth: "624px",
    },
    xxlarge: {
      size: "34px",
      height: "40px",
      maxWidth: "816px",
    },
  },
  text: {
    xsmall: {
      size: "12px",
      height: "18px",
      maxWidth: "288px",
    },
    small: {
      size: "14px",
      height: "20px",
      maxWidth: "336px",
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px",
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "528px",
    },
    xlarge: {
      size: "26px",
      height: "32px",
      maxWidth: "624px",
    },
    xxlarge: {
      size: "34px",
      height: "40px",
      maxWidth: "816px",
    },
  },
  layer: {
    background: {
      dark: "#1a1d1a",
      light: "#FFFFFF",
    },
  },
};
