import React from 'react';
import {withRouter} from "react-router-dom";
import OldPaper from "../img/oldPaper.png";
import {connect} from "react-redux";
import {deleteNote} from "../actions/deleteActions";


class NoteDetail extends React.Component{
/*
    state = {
        id: 0,
        note: {},
    };

    componentDidMount(){
        const id = this.props.match.params.id;
        this.setState({
            id: id,
        });

        const arr = this.props.currState;
        let note = arr.filter((e) => {
            return e.id == id;
        })[0];

        this.setState({
            note: note,
        })
    }
*/  
    deleteNote = () => {
        this.props.deleteNote(this.props.match.params.id);
        this.props.history.push("/");
    }

    render(){

        let stylee = {
            backgroundImage: `url(${OldPaper})`,
        }
    
        return(
            <div id="NoteDetailContainer" style={stylee}>
                <p id="NoteDetailTitle">{this.props.note.title}</p>
                <p id="NoteDetailText">{this.props.note.text}</p>
                <button onClick={this.deleteNote}>Delete</button>
            </div>
        );
    }

}

let mapStateToProps = (state, oldProps) => {
    let id = oldProps.match.params.id;
    return{
        note: state.notes.find(note => note.id == id)
    }
}

function mapDispatchToProps(dispatch){
    return{
        deleteNote: (id) => dispatch(deleteNote(id)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDetail));