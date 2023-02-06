import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { brandApi, useBrandApi } from "./Components/Hooks/useBrandApi.js"

export const ItemDetail = () => {
    const {brandApi} = useBrandApi()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        axios.get(brandApi).then((response) => {
            setDetail(response.data.item)
        })
    })
  return (
    <div>
        <h1>{detail.title}</h1>
    </div>
  )
}
