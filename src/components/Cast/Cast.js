import React, { useEffect, useState } from 'react';
import './Cast.module.css';
import { GetMovieCast } from 'ApiService/ApiService';
import ImagTemplate from 'components/ImagTemplate';

export default function Cast({ filmId }) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        GetMovieCast(filmId).then(el => setCast(el.cast));
    }, [filmId]);

    return (
        <>
            {cast &&
                (cast.length > 0 ? (
                    <ul>
                        {cast.map(
                            ({ id, name, original_name, profile_path, character }) => (
                                <li key={id} className="cast_list">
                                    <ImagTemplate
                                        tags={original_name}
                                        path={profile_path}
                                        className={'cast_move'}
                                    />
                                    <h4>{name}</h4>
                                    <p>{character}</p>
                                </li>
                            )
                        )}
                    </ul>
                ) : (
                    <h3> Sorry . Not find cast for this film</h3>
                ))}
        </>
    );
}