import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Table} from 'evergreen-ui';

const UserList = () => {
    const [data,setData]=useState([]);
    // useEffect
    useEffect(()=> {
        axios.get('https://60a77b643b1e130017176384.mockapi.io/api/appel').then((response)=>{
        setData(response.data);
        })
},[] );

    return (
        <div class="container ">
            <div  class="row"> <h1>Liste  des Utilisateurs via API</h1></div>
            <div class="row">
<Table className="table  table-bordered shadow-lg p-3 mb-5 bg-body rounded" >

           
<Table.Head>
<Table.SearchHeaderCell />
<Table.TextHeaderCell > Nom</Table.TextHeaderCell>
<Table.TextHeaderCell > Email</Table.TextHeaderCell>
<Table.TextHeaderCell >Adresse </Table.TextHeaderCell>

    </Table.Head>
    <Table.Body height={440}>
       
   {data.map(item=>( <Table.Row>
 <Table.TextCell key={item.id}>{item.id} </Table.TextCell>
 <Table.TextCell>{item.name}</Table.TextCell>
 <Table.TextCell>{item.ligne08}</Table.TextCell>
 <Table.TextCell>{item.ligne09}</Table.TextCell> 
      
 </Table.Row>
    ))}
            
            
</Table.Body>
            </Table>
            </div>
        </div>
    )
}

export default UserList;

