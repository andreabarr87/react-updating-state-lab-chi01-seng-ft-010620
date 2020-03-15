import React from 'react'

class YouTubeDebugger extends React.Component {
	constructor() {
		super()
		this.state = {
			errors: [],
			user: null,
			settings: {
			  bitrate: 8,
			  video: {
				resolution: '1080p'
			  }
			}
		}
	}


	handleBitClick = () => {
		this.setState(previousState => {
			return {
				settings: {
					...this.state.settings,
					// bitrate: previousState.settings.bitrate + 1
					bitrate: 12
				}
			}
		})
		console.log(this.state.settings.bitrate)
	}


	handleResClick = () => {
		this.setState(previousState => {
			return {
				settings: {
					...this.state.settings,
					video: {
						resolution: '720p' 
					}
				}
			}
		})
		console.log(this.state.settings.resolution)
	}

	render() {
		return(
			<div>
				<button className="bitrate" onClick={this.handleBitClick}>change bitrate</button>
				<button className="resolution" onClick={this.handleResClick}>change resolution</button>
			</div>
		) 		
	}


}

export default YouTubeDebugger