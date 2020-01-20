import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from 'react-bootstrap/Button'

export default class Exe2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {},
            values: [],
        }
    }

    createButtons = () => {
        let filter = []
        filter = this.state.values.length > 0 ?
            [...new Set(this.state.values.join()
                .split()[0]
                .split(','))] :
            [...new Set(this.props.rows.join()
                .split()[0]
                .split(','))]

        let checkValues = {}
        this.props.buttons.forEach((buttonValue) => {
            checkValues[buttonValue] = []
            filter.forEach((value) => {

                if (value[0] === buttonValue) {

                    if (checkValues[buttonValue]) {
                        checkValues[buttonValue].push(value)
                    }
                }
            })
        })

        return <Row>
            <Col>
                <Button variant='info' className='myButtons' onClick={this.reset}>
                    Reset
                </Button>
                {this.props.buttons.map((buttonValue, buttonIndex) =>
                    checkValues[buttonValue].length > 0 ?
                        <DropdownButton key={buttonIndex} className='myButtons'
                            drop='right'
                            variant='info'
                            title={`${buttonValue}: ${checkValues[buttonValue].length > 1 ? 'Toate' : checkValues[buttonValue][0]}`}>
                            {checkValues[buttonValue].length > 1 ?
                                <Dropdown.Item key={0} eventKey={0} onSelect={this.handleSelect}>
                                    Toate
                                </Dropdown.Item> : null}
                            {filter.map((value, index) =>
                                value[0] === buttonValue ?
                                    <Dropdown.Item key={index} eventKey={value} onSelect={this.handleSelect}>
                                        {value}
                                    </Dropdown.Item> : null)}
                        </DropdownButton> : null
                )}
            </Col>
        </Row >
    }

    createText = () => {
        let rows = Object.values(this.state.selected).length > 0 ? this.state.values : this.props.rows

        return rows.map((thisRow, thisRowIndex) =>
            <Row className={`row-text${thisRowIndex}`} key={thisRowIndex}>
                <Col className={`text-${thisRowIndex}`}>
                    {thisRow.map(rowElement => rowElement !== thisRow[thisRow.length - 1] ? `${rowElement}, ` : null)}{thisRow[thisRow.length - 1]}
                </Col >
            </Row>
        )
    }

    handleSelect = value => {
        let obj = { ...this.state.selected }
        this.props.buttons.forEach(element => {
            if (element[0] === value[0]) {
                obj[element] = value
            }
        });

        let rows = [];
        if (Object.values(obj).length > 0) {
            rows = this.props.rows.filter(rowValue => rowValue.includes(value))
        }

        this.setState({
            selected: obj,
            values: rows
        })
    }

    reset = () => {
        this.setState({
            selected: {},
            values: []
        })
    }

    render() {
        return (
            <div className='exe2' >
                <Row>
                    <Col className='buttonsRows'>
                        {this.createButtons()}
                    </Col >
                    <Col className='textRows'>
                        {this.createText()}
                    </Col >
                </Row>
            </div >
        );
    }
}
