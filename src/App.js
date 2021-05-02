import React, {Component} from "react"

import Search from './components/search'
import MovieList from './components/movieList'
import Nomination from './components/nomination'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyWord: "",
            nominations: [],
        }
        this.changeKey = this.changeKey.bind(this);
        this.nominateMovie = this.nominateMovie.bind(this);
        this.removeNomination = this.removeNomination.bind(this);
    }

    nominateMovie = (event) => {
        this.setState({
            nominations: [...this.state.nominations, event.target.getAttribute("movie")]
        });
    }

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

    changeKey = (event) => {
        this.setState({
            keyWord: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        The Shoppies
                    </h1>
                </header>
                <Search eventHandler={this.changeKey}/>
                <div className="Container">
                    <MovieList keyWord={this.state.keyWord} nominations={this.state.nominations}
                                eventHandler={this.nominateMovie}/>
                    <Nomination entry={this.state.nominations} eventHandler={this.removeNomination}/>
                </div>
            </div>
        )
    }

}

export default App;
