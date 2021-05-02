import "./css/search.css"

const Search = ({eventHandler}) => {
	return (
		<div className="Search">
			<p> MOVIE TITLE </p>
			<input 
				placeholder={"Search a movie"}
				onKeyPress={eventHandler} />
		</div>
	)
}

export default Search;