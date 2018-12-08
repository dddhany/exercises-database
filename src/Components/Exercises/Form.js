import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  FormControl: {
    width: 300
  }
})

export default withStyles(styles)(
  class extends Component {
    state = this.getInitState()

    getInitState() {
      const { exercise } = this.props
      return exercise
        ? exercise
        : {
            title: '',
            description: '',
            muscles: ''
          }
    }

    componentWillReceiveProps({ exercise }) {
      this.setState({
        ...exercise
      })
    }

    handleChange = name => ({ target: { value } }) =>
      this.setState({
        [name]: value
      })

    handleSubmit = () => {
      // TODO: validate
      const { exercise } = this.state
      console.log(exercise)
      this.props.onSubmit({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
      })
      this.setState({
        open: false,
        exercise: {
          title: '',
          description: '',
          muscles: ''
        }
      })
    }

    render() {
      const { title, description, muscles } = this.state,
        { classes, muscles: categories } = this.props
      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select value={muscles} onChange={this.handleChange('muscles')}>
              {categories.map(category => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            label="Description"
            value={description}
            multiline
            rows="4"
            onChange={this.handleChange('description')}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            Create
          </Button>
        </form>
      )
    }
  }
)
