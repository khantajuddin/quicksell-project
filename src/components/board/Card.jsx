import PropTypes from 'prop-types';
import { priorityObject, statusObject } from './ColumnHeader';

const Card = ({task, groupBy}) => {
    return (
        <div className="task">
            <span className='task__id'>{task.id}</span>
            <h2 className='task__title'>{task.title}</h2>
            {groupBy !== "userId" ? <img className='task__avatar' src={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/32`} width={32} height={32} alt="" /> : null}
            <div className='task__cta'>
                {groupBy !== "priority" ? <div className='task__cta--btn'><img src={priorityObject[task.priority].icon} /></div> : null}
                {groupBy !== "status" ?  <div className='task__cta--btn'><img src={statusObject[task.status].icon} /></div> : null}
                {task.tag.map(tag => (<div key={tag} className='task__cta--btn'>@ {tag}</div>))}
            </div>
        </div>
    );
}

Card.propTypes = {
    task: PropTypes.object.isRequired,
    groupBy: PropTypes.string.isRequired,
};

export default Card;