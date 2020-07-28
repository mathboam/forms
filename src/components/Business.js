import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));

export default function Business(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="business_name"
            onChange={(e) => props.setBusName(e.target.value)}
            label="Business name"
            fullWidth
            autoComplete="business_name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="business_location"
            onChange={(e) => props.setBusinessLocation(e.target.value)}
            label="Business Location"
            fullWidth
            autoComplete="business_location"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TextField
              required
              id="town"
              name="town"
              label="Town"
              fullWidth
              onChange={(e) => props.setTown(e.target.value)}
              autoComplete="contact_number"
            />
          </Grid>
          <Grid item xs={12} className={classes.row}>
            <Grid item xs={12} md={6}>
              <NativeSelect
                className={classes.selectEmpty}
                style={{ marginRight: 5 }}
                name="age"
                onChange={(event) => props.setDistrict(event.target.value)}
                inputProps={{ "aria-label": "district" }}
                fullWidth
              >
                <option value="">District</option>
                <option value={"Akuapim East"}>Akuapim East</option>
                <option value={"Ga East"}>Ga East</option>
                <option value={"Ga West"}>Ga West</option>
              </NativeSelect>
            </Grid>

            <Grid item xs={12} md={6}>
              <NativeSelect
                className={classes.selectEmpty}
                style={{ marginLeft: 5 }}
                name="region"
                onChange={(event) => props.setRegion(event.target.value)}
                inputProps={{ "aria-label": "region" }}
                fullWidth
              >
                <option value="">Region</option>
                <option value={"Upper East"}>Upper East</option>
                <option value={"Upper West"}>Upper West</option>
                <option value={"Ashanti"}>Ashanti</option>
                <option value={"Northern"}>Northern</option>
                <option value={"Western"}>Western</option>
                <option value={"Eastern"}>Eastern</option>
                <option value={"Greater Accra"}>Greater Accra</option>
                <option value={"Central"}>Central</option>
                <option value={"Brong"}>Brong</option>
                <option value={"Ahafo"}>Ahafo</option>
                <option value={"Volta"}>Volta</option>
              </NativeSelect>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div style={{}}>
            <label style={{ fontWeight: "bold" }}>
              Is your business registered ?
            </label>
            <Checkbox
              checked={props.registered}
              onChange={(e) => props.setRegistered(e.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            yes
            <Checkbox
              checked={!props.registered ? true : false}
              onChange={(event) => props.setRegistered(!event.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            No
          </div>
        </Grid>
        {props.registered ? (
          <Grid item xs={12}>
            <TextField
              required
              id="tin_number"
              name="town"
              label="Business registration number"
              fullWidth
              onChange={(event) =>
                props.setRegistrationNumber(event.target.value)
              }
              autoComplete="contact_number"
            />
          </Grid>
        ) : (
          <p></p>
        )}

        <Grid item xs={12}>
          <div style={{}}>
            <label style={{ fontWeight: "bold" }}>
              Do you have a business Tin number?
            </label>
            <Checkbox
              checked={props.has_tin}
              onChange={(e) => props.setHasTin(e.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            yes
            <Checkbox
              checked={!props.has_tin ? true : false}
              onChange={(event) => props.setHasTin(!event.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            No
          </div>
        </Grid>
        {props.has_tin ? (
          <Grid item xs={12}>
            <TextField
              required
              id="tin_number"
              name="town"
              label="Business Tin number"
              fullWidth
              onChange={(e) => props.setTinNo(e.target.value)}
              autoComplete="contact_number"
            />
          </Grid>
        ) : (
          <p></p>
        )}

        <Grid item xs={12}>
          <div style={{}}>
            <label style={{ fontWeight: "bold" }}>
              Are you a member of a trade association in your locality?
            </label>
            <Checkbox
              checked={props.association_member}
              onChange={(e) => props.setAssociation(e.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            yes
            <Checkbox
              checked={!props.association_member ? true : false}
              onChange={(event) => props.setAssociation(!event.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            No
          </div>
        </Grid>

        <Grid item xs={12}>
          <div style={{}}>
            <label style={{ fontWeight: "bold" }}>
              Do you have NVTI certificate?
            </label>
            <Checkbox
              checked={props.nvti_cert}
              onChange={(e) => props.setNvtiCert(e.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            yes
            <Checkbox
              checked={!props.nvti_cert ? true : false}
              onChange={(event) => props.setNvtiCert(!event.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            No
          </div>
        </Grid>

        <Grid item xs={12}>
          <div style={{}}>
            <label style={{ fontWeight: "bold" }}>
              Have you received any support from NBSSI?
            </label>
            <Checkbox
              checked={props.rcvd_nbssi_support}
              onChange={(e) => props.setNbssiSupport(e.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            yes
            <Checkbox
              checked={!props.rcvd_nbssi_support ? true : false}
              onChange={(event) => props.setNbssiSupport(!event.target.checked)}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            No
          </div>
        </Grid>
        {!props.rcvd_nbssi_support ? (
          <Grid item xs={12}>
            <div style={{}}>
              <label style={{ fontWeight: "bold" }}>
                Would you want to receive support from NBSSI?
              </label>
              <Checkbox
                checked={props.want_nbssi_support}
                onChange={(e) => props.setWantSupport(e.target.checked)}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              yes
              <Checkbox
                checked={!props.want_nbssi_support ? true : false}
                onChange={(event) =>
                  props.setWantSupport(!event.target.checked)
                }
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              No
            </div>
          </Grid>
        ) : (
          <p> </p>
        )}

        {!props.rcvd_nbssi_support && props.want_nbssi_support ? (
          <Grid item xs={12}>
            <TextField
              required
              id="support_type"
              name="support_type"
              label="What kind of support do you need from NBSSI?"
              fullWidth
              onChange={(e) => props.setSupportDesc(e.target.value)}
              autoComplete="support_type"
            />
          </Grid>
        ) : (
          <p></p>
        )}

        <Grid item xs={12}>
          <TextField
            required
            id="years_of_experiece"
            name="years_of_experiece"
            type={"number"}
            label="How many years have you been a skilled craft person?"
            fullWidth
            onChange={(e) => props.setYearsPractice(e.target.value)}
            autoComplete="years_of_experiece"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
