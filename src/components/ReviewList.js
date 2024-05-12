// Need to be able to host containers with Review Components inside them

import React from 'react'


const ReviewList = ({reviews}) => {

  return (
    <div>ReviewList
        {reviews.map((review, index) =>(
            <li key={index}>
                <p>User: {review.userId}</p>
                <p>Review: {review.comment}</p>
                <p>Stars: {review.stars}</p>
            </li>
    ))}

    </div>
  )
}

export default ReviewList