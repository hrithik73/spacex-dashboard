import * as React from "react"
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Link,
  VStack,
  Text,
} from "native-base"
import { Formik } from "formik"
import { useNavigation } from "@react-navigation/core"
import * as yup from "yup"

import { auth } from "../../utlis/Fireabase"

export const LoginScreen = () => {
  const navigation = useNavigation()

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  })

  const handleLogIn = async (value, actions) => {
    const { email, password } = value
    try {
      const response = await auth.signInWithEmailAndPassword(email, password)
      console.log(response)

      navigation.navigate("Home")
    } catch (error) {
      // console.log(error)
      actions.setFieldError("general", error.message)
    }
  }

  return (
    <Center flex={1} px="3">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(value, actions) => {
              handleLogIn(value, actions)
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
              <VStack space={2}>
                <Input
                  name="email"
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  caretHidden={false}
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
                  caretHidden={false}
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
                  Sign in
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
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
}
export default LoginScreen
