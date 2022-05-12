

import React from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";
import ReactGiphySearchbox from "react-giphy-searchbox";
// import githubLogo from "./assets/github.png";

const Gif = ({gettext, handleClick}) => (
    <>
         <a href="https://developers.giphy.com/docs/api/schema/#gif-object"
                target="_blank"
                rel="noopener noreferrer">
            </a>
            <div className="searchboxWrapper" style={{ backgroundColor:"white", width: "auto", margin:"auto"}}>
                <ReactGiphySearchbox
                    apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                    onSelect={(item) => {gettext(item.embed_url)
                    console.log(item)
                    {handleClick()};
                    }}
                    masonryConfig={[
                        { columns: 2, imageWidth: 80, gutter: 5 },
                        { mq: "700px", columns: 6, imageWidth: 93, gutter: 5}
                    ]}
                />
    </div>
    
  </>
);

export default Gif;










// import React, { useState } from "react";
// import "./styles.css";
// import ReactGiphySearchbox from "react-giphy-searchbox";

// export const Gif = () => {

//     // const [gifs, setGifs] = useState([]);

//     // const [selectedGif, setSelectedGif] = useState("");


//     const postValue = () => {

//         // Add Text

//     //     const addData = {
//     //         id: Date.now(),
//     //         gifUrl: selectedGif
//     //     }

//     // }

//     // const gifResponse = async () => {
//     //     // const response = await Axios.get(`${Base_Url}?api_key=${Api_key}&q=${searchGif}`)
//     //     //  const res = await response.json();
//     //     // setGifs(response.data.data);
//     //     // console.log(response.data.data)
//     // }

//     return (
//         <>
//             <a href="https://developers.giphy.com/docs/api/schema/#gif-object"
//                 target="_blank"
//                 rel="noopener noreferrer">
//             </a>
//             <div className="searchboxWrapper">
//                 <ReactGiphySearchbox
//                     apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
//                     onSelect={(item) => console.log(item)}
//                     masonryConfig={[
//                         { columns: 2, imageWidth: 110, gutter: 5 },
//                         { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
//                     ]}
//                 />
                
//                 {/* {
//                     gifs.map((gif, index) => <img src={gif.images.fixed_height.url} key={"gif-" + index} onClick={() => setSelectedGif(gif.images.fixed_height.url)} />)
//                 } */}

//             </div>
//         </>
//     )
// }
