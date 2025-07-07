import { FaShoppingBag } from 'react-icons/fa'
import { Button } from '../ui/button'
import Link from 'next/link'

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <FaShoppingBag className='w-6 h-6 text-white' />
      </Link>
    </Button>
  )
}

export default Logo
