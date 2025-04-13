import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showReply, setShowReply] = useState(false);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

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

  // Handle toggling star
  const handleToggleStar = (e, email) => {
    e.stopPropagation();
    // Update local state
    setEmails(
      emails.map((e) =>
        e.id === email.id ? { ...e, starred: !e.starred } : e
      )
    );
    
    // Update the selected email if it's the one being starred
    if (selectedEmail && selectedEmail.id === email.id) {
      setSelectedEmail({
        ...selectedEmail,
        starred: !selectedEmail.starred,
      });
    }
    
    // You could add an API call here to update the starred status on the backend
    console.log(`Toggled star for email ${email.id}`);
  };

  // Value to be provided by the context
  const value = {
    emails,
    selectedEmail,
    loading,
    error,
    refreshing,
    showReply,
    handleRefresh,
    handleEmailClick,
    closeEmailDetail,
    openReply,
    closeReply,
    handleSendReply,
    handleToggleStar,
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