import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import ChatInput from "./ChatInput";
import type { IMessage } from "./Chat";

interface Props {
  emitMessage: (msg: IMessage) => void
}

export default function ChatInputBar({ emitMessage }: Props) {
  return (
    <div className="h-full py-4 mx-4">
      <div className="bg-[#D9D9D9] px-6 py-2 flex items-center w-full shadow-md shadow-[#DDE2E4] rounded-[12px] h-full">
        <ChatInput emitMessage={emitMessage} />
      </div>
    </div>
  )
}