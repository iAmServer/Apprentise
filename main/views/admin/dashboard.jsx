import React from 'react'

import { ApiClient, ViewHelpers } from 'admin-bro'
import { Label, Table, Columns, Column, WrapperBox, ValueBlock, StyledButton } from 'admin-bro/components'
import { colors } from 'admin-bro/style'

import DashboardHeader from './dashboard-header'
import Info from './info'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.h = new ViewHelpers()
    this.state = {
      data: {
        categories: [],
        pagesCount: 0,
        usersCount: 0,
      }
    }
  }

  componentDidMount() {
    const api = new ApiClient()
    api.getDashboard({test: 1}).then((response) => {
      this.setState({ data: response.data })
    })
  }

  render() {
    const { skillCount, userCount, resCount } = this.state.data
    // const items = []
    // console.log(transactions)
    // for (const [index, value] of transactions) {
    //     console.log(value);
    // }
    return (
      <React.Fragment>
        <DashboardHeader />
        <WrapperBox style={{ marginTop: '-100px', zIndex: 2 }}>
          <Columns>
            {/* <Column width={4}>
              <Info />
            </Column> */}
            <Column width={12}>
              <Columns>
                <Column width={4}>
                  <ValueBlock
                    value={skillCount}
                    icon="fas fa-file"
                    color={colors.error}
                    href={this.h.listUrl({ resourceId: 'Skills' })}
                    label="Number of Skills"
                  />
                </Column>
                <Column width={4}>
                  <ValueBlock
                    value={userCount}
                    icon="fas fa-user"
                    color={colors.warning}
                    href={this.h.listUrl({ resourceId: 'Users' })}
                    label="Number of Users"
                  />
                </Column>
                <Column width={4}>
                  <ValueBlock
                    value={resCount}
                    icon="fas fa-user"
                    color={colors.warning}
                    href={this.h.listUrl({ resourceId: 'Resources' })}
                    label="Number of Resources"
                  />
                </Column>
                <Column width={12}>
                    <Columns>
                        <Column width="{6}">
                            <WrapperBox border>
                                <h1>5 Latest Transactions</h1>
                            </WrapperBox>
                            {/* <Table>
                                <thead>
                                    <tr>
                                    <th><Label>Category name</Label></th>
                                    <th><Label>Number of comments</Label></th>
                                    <th style={{ width: 200 }}><Label>Actions</Label></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map(c => (
                                    <tr key={c.name}>
                                        <td>{c.amount}</td>
                                        <td>{c.status}</td>
                                        <td>
                                        <StyledButton primary={true} to={this.h.recordActionUrl({ resourceId: 'Transactions', recordId: c._id, actionName: 'show' })}     >
                                            Show me this
                                        </StyledButton>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table> */}
                        </Column>
                        <Column width="{6}">
                            <WrapperBox border>
                                <h1>5 Latest Trainings</h1>
                            </WrapperBox>
                            {/* <Table>
                                <thead>
                                    <tr>
                                    <th><Label>Category name</Label></th>
                                    <th><Label>Number of comments</Label></th>
                                    <th style={{ width: 200 }}><Label>Actions</Label></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trainings.map(c => (
                                    <tr key={c._id}>
                                        <td>{c.title}</td>
                                        <td>{c.comments}</td>
                                        <td>
                                        <StyledButton primary={true} to={this.h.recordActionUrl({ resourceId: 'Category', recordId: c._id, actionName: 'show' })}     >
                                            Show me this
                                        </StyledButton>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </Table> */}
                        </Column>
                    </Columns>
                </Column>
                {/* <Column width={12}>
                  <WrapperBox border>
                    <h1>First 5 categories</h1>
                    <Table>
                      <thead>
                        <tr>
                          <th><Label>Category name</Label></th>
                          <th><Label>Number of comments</Label></th>
                          <th style={{ width: 200 }}><Label>Actions</Label></th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map(c => (
                          <tr key={c._id}>
                            <td>{c.title}</td>
                            <td>{c.comments}</td>
                            <td>
                              <StyledButton
                                primary={true}
                                to={this.h.recordActionUrl({ resourceId: 'Category', recordId: c._id, actionName: 'show' })}
                              >
                                Show me this
                              </StyledButton>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </WrapperBox>
                </Column> */}
              </Columns>
            </Column>
          </Columns>
        </WrapperBox>
      </React.Fragment>
    )
  }
}
