import React from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

export default function TrainForm(props) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{}}>
            <label style={{ fontWeight: "bold" }}>
              Have you trained apprentices before?
            </label>
            <Checkbox
              checked={props.trained_apprentice}
              onChange={(e) => props.setTrainedApprentice(e.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            yes
            <Checkbox
              checked={!props.trained_apprentice ? true : false}
              onChange={(event) =>
                props.setTrainedApprentice(!event.target.checked)
              }
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            No
          </div>
        </Grid>
        {!props.trained_apprentice ? (
          <Grid item xs={12}>
            <div style={{}}>
              <label style={{ fontWeight: "bold" }}>
                Would you want to receive support from NBSSI?
              </label>
              <Checkbox
                checked={props.want_train_apprentice}
                onChange={(e) => props.setWantTrain(e.target.checked)}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              yes
              <Checkbox
                checked={!props.want_train_apprentice ? true : false}
                onChange={(event) => props.setWantTrain(!event.target.checked)}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              No
            </div>
          </Grid>
        ) : (
          <p> </p>
        )}
        {props.want_train_apprentice ? (
          <Grid item xs={12}>
            <TextField
              required
              id="num_of_apprentices"
              label="How many apprentices can u take on at a time?"
              fullWidth
              onChange={(event) => props.setNoApprentices(event.target.value)}
              type={"number"}
              autoComplete="num_of_apprentices"
            />
          </Grid>
        ) : (
          <p> </p>
        )}
        {props.want_train_apprentice ? (
          <Grid item xs={12}>
            <TextField
              required
              id="support_des"
              label="What additional support would you need from NBBSI to be able to train apprentices?"
              fullWidth
              onChange={(event) =>
                props.setAdditionalSupport(event.target.value)
              }
              multiline
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              autoComplete="support_des"
            />
          </Grid>
        ) : (
          <p></p>
        )}
        <label
          style={{
            fontWeight: "bold",
            marginBottom: 10,
            textDecoration: "underline",
          }}
        >
          FOR OFFICIAL USE ONLY
        </label>
        <Grid item xs={12}>
          <TextField
            id="support_des"
            label="Please state any other relevant information about the Skilled Craft Person"
            fullWidth
            multiline
            disabled
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            autoComplete="support_des"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="signature"
            name="signature"
            label="Signature of Skilled Person"
            fullWidth
            disabled
            autoComplete="contact_number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <label
            style={{
              fontWeight: "bold",
            }}
          >
            Date
          </label>
          <TextField
            id="date"
            name="date"
            fullWidth
            disabled
            onChange={(event) => props.setCreatedOn(event.target.value)}
            type={"date"}
            autoComplete="date"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name_of_officer"
            name="name_of_officer"
            label="Name of Reporting Officer"
            fullWidth
            disabled
            autoComplete="name_of_officer"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="position"
            name="position"
            label="Position"
            fullWidth
            disabled
            autoComplete="position"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contact"
            name="contact"
            label="Contact"
            fullWidth
            disabled
            type={"number"}
            autoComplete="contact"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="recommendation"
            name="recommendation"
            label="Recommendation"
            disabled
            fullWidth
            autoComplete="recommendation"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
