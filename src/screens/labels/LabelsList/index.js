import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Box, Grid, Image, Text } from "grommet";
import MockupIcon from "../../../components/images/mockup.svg";
import MockupPillIcon from "../../../components/images/mockup-pill.svg";
import { useHistory } from "react-router-dom";
import Moment from "moment";

export default function LabelsList(props) {
  const [data, setData] = useState([]);
  let history = useHistory();
  Moment.locale("en");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/v1/labels");
      // console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Box direction="column">
      {data
        ? data
            .filter((item) => item.value.name.indexOf("gltf") >= 0)
            .map((item, idx) => (
              <Box
                key={item.value.name}
                flex="grow"
                direction="row"
                border={{ color: "#D6D6D6", side: "bottom" }}
                pad="small"
              >
                <Grid
                  fill
                  row={["flex"]}
                  columns={["2/4", "1/4", "1/4"]}
                  areas={[["left", "middle", "right"]]}
                >
                  <Box gridArea="left" border="right" direction="row">
                    <Box size="small" pad={{ right: "medium" }}>
                      <Text size={"small"} weight="bold">
                        {idx + 1}.{console.log(item)}
                      </Text>
                    </Box>
                    <Box flex direction="column">
                      <Text size={"small"} weight="bold">
                        {item.value.name.substring(
                          0,
                          item.value.name.indexOf(".gltf")
                        )}
                      </Text>
                      <Text size={"xsmall"}>
                        {`Last Updated:
                        ${Moment(
                          item.value.properties.lastModified
                        ).fromNow()}`}
                      </Text>
                      <Text size={"xsmall"}>
                        {`Created:
                        ${Moment(item.value.properties.createdOn).format(
                          "MMMM Do YYYY"
                        )}`}
                      </Text>
                    </Box>
                  </Box>
                  <Box gridArea="middle" border="right">
                    <Image src={MockupIcon} />
                  </Box>
                  <Box gridArea="right" alignContent="center" justify="center">
                    <Text size={"small"} color="#C6C4C3" alignSelf="center">
                      {item.value.name}
                    </Text>
                    <Button
                      style={{ border: "1px solid #D6D6D6", padding: "0px" }}
                      plain={false}
                      margin="xsmall"
                      icon={<Image src={MockupPillIcon} />}
                      onClick={() => {
                        history.push(`/adesign/${item.value.name}`);
                      }}
                    ></Button>
                  </Box>
                </Grid>
              </Box>
            ))
        : null}
    </Box>
  );
}
