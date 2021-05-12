import { Card, CardContent } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import moment from 'moment';

import './styles.scss';

export default function Tweet({ tweet: { name, tweet, time }, index, deleteTweet }) {
  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet__header">
          <h3>{name}</h3>
          <DeleteTwoToneIcon 
            onClick={() => deleteTweet(index)}
          />
        </div>
        <p>{tweet}</p>
        <div className="tweet__date-add-tweet">
          {moment(time).format('DD/MM/YYYY')}
        </div>
      </CardContent>
    </Card>
  )
}