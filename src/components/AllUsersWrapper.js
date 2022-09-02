import React from 'react'
import AllUsers from './AllUsers'

function AllUsersWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <AllUsers />
                </div>
            </div>    
        </React.Fragment>
      )
}

export default AllUsersWrapper