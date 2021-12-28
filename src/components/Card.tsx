import React, { useState } from "react"
import {
  Box,
  Text,
  Modal,
  Heading,
  Button,
  HStack,
  Pressable,
  Stack,
} from "native-base"
import { EvilIcons } from "@expo/vector-icons"

import ModalCard from "./ModalCard"

const Card = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Pressable onPress={() => setShowModal(!showModal)}>
        <Box shadow="2" borderRadius="sm" p="2" m="2">
          <Text position="absolute" color="black" right="3" top={2}>
            #{data.flight_number}
          </Text>
          <Stack space="2" p="4">
            <Heading size={["md", "lg", "md"]} fontWeight="medium">
              {data.mission_name}
            </Heading>
            <Text color="gray.400"> 🚀 {data.rocket.rocket_name}</Text>
            <Text color="gray.400">📅 {data.launch_date_local}</Text>
          </Stack>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            px="2"
            pb="2"
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
        </Box>
      </Pressable>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        avoidKeyboard
        justifyContent="flex-end"
        borderTopRadius={30}
        size="md"
        top={20}
        bg={"green.100"}
      >
        <ModalCard data={data} />
      </Modal>
    </>
  )
}

export default Card
