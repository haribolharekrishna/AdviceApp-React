import React from 'react';
import './App.css';
import axios from 'axios'; //to make a get request to a certain api



class App extends React.Component{

    state={
        advice:''
    };
    //lifecycle method
    componentDidMount()
    {
       this.fetchAdvice();
    }
    //method of the class App
    fetchAdvice=()=>{

        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>
        {
            const {advice} =response.data.slip;
            this.setState({advice});
            console.log(advice);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">
                        {this.state.advice}
                    </h1>
                    <button className="button"  onClick={this.fetchAdvice}>
                        <span>Gimme advice!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;