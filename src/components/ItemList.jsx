import Item from './Item';

function ItemList({ handleToggleItem, handleDeleteItem, items }) {
    // eslint-disable-next-line no-unused-vars

    return (
        <div className='form-check'>
            <ul>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                        handleToggleItem={handleToggleItem}
                        handleDeleteItem={handleDeleteItem}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
