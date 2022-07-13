import React from "react"
import styled from "styled-components"

const MealsSummary = () => {
  return (
    <Wrapper>
      <h2>Delicious food delivered to you</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquid
        vero velit odio aliquam illum excepturi alias nisi!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
        consequuntur nihil voluptates, enim iste eaque.
      </p>
    </Wrapper>
  )
}

export default MealsSummary

const Wrapper = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  .summary h2 {
    font-size: 2rem;
    margin-top: 0;
  }
`
