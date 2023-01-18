import React from 'react'
import { Questions } from './Data'
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'


const App = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleClick = (data) => {
    if(data) {
      setScore(score + 1)
    }

   const nextQuestion = currentQuestion + 1

   if(nextQuestion < Questions.length) {
     setcurrentQuestion(nextQuestion)
   } 
   else {
     setShowScore(true);
   }
  }
  return (
    
    <div className='bg-slate-300  shadow-slate-900 shadow-lg selection:bg-none  rounded-lg p-7 flex justify-around flex-col '>  
      {
        showScore ? (
          <div style={showScore ? {backgroundColor: 'white'} : {}} className='shadow-md p-4 mx-auto my-auto flex flex-col justify-center items-center'>
            <span className='text-4xl'>You scored <span className='text-red-600 font-semibold'>{score}</span> out of {Questions.length}</span>
            <span className='text-3xl mt-5 text-yellow-600 font-medium '>Congratulations!</span>
          </div>
        ) :
        
        (

     <>
       <div className='flex justify-center items-center flex-col'>
            <h2 className='text-5xl mb-5'>Questions {currentQuestion + 1}/{Questions.length}</h2>
            <span className='text-2xl'>{Questions[currentQuestion].question}</span>
       </div>

       <div className='flex flex-col mt-12 mb-4 gap-6'>
            {Questions[currentQuestion].choices.map((choice) => (
							<button onClick={() => handleClick(choice.isCorrect)} className='bg-[#020717] w-40 mx-auto rounded-md p-2 active:bg-gray-600 active:scale-x-105 trnsition ease-out duration-150 text-white'>{choice.answers}</button>
						))}
       </div>

       
     </>

       )
      }
     
    </div>

  )
}

export default App
