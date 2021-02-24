import React from "react";
import Layout from "../Layout";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Avatar, Box, Button, Container } from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import tileData from "../../pictures/logo-insta.png";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(12, 3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },

  pic: {
    width: "100%",
    height: "100%",
  },
  paper: {
    width: 300,
    height: 300,
    background: "transparant",
    border: "1px solid gray",
  },
}));

/**
 * @author
 * @function Profile
 **/

const Profile = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Container fixed>
        <div className={classes.root} container>
          <Grid container>
            <Grid xs={4} sm={4}>
              <Box display="flex" justifyContent="center" m={1} p={1}>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar className={classes.large} />
                </StyledBadge>
              </Box>
            </Grid>
            <Grid xs={8} sm={8} flexGrow>
              <Box display="flex" justifyContent="flex-start">
                <Box
                  p={(0, 1)}
                  style={{
                    fontSize: "20px",
                    color: "#262626",
                  }}
                >
                  UserName
                </Box>
                <Box p={(0, 1)}>
                  <Button
                    size="small"
                    style={{
                      background: "none",
                      width: "130px",
                      fontSize: "12px",
                      border: "0.5px solid gray",
                    }}
                  >
                    Edite profile
                  </Button>
                </Box>
                <Box p={(0, 1)}>
                  <Link
                    style={{
                      color: "#262626",
                    }}
                  >
                    <SettingsIcon style={{ fontSize: "30px" }} />
                  </Link>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-start" m={1}>
                <Box
                  style={{
                    color: "#262626",
                  }}
                  p={1}
                >
                  4 Postes
                </Box>
                <Box
                  p={1}
                  style={{
                    color: "#262626",
                  }}
                >
                  25666 Followers
                </Box>
                <Box
                  style={{
                    color: "#262626",
                  }}
                  p={1}
                >
                  4225 Following
                </Box>
              </Box>

              <Box display="flex" justifyContent="flex-start" m={1}>
                <Box
                  style={{
                    color: "#262626",
                  }}
                >
                  FullName
                  <p>
                    ᴇꜱꜱᴀᴏᴜɪʀᴀ - ʟᴀʀᴀᴄʜᴇ - ᴛᴀɴɢᴇʀ ♡ <br />
                    ɪᴛ-ᴛᴇᴄʜɴɪᴄɪᴇɴ ꜰᴜʟʟꜱᴛᴀᴄᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ <br />
                    ᴡᴇ ᴀʀᴇ ᴀʟʟ ʙʀᴏᴋᴇɴ ᴛʜᴀᴛ'ꜱ ʜᴏᴡ ᴛʜᴇ ʟɪɢʜᴛ ɢᴇᴛꜱ ɪɴ.
                  </p>
                  <Link
                    style={{
                      color: "blue",
                      textDecoration: "none",
                    }}
                  >
                    exemple.me
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={12}>
              <Grid container justify="center" spacing={3}>
                <Grid item>
                  <div className={classes.paper} square>
                    <img className={classes.pic} src={tileData} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper} square>
                    <img className={classes.pic} src={tileData} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper} square>
                    <img className={classes.pic} src={tileData} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper} square>
                    <img className={classes.pic} src={tileData} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper} square>
                    <img className={classes.pic} src={tileData} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.paper} square>
                    <img className={classes.pic} src={tileData} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Layout>
  );
};

export default Profile;
