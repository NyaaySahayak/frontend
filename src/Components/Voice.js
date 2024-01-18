import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import char from '../Components/images/char.png';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function VoiceAssistant(props) {

  const [searchText, setSearchText] = useState('');
  const [repeatButton, setRepeatButton] = useState(true);

  const handleSearch = () => {
    // console.log('Search Text:', searchText);
    findanswer(searchText);
    setRepeatButton(false);
    setInputSource('text');
  };
  //Fetching the data from backend
  const [inputSource, setInputSource] = useState('');

  const jsonData = props.data;
  const { transcript, listening, resetTranscript, isMicrophoneAvailable, browserSupportsSpeechRecognition } = useSpeechRecognition({ onEnd: () => submit() });
  const [mytranscript, newtranscript] = useState(transcript);
  const { speak } = useSpeechSynthesis();

  function calculateMatchingWords(str1, str2) {
    const words1 = str1.toLowerCase().split(' ');
    const words2 = str2.toLowerCase().split(' ');
    let matchCount = 0;
    for (const word1 of words1) {
      if (words2.includes(word1)) {
        matchCount++;
      }
    }
    return matchCount;
  }

  function findanswer(transcript) {
    if (jsonData && jsonData.length > 0) {
      let maxMatchCount = 0;
      let bestMatchQuestion = null;
      const lowerCaseInput = transcript.toLowerCase();
      for (const question of jsonData) {
        const matchCount = calculateMatchingWords(lowerCaseInput, question.question);
        if (matchCount > maxMatchCount) {
          maxMatchCount = matchCount;
          bestMatchQuestion = question;
        }
      }
      if (bestMatchQuestion) {
        console.log("Answer: ", bestMatchQuestion.answer);
        newtranscript(bestMatchQuestion.answer);
        if (inputSource === 'voice') {
          speak({ text: bestMatchQuestion.answer });
        }

      }
      else {
        console.log("No matching answer found for the given question.");
        newtranscript("No matching answer found for the given question.");
        if (inputSource === 'voice') {
          speak({ text: "No matching answer found for the given question." });
        }
      }
    }
    else {
      console.log("No questions found in the JSON data.");
      newtranscript("No questions found in the JSON data.");
      if (inputSource === 'voice') {
        speak({ text: "No questions found in the JSON data." });
      }
    }
  }

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  if (!isMicrophoneAvailable) {
    // alert('MicroPhone access is denied');
  }
  function check() {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
      // If starting listening for the second time, reset the right div
      if (transcript) {
        newtranscript('');
        resetTranscript();
      }
    }
  }

  function submit() {
    if (!listening) {
      return null;
    } else {
      setRepeatButton(true);
      findanswer(transcript);
      setInputSource('voice');  
    }
  }

  function clicks() {
    check();
    submit();
  }
  function reset() {
    resetTranscript();
    newtranscript('');
  }

  return (
    <>
      <div className='container-fluid'>
        <div className="row" style={{background: "linear-gradient(90deg, rgba(0,120,183,1) 0%, rgba(7,24,68,1) 100%)"}}>
          <div className="col-4 d-flex flex-column align-items-center justify-content-center" style={{ height: "85vh" }}>
            <img src={char} alt='our char' />
            <div className="text-center">
              <button className="btn btn-success" onClick={clicks} style={{ borderRadius: '50%', marginRight: '10px' }}>
                {listening ? <span className="material-symbols-outlined" style={{ fontSize: '4  5px' }}>
                  mic_off
                </span> : <span className="material-symbols-outlined" style={{ fontSize: '45px' }}>
                  mic
                </span>}
              </button>

              <button className="btn btn-warning" onClick={reset} style={{ borderRadius: '50%'}}>
                <span className="material-symbols-outlined" style={{ fontSize: '45px' }}>refresh</span>
              </button>

            </div>
          </div>
          <div className="col-8 d-flex flex-column align-items-center justify-content-center" style={{ height: "95vh", backgroundColor: "" }} >
            <div className="input-group container" style={{ width: '480px', marginTop: '9px', padding: '1px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary "
                type="button"
                onClick={handleSearch}
              >
                <span className="material-symbols-outlined ">
                  search
                </span>
              </button>
            </div>
            <div className="response text-center" id='resu' style={{ height: "80vh", width: "100vh", backgroundColor: transcript || mytranscript ? "rgba(255,255,255,0.5)" : "transparent", transition: "background-color 0.5s ease", borderRadius: "50px" }} >
              <div className="row-2 text-center my-4" style={{ padding: "2%", margin: "2%", fontSize: "18px", fontWeight: "bold" }} >
                {transcript}
              </div>
              <div className="row-2 text-center position-relative" style={{ fontSize: "18px", padding: "2%", margin: "2%", height: "50vh" }} >
                {mytranscript !== "" ? (
                  <>
                    {mytranscript}
                    {repeatButton && <div className="d-grid gap-2 col-2 mx-auto text-center position-absolute bottom-0 end-0">
                      <button className="btn btn-primary" onClick={() => speak({ text: mytranscript })} type="button">Repeat</button>
                    </div>}
                  </>
                ) : (<></>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}