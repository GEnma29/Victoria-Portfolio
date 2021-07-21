// theme.js
import { createBreakpoints, extendTheme } from "@chakra-ui/react"

const fonts={
  heading: "Titan One",
  body: "Roboto",
}

const zIndices = {
      hide: -1,
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    }
const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  })

  const overrides = {
      breakpoints,
      zIndices,
      fonts,
  }
const theme = extendTheme(overrides)
export default theme