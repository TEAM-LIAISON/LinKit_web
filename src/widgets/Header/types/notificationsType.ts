export interface NotificationDetails {
  teamName?: string
  teamMemberName?: string
  chatSenderName?: string
  matchingTargetName?: string
}

export interface NotificationItem {
  notificationType: 'TEAM_INVITATION' | 'CHATTING' | 'MATCHING' | 'TEAM'
  subNotificationType:
    | 'TEAM_INVITATION_REQUESTED'
    | 'TEAM_MEMBER_JOINED'
    | 'NEW_CHAT'
    | 'MATCHING_REQUESTED'
    | 'MATCHING_ACCEPTED'
    | 'MATCHING_REJECTED'
    | 'REMOVE_TEAM_REQUESTED'
    | 'REMOVE_TEAM_REJECTED'
    | 'REMOVE_TEAM_COMPLETED'
  notificationReadStatus: 'READ' | 'UNREAD'
  notificationOccurTime: string
  notificationDetails: NotificationDetails
}

export interface Notifications {
  notificationItems: NotificationItem[]
}