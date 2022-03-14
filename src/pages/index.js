import * as React from "react"

import Head from "../components/Head"
import AppHeader from "../components/AppHeader"
import AboutAppBlock from "../components/AboutAppBlock"
import AboutPlatformBlock from "../components/AboutPlatformBlock"
import SafetyBlock from "../components/SafetyBlock"
import AppFooter from "../components/AppFooter"

const IndexPage = () => (
  <>
    <Head />

    <div className="flex flex-col">
      <AppHeader />
      <AboutAppBlock />
      <AboutPlatformBlock />
      <SafetyBlock />
      <AppFooter />
    </div>
  </>
)

export default IndexPage
