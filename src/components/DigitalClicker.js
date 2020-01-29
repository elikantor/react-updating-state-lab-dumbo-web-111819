import React from 'react'

export default class DigitalClicker extends React.Component{

    state = {
        timesClicked: 0
    }

    countClick = () => {
        this.setState((prevState)=> {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    }


    render(){
        return(
            <button onClick={this.countClick}>{this.state.timesClicked}</button>
        )
    }
}
