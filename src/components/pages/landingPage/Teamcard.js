import React from 'react'

//images
import contact2 from '../../../images/contact2.jpg';

//images
import mAvatar from '../../../images/mAvatar.svg'
import fAvatar from '../../../images/fAvatar.png'



const Teamcard = (props) => {
    return (
        <div className="w-full py-5 max-w-sm rounded-lg border shadow-md bg-gray-800 hover:bg-gray-700 border-gray-700">

            <div className="flex flex-col items-center ">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg" src={props.img==='m'?mAvatar:fAvatar} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium  text-white">{props.name}</h5>
                <span className="text-sm  text-gray-400">{props.post}</span>
                <span className="text-sm text-gray-400/80">{props.desc}</span>

            </div>
        </div>
    )
}

export default Teamcard