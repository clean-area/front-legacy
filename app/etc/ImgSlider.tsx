"use client";

import SimpleImageSlider from "react-simple-image-slider";
import useWindowSize from "../hook/useWindowSize";

const images = [
  {
    url: "https://i2-prod.liverpoolecho.co.uk/incoming/article26829395.ece/ALTERNATES/s1200/1_County-Cat-Rescue-and-Sanctuary-in-Walton-Photo-by-Colin-Lane.jpg",
  },
  {
    url: "https://post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1200x628-facebook-1200x628.jpg",
  },
  {
    url: "https://i.cbc.ca/1.6652034.1668528383!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/oscar-the-cat.jpg",
  },
];

export default function ImgSlider() {
  const [width] = useWindowSize();

  return (
    <div>
      {width ? (
        <SimpleImageSlider
          width={width > 410 ? "410px" : "100%"}
          height={220}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
