import { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ title, icon, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='dropdown'>
            <button className='dropdown__btn' onClick={() => setIsOpen(!isOpen)}>
                <img src={icon} alt="" />
                {title}
            </button>
            {isOpen && <div className='dropdown__content'>
                {children}
            </div>}

        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Dropdown;
