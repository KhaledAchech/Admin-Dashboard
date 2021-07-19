import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardData } from './CardData';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DashboardCard() {
  const classes = useStyles();

  return (
    <ul>
        {CardData.map((item, index) => {
                        return(
                            <li key={index}>
                                <Card className={classes.root}>
                                <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image= "//Assets/images/posts.jpg"
                                title = {item.title}>
                                <CardActions>
                                <Link to = {item.path}/>
                                </CardActions>
                                </CardMedia>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                                </Card>
                            </li>
                        );
                    })
                    }
    </ul>);
}