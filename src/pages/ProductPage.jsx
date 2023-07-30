import React from 'react'
import {Link} from 'react-router-dom'

export const ProductPage = ({products,removeProduct}) => {
    const onHandleRemove = (id) =>{
        removeProduct(id)
    }
  return (
    <div>
        <Link to={`/admin/product/add`}><button>Add New</button></Link>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product,index)=>{
                return(
                    <tr key={index + 1}>
                        <td>{index +1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to={`/admin/product/edit/${product.id}`}><button>Update</button></Link>
                            <button onClick={() => onHandleRemove(product.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </div>
  )
}
