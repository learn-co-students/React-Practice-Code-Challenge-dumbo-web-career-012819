import React from 'react'

const WalletForm = (props) => {

  return(
    <form onSubmit={props.addMoreMoney}>
      <h3>Add More $$$</h3>
      Amount: <input name="amount" type="text" />
      <input type="submit" placeholder="Add $$$" value={props.budget} />
    </form>
  )
}

export default WalletForm
