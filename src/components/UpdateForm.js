import React, {useReducer,useState, useEffect} from 'react';
import { Container, Typography, Grid, TextField, Button} from '@material-ui/core';

const initialForm = {
    'item_name': '',
    'item_quantity': 0,
    'item_value': 0.00,
};

const reducer = (state, action) => {
    switch (action.type) {
    default:
        return { ...state, [action.type]: action.value };
    }
};
const UpdateForm = ( {uId, toggled}) => {

    const getItem = async ()=> {
        const curItem = await fetch(`http://localhost:5000/stock/${uId}`);
        const [item] = await curItem.json();
        setRequestForm({type:"item_name", value: item.item_name})
        setRequestForm({type:"item_quantity", value: item.item_quantity})
        setRequestForm({type:"item_value", value: item.item_value})
    }
    
    useEffect(()=>{
        getItem();
        
    },[]);

    const [RequestForm, setRequestForm] = useReducer(reducer, initialForm);

    const submitItem = async () =>{
        // eslint-disable-next-line
        const item = await fetch(`http://localhost:5000/stock/${uId}`, {
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body: JSON.stringify(RequestForm)
        });
        toggled();
    }
    
    return (
    <Container >
        
        <Typography variant="h6" gutterBottom>
            Criar item
        </Typography>
            <Grid container spacing={3}>
            
                <Grid item xs={12} md={6}>
                    <TextField 
                        value={RequestForm.item_name}
                        //defaultValue={RequestForm.item_name}
                        required
                        id="item_name" 
                        label="Nome do produto"
                        onChange={(e)=>{let value = e.target.value ;setRequestForm({type:"item_name",  value}) } }
                        fullWidth 
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        value={RequestForm.item_quantity}
                        //defaultValue={RequestForm.item_quantity}
                        required
                        id="item_quantity"
                        label="Quantidade disponivel em estoque"
                        onChange={(e)=>{let value = parseInt(e.target.value ? e.target.value : 0 ) ; setRequestForm({type:"item_quantity", value }) } }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        value={RequestForm.item_value}
                        //defaultValue={RequestForm.item_value}
                        required 
                        id="item_value" 
                        label="Valor unitario do item" 
                        onChange={(e)=>{let value = parseFloat(e.target.value ? e.target.value : 0) ;setRequestForm({type:"item_value",  value }) } }
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Container>
                        <Button variant="contained" color='secondary' onClick={()=>submitItem()} >Atualizar Item</Button>
                      
                        <Button variant="contained" color='primary' onClick={()=>toggled()} >Cancelar</Button>
                    </Container>
                </Grid>
            </Grid>
        
    </Container>
);

}

export default UpdateForm;