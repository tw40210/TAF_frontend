import { Box, CardMedia } from "@mui/material";

import { handleFrameImagePath } from "../heplers/image_helper";



const FramedImage = ({ imagePath }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: "100%"

      }}
    >
      {/* Actual Image */}
      <CardMedia
                    component="img"
                    image={imagePath}
                    alt="Example Image"
                    sx={{
                      display: "block", // Ensures no extra spacing below the image
                      width: "100%", // Set this or a fixed width if needed
                      height: "auto", // Ensures the image retains its natural aspect ratio
                    }}
                  />
      {/* Frame PNG */}
      <Box
        component="img"
        src={handleFrameImagePath(2)} // Replace with the path to your frame PNG
        alt="Frame"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 2,
          pointerEvents: "none", // Prevent the frame from interfering with interactions
        }}
      />

    </Box>
  )
}

export default FramedImage;