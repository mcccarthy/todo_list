import AddTask from './AddTask';
import ButtonGroup from './ButtonGroup';
import Counter from './Counter';
import ItemList from './ItemList';
import Select from './Select';
import { LuListTodo } from 'react-icons/lu';
import { useState } from 'react';
import { initialItems } from '../lib/items';

function App() {
    const [items, setItems] = useState(initialItems);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleRemoveAllItems = () => {
        setItems([]);
    };
    const handleReset = () => {
        setItems(initialItems);
    };

    const handleMarkAllAsIncomplete = () => {
        setItems((prevItems) => prevItems.map((item) => ({ ...item, completed: false })));
    };
    const handleMarkAllAsCompleted = () => {
        setItems((prevItems) => prevItems.map((item) => ({ ...item, completed: true })));
    };

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='d-flex align-items-center justify-content-evenly'>
                    <LuListTodo
                        size={60}
                        color={'#FFFF00'}
                        // style={{ marginRight: '100px', padding: '5px' }}
                    />
                    2 Do List
                </h1>

                <div className='col-8'>
                    <Counter />
                    <Select />
                    <ItemList items={items} />
                </div>
                <div className='col-4'>
                    <AddTask handleAddItem={handleAddItem} />
                    <ButtonGroup
                        handleRemoveAllItems={handleRemoveAllItems}
                        handleReset={handleReset}
                        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
                        handleMarkAllAsCompleted={handleMarkAllAsCompleted}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
