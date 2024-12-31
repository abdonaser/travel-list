function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <>
      <footer className="stats">
        <em>
          you Have {numItems} items on Your List , and you already packed{" "}
          {percentage}%
        </em>
      </footer>
    </>
  );
}

export default Stats;
