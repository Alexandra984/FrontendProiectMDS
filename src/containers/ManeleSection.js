import React from "react";
import { connect } from 'react-redux';
import Option from "./Option";
import  {requestAllManele,  requestAllArtists, requestArtist, clickArtist, changeManea, requestManea,  requestByGenre, clickGenre, changeInput, changeTitle, changeGenre, changeArtist, changeLink } from '../actions';
import InfoItem from '../components/InfoItem';

import './ManeleSection.css';
import {apiLink} from '../api/api';


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
        title: state.createTitleR.title,
        genre: state.createGenreR.genre,
        link: state.createLinkR.link,
        artistPost: state.createArtistR.artistPost
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRequestAllManele: ()  => {
            return dispatch(requestAllManele())},
        onRequestAllArtists: () => dispatch(requestAllArtists()),
        onRequestArtist: (artist) => dispatch(requestArtist(artist)),
        onClickArtist: (event) => dispatch(clickArtist(event.target.textContent)),
        onChangeManea: (event) => dispatch(changeManea(event.target.value)),
        onRequestManea: (manea, data1, data2, data3) => {
            data1=[];
            data2=[];
            data3=[];
            return dispatch(requestManea(manea))},
        onRequestManeleByGen: (gen, data1, data2, data3) => {
            data1=[];
            data2=[];
            data3=[];
            return dispatch(requestByGenre(gen.toUpperCase()))},
        onClickGenre: (event) => dispatch(clickGenre(event.target.textContent)),
        onChangeTitle: (event) => dispatch(changeTitle(event.target.value)),
        onChangeGenre: (event) => dispatch(changeGenre(event.target.value)),
        onChangeLink: (event) => dispatch(changeLink(event.target.value)),
        onChangeArtist: (event) => dispatch(changeArtist(event.target.value))
    }
}

class ManeleSection extends React.Component {
    constructor() {
        super()
        this.state = {
            displayAllManele: false,
            displayArtist: false,
            displayManea: false,
            displayManele: false
         
        }
    }

    componentDidMount() {
        // this.props.onRequestAllArtists();
    }

    onClickButton = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow'
          };

        fetch(`${apiLink}/manea`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    onVerifyAllManele() {
        this.setState({displayAllManele:true, displayArtist: false, displayManea:false, displayManele:false })

    }

    onVerifyArtist() {
        this.setState({displayAllManele:false, displayArtist: true, displayManea:false, displayManele:false })

    }
    onVerifyManea() {
        this.setState({displayAllManele:false, displayArtist: false, displayManea:true, displayManele:false })

    }
    onVerifyManele() {
        this.setState({displayAllManele:false, displayArtist: false, displayManea:false, displayManele:true })

    }
    render() {
        // console.log(this.props.clickedArtist);
        let {allManele, manea, onRequestAllManele, allArtists, artist, manele, title, genre, link, artistPost, clickedArtist} = this.props;
        // console.log(maneaInput);
        // console.log(title);
        // console.log(genre);
        // console.log(link);
        // console.log(artistPost);
        // console.log(clickedArtist);
        console.log("hello" + this.state.displayManele);
        // console.log("maneaua cautata" +this.props.manea);
        // console.log("artistul cautat" + this.props.artist);
        // console.log("manelele cautate" + this.props.manele);
        const data = {
            title,
            genre: genre.toUpperCase(),
            link,
            artist:  artistPost
        }
        // console.log(data);
        // console.log(this.props.artist);
        const genuri=["Tristete", "Smecherie", "Bautura", "Dragoste"]
        // console.log(this.props.manele)
        // all Manele
        return (
            <div className="ManeleSection">
                <Option
                    instruction1="Afiseaza toata lista de manele, manelistule!" 
                    button={true}
                    message="Afiseaza"
                    click2={() => {onRequestAllManele(); this.onVerifyAllManele(this.state.displayAllManele, this.state.displayArtist, this.state.displayManea, this.state.displayManele)}}
                    /> 
                <Option
                    instruction1="Cauta un artist!" 
                    dropdown={true}
                    names={allArtists.map(artist => artist.name)}
                    ids={allArtists.map(artist => artist.id )}
                    click={this.props.onClickArtist}
                    button={true}
                    message="Cauta"
                    click2={() => {
                        this.props.onRequestArtist(this.props.clickedArtist); 
                        this.onVerifyArtist(this.state.displayAllManele, this.state.displayArtist, this.state.displayManea, this.state.displayManele)
                        }}
                    // click={this.props.onRequestArtist}
                    /> 
                
                <Option 
                    change={this.props.onChangeManea}
                    instruction1="Cauta o manea"
                    button={true}
                    message="Cauta!"
                    click2={() => {
                        this.props.onRequestManea(this.props.maneaInput);
                        this.onVerifyManea(this.state.displayAllManele, this.state.displayArtist, this.state.displayManea, this.state.displayManele)
                    }}
                />

                <Option
                    instruction1="Cauta manele dupa gen"
                    button={true}
                    message="Cauta!"
                    dropdown={true}
                    names={genuri}
                    click={this.props.onClickGenre}
                    click2={() =>{ 
                        this.props.onRequestManeleByGen(this.props.clickedGenre.toUpperCase(), this.props.allManele, this.props.artist, this.props.manele);
                        this.onVerifyManele(this.state.displayAllManele, this.state.displayArtist, this.state.displayManea, this.state.displayManele)
                        }}

                />
                <Option 
                    instruction1="Adauga o manea, manelistule"
                    button={true}
                    message="Adauga!"
                    inputs={true}   
                    change01={this.props.onChangeTitle}
                    change02={this.props.onChangeGenre}
                    change03={this.props.onChangeLink}
                    change04={this.props.onChangeArtist}
                    click2={() =>this.onClickButton(data)}
                />
                <div className="Info">
                 
                
                {this.state.displayAllManele ? 
                    allManele.map(manea => <InfoItem
                     title={manea.title}
                     genre={manea.genre}
                     dlink={true}
                     link={manea.link}
                     artist={manea.artist}
                     key={manea.id} />)
                      : null}
              
                {this.state.displayArtist ? 
                    <InfoItem 
                        title={artist.name}
                        age={artist.age}
                        biography={artist.biography}
                        dlink={false}
                    />
                 : null}
                {this.state.displayManea && this.props.manea ? <InfoItem 
                    title={manea[0].title}
                    genre={manea[0].genre}
                    link={manea[0].link}
                    dlink={true}
                 /> : null }
                {this.state.displayManele && manele ? manele.map(manea => <InfoItem 
                    title={manea.title}
                    genre={manea.genre}
                    link={manea.link}
                    dlink={true}
                    artist={manea.artist}
                    key={manea.id}
                />) : null}
            </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManeleSection);