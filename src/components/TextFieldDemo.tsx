import React, { useState } from 'react'
import { InputAdornment, Stack, TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';

const TextFieldDemo = () => {
    const[password,setPassword]=useState<string|number|symbol>();
  return (
    <div>
        <Stack spacing={4} direction='column'>
            <Stack spacing={2} direction={'row'}>
                <TextField label='Name' variant='outlined' ></TextField>
                <TextField label='Name' variant='filled'></TextField>
                <TextField label='Name' variant='standard' color='secondary'></TextField>
            </Stack>

            <Stack spacing={2} direction={'row'}>
                <TextField label='Name' variant='outlined' size='small' required></TextField>
                <TextField label='Name' variant='outlined' size='medium' required ></TextField>

                <TextField label='password' variant='outlined' type='password' helperText='Do not share your password with anyone' required></TextField>
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField label='form input' variant='outlined' disabled></TextField>
                <TextField label='form input' variant='outlined' InputProps={{readOnly:true}}></TextField>
            </Stack>

            <Stack spacing={2} direction='row'>
                <TextField label='Weight' variant='outlined' InputProps={{endAdornment:<InputAdornment position='end'>Kg</InputAdornment>}}></TextField>
                <TextField label='Fees' variant='outlined' InputProps={{startAdornment:<InputAdornment position='start'>Rs.</InputAdornment>}}></TextField>
                <TextField label='password'  onChange={(e)=>setPassword(e.target.value)} error={!password} type='password' helperText={!password?`required`:`password should contains [A-Z,a-z,1-9,@$]`} InputProps={{endAdornment:<InputAdornment position='end'><VisibilityIcon/></InputAdornment>}} required></TextField>
            </Stack>
        </Stack>
    </div>
  )
}

export default TextFieldDemo