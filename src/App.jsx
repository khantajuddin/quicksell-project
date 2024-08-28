// App.js
import { useState } from 'react';
import { useTickets } from './hooks/useTickets';
import { getGroupedAndSortedData } from './utils';
import ColumnHeader from './components/board/ColumnHeader';
import './App.css';
import Card from './components/board/Card';
import Dropdown from './components/common/Dropdown';
import Display from './assets/Display.svg';

const App = () => {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');
  const { data, error, isLoading } = useTickets();
  const handleGroupChange = (key) => setGroupBy(key);
  const handleSortChange = (key) => setSortBy(key);
  return (
    <>
      <header className='board__header'>
       <Dropdown title="Display" icon={Display}>
       <div className='board__dropdown--row'>
          <label htmlFor="group-by">Grouping</label>
          <select id="group-by" onChange={(e) => {
            handleGroupChange(e.target.value);
          }}>
            <option value="userId">User</option>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='board__dropdown--row'>
        <label htmlFor="order-by">Ordering</label>
        <select id="order-by" onChange={(e) => {
          handleSortChange(e.target.value);
        }}>
          <option value="priority">Priority</option>
          <option value="title">title</option>
        </select>
        </div>
       </Dropdown>
      </header>
      <section className='board'>
      
        <div className="board__wrapper">
          <div className="board__container">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error fetching data</div>}
            {data && (
              Object.entries(getGroupedAndSortedData(data.tickets, groupBy, sortBy)).map(([groupKey, items]) => (
                <div key={groupKey} className="board__column">
                  <ColumnHeader groupBy={groupBy} groupKey={groupKey} count={items.length} users={data.users} />
                  {items.map(item => (
                    <Card key={item.id} task={item} groupBy={groupBy} />
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
