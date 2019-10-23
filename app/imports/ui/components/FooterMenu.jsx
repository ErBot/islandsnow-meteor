import React from 'react';
import { Grid, Divider, List, Input, Button } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns={3} style={{
          backgroundColor: '#252525',
          color: 'white',
          paddingLeft: '60px',
          paddingTop: '20px',
          paddingRight: '60px',
          paddingBottom: '20px',
        }}>
          <Grid.Column>
            NAVIGATION
            <Divider style={{
              backgroundColor: 'white' }}/>
            <List>
              <List.Item content='About Us'/>
              <List.Item content='Videos'/>
              <List.Item content='Store Locations'/>
            </List>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU
            <Divider style={{
              backgroundColor: 'white' }}/>
            <List>
              <List.Item content='Men'/>
              <List.Item content='Women'/>
              <List.Item content='Kids'/>
            </List>
          </Grid.Column>
          <Grid.Column>
            CONNECT
            <Divider style={{
              backgroundColor: 'white' }}/>
            Sign up for the latest updates
            <div>
              <Input placeholder='Enter email address'/>
              <Button secondary fitted>Join</Button>
            </div>
          </Grid.Column>
        </Grid>
    );
  }
}
