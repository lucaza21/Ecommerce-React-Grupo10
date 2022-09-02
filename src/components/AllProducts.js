import React, {useState, useEffect} from 'react'
import ProductList from './ProductList'

function AllProducts() {
    const [productos,setProductos] = useState("")

   
    console.log(productos.count)
    useEffect(() => {
        console.log("%c trayendo info de /api/products/", 'color:green');
        fetch("/api/products/")
        .then(response => response.json())
        .then(data => {
            /* console.log(data) */
            setProductos(data.productos)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
        
    }, [])

  return (
    
    <React.Fragment>
         <div>
         </div>
    
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All Products in the Database</h1>
            
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
                                productos === "" ? "Cargando..." : 
                                    //console.log(this.state.movies)
                                    productos.map((producto,index)=>{
                                        return <ProductList key={index} {...producto}  />
                                    })
                            }
                     
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
  )
}

export default AllProducts