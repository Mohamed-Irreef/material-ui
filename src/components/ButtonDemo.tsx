import React, { useState } from "react";
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

const ButtonDemo = () => {
    const [format,setFormat]=useState<string>('');
    function formatHandler(e:React.MouseEvent,value:string){
        setFormat(value);
    }
    console.log(format);
  return (
    <div>
      <Stack spacing={4} direction={"column"}>
        <Stack spacing={2} direction={"row"}>
          <Button variant="text">Submit</Button>
          <Button variant="contained">Submit</Button>
          <Button variant="outlined">Submit</Button>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
          <Button variant="contained" color="info">
            Submit
          </Button>
          <Button variant="contained" color="warning">
            Submit
          </Button>
          <Button variant="contained" color="error">
            Submit
          </Button>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <Button variant="text" color="primary">
            Submit
          </Button>
          <Button variant="text" color="secondary">
            Submit
          </Button>
          <Button variant="text" color="info">
            Submit
          </Button>
          <Button variant="text" color="warning">
            Submit
          </Button>
          <Button variant="text" color="error">
            Submit
          </Button>
          <Button variant="text" color="success">
            Submit
          </Button>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <Button variant="outlined" color="primary">
            Submit
          </Button>
          <Button variant="outlined" color="secondary">
            Submit
          </Button>
          <Button variant="outlined" color="info">
            Submit
          </Button>
          <Button variant="outlined" color="warning">
            Submit
          </Button>
          <Button variant="outlined" color="error">
            Submit
          </Button>
          <Button variant="outlined" color="success">
            Submit
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction={"row"}>
          <Button variant="contained" size="small">
            Submit
          </Button>
          <Button variant="contained" size="medium">
            Submit
          </Button>
          <Button variant="contained" size="large">
            Submit
          </Button>
        </Stack>

        <Stack display="block" spacing={2} direction={"row"}>
          <Button variant="contained" size="small" endIcon={<SendIcon />}>
            Submit
          </Button>
          <Button variant="contained" size="large" startIcon={<SendIcon />}>
            Submit
          </Button>

          <IconButton
            color="success"
            aria-label="send"
            onClick={() => alert("Sent Successfully...")}
          >
            <SendIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <ButtonGroup variant="contained">
            <Button>Submit</Button>
            <Button>Submit</Button>
            <Button>Submit</Button>
          </ButtonGroup>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <ButtonGroup variant="outlined">
            <Button>Submit</Button>
            <Button>Submit</Button>
            <Button>Submit</Button>
          </ButtonGroup>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <ButtonGroup variant="outlined" orientation="vertical">
            <Button>Submit</Button>
            <Button>Submit</Button>
            <Button>Submit</Button>
          </ButtonGroup>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <ButtonGroup variant="text">
            <Button>Submit</Button>
            <Button>Submit</Button>
            <Button>Submit</Button>
          </ButtonGroup>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <ToggleButtonGroup value={format} onChange={formatHandler} exclusive>
            <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value='underline'><FormatUnderlinedIcon/></ToggleButton>
            <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
          </ToggleButtonGroup>
        </Stack>

      </Stack>
    </div>
  );
};

export default ButtonDemo;
