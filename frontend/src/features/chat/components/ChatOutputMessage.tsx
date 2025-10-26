import { OutputProps } from "@/types/global"

export function ChatOutputMessage({ response, feedback }: OutputProps) {
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