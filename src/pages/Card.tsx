import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import {GrNext, GrPrevious, GrClose} from "react-icons/gr"
import {BsRepeat, BsPlayFill} from 'react-icons/bs'
import { Word } from "../types/words";
import {motion, useMotionValue, useTransform} from "framer-motion"

const Card: React.FC = () => {
    const {words, error, loading} = useTypedSelector(state => state.word)
    const {fetchWords} = useActions() 
    const [activeCard, setActiveCard] = useState(0)
    const [flip, setFlip] = useState(false)
    const path = useParams().category;
    const data:Word[] = [];
    const [doneCards, setDoneCards] = useState(1)
    const [repeat, setRepeat] = useState<Word[]>([])
    const [useRepeat, setUseRepeat] = useState(false)

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

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
    const addWords = (data:Word) => {
        setRepeat(prev=>[...prev, data])
    }
    
    const handleDragEnd = (evt:any) => {
        const layerX = evt.layerX;
        if (!useRepeat && layerX <= 50 && data.length - 1 !== (activeCard ) ) {
            setRepeat(prev=>[...prev, data[activeCard]])
            setActiveCard(activeCard+1)
            setDoneCards(doneCards+1)
        } else if (useRepeat && layerX <= 50 && repeat.length - 1 !== (activeCard ) ) {
            setRepeat(prev=>[...prev, data[activeCard]])
            setActiveCard(activeCard+1)
            setDoneCards(doneCards+1)
        } else if (!useRepeat && layerX > 250 && data.length - 1 !== (activeCard ) ) {
            setActiveCard(activeCard+1)
            setDoneCards(doneCards+1)
        } else if (useRepeat && layerX > 250 && repeat.length - 1 !== (activeCard )) {
            setActiveCard(activeCard+1)
            setDoneCards(doneCards+1)

        } else if (!useRepeat && layerX <= 50 && data.length - 1 === (activeCard )){
            setRepeat(prev=>[...prev, data[activeCard]])
            setActiveCard(0)
            setDoneCards(1)
            setUseRepeat(true)
        } else if (useRepeat && layerX <= 50 && repeat.length - 1 === (activeCard )) {
            setRepeat(prev=>[...prev, data[activeCard]])
            setActiveCard(0)
            setDoneCards(1)
        } else if (!useRepeat && layerX > 250 && data.length - 1 === (activeCard )) {
            setActiveCard(0)
            setDoneCards(1)
            setUseRepeat(true)
        } else if (useRepeat && layerX > 250 && repeat.length - 1 === (activeCard )) {
            setActiveCard(0)
            setDoneCards(1)
            setUseRepeat(false)
        }
    }
    return (
        <div className="mx-auto mt-10 text-center">
            <BackButton/>
            {useRepeat && repeat ? <>
                <p className="text-lg">Repeat:</p>
                <p className="text-lg">{doneCards}/{repeat.length}</p></>:
                <p className="text-lg">{doneCards}/{data.length}</p>
            }
            {useRepeat && repeat ?
                <motion.div drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{ x, opacity }}
                    onDragEnd={handleDragEnd}>
                    <div onClick={()=> setFlip(!flip)}
                        className={`card ${flip ? "flip" : ""} bg-pink-200 px-4 py-2 rounded-md w-80 h-40 mx-auto mt-10 flex flex-row justify-center items-center  cursor-pointer`} >
                        <span className="card__face text-5xl card__face--front">
                            {repeat[activeCard].word}
                            </span>
                        <span className="card__face card__face--back w-fit px-4 py-2 rounded-md text-5xl text-center" 
                            role="img"
                        >{repeat[activeCard].image}<span>{repeat[activeCard].trans}</span></span>
                    </div>
                </motion.div>
            :
                    <motion.div 
                        drag="x"
                        dragConstraints={{
                            left: 0,
                            right: 0,
                        }}
                        style={{ x, opacity }}
                        onDragEnd={handleDragEnd}
                         >
                        <div onClick={()=> setFlip(!flip)}
                         className={`card ${flip ? "flip" : ""} bg-pink-200 px-4 py-2 rounded-md w-80 h-40 mx-auto mt-10 flex flex-row justify-center items-center  cursor-pointer`}>
                            <span className="card__face text-5xl card__face--front">
                                {data[activeCard].word}
                                </span>
                            <span className="card__face card__face--back w-fit px-4 py-2 rounded-md text-5xl text-center" 
                                role="img"
                            >{data[activeCard].image}<span>{data[activeCard].trans}</span></span>
                        </div>
                    </motion.div>
                
            }
            <div className="flex justify-center items-center w-1/2 m-auto">
                {activeCard !== 0 && 
                    <button onClick={()=> {setActiveCard(activeCard-1); setDoneCards(doneCards-1)}} 
                        className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        ><GrPrevious/>
                    </button>
                }
                    {data.length - 1 !== (activeCard ) && !useRepeat &&
                    <button onClick={()=> {setActiveCard(activeCard+1); setDoneCards(doneCards+1);addWords(data[activeCard])}}
                        className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        ><BsRepeat/>
                    </button>}
                    {data.length - 1 === (activeCard ) && !useRepeat && repeat &&
                    <button onClick={()=> {addWords(data[activeCard]); setUseRepeat(true); setActiveCard(0);setDoneCards(1)}}
                        className="bg-green-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        ><BsPlayFill/>
                    </button>}
                    {useRepeat && 
                    <button onClick={()=> {setUseRepeat(false); setActiveCard(0);setDoneCards(1)}}
                        className="bg-gray-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        ><GrClose/>
                    </button> }
                
                {data.length - 1 !== (activeCard ) && !useRepeat &&
                    <button onClick={()=> {setActiveCard(activeCard+1); setDoneCards(doneCards+1)}} 
                        className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        ><GrNext/>
                    </button>
                }
                {useRepeat && repeat && repeat.length - 1 !== (activeCard ) &&
                    <button onClick={()=> {setActiveCard(activeCard+1); setDoneCards(doneCards+1)}} 
                        className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        ><GrNext/>
                    </button>
                }
            </div>
        </div>
    );
}

export default Card;


