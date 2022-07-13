import React from "react"
import styled from "styled-components"

const Error = () => {
  return (
    <Wrapper>
      <h2>Sorry we have an error</h2>
    </Wrapper>
  )
}

export default Error

const Wrapper = styled.section`
  h2 {
    font-size: 1rem;
    margin-top: 2rem;
    text-align: center;
    color: red;
  }
`
