import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    Snackbar
} from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";

import Home from "../Home/Home";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Verify = () => {
    const [openModal, setOpenModal] = useState(false);
    const [failure, setFailure] = useState(false);
    const [sent, setSent] = useState(false)
    const path = window.location.pathname.split('/');
    const validateId = path.pop() || path.pop(); // Handles case for extra '/' at the end of the path

    if (!sent){
        setSent(true)
        fetch(`/api/verify/${validateId}`, {method: "POST"})
        .then(data => { return data.json()})
        .then(res => {
            if (res.verified) {
                setOpenModal(true);
            }
            else {
                setFailure(true);
            }
        })
        .catch(error => {
            console.log(error);
            setFailure(true);
        });
    }

    const handleModalClose = () => setOpenModal(false);
    const handleAlertClose = () => setFailure(false);

    return (
        <div>
            <Snackbar
              open={failure}
              autoHideDuration={6000}
              onClose={handleAlertClose}
            >
                <Alert onClose={handleAlertClose} severity="error">
                    Something has gone wrong...
                </Alert>
            </Snackbar>
            <Dialog
              onClose={handleModalClose}
              open={openModal}
              >
                  <DialogTitle>
                      Thank you!
                  </DialogTitle>
                  <p className="p-5">
                    Thank you for verifying your email! Your name has officially been added to the petition
                  </p>
              </Dialog>
              <Home />
        </div>
    )
}
export default Verify;
