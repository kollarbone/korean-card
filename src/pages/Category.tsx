import {NavLink} from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Category : React.FC = () => {
  const { error, loading, category} = useTypedSelector(state => state.word)
  
  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error || category.length === 0) {
    return <h1>{error}</h1>
  }
    return (
    <div className='flex flex-col m-auto text-center'>
      <p className='text-2xl p-3'>Choose word`s category:</p>
      <div className="flex flex-row flex-wrap justify-evenly content-center mt-5"> 
        {category.map((category, index)=> 
          <NavLink to={'/'+ category} key={index}>
            <div className='bg-blue-200 px-4 py-2 rounded-md w-80 h-32 mb-10 flex justify-center items-center hover:scale-105 cursor-pointer'>
              <span className='text-2xl' key={index}>{category}</span>
            </div>
          </NavLink>
      )}
      </div>
    </div>
    );
  }
  