import { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import ModalContainer from '../ModalContainer';
import { TWEETS_STORAGE } from '../../utils/constants';

import './styles.scss';
import FormSendTweet from '../FormSendTweet';

export default function SendTweet({ setToastProps, allTweets }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const sendTweet = (e, formValue) => {
    e.preventDefault();
    const { name, tweet } = formValue;
    let allTweetArray = [];

    if (allTweets) {
      allTweetArray = allTweets;
    }

    if (!name || !tweet) {
      setToastProps({
        open: true,
        text: 'Whoops: Todos os campos são obrigátorios!'
      });
    } else {
      formValue.time = moment();
      allTweetArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetArray));
      setToastProps({
        open: true,
        text: 'Aeeeee: Tweet enviado com sucesso'
      });
      closeModal();
    }
    allTweetArray = [];
  }

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  )
}  