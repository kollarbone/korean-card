import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";
import { useParams } from "react-router-dom";


const Card: React.FC = () => {
    const {words, error, loading} = useTypedSelector(state => state.word)
    const {fetchWords} = useActions() 
    const [activeCard, setActiveCard] = useState(0)
    const [flip, setFlip] = useState(false)
    const path = useParams().category;
    const data:any = [];
    
    useEffect(()=> {
        fetchWords()
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
            <div onClick={()=> setFlip(!flip)} className="bg-pink-200 px-4 py-2 rounded-md w-80 h-40 mx-auto mt-10 flex justify-center items-center hover:scale-105 cursor-pointer" >
                {flip?
                <span className="text-2xl">
                    {data[activeCard].word}
                    </span>
                :<img className="w-10/12 px-4 py-2 rounded-md" 
                    src={data[activeCard].image} 
                    alt={data[activeCard].word}
                />
                }
            </div>
            <div className="flex justify-center items-center">
                {activeCard !== 0 && 
                    <button onClick={()=> setActiveCard(activeCard-1)} 
                        className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        >prev
                    </button>}
                {data.length - 1 !== (activeCard ) && 
                    <button onClick={()=> setActiveCard(activeCard+1)} 
                        className="bg-yellow-200 px-4 py-2 rounded-md w-15 h-10 mx-auto  mt-10 hover:scale-105 cursor-pointer"
                        >next
                    </button>
                }
            </div>
        </div>
    );
}

export default Card;
