import React from 'react'
import AllProducts from './AllProducts'

function AllProductsWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <AllProducts />
                </div>
            </div>    
        </React.Fragment>
      )
}

export default AllProductsWrapper
