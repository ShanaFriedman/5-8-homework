import React from 'react';

class SelectedNumbers extends React.Component {
    render() {
        const {onLockClick, isLocked} = this.props
        
        return(<li>
            {this.props.selectedNumber.number}
            <button className='btn btn-primary' onClick={onLockClick}>{`${isLocked ? "unlock" : "lock"}`}</button>
        </li>)
    }
}

export default SelectedNumbers;