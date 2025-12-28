function List({ items, renderItem, emptyMessage = "No items found" }) {
  if (!items.length) return <p className="empty">{emptyMessage}</p>;

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li className="listItem" key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default List;
