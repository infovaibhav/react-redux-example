import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';

class CenterPanel extends Component {
    render() {

        let panelText = null;
        if (this.props.selectedEmployee == null) {
            panelText = 'Please select employee from left navigator.';
        } else {
            panelText = <CardText>Welcome {this.props.selectedEmployee.name}...!!!</CardText>
        }

        return (
            <Card id='centerPanel' expanded={true} initiallyExpanded={true} expandable={true}>
                <CardText>
                    {panelText}
                </CardText>
            </Card>
        );
    }
}
export default CenterPanel;