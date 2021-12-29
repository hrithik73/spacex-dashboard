import React, { useEffect, useState } from "react"
import { Box, StatusBar } from "native-base"

import CardContainer from "../components/CardContainer"
import FilterByDate from "../components/filter-components/FilterByDate"
import Loading from "../components/Loading"
import TimeLineFilter from "../components/filter-components/TiimeLineFilter"
import { useFetch } from "../hooks/useFetch"
import { initEndDate, initStartDate } from "../utlis/utils"

const HomeScreen = () => {
  const [selectedTimeLine, setSelectedTimeLine] = useState("All")
  const { data, loading, fetchData } = useFetch()
  const [startDate, setStartDate] = useState(initStartDate)
  const [endDate, setEndDate] = useState(initEndDate)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    fetchData(selectedTimeLine, startDate, endDate)
  }, [selectedTimeLine, flag])

  return (
    <Box flex={1}>
      <StatusBar backgroundColor="black" />
      <TimeLineFilter
        selectedTimeLine={selectedTimeLine}
        onPress={setSelectedTimeLine}
      />
      <FilterByDate
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        flag={flag}
        setFlag={setFlag}
        selectedTimeLine={selectedTimeLine}
      />

      {loading ? <Loading /> : <CardContainer data={data} />}
    </Box>
  )
}

export default HomeScreen
