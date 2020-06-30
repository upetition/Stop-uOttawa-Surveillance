import React, { useState } from "react";
import {
    TextField,
    Button,
    CircularProgress,
    Snackbar,
    Card
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "./contactus.module.css";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [failText, setFailText] = useState("Something went wrong...");

  const MAX_CHARS = 1000;

  const enableSubmit = (
    name !== "" &&
    email !== "" &&
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

  const handleClick = () => {
      setSending(true);
      const queryParams = {
        headers: {
            "Content-Type":"application/json; charset: UTF-8"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            comment: comment
        }),
        method: "POST"
      }

      const url = "/api/contact";

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
                    Contact Us
                </h1>
            </div>
            <Card
                className="row justify-contents-center px-5 pt-3"
            >
                <div className="container m-0 p-2 pb-5">
                    <div className="row justify-content-left pb-3">
                        <p className={`${styles.caption}`}>
                            Let us know your thoughts with the form below
                        </p>
                    </div>
                    <div className="row justify-content-center p-0 pb-4">
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
                        label="Email"
                        value={email}
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <TextField
                        required
                        label="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        multiline
                        fullWidth
                        error={comment.length > MAX_CHARS}
                        helperText={`${comment.length}/${MAX_CHARS}`}
                    />

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
                            Your email has been sent! We will get back to you soon
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
export default ContactUs;
