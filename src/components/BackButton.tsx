import {BiArrowBack} from 'react-icons/bi'

function BackButton ()  {
    return (
        <a href="/">
            <div className="m-3 text-xl cursor-pointer hover:scale-125 w-fit">
                <BiArrowBack/>
            </div>
        </a>
    );
}

export default BackButton;
