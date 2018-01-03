import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'

import AgeState from './AgeState'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           birthday:'1987-04-01',
           newDate:'',
           showAgeStatus: false
        };
    }

    setBirthday() {
        console.log(this.state);
        this.setState(
            {
                birthday: this.state.newDate,
                showAgeStatus: true
            }
        )
    }

    render() {
        return (
            <div className="App">
                <Form inline>
                    <h2>Input your Birthday !</h2>
                    <FormControl type="date" onChange={event=> this.setState({newDate:event.target.value})} ></FormControl>{' '}
                    <Button onClick={()=>this.setBirthday()}>Submit</Button>
                </Form>
                {
                    this.state.showAgeStatus ? <div className="fade age-status"> <AgeState date={this.state.birthday}/> </div>: ''
                }

           </div>
        );
    }
}


export default App;
