import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Context } from './contextProvider'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3%;
`
const SearchBar = styled.input`
  margin-bottom: 2rem;
  margin-top: 3%;
  width: 100%;
  max-width: 700px;
  font-size: 24px;
  font-weight: bold;
  background: lightgrey;
  padding: 10px;
  /* border: 2px dashed black; */
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 0.5;
  }
  box-shadow: 4px 5px 8px grey;
`
const Button = styled.button`
  box-shadow: 4px 5px 8px grey;
  margin-top: 3%;
  margin-left: 1rem;
  margin-bottom: 2rem;
  border: none;
  background: lightgrey;
  /* border: 2px dashed black; */

  font-size: 18px;
  font-weight: bold;
  padding: 1rem;
  &:hover {
    background: black;
    color: white;
  }
`
export default () => {
  const { dispatch } = useContext(Context)
  const [query, setQuery] = useState('')

  return (
    <Wrapper>
      <SearchBar
        placeholder="Search for something... or don't, I don't care."
        onChange={({ target: { value } }) => setQuery(value)}
        onKeyDown={({ keyCode }) =>
          keyCode === 13 && query && dispatch({ type: 'query', payload: query })
        }
      />
      <Button onClick={() => dispatch({ type: 'query', payload: query })}>
        Search
      </Button>
    </Wrapper>
  )
}
