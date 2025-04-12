import React, { useState } from 'react';
import { 
  Send, 
  Paperclip, 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Link, 
  Image, 
  Trash, 
  MinusCircle,
  X
} from 'lucide-react';

const Compose = () => {
  const [attachments, setAttachments] = useState([
    { id: 1, name: 'Project_Proposal.pdf', size: '2.4 MB' }
  ]);
  
  const removeAttachment = (id) => {
    setAttachments(attachments.filter(attachment => attachment.id !== id));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 pt-6 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gray-800 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Compose Email</h2>
        </div>
        
        {/* Email Form */}
        <div className="p-6">
          {/* Recipients */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">To:</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="recipient@example.com"
            />
          </div>
          
          {/* CC/BCC toggle */}
          <div className="flex space-x-4 mb-4">
            <button className="text-sm text-blue-400 hover:text-blue-300">Add Cc</button>
            <button className="text-sm text-blue-400 hover:text-blue-300">Add Bcc</button>
          </div>
          
          {/* Subject */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">Subject:</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email subject"
            />
          </div>
          
          {/* Formatting Toolbar */}
          <div className="flex items-center bg-gray-700 p-2 rounded-t-md border-b border-gray-600">
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <Bold size={18} />
            </button>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <Italic size={18} />
            </button>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <Underline size={18} />
            </button>
            <div className="h-6 mx-2 border-r border-gray-500"></div>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <List size={18} />
            </button>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <ListOrdered size={18} />
            </button>
            <div className="h-6 mx-2 border-r border-gray-500"></div>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <AlignLeft size={18} />
            </button>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <AlignCenter size={18} />
            </button>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <AlignRight size={18} />
            </button>
            <div className="h-6 mx-2 border-r border-gray-500"></div>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <Link size={18} />
            </button>
            <button className="p-1 mx-1 rounded hover:bg-gray-600">
              <Image size={18} />
            </button>
          </div>
          
          {/* Message Body */}
          <div className="mb-4">
            <textarea 
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-b-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-60"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          
          {/* Attachments */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <h3 className="text-sm font-medium text-gray-300">Attachments</h3>
              <span className="ml-2 text-xs text-gray-400">({attachments.length})</span>
            </div>
            
            {attachments.length > 0 && (
              <div className="space-y-2 mb-3">
                {attachments.map(attachment => (
                  <div key={attachment.id} className="flex items-center justify-between bg-gray-700 p-2 rounded-md">
                    <div className="flex items-center">
                      <Paperclip size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm">{attachment.name}</span>
                      <span className="text-xs text-gray-400 ml-2">({attachment.size})</span>
                    </div>
                    <button 
                      onClick={() => removeAttachment(attachment.id)} 
                      className="text-gray-400 hover:text-red-400"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Attachment Button */}
            <div className="flex">
              <label className="cursor-pointer flex items-center text-sm text-blue-400 hover:text-blue-300">
                <Paperclip size={16} className="mr-1" />
                <span>Add Attachment</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-between">
            <button className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors">
              <Trash size={18} className="mr-1" />
              <span>Discard</span>
            </button>
            
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                Save Draft
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                <Send size={18} className="mr-2" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;