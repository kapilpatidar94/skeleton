import React from 'react'
import { connect } from "react-redux"

import { increaseCounter, decreaseCounter } from "../../../services/redux/Counter/counter.actions";

function Index(props:any) {
  return (
    <>
      <div>Dashboard</div>
      <div className="App">
        <div>Count: {props.count}</div>

        <button onClick={() => props.increaseCounter()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </div>
    </>
  )
}

const mapStateToProps = (state:any) => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)