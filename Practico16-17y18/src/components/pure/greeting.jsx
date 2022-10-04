import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = { edad : 29 }

    }

    render() {

        return (

            <div>
            <h1> Hola  {this.props.name} desde componente funcional!</h1>
            <h2> Tu edad es de: {this.state.edad} </h2>
    
            <div>
                <button onClick={this.birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    
        );
    }

    birthday = () => {

        this.setState((prevState) => (
            {
                edad: prevState.edad + 1
            }
        ))
    }
}


Greeting.propTypes = {

    name: PropTypes.string,

};


export default Greeting;
