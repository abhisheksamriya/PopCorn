export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={`item ${item.packed ? "packed" : ""}`}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
