/**
 * Exercise 01: The Retro Movie Store
 * Implement a shopping cart with the next features for the Movie Store that is selling retro dvds:
 * 1. Add a movie to the cart
 * 2. Increment or decrement the quantity of movie copies. If quantity is equal to 0, the movie must be removed from the cart
 * 3. Calculate and show the total cost of your cart. Ex: Total: $150
 * 4. Apply discount rules. You have an array of offers with discounts depending of the combination of movie you have in your cart.
 * You have to apply all discounts in the rules array (discountRules).
 * Ex: If m: [1, 2, 3], it means the discount will be applied to the total when the cart has all that products in only.
 *
 * You can modify all the code, this component isn't well designed intentionally. You can redesign it as you need.
 */
import { useEffect, useState } from 'react'
import { getMovies } from '../../../../api/getMovies'
import MoviesList from '../MoviesList'
import { useCart } from '../../../../hooks/cartHooks'

export default function Layout() {
  const [movies, setMovies] = useState([])
  const cart = useCart()

  useEffect(() => {
    getMovies().then(response => {
      setMovies(response.data)
    })
  }, [])

  const discountRules = [
    {
      m: [3, 2],
      discount: 0.25
    },
    {
      m: [2, 4, 1],
      discount: 0.5
    },
    {
      m: [4, 2],
      discount: 0.1
    }
  ]

  return (
    <section className="moviesShop">
      <MoviesList movies={movies} />
      <MoviesList movies={cart} isCart />
    </section>
  )
}