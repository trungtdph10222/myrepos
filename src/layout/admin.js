import React from 'react'
import AdminHeader from '../component/admin/header';
import AdminNav from '../component/admin/nav';
import './../asset/dashboard.css';
const AdminLayout = ({children}) => {
    return (
        <div>

            <div>
               <AdminHeader />
                <div className="container-fluid">
                    <div className="row">
                        <AdminNav />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            {children}
                        </main>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AdminLayout
