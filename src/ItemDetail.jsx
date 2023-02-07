import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { brandApi, useBrandApi } from "./Components/Hooks/useBrandApi.js"
import { ProductCard } from './ProductCard.jsx'

export const ItemDetail = (item) => {
    const {brandApi} = useBrandApi()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        axios.get(brandApi).then((response) => {
            setDetail(response.data.item)
        })
    },[])

    if (!detail) return <div>Loading...</div>
    if (!detail.length) return <div>No data available</div>

  return (
    <StyledLogoH>
        <img src={detail.image_fullpath} alt="Logo" />
        <h1>{detail.name}</h1>
        <div>
        {detail.products.map((item, idx) => {
            return <ProductCard key={idx} ItemData={item} />
        })}
        </div>
    </StyledLogoH>
  )
}

const StyledLogoH = styled.div`
img {
    display: block;
    height: 15vh;
    margin: 0 auto;
}
h1 {
    text-align: center;
}
`