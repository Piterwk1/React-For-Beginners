import React, { Component } from 'react'
import Header from './Header'

class App extends Component {
    
    render() { 
        return ( 
            <div className="catch-of-the-day">
                <div className="menu">
                    <Headers/>
                </div>
                <Inventory/>
                <Order/>
                <p>heyyyy</p>
            </div>
         );
    }
}
 
export default App;