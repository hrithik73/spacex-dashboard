import { useState, useEffect } from "react"
import Axios from "axios"

export const useFetch = (timeline, start = null, end = null) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const initilUrl = `https://api.spacexdata.com/v3/launches`

  // console.log(timeline)
  const fetchData = async (url) => {
    const result = await Axios(url)
    setData(result.data)
    console.log(result.data)
    setLoading(false)
  }

  useEffect(() => {
    let url = timeline === "All" ? initilUrl : initilUrl + `/${timeline}`
    // url = url + `?end=${end}&start=${start}`
    console.log(url)
    setLoading(true)
    fetchData(url)
  }, [timeline])

  return { data, loading, fetchData }
}
