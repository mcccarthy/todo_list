function Counter({ completedNumber, totalNumber }) {
    return (
        <h5
            style={{ color: '#FFFF00' }}
            className='text-center'>
            Done: {completedNumber} / {totalNumber}
        </h5>
    );
}

export default Counter;
