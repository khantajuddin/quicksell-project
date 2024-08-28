import PropTypes from 'prop-types';

import NoPriority from '../../assets/No-priority.svg';
import LowPriority from '../../assets/Low-priority.svg';
import MediumPriority from '../../assets/Medium-priority.svg';
import HighPriority from '../../assets/High-priority.svg';
import UrgentPriority from '../../assets/Urgent-priority.svg';
import Backlog from '../../assets/Backlog.svg';
import Todo from '../../assets/To-do.svg';
import Inprogress from '../../assets/in-progress.svg';
import Done from '../../assets/Done.svg';
import Cancelled from '../../assets/Cancelled.svg';

import Add from '../../assets/add.svg';
import ThreeDotMenu from '../../assets/three-dot-menu.svg';

import { getUserData } from '../../utils';


export const priorityObject = {
    0: {
        name: 'No priority',
        icon: NoPriority
    },
    1: {
        name: 'Low',
        icon: LowPriority
    },
    2: {
        name: 'Medium',
        icon: MediumPriority
    },
    3: {
        name: 'High',
        icon: HighPriority
    },
    4: {
        name: 'Urgent',
        icon: UrgentPriority
    }
}
export const statusObject = {
    "Backlog": {
        name: 'Backlog',
        icon: Backlog
    },
    "Todo": {
        name: 'Todo',
        icon: Todo
    },
    "In progress": {
        name: 'In progress',
        icon: Inprogress
    },
    "Done": {
        name: 'Done',
        icon: Done
    },
    "Cancelled": {
        name: 'Cancelled',
        icon: Cancelled
    }
}

const ColumnHeader = ({ groupBy, users, groupKey, count }) => {
    return <div className="board__column-header">
        {groupBy === 'userId' ? <>
            <img className='board__column-header--avatar' src={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/16`} width={16} height={16} alt="" />
            <strong className='board__column-header--title'>{getUserData(users, groupKey).name}</strong>
        </> : null}
        {groupBy === 'status' ? <>
            <img className='board__column-header--img'  src={statusObject[groupKey].icon} />
            <strong className='board__column-header--title'>{statusObject[groupKey].name}</strong>
        </> : null}
        {groupBy === 'priority' ? <>
            <img className='board__column-header--img'  src={priorityObject[groupKey].icon} />
            <strong className='board__column-header--title'>{priorityObject[groupKey].name}</strong>
        </> : null}
        <span className='board__column-header--count'>{count}</span>
        
        <div className='board__column-header--right'>
        <span className='board__column-header--icon'><img src={Add} alt="" /></span>
        <span className='board__column-header--icon'><img src={ThreeDotMenu} alt="" /></span>
        </div>
    </div>
}

ColumnHeader.propTypes = {
    groupBy: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    groupKey: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

export default ColumnHeader;