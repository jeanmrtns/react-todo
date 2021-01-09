import {useState} from 'react'
function TodoForm(props) {

  const [text, setText] = useState('')

  function handleChange(event) {
    let t = document.getElementById('input-new').value
    setText(t)
  }

  function addItem(event) {
    event.preventDefault()
    if(!text) return
    props.onAddItem(text)
    setText('')
  }


  return (
    <form key="form">
      <label htmlFor='input-new' key="labelForm">New task: </label>
      <input id='input-new' type='text' placeholder='Insert here the new todo item' onChange={handleChange} value={text} key="input"/>
      <button id='btn-add' onClick={addItem} key="addBtn">Add</button>
    </form>
  )

}

export default TodoForm