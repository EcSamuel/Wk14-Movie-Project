// Movie needs to represent a synopsis, an image, the aggregate of user ratings, and one featured actor

// Could be done from calling a helper function out of a complex array with properties nested under each movie? .map comes to mind as a way to populate this on a page.

import React, { useState } from 'react';
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm';
import RatingAverage from './Stars';

const Movie = ({ title, director, synopsis }) => {
  const [reviews, setReviews] = useState([])
  
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>Directed by: {director}</p>
        <p>Synopsis: {synopsis}</p>
      </div>
      <>
        <ReviewForm setReviews={setReviews} reviews={reviews}/>
      </>
      <>
        <RatingAverage setReviews={setReviews} reviews={reviews}/>
      </>
      
      <>
        {reviews.length > 0 ? (
          <>
            <p>Viewer Rating: {avgRating}</p>
            <ul>
              {/*Individual Reviews will go here*/}
              <ReviewList reviews={reviews}/>
            </ul>
          </>
        ) : (
          <p>No reviews yet</p>
        )}
      </>
      </>
  );
};
  const avgRating = ()=> {

    //Average based off review stars
  };

// Things are breaking here because MovieCard doesn't exist. Here begins the stacking of the Dominoes I guess?

export default Movie;