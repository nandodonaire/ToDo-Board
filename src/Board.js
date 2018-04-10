import React, {Component} from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component {

  constructor(props) {
      super(props)
      this.state = {
        notes: []
      }
      this.eachNote = this.eachNote.bind(this)
      this.add = this.add.bind(this)
      this.nextId = this.nextId.bind(this)
      this.update = this.update.bind(this)
      this.remove = this.remove.bind(this)
  }

  add (text) {
    this.setState( prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
    }))
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
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

  remove (id) {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }))
  }

  eachNote(note, i) {
    return(
      <Note key={i} index={i} onChange={this.update} onRemove={this.remove}>{note.note}</Note>
    )
  }

  render () {
    return (
      <div className='board'>
        {this.state.notes.map(this.eachNote)}
        <button onClick={this.add.bind(null, 'New Note')} id="add"><FaPlus/></button>
      </div>
    )
  }
}

export default Board
