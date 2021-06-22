import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Create from "./components/Create";
import Header from "./components/common/Header"
import View from "./components/View";
import {Grid,Paper} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Example from './components/Example';



function App() {
  return (
    <Container fixed>

      <Header/>

<Grid container spacing={3}>

  
  <Router>
  <Switch>


       <Route exact path="/"  component={Create}/>
       <Route exact path="/create" component={View}/>
       <Route exact path="/example" component={Example}/>
         
</Switch>


  </Router>

   


     </Grid>
      
      </Container>

    
  );
}

export default App;
