import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LeftNavPanel from './LeftNavPanel';
import CenterPanel from './CenterPanel';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            employeeList : [
                {id: 1, name:'Brendan Lim', initial: 'BL'},
                {id: 2, name:'Kerem Suer', initial: 'KS'},
                {id: 3, name:'Eric Hoffman', initial: 'EH'},
                {id: 4, name:'Raquel Parrado', initial: 'RP'}
            ],
            selectedEmployee : null
        }
    }

    handleEmployeeSelection = (employee) => {
        console.log(employee);
        this.setState({
            selectedEmployee: employee
        })
    }

    render() {
        return (
            <div>
                <AppBar title="Dashboard" zDepth={2} />
                <LeftNavPanel employeeList={this.state.employeeList} handleEmployeeSelection={this.handleEmployeeSelection}/>
                <CenterPanel selectedEmployee={this.state.selectedEmployee}/>
            </div>
        );
    }
}
export default Dashboard;
