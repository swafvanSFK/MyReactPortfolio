import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProgressBar.css'

const Progress =({item}) => {
  const now = item.value;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default Progress;