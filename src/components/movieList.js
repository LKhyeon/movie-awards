import React, {Component} from "react"
import "./css/movieList.css"

/**
* Creates a section of the Shoppies app that displays the search result with
* an option to nominate any of the entries.
*/
class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            /** An array holding the search result. */
            entries: [],
        }
        this.compareArrays = this.compareArrays.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.populateList = this.populateList.bind(this);
    }

    /**
    * Compares two arrays holding movie information. Two arrays are the same if and only
    * if their lengths are the same and if the elements within the array equals each other
    * one-to-one.
    * 
    * @param {Array} arr1 - The first array of movies.
    * @param {Array} arr2 - The first array of movies.
    * @returns {boolean} True if the length and the elements in the arrays match each other.
    */
    compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        } else {
            for (let i=0; i < arr1.length; i++) {
                for (let j=0; j < arr2.length; j++) {
                    if (arr1[i].Title !== arr2[i].Title) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    /**
    * Send request to the OMDB API to obtain the list of movies based on the
    * keyword the user has typed in the search bar. Then change entries prop to
    * the list of movies from OMDB. 
    *
    * If there wasn't any results from OMDB, the entries prop will be set to an
    * empty array.
    * 
    * @param {string} keyword - A keyword typed by the user.
    */
    fetchData(keyWord) {
        if (keyWord !== "") {
            fetch("https://www.omdbapi.com/?s=" + keyWord + "&apikey=39dd2421")
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            }).then((res) => {
                const newEntries = (typeof res.Search !== "undefined") ? res.Search : [];

                // Only update the entries prop if new one is different.
                // This is important because updating the property will trigger re-rendering,
                // which will call populateList(), which calls fetchData() once again.
                // In short, without this check, unwanted recursion is created.
                if (!this.compareArrays(this.state.entries, newEntries)) {
                    this.setState({
                        entries: newEntries
                    })
                }
            }).catch((error) => {console.log(error)})
        } else if (this.state.entries.length > 0) {
            this.setState({
                entries: []
            })
        }
    }

    /**
    * Creates an array of HTML for each movies returned by OMDB.
    * If there wasn't any results from OMDB, an empty array will be returned.
    */
    populateList() {
        this.fetchData(this.props.keyWord)
        const movies = [];
        for (let i = 0; i < this.state.entries.length; i++) {
            const info = `${this.state.entries[i].Title} (${this.state.entries[i].Year})`;

            const limitReached = this.props.nominations.length === 5;
            const selected = this.props.nominations.includes(info);
            movies.push(
                <div className="entry" key={this.props.keyWord + i.toString()}>
                    <button movie={info} className="Nominate" onClick={this.props.eventHandler}
                        disabled={limitReached || selected}>
                        {(limitReached)? "Disabled" : 
                            ((selected) ? "Nominated" : "Nominate")}
                    </button>
                    {info}
                </div>
            )
        }
        return movies;
    }

    render() {
        return (
            <div className="MovieList">
                <p className="KeyWord">
                    {this.props.keyWord === "" ?
                        "Please type a movie title" :
                        `Results for "${this.props.keyWord}"`}
                </p>
                <div>
                    {this.populateList()}
                </div>
            </div>
        )
    }
}

export default MovieList;