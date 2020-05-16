import React from "react";
import { connect } from 'react-redux';
import Option from "./Option";
import  {requestAllManele,  requestAllArtists, requestArtist, clickArtist, changeManea} from '../actions';
import InfoItem from '../components/InfoItem';

const mapStateToProps = state => {
    return {
        allManele: state.requestAllManeleR.allManele,
        // allArtists: state.requestAllArtistsR.allArtists,
        artist: state.requestArtistR.artist,
        clickedArtist: state.clickArtistR.artistClicked,
        displayInfoManele: state.requestAllManeleR.displayManele,
        allArtists: state.requestAllArtistsR.allArtists,
        maneaInput: state.changeInputManea.maneaTitle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestAllManele: () => dispatch(requestAllManele()),
        onRequestAllArtists: () => dispatch(requestAllArtists()),
        onRequestArtist: (artist) => dispatch(requestArtist(artist)),
        onClickArtist: (event) => dispatch(clickArtist(event.target.textContent)),
        onChangeManea: (event) => dispatch(changeManea(event.target.value))
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
        this.props.onRequestAllArtists();
    }

    render() {
        console.log(this.props.clickedArtist);
        const {allManele, onRequestAllManele, maneaInput, allArtists} = this.props;
        console.log(maneaInput);
        console.log(this.props.artist);

        // all Manele
        return (
            <div style={{border: "1px solid blue", height: "500px"}}>
                <Option
                    instruction1="Afiseaza toata lista de manele, manelistule!" 
                    button={true}
                    message="Afiseaza"
                    click2={onRequestAllManele}
                    /> 
                <Option
                    instruction1="Cauta un artist!" 
                    dropdown={true}
                    names={allArtists.map(artist => artist.name)}
                    ids={allArtists.map(artist => artist.id )}
                    click={this.props.onClickArtist}
                    button={true}
                    message="Cauta"
                    click2={() => this.props.onRequestArtist(this.props.clickedArtist)}
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
                <Option 
                    change={this.props.onChangeManea}
                    instruction1="Cauta o manea"
                />
                 
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManeleSection);