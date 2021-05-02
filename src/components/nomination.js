import "./css/nomination.css"

const Nomination = ({entry}) => {

	const populateList = () => {
        const nominations = [];
        for (let i = 0; i < entry.length; i++) {
            nominations.push(
                <div key={entry[i] + i.toString()}>
                    {entry[i]}
                    <button movie={entry[i]} className="Remove">
                        Remove
                    </button>
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