import React from 'react'
import Category from './Category'

function CategoryWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <Category />
                </div>
            </div>    
        </React.Fragment>
      )
}

export default CategoryWrapper