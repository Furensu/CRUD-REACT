import React from 'react';
import { Container, Typography, Grid, TextField} from '@material-ui/core';

const UpdateForm = ({ toggled }) => (
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
        </Grid>

    </Container>
);

export default UpdateForm;