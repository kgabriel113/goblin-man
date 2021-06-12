import {useState, useEffect} from 'react';
import { Container, Grid } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import GoblinList from './GoblinList';
import AddGoblin from './AddGoblin';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <Grid columns={2} style={{marginTop: 15}}>
          <Grid.Row>
            <Grid.Column>
              <GoblinList />
            </Grid.Column>
            <Grid.Column style={{display:"flex", flexFlow:"row wrap", justifyContent:"flex-start"}}>
              <AddGoblin />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </header>
    </div>
  );
}

export default App;
