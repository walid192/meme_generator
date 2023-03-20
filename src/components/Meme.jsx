import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    top_text:"",
    bottom_text:"",
    img: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allmemes, setAllmemes] = React.useState([]);

  function getMeme() {
    let numb = Math.floor(Math.random() * allmemes.length);
    const url = allmemes[numb].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, img: url };
    });
  }
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json(res))
    .then(data=>setAllmemes(data.data.memes))
    },[])

  function handleChange(event){
    const {name,value}=event.target
    setMeme((prevMeme)=>{
      return {...prevMeme,[name]:value }
    })
  }
  return (
    <main>
      <div className="meme_form">
        <input
          className="inputs"
          type="text"
          placeholder="Top Text"
          name="top_text"
          onChange={handleChange}
          value={meme.top_text}
        />
        <input
          className="inputs"
          type="text"
          placeholder="Bottom Text"
          name="bottom_text"
          value={meme.bottom_text}
          onChange={handleChange}
        />
        <button className="form_button" onClick={getMeme}>
          Get a new meme image 🔬
        </button>
      </div>
      <div className="meme">
        <img className="memeImg" src={meme.img} alt="meme image" />
        <h2 className="meme--text top">{meme.top_text} </h2>
        <h2 className="meme--text bottom">{meme.bottom_text}</h2>
      </div>
    </main>
  );
}
