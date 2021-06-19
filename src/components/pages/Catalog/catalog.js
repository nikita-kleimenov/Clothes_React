import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'
import s from './catalog.module.css'
import Sidebar from './SideBar/sidebar'

import Jackets from './Jackets/jackets'
import Icons from './CatalogIcons/icons'
const catalog = () => {
    return (
        <div>
            <Sidebar/>
            <Icons/>
        {/*   */}
      {/* <BrowserRouter>
        <Route path="/jackets" component={Jackets}/>
      </BrowserRouter> */}
        </div>
       
    )
}

export default catalog
