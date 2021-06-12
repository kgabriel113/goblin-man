import {useState, useEffect} from 'react';
import requests, {ReturnType} from './requests';
import { Container, List } from 'semantic-ui-react'


const GoblinList = () => {
    const [myGoblins, setMyGoblins] = useState([] as ReturnType[]);

    useEffect(() => {
        requests.test().then(res => {
            setMyGoblins(res);
        })
    });

const listItems = myGoblins.map((goblin) =>  <List.Item>{goblin.name}</List.Item>);
    return (
        <div>

        <h2>Characters in database</h2>
        <Container style={{backgroundColor: "darkgrey", color:"black", padding: 30, width:"400px"}}>
            <List>{listItems}</List>
        </Container>
        </div>
    );
};

export default GoblinList;