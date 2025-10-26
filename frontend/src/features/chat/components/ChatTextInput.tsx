'use client'

import { useState } from "react";
import { Send, Loader2 } from "lucide-react"; // npm install lucide-react
import { getChatResponse } from '@/features/chat/services/chat.service'
import { useChatStore } from "@/core/store/useChatStore";
import { InputMessage, OutputMessage, ChatResponse } from "@/types/global";

export default function ChatTextInput() {
   const [message, setMessage] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const { addMessage } = useChatStore()

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!message.trim() || isLoading) return;

      const currentMessage = message;
      setMessage("");
      setIsLoading(true);

      try {
         // Adding request to global storage
         addMessage({
            type: 'user',
            input: currentMessage
         } as InputMessage)

         // Get response from API
         const response: ChatResponse = await getChatResponse(currentMessage)

         // Adding response to global storage
         addMessage({
            type: 'model',
            response: response.response,
            feedback: response.feedback
         } as OutputMessage)
      } catch (error) {
         console.error("Error sending message:", error);
         // Optionally add error message to chat
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="relative flex items-center gap-2 w-full max-w-4xl mx-auto"
      >
         <div className="flex-1 relative">
            <textarea
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                     e.preventDefault();
                     handleSubmit(e);
                  }
               }}
               disabled={isLoading}
               rows={1}
               placeholder="Escribe tu mensaje..."
               className="w-full resize-none rounded-2xl border border-gray-300 dark:border-gray-600 
                        bg-white dark:bg-gray-700 px-4 py-3 pr-12
                        text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200"
               style={{
                  minHeight: '48px',
                  maxHeight: '200px',
                  overflowY: message.split('\n').length > 3 ? 'auto' : 'hidden'
               }}
            />
         </div>

         <button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="flex items-center justify-center w-12 h-12 rounded-full
                     bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700
                     text-white transition-all duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     shadow-md hover:shadow-lg"
            aria-label="Enviar mensaje"
         >
            {isLoading ? (
               <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
               <Send className="w-5 h-5" />
            )}
         </button>
      </form>
   );
}