import { useParams } from "react-router-dom";
import Card from "../components/Card";
import {useState} from 'react'

export function Cards() {
  const [activeCard, setActiveCard] = useState(0)
  const [flip, setFlip] = useState(false)
  const path = useParams().category;
  console.log(path)
  // const temp = Words[path as keyof typeof Words]
    return (
      <div className="mx-auto mt-10">
        {/* <div onClick={()=> setFlip(!flip)} className="bg-pink-200 px-4 py-2 rounded-md w-80 h-40 mx-auto mt-10 flex justify-center items-center hover:scale-105 cursor-pointer" >
          {flip?<span className="text-2xl">{temp[activeCard].word}</span>:<img className="w-10/12 px-4 py-2 rounded-md" src={temp[activeCard].image} alt={temp[activeCard].word}/>}
        </div>
        <div className="flex justify-center items-center">
          {activeCard !== 0 &&<button onClick={()=> setActiveCard(activeCard-1)} className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer">prev</button>}
          {temp.length - 1 !== (activeCard ) && <button onClick={()=> setActiveCard(activeCard+1)} className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer">next</button>}
        </div>
        <Card/> */}
      </div>
    );
  }
  