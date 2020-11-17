import React, { useState } from "react"
import DarkModeToggle from "react-dark-mode-toggle"

import { Link } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import Bio from "./bio"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./Globalstyles"
import { darkTheme, lightTheme } from "./Theme/Theme"

deckDeckGoHighlightElement()

const Layout = ({ location, title, children }) => {
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
    setIsDarkMode(!isDarkMode)
  }

  const [isDarkMode, setIsDarkMode] = useState(() => false)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <GlobalStyles />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <header className="global-header">{header}</header>
          <DarkModeToggle
            size={60}
            onChange={themeToggler}
            checked={isDarkMode}
          />
        </div>
        <main>{children}</main>

        <footer>
          <Bio />© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
