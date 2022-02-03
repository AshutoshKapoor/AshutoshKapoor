import React from "react";
import '../index.css'

class MovieCard extends React.Component{
    render() {
        const {movie} = this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="Movie Poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        <button className="favourite-btn">Favorite</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;