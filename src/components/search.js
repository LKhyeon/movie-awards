import "./css/search.css"

const Search = ({eventHandler}) => {
    return (
        <div className="Search">
            <p> SEARCH MOVIE TITLES TO NOMINATE </p>
            <input
                placeholder={"Type here for the movie titles"}
                onChange={eventHandler} />
        </div>
    )
}

export default Search;