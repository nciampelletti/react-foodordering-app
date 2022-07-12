import React from "react"
import styled from "styled-components"
import Card from "../UI/Card"
import MealItem from "./MealItem"
import { useEffect, useState } from "react"

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ]

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-eb12d-default-rtdb.firebaseio.com/meals.json"
      )

      const responseData = await response.json()
      const loadedMeals = []

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }

      setMeals(loadedMeals)
    }

    fetchMeals()
  }, [])

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    )
  })
  return (
    <Wrapper>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </Wrapper>
  )
}

export default AvailableMeals

const Wrapper = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
