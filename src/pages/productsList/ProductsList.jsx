import React, { useState } from 'react'
import './productsList.css'
import { DataGrid } from "@material-ui/data-grid";

import {DeleteForeverOutlined, EditOutlined} from '@material-ui/icons'
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";

export default function ProductsList() {

    const [data, setData] = useState(productRows)

    const daleteProduct = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {field: "name", headerName: "Product", width: 400 , renderCell: (params) => {
            return(
                <div className="productListProduct">
                    <img className="productListImg" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
            )
        }},
        {field: "stock", headerName: "Stock",width: 200},
        {field: "status", headerName: "Status",width: 120},
        {field: "price", headerName: "Price",width: 160},
        {field: "action", headerName: "Action",width: 150, renderCell: (params) => {
            return(
                <>
                <Link to={`/product/${params.row.id}`}>
                    <button className="productListEdit" title={`editar ${params.row.name}`}>
                        <EditOutlined/>
                    </button>
                </Link>
                    <button className="productListDelete" title={`eliminar ${params.row.name}`}
                        onClick={() => daleteProduct(params.row.id)}
                    >
                        <DeleteForeverOutlined/>
                    </button>
                </>
            )
        }}
      ];

    return (
        <div className="ProductsList">
             <div style={{ height: "85vh", width: "100%" }}>
                <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                />
            </div>             
        </div>
    )
}
