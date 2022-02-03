import {
  Box,
  Container,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import SwiperItem from "./SwiperItem";

export default function Swiper({ people }) {
  return (
    <>
      <Box id="products" w="full" minH="100vh" bgColor="white">
        <Container
          maxW={["container.xl", "container.lg"]}
          py={4}
          px={[-4, 0]}
          h="100%"
        >
          <VStack alignItems={["center", "flex-start"]} mx={[0, 16]} mb={12}>
            <Heading as="h1" size="xl" fontWeight="normal">
              Our Team
            </Heading>
          </VStack>
          <SwiperItem people={people} />
        </Container>
      </Box>
    </>
  );
}
