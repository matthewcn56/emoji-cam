import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import { letters } from './data';
import './App.css';
import Backspace from './components/Backspace';
import Canvas from './components/Canvas';
import ChangeEmojiState from './components/ChangeEmojiState';
import Space from './components/Space';
import CamGesture from './components/CamGesture';

const emojistList = [
  "🖕, 😁, 😦, 🤩, 🔪",
  "👍, ✌️, 🤙, 👌, 🤟"
];
//100px by 100px is exactly 2cm by 2cm on my laptop
function App() {
  const [lettersState, setLettersState] = useState(0);
  //0 for no emoji, 1 for canvas, 2 for camera
  const [emojiState, setEmojiState] = useState(0);
  const [text, setText] = useState("");
  const forwardState = () => {
    if (lettersState < letters.length - 1)
      setLettersState(lettersState + 1);
    else setLettersState(0);
  };

  const forwardEmojiState = () => {
    if (emojiState < 2) {
      setEmojiState(emojiState + 1);
    }
    else setEmojiState(0);
  }



  const backwardState = () => {
    if (lettersState > 0)
      setLettersState(lettersState - 1)
    else setLettersState(letters.length - 1);
  }

  const addLetter = (letter: string) => {
    setText(text => (text + letter));
  };

  const removeLetter = () => {
    setText(currText => currText.substring(0, currText.length - 1));
  }

  const addSpace = () => {
    setText(currText => currText + " ");
  }



  return (

    < div className="App">
      <div className="App-header">
        <h1>Emoji Type</h1>
        <p className='info'>
          Swipe in the direction of the letter you want, or tap on the purple boxes to cycle between letters, or make emojis with the canvas or camera with the emoji button!
        </p>
        {emojiState > 0 &&
          <div>
            Possible emojis: {emojistList[emojiState - 1]}
          </div>
        }
        <p className='text-display'><pre>{text ? text : " "}</pre></p>
        {emojiState === 2 ?
          <CamGesture onClick={forwardEmojiState} addLetter={addLetter} /> :
          <div className='keyboard-display'>
            {
              emojiState === 1 ?
                <Canvas onClick={() => forwardEmojiState()} addLetter={addLetter} />
                : <Keyboard
                  letters={letters[lettersState][0]}
                  onClick={backwardState}
                  addLetter={addLetter}
                />
            }
            <Keyboard letters={letters[lettersState][1]} onClick={forwardState} addLetter={addLetter} />
          </div>
        }
        <div className='keyboard-display'>
          <Space addSpace={addSpace} />
          <ChangeEmojiState onClick={forwardEmojiState} />
          <Backspace removeLetter={removeLetter} />
        </div>
      </div>
    </div >
  );
}

export default App;
