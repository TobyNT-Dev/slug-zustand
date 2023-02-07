import React from 'react'
import styled from 'styled-components'

export const ProductCard = ({ ItemData }) => {
  return (
    <StyledCard>
        <h1>{ItemData.name}</h1>
        <img src={ItemData.image_fullpath} alt="Logo" />
    </StyledCard>
  )
}

const StyledCard = styled.div`

background-color: #aaa;

img {
    height: 10vw;
}
`