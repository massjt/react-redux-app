import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './rebots';



class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        } 
    }

    onSearchChange = (event) => {
        //console.log(event.target.value)
        this.setState({ searchfield: event.target.value })
        

    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1 className="f1">Robo Friends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App