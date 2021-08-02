import * as React from "react"
import { useEffect } from "react"
import {Flex, Box, Text } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Aboutme from "../components/Aboutme"
import "../../Style/Global.css"
const IndexPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  },)
  return (
    <div className="About">
    <Layout>
    <main>
      <Flex p={8}>
        <Aboutme />
      </Flex>
    </main>
    </Layout>
    </div>
  )
}

export default IndexPage
