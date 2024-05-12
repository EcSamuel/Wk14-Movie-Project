// SAVE THIS FOR THE END
// It needs to be an input where people can leave comments and provide ratings. Should create a new iteration of the Review.js, maybe as a prop?
import React, {useState} from 'react';

const ReviewForm = ({setReviews, reviews}) => {
    const [userId, setUserId] = useState('');
    const [stars, setStars] = useState('');
    const [comment, setComment] =useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserId('');
        setStars('');
        setComment('');
        const newReview = {
            userId,
            stars,
            comment,
        }
        setReviews([
            ...reviews,
            newReview,
        ])
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userId">UserID:</label>
                <input
                    type="text"
                    id="userId"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFot="comment">Leave Your Movie Review</label>
                <textarea
                id="comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="stars">Rating</label>
                <input
                type="number"
                id="stars"
                min="1"
                max="5"
                value={stars}
                onChange={(event) => setStars(event.target.value)}
                required
                />
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
        // SetState will need to be called to make sure that you're getting it 'appended' tothe array.

        // RevForm will need access to Review because of a State deal. You'll add to the list of reviews as you go. It'll need the state of all the reviews 

        // Need fields for: User ID, Number of Stars, What Movie its being assigned to (and that might be solved by calling ReviewForm under the movie card itself?)
        // User ID

        // Reviewer's Rating in Stars

        // Reviewer's Feedback