import react from 'react'

class NumberRow extends react.Component {
    render() {
        const {isSelected, isLocked, addToSelect} = this.props
        return (
            <tr>
                <td>{this.props.Number}</td>
                <td><button className={`btn btn-block ${isSelected ? "btn-danger" : "btn-primary"}`} 
                onClick={addToSelect} disabled={isLocked}>
                    {`${isSelected ? "deselect" : "select"}`}
                </button></td>
            </tr>
            )
    }
}

export default NumberRow;

