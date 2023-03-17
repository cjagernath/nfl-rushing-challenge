import './App.css';
import { useState, useEffect } from 'react';
import { data } from './data.js';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


function App() {
  const columns = []
  const playerList = []

  if (data.length > 0){
    var columnsIn = data[0];
    for(var key in columnsIn){
      columns.push(key)
    }
  }

  if (data.length > 0){
    data.map(player => (
      playerList.push(player.Player)
    ))
  }

  
  
    
  return (
    <div className="App">
    <h1>NFL RUSH</h1>
    <Table>
      {columns.map(column=>(
        <Th>{column}</Th>
      ))}
      {playerList.map(player=>(
        <Tr>{player}</Tr>
      ))}
    </Table>
    </div>
  );
}

export default App;
