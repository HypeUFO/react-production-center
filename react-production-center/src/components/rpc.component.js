import React from 'react';

import classnames from 'classnames';

import Pot from './knob.component';
import PadGrid from './pad-grid.component';
import Controls from './controls.component';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../actions/index.action'

// import Paper from 'material-ui/Paper';
// import ReactPlayer from 'simple-react-player';

// import Fader from './fader.component';

// import Dropzone from 'react-dropzone';
// import Snackbar from 'material-ui/Snackbar';
// import WaveDisplay from './waveformDisplay.component';

// import Loader from './loader.component';

const styles = {
    rpcContainer: {
        height: '90%',
        width: '70%',
        margin: 0,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        display: 'inline-block',
        padding: 0,
    },
    rpc: {
        // float: 'left',
        height: 525,
        width: '100%',
        margin: 0,
        marginTop: 10,
        textAlign: 'center',
        display: 'inline-block',
        // paddingBottom: 380,
        webKitBorderRadius: 10,
        MozBorderRadius: 10,
        borderRadius: 10,
        backgroundColor: 'black',
        webKitBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
        MozBoxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
        boxShadow: 'inset 0px 2px 0px #a8a8a8, 0px 2px 0px #2a2a2a, 0px 3px 0px #2a2a2a, 0px 4px 0px #2a2a2a, 0px 5px 0px #2a2a2a, 0px 6px 0px #2a2a2a, 0px 7px 0px #2a2a2a, 0px 8px 0px #2a2a2a, 0px 9px 0px #2a2a2a, 0px 10px 0px #2a2a2a, 10px 20px 10px #000',
    },
}


class RPC extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        played: 0,
        loaded: 0,
        duration: 0,
        open: false
    }

    this.onSeekMouseDown = e => {
        this.setState({ seeking: true })
    }

    this.onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }

    this.onSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }

    this.onProgress = state => {
        // Slider should only update if not seeking
        if (!this.state.seeking) {
            // console.log('progress state = ', state);
            this.setState(state)
        }
    }

    this.handleDrop = (acceptedFiles, rejectedFiles) => {

        const file = acceptedFiles[0];

        const upload = {
            url: file.preview,
            name: file.name,
            title: file.name,
            cover: "../dj-react/assets/images/djR-vinyl-label.jpg",
            format: file.type,
            size: file.size,
        }
        this.props.selectSong(upload, this.props.deckNum);
    }
}

    render() {

        // let startStopClass = classnames('startStopButton2', {'active': this.props.play});


        return (
            <div className={this.props.className} style={styles.rpcContainer}>
                    <div className="rpc"
                        style={styles.rpc}
                        children={
                            <div>
                                <div id="lcd-screen" className="pad-grid col-xs-7 col-xs-offset-1" 
                                style={{
                                    //width: 200,
                                    height: 100,
                                    marginTop: 50,
                                    backgroundColor: '#22bcd4', display: 'inline-block'}} >Edit Screen Here</div>
                                <Pot
                                    title="Tempo"
                                    defaultValue={120}
                                    //value={this.props.lpCutoff}
                                    //onChange={(value) => {this.props.onLpFilterCutoffChange(value, this.props.deckNum)}}
                                    min={30}
                                    max={200}
                                    angleOffset={225}
                                    angleArc={270}
                                    />
                                    <Pot
                                    title="Swing"
                                    defaultValue={50}
                                    //value={this.props.lpCutoff}
                                    //onChange={(value) => {this.props.onLpFilterCutoffChange(value, this.props.deckNum)}}
                                    min={0}
                                    max={100}
                                    angleOffset={225}
                                    angleArc={270}
                                    />
                                <Pot
                                    title="LP"
                                    defaultValue={22000}
                                    //value={this.props.lpCutoff}
                                    //onChange={(value) => {this.props.onLpFilterCutoffChange(value, this.props.deckNum)}}
                                    min={20}
                                    max={22000}
                                    angleOffset={225}
                                    angleArc={270}
                                    />
                                    <Pot
                                    title="HP"
                                    defaultValue={20}
                                    //value={this.props.lpCutoff}
                                    //onChange={(value) => {this.props.onLpFilterCutoffChange(value, this.props.deckNum)}}
                                    min={20}
                                    max={22000}
                                    angleOffset={225}
                                    angleArc={270}
                                    />
                                {/*<input
                                    type='range' min={0} max={1} step='any'
                                    //className="seek"
                                    //value={played}
                                    //onMouseDown={this.onSeekMouseDown}
                                    //onChange={this.onSeekChange}
                                    //onMouseUp={this.onSeekMouseUp}
                                />*/}
                                <PadGrid />
                                <Controls />
                            </div>} >
                    </div>
            </div>

        )
    }
}

// function mapStateToProps(state) {
//     return {
//         // buffering: state.decksReducer.deck1.buffering,
//         // song: state.decksReducer.deck1.activeSong,
//         // play: state.decksReducer.deck1.play,
//         // speed: state.decksReducer.deck1.speed,
//         // volume: state.decksReducer.deck1.volume,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         handleBufferStart: actions.handleBufferStart,
//         handleBufferEnd: actions.handleBufferEnd,
//         // handlePlaybackSpeed: actions.handlePlaybackSpeed,
//         // startStopSong: actions.startStopSong,
//         // handleVolumeChange: actions.handleVolumeChange,
//         },
//         dispatch);

// }


// export default connect(mapStateToProps, mapDispatchToProps)(Turntable);

export default RPC;

