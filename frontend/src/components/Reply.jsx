import React, { useState } from 'react';
import { X, Send, Loader } from 'lucide-react';
import { useDashboard } from '../context/dashboardContext';

const Reply = ({ email, onClose, onSend }) => {
  // Initialize state with the email data
  const [replyContent, setReplyContent] = useState('');
  const [subject, setSubject] = useState(`Re: ${email?.subject || ''}`);
  const [toAddress, setToAddress] = useState(email?.from || '');
  const { sendingReply } = useDashboard();
  
  // Handle sending the reply
  const handleSend = () => {
    if (!replyContent.trim()) {
      return;
    }
    
    // Create the reply data object with all necessary fields
    const replyData = {
      to: toAddress,
      subject,
      body: replyContent,
      // Include necessary IDs for threading
      messageId: email?.id, 
      threadId: email?.threadId
    };
    
    // Call the onSend handler with the complete data
    if (onSend) {
      onSend(replyData);
    } else {
      console.log('Sending reply:', replyData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-black rounded-lg shadow-xl border border-white w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white">
          <h3 className="text-lg font-medium text-white">Reply</h3>
          <button 
            onClick={onClose} 
            className="text-white hover:text-gray-200"
            disabled={sendingReply}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Email form */}
        <div className="p-6">
          {/* To field - make editable in case user needs to modify recipient */}
          <div className="mb-4">
            <label className="block text-white mb-1">To</label>
            <input
              type="text"
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value)}
              className="w-full p-2 rounded bg-black text-white border border-white focus:border-gray-300"
              disabled={sendingReply}
            />
          </div>
          
          {/* Subject field */}
          <div className="mb-4">
            <label className="block text-white mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 rounded bg-black text-white border border-white focus:border-gray-300"
              disabled={sendingReply}
            />
          </div>
          
          {/* Message content */}
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="w-full h-40 p-3 rounded bg-black text-white border border-white focus:border-gray-300"
            placeholder="Write your reply here..."
            disabled={sendingReply}
          ></textarea>
        </div>
        
        {/* Footer with actions */}
        <div className="p-4 border-t border-white flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-white rounded-md text-white hover:bg-white hover:text-black"
            disabled={sendingReply}
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={!replyContent.trim() || sendingReply}
            className="px-4 py-2 bg-white rounded-md text-black hover:bg-gray-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sendingReply ? (
              <>
                <Loader size={16} className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} className="mr-2" />
                Send
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reply;