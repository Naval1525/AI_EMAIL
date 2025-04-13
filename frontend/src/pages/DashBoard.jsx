import React from "react";
import { AlertCircle, Mail, RefreshCw } from "lucide-react";
import Email from "../components/Email";
import Reply from "../components/Reply";
import AIReply from "../components/AIReply";
import ReplyOptions from "../components/ReplyOptions";
import { DashboardProvider, useDashboard } from "../context/dashboardContext";

// EmailItem Component
const EmailItem = ({ email, onClick }) => {
  return (
    <div
      className={`flex items-center px-6 py-4 hover:bg-gray-200 cursor-pointer transition-colors duration-150 ${
        !email.read ? "border-l-4 border-black" : ""
      }`}
      onClick={() => onClick(email)}
    >
      {/* Mail icon */}
      <div className="pr-3">
        <Mail size={16} className="text-gray-600" />
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
              !email.read ? "text-black" : "text-gray-700"
            } truncate`}
          >
            {email.subject}
          </span>
        </div>
        <p className="text-sm text-gray-600 truncate mt-1">{email.preview}</p>
      </div>

      {/* Date/Time */}
      <div className="w-20 md:w-24 text-right text-sm text-gray-600 flex-shrink-0">
        <div>{email.date}</div>
        <div>{email.time}</div>
      </div>
    </div>
  );
};

// EmailList Component
const EmailList = () => {
  const { emails, loading, error, handleEmailClick, handleRefresh } =
    useDashboard();

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
        <p className="mt-4">Loading emails...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        <AlertCircle size={36} className="mx-auto mb-4" />
        <p>Error loading emails: {error}</p>
        <button
          className="mt-4 px-4 py-2 bg-black rounded hover:bg-gray-800 text-white"
          onClick={handleRefresh}
        >
          Retry
        </button>
      </div>
    );
  }

  if (emails.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        <Mail size={36} className="mx-auto mb-4" />
        <p>Your inbox is empty</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {emails.map((email) => (
        <EmailItem key={email.id} email={email} onClick={handleEmailClick} />
      ))}
    </div>
  );
};

// Main Dashboard Component
const DashboardContent = () => {
  const {
    selectedEmail,
    refreshing,
    showReply,
    showAIReply,
    showReplyOptions,
    handleRefresh,
    closeEmailDetail,
    openReplyOptions,
    openReply,
    openAIReply,
    closeReply,
    handleSendReply,
  } = useDashboard();

  return (
    <div className="bg-gradient-to-t from-black min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto pt-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Email Dashboard</h1>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw
              size={18}
              className={`mr-2 ${refreshing ? "animate-spin" : ""}`}
            />
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row">
          {/* Email list panel */}
          <div
            className={`${
              selectedEmail ? "md:w-1/2 lg:w-2/5" : "w-full"
            } bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 mb-4 md:mb-0`}
          >
            <div className="p-4 border-b border-gray-200 bg-black text-white">
              <h1 className="text-xl font-bold">Inbox</h1>
            </div>

            <EmailList />
          </div>

          {/* Email detail panel */}
          {selectedEmail && (
            <div className="w-full md:w-1/2 lg:w-3/5 md:ml-4">
              <Email
                email={selectedEmail}
                onReply={openReplyOptions}
                onClose={closeEmailDetail}
              />
            </div>
          )}
        </div>
      </div>

      {/* Reply popups */}
      {showReplyOptions && selectedEmail && (
        <ReplyOptions
          email={selectedEmail}
          onClose={closeReply}
          onReplyOwn={openReply}
          onReplyAI={openAIReply}
        />
      )}

      {showReply && selectedEmail && (
        <Reply
          email={selectedEmail}
          onClose={closeReply}
          onSend={handleSendReply}
        />
      )}

      {showAIReply && selectedEmail && (
        <AIReply
          email={selectedEmail}
          onClose={closeReply}
          onSend={handleSendReply}
        />
      )}
    </div>
  );
};

// Wrapper component that provides context
const Dashboard = () => {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
};

export default Dashboard;
