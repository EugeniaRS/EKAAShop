import { useGetWishQuery } from "../../../../redux/service/wish.service"
import KeepBuying from "./KeepBuying"

const KeepBuyingMap = ({ me }) => {
    const { data:results=[], isLoading, error } = useGetWishQuery(me);
    console.log(results.results);
  return isLoading ? ( <h3>Cargando...</h3>
  ):(
   <section>
   <h1>KeepBuying</h1>
    <section className="keepBuyingContainer">
    
    {results.results.Products.slice(0,4).map(product => <KeepBuying product={product} key={product.id} />)}
    </section>
    </section>
  )
}

export default KeepBuyingMap