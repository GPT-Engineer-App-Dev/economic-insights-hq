import { Container, Text, VStack, Heading, Box, Link, Flex } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Financial Times
        </Heading>
        <Box>
          <Text fontSize="2xl" textAlign="center" mt={4}>
            [Financial Times Logo Placeholder]
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Top Stories
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Story 1</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Story 2</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Story 3</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>
        <Flex justify="center" mt={10}>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal mx={2}>
            <FaLinkedin size="24px" />
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;