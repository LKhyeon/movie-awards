import React, {Component} from "react"

import "./css/movieList.css"

class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            entries: [],
        }
        this.fetchData = this.fetchData.bind(this);
        this.populateList = this.populateList.bind(this);
        this.compareArrays = this.compareArrays.bind(this);
    }

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

    fetchData(keyWord) {
        if (keyWord !== "") {
            fetch("https://www.omdbapi.com/?s=" + keyWord + "&apikey=39dd2421")
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            }).then((res) => {
                const newEntries = (typeof res.Search !== "undefined") ? res.Search : [];
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

    populateList() {
        this.fetchData(this.props.keyWord)
        const movies = [];
        for (let i = 0; i < this.state.entries.length; i++) {
            const info = `${this.state.entries[i].Title} (${this.state.entries[i].Year})`
            movies.push(
                <div key={this.props.keyWord + i.toString()}>
                    {info}
                    <button movie={info} className="Nominate" onClick={this.props.eventHandler}
                        disabled={this.props.nominations.length === 5 
                                    || this.props.nominations.includes(info)}>
                        Nominate
                    </button>
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