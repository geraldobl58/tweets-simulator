import TwitterLogo from '../../assets/images/twitter-logo.png'

import './styles.scss';

export default function Header() {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="Twitter" />
      <h1>Tweets Simulator</h1>
    </div>
  )
}