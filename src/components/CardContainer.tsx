import React from "react"
import { Box, Text, VStack, HStack, FlatList } from "native-base"

import Card from "../components/Card"

interface Props {
  data: any
}

const CardContainer = ({ data }: Props) => {
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
