import React from 'react';
import { Box,  styled,  Typography } from "@mui/material"

import DeleteIcon from '@mui/icons-material/Delete';

const Container = styled(Box)((theme) => ({
  marginTop: '4vh',
  width: '35vw',
}))
const Container2 = styled(Box)((theme) => ({
width:'35vw',
height:'8vh',
background:'#6883BC',
display:'flex',
justifyContent: 'space-between', 
alignItems: 'center',
marginBottom: '10px'
}))



const Items = ({ listData  , onDeleteItem}) => {
    const handleDelete = (index) => {
        onDeleteItem(index); 
      };

  return (
    <Container>
     
           
              {listData.map((item, index) => (
             <Container2>
             <Typography key={index}>{item}</Typography>
             <DeleteIcon style={{cursor:'pointer'}} onClick={()=>handleDelete(index)} />
             </Container2>
             ))}
        
    </Container>
  )
}

export default Items;