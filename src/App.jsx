import { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const handleTrueClick = () => {
    setShowMessage(true);
  };

  const handleFalseClick = () => {
    setShowMessage(false);
  };

  const handleSongToggle = () => {
    const audioElement = document.getElementById("enhypen-song");
    if (isSongPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsSongPlaying(!isSongPlaying);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={handleTrueClick}>
          Show Message
        </button>
        <button className="button false" onClick={handleFalseClick}>
          Hide Message
        </button>
        <button className="button" onClick={handleSongToggle}>
          {isSongPlaying ? "Pause Song" : "Play Song"}
        </button>
      </div>

      {/* Audio element */}
      <audio id="enhypen-song" src="/enhypen.mp3" preload="auto"></audio>

      {showMessage && (
        <div className="message-box">
          <p className="title">To my besties, Linda and Hannah,</p>
          <p>
            Usually, it’s hard for me to express how I feel in words, but maybe writing it down will help. :)
            Meeting both of you was the best decision ever—going to those K-pop events, finding Linda and reaching out to her, and going to the Jungwoon event, then going to the museum on K-pop night, and finally meeting Ms. Hannah and Mel that day.
          </p>
          
          {/* Add the images */}
          <div className="image-container">
            <img src="/img.jpeg" alt="Image 1" className="message-image" />
            <img src="/imgs.jpeg" alt="Image 2" className="message-image" />
            <img src="/imgg.jpeg" alt="Image 3" className="message-image" />
          </div>

          <p>
            I used to spend all my time studying in my room (I still do sometimes, but not as often), but now it’s nice to go out with you guys. I love the memories we’ve made together over the past year—celebrating your birthdays, going to concerts, going to the Cape (which was so much fun), or even just hanging out. I will always be grateful for your friendship.
          </p>
          <p>
            Honestly, being real, I never really had best friends growing up. I was always moving and never in a settled place. But now, I feel lucky to have you both. I will do my best to always be there for you both, to motivate and support you in any way I can. I know we sometimes deal with things beyond our control, and that’s completely okay. But if you ever need to call, I’ll do my best to pick up and be there for you, pookies.
          </p>
          <p>
            I’ll always be thankful, even when I say I can’t hang out, you guys still keep inviting me over. ❤️ I appreciate everything you do, and I’m working on getting better at showing my appreciation. I always look forward to your TikToks and reels—they’re so funny and always brighten my day. :)
          </p>
          <p className="signature">Love you both! 💖</p>
          <p className="signature">- Danny</p>
        </div>
      )}
    </div>
  );
}

export default App;
