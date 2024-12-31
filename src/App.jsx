import "./App.css";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import Stats from "./Components/Stats";
import { useEffect, useState } from "react";
import PackingList from "./Components/PackingList/PackingList";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);
  useEffect(() => {}, []);
  const handleAddItems = (item) => {
    setItems((prev) => [...prev, item]);
  };
  const handleToggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearList = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirm) setItems([]);
  };
  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
