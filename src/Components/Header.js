import Menu from './Menu.js'
import Logo from './Logo.js'
import '../css/header.css'

const Header = (props) => (
  <header>
    <Logo name='Jean'></Logo>
    <Menu items={['Home', 'About', 'Contact']}></Menu>
  </header>
)

export default Header
