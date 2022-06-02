import { GetTrending } from 'ApiService/ApiService';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HomePage() {
    const [films, setFilms] = useState([]);

    const location = useLocation();

    useEffect(() => {
        GetTrending().then(e => {
            setFilms(e.results);
        });
        window.localStorage.removeItem('films_in_search');
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            {films && (
                <ul>
                    {films.map(({ id, title, name }) => (
                        <li key={id}>
                            <Link
                                to={`/films/${id}`}
                                state={{ from: location, label: 'Go back Home' }}
                            >
                                {title ? title : name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}