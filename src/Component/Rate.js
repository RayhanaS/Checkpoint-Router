import React from 'react'

function Rate({rating, setRating}) {
    const ratingArr = [1,2,3,4,5]
    return (
        <div>
            {ratingArr.map ((el)=>
             <span onClick={()=>{setRating (el)}}>
                { el<= rating ? (<i class="fas fa-star"></i>) : (<i class="far fa-star"></i>)}
            </span>
            )}
        </div>
    )
}

export default Rate
