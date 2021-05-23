import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  withStyles,
} from "@material-ui/core";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

export default function ContactUs() {
  const [state, setstate] = useState({
    data: { fullName: "", email: "", message: "" },
    errors: {},
  });

  //handle on change
  const handleOnChange = ({ target }) => {
    const { data } = state;
    data[target.name] = target.value;
    setstate({ data });
    console.log("name", target.name, "value", target.value);
  };

  return (
    <Paper component={Container} maxWidth='lg'>
      <Grid container justify='center' alignContent='center'>
        {/* name,email,message,button  */}
        <Grid item xs={12} sm={8}>
          <Box mb={2}>
            {renderTextField({
              label: "Full Name",
              name: "fullName",
              state: state,
              onChange: handleOnChange,
            })}
          </Box>
          <Box mb={2}>
            {renderTextField({
              label: "Email@example.com",
              name: "email",
              state: state,
              onChange: handleOnChange,
            })}
          </Box>
          <Box mb={2}>
            {renderTextArea({
              label: "Your Message To Us",
              name: "message",
              state: state,
              onChange: handleOnChange,
            })}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export const renderTextField = ({ label, name, state, onChange }) => (
  <ValidationTextField
    variant='outlined'
    size='small'
    fullWidth={true}
    label={label}
    name={name}
    value={state.data[name]}
    error={state.data[name]}
    onChange={onChange}
  />
);

export const renderTextArea = ({ label, name, state, onChange }) => (
  <TextField
    id={name}
    variant='outlined'
    fullWidth='true'
    label={label}
    name={name}
    multiline
    rowsMax={8}
    value={state.data[name]}
    error={state.data[name]}
    onChange={onChange}
  />
);
