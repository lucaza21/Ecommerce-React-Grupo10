import React from 'react'

import LastProductInDb from './LastProductInDb'
import LastUserInDb from './LastUserInDb'
function LastWrapper() {
  return (
    <React.Fragment>
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <LastProductInDb />
                <LastUserInDb />
            </div>
        </div>    
    </React.Fragment>
  )
}

export default LastWrapper