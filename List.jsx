function List({ category = "Category", items = [] }) {
    const listItems = items.map(item => (
        <li key={item.id}>
            {item.name}: &nbsp;<b>{item.weight}</b>
        </li>
    ));

    return (
        <> 
            <h3 className="list-category">{category}</h3> 
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
export default List
