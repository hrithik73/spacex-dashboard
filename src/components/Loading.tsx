import React from "react"

import { Center, HStack, Heading, Spinner } from "native-base"

const Loading = () => {
  return (
    <Center pt={10} mt={10}>
      <HStack space={2} alignItems="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  )
}

export default Loading
