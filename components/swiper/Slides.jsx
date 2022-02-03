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

SwiperCore.use([Pagination, Navigation]);

export default function Slides() {
  return (
    <>
      <Text>people</Text>
    </>
  );
}
