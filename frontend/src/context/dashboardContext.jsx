import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showReply, setShowReply] = useState(false);
  const [showAIReply, setShowAIReply] = useState(false);
  const [showReplyOptions, setShowReplyOptions] = useState(false);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [sendingReply, setSendingReply] = useState(false);

  // Get API URL from environment variables
  const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

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

  // Fetch emails from backend
  const fetchEmails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/email/inbox`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
        threadId: email.threadId,
        from:
          email.from?.split("<")[0]?.trim() || email.from || "Unknown Sender",
        to: email.to || "me",
        subject: email.subject || "(No Subject)",
        body: email.snippet || "",
        preview: email.snippet || "",
        date: formatDate(email.date || new Date()),
        time: formatTime(email.date || new Date()),
        read: false,
      }));

      setEmails(mappedEmails);
    } catch (err) {
      console.error("Error fetching emails:", err);
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Load emails on initial render
  useEffect(() => {
    fetchEmails();
  }, [API_URL]);

  // Handle refresh button click
  const handleRefresh = () => {
    setRefreshing(true);
    fetchEmails();
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
    setShowAIReply(false);
    setShowReplyOptions(false);
  };

  // Open reply options
  const openReplyOptions = () => {
    setShowReplyOptions(true);
  };

  // Open manual reply form
  const openReply = () => {
    setShowReplyOptions(false);
    setShowReply(true);
  };

  // Open AI reply form
  const openAIReply = () => {
    setShowReplyOptions(false);
    setShowAIReply(true);
  };

  // Close all reply forms
  const closeReply = () => {
    setShowReply(false);
    setShowAIReply(false);
    setShowReplyOptions(false);
  };

  // Handle sending a reply (works for both regular and AI replies)
  const handleSendReply = async (replyData) => {
    try {
      setSendingReply(true);
      
      // Ensure we have all the required fields for the backend
      const completeReplyData = {
        to: replyData.to,
        subject: replyData.subject,
        body: replyData.body,
        messageId: selectedEmail.id,
        threadId: selectedEmail.threadId || null
      };

      console.log("Sending reply with data:", completeReplyData);

      const response = await fetch(`${API_URL}/api/gmail/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(completeReplyData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send reply");
      }

      const result = await response.json();
      console.log("Reply sent successfully:", result);
      
      alert("Reply sent successfully!");
      
      // Close reply forms
      setShowReply(false);
      setShowAIReply(false);
      
      // Refresh emails to show the sent reply in the thread
      handleRefresh();
      
    } catch (err) {
      console.error("Error sending reply:", err);
      alert(`Failed to send reply: ${err.message}`);
    } finally {
      setSendingReply(false);
    }
  };

  // Value to be provided by the context
  const value = {
    emails,
    selectedEmail,
    loading,
    error,
    refreshing,
    showReply,
    showAIReply,
    showReplyOptions,
    sendingReply,
    handleRefresh,
    handleEmailClick,
    closeEmailDetail,
    openReplyOptions,
    openReply,
    openAIReply,
    closeReply,
    handleSendReply,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to use the dashboard context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};