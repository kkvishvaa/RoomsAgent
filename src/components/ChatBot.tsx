import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const ChatBot = () => {
  useEffect(() => {
      createChat({
        webhookUrl: 'hhttps://n8n.makeatron.in/webhook/7d48697d-c33c-4f11-8e7f-406351d42290/chat',
        
        target: '#n8n-chat',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
          'Hello! How can I help you with CoLive SG today?',
          'I can assist you with room availability, amenities, pricing, and booking information.'
        ],
        i18n: {
          en: {
            title: 'CoLive Assistant',
            subtitle: 'We\'re here to help!',
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your message...',
            closeButtonTooltip: 'Close chat',
          },
        },
      });
  }, []);

  return (
    <div
      id="n8n-chat"
      className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[90vw] sm:w-[350px] sm:right-4 sm:bottom-4 xs:w-full xs:right-0 xs:bottom-0 xs:rounded-none"
      style={{ maxWidth: '100vw', width: '100%', minWidth: '0', borderRadius: '1rem' }}
    ></div>
  );
};
