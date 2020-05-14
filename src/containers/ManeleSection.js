import React from "react";
import { connect } from 'react-redux';
import Option from "./Option";
import ManeleList from "../components/ManeleList";
import  {requestManeleByArtist, changeInput} from '../actions';

const mapStateToProps = state => {
    return {
        // artists
        artistRequest: state.requestManeleByArtists.manele,
        isPending: state.requestManeleByArtists.isPending,
        artist: state.checkInputArtist.artist
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestManeleByArtists: (artist) => dispatch(requestManeleByArtist(artist)),
        onChangeInput: (event) => dispatch(changeInput(event.target.value))
    }
}

class ManeleSection extends React.Component {

    // componentDidMount() {
    //     this.props.onRequestManeleByArtists();
    // }

    render() {
        const {artist, onChangeInput, onRequestManeleByArtists, artistRequest} = this.props;
        console.log(artist);
        console.log(artistRequest);
        
        return (
            <div style={{border: "1px solid blue", height: "500px"}}>
                <Option 
                    instructions="Cauta artistul de muzica clasica:"
                    instruction1="artist"
                    change={onChangeInput}
                    clicked={() => onRequestManeleByArtists(artist)}
                />
                <Option 
                    instructions="Cauta artistul dupa gen:"
                    instruction1="gen"
                />
                {artistRequest.name ? <ManeleList artist={artistRequest} /> : null}


            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManeleSection);