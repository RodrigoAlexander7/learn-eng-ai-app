type InputProps = {
   inputMessage: string;
};

export function ChatInputMessage({ inputMessage }: InputProps) {
   return (
      <div className="">
         {inputMessage}
      </div>
   )

}