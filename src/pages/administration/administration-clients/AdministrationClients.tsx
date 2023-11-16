import React, {useEffect, useState} from "react";
import {AlertFix} from "../../../components/alerts/AlertFix";
import axiosInstance from "../../../services/Interceptor";
import Box from "@mui/material/Box";
import {DataGrid} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import {DialogFicheClient} from "../../../components/dialog/DialogFicheClient";




export const AdministrationClients = () =>{

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>("")

    const [listClients, setListClients] = useState<any>()
    const [rows, setRows] = useState<any>([])

    const [open, setOpen] = React.useState(false);
    const[user, setUser]= useState<any>()

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstname',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastname',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: true,
        },
        {
            field: 'birthday',
            headerName: 'Birthday',
            width: 150,
            editable: true,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 150,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 180,
            sortable: false,
            disableClickEventBubbling: true,

            renderCell: (params:any) => {
                const onClick = (e:any) => {
                    setUser(params.row)
                    setOpen(true);
                    // setUser(JSON.stringify(currentRow, null, 4))
                };

                return (
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="primary" size="small" onClick={onClick}><CreateIcon/></Button>
                    </Stack>
                );
            },
        }
    ];



    async function getClients() {
        try {
            const response = await axiosInstance.get('user/');
            setListClients(response.data);
            setRows(response.data)
        } catch (error) {
            setError(true);
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Une erreur inattendue est survenue");
            }
        }
    }

    useEffect(() => {
        getClients();
    }, []);

    return(
        <>
            {error && <AlertFix children={errorMessage}/>}
            {open && <DialogFicheClient open={open} handleClose={handleClose} user={user}/>}
            <Box sx={{ height: '100vh', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 16,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </>
    )
}