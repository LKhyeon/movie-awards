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
    }
  	
    fetchData(keyWord) {
    	if (keyWord !== "") {
	    	fetch("http://www.omdbapi.com/?s=" + keyWord + "&apikey=39dd2421")
	        .then(res => {
	            if (res.status === 200) {
	                return res.json()
	            }
	        }).then((res) => {
	        	const newEntries = (typeof res.Search === "undefined") ? [] : res.Search;
	        	if (this.state.entries !== newEntries) {
	        		this.setState({
	        			entries: newEntries
	        		})
	        	}
	        }).catch((error) => {console.log(error)})
    	}
    }

    populateList() {
    	// this.fetchData(this.props.keyWord)
    	const movies = [];
    	for (let i = 0; i < this.state.entries.length; i++) {
    		movies.push(
    			<div key={this.props.keyWord + i.toString()}>
    				{this.state.entries[i].Title} ({this.state.entries[i].Year})
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
						"Results for \"" + this.props.keyWord + "\""} 
				</p>
				<div>
					{this.populateList()}
				</div>
			</div>
		)
    }
}

export default MovieList;