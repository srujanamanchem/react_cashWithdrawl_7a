import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  onClickDenomination = value => {
    const {cash} = this.state

    if (cash >= value) {
      this.setState(prevState => ({cash: prevState.cash - value}))
    }
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="balance-card">
          <div className="name-container">
            <p className="letter">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="money-balance">
            <p className="balance">Your Balance</p>
            <div className="money">
              <p className="money-number">{cash}</p>
              <p className="money-text">in Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="heading">Withdraw</p>
            <p className="balance">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  denomination={eachDenomination}
                  key={eachDenomination.id}
                  selectDenomination={this.onClickDenomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
