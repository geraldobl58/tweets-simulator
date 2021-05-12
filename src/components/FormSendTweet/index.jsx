import { useState } from 'react';

import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';

import './styles.scss';

export default function FormSendTweet({ sendTweet }) {
  const [formValue, setFormValue] = useState({
    name: '',
    tweet: ''
  });

  const onFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name] : event.target.value
    });
  }

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__title">Mensagem</h2>
      <form 
        className="form-send-tweet__form" 
        onSubmit={(event) => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
         <FormControl>
           <FormGroup>
             <TextField 
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              placeholder="Nome"
              margin="normal"
             />
           </FormGroup>
           <FormGroup>
             <TextField 
              className="form-send-tweet__form-textarea"
              type="text"
              name="tweet"
              multiline
              rows="6"
              placeholder="Tweet"
              margin="normal"
             />
           </FormGroup>
           <FormGroup>
             <Button type="submit">
               Enviar
             </Button>
           </FormGroup>
         </FormControl>
      </form>
    </div>
  )
}