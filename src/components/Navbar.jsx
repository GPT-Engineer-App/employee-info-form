import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="lg">Home</Link>
        <Link as={RouterLink} to="/summary" color="white" fontWeight="bold" fontSize="lg">Summary</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;