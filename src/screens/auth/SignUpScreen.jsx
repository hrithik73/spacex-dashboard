import * as React from "react"
import {
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Link,
  Center,
  Text,
} from "native-base"
import { useNavigation } from "@react-navigation/core"
import { Formik } from "formik"
import * as yup from "yup"
import { auth } from "../../utlis/Fireabase"

export const SignUpScreen = () => {
  const navigation = useNavigation()
  const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(8, ({ min }) => `Name must be at least ${min} characters`),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  })

  const handleSignup = async (value, actions) => {
    const { name, email, password } = value
    // console.log({ value })
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      response.user.updateProfile({
        displayName: name,
      })
      // Navigate to homepage
      navigation.navigate("Home")
    } catch (error) {
      actions.setFieldError("general", error.message)
      // console.log(error)
    }
  }

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack mt={4} space={3}>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={(value, actions) => {
              handleSignup(value, actions)
            }}
            validationSchema={loginValidationSchema}
          >
            {({
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              touched,
              values,
            }) => (
              <VStack space={3}>
                <Input
                  name="name"
                  placeholder="Name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.name}
                  </Text>
                )}

                <Input
                  name="email"
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
                <Input
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.password}
                  </Text>
                )}
                <Text style={{ color: "red" }}>{errors.general}</Text>
                <Button
                  mt="2"
                  colorScheme="indigo"
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  Sign Up
                </Button>
              </VStack>
            )}
          </Formik>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Already have an account ?{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("LogIn")}
            >
              LogIn
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
}

export default SignUpScreen
