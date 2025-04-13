import React from "react";
import { Mail, Reply, X } from "lucide-react";

const Email = ({ email, onReply, onClose }) => {
  if (!email) return null;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">{email.subject}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-4">
            <Mail size={16} className="text-gray-400" />
          </div>
          <div>
            <div className="font-medium text-white">{email.from}</div>
            <div className="text-sm text-gray-400">
              {email.date} at {email.time}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <pre className="whitespace-pre-wrap font-sans text-gray-300">
          {email.body}
        </pre>
      </div>

      <div className="border-t border-gray-700 pt-6 mt-4">
        <button
          onClick={onReply}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <Reply size={18} className="mr-2" />
          Reply
        </button>
      </div>
    </div>
  );
};

export default Email;