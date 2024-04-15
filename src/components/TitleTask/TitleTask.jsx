import css from './TitleTask.module.css';
import { BiTask } from 'react-icons/bi';
const TitleTask = ({ text }) => {
  return (
    <h2 className={css.taskTitle}>
      <BiTask size={50} /> {text}
    </h2>
  );
};

export default TitleTask;
