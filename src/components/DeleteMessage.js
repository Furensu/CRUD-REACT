import React from 'react';
import {  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

const DeleteMessage = ( {uId, uName, toggled,clear}) => {

    const deleteItem = async ()=> {
        // eslint-disable-next-line
        const curItem = await fetch(`http://localhost:5000/stock/${uId}`, {
            method:"delete"
        });
        clear();
    }
    
   
    return (
        <Dialog
            open={toggled}
        >
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Você tem certeza que deseja excluir o item {uName} de id {uId}?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>clear()} color="primary">
                    Cancelar
                </Button>
                <Button onClick={() => deleteItem()} color="secondary" autoFocus>
                    Confirmar
                </Button>
            </DialogActions>

        </Dialog>
    );

}

export default DeleteMessage;