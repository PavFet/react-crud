import {
  Button, IconButton, Stack, TextField,
} from '@mui/material';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import uniqid from 'uniqid';

const initImagesIds: string[] = [uniqid()];

const ImagesField = () => {
  const [imagesIds, setImagesIds] = React.useState<string[]>(initImagesIds);

  const addImageField = () => setImagesIds([...imagesIds, uniqid()]);
  const removeImageField = (id: string) => setImagesIds(imagesIds.filter((imgId) => imgId !== id));
  return (
    <Stack sx={{ gap: 2 }}>
      {imagesIds.map((id) => (
        <TextField
          required
          key={id}
          name="images"
          label="Image link"
          variant="filled"
          fullWidth
          InputProps={imagesIds.length > 1 ? {
            endAdornment: (
              <Button onClick={() => removeImageField(id)}>
                <RemoveCircleOutlineIcon color="error" />
              </Button>
            ),
          } : undefined}
        />
      ))}
      <IconButton color="success" sx={{ justifyContent: 'flex-start', width: 30 }} onClick={addImageField}>
        <AddCircleOutlineIcon />
      </IconButton>
    </Stack>
  );
};

export default ImagesField;
