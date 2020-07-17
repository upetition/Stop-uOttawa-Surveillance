import React, { useState } from "react";
import {
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    MenuItem,
    Button,
    CircularProgress,
    Snackbar,
    Card
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "./testimonial.module.css";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Testimonial = () => {
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [anonymousCheck, setAnonymousCheck] = useState(false);
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [failText, setFailText] = useState("Something went wrong...");

  const MAX_CHARS = 1500;

  const enableSubmit = (
    name !== "" &&
    studentNumber !== "" &&
    program !== "" &&
    year !== "" &&
    comment !== "" &&
    comment.length <= MAX_CHARS &&
    !sending
  );

  const handleAlertClose = (type) => (e, r) => {
      if (r === 'clickaway') {
          return;
      }

      type(false);
      setFailText("Something went wrong...")
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const years = [
    {
      value: '1',
      label: 'First',
    },
    {
      value: '2',
      label: 'Second',
    },
    {
      value: '3',
      label: 'Third',
    },
    {
      value: '4',
      label: 'Fourth',
    },
    {
        value: '5',
        label: 'Fifth+',
    },
    {
        value: 'msc',
        label: 'Masters',
    },
    {
        value: 'phd',
        label: 'Ph.D.',
    }
  ];

  const handleClick = () => {
      setSending(true);
      const queryParams = {
        headers: {
            "Content-Type":"application/json; charset: UTF-8"
        },
        body: JSON.stringify({
            name: name,
            studentNumber: studentNumber,
            program: program,
            year: year,
            comment: comment
        }),
        method: "POST"
      }

      // TODO: add new api here
      const url = "/api/newAPIhere?";

      fetch(url, queryParams)
      .then(data => { return data.json()})
      .then(res => {
        if (res.success) {
          setSuccess(true);
        }
        else if (res.success !== undefined && !res.success) {
          if (res.error !== undefined) {
            setFailText(res.error)
          }
          setFailure(true);
        }
        else {
          setFailText("Something went wrong...")
          setFailure(true);
        }
      })
      .then(() => setSending(false))
      .catch(error => {
          console.log(error);
          setFailure(true);
          setSending(false);
      })

  };

  return (
    <main id="mainContent">
        <div className={`container ${styles.contentSize} pb-5`}>
            <div className="row pt-5 pb-2">
                <h1>
                    Title here
                </h1>
            </div>
            <Card
                className="row justify-contents-center px-5 pt-3"
            >
                <div className="container m-0 p-2 pb-5">
                    <div className="row justify-content-left pb-3">
                        <p className={`${styles.caption}`}>
                            Description here
                        </p>
                    </div>
                    <div className="row justify-content-center p-0 pb-3">
                    <div className="col-sm-12 col-md-6">
                        <TextField
                        required
                        label="Name"
                        value={name}
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <TextField
                        required
                        label="Student Number"
                        value={studentNumber}
                        type="number"
                        fullWidth
                        onChange={(e) => setStudentNumber(e.target.value)}
                        />
                    </div>
                    </div>
                    <div className="row justify-content-center p-0 pb-4">
                    <div className="col-sm-12 col-md-6">
                        <TextField
                        required
                        label="Program"
                        value={program}
                        fullWidth
                        onChange={(e) => setProgram(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <TextField
                            id="year-select"
                            select
                            label="Year"
                            value={year}
                            fullWidth
                            onChange={handleYearChange}
                            >
                            {years.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <TextField
                        required
                        label="Testimonial"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        multiline
                        autosize={true}
                        fullWidth
                        error={comment.length > MAX_CHARS}
                        helperText={`${comment.length}/${MAX_CHARS}`}
                    />
                    </div>
                    <div className="row justify-content-left">
                        <FormGroup>
                            <FormControlLabel
                            control={
                                <Checkbox
                                checked={anonymousCheck}
                                onChange={(e) => setAnonymousCheck(e.target.checked)}
                                inputProps={{'aria-label': 'I would like my comment to be displayed anonymously'}}
                                />
                            }
                            label='I would like my comment to be displayed anonymously'
                            />
                        </FormGroup>
                    </div>
                    <div className="row d-flex flex-row-reverse">
                        {
                        !sending &&
                        <Button
                            variant="outlined"
                            color="primary"
                            disabled={!enableSubmit}
                            className="justify-right"
                            onClick={handleClick}
                            >
                            Submit
                        </Button>

                        }
                        {
                            sending &&
                            <CircularProgress />
                        }
                    </div>
                    <Snackbar
                    open={success}
                    autoHideDuration={6000}
                    onClose={handleAlertClose(setSuccess)}
                    >
                        <Alert onClose={handleAlertClose(setSuccess)} severity="success">
                            Your testimonial has been sent! Thank you for your support
                        </Alert>
                    </Snackbar>
                    <Snackbar
                    open={failure}
                    autoHideDuration={6000}
                    onClose={handleAlertClose(setFailure)}
                    >
                        <Alert onClose={handleAlertClose(setFailure)} severity="error">
                            {failText}
                        </Alert>
                    </Snackbar>
                </div>
            </Card>
        </div>
      </main>
  );
}
export default Testimonial;
