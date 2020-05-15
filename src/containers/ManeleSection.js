import React from "react";
import { connect } from 'react-redux';
import Option from "./Option";
import  {requestAllManele,  requestAllArtists, requestArtist, clickArtist} from '../actions';
import InfoItem from '../components/InfoItem';

const mapStateToProps = state => {
    return {
        allManele: state.requestAllManeleR.allManele,
        // allArtists: state.requestAllArtistsR.allArtists,
        artist: state.requestArtistR.artist,
        clickedArtist: state.clickArtistR.artistClicked,
        displayInfoManele: state.requestAllManeleR.displayManele
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestAllManele: () => dispatch(requestAllManele()),
        onRequestAllArtists: () => dispatch(requestAllArtists()),
        onRequestArtist: (artist) => dispatch(requestArtist('salam')),
        onClickArtist: (event) => dispatch(clickArtist(event.target.text())) // aici trebuie sa ma uit mai bine cum se face dar ceva de genul asta
    }
}

class ManeleSection extends React.Component {
    constructor() {
        super()
        this.state = {
            displayInfo: false
        }
    }

    componentDidMount() {
        // this.props.onRequestAllArtists();
    }



    render() {
        const {allManele, onRequestAllManele, artist} = this.props;
        const maneleTitles = allManele.map(manea => manea.title);
        console.log(maneleTitles);
        // console.log(allArtists);
        console.log(this.props.displayInfoManele)
        console.log(artist);

        // all Manele
        return (
            <div style={{border: "1px solid blue", height: "500px"}}>
                <Option
                    instruction1="Afiseaza toata lista de manele, manelistule!" 
                    button={true}
                    message="Afiseaza"
                    click={onRequestAllManele}
                    /> 
                <Option
                    instruction1="Cauta un artist!" 
                    dropdown={true}
                    // click={this.props.onRequestArtist}
                    /> 
                {this.props.displayInfoManele ? 
                    allManele.map(manea => <InfoItem
                     title={manea.title}
                     gendre={manea.gendre}
                     link={manea.link}
                     artist={manea.artist}
                     key={manea.id} />)
                      : null}
                 
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManeleSection);