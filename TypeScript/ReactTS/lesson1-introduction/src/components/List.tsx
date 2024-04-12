import { productType } from "../types/productType"



const List:React.FC<productType> = ({title,price,color,newDevice,id}) => {
  return (
    <ul>
        <li>Product id:{id}</li>
        <li className={`${newDevice ? "text-success":"text-danger"}`}>Title:{title}</li>
        <li>Price:{price}$</li>
        <li>Color:{color}</li>
        
    </ul>
  )
}

export default List