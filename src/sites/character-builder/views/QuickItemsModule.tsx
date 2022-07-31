import React from 'react'
import {DataGrid, GridColDef} from '@mui/x-data-grid'



const QuickItemsModule = ({
    character
}) => {

    const rows = [
        {id: 1, gum: 2},
        {id: 2, gum: "Threat"}
    ];
    const columns: GridColDef[] = [
        {field: "id", headerName: "ID", width: 70},
        {field: "gum", headerName: "ID2"}
    ]

    return (
        <div className="b-QuickItemsModule">
            <div className="b-QuickItemsTable">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowsPerPageOptions={[5]}
                    pageSize={1}
                    
                />
            </div>
        </div>
    )
}

export default QuickItemsModule;