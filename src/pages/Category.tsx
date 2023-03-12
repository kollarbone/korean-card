import {Categories} from '../data/Categories'
import {NavLink} from 'react-router-dom'

export function Category() {
    return (
      <div className="flex flex-row flex-wrap justify-evenly content-center mt-10">
        {Categories.map((category, index)=> 
          <NavLink to={'/'+ category.category}>
            <div className='bg-blue-200 px-4 py-2 rounded-md w-80 h-32 mb-10 flex justify-center items-center hover:scale-105 cursor-pointer'>
              <span className='text-2xl' key={index}>{category.category}</span>
            </div>
          </NavLink>
      )}
      </div>
    );
  }
  