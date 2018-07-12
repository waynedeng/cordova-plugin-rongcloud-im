// 2018-07-12 ADD By Wayne

module.exports = {
	init: function (success, failuer, options) {
    var RongIMClient = RongIMLib.RongIMClient;
    var appKey = options[0];
    RongIMClient.init(appKey);
  },
  connect: function (success, failuer, options) {
    var RongIMClient = RongIMLib.RongIMClient;
    var token = options[0];
  },
  reconnect: function (success, failuer, options) {

  },
  disconnect: function (success, failuer, options) {
  
  },
  setConnectionStatusListener: function (success, failuer, options) {
  
  },
  sendTextMessage: function (success, failuer, options) {
  
  },
  sendImageMessage: function (success, failuer, options) {
  
  },
  sendVoiceMessage: function (success, failuer, options) {
  
  },
  sendLocationMessage: function (success, failuer, options) {
  
  },
  sendRichContentMessage: function (success, failuer, options) {
  
  },
  sendCommandNotificationMessage: function (success, failuer, options) {
  
  },
  setOnReceiveMessageListener: function (success, failuer, options) {
  
  },
  getConversationList: function (success, failuer, options) {
  
  },
  getConversation: function (success, failuer, options) {
  
  },
  removeConversation: function (success, failuer, options) {
  
  },
  clearConversations: function (success, failuer, options) {
  
  },
  setConversationToTop: function (success, failuer, options) {
  
  },
  getConversationNotificationStatus: function (success, failuer, options) {
  
  },
  setConversationNotificationStatus: function (success, failuer, options) {
  
  },
  getLatestMessages: function (success, failuer, options) {
  
  },
  getHistoryMessages: function (success, failuer, options) {
  
  },
  getHistoryMessagesByObjectName: function (success, failuer, options) {
  
  },
  deleteMessages: function (success, failuer, options) {
  
  },
  clearMessages: function (success, failuer, options) {
  
  },
  getTotalUnreadCount: function (success, failuer, options) {
  
  },
  getUnreadCount: function (success, failuer, options) {
  
  },
  getUnreadCountByConversationTypes: function (success, failuer, options) {
  
  },
  setMessageReceivedStatus: function (success, failuer, options) {
  
  },
  clearMessagesUnreadStatus: function (success, failuer, options) {
  
  },
  setMessageExtra: function (success, failuer, options) {
  
  },
  getTextMessageDraft: function (success, failuer, options) {
  
  },
  saveTextMessageDraft: function (success, failuer, options) {
  
  },
  clearTextMessageDraft: function (success, failuer, options) {
  
  },
  createDiscussion: function (success, failuer, options) {
  
  },
  getDiscussion: function (success, failuer, options) {
  
  },
  setDiscussionName: function (success, failuer, options) {
  
  },
  addMemberToDiscussion: function (success, failuer, options) {
  
  },
  removeMemberFromDiscussion: function (success, failuer, options) {
  
  },
  quitDiscussion: function (success, failuer, options) {
  
  },
  setDiscussionInviteStatus: function (success, failuer, options) {
  
  },
  syncGroup: function (success, failuer, options) {
  
  },
  joinGroup: function (success, failuer, options) {
  
  },
  quitGroup: function (success, failuer, options) {
  
  },
  getConnectionStatus: function (success, failuer, options) {
  
  },
  logout: function (success, failuer, options) {
  
  },
  getRemoteHistoryMessages: function (success, failuer, options) {
  
  },
  setMessageSentStatus: function (success, failuer, options) {
  
  },
  getCurrentUserId: function (success, failuer, options) {
  
  },
  addToBlacklist: function (success, failuer, options) {
  
  },
  removeFromBlacklist: function (success, failuer, options) {
  
  },
  getBlacklistStatus: function (success, failuer, options) {
  
  },
  getBlacklist: function (success, failuer, options) {
  
  },
  setNotificationQuietHours: function (success, failuer, options) {
  
  },
  removeNotificationQuietHours: function (success, failuer, options) {
  
  },
  getNotificationQuietHours: function (success, failuer, options) {
  
  },
  disableLocalNotification: function (success, failuer, options) {
  
  }  
};

require('cordova/exec/proxy').add("RongCloudLibPlugin", module.exports);