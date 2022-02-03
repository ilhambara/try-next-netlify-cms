import Head from "next/head";
// import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import { attributes } from "../content/people.md";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import SlidesView from "../components/swiper/Swiper";

export default function Swiper() {
  const { title, date, people } = attributes;

  console.log(people);

  // format date
  const getDate = new Date(date);
  const displayDate = getDate.toLocaleDateString("en-uk", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container maxW="container.xl">
      <Head>
        <title>Swiper for People | NetlifyCMS with Next Js</title>
      </Head>

      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>

      <main className={styles.main}>
        <Heading as="h1" fontSize="3rem" fontWeight="normal">
          {title}
        </Heading>

        <Text fontSize="1.5rem" my={8}>
          Last Update on:{" "}
          <Badge fontSize="lg" colorScheme="green">
            {displayDate}
          </Badge>
        </Text>

        <SlidesView people={people} />
      </main>

      <footer className={styles.footer}>
        <a>Powered by Vercel</a>
      </footer>
    </Container>
  );
}
