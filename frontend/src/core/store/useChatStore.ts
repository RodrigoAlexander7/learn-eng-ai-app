import { create } from 'zustand'
import { OutputProps } from '@/types/global'


interface ChatState {
   chatInput: string
   setChatInput: (input: string) => void
   chatOutput: OutputProps
   setChatOutput: (output: OutputProps) => void
   clearChat: () => void
}

export const useChatStore = create<ChatState>((set) => ({
   chatInput: '',
   setChatInput: (input) => set({ chatInput: input }),
   chatOutput: {
      response: '',
      feedback: ''
   },
   setChatOutput: (output) => set({ chatOutput: output }),
   clearChat: () => set({ chatInput: '', chatOutput: { response: '', feedback: '' } }),
}))