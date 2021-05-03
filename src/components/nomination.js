import "./css/nomination.css"

/**
 * Callback functions possible in creating a nominations section.
 * @callback saveCallback
 * @callback eventHandler
 */

/**
* Creates a section of the Shoppies app that displays the nominated movies with
* an option to remove any of them.
* 
* @param {object} props - A properties required to create nomination sections.
* @param {Array} props.entry - An array of nominated movies.
* @param {eventHandler} props.eventHandler - Event handler that removes a movie from nominations.
* @param {saveCallback} props.saveFunc - Saves nominated movies in the local storage. 
*/
const Nomination = ({entry, eventHandler, saveFunc}) => {

    /**
    * Creates an array of HTML for each nominated movies in the entry parameter 
    * and return it. If there wasn't any movies in the entry, an empty array will
    * be returned.
    * 
    * saveFunc will be called since we have the most-recent nominations information. 
    */
    const populateList = () => {
        saveFunc();

        const nominations = [];
        for (let i = 0; i < entry.length; i++) {
            nominations.push(
                <div className="entry" key={entry[i] + i.toString()}>
                    <button movie={entry[i]} className="Remove" onClick={eventHandler}>
                        Remove
                    </button>
                    {entry[i]}
                </div>
            )
        }
        return nominations;
    }

    return (
        <div className="Nomination">
            <p className="KeyWord"> 
                Nominations
            </p>
            <div>
                {populateList()}
            </div>
        </div>
    )
}

export default Nomination;