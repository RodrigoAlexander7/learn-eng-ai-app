import { ChatResponse } from "@/types/global"

export function ChatOutputMessage({ response, feedback }: ChatResponse) {
   return (
      <div>
         <div>
            {response}
         </div>
         <div>
            {feedback}
         </div>
      </div>
   )

}