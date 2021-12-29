import { useState } from "react"
import Axios from "axios"
import { initStartDate, initEndDate } from "../utlis/utils"

export const useFetch = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const initilUrl = `https://api.spacexdata.com/v3/launches`

  // console.log(timeline)

  const fetchData = async (
    timeline,
    start = initStartDate,
    end = initEndDate
  ) => {
    let url = timeline === "All" ? initilUrl : initilUrl + `/${timeline}`
    url = url + `?start=${start}&end=${end}`
    console.log(url)

    setLoading(true)
    try {
      const response = await Axios.get(url)
      // console.log(response.data)
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return { data, loading, fetchData }
}
