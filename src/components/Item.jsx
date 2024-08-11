function Item({ handleToggleItem, item, handleDeleteItem }) {
    return (
        <li>
            <label>
                <input
                    type='checkbox'
                    className='form-check-input'
                    checked={item.completed}
                    onChange={() => handleToggleItem(item.title)}
                    style={{
                        border: '1px solid #FFFF00',
                        borderRadius: '50%'
                    }}
                />
                {item.title}
            </label>
            <button
                onClick={() => handleDeleteItem(item.title)}
                className='btn btn-sm btn-outline-danger'>
                Delete
            </button>
        </li>
    );
}

export default Item;
