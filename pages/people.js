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
import PeopleCard from "../components/cards/PeopleCard";

export default function People() {
  const { title, date, people } = attributes;

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
        <title>[Experimental] Netlify CMS with Next Js - People</title>
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

        <PeopleCard people={people} />
      </main>

      <footer className={styles.footer}>
        <a>Powered by Vercel</a>
      </footer>
    </Container>
  );
}
