import { Container, VStack, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Summary = () => {
  const { state } = useLocation();
  const { name, email, position } = state || {};

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Employee Summary</Heading>
        <Text fontSize="lg"><strong>Name:</strong> {name}</Text>
        <Text fontSize="lg"><strong>Email:</strong> {email}</Text>
        <Text fontSize="lg"><strong>Position:</strong> {position}</Text>
      </VStack>
    </Container>
  );
};

export default Summary;