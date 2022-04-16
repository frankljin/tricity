import axios from "axios";
import { useState, useEffect } from "react";

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/items?populate=*").then((res) => {
      setItems(res?.data?.data);
    });
  }, []);

  return (
    <main>
      {items.length === 0 && (
        <p>If you see this, then the backend is not being run.</p>
      )}
      <h1>Menu</h1>
      {items.map((item) => {
        const itemAttributes = item.attributes;
        return (
          <div>
            <p>{JSON.stringify(itemAttributes)}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Menu;
