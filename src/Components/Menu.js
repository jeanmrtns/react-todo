const Menu = (props) => (
  <ul className='header-menu'>
    {props.items.map((item) => {
      return (
        <li key={item}>
          <a href='item.url'>{item}</a>
        </li>
      )
    })}
  </ul>
)

export default Menu
