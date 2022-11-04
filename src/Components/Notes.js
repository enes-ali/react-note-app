import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';


function Notes(props){

    //const notes = props.notesArray;

    const notes = props.notes;

    function getNotes(){

        if(notes == null){
            return(
                <div id="AddNoteMessage" className="centerizedHorizontal">
                    <h1>You Can Add New Notes</h1>
                    <Link to="/add" className="centerizedHorizontal"> Add New Note </Link>
                </div>
            );
        }else{
            let noteJsx = notes.map((e) => {
                return(
                    <div className="NoteBox">
                        <Link className="NoteTitle" to={"/note/"+ e.id}> {e.title} </Link>
                        <p className="NoteText">{e.text.slice(0, 300)}...</p>
                    </div>
                );
            });
            return noteJsx;
        }

    }

    return(
        <div id="NotesContainer">
            {getNotes()}
            <br/><br/><br/><br/><br/>
        </div>
    );
}

function setStateToProps(state){
    return{
        notes:state.notes,
    }
}

export default connect(setStateToProps)(Notes);