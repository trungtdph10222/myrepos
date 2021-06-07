import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import AdminLayout from './layout/admin';
import WebsiteLayout from './layout/website';
import Adminproductpage from './page/admin/product';
import AdminProductAddPage from './page/admin/product/add';
import AdminProductEditpage from './page/admin/product/edit';
const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <AdminLayout>
                        <Switch>
                            <Route exact path="/admin/product">
                                <Adminproductpage {...props} />
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AdminProductAddPage {...props}/>  
                            </Route>
                            <Route exact path="/admin/product/:id">
                                <AdminProductEditpage {...props} />
                            </Route>
                        </Switch>
                    </AdminLayout>
                </Route>
                <Route>
                    <WebsiteLayout>

                    </WebsiteLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers
