import "./css/movieList.css"

const MovieList = ({keyWord, entries}) => {
	return (
		<div className="MovieList">
			<p className="KeyWord"> 
				{keyWord === "" ? "Please type a movie title" : "Results for \"" + keyWord + "\""} 
			</p>
		</div>
	)
}

export default MovieList;