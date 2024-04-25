import React from "react"

type RandomNumberProps = {
    max:number
}
type RandomState = {
    randomNumber: number
}

class RandomNumber extends React.Component<RandomNumberProps, RandomState>{
    state = {
        randomNumber: 0,
    };

    componentDidMount(){
        const newNumber = this.generateRandomNumber();
        this.setState({randomNumber: newNumber})
    }

    componentDidUpdate() {
        const {randomNumber} = this.state;

        document.title = `Numero ${randomNumber}`;

    }

    componentWillUnmount() {
        document.title = 'Numero oculto';
    }
    generateRandomNumber = () => {
        const {max} = this.props ;
        return Math.floor(Math.random() * max) + 1;
    }

    
    handleClick = () => {
        const newNumber = this.generateRandomNumber();

        this.setState({
            randomNumber: newNumber,
        });
    }
    render() {
        const {randomNumber} = this.state;

        return(
            <>
            <h1>{randomNumber}</h1>
            <button onClick={this.handleClick}>
                Generate
            </button>
            </>
        )
    }
}

export default RandomNumber
 