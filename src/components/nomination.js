import "./css/nomination.css"

const Nomination = ({entry, eventHandler}) => {

    const populateList = () => {
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