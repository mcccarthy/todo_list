function Item({ item }) {
    return (
        <li>
            <label>
                <input
                    type='checkbox'
                    className='form-check-input'
                    defaultChecked={item.completed}
                    style={{
                        border: '1px solid #FFFF00',
                        borderRadius: '4px'
                    }}
                />
                {item.title}
            </label>
            <button className='btn btn-sm btn-outline-danger'>Delete</button>
        </li>
    );
}

export default Item;
