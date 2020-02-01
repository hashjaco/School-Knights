import React, { Component } from "react";
import { connect } from "react-redux";

class HistoryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.history);
    return <div>Recent history</div>;
  }
}

const mapStateToProps = state => {
  return { history: state.history };
};

export default connect(mapStateToProps)(HistoryList);
