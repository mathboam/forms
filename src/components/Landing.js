import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Business from "./Business";
import PersonalForm from "./PersonalForm";
import TrainForm from "./TrainForm";
import { Post, Get } from "../util/transport";
import CryptoJS from "crypto-js";
import { v1 as uuidv1 } from "uuid";
import { toaster } from "evergreen-ui";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "static",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Personal Details", "Business Details", "Training Experience"];

const getTitle = (step, titles) => {
  switch (step) {
    case 0:
      return titles[0];
    case 1:
      return titles[1];
    case 2:
      return titles[2];
    default:
      throw new Error("Unknown Title");
  }
};

export default function Landing() {
  const id = uuidv1();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [telephone, setTelephone] = useState("");
  const [digital_address, setDigitalAddress] = useState("");
  const [trainer_id, setTrainerId] = useState(id);
  const [trainer_name, setTrainerName] = useState("");
  const [business_name, setBusName] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [town, setTown] = useState("");
  const [registered, setRegistered] = useState(false);
  const [registration_no, setRegistrationNumber] = useState("");
  const [has_tin, setHasTin] = useState(false);
  const [tin_no, setTinNo] = useState("");
  const [association_member, setAssociation] = useState(false);
  const [nvti_cert, setNvtiCert] = useState(false);
  const [rcvd_nbssi_support, setNbssiSupport] = useState(false);
  const [want_nbssi_support, setWantSupport] = useState(false);
  const [support_description, setSupportDesc] = useState("");
  const [years_practicing, setYearsPractice] = useState("");
  const [trained_apprentice, setTrainedApprentice] = useState(false);
  const [want_train_apprentice, setWantTrain] = useState(false);
  const [no_apprentices, setNoApprentices] = useState("");
  const [additional_support, setAdditionalSupport] = useState("");
  const [createdon, setCreatedOn] = useState(Date.now());
  const [business_location, setBusinessLocation] = useState("");

  // const getAllRegions = async () => {
  //   await Get("/region/wapp/regions")
  //     .then((res) => {
  //       console.log(res.data);
  //       const bytes = CryptoJS.DES.decrypt(res.data, "Fg7EZ/RRa0Y=");
  //       const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //       console.log({ decryptedData });
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = async () => {
    alert(email && createdon);
    const data = {
      trainer_id,
      trainer_name,
      gender,
      telephone,
      email,
      digital_address,
      business_name,
      region,
      district,
      town,
      registered,
      registration_no,
      has_tin,
      tin_no,
      association_member,
      nvti_cert,
      rcvd_nbssi_support,
      want_nbssi_support,
      support_description,
      years_practicing,
      trained_apprentice,
      want_train_apprentice,
      no_apprentices,
      additional_support,
      createdon,
      business_location,
    };
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "Fg7EZ/RRa0Y="
    ).toString();

    Post("/scp/wapp/scptrainer", ciphertext);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <PersonalForm
            setName={setTrainerName}
            setGender={setgender}
            setEmail={setemail}
            setTelephone={setTelephone}
            setDigitalAddress={setDigitalAddress}
          />
        );
      case 1:
        return (
          <Business
            setBusinessLocation={setBusinessLocation}
            setBusName={setBusName}
            setSupportDesc={setSupportDesc}
            setWantSupport={setWantSupport}
            setNvtiCert={setNvtiCert}
            setNbssiSupport={setNbssiSupport}
            setAssociation={setAssociation}
            setTinNo={setTinNo}
            setDistrict={setDistrict}
            setRegion={setRegion}
            setHasTin={setHasTin}
            setRegistrationNumber={setRegistrationNumber}
            setRegistered={setRegistered}
            setTown={setTown}
            registered={registered}
            has_tin={has_tin}
            association_member={association_member}
            nvti_cert={nvti_cert}
            rcvd_nbssi_support={rcvd_nbssi_support}
            want_nbssi_support={want_nbssi_support}
            support_description={support_description}
            want_train_apprentice={want_train_apprentice}
            setYearsPractice={setYearsPractice}
          />
        );
      case 2:
        return (
          <TrainForm
            trained_apprentice={trained_apprentice}
            want_train_apprentice={want_train_apprentice}
            setTrainedApprentice={setTrainedApprentice}
            setWantTrain={setWantTrain}
            setNoApprentices={setNoApprentices}
            setAdditionalSupport={setAdditionalSupport}
            setCreatedOn={setCreatedOn}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        !trainer_name || !email || !gender || !telephone || !digital_address
          ? toaster.warning("Fill all form fields")
          : setActiveStep(activeStep + 1);
        break;
      case 1:
        !business_name ||
        !region ||
        !town ||
        !district ||
        (registered && !registration_no) ||
        !years_practicing ||
        (has_tin && !tin_no) ||
        (!rcvd_nbssi_support && want_nbssi_support)
          ? toaster.warning("Fill all form fields")
          : setActiveStep(activeStep + 1);
        break;
      case 2:
        (want_train_apprentice && !no_apprentices) ||
        !business_location ||
        !additional_support
          ? toaster.warning("Fill all form fields")
          : handleSubmit();
        break;

      default:
        throw new Error("Unknown step");
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position={"relative"} color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            NBSSI
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {getTitle(activeStep, steps)}
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
