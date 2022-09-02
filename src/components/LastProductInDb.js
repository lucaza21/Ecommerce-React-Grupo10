import React, {useState, useEffect} from 'react'
import ProductList from './ProductList'

function LastProductInDb() {
    const [productos,setProductos] = useState("")
    const [last, setLast] = useState("")
   
    useEffect(() => {
        console.log("%c trayendo info de /api/products/", 'color:green');
        fetch("/api/products/")
        .then(response2 => response2.json())
        .then(data2 => {
            console.log(data2)
            setProductos(data2)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
        
    }, [])

      useEffect(() => {
       console.log("%c se actualizó el otro componente", 'color:pink');
       if(productos === ""){
           return
       }else{
        console.log(`%c${productos.productos[productos.count-1].id}`, 'color:red');
        const endpoint = `/api/products/${productos.productos[productos.count-1].id}`;
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            /* console.log(data.data) */
            setLast(data.data)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
       }
       
       
   }, [productos])
    /* if(productos === ""){
        return
    } else{
        console.log(productos.productos[productos.count-1].id)
        console.log(productos.count)
    } */
        
  return (
    
    <React.Fragment>
         <div>
         
            {/* <div>
                {
                productos === "" ? "no hay data" : 
                <>
                COUNT = {productos.count}
                    <ul>
                        {
                            productos.productos.map((producto,i) =>{
                                return (
                                    <li key={i}>
                                        <h3>{producto.name}</h3>
                                        <h3>{producto.id}</h3>
                                    </li>
                                )
                            }) 
                        }
                    </ul>
                </>
                }
            </div> */}
         
         </div>
        
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Last Product in the Database</h1>
            
            {/*<!-- DataTales Example -->*/}

            
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Discount</th>
                                    <th>Type</th>
                                    
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Discount</th>
                                    <th>Type</th>   
                                </tr>
                            </tfoot>
                            
                            <tbody>
                            {
                                last === "" ? "Cargando..." :
                                    last.map((lastUser,index)=>{
                                        return <>
                                                <ProductList key={index} {...lastUser} />
                                               </>
                                    }) 
                            }
                            {/* {
                                last === "" ? "no hay data" : 
                                    //console.log(this.state.movies)
                                    last.map((lastProducto,index)=>{
                                        return <ProductList  key={index} {...lastProducto}/>
                                    })
                            } */}
                     
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
  )
}

export default LastProductInDb