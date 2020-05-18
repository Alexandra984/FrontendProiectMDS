import React from "react";
import { connect } from 'react-redux';
import Option from "./Option";
import  {requestAllManele,  requestAllArtists, requestArtist, clickArtist, changeManea, requestManea,  requestByGenre, clickGenre, changeInput } from '../actions';
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
        manea: state.requestManeaR.manea,
        manele: state.requestManeleByGenR.manele,
        clickedGenre: state.clickGenreR.genreClicked,
        data: state.createManeaR.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestAllManele: () => dispatch(requestAllManele()),
        onRequestAllArtists: () => dispatch(requestAllArtists()),
        onRequestArtist: (artist) => dispatch(requestArtist(artist)),
        onClickArtist: (event) => dispatch(clickArtist(event.target.textContent)),
        onChangeManea: (event) => dispatch(changeManea(event.target.value)),
        onRequestManea: (manea) => dispatch(requestManea(manea)),
        onRequestManeleByGen: (gen) => dispatch(requestByGenre(gen.toUpperCase())),
        onClickGenre: (event) => dispatch(clickGenre(event.target.textContent)),
        // onChangeData: (data) => dispatch(changeInput)
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
        const {allManele, manea, onRequestAllManele, allArtists, artist, manele} = this.props;
        // console.log(maneaInput);
        // console.log(this.props.artist);
        const genuri=["Tristete", "Smecherie", "Bautura", "Dragoste"]
        // console.log(this.props.manele)
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

                <Option
                    instruction1="Cauta manele dupa gen"
                    button={true}
                    message="Cauta!"
                    dropdown={true}
                    names={genuri}
                    click={this.props.onClickGenre}
                    click2={() => this.props.onRequestManeleByGen(this.props.clickedGenre.toUpperCase())}

                />
                <Option 
                    instruction1="Adauga o manea, manelistule"
                    button={true}
                    message="Adauga!"
                    inputs={true}   
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
                {manele ? manele.map(manea => <InfoItem 
                    title={manea.title}
                    genre={manea.genre}
                    link={manea.link}
                    artist={manea.artist}
                    key={manea.id}
                />) : null}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManeleSection);