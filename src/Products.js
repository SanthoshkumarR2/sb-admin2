import {Link} from "react-router-dom"
import React from "react"

function Products(){
  const products=[
    {
     "LaptopNames": "Lenovo",
     "Brand": "Ideapad",
     "Model": "E4589",
     "Catagory": "Windows",
     "BatteryCapacity": "4700 MAH",
     "Processor": "AMD Pro Ryzen",
     "Price": "Rs.49,999"
    },
    {
     "LaptopNames": "Samsung",
     "Brand": "Galaxy",
     "Model": "Notebook 360",
     "Catagory": "Windows",
     "BatteryCapacity": "5000 MAH",
     "Processor": "Intel core i9 13th Gen",
     "Price": "Rs.1,32,000"
    },
    {
     "LaptopNames": "Vivo SlimBook",
     "Brand": "V Series",
     "Model": "V 15 Pro",
     "Catagory": "Windows",
     "BatteryCapacity": "4400 MAH",
     "Processor": "Intel core i5 11th Gen",
     "Price": "Rs.54,000"
    },
    {
     "LaptopNames": "Apple",
     "Brand": "MacBook",
     "Model": "Air pro",
     "Catagory": "MacOS",
     "BatteryCapacity": "5000 MAH",
     "Processor": "M2 Chip",
     "Price": "Rs.1,98,000"
    }
    
   ]
   
    return(

        <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Laptop Products</h1>
                        <Link to="/portal/createproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
        </div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                
                                <th>Laptop Name</th>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Catagory</th>
                                <th>Battery Capacity</th>
                                <th>Processor</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        
                       <tbody>
                       
                        
                        
                        {products.map((product,index)=>{
                            return <tr key={index}>

                                <td>{product.LaptopNames}</td>
                                <td>{product.Brand}</td>
                                <td>{product.Model}</td>
                                <td>{product.Catagory}</td>
                                <td>{product.BatteryCapacity}</td>
                                <td>{product.Processor}</td>
                                <td>{product.Price}</td>

                            </tr>
                        })}
                        </tbody> 
                            
                        
                    </table>
                </div>
            </div>
        </div>
        
        
        </div>


    )
}
export default Products;