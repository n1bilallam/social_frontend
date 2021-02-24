import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, TextField, Button, Hidden } from "@material-ui/core";
import instaLogo from "../../pictures/logo-insta.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

/**
 * @author
 * @function Signin
 **/
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    textAlign: "center",
    overflow: "hidden",
    padding: theme.spacing(4, 3),
  },
  paper: {
    maxWidth: 800,
    height: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  inputDiv: {
    padding: "10px 10px",
  },
}));

const Signin = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };
  if (auth.authanticate) {
    return <Redirect to={"/"} />;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Hidden only={["", "xs"]}>
          <Grid item xs={12} sm={6}>
            <div style={{ display: "flex" }}>
              <img style={{ width: " 100%", height: "auto" }} src={instaLogo} />
            </div>
          </Grid>
        </Hidden>
        <Grid xs={12} sm={6}>
          <Paper className={classes.paper} variant="outlined" square>
            <div>
              <strong>Instagram</strong>
            </div>
            <form
              onSubmit={userLogin}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <div className={classes.inputDiv}>
                <TextField
                  id="email"
                  type="email"
                  label="Email or number"
                  variant="outlined"
                  value={email}
                  fullWidth
                  onChange={handleChange("email")}
                />
              </div>
              <div className={classes.inputDiv}>
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={handleChange("password")}
                  fullWidth
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#3C5898",
                }}
              >
                <FacebookIcon />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#3C5898",
                    fontSize: "16px",
                    fontFamily: "cursive",
                  }}
                >
                  Connect with facebook
                </Link>
              </div>

              <div
                style={{
                  fontSize: "12px",
                  padding: "10px",
                }}
              >
                <Link
                  style={{
                    color: "#3C5898",
                    textDecoration: "none",
                  }}
                  to={"/forgetPassword"}
                >
                  Forget password ?
                </Link>
              </div>
            </form>
          </Paper>
          <Paper
            className={classes.paper}
            style={{ height: "auto" }}
            variant="outlined"
            square
          >
            <div
              style={{
                padding: "20px",
                justifyContent: "center",
              }}
            >
              Don't have an account?
              <Link
                style={{
                  textDecoration: "none",
                  color: "#3f51b5",
                  fontSize: "16px",
                  fontFamily: "cursive",
                }}
                to="/signup"
              >
                Sign up
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signin;
