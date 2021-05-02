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
            movieList: [],
            nominations: [],
        }
        this.triggerSearch = this.triggerSearch.bind(this);
    }

    triggerSearch = (event) => {
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
                <Search eventHandler={this.triggerSearch}/>
                <div className="Container">
                    <MovieList keyWord={this.state.keyWord} entry={this.state.movieList}/>
                    <Nomination entry={this.state.nominations}/>
                </div>
            </div>
        )
    }

}

export default App;
