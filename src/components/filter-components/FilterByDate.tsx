import React, { useEffect, useState } from "react"
import { Box, Text, VStack, Heading, Button, HStack } from "native-base"
import DateTimePicker from "@react-native-community/datetimepicker"

import { useFetch } from "../../hooks/useFetch"

interface props {
  selectedTimeLine: string
}
const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = "0" + month
  if (day.length < 2) day = "0" + day

  return [year, month, day].join("-")
}

const FilterByDate = ({ selectedTimeLine }: props) => {
  const today = new Date()
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [showStartDate, setShowStartDate] = useState(false)
  const [showEndDate, setShowEndDate] = useState(false)

  // const { fetchData } = useFetch(selectedTimeLine)

  return (
    <Box p={2}>
      <HStack space={2} paddingX={2}>
        <Button onPress={() => setShowStartDate(true)}>
          {startDate === today ? "Start Date" : startDate.toLocaleDateString()}
        </Button>
        <Button onPress={() => setShowEndDate(true)}>
          {endDate === today ? "End Date" : endDate.toLocaleDateString()}
        </Button>
      </HStack>

      {showStartDate && (
        <DateTimePicker
          testID="DateTImePIcker"
          placeholderText="Hello"
          value={startDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || startDate
            setStartDate(currentDate)
            setShowStartDate(!showStartDate)
          }}
        />
      )}
      {showEndDate && (
        <DateTimePicker
          testID="DateTImePIcker"
          value={endDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || endDate
            setEndDate(currentDate)
            setShowEndDate(!showEndDate)
          }}
        />
      )}
    </Box>
  )
}
export default FilterByDate
