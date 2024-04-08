import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';

export interface ChatMessage {
  author: string;
  text: string;
}

interface ChatProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
}

const Chat: FC<ChatProps> = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg w-[45%]">
      <div className="text-white text-lg mb-4 flex items-center">
        {/* Placeholder for chat icon */}
        <span className="flex items-center justify-center w-6 h-6 mr-2 bg-red-500 rounded-full">
          {/* Chat icon here */}
        </span>
        Chat
      </div>
      <div className="flex flex-col space-y-2 mb-4 p-2 bg-gray-700 rounded-lg overflow-y-auto max-h-60">
        {messages.map((message, index) => (
          <div key={index} className="break-words text-white">
            <strong>{message.author}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 rounded-l-lg bg-gray-600 text-white border-2 border-r-0 border-gray-600"
          placeholder="Type your message here..."
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button
          onClick={handleSendMessage}
          className="rounded-l-none bg-red-500 hover:bg-red-600 text-white"
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Chat;
