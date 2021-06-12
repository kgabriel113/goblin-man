import {useState, useEffect} from 'react';
import requests, {ReturnType} from './requests';
import { Button, Input } from 'semantic-ui-react'

interface SemanticInput {
    value: string;
}

const AddGoblin = () => {
    const [name, setName] = useState("");

    const updateName = (event: any, data: SemanticInput) => {
        setName(data.value)
    }
    const submit= () => {
        alert(name);
    }

    return (
        <div style={{ marginTop: "auto"}}>
            <Input placeholder='New goblin name' onChange={updateName} style={{margin: 20}}/>
            <Button onClick={submit}>Add new</Button>
        </div>
    );
};

export default AddGoblin;