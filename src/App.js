import React, {Component} from "react"

import Search from './components/search'
import MovieList from './components/movieList'
import Nomination from './components/nomination'

import './App.css';

/**
 * User events possible in the Shoppies app.
 * @typedef {object} OnclickEvent
 * @typedef {object} OnChangeEvent
 */

/**
* The Shoppies app that allows an user to nominate 5 movies.
*/
class App extends Component {
    constructor(props) {
        super(props)

        // Load previous nominations. If this is the first time the user is 
        // using this app, there will be nothing (null) in the local storage. 
        const record = JSON.parse(localStorage.getItem('ShpNomination'));

        this.state = {
            /** The keyword given by the user. */
            keyWord: "",
            /** The array of movie titles nominated by the user. */
            nominations: (record !== null) ? record : [],
        }
    }

    /**
    * Saves the nominations to the local storage. Since loal storage only 
    * stores string, nominations property is stringified.
    */
    saveNominations = () => {
        localStorage.setItem('ShpNomination', JSON.stringify(this.state.nominations));
    }

    /**
    * Displays a banner if there are 5 entries in nominations property.
    */
    displayBanner = () => {
        if (this.state.nominations.length === 5) {
            return (
                <div className="Banner">
                    YOU HAVE SUCCESSFULLY NOMINATED 5 MOVIES IN TOTAL
                </div>
            );
        }
    }

    /**
    * An event handler used to handle on-click events from the "Nominate" button
    * to correctly insert a movie to the nominations property.
    * 
    * @param {OnclickEvent} event - An event object containing useful information.
    * @listens OnclickEvent
    */
    nominateMovie = (event) => {
        this.setState({
            nominations: [...this.state.nominations, event.target.getAttribute("movie")]
        });
    }

    /**
    * An event handler used to handle on-click events from the "Remove" button
    * to correctly remove a movie to the nominations property.
    * 
    * @param {OnclickEvent} event - An event object containing useful information.
    * @listens OnclickEvent
    */
    removeNomination = (event) => {
        const newNominations = [];
        for (let i=0; i < this.state.nominations.length; i++) {
            if (this.state.nominations[i] !== event.target.getAttribute("movie")) {
                newNominations.push(this.state.nominations[i]);
            }
        }
        this.setState({
            nominations: newNominations
        });
    }

    /**
    * An event handler used to handle on-change events from the search bar
    * to correctly update the keyWord prop as the content of the search bar changes.
    * 
    * @param {OnChangeEvent} event - An event object containing useful information.
    * @listens OnChangeEvent
    */
    changeKey = (event) => {
        this.setState({
            keyWord: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                {this.displayBanner()}
                <header className="App-header">
                    <h1>
                        The Shoppies
                    </h1>
                </header>
                <Search eventHandler={this.changeKey}/>
                <div className="Container">
                    <MovieList keyWord={this.state.keyWord} nominations={this.state.nominations}
                                eventHandler={this.nominateMovie}/>
                    <Nomination entry={this.state.nominations} eventHandler={this.removeNomination}
                                saveFunc={this.saveNominations}/>
                </div>
            </div>
        )
    }

}

export default App;
