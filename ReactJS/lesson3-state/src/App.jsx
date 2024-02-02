import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.state={
            count:1,
            title:"Xiaomi 14 ultra",
            price:2300
        }
    }

    increment(){
        this.setState({
            count:this.state.count+1,
        })
    }
    
    render() {
        return (
            <div className='container my-5'>
               <h2>{this.state.title}</h2>
               <h3>{this.state.price * this.state.count}$</h3>
                <button className='btn btn-danger' onClick={()=>{
                   if (this.state.count>1) {
                    this.setState({
                        count:this.state.count-1
                    })
                   }
                }}>-1</button>
                <span className='mx-3'><b>{this.state.count}</b></span>
                <button className='btn btn-success' onClick={this.increment}>+1</button>
            </div>


        )
    }
}

export default App