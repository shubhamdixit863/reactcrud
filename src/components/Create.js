import React,{useEffect,useState} from 'react'
import {Grid,Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Viewtable from './Viewtable'
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Create() {

const [state, setstate] = useState([])


  useEffect(() => {

    axios.get("http://localhost:9000/api/data").then(data=>{

      setstate(data["data"])
    })
    
 
  }, [])




    const classes = useStyles();
    return (
       
        <Grid item xs={12}>
       
       <Viewtable tabledata={state}/>

        </Grid>
       
    
      
       
        
     
    )
}
