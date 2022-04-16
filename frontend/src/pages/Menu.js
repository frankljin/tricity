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
    <div>
      {items.map((item) => {
        const itemAttributes = item.attributes;
        return (
          <div>
            <p>{JSON.stringify(itemAttributes)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
