'use client'

import { useState } from "react";

export default function ChatInput() {
   const [message, setMessage] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!message.trim()) return;
      // Aquí puedes manejar el envío del mensaje
      console.log("Mensaje enviado:", message);
      setMessage("");
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="flex-1 m-5 h-12 max-w-[90%] rounded-4xl border border-gray-300 px-4 py-2 text-sm flex items-center"
      >
         <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
            placeholder="Escribe tu mensaje..."
            className="flex-1 resize-none focus:outline-none border-0 p-0"
         />
         <button type="submit" className="ml-2 text-blue-500">Enviar</button>
      </form>

   );
}
