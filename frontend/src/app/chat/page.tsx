"use client"

import ChatInput from "@/features/chat/components/ChatInput"
import { ChatInputMessage } from "@/features/chat/components/ChatInputMessage";
import { ChatOutputMessage } from "@/features/chat/components/ChatOutputMessage";
import { useChatStore } from "@/core/store/useChatStore";

export default function Chat() {
   const { chatInput, chatOutput } = useChatStore()


   return (
      <div className="flex flex-col h-screen w-full">

         <div className="flex-1 overflow-y-auto p-4">
            <div>
               <ChatInputMessage inputMessage={chatInput} />
               <ChatOutputMessage response={chatOutput.response} feedback={chatOutput.feedback} />
            </div>
         </div>
         <div >
            <ChatInput />
         </div>
      </div>
   );
}
