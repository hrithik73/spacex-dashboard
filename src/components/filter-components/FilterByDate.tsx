import React, { useState } from "react"
import { Box, Button, HStack, VStack, Text, ChevronDownIcon } from "native-base"
import RNDateTimePicker from "@react-native-community/datetimepicker"
import { initEndDate, initStartDate } from "../../utlis/utils"
import { Platform } from "react-native"

interface AppProps {
  selectedTimeLine: string
  flag: Boolean
  setFlag: (value: boolean) => void
  startDate: Date
  setStartDate: (value: Date) => void
  endDate: Date
  setEndDate: (value: Date) => void
}

const FilterByDate = ({
  flag,
  setFlag,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: AppProps) => {
  const [showStartDate, setShowStartDate] = useState(false)
  const [showEndDate, setShowEndDate] = useState(false)

  const applyFilter = () => {
    setFlag(!flag)
    // console.log(formateDate(startDate), formateDate(endDate))
  }

  const onChangeStart = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || startDate
    setShowStartDate(Platform.OS === "ios")
    setStartDate(currentDate)
  }

  const onChangeEnd = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || endDate
    setShowEndDate(Platform.OS === "ios")
    setEndDate(currentDate)
  }

  return (
    <Box pb={4}>
      <HStack px="4" space="3" alignItems="center">
        <VStack alignItems="center" space="2">
          <Text>Start Date</Text>
          <Button h="10" onPress={() => setShowStartDate(true)}>
            {startDate === initStartDate ? (
              <ChevronDownIcon />
            ) : (
              <Text>{startDate.toDateString()}</Text>
            )}
          </Button>
        </VStack>
        <VStack alignItems="center" space="2">
          <Text>End Date</Text>
          <Button h="10" onPress={() => setShowEndDate(true)}>
            {endDate === initEndDate ? (
              <ChevronDownIcon />
            ) : (
              <Text>{endDate.toDateString()}</Text>
            )}
          </Button>
        </VStack>
        <Button
          onPress={() => {
            applyFilter()
          }}
          colorScheme="secondary"
          alignSelf="flex-end"
        >
          <Text>Apply</Text>
        </Button>
      </HStack>

      {showStartDate && (
        <RNDateTimePicker
          testID="startDatePicker"
          placeholderText="Start Date"
          value={startDate}
          mode="date"
          display="default"
          onChange={onChangeStart}
        />
      )}
      {showEndDate && (
        <RNDateTimePicker
          testID="endDatePicker"
          placeholderText="End Date"
          value={endDate}
          mode="date"
          display="default"
          onChange={onChangeEnd}
        />
      )}
    </Box>
  )
}
export default FilterByDate
