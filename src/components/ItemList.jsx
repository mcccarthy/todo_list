import { useMemo, useState } from 'react';
import Item from './Item';

function ItemList({ handleToggleItem, handleDeleteItem, items }) {
    const [sortBy, setSortBy] = useState('default');

    const handleSelect = (e) => {
        setSortBy(e.target.value);
    };

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            if (sortBy === 'completed') {
                return b.completed - a.completed;
            } else if (sortBy === 'notCompleted') {
                return a.completed - b.completed;
            }
            return 0;
        });
    }, [items, sortBy]);

    return (
        <>
            <select
                className='form-control mb-4 text-center'
                onChange={handleSelect}
                value={sortBy}>
                <option value='default'>Default</option>
                <option value='completed'>Completed</option>
                <option value='notCompleted'>Not Completed</option>
            </select>
            <div className='form-check'>
                {items.length === 0 && <p className='text-center'>Nothing to do....</p>}
                <ul>
                    {sortedItems.map((item, index) => (
                        <Item
                            key={index}
                            item={item}
                            handleToggleItem={handleToggleItem}
                            handleDeleteItem={handleDeleteItem}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ItemList;
