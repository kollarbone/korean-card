import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import {GrNext, GrPrevious} from "react-icons/gr"
import { Frame, useMotionValue, useTransform, useAnimation } from 'framer';

const Card: React.FC = () => {
    const {words, error, loading} = useTypedSelector(state => state.word)
    const {fetchWords} = useActions() 
    const [activeCard, setActiveCard] = useState(0)
    const [flip, setFlip] = useState(false)
    const path = useParams().category;
    const data:any = [];

    const motionValue = useMotionValue(0);
    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
    const opacityValue = useTransform(
      motionValue,
      [-200, -150, 0, 150, 200],
      [0, 1, 1, 1, 0]
    );
    const animControls = useAnimation();

    useEffect(()=> {
        fetchWords()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error || words.length === 0) {
        return <h1>{error}</h1>
    }
    // eslint-disable-next-line array-callback-return
    words.map((item) => {
        if (item.category === path) {
             data.push(item)
        }
    })
    
    return (
        
        <div className="mx-auto mt-10">
            <BackButton/>
            <div onClick={()=> setFlip(!flip)}
                className={`card ${flip ? "flip" : ""} bg-pink-200 px-4 py-2 rounded-md w-80 h-40 mx-auto mt-10 flex flex-row justify-center items-center  cursor-pointer`} >
                <span className="card__face text-5xl card__face--front">
                    {data[activeCard].word}
                    </span>
                <span className="card__face card__face--back w-fit px-4 py-2 rounded-md text-5xl text-center" 
                    role="img"
                >{data[activeCard].image}<span>{data[activeCard].trans}</span></span>
            
            </div>
            <div className="flex justify-center items-center">
                {activeCard !== 0 && 
                    <button onClick={()=> setActiveCard(activeCard-1)} 
                        className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        ><GrPrevious/>
                    </button>}
                {data.length - 1 !== (activeCard ) && 
                    <button onClick={()=> setActiveCard(activeCard+1)} 
                        className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        ><GrNext/>
                    </button>
                }
            </div>
        </div>
    );
}

export default Card;
