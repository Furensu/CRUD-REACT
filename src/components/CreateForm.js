import React from 'react';
import { Container, Typography, Grid, TextField, Button,useReducer} from '@material-ui/core';

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
                    fullWidth 
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="item_quantity"
                    label="Quantidade disponivel em estoque"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField 
                    required 
                    id="item_value" 
                    label="Valor unitario do item" 
                    fullWidth
                />
            </Grid>
            <Grid >
                <Button variant="contained" color='secondary' onClick={()=>toggled()} >Criar Item</Button>
            </Grid>
        </Grid>
        
    </Container>
);

}

export default CreateForm;