import React, {Fragment, useState, useEffect} from 'react';
import {Table, TableBody, TableCell,TableHead, TableRow, Button, ButtonGroup} from '@material-ui/core'
import UpdateForm from './UpdateForm';

export default function ItemList() {
    
    const [toggleUpdate,setToggleUpdate] = useState(false);
    const [currentKey,setCurrentKey] = useState(0);
    const [itemList,setItemList] = useState([]);


    const updtClick =(key = 0) => {
      setCurrentKey(0);
      setCurrentKey(key);
      setToggleUpdate(!toggleUpdate);
    }
    const updtClrClick =() => {
      setCurrentKey(0);      
      setToggleUpdate(!toggleUpdate);
      listItems();
    }

    const listItems = async ()=> {
        const list = await fetch('http://localhost:5000/stock');
        setItemList( await list.json() );
    }

    useEffect(()=>{
        listItems();
    },[]);

  return (
    <Fragment>
      <h1>Estoque</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemList.map((item) => (
            <TableRow key={item.item_id}>
              <TableCell>{item.item_id}</TableCell>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.item_quantity}</TableCell>
              <TableCell>{item.item_value}</TableCell>
              <TableCell>
                <ButtonGroup color="secondary" size="small" >
                  <Button onClick={()=>{updtClick(item.item_id)}}>Editar</Button>
                  <Button>Excluir</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {toggleUpdate && <UpdateForm uId={currentKey} toggled={updtClrClick} />}    
    </Fragment>
  );
}