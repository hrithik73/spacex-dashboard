import React, { useEffect } from "react"
import { Box, Text, HStack, Spinner, Heading, Center } from "native-base"

import CardContainer from "../components/CardContainer"
import TimeLineFilter from "../components/filter-components/TiimeLineFilter"
import FilterByDate from "../components/filter-components/FilterByDate"
import { useFetch } from "../hooks/useFetch"

const HomeScreen = () => {
  const [selectedTimeLine, setSelectedTimeLine] = React.useState("All")
  const { data, loading } = useFetch(selectedTimeLine)
  // console.log(selectedTimeLine)
  // console.log(data)

  useEffect(() => {
    console.log("re-render")
  }, [data])

  if (loading)
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
  return (
    <Box flex={1}>
      <TimeLineFilter
        selectedTimeLine={selectedTimeLine}
        onPress={setSelectedTimeLine}
      />
      <FilterByDate selectedTimeLine={selectedTimeLine} />
      <CardContainer data={data} />
    </Box>
  )
}

export default HomeScreen
