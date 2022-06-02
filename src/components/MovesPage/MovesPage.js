import React, { useState, useEffect } from 'react';
import './MovesPage.module.css';
import { SearchMovies } from 'ApiService/ApiService';
import {
    Link,
    useLocation,
    useSearchParams,
} from 'react-router-dom';
import slugify from 'slugify';

export default function MovesPage() {
    const [film, setFilm] = useState([]);
    const [filmName, setFilmName] = useState('');
    const [inputName, setInputName] = useState('');

    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('query')) {
            setFilmName(searchParams.get('query'));
        }
    }, [searchParams]);

    useEffect(() => {
        if (!filmName) {
            return;
        }
        const slugName = slugify(filmName, { lower: true });
        SearchMovies(filmName).then(e => {
            setFilm(e.results);
            setSearchParams({ query: slugName });
        });
    }, [filmName, setSearchParams]);

    function handleChange(e) {
        setInputName(e.currentTarget.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFilmName(inputName);

    }

    return (
        <>
            <h2> Films</h2>
            <form onSubmit={handleSubmit}>
                <label className="form__label">
                    <input
                        onChange={handleChange}
                        type="text"
                        value={inputName}
                        required
                    />
                </label>
                <button type="submit" name="button">
                    Add contact
                </button>
            </form>

            {film && (
                <ul>
                    {film.map(({ id, title, name }) => (
                        <li key={id}>
                            <Link
                                to={`${id}`}
                                state={{
                                    from: location,
                                    label: 'Go back Films',
                                }}
                                className="move_link"
                            >
                                <h3>{title ? title : name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}