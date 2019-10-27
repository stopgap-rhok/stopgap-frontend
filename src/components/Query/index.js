import React, { Component } from "react";
import { get } from "../../utility/http";

import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;
const boolCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div>
      <p>{rowData[dataKey]}</p>
    </div>
  </Cell>
);

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = { QueryData: [] };
  }

  async componentWillMount() {
    this.setState({
      QueryData: await get(
        "https://us-east4-rhok11-stopgap.cloudfunctions.net/getAllRampRequests",
      ),
    });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Table
          height={400}
          data={this.state.QueryData}
          onRowClick={data => {
            console.log(data);
          }}
        >
          <Column width={200}>
            <HeaderCell>Business Name</HeaderCell>
            <Cell dataKey="request.businessName" />
          </Column>

          <Column width={200}>
            <HeaderCell>Business Address</HeaderCell>
            <Cell dataKey="request.businessAddress" />
          </Column>

          <Column width={200}>
            <HeaderCell>Business Details</HeaderCell>
            <Cell dataKey="request.businessDetails" />
          </Column>

          <Column width={200}>
            <HeaderCell>Met Requirements</HeaderCell>
            <Cell dataKey="request.metRequirements" />
          </Column>

          <Column width={200}>
            <HeaderCell>User Email</HeaderCell>
            <Cell dataKey="request.userEmail" />
          </Column>

          <Column width={200}>
            <HeaderCell>User Is Owner</HeaderCell>
            <boolCell
              dataKey="request.userIsOwner"
              rowData="request.userIsOwner"
            />
          </Column>

          <Column width={120}>
            <HeaderCell>Action</HeaderCell>

            <Cell>
              {rowData => {
                function handleAction() {
                  alert(`id:${rowData.id}`);
                }
                return (
                  <span>
                    <a onClick={handleAction}> Edit </a> |{" "}
                    <a onClick={handleAction}> Remove </a>
                  </span>
                );
              }}
            </Cell>
          </Column>
        </Table>
      </div>
    );
  }
}
export default Query;
