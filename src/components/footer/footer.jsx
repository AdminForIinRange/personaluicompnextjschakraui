"use client";

import { Box, Flex, Link, Text, Stack, Icon } from '@chakra-ui/react'

import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bgColor="gray.200" py={2} mt={"100px"} borderRadius={
      '15px'
    }>
      <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center">
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Company</Text>
          <Link href="#" fontSize="sm" color="gray.600">About Us</Link>
          <Link href="#" fontSize="sm" color="gray.600">Contact Us</Link>
          <Link href="#" fontSize="sm" color="gray.600">Privacy Policy</Link>
          <Link href="#" fontSize="sm" color="gray.600">Terms of Service</Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Get Started</Text>
          <Link href="/components" fontSize="sm" color="gray.600">Presets</Link>
          <Link href="/components/card" fontSize="sm" color="gray.600">Card</Link>
          <Link href="/components/loginForm" fontSize="sm" color="gray.600">Auth From</Link>
          <Link href="/" fontSize="sm" color="gray.600">Landing</Link>
        </Stack>
        <Stack spacing={4} textAlign="center" mb={{ base: 8, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Connect</Text>
          <Flex justify="center">

            <Link    target="_blank"   href="https://github.com/AdminForIinRange" mr={2}><Icon as={FaGithub} boxSize={6} color="gray.600" /></Link>
            <Link     target="_blank"  href="https://www.linkedin.com/in/anjesh-bhattarai/" mr={2}><Icon as={FaLinkedin} boxSize={6} color="gray.600" /></Link>

          </Flex>
        </Stack>
      </Flex>
      <Text mt={8} textAlign="center" fontSize="sm" color="gray.600">© 2024 Anjesh Bhattarai</Text>
    </Box>

  )
}

export default Footer