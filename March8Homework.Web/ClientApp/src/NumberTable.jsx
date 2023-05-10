import React from 'react';
import NumberRow from './NumberRow'
import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';
import SelectedNumbers from './SelectedNumbers'


class NumbersTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    onAddClick = () => {
        let copy = [...this.state.numbers]
        copy.push({ number: Math.floor(Math.random() * (1000 - 1 + 1)) + 1, id: uuidv4() })
        this.setState({ numbers: copy })
    }

    onSelectClick = (n) => {
        const {selectedNumbers} = this.state
        if(selectedNumbers.some(num => num.id === n.id)){
            this.setState({selectedNumbers: selectedNumbers.filter(num => num.id !== n.id)})
        }else{
            this.setState({selectedNumbers: [...selectedNumbers, {number: n.number, id : n.id}]})
        }
    }

    onLockClick = (n) => {
        const {lockedNumbers} = this.state
        if(lockedNumbers.includes(n.id)){
            this.setState({lockedNumbers: lockedNumbers.filter(num => num !== n.id)})
        }else{
            this.setState({lockedNumbers: [...lockedNumbers, n.id]})
        }
    }

    render() {
        const {selectedNumbers, lockedNumbers, numbers} = this.state
        return (
            <div className="container mt-5">
                <div className="row">
                    <button className="btn btn-success btn-lg" onClick={this.onAddClick}>Add</button>
                </div>
                <div>
                    <table className="table table-hover table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map(n => <NumberRow 
                             Number={n.number}
                             key={n.id} 
                             addToSelect={() => this.onSelectClick(n)}
                             isSelected = {selectedNumbers.some(num => num.id === n.id)}
                             isLocked = {lockedNumbers.includes(n.id)} />)}
                        </tbody>
                    </table>
                </div>

                {!!selectedNumbers.length && <><h1>Selected Numbers:</h1>
                <ul>
                        {selectedNumbers.map(sn => <SelectedNumbers selectedNumber={sn}
                            onLockClick={() => this.onLockClick(sn)}
                            isLocked={lockedNumbers.includes(sn.id)}
                            key={sn.id}

                    />)}
                </ul>
                </>}

            </div>
            )
    }
}

export default NumbersTable;