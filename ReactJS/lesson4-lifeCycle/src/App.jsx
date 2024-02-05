import React, { Component } from 'react'


class List extends Component{
    componentWillUnmount(){
        alert("im deleted bye man")
    }

    render(){
        return(
            <h1>Hello</h1>
        )
    }
}



class App extends Component {

    
    constructor(){
        super();
        this.state={
            display:true,
            // text:"Asus"
        }
    }


    // componentDidMount(){
    //  this.setState({
    //     color:"green"
    //  })   
    // }

    // componentDidUpdate(){
    //     document.querySelector('h1').style.color = 'blue'
    // }
    
 
    
    
  render() {
    let info;
    if (this.state.display) {
        info = <List />
    }
    return (
      <div>
        {info}
        <button onClick={()=>{
            this.setState({
                display:false
            })
        }} >delete</button>
        
        {/* <h1 style={{"color":`${this.state.color}`}}>componentDidMount</h1> */}

        {/* <h3>{this.state.text}</h3>
        <button onClick={()=>{
            this.setState({
                text:"MSI"
            })
        }}>change</button> */}
      </div>
    )
  }
}

export default App