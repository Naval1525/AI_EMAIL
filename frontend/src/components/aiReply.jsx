import React, { useState } from 'react';
import { X, Send, Sparkles, Loader } from 'lucide-react';
import { useDashboard } from '../context/dashboardContext';

const AIReply = ({ email, onClose, onSend }) => {
  // Initialize state with email data
  const [replyContent, setReplyContent] = useState('');
  const [subject, setSubject] = useState(`Re: ${email?.subject || ''}`);
  const [toAddress, setToAddress] = useState(email?.from || '');
  const [isGenerating, setIsGenerating] = useState(false);
  const { sendingReply } = useDashboard();
  
  // Get API URL from environment variables
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  
  // Generate AI reply
  const generateAIReply = async () => {
    setIsGenerating(true);
    
    try {
      const response = await fetch(`${API_URL}/api/gemini/reply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Please generate a professional reply to this email: 
          From: ${email.from}
          Subject: ${email.subject}
          Message: ${email.body || email.preview || email.snippet}`
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate AI reply');
      }
      
      const data = await response.json();
      setReplyContent(data.reply);
    } catch (error) {
      console.error('Error generating AI reply:', error);
      alert('Failed to generate AI reply. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle sending the AI-generated reply
  const handleSend = () => {
    if (!replyContent.trim()) {
      return;
    }
    
    // Create reply data with all required fields
    const replyData = {
      to: toAddress,
      subject,
      body: replyContent,
      // Include necessary IDs for threading
      messageId: email?.id,
      threadId: email?.threadId
    };
    
    if (onSend) {
      onSend(replyData);
    } else {
      console.log('Sending AI reply:', replyData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-medium text-white flex items-center">
            <Sparkles size={18} className="text-yellow-400 mr-2" />
            AI Reply
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
            disabled={isGenerating || sendingReply}
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Email form */}
        <div className="p-6">
          {/* To field - make editable */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">To</label>
            <input
              type="text"
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500"
              disabled={isGenerating || sendingReply}
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
              disabled={isGenerating || sendingReply}
            />
          </div>
          
          {/* AI generate button */}
          <button
            onClick={generateAIReply}
            disabled={isGenerating || sendingReply}
            className="w-full mb-4 px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <Loader size={16} className="mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={16} className="mr-2" />
                Generate AI Reply
              </>
            )}
          </button>
          
          {/* Message content */}
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="w-full h-40 p-3 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500"
            placeholder="AI-generated reply will appear here..."
            disabled={isGenerating || sendingReply}
          ></textarea>
        </div>
        
        {/* Footer with actions */}
        <div className="p-4 border-t border-gray-700 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700"
            disabled={isGenerating || sendingReply}
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={!replyContent.trim() || isGenerating || sendingReply}
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

export default AIReply;