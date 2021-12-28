import React from "react"
import {
  Box,
  Button,
  Heading,
  HStack,
  VStack,
  Modal,
  Text,
  Stack,
} from "native-base"

import { EvilIcons } from "@expo/vector-icons"

const MoalCard = ({ data }) => {
  return (
    <>
      <Modal.Header>{data.mission_name}</Modal.Header>
      <Modal.Body>
        <Stack space="2" p="4">
          <Text color="gray.400"> 🚀 {data.rocket.rocket_name}</Text>
          <Text color="gray.400">📅 {data.launch_date_local}</Text>
        </Stack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          px="2"
          pb="2"
          space="5"
        >
          <HStack space="2">
            <HStack>
              <EvilIcons name="location" size={24} />
              <Text
                _light={{ color: "emerald.800" }}
                _dark={{ color: "emerald.300" }}
              >
                {data.launch_site.site_name}
              </Text>
            </HStack>
            <HStack>
              <EvilIcons name="calendar" size={24} />
              <Text
                _light={{ color: "emerald.800" }}
                _dark={{ color: "emerald.300" }}
              >
                {data.launch_year}
              </Text>
            </HStack>
          </HStack>
          <Button
            variant="subtle"
            colorScheme={data.launch_success ? "primary" : "secondary"}
          >
            {data.launch_success ? "Sucsess" : "Failed"}
          </Button>
        </HStack>
      </Modal.Body>
      <Modal.Footer>
        <Heading>hello</Heading>
      </Modal.Footer>

      <Modal.CloseButton />
    </>
  )
}
export default MoalCard
