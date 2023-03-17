import './App.css';
//import { useState, useEffect } from 'react';
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
      playerList.push(player)
    ))
  }

  return (
    <div className="App">
    <strong>NFL RUSH</strong>
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
      <TableCaption>NFL RUSH</TableCaption>
      <Thead>
        <Tr>
          {columns.map(column=>(
          <Th>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        
          {playerList.map(player=>(
          <Tr>
            <Td>{player.Player}</Td>
            <Td>{player.Team}</Td>
            <Td>{player.Pos}</Td>
            <Td>{player.Att}</Td>
            <Td>{player['Att/G']}</Td>
            <Td>{player.Yds}</Td>
            <Td>{player.Avg}</Td>
            <Td>{player['Yds/G']}</Td>
            <Td>{player.TD}</Td>
            <Td>{player.Lng}</Td>
            <Td>{player['1st']}</Td>
            <Td>{player['1st%']}</Td>
            <Td>{player['20+']}</Td>
            <Td>{player['40+']}</Td>
            <Td>{player.FUM}</Td>
          </Tr>
          ))}

      </Tbody>
      <Tfoot>
        <Tr>
          {columns.map(column=>(
          <Th>{column}</Th>
          ))}
        </Tr>
      </Tfoot>
    </Table>
    </TableContainer>
    </div>
  );
}

export default App;
