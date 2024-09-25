import giftProducts from '../mocks/GiftProducts' 
import {CardProducts} from '../ui/layout/CardProducts'

export default function Gifts () {
  return (
    <div>
      {giftProducts.products.map((product) => (
        <CardProducts key={product.title} product={product} />))}
    </div>
  )
}

