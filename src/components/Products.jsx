import React, {useEffect, useState} from 'react'
import {
    Card,
    Accordion,
    Button,
    Container,
    Row,
    Col,
    Image,
    ListGroup,
  } from "react-bootstrap";

function Products(props) {
    const [productos,setProductos] = useState("")
    const [cart, setCart] = React.useState([]);

    
    useEffect(() => {
        console.log("%c trayendo info de /api/products/", 'color:green');
        fetch("/api/products/")
        .then(response2 => response2.json())
        .then(data2 => {
            console.log(data2.productos)
            setProductos(data2.productos)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
        
    }, [])

    const addToCart = (e) => {
        /* let name = e.target.name; */
        let id = e.target.id;
        let producto = productos.filter((producto) => producto.id == id);
        let newStock;
        let newproductos = productos.map((producto) => {
          if (producto.id == id && producto.quantity > 0) {
            newStock = producto.quantity - 1;
            producto.quantity -= 1;
          }
          return producto;
        });
        setProductos([...newproductos]);
        if (newStock >= 0) setCart([...cart, ...producto]);
        //doFetch(query);
      };
    
    const deleteCartItem = (index) => {

         let newCart = cart.filter((item, i) => index != i);
          let returnedItem = cart.filter((item, i) => i == index);
          let newItems = productos.map((item) => {
            if(item.id == returnedItem[0].id) item.quantity += 1;
            return item;
          });
          setCart(newCart);
          setProductos(newItems);
      
        };

      // ====================CART CONTECT ====================
      let cartList = cart.map((item, index) => {
        return (
          <Card className='m-2' key={1 + index}>
              <Accordion.Item eventkey={1 + index}>
              <Accordion.Header variant="link" eventKey={1 + index}>
                {item.name}
              </Accordion.Header>
            <Accordion.Collapse>
            <Accordion.Body eventkey={1 + index}> 
            Precio: ${item.price}
            <hr />
            <Button className="btn btn-danger"
              onClick={() => deleteCartItem(index)}
              eventkey={1 + index}>
              Delete
            </Button>        
            </Accordion.Body>
            </Accordion.Collapse>
            </Accordion.Item>
            
          </Card>
        );
      });

  // ==============Checkout==================
  let finalList = () => {
    let total = checkOut();
    let final = cart.map((item, index) =>{
      return (
        <ListGroup.Item
        key={index}
        index={index}>
        {item.name} ${item.price}  
        </ListGroup.Item>
      );
    });
    return { final, total };

  };
  const checkOut = () => {
    let costs = cart.map((item) => item.price);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    console.log(`total updated to ${newTotal}`);
    return newTotal;
  };

  const actualizarProductos = () => {
    if (productos == ""){
      return
    }
    const cartList = cart.map(item => item.id) 
    console.log("cartList: ", cartList)

    const prodList = productos.filter(item =>{
      return !cartList.includes(item.id)
    }) 
    console.log("prodList: ", prodList)
    alert("compra exitosa");
    setProductos(prodList)
    setCart([])

   
  }

  return (
    <>
      <div>
        {productos === ""
          ? "Cargando..."
          : //console.log(this.state.movies)
            productos.map((producto, index) => {
              return (
                <>
                  <ul className="list-group">
                    <li className="list-group-item" key={index}>
                      <Image
                        src={`http://localhost:3100/img/${producto.image}`}
                        width={70}
                        roundedCircle
                      ></Image>
                      <Button className="m-1" variant="primary" size="large">
                        {producto.name}
                      </Button>
                      <Button className="m-1" variant="dark" size="large">
                        {producto.type}
                      </Button>
                      <Button className="m-1" variant="info" size="large">
                        ${producto.price} : Stock:{producto.quantity}
                      </Button>
                      <Button
                        id={producto.id}
                        className="btn btn-success"
                        onClick={addToCart}
                      >
                        ADD
                      </Button>
                    </li>
                  </ul>

                  {/* <Accordion defaultActiveKey="0">{producto.image}</Accordion>; */}
                </>
              );
            })}
      </div>

      <div>
        <Container>
          <Row>
            <Col>
              <Card className="text-center border-info m-1 card">
                <Card.Header>Cart</Card.Header>
                <Accordion>{cartList}</Accordion>
              </Card>
            </Col>
            <Col>
              <Card className="text-dark text-center m-1 card bg-warning">
                <Card.Header>
                  <Button onClick={() => actualizarProductos()}>
                    Total $ {finalList().total}
                  </Button>
                </Card.Header>
                <ListGroup variant="flush">
                  {finalList().total > 0 && finalList().final}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Products