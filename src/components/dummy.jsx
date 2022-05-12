// import "./App.css";
import { useEffect, useState } from "react";
import Axios from 'axios';

function Dummy() {

const Api_key="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7";
const Base_Url = "http://api.giphy.com/v1/gifs/search";

const [searchText,setSearchText] = useState("");
const [selectedGif, setSelectedGif] = useState("");
const [searchGif,setSearchGif] = useState("");

const [addText,setAddText] = useState([]);
const [gifs,setGifs] = useState([]);


const postValue = ()=>{

  // Add Text

  const addData = {
    id: Date.now(),
    name: searchText,
    gifUrl: selectedGif
  }
  console.log(addData);
  setAddText([...addText,addData])
  setSearchText("");

  // Add Gifs
  gifResponse();
 
}

const gifResponse = async()=>{
  const response = await Axios.get(`${Base_Url}?api_key=${Api_key}&q=${searchGif}`)
    //  const res = await response.json();
    setGifs(response.images.fixed_height.url)
    
   console.log(response.images.fixed_height.url)
 }

  return (
    <div className="App">
      <div className="container">
        <textarea
          type="text"
          className="textarea form-control shadow-none mt-3"
          rows="15"
          cols="45"
          placeholder="Write Something Here..."
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
        />
        <div class="input-group mb-3 mt-2">
          <input
            type="text"
            class="form-control shadow-none inputtext"
            placeholder="Search Gif..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={searchGif}
            onChange={(e)=>setSearchGif(e.target.value)}
          />
          <div class="input-group-append">
            <span class="input-group-text " id="basic-addon2" onClick={postValue}>
              POST & SEARCH
            </span>
          </div>
        </div>
        {
          addText.map((add,index)=>{
            return <h4 key={index}>{add.name}</h4>
          })
        }
        {
          gifs.map((gif, index)=> 
          <img src={gif.images.fixed_height.url} key={"gif-"+index} onClick={() => setSelectedGif(gif.images.fixed_height.url)} />)
          }
        
      </div>
    </div>
  );
}

export default Dummy;