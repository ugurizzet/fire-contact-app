 import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
 import { Box, Stack } from '@mui/system'
 import React, { useState } from 'react'
import { AddUser } from '../../utils/functions';

 const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    AddUser(name , phone , gender)
  }
  return (
     <Grid>
       <div>
         <a href='https://github.com/ugurizzet/fire-contact-app'>
           <code>{'<Anka/>'}</code>
         </a>
         <h2>design</h2>
       </div>
       <div>
         <h1>Add Contact</h1>
       </div>
       <Box>
         <form onSubmit={handleSubmit}>
           <Stack>
             <TextField 
              variant='outlined'
              name='username'
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
             />
             <TextField 
              variant='outlined'
              name='Phone'
              placeholder='+90 555 123 1234'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
             />
             <Select
              onChange={(e) => setGender(e.target.value)}
              value={gender}
             >
              <MenuItem value='Female'>Female</MenuItem>
              <MenuItem value='Male'>Male</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
             </Select>
             <Button type='submit'>Submit</Button>

           </Stack>
         </form>
       </Box>

     </Grid>
   )
 }

 export default Form
