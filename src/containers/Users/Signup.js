import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Facebook from "@material-ui/icons/Facebook";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../actions";
import { store } from "react-notifications-component";

/**
 * @author
 * @function Signup
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

const Signup = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const { fullName, userName, email, password } = formData;
  // Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  // const [error, setError] = useState("");
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.loading) {
      setFormData({
        fullName: "",
        userName: "",
        email: "",
        password: "",
      });
    }
  }, [user.loading]);

  const userSignup = (e) => {
    e.preventDefault();
    const user = { fullName, userName, email, password };
    dispatch(signUp(user));
  };
  if (auth.authanticate) {
    return <Redirect to={"/"} />;
  }
  if (user.loading) {
    return <p>...loading</p>;
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={12} sm={12} style={{ justifyContent: "center" }}>
          <Paper className={classes.paper} variant="outlined" square>
            <div>
              <strong>Instagram</strong>
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
                  fontSize: "18px",
                }}
              >
                Sign up to see photos and videos from your friends.
              </p>
              <Button
                style={{
                  background: "#3C5898",
                  fontSize: "10px",
                  color: "#fff",
                }}
              >
                <Facebook />
                Log in with facebook
              </Button>
            </div>
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
            <form noValidate autoComplete="off" onSubmit={userSignup}>
              <div className={classes.inputDiv}>
                <TextField
                  id="Email"
                  label="Email or number"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={handleChange("email")}
                />
              </div>
              <div className={classes.inputDiv}>
                <TextField
                  id="fullname"
                  label="FullName"
                  variant="outlined"
                  fullWidth
                  value={fullName}
                  onChange={handleChange("fullName")}
                />
              </div>
              <div className={classes.inputDiv}>
                <TextField
                  id="username"
                  label="username"
                  variant="outlined"
                  fullWidth
                  value={userName}
                  onChange={handleChange("userName")}
                />
              </div>
              <div className={classes.inputDiv}>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={handleChange("password")}
                />
              </div>
              <div className={classes.inputDiv}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </div>
            </form>
          </Paper>
          <Paper className={classes.paper} variant="outlined" square>
            <div
              style={{
                padding: "20px",
                justifyContent: "center",
              }}
            >
              Have an account?
              <Link
                style={{
                  textDecoration: "none",
                  color: "#3f51b5",
                  fontSize: "16px",
                  fontFamily: "cursive",
                }}
                to="/signin"
              >
                Sign in
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
