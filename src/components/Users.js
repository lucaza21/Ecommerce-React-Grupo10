import React , {useState, useEffect} from 'react'

import SmallCard from './SmallCard'

function Users() {

    const [users,setUsers] = useState("")
    const [products,setProducts] = useState("")

   /*  useEffect(() => {
        console.log("%c trayendo info de /api/products/", 'color:green');
        fetch("/api/products/")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProducts(data)
            })
        .catch(error => console.log(`%c${error}`, 'color:yellow'));
        
    }, []) */
    useEffect(() => {
        let interval
        const fetchData = async () =>{
            console.log("%c trayendo info de /api/products/", 'color:green');
            try {
                const response = await fetch("/api/products/")
                const result = await response.json()
                setProducts(result)
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

    /* useEffect(() => {
        console.log("%c trayendo info de /api/users/", 'color:green');
        fetch("/api/users/")
        .then(response2 => response2.json())
        .then(data2 => {
            console.log(data2)
            setUsers(data2)
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
                setUsers(result)
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
        <>
        <h1 className="h3 mb-2 text-gray-800 ">Resume</h1>
        <div className="row">
            {users === "" ? "no hay usuarios" : 
                <> 
                <SmallCard title={"Total de Usuarios"} cuantity={users.count} />
                </>
            }

            {products === "" ? "Cargando..." : 
                <> 
                <SmallCard title={"Total de Productos"} cuantity={products.count} color={"primary"}/>
                <SmallCard title={"Total de Categorias"} cuantity={products.typeCount} color={"warning"}/>
                </>
            }
             
        </div>

{/*         <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div> */}
{/* 
        <div>
            {
            users == "" ? "no hay data" : 
            <>
            COUNT = {users.count}
                <ul>
                    {
                        users.users.map((user,i) =>{
                            return (
                                <li key={i}>
                                    <h3>{user.name}</h3>
                                    <h3>{user.email}</h3>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </>
            }
        </div> */}

        </>
    )
}

export default Users