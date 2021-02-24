import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

import Layout from "../Layout";
import { Grid, Hidden, Link } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  globalGrid: {
    margin: `${theme.spacing(12)}px auto`,
    background: "none",
  },
  card: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    position: "center",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  sugIconP: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  sugIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  listSug: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Posts() {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Grid className={classes.globalGrid} xs={12} sm={8}>
          <Card className={classes.card} justifyContent="center">
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image="https://blog-fr.orson.io/wp-content/uploads/2017/06/jpeg-ou-png.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card className={classes.card} justifyContent="center">
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image="https://blog-fr.orson.io/wp-content/uploads/2017/06/jpeg-ou-png.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid className={classes.globalGrid} xs={12} sm={4} position="fixed">
            <Card
              justifyContent="center"
              style={{
                border: "none",
                maxWidth: "400px",
                position: "fixed",
                width: "100%",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.sugIconP}>
                    R
                  </Avatar>
                }
                action={<Link>Basculer</Link>}
                title="USERNAME"
                subheader="fullname"
              />
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.sugIcon}>
                    R
                  </Avatar>
                }
                action={<Link>Basculer</Link>}
                title="USERNAME"
                subheader="fullname"
              />
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.sugIcon}>
                    R
                  </Avatar>
                }
                action={<Link>Basculer</Link>}
                title="USERNAME"
                subheader="fullname"
              />
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.sugIcon}>
                    R
                  </Avatar>
                }
                action={<Link>Basculer</Link>}
                title="USERNAME"
                subheader="fullname"
              />
            </Card>
          </Grid>
        </Hidden>
      </div>
    </Layout>
  );
}
