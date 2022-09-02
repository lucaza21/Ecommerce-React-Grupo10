import React, {useState, useEffect} from 'react'
import CategoryList from './CategoryList'

function Category() {

    const [categorias,setCategorias] = useState("")

   
    console.log(categorias.count)
    useEffect(() => {
        console.log("%c trayendo info de /api/products/", 'color:green');
        fetch("/api/products/")
        .then(response => 
            response.json()
            )
        .then(data => {
            console.log(data.countByCategory.data)
            setCategorias(data.countByCategory.data)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
        
    }, [])

  return (
    
    <React.Fragment>
         {/* <div>
            {categorias === "" ? "no hay data" : <>
            <ul>
                        {
                            categorias.map((categoria,i) =>{
                                return (
                                    <li key={i}>
                                        <h3>{categoria.viento}</h3>
                                        
                                    </li>
                                )
                            }) 
                        }
                    </ul>
            </>}
         
         </div> */}
        
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Categories Count</h1>
            
            {/*<!-- DataTales Example -->*/}

            
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Viento</th>
                                    <th>Cuerdas</th>
                                    <th>Percusión</th>
                                    <th>Eléctrico</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Viento</th>
                                    <th>Cuerdas</th>
                                    <th>Percusión</th> 
                                    <th>Eléctrico</th> 
                                </tr>
                            </tfoot>
                            
                            <tbody>
                            {
                                categorias === "" ? "Cargando..." : 
                                    //console.log(this.state.movies)
                                    categorias.map((categoria,index)=>{
                                        return <CategoryList key={index} {...categoria} />
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

export default Category