import { Container, VStack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const EmployeeSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  position: Yup.string().required("Position is required"),
});

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Employee Information</Heading>
        <Formik
          initialValues={{ name: "", email: "", position: "" }}
          validationSchema={EmployeeSchema}
          onSubmit={(values) => {
            navigate("/summary", { state: values });
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%" }}>
              <VStack spacing={4}>
                <FormControl isInvalid={errors.name && touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field as={Input} id="name" name="name" />
                </FormControl>
                <FormControl isInvalid={errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field as={Input} id="email" name="email" type="email" />
                </FormControl>
                <FormControl isInvalid={errors.position && touched.position}>
                  <FormLabel htmlFor="position">Position</FormLabel>
                  <Field as={Input} id="position" name="position" />
                </FormControl>
                <Button type="submit" colorScheme="blue" width="full">Submit</Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </Container>
  );
};

export default Index;