import React from "react";
import { connect } from 'react-redux';
import Option from "./Option";
import  {requestAllManele,  requestAllArtists, requestArtist, clickArtist, changeManea, requestManea} from '../actions';
import InfoItem from '../components/InfoItem';

const mapStateToProps = state => {
    return {
        allManele: state.requestAllManeleR.allManele,
        // allArtists: state.requestAllArtistsR.allArtists,
        artist: state.requestArtistR.artist,
        clickedArtist: state.clickArtistR.artistClicked,
        displayInfoManele: state.requestAllManeleR.displayManele,
        allArtists: state.requestAllArtistsR.allArtists,
        maneaInput: state.changeInputManea.maneaTitle,
        manea: state.requestManeaR.manea
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestAllManele: () => dispatch(requestAllManele()),
        onRequestAllArtists: () => dispatch(requestAllArtists()),
        onRequestArtist: (artist) => dispatch(requestArtist(artist)),
        onClickArtist: (event) => dispatch(clickArtist(event.target.textContent)),
        onChangeManea: (event) => dispatch(changeManea(event.target.value)),
        onRequestManea: (manea) => dispatch(requestManea(manea))
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
        // console.log(this.props.clickedArtist);
        const {allManele, manea, onRequestAllManele, maneaInput, allArtists, artist} = this.props;
        // console.log(maneaInput);
        // console.log(this.props.artist);

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
                
                <Option 
                    change={this.props.onChangeManea}
                    instruction1="Cauta o manea"
                    button={true}
                    message="Cauta!"
                    click2={() => this.props.onRequestManea(this.props.maneaInput)}
                />
                {this.props.displayInfoManele ? 
                    allManele.map(manea => <InfoItem
                     title={manea.title}
                     genre={manea.genre}
                     link={manea.link}
                     artist={manea.artist}
                     key={manea.id} />)
                      : null}
                
                <InfoItem 
                    title={artist.name}
                    age={artist.age}
                    biography={artist.biography}
                 />
                {manea ? <InfoItem 
                    title={manea[0].title}
                    genre={manea[0].genre}
                    link={manea[0].link}
                 /> : null }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManeleSection);