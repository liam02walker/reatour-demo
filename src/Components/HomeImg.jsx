import "./../CSS/Home.css";

export default function HomeImg({ handleImg }) {
  return (
    <main>
      <div className="modalContainer">
        <img src="./src/Images/selfPic.jpg" alt="Selfie of myself" className="bigWelcomeImg" />
        <button className="exitButton" onClick={handleImg}>
          X
        </button>
      </div>
    </main>
  );
}
