export default function Meme() {
  return (
    <main className="meme">
      <form>
        <div className="meme--inputs">
          <input
            type="text"
            placeholder="Top text"
            className="meme--top-text"
          ></input>
          <input
            type="text"
            placeholder="Bottom text"
            className="meme--bot-text"
          ></input>
        </div>
        <button className="meme--btn">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
