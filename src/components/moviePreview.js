import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.li`
  max-width: 250px;
  height: 250px;
  border-radius: 5px;
  padding: 1rem;
  background: top/contain no-repeat url('${({ bg }) => bg}');
  transition: all 200ms ease;
  position: relative;
  display: flex;
  box-shadow: 2px 2px 7px grey;
  justify-content: flex-end;
  flex-flow: column nowrap;
  text-decoration:none;
  &:hover {
    transform: scale(1.02);
  }
  :hover span {
    opacity: 1;
  }
  span:first-child {
    font-weight: bold;
    margin-bottom: .5rem;
  }
 
`

const Grid = styled.ul`
  display: grid;
  margin: 0;
  padding: 2rem;
  list-style: none;
  grid-gap: 3vmin;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
`

export default ({ movies }) => (
  <Grid>
    {movies.map((movie, i) => {
      console.log('====================================')
      console.log(movie)
      console.log('====================================')
      return (
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          key={i}
          to={`/movie/${movie.id}`}
        >
          <Container title={movie.title} bg={movie.backdrop_path}>
            <span>{movie.title}</span>
            <span>Released: {movie.release_date}</span>
            <span>Score: {movie.vote_average}</span>
          </Container>
        </Link>
      )
    })}
  </Grid>
)
