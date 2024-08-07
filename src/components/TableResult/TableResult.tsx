import {FC, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {ItemRepType} from "../../api/api";

type TableResultProps = {
    items:ItemRepType[],
    setActiveRow:(value:ItemRepType)=>void
}
const TableResult:FC<TableResultProps> = ({items,setActiveRow})=>{

//колонки для таблицы
    const columns = [
        {
            field: 'name',
            headerName: 'Название',
            sortable: false,
            flex:0.2,

        },
        {
            field: 'language',
            headerName: 'Язык',
            sortable: false,
            resizable: false,
            flex:0.2,

        },
        {
            field: 'forks_count',
            headerName: 'Число форков',
            resizable: false,
            flex:0.2,

        },
        {
            field: 'stargazers_count',
            headerName: 'Число звёзд',
            resizable: false,
            flex:0.2,

        },
        {
            field: 'updated_at',
            headerName: 'Дата обновления',
            resizable: false,
            flex:0.2,
        },
    ];

    return (
        <DataGrid style={{height:'calc(100vh - 200px'}} rows={items} columns={columns} disableColumnMenu={true}
                  initialState={{
                      pagination: { paginationModel: { pageSize: 5 } }
                  }}
                  pageSizeOptions={[5, 10, 15]}
                onRowClick={(value)=>{setActiveRow(value.row)}}
        />
    )
}

export default TableResult