import React, { useEffect, useState } from 'react'
import './Chatbot.css'
export default function Chatbot(props) {
  console.log("Component Rendered");
  const jsonData = props.data;
  // console.log("jas:", jsonData)
  useEffect(() => {
    console.log("recived jsondata:",jsonData)
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatbox = document.querySelector(".chatbox");
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbotCloseBtn = document.querySelector(".close-btn");
    const chatbotContainer = document.querySelector(".chatbot-container");

    let userMessage;
    let inputInitHeight = chatInput.scrollHeight;
    const createChatLi = (message, className) => {
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", className);
      let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">
        smart_toy</span><p>${message}</p>`;
      chatLi.innerHTML = chatContent;
      return chatLi;
    }

    function calculateMatchingWords(str1, str2) {
      const words1 = str1.toLowerCase().split(' ');
      const words2 = str2.toLowerCase().split(' ');
      let matchCount = 0;
      for (const word1 of words1) {
        if (words2.includes(word1)) {
          matchCount++;
        }
      }
      // console.log(matchCount)
      return matchCount;
    }

    function findanswer(userMessage, incomingChatLi) {
      const messageElement = incomingChatLi.querySelector("p");
      // if (!jsonData || jsonData.length === 0) {
      //   console.log("No questions found in the JSON data.");
      //   // Handle this case if needed
      //   return;
      // }    
      if (jsonData && jsonData.length > 0) {
        let maxMatchCount = 0;
        let bestMatchQuestion = null;
        const lowerCaseInput = userMessage.toLowerCase();
        for (const question of jsonData) {
          const matchCount = calculateMatchingWords(lowerCaseInput, question.question);
          if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount;
            bestMatchQuestion = question;
          }
        }
        if (bestMatchQuestion) {
          console.log("Answer: ", bestMatchQuestion.answer);
          messageElement.textContent = bestMatchQuestion.answer;
        }
        else {
          console.log("No matching answer found for the given question.");
          messageElement.textContent = "No matching answer found for the given question.";
        }
      }
      else {
        console.log("No questions found in the JSON data.");
        messageElement.textContent = "No questions found in the JSON data.";
      }
    }

    const generateResponse = (incomingChatLi) => {
      findanswer(userMessage, incomingChatLi);
      chatbox.scrollTop = chatbox.scrollHeight;
    }

    const handleChat = () => {
      userMessage = chatInput.value.trim();
      console.log("user message : ", userMessage)

      if (!userMessage) return;
      chatInput.value = "";
      chatInput.style.height = `${inputInitHeight}px`;
      chatbox.appendChild(createChatLi(userMessage, "outgoing"));

      setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
      }, 600);
    }

    chatInput.addEventListener("input", () => {
      chatInput.style.height = `${inputInitHeight}px`;
      chatInput.style.height = `${chatInput.scrollHeight}px`;
      // userMessage = chatInput.value.trim();
    });

    // chatInput.addEventListener("keyup", (e) => {
    //   if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    //     e.preventDefault();
    //     handleChat();
    //   }

    // });

    sendChatBtn.addEventListener("click", handleChat);
    chatbotToggler.addEventListener("click", () => chatbotContainer.classList.toggle("show-chatbot"));
    chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

  }, [jsonData]);


  const [toggle, setToggle] = useState(false)
  function handleToggle() {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      <div className={`chatbot-container ${toggle ? "show-chatbot" : ""}`}>
        <button className="chatbot-toggler" onClick={handleToggle}>
          <span className="material-symbols-outlined">
            mode_comment
          </span>
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
        <div className="chatbot">
          <header>
            <h2>chatbot</h2>
            <span className="close-btn material-symbols-outlined">
              close
            </span>
          </header>
          <ul className="chatbox">
            <li className="chat incoming">
              <span className="material-symbols-outlined">
                smart_toy
              </span>
              <p>hi there <br /> How can i help u today? </p>
            </li>

          </ul>
          <div className="chat-input">
            <textarea placeholder="Enter a message.."></textarea>
            <span id="send-btn" className="material-symbols-outlined">
              send
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}



//version 2.0

// import React, { useState, useEffect, useRef } from "react";
// import "./Chatbot.css";
// // import jsonData from "./jsonData.json";

// const Chatbot = (props) => {
//   const jsonData = props.data;
//   const [toggle, setToggle] = useState(false);
//   const chatboxRef = useRef(null);

//   const [userMessage, setUserMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([
//     {
//       type: "incoming",
//       message: "hi there\nHow can I help you today?",
//     },
//   ]);

//   const handleInputChange = (e) => {
//     setUserMessage(e.target.value);
//   };

//   const handleChat = () => {
//     if (!userMessage.trim()) return;

//     setUserMessage("");
//     setChatHistory((prevHistory) => [
//       ...prevHistory,
//       { type: "outgoing", message: userMessage },
//       { type: "incoming", message: "Thinking..." },
//     ]);

//     setTimeout(() => {
//       const responseData = findAnswer(userMessage);

//       setChatHistory((prevHistory) => [
//         ...prevHistory.slice(0, -1),
//         { type: "incoming", message: responseData },
//       ]);
//     }, 600);
//   };

//   function calculateMatchingWords(str1, str2) {
//     const words1 = str1.toLowerCase().split(" ");
//     const words2 = str2.toLowerCase().split(" ");
//     let matchCount = 0;
//     for (const word1 of words1) {
//       if (words2.includes(word1)) {
//         matchCount++;
//       }
//     }
//     return matchCount;
//   }

//   const findAnswer = (userMessage) => {
//     if (jsonData.data && jsonData.data.length > 0) {
//       let maxMatchCount = 0;
//       let bestMatchQuestion = null;
//       const lowerCaseInput = userMessage.toLowerCase();
//       for (const question of jsonData.data) {
//         const matchCount = calculateMatchingWords(
//           lowerCaseInput,
//           question.question
//         );
//         if (matchCount > maxMatchCount) {
//           maxMatchCount = matchCount;
//           bestMatchQuestion = question;
//         }
//       }
//       if (bestMatchQuestion) {
//         console.log("Answer: ", bestMatchQuestion.answer);
//         return bestMatchQuestion.answer;
//       } else {
//         console.log("No matching answer found for the given question.");
//         return "No matching answer found for the given question.";
//       }
//     } else {
//       console.log("No questions found in the JSON data.");
//       return "No questions found in the JSON data.";
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
//       e.preventDefault();
//       handleChat();
//     }
//   };

//   useEffect(() => {
//     if (chatboxRef.current) {
//       chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   return (
//     <div className="chatbot-container">
//       <button className="chatbot-toggler" onClick={() => setToggle(!toggle)}>
//         {!toggle ? (
//           <span className="material-symbols-outlined">
//             mode_comment
//           </span>

//         ) : (
//           <span className="material-symbols-outlined">
//             close
//           </span>
//         )}
//       </button>
//       {toggle && (
//         <div className="chatbot">
//           <header>
//             <h2>chatbot</h2>
//             <span
//               className="close-btn material-symbols-outlined"
//               onClick={() => setToggle(false)}
//             >
//               {" "}
//               close{" "}
//             </span>
//           </header>
//           <ul className="chatbox">
//             {chatHistory.map((item, index) => (
//               <li key={index} className={`chat ${item.type}`}>
//                 {item.type === "incoming" && (
//                   <span className="material-symbols-outlined"> smart_toy </span>
//                 )}
//                 <p>{item.message}</p>
//               </li>
//             ))}
//           </ul>
//           <div className="chat-input">
//             <textarea
//               placeholder="Enter a message.."
//               value={userMessage}
//               onChange={handleInputChange}
//               onKeyUp={handleKeyPress}
//             ></textarea>
//             <span
//               id="send-btn"
//               className="material-symbols-outlined"
//               onClick={handleChat}
//             >
//               {" "}
//               send{" "}
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
