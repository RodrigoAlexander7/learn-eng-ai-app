"use client"

import ChatInput from "@/features/chat/components/ChatTextInput"
import { ChatInputMessage } from "@/features/chat/components/ChatInputMessage";
import { ChatOutputMessage } from "@/features/chat/components/ChatOutputMessage";
import { useChatStore } from "@/core/store/useChatStore";

export default function ChatRender() {
   const { messages } = useChatStore()


   return (
      <div className="flex flex-col h-screen w-full">

         <div className="flex-1 overflow-y-auto p-4">

            <div>
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

         </div>
         <div >
            <ChatInput />
         </div>
      </div>
   );
}
