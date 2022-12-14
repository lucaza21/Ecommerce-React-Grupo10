import React , {useState, useEffect} from 'react'
import Pagination from './Pagination';

import UserList from './UserList'

function AllUsers() {
    
    const [users,setUsers] = useState("");


/*     useEffect(() => {
        console.log("%c trayendo info de /api/users/", 'color:green');
        fetch("/api/users/")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUsers(data.users)
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
                setUsers(result.users)
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



    return (
        <><h1 className="h3 mb-2 text-gray-800 ">All Users in Database</h1>
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
                                users === "" ? "Cargando..." : 
                                    //console.log(this.state.movies)
                                    users.map((user,index)=>{
                                        return <UserList key={index} {...user}/>
                                    })
                            }
                     
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div>
            {
                users === "" ? "Cargando..." : 
                    //console.log(this.state.movies)
                    users.map((user,index)=>{
                        return <Pagination key={index} {...user}/>
                    })
            }
            </div>
        </>
    )
}

export default AllUsers