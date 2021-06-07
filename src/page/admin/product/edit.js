import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {useHistory,Link, useParams} from 'react-router-dom'
const AdminProductEditpage = ({onEdit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    let {id} = useParams();
    console.log(id)
    const[product ,setProduct] = useState({});
    useEffect(()=>{
        const getProduct = async ()=>{
        try {
            const response =await fetch(`http://localhost:3001/products/${id}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.log(error)
        }
        };
        getProduct();
    },[])
    const onSubmit=(data) => {
        const newData={
            id: id,
            ...data
        };
        console.log(newData)
        onEdit(newData);
        history.push('/admin/product')
    }
    return (
        <div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Sửa Sản Phẩm</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                <Link class="btn btn-primary" to="/admin/product">Quay trở lại</Link>
                </div>
                </div> 
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Tên Sản Phẩm</label>
                    <input type="text" 
                    className="form-control"
                     id="product-name"
                     defaultValue={product.name}
                     {...register('name',{ required : true })}
                     />
                     {errors.name &&  <div id="emailHelp" className="form-text text-danger">Bạn Phải Nhập Tên</div>} 
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá</label>
                    <input type="number"
                     className="form-control"
                      id="product-price" 
                      defaultValue={product.price}
                      {...register('price',{ required : true })}
                      />
                      {errors.price &&  <div id="emailHelp" className="form-text text-danger">Bạn Phải Nhập Giá Sản Phẩm</div>} 
                      
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox"
                     className="form-check-input"
                      id="product-status"
                      {...register('status')}
                     />
                    <label className="form-check-label" htmlFor="product-status">Còn Hàng</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
        </div>
    )
}

export default AdminProductEditpage
