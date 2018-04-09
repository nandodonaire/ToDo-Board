import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)
    this.save = this.save.bind(this)
  }

  edit () {
		this.setState({
			editing: true
		})
	}

  remove () {
    alert('Removing Note')
  }

  save (event) {
    event.preventDefault()
    this.props.onChange(this._newText.value, this.props.index)
    this.setState({
      editing: false
    })
  }

  renderForm() {
    return (
      <div className='note'>
        <form onSubmit={this.save}>
          <textarea ref={input => this._newText = input} />
          <button id='save'><FaFloppyO /></button>
        </form>
      </div>
    )
  }

  renderDisplay () {
    return (
      <div className='note'>
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} id='edit'><FaPencil /></button>
          <button onClick={this.remove} id='remove'><FaTrash /></button>
        </span>
      </div>
    )
  }

  render() {
    // this will render the form if the state is set to 'editing'
    if (this.state.editing) {
      return this.renderForm()
    // if the state is not set to editing, it will not render the form
    } else {
      return this.renderDisplay()
    }
  }
}

export default Note
