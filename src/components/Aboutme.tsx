import React, { useEffect } from "react";
import {
  Flex,
  Box,
  Button,
  Heading,
  Text,
  Avatar,
  Image,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import * as ListStyle from "./Aboutme.module.css";
const Aboutme = () => {
  useEffect(() => {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  });
  return (
    <Flex>
      {/** mobile version */}
      <Flex display={["flex", "flex", "none", "none"]}>
        <Flex flexDirection="column">
          <Heading>Hola, Soy Victoria Jimenez</Heading>
          <Heading>junior Digital Marketing Specialist</Heading>
          <img alt="Victoria jimenez" src={`../victoria.jpg`} />
          <Text>
            Motivada por seguir aprendiendo de esta industria, siempre tratando
            de perfeccionar mis habilidades, mi mayor herramienta es la
            creatividad y disciplina para enfrentarme a los retos que se me
            presenten en mis proyectos.
          </Text>
        </Flex>
      </Flex>
      <Flex display={["none", "none", "flex", "flex"]}>
        <Flex zIndex="dropdown" mt="11vh">
          <Image
            position="absolute"
            top="-50px"
            left="-40px"
            zIndex="hide"
            minH="150vh"
            src={`../wave-haikei.svg`}
          />
          <Flex mt={8} align="center" justifyContent="center" h="100%">
            <ul className={ListStyle.redes}>
              <li>
                <Link href="https://chakra-ui.com" isExternal>
                  <Icon m={2} as={FaLinkedin} w={12} h={12} color="white" />
                </Link>
              </li>
              <li>
                <Link href="https://chakra-ui.com" isExternal>
                  <Icon m={2} as={FaInstagram} w={12} h={12} color="white" />
                </Link>
              </li>
              <li>
                <Link href="https://chakra-ui.com" isExternal>
                  <Icon m={2} as={FaYoutube} w={12} h={12} color="white" />
                </Link>
              </li>
            </ul>
          </Flex>
          <Image
            mt="20vh"
            objectFit="cover"
            src={`../Victoriax2-removebg-preview.png`}
          />
          <Flex
            align="center"
            ml={16}
            mt="25vh"
            w="2xl"
            p={8}
            flexDirection="column"
          >
            <Heading size="xl" color="#1f1f20">Hola, Soy</Heading>
            <Heading size="2xl" color="#00a2ff">Victoria Jimenez </Heading>
            <Heading size="xl"color="#1f1f20">
              junior Digital Marketing Specialist
            </Heading>
            <Text fontWeight="semibold" textAlign="justify" mt={2}>
              Motivada por seguir aprendiendo de esta industria,siempre
              tratando de perfeccionar mis habilidades, mi mayor herramienta es
              la creatividad y disciplina para enfrentarme a los retos que se me
              presenten en mis proyectos.
            </Text>

            <Flex w="100%" m={4} align="center" justifyContent="center">
              <Box
                as="button"
                height="2.7rem"
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                border="1px"
                px="8px"
                borderRadius="10px"
                fontSize="14px"
                fontWeight="semibold"
                bg="#00a2ff"
                color="#fff"
                _hover={{ bg: "#40b9ff" }}
                _active={{
                  bg: "#0082cc",
                  transform: "scale(0.98)",
                  borderColor: "#bec3c9",
                }}
                _focus={{
                  boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              >
                My Works
              </Box>
              </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Aboutme;
