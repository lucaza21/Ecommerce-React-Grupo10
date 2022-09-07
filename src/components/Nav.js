import React from 'react'
import {Route, Link, Switch } from 'react-router-dom'

import ResumeWrapper from './ResumeWrapper';
import LastWrapper from './LastWrapper';
import CategoryWrapper from './CategoryWrapper';
import AllUsersWrapper from './AllUsersWrapper';
import AllProductsWrapper from './AllProductsWrapper';

function Nav() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}

        {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <img className="w-100" src={image} alt="Digital House"/>
            </div>
        </a> */}

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Resume</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/lastProduct">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Last</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Categories</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/allUsers">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>All Users</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/allProducts">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>All Products</span>
          </Link>
        </li>
        
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />

        <li className="nav-item">
          <Link className="nav-link" to="http://localhost:3100/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Back</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />

        <li className="nav-item">
        <a className='nav-link' role="button" target="_blank" href='http://localhost:3100/'>
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Express</span>
        </a>
        </li>
      </ul>

      
  
    <Switch>
        <Route exact path="/" component={ResumeWrapper} />
        <Route path="/lastProduct" component={LastWrapper} />
        <Route path="/categories" component={CategoryWrapper} />
        <Route path="/allUsers" component={AllUsersWrapper} />
        <Route path="/allProducts" component={AllProductsWrapper} />
    </Switch>
    </>
  );
}

export default Nav