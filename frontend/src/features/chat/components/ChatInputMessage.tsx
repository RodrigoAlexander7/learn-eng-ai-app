type InputProps = {
   input: string;
};

export function ChatInputMessage({ input }: InputProps) {
   return (
      <div className="flex justify-end">
         <div className="bg-blue-500 text-white p-3 rounded-lg max-w-md">
            {input}
         </div>
      </div>
   )
}