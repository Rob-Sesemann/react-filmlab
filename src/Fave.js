import React from 'react'

export default function Fave (props) {
 const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'
   
  const handleClick = (e) => {
        e.stopPropagation()
      props.onFaveToggle()
     console.log("handling Fave click!" )
    }

    // ? = the condition
    //  express after question mark = if treu 
    // second expression : is false 
    return (
        <div onClick={(e)=> handleClick(e)} className={`film-row-fave  ${isFave}`}>
        {isFave ===  'add_to_queue' ?
        <p className="material-icons">add_to_queue</p> :
        <p className="material-icons">remove_from_queue</p> }

      </div>      
    )
  }


