import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, Button } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * @author
 * @function ForgetPassword
 **/

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    display: "flex",
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  inputDiv: {
    padding: "10px 10px",
  },
}));

const ForgetPassword = (props) => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const { email } = formData;

  // Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  if (auth.authanticate) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={12} sm={12} style={{ justifyContent: "center" }}>
          <Paper className={classes.paper} variant="outlined" square>
            <div>
              <strong>Trouble Logging In?</strong>
            </div>

            <div
              style={{
                justifyContent: "center",
                color: "#3C5898",
                padding: "0px 50px",
              }}
            >
              <p
                style={{
                  color: "gray",
                  fontFamily: "cursive",
                  fontSize: "14px",
                }}
              >
                Enter your email, phone, or username and we'll send you a link
                to get back into your account.
              </p>
            </div>

            <form noValidate>
              <div className={classes.inputDiv}>
                <TextField
                  id="Email"
                  label="Email Or username"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className={classes.inputDiv}>
                {email ? (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Send Login Link
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled
                  >
                    Send Login Link
                  </Button>
                )}
              </div>
            </form>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                padding: "30px 10px",
              }}
            >
              <div style={{ width: "50%", border: "2px" }}>
                <hr />
              </div>
              <div style={{ padding: "0 20px", color: "gray" }}>Ou</div>
              <div style={{ width: "50%", border: "2px" }}>
                <hr />
              </div>
            </div>

            <div>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/signup"}
              >
                Create New Account
              </Link>
            </div>
          </Paper>
          <Paper className={classes.paper} variant="outlined" square>
            <div
              style={{
                padding: "5px",
                justifyContent: "center",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#3f51b5",
                  fontSize: "16px",
                  fontFamily: "cursive",
                }}
                to="/signin"
              >
                Back to Login
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ForgetPassword;
