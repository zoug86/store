import { Button } from '../ui/button'
import { LuShoppingCart } from 'react-icons/lu'
import Link from 'next/link'

async function CartButton() {
  const numItemsInCart = 9 // Replace with actual logic to get number of items in cart
  return (
    <Button
      size='icon'
      asChild
      variant='outline'
      className='relative flex justify-center items-center'
    >
      <Link href='/cart'>
        <LuShoppingCart className='h-6 w-6' />
        <span className='absolute -top-2 -right-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton
