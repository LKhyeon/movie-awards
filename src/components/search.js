import "./css/search.css"

/**
 * Callback functions possible in creating a search bar.
 * @callback eventHandler
 */

/**
* Creates a section of the Shoppies app that allows the user to search for a movie.
* 
* @param {object} props - A properties required to create nomination sections.
* @param {eventHandler} props.eventHandler - Event handler that changes the keyword.
*/
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