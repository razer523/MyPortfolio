import React, { Component } from 'react'
import primeCode from './primeCode.png'



export default class CoffeeCodePrime extends Component {
    constructor(props) {
        super(props)
        this.state= {
            num: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.isPrime = this.isPrime.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            num: event.target.value
        });
        console.log(this.state);
        event.preventDefault();
    }

    isPrime(event){
        event.preventDefault();
        let num=this.state.num;
        if(isNaN(num)){
                this.setState({prime: "Please input a number."});
                return;
            }
        else if(num <= 1){
                this.setState({prime: "This integer is not a prime number."});
                return;
                }    
        else if(num === 2 ){
            this.setState({prime: "This integer is a prime number."});
            return;
        }
        for(let i=2; i< num; i++){
            if(num % i === 0){ 
                this.setState({prime: "This integer is not a prime number."});
                return;
                }

            else{
                this.setState({prime: "This integer is a prime number."});
                return;
                }
            }
    }


    render() {
        return (
            <div>
                <b>Challenge: given an integer, determine if it is a prime number or not. <br/>
Prime number: any number only divisible by 1 and itself.</b> 

                <form onSubmit={this.isPrime}>
                    <label>
                    Integer:
                    <input type="text" value={this.state.num} onChange={this.handleChange}/>
                    </label>
                    
                    <input type="submit" value="Submit" />
                </form>
                <span><b>{this.state.prime}</b></span>
                <br/>
                <h2>Code Used:</h2>
                <img src={primeCode} alt="Code"></img>
            </div>
        )
    }
}