/* Ejemplo de componente tipo clase que dispone de klos metodos de  ciclo de vida*/

import React, {Component} from 'react'
import PropTypes from 'prop-types'

class lifeCycle extends Component {

    constructor(props){
        super(props)
        console.log('Constructor: Cuando se instacia el componente');
    }

    componentWillMount(){
        console.log('WillMount: antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DidMount: despues del montaje del componente, antes de pintarlo');
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('ShoulComponentState: Controla si el componente debe o no actualizarse');
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdatet: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('DidUpdatet: Justo despues de actualizarse');
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer');
    }
    

    render(){

        return (
            <div>

            </div>
        )
    }




}
