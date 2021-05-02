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
    }

    nominateMovie = (event) => {
        this.setState({
            nominations: [...this.state.nominations, event.target.getAttribute("movie")]
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
                    <MovieList keyWord={this.state.keyWord} eventHandler={this.nominateMovie}/>
                    <Nomination entry={this.state.nominations}/>
                </div>
            </div>
        )
    }

}

export default App;
