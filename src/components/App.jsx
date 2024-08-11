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
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='d-flex justify-content-evenly  align-items-center"'>
                    <LuListTodo
                        size={60}
                        color={'#FFFF00'}
                        // style={{ marginRight: '100px', padding: '5px' }}
                    />
                    Todo List
                </h1>

                <div className='col-8'>
                    <Counter />
                    <Select />
                    <ItemList items={items} />
                </div>
                <div className='col-4'>
                    <AddTask setItems={setItems} />
                    <ButtonGroup />
                </div>
            </div>
        </div>
    );
}

export default App;
