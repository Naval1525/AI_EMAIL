import React, { useState, useRef } from 'react';
import { 
  X, 
  Paperclip, 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Link, 
  Image, 
  Send, 
  Trash, 
  Minimize, 
  Maximize, 
  MoreVertical, 
  ChevronDown
} from 'lucide-react';

const Reply = ({ email, onClose, onSend }) => {
  const [replyContent, setReplyContent] = useState('');
  const [subject, setSubject] = useState(`Re: ${email?.subject || ''}`);
  const [attachments, setAttachments] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);
  const [ccRecipients, setCcRecipients] = useState('');
  const [bccRecipients, setBccRecipients] = useState('');
  
  const fileInputRef = useRef(null);

  // Handle file attachment
  const handleAttachFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files);
    
    // Create preview data for each file
    const newAttachments = files.map(file => ({
      id: Math.random().toString(36).substring(2, 15),
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
      file: file
    }));
    
    setAttachments([...attachments, ...newAttachments]);
    e.target.value = null; // Reset file input
  };

  // Format file size to human-readable format
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Remove attachment
  const removeAttachment = (id) => {
    setAttachments(attachments.filter(attachment => attachment.id !== id));
  };

  // Text formatting handlers
  const applyFormatting = (format) => {
    // This is a simplified example - in a real app you'd have a rich text editor
    // For demonstration, we'll just add markdown-style formatting
    switch(format) {
      case 'bold':
        setReplyContent(replyContent + '**bold text**');
        break;
      case 'italic':
        setReplyContent(replyContent + '*italic text*');
        break;
      case 'underline':
        setReplyContent(replyContent + '__underlined text__');
        break;
      case 'bullet-list':
        setReplyContent(replyContent + '\n- List item\n- List item');
        break;
      case 'numbered-list':
        setReplyContent(replyContent + '\n1. List item\n2. List item');
        break;
      case 'link':
        setReplyContent(replyContent + '[link text](https://example.com)');
        break;
      case 'image':
        setReplyContent(replyContent + '![image description](image_url)');
        break;
      default:
        break;
    }
  };

  // Handle sending the reply
  const handleSend = () => {
    const replyData = {
      to: email?.from,
      cc: ccRecipients,
      bcc: bccRecipients,
      subject,
      content: replyContent,
      attachments
    };
    
    if (onSend) {
      onSend(replyData);
    } else {
      console.log('Sending reply:', replyData);
      alert('Reply sent!');
      onClose();
    }
  };

  return (
    <div className={`
      fixed 
      ${isFullScreen ? 'inset-0' : 'inset-x-0 bottom-0 top-auto'} 
      bg-gray-900 
      ${isFullScreen ? 'z-50' : 'z-40'} 
      ${isFullScreen ? '' : 'max-w-4xl mx-auto rounded-t-lg'}
      shadow-xl
      border border-gray-700
      flex flex-col
    `}>
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-800 rounded-t-lg">
        <h3 className="text-lg font-medium text-white">Reply</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setIsFullScreen(!isFullScreen)} 
            className="text-gray-400 hover:text-white"
          >
            {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      
      {/* Email form */}
      <div className="flex-1 overflow-auto p-6 bg-gray-800">
        {/* To field */}
        <div className="mb-4">
          <div className="flex justify-between">
            <label className="block text-gray-400 mb-1">To</label>
            <button 
              onClick={() => setShowCc(!showCc)}
              className="text-blue-400 text-sm hover:text-blue-300"
            >
              {showCc ? 'Hide' : 'Cc'}
            </button>
          </div>
          <input
            type="text"
            value={email?.from || ''}
            readOnly
            className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        {/* Cc field */}
        {showCc && (
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="block text-gray-400 mb-1">Cc</label>
              <button 
                onClick={() => setShowBcc(!showBcc)}
                className="text-blue-400 text-sm hover:text-blue-300"
              >
                {showBcc ? 'Hide' : 'Bcc'}
              </button>
            </div>
            <input
              type="text"
              value={ccRecipients}
              onChange={(e) => setCcRecipients(e.target.value)}
              placeholder="email@example.com, another@example.com"
              className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        )}
        
        {/* Bcc field */}
        {showBcc && (
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Bcc</label>
            <input
              type="text"
              value={bccRecipients}
              onChange={(e) => setBccRecipients(e.target.value)}
              placeholder="email@example.com, another@example.com"
              className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        )}
        
        {/* Subject field */}
        <div className="mb-4">
          <label className="block text-gray-400 mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        {/* Formatting toolbar */}
        <div className="flex flex-wrap items-center mb-2 p-2 bg-gray-750 rounded-t border border-gray-600">
          <button 
            onClick={() => applyFormatting('bold')}
            className="p-1.5 text-gray-300 hover:bg-gray-700 rounded mr-1"
            title="Bold"
          >
            <Bold size={18} />
          </button>
          <button 
            onClick={() => applyFormatting('italic')}
            className="p-1.5 text-gray-300 hover:bg-gray-700 rounded mr-1"
            title="Italic"
          >
            <Italic size={18} />
          </button>
          <button 
            onClick={() => applyFormatting('underline')}
            className="p-1.5 text-gray-300 hover:bg-gray-700 rounded mr-1"
            title="Underline"
          >
            <Underline size={18} />
          </button>
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          <button 
            onClick={() => applyFormatting('bullet-list')}
            className="p-1.5 text-gray-300 hover:bg-gray-700 rounded mr-1"
            title="Bullet List"
          >
            <List size={18} />
          </button>
          <button 
            onClick={() => applyFormatting('numbered-list')}
            className="p-1.5 text-gray-300 hover:bg-gray-700 rounded mr-1"
            title="Numbered List"
          >
            <ListOrdered size={18} />
          </button>
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          <button 
            onClick={() => applyFormatting('link')}
            className="p-1.5 text-gray-300 hover:bg-gray-700 rounded mr-1"
            title="Insert Link"
          >
            <Link size={18} />
          </button>
          <button 
            onClick={() => applyFormatting('image')}
            className="p-1.5 text-gray-300 hover:bg-gray-700 rounded mr-1"
            title="Insert Image"
          >
            <Image size={18} />
          </button>
          <div className="w-px h-6 bg-gray-600 mx-2"></div>
          <div className="relative ml-1">
            <button className="p-1.5 text-gray-300 hover:bg-gray-700 rounded flex items-center">
              <span className="mr-1">Normal Text</span>
              <ChevronDown size={14} />
            </button>
          </div>
          <div className="ml-auto">
            <button 
              onClick={() => {}}
              className="p-1.5 text-gray-300 hover:bg-gray-700 rounded"
              title="More options"
            >
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
        
        {/* Message content */}
        <textarea
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          className="w-full h-64 p-3 rounded-b bg-gray-700 text-gray-100 border border-t-0 border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
          placeholder="Write your reply here..."
        ></textarea>
        
        {/* Attachments section */}
        {attachments.length > 0 && (
          <div className="mb-4 p-3 border border-gray-600 rounded bg-gray-750">
            <h4 className="text-gray-300 mb-2 font-medium">Attachments</h4>
            <div className="space-y-2">
              {attachments.map(attachment => (
                <div key={attachment.id} className="flex items-center bg-gray-700 p-2 rounded">
                  <Paperclip size={16} className="text-gray-400 mr-2" />
                  <div className="flex-1">
                    <div className="text-sm text-white truncate">{attachment.name}</div>
                    <div className="text-xs text-gray-400">{attachment.size}</div>
                  </div>
                  <button 
                    onClick={() => removeAttachment(attachment.id)}
                    className="text-gray-400 hover:text-red-400"
                    title="Remove attachment"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer with actions */}
      <div className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg flex justify-between items-center">
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelected}
            multiple
            className="hidden"
          />
          <button 
            onClick={handleAttachFile}
            className="px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md flex items-center"
          >
            <Paperclip size={18} className="mr-2" />
            Attach
          </button>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700"
          >
            Discard
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 flex items-center"
          >
            <Send size={16} className="mr-2" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reply;