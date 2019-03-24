import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.article`
  width: 100%;
  h1 {
    font-size: 36px;
  }
`
const Hero = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
`
const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Header = styled.header`
  font-size: 4.3em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const CastContainer = styled.ul`
  display: grid;
  margin: 0;
  padding: 2rem;
  list-style: none;
  grid-gap: 3vmin;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`
const Cast = styled.li`
  width: 100%;
  height: 200px;
  position: relative;
  background: black;
  font-size: 24px;
  font-weight: bold;
    color: #f1f1f1;
  span:nth-child(1) {
  background: black;
    width: 100%;
    height: 200px;
    opacity: 1;
  }
  ::after {
    top: 0;
    left: 0;
    transition: all 200ms ease;
    position: absolute;
    content:"${({ name }) => name}";
  background: black;

    opacity: 0;
    width: 100%;
    height: 200px;
  }

  :hover::after {
    opacity: 1
  }

`
export default ({ movie: { details, credits } }) => {
  return (
    <Container>
      <Header>{details.title}</Header>
      <Hero bg={details.backdrop_path} />
      <Details />
      <h1>Cast and Actors</h1>
      <CastContainer>
        {credits.cast.map((c, i) => (
          <Cast name={c.name} className="cast-member" key={i}>
            <span>{c.character}</span>
            <span />
          </Cast>
        ))}
      </CastContainer>
    </Container>
  )
}
