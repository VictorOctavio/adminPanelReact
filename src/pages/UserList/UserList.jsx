import React, {useState} from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";

import {DeleteForeverOutlined, EditOutlined} from '@material-ui/icons'
import { Link } from "react-router-dom";
import { userRows } from "../../dummyData";

export default function UserList() {

    const [data, setData] = useState(userRows);

    const daleteUser = (id) => {
        setData(data.filter(item => item.id !== id));
    }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {field: "username", headerName: "User",width: 200 , renderCell: (params) => {
        return(
            <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
        )
    }},
    {field: "email", headerName: "Email",width: 200},
    {field: "status", headerName: "Status",width: 120},
    {field: "transaction", headerName: "Transaction",width: 160},
    {field: "action", headerName: "Action",width: 150, renderCell: (params) => {
        return(
            <>
            <Link to={`/user/${params.row.id}`}>
                <button className="userListEdit" title={`editar ${params.row.username}`}>
                    <EditOutlined/>
                </button>
            </Link>
                <button className="userListDelete" title={`eliminar ${params.row.username}`}
                    onClick={() => daleteUser(params.row.id)}
                >
                    <DeleteForeverOutlined/>
                </button>
            </>
        )
    }}
  ];



  return (
    <div className="userList">
      <div style={{ height: 400, width: "100%" }}>
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
  );
}
