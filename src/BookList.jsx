const BookList = ({ books, onBookItemClick }) => {
    const handleClick = (id) => {
        onBookItemClick(id);
    }
    return (
        <div>
            <ul>
                {
                    books.map((item, id) => (
                        <li key={id} onDoubleClick={() => handleClick(id)}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default BookList;