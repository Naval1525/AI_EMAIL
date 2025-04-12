import React, { useState } from 'react';
import { Star, Paperclip, AlertCircle, Tag, ShoppingCart, Code, BookOpen, MessageCircle, Mail, Briefcase, Reply, X } from 'lucide-react';
import ReplyComponent from './Reply'; // Import the separate Reply component

const DashBoard = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showReply, setShowReply] = useState(false);

  // Sample email data - 10 emails
  const emails = [
    {
      id: 1,
      starred: true,
      from: "LinkedIn",
      subject: "New jobs similar to Full Stack Engineer at Talent Corner HR Services Pvt Ltd",
      preview: "Jobs similar to Full Stack Engineer at Talent Corner HR Services Pvt Ltd...",
      body: "Dear Aditya,\n\nWe found some new job postings that might interest you based on your profile and previous job searches:\n\n1. Senior Full Stack Developer at TechCorp\n2. Frontend Engineer at InnovateSoft\n3. React Developer at WebSolutions\n\nClick below to view these opportunities and more.\n\nBest regards,\nLinkedIn Jobs Team",
      hasAttachment: false,
      date: "Apr 12",
      time: "3:32 AM",
      read: false,
      icon: <Briefcase size={16} className="text-blue-400" />
    },
    // ... other emails (same as in the previous example)
  ];

  // Handle email click
  const handleEmailClick = (email) => {
    // Mark email as read
    email.read = true;
    setSelectedEmail(email);
  };

  // Close email detail view
  const closeEmailDetail = () => {
    setSelectedEmail(null);
    setShowReply(false);
  };

  // Open reply form
  const openReply = () => {
    setShowReply(true);
  };

  // Close reply form
  const closeReply = () => {
    setShowReply(false);
  };

  // Handle sending a reply
  const handleSendReply = (replyData) => {
    console.log('Reply sent:', replyData);
    // Here you would implement the actual sending logic
    alert('Reply sent successfully!');
    setShowReply(false);
  };

  // Email Component
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
              {email.icon}
            </div>
            <div>
              <div className="font-medium text-white">{email.from}</div>
              <div className="text-sm text-gray-400">{email.date} at {email.time}</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6">
          <pre className="whitespace-pre-wrap font-sans text-gray-300">{email.body}</pre>
        </div>
        
        {email.hasAttachment && (
          <div className="border-t border-gray-700 py-4">
            <div className="flex items-center">
              <Paperclip size={16} className="text-gray-400 mr-2" />
              <span className="text-gray-300">attachment.pdf</span>
            </div>
          </div>
        )}
        
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

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <div className="max-w-7xl mx-auto pt-6 px-4">
        {/* Main content area */}
        <div className="flex">
          {/* Email list panel */}
          <div className={`${selectedEmail ? 'w-1/2 lg:w-2/5' : 'w-full'} bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300`}>
            <div className="p-4 border-b border-gray-700">
              <h1 className="text-xl font-bold text-white">Inbox</h1>
            </div>
            
            <div className="divide-y divide-gray-700">
              {emails.map((email) => (
                <div 
                  key={email.id} 
                  className={`flex items-center px-6 py-4 hover:bg-gray-700 cursor-pointer transition-colors duration-150 ${!email.read ? 'border-l-4 border-blue-500' : ''}`}
                  onClick={() => handleEmailClick(email)}
                >
                  {/* Checkbox */}
                  <div className="pr-4" onClick={e => e.stopPropagation()}>
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                    />
                  </div>
                  
                  {/* Star */}
                  <div className="pr-4" onClick={e => e.stopPropagation()}>
                    <Star 
                      size={18} 
                      className={email.starred ? "text-yellow-400 fill-yellow-400" : "text-gray-500 hover:text-gray-300"}
                    />
                  </div>
                  
                  {/* Icon indicator */}
                  <div className="pr-4">
                    {email.icon}
                  </div>
                  
                  {/* From */}
                  <div className="w-32 lg:w-40 truncate font-medium">
                    {email.from}
                  </div>
                  
                  {/* Subject and preview */}
                  <div className="flex-grow px-4">
                    <div className="flex items-center">
                      <span className={`font-medium ${!email.read ? 'text-white' : 'text-gray-300'} truncate`}>
                        {email.subject}
                      </span>
                      {email.hasAttachment && (
                        <Paperclip size={16} className="ml-2 flex-shrink-0 text-gray-400" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400 truncate mt-1">{email.preview}</p>
                  </div>
                  
                  {/* Date/Time */}
                  <div className="w-24 text-right text-sm text-gray-400 flex-shrink-0">
                    <div>{email.date}</div>
                    <div>{email.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Email detail panel */}
          {selectedEmail && (
            <div className="w-1/2 lg:w-3/5 ml-4">
              <Email 
                email={selectedEmail} 
                onReply={openReply} 
                onClose={closeEmailDetail} 
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Reply popup */}
      {showReply && selectedEmail && (
        <ReplyComponent 
          email={selectedEmail} 
          onClose={closeReply}
          onSend={handleSendReply}
        />
      )}
    </div>
  );
};

export default DashBoard;