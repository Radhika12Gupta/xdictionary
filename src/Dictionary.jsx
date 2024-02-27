import React, { useState } from 'react'

const Dictionary = () => {
    const [word,setWord]=useState("")
    const [definition,setDefinition]=useState("")

    const dictionary=
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


    const handleClick=()=>{
      let result= dictionary.filter((key)=>{
          return (key.word.toLowerCase()===word.toLowerCase() && key.meaning)
         
       
       })
       if(result.length){
        setDefinition(result[0].meaning)
       }
       else {
        setDefinition("Word not found in the dictionary.")
       }
    }

  return (
    <div>
      <h1>Dictionary App</h1>
      <input type="text" value={word} placeholder="Search for a word..." onChange={e=> setWord(e.target.value)}/>
      <button onClick={handleClick}>Search</button>

      <h5>Dictionary:</h5>
      <p>{definition}</p>
    </div>
  )
}

export default Dictionary
