import { useState } from "react";
import Gif from "./gif/Gif";
import './styles.css';

const PostForm = ({ item, handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
  updatePost }) => {

  const [text, setText] = useState(initialText)
  const [gif, setgif] = useState()
  const [show, setShow] = useState(false)

  // const isTextareaDisabled = text.length === 0;        

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    handleSubmit(gif);
    setgif("")
    setText("");
    // setShow(!show)
  };


  const getgif = (gifs) => {
    console.log(gifs, 'post');
    setgif(gifs)
  }

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className="container">
      <div className="wrapper">
        <section className="post">
          <form onSubmit={onSubmit}>
            <div className="content">
              <img style={{ backgroundColor: '#1a81ff', borderRadius: "50%" }} src={require("../images/logo2.png")} alt="logo" />
              <div className="details">

                <i className="fas fa-user-friends"></i>
                <span>Friends</span>
                <i className="fas fa-caret-down"></i>

              </div>
            </div>
            <textarea onChange={(e) => setText(e.target.value)} value={text} placeholder="What's on your mind" />

            {/* gif image will come here */}

            <div className="gif__area" onClick={(e) => setgif(e.target.value)} value={gif}>
            {gif}
            </div>
            <button type="submit" className="post__button"  value={text}>{submitLabel}</button>
            <button type="submit" className="gif__button" onClick={handleClick} value={gif}>Gif</button>
          </form>
        </section>
      </div>

      {show ? <Gif gettext={getgif} handleClick={handleClick} /> : null}
      {/* <button className="gif__button" onChange={(e) => setgif(e.target.value)} value={gif} onClick={handleClick}>Gif</button> */}

    </div>


  )
}

export default PostForm;

{/* <form onSubmit={onSubmit}>
        <div classNameName="text__container" >

          <textarea onChange={(e) => setgif(e.target.value)}  value={gif} />

          <button classNameName="post__form__button"  
            // disabled={isTextareaDisabled}
            >{submitLabel}
          </button>

          {hasCancelButton && (
            <button type="button" classNameName="cancel__button post__form__cancel__buttom"
              onClick={handleCancel}>
              Cancel
            </button>
          )}

        </div>
      </form> */}
{/* 
      {show ? <Gif gettext={gettext} handleClick={handleClick}/> : null}
      <button classNameName="gif" onClick={handleClick}>gif</button>

    {/* </>
  )
} */}

