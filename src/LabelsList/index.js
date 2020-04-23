import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LabelsList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/v1/labels");
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data
        ? data.map((item) => (
            <button
              onClick={(e) => props.selectLabel(item.value.name)}
              key={item.value.name}
            >
              {item.value.name}
            </button>
          ))
        : null}
    </div>
  );
}
