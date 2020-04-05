import React from "react";
import { connect } from "react-redux";

function DashBoard(props) {
  const { users } = props;
  const columns = Object.keys(users[0]);
  return (
    <div style={{ background: "lightcyan" }}>
      <h3 style={{ color: "slateblue" }}> users DashBoard</h3>
      {
        <table
          className="user-table"
          style={{ background: "lightcyan" }}
          border="1"
          cellpadding="5"
          cellspacing="5"
        >
          <tr className="table-columns">
            {columns.map((each, index) => {
              return <th>{each}</th>;
            })}
          </tr>
          {users.map((eachCell, i) => {
            return (
              <tr>
                {columns.map((each, index) => {
                  return <td>{eachCell[each]}</td>;
                })}
              </tr>
            );
          })}
        </table>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(DashBoard);
