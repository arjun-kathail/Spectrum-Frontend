/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from './styles.module.css';

class EventRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formOpen: false,
      participantName: '',
      participantAge: null,
      participantPhoneNumber: '',
      participantCollegeName: '',
      participantCollegeId: '',
      tricityResident: false,
      stayRequired: false,
      errors: {
        participantName: '',
        participantAge: '',
        participantPhoneNumber: '',
        participantCollegeName: '',
        participantCollegeId: '',
      },
    };
  }

  static getDerivedStateFromProps(props, current_state) {
    if (current_state.formOpen !== props.isFormOpen) {
      return {
        formOpen: props.isFormOpen,
      };
    }
    return null;
  }

  handleClickOpen = () => this.props.setIsFormOpen(true);

  handleClose = () => this.props.setIsFormOpen(false);

  validateForm = (data) => {
    const {
      participantName,
      participantAge,
      participantPhoneNumber,
      participantCollegeName,
      participantCollegeId,
    } = data;
    let participantNameError = '',
      participantAgeError = '',
      participantPhoneNumberError = '',
      participantCollegeNameError = '',
      participantCollegeIdError = '',
      error = false;

    if (!participantName || !participantName.trim()) {
      participantNameError = 'Name must be entered.';
      error = true;
    } else if (!participantAge || participantAge <= 0 || participantAge >= 40) {
      participantAgeError = 'Age is required in valid format.';
      error = true;
    } else if (!participantPhoneNumber || !participantPhoneNumber.trim()) {
      participantPhoneNumberError = 'Phone Number is required in valid format';
      error = true;
    } else if (!participantCollegeName || !participantCollegeName.trim()) {
      participantCollegeNameError = 'College Name must be entered.';
      error = true;
    } else if (!participantCollegeId || !participantCollegeId.trim()) {
      participantCollegeIdError = 'College ID must be entered.';
      error = true;
    }

    this.setState(() => ({
      errors: {
        participantName: participantNameError,
        participantAge: participantAgeError,
        participantPhoneNumber: participantPhoneNumberError,
        participantCollegeName: participantCollegeNameError,
        participantCollegeId: participantCollegeIdError,
      },
    }));

    return !error;
  };

  handleRegisterDetailsSubmit = () => {
    const isValid = this.validateForm(this.state);

    if (isValid) {
      alert('Details Submitted');
      alert(JSON.stringify(this.state));
    }
  };

  handleEventChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleResidentCheckChange = (event) => {
    const checked = event.target.checked;
    this.setState({
      tricityResident: checked,
    });
  };

  handleAccomodationCheckChange = (event) => {
    const checked = event.target.checked;
    this.setState({
      stayRequired: checked,
    });
  };

  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <Dialog open={this.state.formOpen} onClose={() => this.handleClose()}>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            Participant Details
          </DialogTitle>
          <DialogContent>
            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { mt: 1 },
              }}
              autoComplete='off'
              onSubmit={() => this.handleRegisterDetailsSubmit()}
            >
              <Grid container spacing={2}>
                <Grid item xs={8} sm={8} md={10}>
                  <TextField
                    name='participantName'
                    type={'text'}
                    required
                    fullWidth
                    id='participantName'
                    label='Full Name'
                    autoFocus
                    onChange={(e) => this.handleEventChange(e)}
                    value={this.state.participantName}
                    inputProps={{ maxLength: 50 }}
                  />
                  <div className={styles.invalid__feedback}>
                    {this.state.errors.participantName}
                  </div>
                </Grid>
                <Grid item xs={4} sm={4} md={2}>
                  <TextField
                    name='participantAge'
                    type={'number'}
                    required
                    fullWidth
                    id='participantAge'
                    label='Age'
                    autoFocus
                    onChange={(e) => this.handleEventChange(e)}
                    value={this.state.participantAge}
                    inputProps={{ maxLength: 50 }}
                  />
                  <div className={styles.invalid__feedback}>{this.state.errors.participantAge}</div>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name='participantCollegeName'
                    type={'text'}
                    required
                    fullWidth
                    id='participantCollegeName'
                    label='College Name'
                    autoFocus
                    onChange={(e) => this.handleEventChange(e)}
                    value={this.state.participantCollegeName}
                    inputProps={{ maxLength: 50 }}
                  />
                  <div className={styles.invalid__feedback}>
                    {this.state.errors.participantCollegeName}
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    name='participantPhoneNumber'
                    type={'tel'}
                    required
                    fullWidth
                    id='participantPhoneNumber'
                    label='Phone Number'
                    autoFocus
                    onChange={(e) => this.handleEventChange(e)}
                    value={this.state.participantPhoneNumber}
                    inputProps={{ maxLength: 10 }}
                  />
                  <div className={styles.invalid__feedback}>
                    {this.state.errors.participantPhoneNumber}
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    name='participantCollegeId'
                    type={'text'}
                    required
                    fullWidth
                    id='participantCollegeId'
                    label='Roll No.'
                    autoFocus
                    onChange={(e) => this.handleEventChange(e)}
                    value={this.state.participantCollegeId}
                    inputProps={{ maxLength: 50 }}
                  />
                  <div className={styles.invalid__feedback}>
                    {this.state.errors.participantCollegeId}
                  </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControlLabel
                    label='Tricity Resident'
                    control={
                      <Checkbox
                        checked={this.state.tricityResident}
                        onChange={(e) => this.handleResidentCheckChange(e)}
                      />
                    }
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControlLabel
                    label='Accomodation Required'
                    control={
                      <Checkbox
                        checked={this.state.stayRequired}
                        onChange={(e) => this.handleAccomodationCheckChange(e)}
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    fullWidth
                    variant='contained'
                    type='submit'
                    sx={{
                      color: '#fff',
                      backgroundColor: '#A420D0',
                      '&:hover': { background: '#A420D0' },
                    }}
                  >
                    Submit <TelegramIcon />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default EventRegisterForm;
