import React, { useState } from "react";
import type { IMessage } from "./Chat";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  emitMessage: (msg: IMessage) => void
}

export default function ChatInput({ emitMessage }: Props) {
  const [message, setMessage] = useState('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior (e.g., adding a new line)
      handleSend();
    }
  };

  const handleSend = () => {
    if (!message) return

    const msg: IMessage = {
      type: 'outbox',
      data: {
        message,
        author: 'You'
      }
    }

    emitMessage(msg)
    setMessage('')
  }

  return (
    <div className="flex items-center w-full space-x-3 justify-between">
      <div className="flex items-center bg-white w-full rounded-full px-4 py-3">
        {/* Left-side send button */}
        <button>
          <Icon
            width="22"
            height="22"
            color="#8D8D8D"
            icon="mdi:microphone"
          />
        </button>

        {/* Input field */}
        <input
          type="text"
          value={message}
          onKeyDown={handleKeyDown}
          placeholder="Write something..."
          onChange={({ target }) => setMessage(target.value)}
          className="flex-grow bg-transparent text-[#2E2E2E] w-full placeholder:text-[#8D8D8D] outline-none px-4"
        />

        {/* Right-side buttons */}
        <div className="flex space-x-3">
          <button>
            <Icon
              width="22"
              height="22"
              color="#8D8D8D"
              icon="mi:attachment"
            />
          </button>

          <button>
            <Icon
              width="22"
              height="22"
              color="#8D8D8D"
              icon="tabler:camera"
            />
          </button>

          <button>
            <Icon
              width="22"
              height="22"
              color="#8D8D8D"
              icon="proicons:emoji"
            />
          </button>
        </div>
      </div>

      <div>
        <button 
          disabled={!message}
          onClick={handleSend} 
          className="bg-[#FF8600] flex items-center disabled:cursor-not-allowed justify-center py-[10px] pr-2 pl-3 rounded-full"
        >
          <Icon
            width="20"
            height="20"
            color="white"
            icon="ic:baseline-send"
          />
        </button>
      </div>
    </div>
  )
}