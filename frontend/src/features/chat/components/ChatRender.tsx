"use client"

import ChatInput from "@/features/chat/components/ChatTextInput"
import { ChatInputMessage } from "@/features/chat/components/ChatInputMessage";
import { ChatOutputMessage } from "@/features/chat/components/ChatOutputMessage";
import { useChatStore } from "@/core/store/useChatStore";

export default function ChatRender() {
   const { messages } = useChatStore()

   return (
      <div className="flex flex-col h-screen w-full bg-white dark:bg-gray-800">
         <header className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Chat</h2>
         </header>
         <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, idx) => {
               if (message.type === 'user') {
                  return <ChatInputMessage input={message.input} key={idx} />
               } else {
                  return <ChatOutputMessage
                     key={idx}
                     feedback={message.feedback}
                     response={message.response}
                  />
               }
            })}
         </div>
         <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <ChatInput />
         </div>
      </div>
   );
}
