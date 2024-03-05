import React, { useState , useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import char from '../Components/images/char.png';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function VoiceAssistant(props) {
  const jsonData = props.data;
  const [searchText, setSearchText] = useState('');
  const [repeatButton, setRepeatButton] = useState(true);
  const [inputSource, setInputSource] = useState('voice');

  useEffect(() => {
    console.log("Input Source:", inputSource);
    if (inputSource === 'voice' || inputSource === 'voice1') { // Speak only if input was voice
      speak({ text: mytranscript });
    }
  }, [inputSource]);

  const handleSearch = () => {
    setInputSource('text');
    console.log(inputSource)
    setRepeatButton(true);
    findanswer(searchText);
  };

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
      }
      else {
        console.log("Unfortunately, I couldn't find a relevant answer to your query.");
        newtranscript("Unfortunately, I couldn't find a relevant answer to your query.");
      }
    }
    else {
      console.log("Unfortunately, I couldn't find a relevant answer to your query.");
      newtranscript("Unfortunately, I couldn't find a relevant answer to your query.");
    }
  }

  if (!browserSupportsSpeechRecognition) {
    return null;
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
      if (inputSource === 'voice') {
        setInputSource('voice1'); 
      }else{
        setInputSource('voice'); 
      }
      console.log(inputSource);
      setRepeatButton(true);
      findanswer(transcript);
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
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "85vh" }}>
            
            {/* Adjusted the image size here */}
            <img src={char} alt='our char' className="img-fluid" style={{ maxWidth: '90vw' }}/>
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
          <div className="col-lg-8 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "95vh" }}>
            
          <div className="input-group" style={{ width: '100%', maxWidth: '450px', margin: '10px' }}>
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
            <div className="response text-center" style={{ width: '100%', maxWidth: '650px', minHeight: "60vh", backgroundColor: transcript || mytranscript ? "rgba(255,255,255,0.5)" : "transparent", borderRadius: "50px", padding: "20px" }}>
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