import React, { useEffect, useState } from 'react';
import { GetMovieReviews } from 'ApiService/ApiService';

export default function Reviews({ filmId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        GetMovieReviews(filmId).then(el => {
            setReviews(el.results);
        });
    }, [filmId]);

    return (
        <>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <h3>{`Author : ${author}`}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <h3>We don't have any reviews for this movie</h3>
            )}
        </>
    );
}