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
                    <MovieList keyWord={this.state.keyWord}/>
                    <Nomination entry={this.state.nominations}/>
                </div>
            </div>
        )
    }

}

export default App;
