import React from "react"
import { Box, Text, VStack, HStack, FlatList } from "native-base"

import Card from "../components/Card"

const CardContainer = ({ data }) => {
  return (
    <Box flex={1}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  )
}
export default CardContainer
