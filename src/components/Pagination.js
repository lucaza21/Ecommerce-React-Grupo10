import React, {useState} from 'react'

function Pagination(props) {
    const [last, setLast] = useState("")

    const consultar = (number) => {
        console.log("%c se actualizó el otro componente/", 'color:pink');
    
            /* console.log(`%c${usuarios.users[usuarios.count-1].id}`, 'color:red'); */
            const endpoint = `/api/users/${number}`;
            fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setLast(data.data)
                })
            .catch(error => console.log(`%c${error}`, 'color:yellow'));

    }

    const hide = () =>{
        setLast("")
    }
  return (
    <>
      <div className="col-lg-5 mb-2">
        <div className="card shadow mb-8">
          <div className="card-header py-3">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8 mb-2">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                      <div class="btn-group">
                        <button
                          className="btn bg-warning p-2 text-dark bg-opacity-50 border rounded"
                          onClick={() => consultar(props.id)}
                        >
                          {" "}
                          Consultar Usuario {props.id}
                        </button>
                        <button
                          className="btn bg-success p-2 text-dark bg-opacity-50 border rounded"
                          onClick={() => hide()}
                        >
                          {" "}
                          Hide Usuario {props.id}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {last === "" ? (
                " "
              ) : (
                <>
                  <div className="col-lg-8 mb-4">
                    <div
                      className="card shadow mb-4"
                      style={{ maxWidth: 20 + "rem" }}
                    >
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          User Info
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            style={{ maxWidth: 15 + "rem" }}
                            src={`http://localhost:3100${last[0].avatar}`}
                            alt=" Star Wars - Mandalorian "
                          />
                        </div>
                        <p>Nombre: {last[0].name}</p>
                        <p>Apellido: {last[0].lastname}</p>
                        <p>Email: {last[0].email}</p>
                        <a
                          className="btn btn-danger"
                          target="_blank"
                          rel="noreferrer"
                          href={`${last[0].url}`}
                        >
                          API Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagination