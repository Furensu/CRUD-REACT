import React, {useReducer} from 'react';
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

const CreateForm = ({ toggled }) => {

    const [RequestForm, setRequestForm] = useReducer(reducer, initialForm);

    const submitItem = async () =>{
        console.log(RequestForm);
        // eslint-disable-next-line
        const item = await fetch('http://localhost:5000/stock', {
            method:"POST",
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
                    required
                    id="item_name" 
                    label="Nome do produto"
                    onChange={(e)=>{let value = e.target.value ;setRequestForm({type:"item_name",  value }) } }
                    fullWidth 
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="item_quantity"
                    label="Quantidade disponivel em estoque"
                    onChange={(e)=>{let value = parseInt(e.target.value) ;setRequestForm({type:"item_quantity", value }) } }
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField 
                    required 
                    id="item_value" 
                    label="Valor unitario do item" 
                    onChange={(e)=>{let value = parseFloat(e.target.value) ;setRequestForm({type:"item_value",  value }) } }
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={6} >
                <Button variant="contained" color='secondary' onClick={()=>submitItem()} >Criar Item</Button>
            </Grid>
        </Grid>
        
    </Container>
);

}

export default CreateForm;