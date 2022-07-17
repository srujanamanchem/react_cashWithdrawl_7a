import './index.css'

const DenominationItem = props => {
  const {denomination, selectDenomination} = props
  const {value} = denomination
  const selectDenominationItem = () => {
    selectDenomination(value)
  }
  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        type="button"
        onClick={selectDenominationItem}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
