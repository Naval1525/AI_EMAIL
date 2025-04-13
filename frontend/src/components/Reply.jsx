import React, { useState } from 'react';
import { X, Send, Loader } from 'lucide-react';
import { useDashboard } from '../context/dashboardContext';

const Reply = ({ email, onClose, onSend }) => {
  const [replyContent, setReplyContent] = useState('');
  const [subject, setSubject] = useState(`Re: ${email?.subject || ''}`);
  const { sendingReply } = useDashboard();
  
  // Handle sending the reply
  const handleSend = () => {
    if (!replyContent.trim()) {
      return;
    }
    
    const replyData = {
      to: email?.from,
      subject,
      body: replyContent
    };
    
    if (onSend) {
      onSend(replyData);
    } else {
      console.log('Sending reply:', replyData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-medium text-white">Reply</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
            disabled={sendingReply}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Email form */}
        <div className="p-6">
          {/* To field */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">To</label>
            <input
              type="text"
              value={email?.from || ''}
              readOnly
              className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500"
            />
          </div>
          
          {/* Subject field */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500"
              disabled={sendingReply}
            />
          </div>
          
          {/* Message content */}
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="w-full h-40 p-3 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500"
            placeholder="Write your reply here..."
            disabled={sendingReply}
          ></textarea>
        </div>
        
        {/* Footer with actions */}
        <div className="p-4 border-t border-gray-700 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700"
            disabled={sendingReply}
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={!replyContent.trim() || sendingReply}
            className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
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