import React from "react";
import { Mail, Reply, X } from "lucide-react";

const Email = ({ email, onReply, onClose }) => {
  if (!email) return null;

  // Extract and format email body - get content from snippet or body field
  const emailContent = email.body || email.snippet || "";

  return (
    <div className="bg-black rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">{email.subject}</h2>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={24} />
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
            <Mail size={16} className="text-black" />
          </div>
          <div>
            <div className="font-medium text-white">{email.from}</div>
            <div className="text-sm text-gray-200">
              {email.date} at {email.time}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white py-6">
        <div className="whitespace-pre-wrap font-sans text-white">
          {emailContent}
        </div>
      </div>

      <div className="border-t border-white pt-6 mt-4">
        <button
          onClick={onReply}
          className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-md flex items-center"
        >
          <Reply size={18} className="mr-2" />
          Reply
        </button>
      </div>
    </div>
  );
};

export default Email;