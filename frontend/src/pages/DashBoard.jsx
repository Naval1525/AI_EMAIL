import React, { useState, useEffect } from "react";
import { Star, Paperclip, AlertCircle, Mail, Reply, X } from "lucide-react";
import ReplyComponent from "./Reply"; // Import the separate Reply component

const DashBoard = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showReply, setShowReply] = useState(false);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get API URL from environment variables
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  // Fetch emails from backend
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        setLoading(true);
        // Call the correct API endpoint with credentials
        const response = await fetch(`${API_URL}/api/email/inbox`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // Include credentials to ensure cookies are sent with the request
          credentials: "include",
        });

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Authentication failed. Please log in again.");
          }
          throw new Error("Failed to fetch emails");
        }

        const data = await response.json();

        // Map backend data to match the frontend structure
        const mappedEmails = data.map((email) => ({
          id: email.messageId,
          from:
            email.from?.split("<")[0]?.trim() || email.from || "Unknown Sender",
          to: email.to || "me",
          subject: email.subject || "(No Subject)",
          body: email.snippet || "",
          preview: email.snippet || "",
          date: formatDate(email.date || new Date()),
          time: formatTime(email.date || new Date()),
          read: false, // Default to unread
          starred: false, // Default to unstarred
          hasAttachment: false, // Default to no attachments
        }));

        setEmails(mappedEmails);
        
      } catch (err) {
        console.error("Error fetching emails:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, [API_URL]);

  // Helper function to format date
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch (err) {
      return "Unknown date";
    }
  };

  // Helper function to format time
  const formatTime = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (err) {
      return "";
    }
  };

  // Handle email click
  const handleEmailClick = async (email) => {
    try {
      // Mark email as read on the backend (if we implement this endpoint later)
      if (!email.read) {
        // Update local state first for better UX
        setEmails(
          emails.map((e) => (e.id === email.id ? { ...e, read: true } : e))
        );

        // This endpoint doesn't exist yet, but we could implement it later
        // For now, just log that we would make this request
        console.log(`Would mark email ${email.id} as read`);
      }

      setSelectedEmail(email);
    } catch (err) {
      console.error("Error marking email as read:", err);
    }
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
  const handleSendReply = async (replyData) => {
    try {
      const response = await fetch(`${API_URL}/api/gmail/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          messageId: selectedEmail.id,
          ...replyData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send reply");
      }

      alert("Reply sent successfully!");
      setShowReply(false);
    } catch (err) {
      console.error("Error sending reply:", err);
      alert(`Failed to send reply: ${err.message}`);
    }
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
              <Mail size={16} className="text-gray-400" />
            </div>
            <div>
              <div className="font-medium text-white">{email.from}</div>
              <div className="text-sm text-gray-400">
                {email.date} at {email.time}
              </div>
            </div>
            <div className="ml-auto">
              <button
                onClick={(e) => handleToggleStar(e, email)}
                className="text-gray-400 hover:text-yellow-400"
              >
                <Star
                  size={20}
                  fill={email.starred ? "rgb(250 204 21)" : "none"}
                  className={email.starred ? "text-yellow-400" : ""}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <pre className="whitespace-pre-wrap font-sans text-gray-300">
            {email.body}
          </pre>
        </div>

        {email.hasAttachment && (
          <div className="border-t border-gray-700 py-4">
            <div className="flex items-center">
              <Paperclip size={16} className="text-gray-400 mr-2" />
              <span className="text-gray-300">
                {email.attachmentName || "attachment.pdf"}
              </span>
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Email Dashboard</h1>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row">
          {/* Email list panel */}
          <div
            className={`${
              selectedEmail ? "md:w-1/2 lg:w-2/5" : "w-full"
            } bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 mb-4 md:mb-0`}
          >
            <div className="p-4 border-b border-gray-700">
              <h1 className="text-xl font-bold text-white">Inbox</h1>
            </div>

            {loading ? (
              <div className="p-6 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4">Loading emails...</p>
              </div>
            ) : error ? (
              <div className="p-6 text-center text-red-400">
                <AlertCircle size={36} className="mx-auto mb-4" />
                <p>Error loading emails: {error}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            ) : emails.length === 0 ? (
              <div className="p-6 text-center text-gray-400">
                <Mail size={36} className="mx-auto mb-4" />
                <p>Your inbox is empty</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-700">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    className={`flex items-center px-6 py-4 hover:bg-gray-700 cursor-pointer transition-colors duration-150 ${
                      !email.read ? "border-l-4 border-blue-500" : ""
                    }`}
                    onClick={() => handleEmailClick(email)}
                  >
                    {/* Mail icon */}
                    <div className="pr-3">
                      <Mail size={16} className="text-gray-400" />
                    </div>

                    {/* From */}
                    <div className="w-24 md:w-32 lg:w-40 truncate font-medium">
                      {email.from}
                      
                    </div>

                    {/* Subject and preview */}
                    <div className="flex-grow px-4 max-w-xs md:max-w-full">
                      <div className="flex items-center">
                        <span
                          className={`font-medium ${
                            !email.read ? "text-white" : "text-gray-300"
                          } truncate`}
                        >
                          {email.subject}
                        </span>
                        {email.hasAttachment && (
                          <Paperclip
                            size={16}
                            className="ml-2 flex-shrink-0 text-gray-400"
                          />
                        )}
                      </div>
                      <p className="text-sm text-gray-400 truncate mt-1">
                        {email.preview}
                      </p>
                    </div>

                    {/* Date/Time */}
                    <div className="w-20 md:w-24 text-right text-sm text-gray-400 flex-shrink-0">
                      <div>{email.date}</div>
                      <div>{email.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Email detail panel */}
          {selectedEmail && (
            <div className="w-full md:w-1/2 lg:w-3/5 md:ml-4">
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
