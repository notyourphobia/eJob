import React from 'react';
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";

const inputValues = [
    'A1', 'B1', 'C1',
    'A1', 'B1', 'C2',
    'A1', 'B1', 'C3',
    'A1', 'B2', 'C4',
    'A1', 'B2', 'C5',
    'A1', 'B3', 'C6',
    'A2', 'B4', 'C7',
    'A2', 'B5', 'C8',
    'A2', 'B5', 'C9',
    'A3', 'B6', 'C10',]

class Exe2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            filteredValues: [],
            buttons: [],
            buttonValues: [],
            rows:[]
        }
    }

    componentDidMount() {
        let myButtons = [];




        let val = [];
        for (let i = 0; i < inputValues.length - 3; i += 3) {
            const e = inputValues[i];

            val.push([inputValues[i], inputValues[i + 1], inputValues[i + 2]])

        }
        console.log(val);

        // console.log(this.state.values)
    }

    render() {
        return (
            <div className='exe2'>
                <div className='A'>
                    A:
                </div>
                <div className='B'>
                    B:
                </div>
                <div className='C'>
                    C:
                </div>

            </div>
        );
    }
}

export default Exe2;