import React from 'react';
import { X, Edit, Sparkles } from 'lucide-react';

const ReplyOptions = ({ email, onClose, onReplyOwn, onReplyAI }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-black rounded-lg shadow-xl border border-white w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white">
          <h3 className="text-lg font-medium text-white">Choose Reply Method</h3>
          <button 
            onClick={onClose} 
            className="text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Options */}
        <div className="p-6 space-y-4">
          <button
            onClick={onReplyOwn}
            className="w-full p-4 bg-black rounded-lg border border-white flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
              <Edit size={18} className="text-black" />
            </div>
            <div className="text-left">
              <div className="font-medium text-white">Reply on your own</div>
              <div className="text-sm text-white">Write your reply manually</div>
            </div>
          </button>
          
          <button
            onClick={onReplyAI}
            className="w-full p-4 bg-white rounded-lg border border-white flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
              <Sparkles size={18} className="text-white" />
            </div>
            <div className="text-left">
              <div className="font-medium text-black">Reply using AI</div>
              <div className="text-sm text-black">Generate a reply with AI assistance</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyOptions;