import React, {useState, useEffect} from 'react'
import UserList from './UserList'

function LastUserInDb() {
    const [usuarios,setUsuarios] = useState("")
    const [last, setLast] = useState("")
   
    useEffect(() => {
        console.log("%c trayendo info de /api/users/", 'color:green');
        fetch("/api/users/")
        .then(response2 => response2.json())
        .then(data2 => {
            console.log(data2)
            setUsuarios(data2)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
        
    }, [])

    useEffect(() => {
        console.log("%c se actualizó el otro componente/", 'color:pink');
        if(usuarios === ""){
            return 
        }else{
            console.log(`%c${usuarios.count}`, 'color:red');
            const endpoint = `/api/users/${usuarios.count}`;
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


    
    </React.Fragment>
  )
}
export default LastUserInDb