import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import { faStar, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 275,
    margin: 10
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  lang: {
    marginBottom: 12,
    color: 'blue'
  }
});

export default function CardItem({ repository }) {
  const classes = useStyles();

  const handleRedirect = url => {
    window.location.href = url;
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {repository.name}{' '}
          <FontAwesomeIcon size="sm" color="yellow" icon={faStar} />{' '}
          {repository.stargazers_count}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {repository.description}
        </Typography>
        <Typography className={classes.lang} color="textSecondary">
          #{repository.language}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <Moment format="YYYY/MM/DD">{repository.created_at}</Moment>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleRedirect(repository.html_url)}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </Button>
      </CardActions>
    </Card>
  );
}
