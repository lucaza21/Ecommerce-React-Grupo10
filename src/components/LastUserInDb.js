import React, {useState, useEffect} from 'react'
import UserList from './UserList'

function LastUserInDb() {
    const [usuarios,setUsuarios] = useState("")
    const [last, setLast] = useState("")
   
  /*   useEffect(() => {
        console.log("%c trayendo info de /api/users/", 'color:green');
        fetch("/api/users/")
        .then(response2 => response2.json())
        .then(data2 => {
            console.log(data2)
            setUsuarios(data2)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
        
    }, []) */

    useEffect(() => {
        let interval
        const fetchData = async () =>{
            console.log("%c trayendo info de /api/users/", 'color:green');
            try {
                const response = await fetch("/api/users/")
                const result = await response.json()
                setUsuarios(result)
            } catch (error){
                console.log(`%c${error}`, 'color:yellow')
            }
        }

        fetchData()
        interval = setInterval(()=>{
            fetchData()
        }, 1*1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log("%c se actualizó el otro componente/", 'color:pink');
        if(usuarios === ""){
            return 
        }else{
            console.log(`%c${usuarios.users[usuarios.count-1].id}`, 'color:red');
            const endpoint = `/api/users/${usuarios.users[usuarios.count-1].id}`;
            fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                /* console.log(data) */
                setLast(data.data)
                })
            .catch(error => console.log(`%c${error}`, 'color:yellow'));
        } 
    }, [usuarios])

/*       useEffect(() => {
       console.log("%c se actualizó el otro componente", 'color:red');
       if(usuarios === ""){
           return
       }else{
        console.log(`%c${usuarios.count}`, 'color:red');
        const endpoint = `/api/users/${usuarios.count}`;
        fetch(endpoint)
        .then(response => 
            response.json()
            )
        .then(data => {
            console.log(data.data)
            setLast(data.data)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
       }
       
       
   }, [usuarios]) */
  return (
    
    <React.Fragment>

            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Last User in the Database</h1>
            
            {/*<!-- DataTales Example -->*/}

            
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Addres</th>
                                    <th>Avatar</th>
                                    <th>Nickname</th>
                                    <th>Birthday</th>                                    
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Addres</th>
                                    <th>Avatar</th>
                                    <th>Nickname</th>
                                    <th>Birthday</th>
                                </tr>
                            </tfoot>
                            <tbody>
                            {
                                last === "" ? "Cargando..." : 
                                    last.map((lastUser,index)=>{
                                        return <>
                                                <UserList key={index} {...lastUser} />
                                               </>
                                    })
                            }
                           {/*  {
                                last === "" ? "no hay data" : 
                                    //console.log(this.state.movies)
                                    last.map((user,index)=>{
                                        return <UserList  {...user} key={index}  />
                                    })
                            } */}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>

        {last === "" ? "Cargando...":
            <>             
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4" style={{maxWidth: 30 +'rem'}}>
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last User in Data Base</h5>
                    </div>
                    <div className="card-body"  >
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{maxWidth: 20 +'rem'}} src={`http://localhost:3100${last[0].avatar}`} alt=" Star Wars - Mandalorian "/>
                        </div>
                        <p>Nombre: {last[0].name}</p>
                        <p>Apellido: {last[0].lastname}</p>
                        <p>Email: {last[0].email}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={`${last[0].url}`}>API Detail</a>
                    </div>
        
                </div>
            </div> 
            </>
         } 


    
    </React.Fragment>
  )
}
export default LastUserInDb