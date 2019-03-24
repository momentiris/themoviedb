import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.li`
  width: 100%;
  height: 250px;
  background: ${({ bg }) =>
    !bg ? 'black;' : 'center / cover no-repeat url(' + bg + ');'} 
  transition: all 200ms ease;
  position: relative;
  display: flex;
  :hover span {
    opacity: 1;
  }

  span {
    padding: 1rem;
    width: 100%;
    text-decoration: none;
    transition: all 200ms ease;
    font-size: 28px;
    color: black;
    opacity: 0;
    font-weight: bold;
    background: white;
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
    {movies.map((movie, i) => (
      <Link
        style={{ textDecoration: 'none' }}
        key={i}
        to={`/movie/${movie.id}`}
      >
        <Container title={movie.title} bg={movie.backdrop_path}>
          <span>{movie.title}</span>
        </Container>
      </Link>
    ))}
  </Grid>
)
