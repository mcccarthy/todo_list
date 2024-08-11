import AddTask from './AddTask';
import ButtonGroup from './ButtonGroup';
import Counter from './Counter';
import ItemList from './ItemList';
import { LuListTodo } from 'react-icons/lu';
import { useEffect, useState } from 'react';
import { initialItems } from '../lib/items';

function App() {
    const itemsFromLocalStorage = () => {
        try {
            const storedItems = localStorage.getItem('items');
            return storedItems ? JSON.parse(storedItems) : null;
        } catch (error) {
            console.error('Error parsing local storage items:', error);
            return null;
        }
    };

    const [items, setItems] = useState(() => itemsFromLocalStorage() || initialItems);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleRemoveAllItems = () => {
        setItems([]);
    };

    const handleReset = () => {
        setItems(initialItems);
    };

    const handleMarkAll = (completed) => {
        setItems((prevItems) => prevItems.map((item) => ({ ...item, completed })));
    };

    const handleToggleItem = (title) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.title === title ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const handleDeleteItem = (title) => {
        setItems((prevItems) => prevItems.filter((item) => item.title !== title));
    };

    const completedNumber = items.filter((item) => item.completed).length;
    const totalNumber = items.length;

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='d-flex align-items-center justify-content-evenly'>
                    <LuListTodo
                        size={60}
                        color={'#FFFF00'}
                    />
                    2 Do List
                </h1>

                <div className='col-8 d-flex flex-column'>
                    <div className='text-center'>
                        <Counter
                            completedNumber={completedNumber}
                            totalNumber={totalNumber}
                        />
                    </div>
                    <ItemList
                        handleToggleItem={handleToggleItem}
                        items={items}
                        handleDeleteItem={handleDeleteItem}
                    />
                </div>
                <div className='col-4'>
                    <AddTask handleAddItem={handleAddItem} />
                    <ButtonGroup
                        handleRemoveAllItems={handleRemoveAllItems}
                        handleReset={handleReset}
                        handleMarkAllAsIncomplete={() => handleMarkAll(false)}
                        handleMarkAllAsCompleted={() => handleMarkAll(true)}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
