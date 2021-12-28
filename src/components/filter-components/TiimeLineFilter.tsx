import React from "react"
import { Select, VStack, CheckIcon } from "native-base"

interface TiimeLineFilterProps {
  selectedTimeLine: string
  onPress: (value: string) => void
}

const TimeLineFilter = ({
  selectedTimeLine,
  onPress,
}: TiimeLineFilterProps) => {
  return (
    <VStack p={4} space={4}>
      <Select
        selectedValue={selectedTimeLine}
        // minWidth="200"
        accessibilityLabel="Choose Timeline"
        placeholder={selectedTimeLine}
        fontSize={15}
        _selectedItem={{
          bg: "red.100",
          endIcon: <CheckIcon size="3" />,
        }}
        mt={1}
        onValueChange={(itemValue) => onPress(itemValue)}
      >
        <Select.Item label="All Launches 🚀 " value="All" />
        <Select.Item label="Upcoming Launches 🚀 " value="upcoming" />
        <Select.Item label="Past Launches  🚀 " value="past " />
      </Select>
    </VStack>
  )
}

export default TimeLineFilter
