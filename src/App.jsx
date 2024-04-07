import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Upload from './components/Uploader'
import { useForm } from 'react-hook-form'
import ImgCard from './components/ImgCard'

const cards=[
  {
    id:1,
    url:"https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524398.jpg?size=626&ext=jpg&ga=GA1.1.94677442.1712406890&semt=ais",
    title:"Ai Advanced Genereation"
  },
  {
    id:2,
    url:"https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524398.jpg?size=626&ext=jpg&ga=GA1.1.94677442.1712406890&semt=ais",
    title:"Mountian Peek"
  },
  {
    id:3,
    url:"https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524398.jpg?size=626&ext=jpg&ga=GA1.1.94677442.1712406890&semt=ais",
    title:"Beautiful Nature Enviroment"
  },
  {
    id:4,
    url:"https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524398.jpg?size=626&ext=jpg&ga=GA1.1.94677442.1712406890&semt=ais",
    title:"Animal Creature Design"
  }
]

function App() {
  const {register,setValue,formState:{errors}}=useForm()

  return (
  <>
     <div className='flex border 1px solid justify-evenly items-center'>
      <Upload
       name="Upload Image"
       label="Upload Image"
       register={register}
       setValue={setValue}
       errors={errors}/>
   </div>
    <div className='w-full flex'>
    {
      cards?.map((card)=>(
        <ImgCard key={card.id} url={card.url} title={card.title}/>
   
      ))
    }
    
    </div>
  </>
  )
}

export default App
