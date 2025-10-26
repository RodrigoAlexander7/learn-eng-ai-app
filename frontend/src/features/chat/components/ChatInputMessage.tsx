type InputProps = {
   inputMessage: string;
};

export function ChatInputMessage({ inputMessage }: InputProps) {
   return (
      <div>
         {inputMessage}
      </div>
   )

}