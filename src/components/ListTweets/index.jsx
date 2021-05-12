import { Grid } from '@material-ui/core';
import Tweet from '../Tweet';

import './styles.scss';

export default function ListTweets({ allTweets, deleteTweet }) {
  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>Whoops: sem registro no momento!</h2>
      </div>
    )
  }

  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
        </Grid>
      ))}
    </Grid>
  )
}