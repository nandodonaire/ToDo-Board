import React, {Component} from 'react'
import Note from './Note'

class Board extends Component {

  constructor(props) {
      super(props)
      this.state = {
        notes: [
          {
            id: 0,
            note: 'Call mom'
          },
          {
            id: 1,
            note: 'Call dad'
          }
        ]
      }
      this.eachNote = this.eachNote.bind(this)
      this.update = this.update.bind(this)
  }

  update (newText, i) {
    this.setState(prevState => ({
      notes: prevState.notes.map(
        // this is checking if the note.id of the note that is passed is
        // not equal to the id of the note and if this is the case it will
        // return the note. Otherwise it will set the note key in the note to
        // the 'newText' that is passed
        note => (note.id !== i) ? note : {...note, note: newText}
      )
    }))
  }

  eachNote(note, i) {
    return(
      <Note key={i} index={i} onChange={this.update}>{note.note}</Note>
    )
  }

  render () {
    return (
      <div className='board'>
        {this.state.notes.map(this.eachNote)}
      </div>
    )
  }
}

export default Board
