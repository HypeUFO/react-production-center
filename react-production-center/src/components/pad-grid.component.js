import React from 'react';

import classnames from 'classnames';


import RaisedButton from 'material-ui/RaisedButton';
import Pad from './pad.component';

const styles = {
    rBtn: {
    margin: 0,
    minWidth: 20,
    width: '25%',
    //minHeight: 65,
    border: '2px solid black'
},
    misc: {
        minHeight: 70
    }
 }


class PadGrid extends React.Component {
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
            <div className="pad-grid col-xs-7 col-xs-offset-1" style={{backgroundColor: 'white', marginTop: 35}}>
                <div className="row">
                    {/*<RaisedButton label="Pad 1" rippleStyle={styles.misc} buttonStyle={styles.misc} style={styles.rBtn} labelStyle={{fontSize: '0.5em'}}/>*/}
                    <Pad label="Pad 13" />
                    <Pad label="Pad 14" />
                    <Pad label="Pad 15" />
                    <Pad label="Pad 16" />
                </div>
                <div className="row">
                    <Pad label="Pad 9" />
                    <Pad label="Pad 10" />
                    <Pad label="Pad 11" />
                    <Pad label="Pad 12" />
                </div>
                <div className="row">
                    <Pad label="Pad 5" />
                    <Pad label="Pad 6" />
                    <Pad label="Pad 7" />
                    <Pad label="Pad 8" />
                </div>
                <div className="row">
                    <Pad label="Pad 1" />
                    <Pad label="Pad 2" />
                    <Pad label="Pad 3" />
                    <Pad label="Pad 4" />
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

export default PadGrid;

