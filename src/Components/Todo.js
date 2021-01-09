import { useState } from 'react'
import TodoForm from './TodoForm'
import List from './List'
import '../css/Todo.css'

const Todo = () => {
  
  const [items, setItems] = useState([])

  function onAddItem(item) {
    setItems([...items, item])
  }

  return (
    <section id='new-item-section'>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List items={items}></List>
    </section>
  )
}
export default Todo