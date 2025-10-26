export type ChatResponse = {
   response: string;
   feedback: string;
};

export type OutputMessage = {
   type: 'model';
   response: string;
   feedback: string;
};
export type InputMessage = {
   type: 'user';
   input: string;
};

export type Message = InputMessage | OutputMessage;