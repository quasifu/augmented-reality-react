import React, { useState } from "react";
import { Image, Box, Button } from "grommet";
import FourArrowsIcon from "../../components/images/4arrows.svg";
import { Add, Subtract } from "grommet-icons";
import DownloadIcon from "../../components/images/download.svg";
import ExportIcon from "../../components/images/export.svg";
import RotateIcon from "../../components/images/rotate.svg";
import ShareIcon from "../../components/images/share.svg";
import SmartIcon from "../../components/images/smart.svg";

export default function MiddlePane({ metadata, setShowLayer }) {
  const [mainImage, setMainImage] = useState({
    index: 0,
    url: metadata && metadata.images && metadata.images[0],
  });
  //setMainImage();
  const setNewImage = () => {
    console.log(mainImage, metadata, mainImage.index < metadata.images.length);
    if (mainImage.index < metadata.images.length - 1) {
      let newIndex = mainImage.index + 1;
      setMainImage({ index: newIndex, url: metadata.images[newIndex] });
    } else {
      setMainImage({
        index: 0,
        url: metadata && metadata.images && metadata.images[0],
      });
    }
  };
  return (
    <Box style={{ position: "relative" }}>
      <Image src={mainImage && mainImage.url} fit="contain" />
      <Box
        direction="column"
        alignContent="center"
        align="center"
        alignSelf="center"
        pad="xsmall"
        margin="none"
        style={{ position: "absolute", bottom: 60, right: 0 }}
      >
        <Box round="medium" border pad="xsmall">
          <Button
            plain
            style={{
              padding: "20px 5px",
              borderBottom: "1px solid #c0c1c0",
            }}
            icon={<Add style={{ height: "15px" }} />}
            onClick={() => {}}
          />
          <Button
            plain
            style={{
              padding: "20px 5px",
            }}
            icon={<Subtract style={{ height: "15px" }} />}
            onClick={() => {}}
          />
        </Box>
        <Button
          plain
          style={{
            padding: "20px 5px",
          }}
          icon={<Image src={RotateIcon} style={{ height: "20px" }} />}
          onClick={() => {
            setNewImage();
          }}
        />
      </Box>
      <Box direction="row" justify="between">
        <Box
          round="medium"
          direction="row"
          background="white"
          alignContent="center"
          align="center"
          margin={{ horizontal: "xsmall" }}
          alignSelf="center"
          pad="xsmall"
        >
          <Button
            plain
            style={{
              padding: "5px 20px",
              borderRight: "1px solid #c0c1c0",
            }}
            icon={<Image src={FourArrowsIcon} style={{ height: "20px" }} />}
            onClick={() => {}}
          />
          <Button
            plain
            style={{
              padding: "5px 20px",
            }}
            icon={<Image src={ExportIcon} style={{ height: "20px" }} />}
            onClick={() => setShowLayer(true)}
          />
        </Box>
        <Box
          round="medium"
          direction="row"
          background="white"
          alignContent="center"
          align="center"
          margin={{ horizontal: "xsmall" }}
          alignSelf="center"
          pad="xsmall"
        >
          <Button
            plain
            style={{
              padding: "5px 20px",
              borderRight: "1px solid #c0c1c0",
            }}
            icon={<Image src={SmartIcon} style={{ height: "20px" }} />}
            onClick={() => {}}
          />
          <Button
            plain
            style={{
              padding: "5px 20px",
              borderRight: "1px solid #c0c1c0",
            }}
            icon={<Image src={ShareIcon} style={{ height: "20px" }} />}
            onClick={() => {}}
          />
          <Button
            plain
            style={{
              padding: "5px 20px",
            }}
            icon={<Image src={DownloadIcon} style={{ height: "20px" }} />}
            onClick={() => setShowLayer(true)}
          />
        </Box>
      </Box>
    </Box>
  );
}
