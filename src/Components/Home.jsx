import { Box, styled, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Items from './Item';



const Container1 = styled(Box)((theme) => ({
  background: '#8AAAE5',
  width: '98vw',
  height: '100vh',
  position: 'fixed',
}));
const Container2 = styled(Box)((theme) => ({
  background: '#fff',
  width: '37.9vw',
  height: '80vh',
  marginLeft: '60vh',
  marginTop: '10vh',
  position: 'fixed',
 
}));

const Heading = styled(Typography)((theme) => ({
  fontSize: '30px',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '2vh',
}));
const Container3 = styled(Box)((theme) => ({
  marginTop: '5vh',
  marginLeft: '3vh',
}));

const Header = styled(Box)((theme) => ({
  display: 'flex',
  gap: '5vh',
}));

const InputField = styled(TextField)((theme) => ({
  width: '50vh',
  height: '7.4vh',
  background: '#6883BC',
}));

const Buttons = styled(Button)((theme) => ({
  width: '15vh',
  height:'8vh',
  marginLeft:'5vh',
  background: '#6883BC',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '5vh',
  ':hover': {
    background: '#79A7D3',
    color: '#fff',
  },
}));

const Home = () => {
  const [input, setInput] = useState('');
  const [listData , setlistData] = useState([]);

  function addItem(){
   setlistData((listData)=>{
    const updatedList = [...listData , input];
    setInput('')
    return updatedList;
   })
  }

  

  const handleDeleteItem = (index) => {
    const updatedList = [...listData];
    updatedList.splice(index, 1);
    setlistData(updatedList);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   addItem()

  };

  return (
    <Container1>
      <Container2>
        <Heading>TO-DO-LIST</Heading>
        <Container3>
          <Header>
            <form onSubmit={handleSubmit}>
              <InputField
                placeholder='Add a todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Buttons type='submit' >Add</Buttons>
            </form>
          </Header>
          
          <Items listData={listData} onDeleteItem = {handleDeleteItem} />
          
        </Container3>
      </Container2>
    </Container1>
  );
};

export default Home;