import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Box,
  grommet,
  Grommet,
  Nav,
  Stack,
  Text,
  Sidebar,
  Image,
} from "grommet";
import { Link } from "react-router-dom";

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
    <Box direction="column">
      {data
        ? data.map((item) => (
            <Link to={`/adesign/${item.value.name}`}>
              <Button
                style={{ margin: "10px" }}
                primary
                key={item.value.name}
                label={item.value.name}
              />
            </Link>
          ))
        : null}
    </Box>
  );
}
