import React, { useState } from "react";
import MainSlider from "./main-slider";
import ThumbsSlider from "./thumbs-slider";

const Gallery: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="gallery">
      <MainSlider thumbsSwiper={thumbsSwiper} />
      <ThumbsSlider setThumbsSwiper={setThumbsSwiper} />
    </div>
  );
};

export default Gallery;
