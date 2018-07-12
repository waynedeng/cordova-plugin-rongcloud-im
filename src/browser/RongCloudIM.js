// 2018-07-12 ADD By Wayne
function successCallBack(success, result) {
  var arg = {status: 'success',  result: result};
  success(arg);
}

function errorCallBack(failure, msg) {
  var arg = {status: 'error',  msg: msg};
  failure(arg);
}

var RongCloudIM = {
	init: function (success, failure,  options) {
    var RongIMClient = RongIMLib.RongIMClient;
    var appKey = options[0];
    RongIMClient.init(appKey);
  },
  connect: function (success, failure,  options) {
    var RongIMClient = RongIMLib.RongIMClient;
    var token = options[0];
    RongIMClient.connect(token, {
      onSuccess: function(userId) {
        console.log("Connect successfully." + userId);
        successCallBack(success,  {userId: userId});
      },
      onTokenIncorrect: function() {
        console.log('token无效');
        errorCallBack(success, 'token无效');
      },
      onError:function(errorCode){
            var info = '';
            switch (errorCode) {
              case RongIMLib.ErrorCode.TIMEOUT:
                info = '超时';
                break;
              case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:
                info = '不可接受的协议版本';
                break;
              case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
                info = 'appkey不正确';
                break;
              case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
                info = '服务器不可用';
                break;
            }
            console.log(errorCode);
            errorCallBack(success, info);
          }
    });
  },
  reconnect: function (success, failure,  options) {
    var RongIMClient = RongIMLib.RongIMClient;
    RongIMClient.reconnect();
  },
  disconnect: function (success, failure,  options) {
    var RongIMClient = RongIMLib.RongIMClient;
    RongIMClient.disconnect();
  },
  setConnectionStatusListener: function (success, failure,  options) {
    var RongIMClient = RongIMLib.RongIMClient;
    RongIMClient.setConnectionStatusListener({
      onChanged: function (status) {
          successCallBack(success, {status: status});
          switch (status) {
              case RongIMLib.ConnectionStatus.CONNECTED:
                  console.log('链接成功');
                  break;
              case RongIMLib.ConnectionStatus.CONNECTING:
                  console.log('正在链接');
                  break;
              case RongIMLib.ConnectionStatus.DISCONNECTED:
                  console.log('断开连接');
                  break;
              case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                  console.log('其他设备登录');
                  break;
                case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
                  console.log('域名不正确');
                  break;
              case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                console.log('网络不可用');
                break;
              }
      }});
  },
  sendTextMessage: function (success, failure,  options) {
    var RongIMClient = RongIMLib.RongIMClient;
    var conversationType = options[0];
    var targetId = options[1];
    var text = options[2];
    var extra = options[3];
    var msg = new RongIMLib.TextMessage({content: text,extra: extra});
    RongIMClient.getInstance().sendMessage(conversationType, targetId, msg, {
                onSuccess: function (message) {
                    //message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
                    console.log("Send successfully");
                    successCallBack(success, true);
                },
                onError: function (errorCode, message) {
                    var info = '';
                    errorCallBack(success, errorCode);
                    switch (errorCode) {
                        case RongIMLib.ErrorCode.TIMEOUT:
                            info = '超时';
                            break;
                        case RongIMLib.ErrorCode.UNKNOWN_ERROR:
                            info = '未知错误';
                            break;
                        case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                            info = '在黑名单中，无法向对方发送消息';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                            info = '不在讨论组中';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_GROUP:
                            info = '不在群组中';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                            info = '不在聊天室中';
                            break;
                        default :
                            info = x;
                            break;
                    }
                    console.log('发送失败:' + info);
                }
            }
        );
  },
  sendImageMessage: function (success, failure,  options) {
  
  },
  sendVoiceMessage: function (success, failure,  options) {
  
  },
  sendLocationMessage: function (success, failure,  options) {
  
  },
  sendRichContentMessage: function (success, failure,  options) {
  
  },
  sendCommandNotificationMessage: function (success, failure,  options) {
  
  },
  setOnReceiveMessageListener: function (success, failure,  options) {
    var RongIMClient = RongIMLib.RongIMClient;
    RongIMClient.setOnReceiveMessageListener({
      // 接收到的消息
      onReceived: function (message) {
        successCallBack(success, {message: message})
      }
    });
  },
  getConversationList: function (success, failure,  options) {
  
  },
  getConversation: function (success, failure,  options) {
  
  },
  removeConversation: function (success, failure,  options) {
  
  },
  clearConversations: function (success, failure,  options) {
  
  },
  setConversationToTop: function (success, failure,  options) {
  
  },
  getConversationNotificationStatus: function (success, failure,  options) {
  
  },
  setConversationNotificationStatus: function (success, failure,  options) {
  
  },
  getLatestMessages: function (success, failure,  options) {
    
  },
  getHistoryMessages: function (success, failure,  options) {
  
  },
  getHistoryMessagesByObjectName: function (success, failure,  options) {
  
  },
  deleteMessages: function (success, failure,  options) {
  
  },
  clearMessages: function (success, failure,  options) {
  
  },
  getTotalUnreadCount: function (success, failure,  options) {
  
  },
  getUnreadCount: function (success, failure,  options) {
  
  },
  getUnreadCountByConversationTypes: function (success, failure,  options) {
  
  },
  setMessageReceivedStatus: function (success, failure,  options) {
  
  },
  clearMessagesUnreadStatus: function (success, failure,  options) {
  
  },
  setMessageExtra: function (success, failure,  options) {
  
  },
  getTextMessageDraft: function (success, failure,  options) {
  
  },
  saveTextMessageDraft: function (success, failure,  options) {
  
  },
  clearTextMessageDraft: function (success, failure,  options) {
  
  },
  createDiscussion: function (success, failure,  options) {
  
  },
  getDiscussion: function (success, failure,  options) {
  
  },
  setDiscussionName: function (success, failure,  options) {
  
  },
  addMemberToDiscussion: function (success, failure,  options) {
  
  },
  removeMemberFromDiscussion: function (success, failure,  options) {
  
  },
  quitDiscussion: function (success, failure,  options) {
  
  },
  setDiscussionInviteStatus: function (success, failure,  options) {
  
  },
  syncGroup: function (success, failure,  options) {
  
  },
  joinGroup: function (success, failure,  options) {
  
  },
  quitGroup: function (success, failure,  options) {
  
  },
  getConnectionStatus: function (success, failure,  options) {
  
  },
  logout: function (success, failure,  options) {
  
  },
  getRemoteHistoryMessages: function (success, failure,  options) {
  
  },
  setMessageSentStatus: function (success, failure,  options) {
  
  },
  getCurrentUserId: function (success, failure,  options) {
  
  },
  addToBlacklist: function (success, failure,  options) {
  
  },
  removeFromBlacklist: function (success, failure,  options) {
  
  },
  getBlacklistStatus: function (success, failure,  options) {
  
  },
  getBlacklist: function (success, failure,  options) {
  
  },
  setNotificationQuietHours: function (success, failure,  options) {
  
  },
  removeNotificationQuietHours: function (success, failure,  options) {
  
  },
  getNotificationQuietHours: function (success, failure,  options) {
  
  },
  disableLocalNotification: function (success, failure,  options) {
  
  }  
}


module.exports = RongCloudIM;

require('cordova/exec/proxy').add("RongCloudLibPlugin", module.exports);