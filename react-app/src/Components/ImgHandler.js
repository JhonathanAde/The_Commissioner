// import React, {useState, useEffect} from "react";

// const loadImage = (setImageDimensions, imageUrl) => {
//   const img = new Image()
//   img.src = imageUrl;

//   img.onLoad = () => {
//     setImageDimensions({
//       height: img.height,
//       width: img.width
//     });
//   }

// }

// const ImgHandler = ({commission}) => {
//   const [imgOrient, setOrient] = useState("square");
//   const [imageDimensions, setImageDimensions] = useState({});
//   const [url, setUrl] = useState("");

//   const {image_url} = commission;
//   loadImage(setImageDimensions, image_url);
//   console.log(image_url)
  
  
//   useEffect(() => {
//     // const {image_url} = commission;
//     // console.log(image_url);
//   }, [url])
  
//   console.log(imageDimensions);


//   return (
//     <>
//       { imgOrient === "portrait" &&
//         <div className="display-portrait">
//           <picture>
//             <img className="product-img" src={url}/>
//           </picture>
//         </div>
//       }
//       { imgOrient === "landscape" &&
//         <div className="display-landscape">
//           <picture>
//             <img className="product-img" src={url}/>
//           </picture>
//         </div>
//       }

//       { imgOrient === "square" &&
//         <div className="display-square">
//           <picture>
//             <img className="product-img" src={url}/>
//           </picture>
//         </div>
//       }
//     </>
//   );

// }

// export default ImgHandler;