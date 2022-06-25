import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import selectors from 'redux/selectors';
import { addContact } from 'redux/operations/operations-contacts';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderButton } from 'components/LoaderButton';

// import styles from './ContactForm.module.css';

const { getContacts, getContactsStatus } = selectors;

const NAME_REGEX = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const NUMBER_REGEX =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isCreating = useSelector(getContactsStatus) === 'creating';
  const [values, setValues] = useState({
    name: '',
    number: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    number: '',
  });

  // const nameInputId = nanoid();
  // const numberInputId = nanoid();

  const reset = () => {
    setValues({
      name: '',
      number: '',
    });
  };
  const validationField = (name, value, regex) => {
    if (value.match(regex)) {
      setValues({
        ...values,
        [name]: value,
      });
      setErrors({
        ...errors,
        [name]: '',
      });
      return true;
    } else {
      if (value) {
        setValues({
          ...values,
          [name]: value,
        });
        setErrors({
          ...errors,
          [name]: `wrong ${name}`,
        });
        return false;
      } else {
        setValues({
          ...values,
          [name]: value,
        });
        setErrors({
          ...errors,
          [name]: `${name} is required`,
        });
        return false;
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        validationField(name, value, NAME_REGEX);
        // setName(value);
        break;
      case 'number':
        validationField(name, value, NUMBER_REGEX);
        // setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const hasName = contacts.find(contact => contact.name === values.name);
    const hasNumber = contacts.find(
      contact => contact.number === values.number
    );
    if (hasName) {
      toast.warn(`Name is already in contacts.`);
      return;
    }
    if (hasNumber) {
      toast.warn(`Number is already in contacts.`);
      return;
    }
    const contact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact))
      .unwrap()
      .then(res => {
        toast.success(`${res.name} is add in contacts.`);
        reset();
      })
      .catch(() => {
        toast.error(`${values.name} isn't add in contacts.`);
      });
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ImportContactsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contacts
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ my: 3 }}
          >
            <Tooltip title="Name may contain only letters, apostrophe, dash and spaces">
              <TextField
                margin="normal"
                error={!!errors.name}
                helperText={errors.name}
                required
                fullWidth
                id="name"
                name="name"
                value={values.name}
                label="Name"
                autoComplete="name"
                onChange={handleChange}
              />
            </Tooltip>
            <Tooltip title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +">
              <TextField
                margin="normal"
                error={!!errors.number}
                helperText={errors.number}
                required
                fullWidth
                id="number"
                name="number"
                value={values.number}
                type="tel"
                label="Number"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Tooltip>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isCreating && <LoaderButton />}
              Add Contact
            </Button>
          </Box>
        </Box>
      </Container>
      {/* <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor={nameInputId} className={styles.label}>
          <p className={styles.text}>Name</p>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Petr Petrov"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required={true}
          />
        </label>
        <label htmlFor={numberInputId} className={styles.label}>
          <p className={styles.text}>Number</p>
          <input
            className={styles.input}
            type="tel"
            name="number"
            placeholder="+38-033-333-33-33"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required={true}
          />
        </label>

        <button type="submit" className={styles.button}>
          {isCreating && <LoaderButton />}
          Add contact
        </button>
      </form> */}
    </>
  );
};
