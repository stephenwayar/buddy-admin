import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import ChatTopBar from "./ChatTopBar";
import ChatInputBar from "./ChatInputBar";

export type IMessage = {
  type: 'inbox' | 'outbox';
  data: {
    author: string;
    message: string;
  };
}

const conversation: IMessage[] = [
  {
    type: 'inbox',
    data: {
      author: 'Sarah Connor',
      message: 'Hey, how are you doing today? 😊'
    }
  },
  {
    type: 'outbox',
    data: {
      author: 'You',
      message: 'I’m doing great! How about you? 🌟'
    }
  },
  {
    type: 'inbox',
    data: {
      author: 'Sarah Connor',
      message: 'Can you send me the report by tomorrow? It’s really important for the meeting! 📅'
    }
  },
  {
    type: 'outbox',
    data: {
      author: 'You',
      message: 'Sure thing, I’ll have it ready by morning. 📝'
    }
  },
  {
    type: 'inbox',
    data: {
      author: 'Sarah Connor',
      message: 'Let’s catch up for coffee this weekend! ☕️ What do you think?'
    }
  },
  {
    type: 'outbox',
    data: {
      author: 'You',
      message: 'Sounds good! Saturday works for me. 👍'
    }
  },
  {
    type: 'inbox',
    data: {
      author: 'Sarah Connor',
      message: 'Can you review the latest design? It needs to be finalized by Friday! 🔍'
    }
  },
  {
    type: 'outbox',
    data: {
      author: 'You',
      message: 'Just checked, looks good to me! I’ll send my feedback shortly. 🙌'
    }
  },
  {
    type: 'inbox',
    data: {
      author: 'Sarah Connor',
      message: 'By the way, did you see the game last night? It was epic! 🏀🔥'
    }
  },
  {
    type: 'outbox',
    data: {
      author: 'You',
      message: 'I did! That last-minute shot was insane! 🤯 Absolutely thrilling!'
    }
  },
  {
    type: 'outbox',
    data: {
      author: 'You',
      message: "There is something I've been meaning to tell you"
    }
  },
  {
    type: 'inbox',
    data: {
      author: 'Sarah Connor',
      message: 'What is on your mind?'
    }
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<IMessage[]>(conversation)
  const messagesEndRef = useRef<HTMLDivElement>(null); // Create a ref for the messages end

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Scroll to bottom function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const emitMessage = (msg: IMessage) => {
    setMessages([...messages, msg])
  }

  return (
    <div className="w-full bg-[#FAFAFA] flex flex-col justify-between h-full rounded-[12px]">
      <div className="px-4 w-full">
        <ChatTopBar />

        <div className="overflow-y-scroll no-scrollbar pt-3 pb-6 space-y-4 h-[calc(100vh-22.5rem)]">
          {messages.map((message, i) => (
            <Message 
              key={i}
              type={message.type}
              data={message.data}
            />
          ))}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInputBar emitMessage={emitMessage} />
    </div>
  )
}