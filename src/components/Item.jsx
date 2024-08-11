function Item({ item }) {
    return (
        <li>
            <label>
                <input
                    type='checkbox'
                    className='form-check-input'
                    defaultChecked={item.completed}
                />
                {item.title}
            </label>
            <button className='btn btn-sm btn-outline-danger'>Delete</button>
        </li>
    );
}

export default Item;
