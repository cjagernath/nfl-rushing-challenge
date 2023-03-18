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
  Input,
  Button,
} from '@chakra-ui/react'


function App() {
  const playerList = [];
  const [sortedList, setSortedList] = useState([]);
  const [input, setInput] = useState("");
  

  useEffect(()=>{

    if (data.length > 0){
      data.map(player => (
        playerList.push(player)
      ))
    }
    setSortedList(playerList);

  },[])
  


  //should be able to sort by total rushing yards, longest rushing yards, and total touch downs
  function TotalRushingYardsSort(){
    const newList = sortedList.sort((a,b)=>{
      if(a.Yds > b.Yds){
        return -1;
      }
      if(a.Yds < b.Yds){
        return 1;
      }
      return 0;
    })
    setSortedList([...newList]);
  }

  function LongestRushingYardsSort(){
    const newList = sortedList.sort((a,b)=>{
      if(a.Lng > b.Lng){
        return -1;
      }
      if(a.Lng < b.Lng){
        return 1;
      }
      return 0;
    })
    setSortedList([...newList]);
  }

  function TouchdownsSort(){
    const newList = sortedList.sort((a,b)=>{
      if(a.TD > b.TD){
        return -1;
      }
      if(a.TD < b.TD){
        return 1;
      }
      return 0;
    })
    setSortedList([...newList]);
  }

  function FilterByName(){
    const newList = [];
    sortedList.map(player=>(
      (player.Player.includes(input) ? (newList.push(player)) : null)
    ))
    setSortedList([...newList]);
    console.log(sortedList);
  }

  return (
    <div className="App">
    <strong>NFL RUSH</strong>
    <form onSubmit={FilterByName}>
        <Input placeholder='Search By Name: ' htmlSize={20} width='auto' onChange={(e)=>setInput(e.target.value)}/>
        <Button type="submit" >Submit</Button>
    </form>
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
      <TableCaption>NFL RUSH</TableCaption>
      <Thead>
        <Tr>
          <Th>Player</Th>
          <Th>Team</Th>
          <Th>Pos</Th>
          <Th>Att</Th>
          <Th>Att/G</Th>
          <Th>
            <button onClick={TotalRushingYardsSort}> ↓ </button>Yds
          </Th>
          <Th>Avg</Th>
          <Th>Yds/G</Th>
          <Th>
            <button onClick={TouchdownsSort}> ↓ </button>TD
          </Th>
          <Th>
            <button onClick={LongestRushingYardsSort}> ↓ </button>Lng
          </Th>
          <Th>1st</Th>
          <Th>1st%</Th>
          <Th>20+</Th>
          <Th>40+</Th>
          <Th>FUM</Th>
        </Tr>
      </Thead>
      <Tbody>
        
          {sortedList.map(player=>(
          <Tr key={player.id}>
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
          <Th>Player</Th>
          <Th>Team</Th>
          <Th>Pos</Th>
          <Th>Att</Th>
          <Th>Att/G</Th>
          <Th>Yds</Th>
          <Th>Avg</Th>
          <Th>Yds/G</Th>
          <Th>TD</Th>
          <Th>Lng</Th>
          <Th>1st</Th>
          <Th>1st%</Th>
          <Th>20+</Th>
          <Th>40+</Th>
          <Th>FUM</Th>
        </Tr>
      </Tfoot>
    </Table>
    </TableContainer>
    </div>
  );
}

export default App;
