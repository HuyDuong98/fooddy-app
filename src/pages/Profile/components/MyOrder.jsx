import React from 'react';
import { Box, Chip, Typography } from "@material-ui/core";
import CustomDataGrid from '../../../components/CustomDataGrid';
import { ShoppingCart } from "@material-ui/icons";
import Style from '../../../style/components/MyOrder.module.scss'

export default function MyOrder(params) {
    const STATUS_PENDING = "Pending"
    const STATUS_PROCESSING = "Processing"
    const STATUS_DELIVERED = "Delivered"
    const STATUS_CANCELLED = "Cancelled"

    const checkStyleStatus = ({ status }) => {
        let style = ""
        if (status === STATUS_PENDING) style = Style.pending
        if (status === STATUS_PROCESSING) style = Style.processing
        if (status === STATUS_DELIVERED) style = Style.delivered
        if (status === STATUS_CANCELLED) style = Style.cancelled
        console.log(style)
        return style
    }

    const columns = [
        {
            field: "order",
            headerName: "Order #",
            flex: 1,
            renderCell: (props) => {
                return (
                    <Typography className={Style.textOrder}>{props.row.order}</Typography>
                )
            }
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            renderCell: (props) => {
                return (
                    <Chip label={props.row.status} size="small" className={checkStyleStatus(props.row)} />
                )
            }
        },
        {
            field: "datePurchased",
            headerName: "Date purchased",
            flex: 1
        },
        {
            field: "total",
            headerName: "Total",
            flex: 1
        },
    ]

    const rows = [
        { id: "0", order: "1050017AS", status: 'pending', datePurchased: 'Sep 05, 2021', total: '$350.00' },
        { id: "1", order: "1050017AA", status: 'Pending', datePurchased: 'Sep 05, 2021', total: '$350.00' },
        { id: "2", order: "1050017AB", status: 'Processing', datePurchased: 'Sep 05, 2021', total: '$350.00' },
        { id: "3", order: "1050017AC", status: 'Processing', datePurchased: 'Sep 05, 2021', total: '$350.00' },
        { id: "4", order: "1050017AD", status: 'Delivered', datePurchased: 'Sep 05, 2021', total: '$350.00' },
        { id: "5", order: "1050017AE", status: 'Delivered', datePurchased: 'Sep 05, 2021', total: '$350.00' },
        { id: "6", order: "1050017AF", status: 'Cancelled', datePurchased: 'Sep 05, 2021', total: '$350.00' },
        { id: "7", order: "1050017AG", status: 'Pending', datePurchased: 'Sep 05, 2021', total: '$350.00' },
        { id: "8", order: "1050017AJ", status: 'Processing', datePurchased: 'Sep 05, 2021', total: '$350.00' },
    ]

    return (
        <>
            <Box className={Style.header}>
                <ShoppingCart />
                <Typography variant="h2">My Orders</Typography>

            </Box>
            <CustomDataGrid
                rows={rows}
                columns={columns}
                autoHeight={true} />
        </>
    )
};
