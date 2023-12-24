import React, { useEffect } from 'react'
import './Chatbot.css'
export default function Chatbot({data}) {

  const jsonData =  data;
  useEffect(() => {
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
      return matchCount;
    }

    function findanswer(userMessage, incomingChatLi) {
      const messageElement = incomingChatLi.querySelector("p");
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


    });
    chatInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
      }

    });

    sendChatBtn.addEventListener("click", handleChat);
    chatbotToggler.addEventListener("click", () => chatbotContainer.classList.toggle("show-chatbot"));
    chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));

}, [jsonData]);

  return (
    <div>
      <div className="chatbot-container">
        <button className="chatbot-toggler">
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
