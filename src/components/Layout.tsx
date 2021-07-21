import React from "react"
import { Flex } from "@chakra-ui/react"
import Navbar from "./Navbar"
export default function Layout({ children }) {
  return (
    <Flex minH="100vh" w="100%">
        <Navbar />
        <Flex maxH="90vh" w="100%" align="center" justifyContent="center">
            {children}
        </Flex>
    </Flex>
  )
}