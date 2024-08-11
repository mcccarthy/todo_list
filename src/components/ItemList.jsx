import Item from './Item';

function ItemList({ items }) {
    // eslint-disable-next-line no-unused-vars

    return (
        <div className='form-check'>
            <ul>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
