import React from 'react';

import classnames from 'classnames';


import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    rBtn: {
    margin: 0,
    minWidth: 20,
    width: '40%',
    //minHeight: 65,
    border: '2px solid black',
    margin: '2%'
},
    misc: {
        minHeight: 40
    }
 }

class Controls extends React.Component {

    render() {

        // let startStopClass = classnames('startStopButton2', {'active': this.props.play});


        return (
            <div className="pad-grid col-xs-3" style={{backgroundColor: 'white', marginTop: 30}}>
                <div style={{height: 243}}></div>
                <RaisedButton label="Play" rippleStyle={styles.misc} buttonStyle={styles.misc} style={styles.rBtn}    labelStyle={{fontSize: '0.5em'}}/>
                <RaisedButton label="Stop" rippleStyle={styles.misc} buttonStyle={styles.misc} style={styles.rBtn}          labelStyle={{fontSize: '0.5em'}}/>
                {/*<RaisedButton label="<<" rippleStyle={styles.misc} buttonStyle={styles.misc} style={styles.rBtn}            labelStyle={{fontSize: '0.5em'}}/>
                <RaisedButton label=">>" rippleStyle={styles.misc} buttonStyle={styles.misc} style={styles.rBtn}            labelStyle={{fontSize: '0.5em'}}/>*/}
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

export default Controls;

