import React from 'react'

export default class YouTubeDebugger extends React.Component{
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState((prevState)=>{
            return {
                settings: {
                    ...prevState.settings,
                        bitrate: 12
                }
            }
        })
    }

    // consoleMultipleLogs = () => {
    //     console.log(this.state)
    //     console.log(this.state.settings)
    //     console.log(this.state.settings.bitrate)
    // }

    changeResolution = () => {
        this.setState((prevState)=>{
            return{
                settings: {
                    ...prevState.settings,
                        video: {
                            resolution: '720p'
                        }
                }
            }
        })
    } 


    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>Bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>Resolution</button>
            </div>
        )
    }
}
