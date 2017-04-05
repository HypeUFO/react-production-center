import React from 'react';

import classnames from 'classnames';


import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';

const styles = {
    pad: {
    margin: 0,
    minWidth: 20,
    width: '25%',
    display: 'inline-block',
},
    dropzone: {
        width: '100%',
    },
    rBtn: {
    margin: 0,
    minWidth: 20,
    width: '100%',
    border: '2px solid black'
},
    misc: {
        minHeight: 70
    }
 }


class PadGrid extends React.Component {
    constructor(props) {
        super(props);

    this.handleDrop = (acceptedFiles, rejectedFiles) => {

        const file = acceptedFiles[0];

        const upload = {
            url: file.preview,
            name: file.name,
            // title: file.name,
            // cover: "../dj-react/assets/images/djR-vinyl-label.jpg",
            format: file.type,
            size: file.size,
        }
        // this.props.selectSong(upload, this.props.deckNum);
        console.log(file.name, 'has been loaded');
    }
}

    render() {

        // let startStopClass = classnames('startStopButton2', {'active': this.props.play});


        return (
            <div style={styles.pad}>
                <Dropzone style={styles.dropzone} disableClick={true} onDrop={this.handleDrop}>
                    <RaisedButton label={this.props.label} rippleStyle={styles.misc} buttonStyle={styles.misc} style={styles.rBtn} labelStyle={{fontSize: '0.75em'}}/>
                </Dropzone>
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

