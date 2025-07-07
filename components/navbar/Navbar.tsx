import Container from '../global/Container'
import CartButton from './CartButton'
import DarkMode from './DarkMode'
import LinksDropDown from './LinksDropdown'
import Logo from './Logo'
import NavSearch from './NavSearch'

function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        <NavSearch />
        <div className='flex items-centesr gap-4'>
          <CartButton />
          <DarkMode />
          <LinksDropDown />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
