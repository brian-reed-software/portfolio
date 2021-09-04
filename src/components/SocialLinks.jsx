import React from 'react';
import { socialLinks } from "../portfolio";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {Link} from 'react-scroll'
const useStyles = makeStyles((theme) => ({
  twitter: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .3)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  1px 1px 1px rgba(113, 213, 213, .5)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
  linkedin: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  2px 1px 1px rgba(113, 213, 213, .3)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
  github: {
    background: 'linear-gradient(85deg, #1a1a1a 30%, #005266 90%)',
    boxShadow: '0px 1px 1px 1px rgba(13, 53, 53, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #1a1a1a 10%, #008fb3 90%)',
      color: '#fff',
      boxShadow: '0px 2px 1px 1px rgba(13, 53, 53, .3)',
      marginTop: '0px',
    padding:'5px 30px'},
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'2px'
  },
  resume: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  2px 1px 1px rgba(113, 213, 213, .3)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
  contact: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  2px 1px 1px rgba(113, 213, 213, .3)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
  location: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  2px 1px 1px rgba(113, 213, 213, .3)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
}));



const SocialLinks = () => {
  const classes = useStyles();
    return ( 
      <div className="btn-wrapper size-lg text-lg" style={{width: "440px"}}>
      <Button type="button" href={socialLinks.twitter} className={classes.twitter}>
      <i className="fa fa-twitter" />
      </Button>
        <Button type="button" href={socialLinks.linkedin} className={classes.linkedin}>
        <i className="fa fa-linkedin" />
        </Button>
        <Button type="button" href={socialLinks.github} className={classes.github}>
        <i className="fa fa-github" />
        </Button>
        <Button type="button" href={'https://bit.ly/brian-reed-resume'} className={classes.resume}>
        Resume
        </Button>
        <Link  to="contact" spy={true} smooth={true}>
        <Button type="button" style={{width: "367px"}} className={classes.contact}>
        <span className="btn-inner--icon mr-1">
        <i className="fa fa-file" />
      </span>
      <Link  to="contact" spy={true} smooth={true}>Contact Me &#128071;
      </Link>
      </Button>
      </Link>
      </div>
     );
}
 


export default SocialLinks;
