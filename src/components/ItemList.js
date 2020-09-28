import React, {useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function ItemList() {

    const [itemList,setItemList] = useState([]);

    const listItems = async ()=> {
        const list = await fetch('http://localhost:5000/stock');
        setItemList( await list.json() );
    }

    useEffect(()=>{
        listItems();
    },[]);

  return (
    <React.Fragment>
      <h1>Estoque</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemList.map((item) => (
            <TableRow key={item.item_id}>
              <TableCell>{item.item_id}</TableCell>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.item_quantity}</TableCell>
              <TableCell>{item.item_value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}