import giftProducts from '../mocks/GiftProducts' 
import {CardProducts} from '../ui/layout/CardProducts'

export default function Gifts () {
  return (
    <div className='bg-white text-black flex flex-wrap gap-8 p-32'>
      <img src="/images/pageGifts/nuria-gifts.jpg" alt="" className='w-full h-[755px]' />

      {giftProducts.products.map((product) => (
        <CardProducts key={product.title} product={product} />))}
    </div>
  )
}

