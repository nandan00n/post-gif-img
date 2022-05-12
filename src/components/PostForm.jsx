import { useState } from "react";
import Gif from "./gif/Gif";

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
    handleSubmit(gif);
    setgif("");
    setShow(!show)
  };


  const gettext = (gifs) => {
    console.log(gifs, 'post');
    setgif(gifs)
  }

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="text__container" >

          <textarea onChange={(e) => setgif(e.target.value)}  value={gif} />

          <button className="post__form__button"  
            // disabled={isTextareaDisabled}
            >{submitLabel}
          </button>

          {hasCancelButton && (
            <button type="button" className="cancel__button post__form__cancel__buttom"
              onClick={handleCancel}>
              Cancel
            </button>
          )}

        </div>
      </form>

      {show ? <Gif gettext={gettext} /> : null}
      <button className="gif" onClick={handleClick}>gif</button>

    </>
  )
}

export default PostForm;