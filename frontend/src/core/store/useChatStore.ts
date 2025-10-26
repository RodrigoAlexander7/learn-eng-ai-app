import { create } from 'zustand'
import { Message } from '@/types/global'


interface ChatState {
   messages: Message[] // the list of chat messages
   addMessage: (message: Message) => void
   clearCurrentChat: () => void
}

export const useChatStore = create<ChatState>((set) => ({
   messages: [],
   addMessage: (message: Message) => set((state) => ({ messages: [...state.messages, message] })),
   clearCurrentChat: () => set({ messages: [] }),
}))