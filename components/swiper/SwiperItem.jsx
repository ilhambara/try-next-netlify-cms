import NextLink from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  VStack,
  Spacer,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

SwiperCore.use([Pagination, Navigation]);

export default function SwiperItem({ people }) {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
      >
        {people.map((person, key) => {
          const link = person.href;

          return (
            <SwiperSlide key={key}>
              <Stack
                w="auto"
                h="full"
                mx={16}
                mb={16}
                direction={["column-reverse", "row"]}
                justifyContent="center"
                alignItems="flex-start"
              >
                <VStack
                  w={["100%", "50%"]}
                  h="100%"
                  alignItems="flex-start"
                  spacing={[6, 8]}
                >
                  <Heading
                    as="h1"
                    fontSize={["3xl", "2xl"]}
                    fontWeight="semibold"
                    textColor="green.700"
                  >
                    {person.name}
                  </Heading>

                  <Text fontSize="xl">{person.info}</Text>

                  <ButtonGroup size="md" spacing={4}>
                    {/* <ModalProduct spesification={spesification} /> */}

                    <Button
                      as="a"
                      href={link}
                      rightIcon={<PhoneIcon />}
                      colorScheme="whatsapp"
                      variant="solid"
                      target="_blank"
                      isDisabled={link ? false : true}
                    >
                      Contact Us
                    </Button>
                  </ButtonGroup>
                </VStack>

                <Spacer />

                <VStack>
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    w="100%"
                    h="240px"
                    objectFit="cover"
                    bgColor="gray.100"
                    borderRadius="md"
                    boxShadow="lg"
                  />
                </VStack>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
