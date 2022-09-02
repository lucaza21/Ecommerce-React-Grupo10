import React from 'react'
import Users from './Users'

function ResumeWrapper() {
  return (
  
    <React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <Users />
            </div>
        </div>    
    </React.Fragment>
  )
}

export default ResumeWrapper