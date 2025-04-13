import React from 'react';
import { X, Edit, Sparkles } from 'lucide-react';

const ReplyOptions = ({ email, onClose, onReplyOwn, onReplyAI }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-medium text-white">Choose Reply Method</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Options */}
        <div className="p-6 space-y-4">
          <button
            onClick={onReplyOwn}
            className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 hover:bg-gray-600 flex items-center transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
              <Edit size={18} className="text-white" />
            </div>
            <div className="text-left">
              <div className="font-medium text-white">Reply on your own</div>
              <div className="text-sm text-gray-400">Write your reply manually</div>
            </div>
          </button>
          
          <button
            onClick={onReplyAI}
            className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 hover:bg-gray-600 flex items-center transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center mr-4">
              <Sparkles size={18} className="text-white" />
            </div>
            <div className="text-left">
              <div className="font-medium text-white">Reply using AI</div>
              <div className="text-sm text-gray-400">Generate a reply with AI assistance</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyOptions;