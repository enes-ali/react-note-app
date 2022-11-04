import React, {Component} from 'react';
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Notes from './Components/Notes';
import NoteDetail from './Components/NoteDetail';
import AddNote from './Components/AddNote';


/*
    [
      {title: "Note 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", id: 1},
      {title: "Note 2", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", id: 2},
      {title: "Note 3", text: "Lorem Ispum STuff 3", id: 3},
      {title: "Note 4", text: "Lorem Ispum STuff 4", id: 4},
      {title: "Note 5", text: "Lorem Ispum STuff 5", id: 5},
      {title: "Note 6", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", id: 6},
    ], */

class App extends Component{

  state = {
    notes: null,
  }

  addNote = (note) => {
    let newNotes;
    if(this.state.notes !== null){
      newNotes = [...this.state.notes, note];
    }else{
      newNotes = [note];
    }
    this.setState({
      notes: newNotes,
    });
  }

  render(){
    return(
      <BrowserRouter>

        <Navbar />

        <Route exact path="/" component={ () => <Notes notesArray={this.state.notes} /> } />

        <Route exact path="/note/:id" component={() => <NoteDetail currState={this.state.notes} />} />

        <Route exact path="/add" component={() => <AddNote addFunction={this.addNote} />} />

      </BrowserRouter>
    )
  }

};


export default App;


