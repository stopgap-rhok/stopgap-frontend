import React, { Component } from "react";
import { get } from "../../utility/http";

import { Button, Container, Content, Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = { QueryData: [] };
  }

  async componentWillMount() {
    await import("rsuite/dist/styles/rsuite-default.css");
    this.setState({
      QueryData: await get(
        "https://us-east4-rhok11-stopgap.cloudfunctions.net/getAllRampRequests",
      ),
    });
    console.log(this.state);
  }
  render() {
    return (
      <Container>
        <Content>
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
              <HeaderCell>Non-residential</HeaderCell>
              <Cell dataKey="request.nonResidential" />
            </Column>

            <Column width={200}>
              <HeaderCell>Step is wide</HeaderCell>
              <Cell dataKey="request.stepIsWide" />
            </Column>

            <Column width={200}>
              <HeaderCell>Sidewalk is Flat</HeaderCell>
              <Cell dataKey="request.sidewalkFlat" />
            </Column>

            <Column width={200}>
              <HeaderCell>Step is within acceptable range</HeaderCell>
              <Cell dataKey="request.correctHeight" />
            </Column>

            <Column width={200}>
              <HeaderCell>Attachments</HeaderCell>
              <Cell dataKey="request.attachments" />
            </Column>

            <Column width={200}>
              <HeaderCell>Has single step</HeaderCell>
              <Cell dataKey="request.singleStep" />
            </Column>

            <Column width={200}>
              <HeaderCell>User Email</HeaderCell>
              <Cell dataKey="request.userEmail" />
            </Column>

            <Column width={200}>
              <HeaderCell>Can Contact</HeaderCell>
              <Cell dataKey="request.canContact" />
            </Column>

            <Column width={200}>
              <HeaderCell>User Is Owner</HeaderCell>
              <Cell dataKey="request.userIsOwner" />
            </Column>

            <Column width={120}>
              <HeaderCell>Action</HeaderCell>

              <Cell>
                {rowData => {
                  const handleAction = async () => {
                    const id = rowData.request.requestId;

                    const url = `https://us-east4-rhok11-stopgap.cloudfunctions.net/deleteRampRequest?rampRequestId=${id}`;
                    await window.fetch(url, {
                      method: "POST",
                      mode: "no-cors",
                    });
                    this.setState(state => ({
                      QueryData: state.QueryData.filter(
                        ({ requestId }) => requestId !== id,
                      ),
                    }));
                  };
                  return (
                    <Button type="button" onClick={handleAction}>
                      Remove
                    </Button>
                  );
                }}
              </Cell>
            </Column>
          </Table>
        </Content>
      </Container>
    );
  }
}
export default Query;
