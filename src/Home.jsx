import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/items');
            setItems(response.data)
        } catch (err) {
            console.error(err);
        }
      }
      fetchItems();
    }, []);

  return (
    <div>
        {items.map((item, index) => (
            <div key={index}>
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <p>{item.height}</p>
                <p>{item.weight}</p>
            </div>
        ))}
    </div>
  )
}

export default Home