function ButtonGroup({
    handleRemoveAllItems,
    handleReset,
    handleMarkAllAsIncomplete,
    handleMarkAllAsCompleted
}) {
    return (
        <div className='mt-5'>
            <button
                onClick={handleMarkAllAsCompleted}
                className='btn btn-primary w-100 d-block mb-2'>
                Mark all as completed
            </button>
            <button
                onClick={handleMarkAllAsIncomplete}
                className='btn btn-primary w-100 d-block mb-2'>
                Mark all as incomplete
            </button>
            <button
                onClick={handleReset}
                className='btn btn-primary w-100 d-block mb-2'>
                Reset to initial state
            </button>
            <button
                onClick={handleRemoveAllItems}
                className='btn btn-primary w-100 d-block mb-2'>
                Remove all items
            </button>
        </div>
    );
}

export default ButtonGroup;
