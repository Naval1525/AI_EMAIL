// import React from "react";
// import { AlertCircle, Mail, RefreshCw } from "lucide-react";
// import Email from "../components/Email";
// import Reply from "../components/Reply";
// import AIReply from "../components/AIReply";
// import ReplyOptions from "../components/ReplyOptions";
// import { DashboardProvider, useDashboard } from "../context/dashboardContext";

// // EmailItem Component
// const EmailItem = ({ email, onClick }) => {
//   return (
//     <div
//       className={`flex items-center px-6 py-4 hover:bg-gray-200 cursor-pointer transition-colors duration-150 ${
//         !email.read ? "border-l-4 border-black" : ""
//       }`}
//       onClick={() => onClick(email)}
//     >
//       {/* Mail icon */}
//       <div className="pr-3">
//         <Mail size={16} className="text-gray-600" />
//       </div>

//       {/* From */}
//       <div className="w-24 md:w-32 lg:w-40 truncate font-medium">
//         {email.from}
//       </div>

//       {/* Subject and preview */}
//       <div className="flex-grow px-4 max-w-xs md:max-w-full">
//         <div className="flex items-center">
//           <span
//             className={`font-medium ${
//               !email.read ? "text-black" : "text-gray-700"
//             } truncate`}
//           >
//             {email.subject}
//           </span>
//         </div>
//         <p className="text-sm text-gray-600 truncate mt-1">{email.preview}</p>
//       </div>

//       {/* Date/Time */}
//       <div className="w-20 md:w-24 text-right text-sm text-gray-600 flex-shrink-0">
//         <div>{email.date}</div>
//         <div>{email.time}</div>
//       </div>
//     </div>
//   );
// };

// // EmailList Component
// const EmailList = () => {
//   const { emails, loading, error, handleEmailClick, handleRefresh } =
//     useDashboard();

//   if (loading) {
//     return (
//       <div className="p-6 text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
//         <p className="mt-4">Loading emails...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 text-center text-red-500">
//         <AlertCircle size={36} className="mx-auto mb-4" />
//         <p>Error loading emails: {error}</p>
//         <button
//           className="mt-4 px-4 py-2 bg-black rounded hover:bg-gray-800 text-white"
//           onClick={handleRefresh}
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   if (emails.length === 0) {
//     return (
//       <div className="p-6 text-center text-gray-600">
//         <Mail size={36} className="mx-auto mb-4" />
//         <p>Your inbox is empty</p>
//       </div>
//     );
//   }

//   return (
//     <div className="divide-y divide-gray-200">
//       {emails.map((email) => (
//         <EmailItem key={email.id} email={email} onClick={handleEmailClick} />
//       ))}
//     </div>
//   );
// };

// // Main Dashboard Component
// const DashboardContent = () => {
//   const {
//     selectedEmail,
//     refreshing,
//     showReply,
//     showAIReply,
//     showReplyOptions,
//     handleRefresh,
//     closeEmailDetail,
//     openReplyOptions,
//     openReply,
//     openAIReply,
//     closeReply,
//     handleSendReply,
//   } = useDashboard();

//   return (
//     <div className="bg-gradient-to-t from-black min-h-screen text-gray-800">
//       <div className="max-w-7xl mx-auto pt-6 px-4">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-black">Email Dashboard</h1>

//           {/* Refresh Button */}
//           <button
//             onClick={handleRefresh}
//             disabled={refreshing}
//             className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <RefreshCw
//               size={18}
//               className={`mr-2 ${refreshing ? "animate-spin" : ""}`}
//             />
//             {refreshing ? "Refreshing..." : "Refresh"}
//           </button>
//         </div>

//         {/* Main content area */}
//         <div className="flex flex-col md:flex-row">
//           {/* Email list panel */}
//           <div
//             className={`${
//               selectedEmail ? "md:w-1/2 lg:w-2/5" : "w-full"
//             } bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 mb-4 md:mb-0`}
//           >
//             <div className="p-4 border-b border-gray-200 bg-black text-white">
//               <h1 className="text-xl font-bold">Inbox</h1>
//             </div>

//             <EmailList />
//           </div>

//           {/* Email detail panel */}
//           {selectedEmail && (
//             <div className="w-full md:w-1/2 lg:w-3/5 md:ml-4">
//               <Email
//                 email={selectedEmail}
//                 onReply={openReplyOptions}
//                 onClose={closeEmailDetail}
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Reply popups */}
//       {showReplyOptions && selectedEmail && (
//         <ReplyOptions
//           email={selectedEmail}
//           onClose={closeReply}
//           onReplyOwn={openReply}
//           onReplyAI={openAIReply}
//         />
//       )}

