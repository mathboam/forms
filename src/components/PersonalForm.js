import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Checkbox from "@material-ui/core/Checkbox";

export default function PersonalForm(props) {
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

  const handleMaleClick = (event) => {
    if (femaleChecked) {
      setFemaleChecked(!event.target.checked);
      setMaleChecked(event.target.checked);
      props.setGender("male");
    } else {
      setMaleChecked(event.target.checked);
      props.setGender("male");
    }
  };
  const handleFemaleClick = (event) => {
    if (maleChecked) {
      setMaleChecked(!event.target.checked);
      setFemaleChecked(event.target.checked);
      props.setGender("female");
    } else {
      setFemaleChecked(event.target.checked);
      props.setGender("female");
    }
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="trainer_name"
            name="trainer_name"
            label="Name of skilled craft"
            fullWidth
            onChange={(e) => props.setName(e.target.value)}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{}}>
            <label>Gender</label>
            <Checkbox
              checked={maleChecked}
              onChange={handleMaleClick}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Male
            <Checkbox
              checked={femaleChecked}
              onChange={handleFemaleClick}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Female
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contact_number"
            name="contact_number"
            label="Contact number"
            fullWidth
            onChange={(e) => props.setTelephone(e.target.value)}
            autoComplete="contact_number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="postal_address"
            name="postal_address"
            label="Ghana Postal Digital Address"
            onChange={(e) => props.setDigitalAddress(e.target.value)}
            fullWidth
            type={"number"}
            autoComplete="postal_address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email address"
            fullWidth
            autoComplete="email"
            onChange={(e) => props.setEmail(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
