import { ChatResponse } from "@/types/global"

export function ChatOutputMessage({ response, feedback }: ChatResponse) {
   return (
      <div className="flex justify-start">
         <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg max-w-md">
            <p className="text-gray-900 dark:text-white">{response}</p>
            {feedback && (
               <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-600 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300">{feedback}</p>
               </div>
            )}
         </div>
      </div>
   )
}