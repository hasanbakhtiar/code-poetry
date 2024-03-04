import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useCart } from 'react-use-cart';
const Cart = () => {
    const { 
        items,
        updateItemQuantity,
        removeItem,
        isEmpty,
        cartTotal,
        emptyCart
        } = useCart();
        return (
            isEmpty?<div className='d-flex justify-content-center w-100'><img src="https://cdnl.iconscout.com/lottie/premium/thumb/empty-cart-8302196-6635017.gif" alt="" /></div>:<>
            <h2 className='my-5 text-center'>Cart</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {items.map((item, c) => (
                        <tr key={c}>
                            <td>{c + 1}</td>
                            <td><img width={70} src={item.images[0]} alt="" /></td>
                            <td> {item.title}</td>
                            <td>{item.price * item.quantity}$</td>
                            <td>
                                <Button variant='danger' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                                <span className='mx-3'>{item.quantity}</span>
                                <Button variant='success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                            </td>
                            <td><Button onClick={() => removeItem(item.id)} variant='danger'>X</Button></td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            <h4 className='mt-4'>Total price:{cartTotal}$</h4>
            <Button variant='danger' onClick={()=>{emptyCart()}}>All clear</Button>
        </>
    )
}

export default Cart