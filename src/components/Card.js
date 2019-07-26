import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => {
  return {
    card: {
      maxWidth: 345,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    media: {
      height: 140
    },
    root: {
      flexGrow: 1
    },
   
  };
};

class MediaCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
              {this.props.game.map((item, i) => (
          <Grid item xs = {3}>
                <Card className={classes.card} key={i}>
                  <CardActionArea>
                    <img src={item.image} alt="IMG" width="345" height="240" />
                    {/* <CardMedia className={classes.media}/> */}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
                </Card>
          </Grid>
              ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MediaCard);
