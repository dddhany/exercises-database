import React, { Fragment } from 'react'
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

const styles = {
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  height: 500,
  overflowY: 'auto'
}

export default ({ exercises }) => (
  <Grid container spacing={24}>
    <Grid item sm>
      <Paper style={styles}>
        {exercises.map(([group, exercises]) => (
          <Fragment>
            <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
              {group}
            </Typography>
            <List component="ul">
              {exercises.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles}>
        <Typography variant="h4">Welcome!</Typography>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>
          Please select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
)
