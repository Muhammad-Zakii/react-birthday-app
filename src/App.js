import React from 'react'
import './App.css'
import { Component } from 'react'
import Data from './data'
;<link
  href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
  rel='stylesheet'
  integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
  crossorigin='anonymous'
></link>
function App() {
  const [data, setData] = React.useState(Data)
  return (
    <section className='items'>
      <h3>{data.length} Birthdays today</h3>
      {data.map((person) => {
        const { ima, name, age } = person
        return <Person {...person}></Person>
      })}
      <button
        onClick={() => {
          setData([])
        }}
      >
        clear all
      </button>
    </section>
  )
}
const Person = (props) => {
  const { ima, name, age } = props
  return (
    <article className='art'>
      <img src={ima} alt='' />
      <div className='tex'>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
}

export default App
