function List(props) {

  function removeItem(event) {
    event.preventDefault()
    
  }

return (
  <ul className='todo-items' key="todo-items">
    {props.items.map((i) => (
      <li className="todo-item" key={i}>
        <h1 key={i + "item"}>{i}</h1>
        <button key={i + "remove"} onClick={removeItem}>Remove</button>
      </li>
    ))}
  </ul>
)
}

export default List