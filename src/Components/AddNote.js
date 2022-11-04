import React from 'react';
import {withRouter} from "react-router-dom";


class AddNote extends React.Component{

    state = {
        id: Math.random(),
        title: null,
        text: null,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    saveNote = (e)=>{
        e.preventDefault();
        this.props.addFunction(this.state);
        this.props.history.push("/");
    }

    render(){
        return(
            <form id="AddForm" onSubmit={this.saveNote}>
                <label>Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>

                <label>Text</label>
                <textarea type="text" id="text" onChange={this.handleChange} spellCheck="false" />

                <button>Save</button>
            </form> 
        );
    }

}

export default withRouter(AddNote);