import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
//import MobileTearSheet from '../../../MobileTearSheet';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

class LeftNavPanel extends Component {

    render() {
        let employeeList = this.props.employeeList.map((employee) =>
            <ListItem
                key={employee.id}
                value={employee}
                primaryText={employee.name}
                leftAvatar={<Avatar>{employee.initial}</Avatar>}
                onClick={() => this.props.handleEmployeeSelection(employee)}
            />
        );
        return (
            <Card id='LeftNav' expanded={true} initiallyExpanded={true} expandable={true}>
                <CardText>
                    <Subheader>Employee List</Subheader>
                    {employeeList}
                </CardText>
            </Card>
        );
    }

}

export default LeftNavPanel;