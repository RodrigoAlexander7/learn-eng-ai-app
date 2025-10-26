import ChatInput from "@/features/chat/components/ChatInput"

export default function Chat() {
   return (
      <div className="flex flex-col h-screen w-full">

         <div className="flex-1 overflow-y-auto p-4">
            {/* Aquí irían los mensajes */}
         </div>
         <div >
            <ChatInput />
         </div>
      </div>
   );
}
