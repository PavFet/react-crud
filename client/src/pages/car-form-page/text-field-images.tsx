import { Button, TextField } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const TextFieldImages = () => (
  <TextField
    label="Image link"
    variant="filled"
    sx={{ width: 1 }}
    InputProps={{
      endAdornment: (
        <Button>
          <RemoveCircleOutlineIcon color="error" />
        </Button>
      ),
    }}
  />
);

export default TextFieldImages;
