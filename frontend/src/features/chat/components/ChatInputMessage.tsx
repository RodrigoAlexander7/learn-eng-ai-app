type InputProps = {
   input: string;
};

export function ChatInputMessage({ input }: InputProps) {
   return (
      <div className="">
         {input}
      </div>
   )

}