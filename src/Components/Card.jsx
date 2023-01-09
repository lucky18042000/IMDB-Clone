import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Card({movie}) {
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false);
        }, 1500);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="cards">
                    Loading
                </div>
            ) : (
                <Link
                    to={`/movie/${movie.id}`}
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <div className="cards">
                        <img
                            className="cards__img"
                            src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""
                                }`}
                        />
                        <div className="cards__overlay">
                            <div className="card__title">
                                {movie ? movie.original_title : ""}
                            </div>
                            <div className="card__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="card__rating">
                                    {movie ? movie.vote_average : ""}
                                    <i className="fas fa-star" />
                                </span>
                            </div>
                            <div className="card__description">
                                {movie ? movie.overview.slice(0, 118) + "..." : ""}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}

export default Card;