//       {showReply && selectedEmail && (
//         <Reply
//           email={selectedEmail}
//           onClose={closeReply}
//           onSend={handleSendReply}
//         />
//       )}

//       {showAIReply && selectedEmail && (
//         <AIReply
//           email={selectedEmail}
//           onClose={closeReply}
//           onSend={handleSendReply}
//         />
//       )}
//     </div>
//   );
// };

// // Wrapper component that provides context
// const Dashboard = () => {
//   return (
//     <DashboardProvider>
//       <DashboardContent />
//     </DashboardProvider>
//   );
// };

// export default Dashboard;
import React from "react";
import { AlertCircle, Mail, RefreshCw, X, ArrowLeft, Send } from "lucide-react";
import Email from "../components/Email";
import Reply from "../components/Reply";
import AIReply from "../components/aiReply";
import ReplyOptions from "../components/ReplyOptions";
import { DashboardProvider, useDashboard } from "../context/dashboardContext";

// EmailItem Component
const EmailItem = ({ email, onClick }) => {
  return (
    <div
      className={`flex items-center px-6 py-4 hover:bg-gray-100 cursor-pointer transition-colors duration-150 ${
        !email.read ? "border-l-4 border-black" : ""
      }`}
      onClick={() => onClick(email)}
    >
      {/* Mail icon */}
      <div className="pr-3">
        <div className={`rounded-full p-2 ${!email.read ? "bg-black" : "bg-gray-200"}`}>
          <Mail size={16} className={!email.read ? "text-white" : "text-gray-600"} />
        </div>
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
        <p className="mt-4 text-gray-700">Loading emails...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-400">
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
    <div className="bg-gradient-to-b from-white to-pink-50 min-h-screen text-gray-800 mb-28">
      <div className="max-w-7xl mx-auto pt-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black">Inbox</h1>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <RefreshCw
              size={18}
              className={`mr-2 ${refreshing ? "animate-spin" : ""}`}
            />
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Email list panel */}
          <div
            className={`${
              selectedEmail ? "md:w-1/2 lg:w-2/5" : "w-full"
            } bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 mb-4 md:mb-0 border border-gray-100`}
          >
            <div className="p-4 border-b border-gray-100 bg-black text-white rounded-t-xl">
              <h2 className="text-xl font-medium">Messages</h2>
            </div>

            <EmailList />
          </div>

          {/* Email detail panel */}
          {selectedEmail && (
            <div className="w-full md:w-1/2 lg:w-3/5">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100 bg-black text-white rounded-t-xl flex justify-between items-center">
                  <div className="flex items-center">
                    <button
                      onClick={closeEmailDetail}
                      className="mr-3 p-1 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <h2 className="text-xl font-medium">Email Details</h2>
                  </div>
                  <button
                    onClick={closeEmailDetail}
                    className="p-1 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                <Email
                  email={selectedEmail}
                  onReply={openReplyOptions}
                  onClose={closeEmailDetail}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reply popups */}
      {showReplyOptions && selectedEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 shadow-xl border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">Reply Options</h3>
              <button onClick={closeReply} className="p-1 rounded-full hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <ReplyOptions
              email={selectedEmail}
              onClose={closeReply}
              onReplyOwn={openReply}
              onReplyAI={openAIReply}
            />
          </div>
        </div>
      )}

      {showReply && selectedEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 shadow-xl border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">Compose Reply</h3>
              <button onClick={closeReply} className="p-1 rounded-full hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <Reply
              email={selectedEmail}
              onClose={closeReply}
              onSend={handleSendReply}
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleSendReply(selectedEmail.id, "Your reply text")}
                className="bg-black text-white px-6 py-2 rounded-full flex items-center hover:bg-gray-800 transition-all duration-300"
              >
                <Send size={18} className="mr-2" />
                Send Reply
              </button>
            </div>
          </div>
        </div>
      )}

      {showAIReply && selectedEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 shadow-xl border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">AI-Generated Reply</h3>
              <button onClick={closeReply} className="p-1 rounded-full hover:bg-gray-100">
                <X size={20} />
              </button>
            </div>
            <AIReply
              email={selectedEmail}
              onClose={closeReply}
              onSend={handleSendReply}
            />
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={closeReply}
                className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSendReply(selectedEmail.id, "AI-generated reply text")}
                className="bg-black text-white px-6 py-2 rounded-full flex items-center hover:bg-gray-800 transition-all duration-300"
              >
                <Send size={18} className="mr-2" />
                Send AI Reply
              </button>
            </div>
          </div>
        </div>
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