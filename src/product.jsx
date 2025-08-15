function Product(props){
    return(<>
    <div  className="product">
    <img className="proimg" src={props.url}/>
    <p className="title">{props.title}</p>
    <p className="brand">{props.brand}</p>
    <p className="price">{props.price}</p>
    <button className="button">BUY</button>
    </div>
    </>)
}

export default Product;