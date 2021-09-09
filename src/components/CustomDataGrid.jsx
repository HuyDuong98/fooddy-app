import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core';

const useDataGridStyles = makeStyles({
    root: {
        padding: 0,
        background:"white",
    },
})

export default function CustomDataGrid(props) {
    const dataGridStyle = useDataGridStyles()
    let { columns, rows, autoHeight } = props
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            classes={dataGridStyle}
            autoHeight={autoHeight}
            isRowSelectable={false}
        />
    )
};
