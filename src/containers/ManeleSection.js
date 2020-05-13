import React from "react";
import { connect } from 'react-redux';
import Option from "./Option";
import ManeleList from "../components/ManeleList";
import  {requestManeleByArtist} from '../actions';

const mapStateToProps = state => {
    return {
        maneleByArtists: state.requestManeleByArtists.manele,
        isPending: state.requestManeleByArtists.isPending
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestManeleByArtists: () => dispatch(requestManeleByArtist())
    }
}

class ManeleSection extends React.Component {

    // componentDidMount() {
    //     this.props.onRequestManeleByArtists();
    // }

    render() {
        const {maneleByArtists} = this.props;
        console.log(maneleByArtists);
        return (
            <div style={{border: "1px solid blue", height: "500px"}}>
                <Option 
                    instructions="Vezi manele ca un manelist adevarat"
                    instruction1="artist"
                    instruction2="dupa gen"
                    instruction3="cauta manea"
                />
                <ManeleList />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManeleSection);