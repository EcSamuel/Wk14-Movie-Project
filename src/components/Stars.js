// A component that will average user stars toward a specific movie

//Needs to be able to count and average

//Needs to be able to attach to certain movies? Will that happen on this component?

import React from 'react';

class RatingAverage extends React.Component {
  calculateAverage = (reviews) => {
    // Convert each rating to a number and calculate the average
    const ratings = reviews.flatMap((review) => review?.stars || []);
    const total = ratings.reduce((acc, curr) => acc + Number(curr), 0);
    return total / ratings.length;
  };

  render() {
    console.log()
    const {reviews} = this.props;
    const average = reviews.length > 0 ? this.calculateAverage(reviews) : null;

    return (
      <div>
        <h1>Average Rating: {average !== null ? average.toFixed(2) + `stars` : 'No ratings yet'}</h1>
      </div>
    );
  }
}

export default RatingAverage;

// import React from 'react';
// import Movie from './Movie';

// class RatingAverage extends React.Component {
//   calculateAverage = (reviews) => {
//     // Extract all ratings from the reviews array
//     const ratings = reviews.flatMap((review) => review.ratings || []);

//     // Convert each rating to a number and calculate the average
//     const total = ratings.reduce((acc, curr) => acc + Number(curr), 0);
//     return total / ratings.length;
//   };

//   render() {
//     const { reviews } = this.props;

//     // Check if reviews prop is defined and is an array
//     if (!Array.isArray(reviews)) {
//       return <div>No reviews data available</div>;
//     }

//     const average = reviews.length > 0 ? this.calculateAverage(reviews) : null;

//     return (
//       <div>
//         <h1>Average Rating: {average !== null ? average.toFixed(2) : 'No ratings yet'}</h1>
//       </div>
//     );
//   }
// }

// export default RatingAverage;

// import React from 'react';

// const commentRating = [10, 20, 30, 40, 50];

// const ratingAverage = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

// console.log(ratingAverage);  // Output: 30

// const RatingAverage = ({ comments }) => {
//   const totalRatings = comments.reduce((total, comment) => {
//     return total + comment.rating;
//   }, 0);

//   const averageRating = totalRatings / comments.length;

//   return (
//     <div>
//       <h3>Average Rating:</h3>
//       <p>{averageRating.toFixed(1)}</p>
//     </div>
//   );
// };

// export default RatingAverage;

// //I feel like this should be using useState?