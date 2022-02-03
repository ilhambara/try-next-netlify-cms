import {
  Avatar,
  Badge,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function PeopleCard({ people }) {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
      gap={6}
    >
      {people.map((person, k) => (
        <GridItem
          key={k}
          maxW="320px"
          w="100%"
          h="100%"
          p={6}
          border="1px"
          borderRadius="md"
        >
          <VStack spacing={6}>
            <Avatar size="xl" name={person.name} src={person.avatar} />
            <Heading as="h2" fontSize="3xl">
              {person.name}
            </Heading>
            <Badge fontSize="md" colorScheme="purple">
              {person.age} years old
            </Badge>
            <Text fontSize="md" textAlign="center">
              {person.info}
            </Text>
          </VStack>
        </GridItem>
      ))}
    </Grid>
  );
}
