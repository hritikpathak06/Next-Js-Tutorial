"use client"

const Product = ({item}) => {
  return (
    <div>
      <button onClick={() => alert(item.price)}>Click Me</button>
    </div>
  )
}

export default Product
