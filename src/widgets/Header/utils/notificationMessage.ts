type NotificationType = 'MATCHING' | 'CHATTING' | 'TEAM_INVITATION' | 'TEAM' | 'SYSTEM'
type SubNotificationType =
  | 'MATCHING_REQUESTED'
  | 'MATCHING_ACCEPTED'
  | 'MATCHING_REJECTED'
  | 'NEW_CHAT'
  | 'TEAM_INVITATION_REQUESTED'
  | 'TEAM_MEMBER_JOINED'
  | 'REMOVE_TEAM_REQUESTED'
  | 'REMOVE_TEAM_REJECTED'
  | 'REMOVE_TEAM_COMPLETED'
  | 'COMPLETE_PROFILE'
  | 'ETC'

interface NotificationDetails {
  matchingTargetName?: string
  chatSenderName?: string
  teamName?: string
  teamMemberName?: string
}

export const getNotificationMessage = (
  type: NotificationType,
  subType: SubNotificationType,
  details: NotificationDetails,
): string => {
  switch (type) {
    case 'MATCHING':
      switch (subType) {
        case 'MATCHING_REQUESTED':
          return `${details.matchingTargetName}님이 매칭을 요청했습니다.`
        case 'MATCHING_ACCEPTED':
          return `${details.matchingTargetName}님이 매칭을 수락했습니다.`
        case 'MATCHING_REJECTED':
          return `${details.matchingTargetName}님이 매칭을 거절했습니다.`
        default:
          return '알 수 없는 매칭 알림입니다.'
      }

    case 'CHATTING':
      if (subType === 'NEW_CHAT') {
        return `${details.chatSenderName}님이 메시지를 보냈습니다.`
      }
      return '알 수 없는 채팅 알림입니다.'

    case 'TEAM_INVITATION':
      switch (subType) {
        case 'TEAM_INVITATION_REQUESTED':
          return `${details.teamName} 팀에서 초대했습니다.`
        case 'TEAM_MEMBER_JOINED':
          return `${details.teamMemberName}님이 ${details.teamName} 팀에 합류했습니다.`
        default:
          return '알 수 없는 팀 초대 알림입니다.'
      }

    case 'TEAM':
      switch (subType) {
        case 'REMOVE_TEAM_REQUESTED':
          return `${details.teamMemberName}님이 ${details.teamName} 팀 탈퇴를 요청했습니다.`
        case 'REMOVE_TEAM_REJECTED':
          return `${details.teamMemberName}님의 ${details.teamName} 팀 탈퇴가 거절되었습니다.`
        case 'REMOVE_TEAM_COMPLETED':
          return `${details.teamName} 팀 탈퇴가 완료되었습니다.`
        default:
          return '알 수 없는 팀 알림입니다.'
      }

    case 'SYSTEM':
      switch (subType) {
        case 'COMPLETE_PROFILE':
          return '프로필을 완성하여 기능을 활성화하세요!'
        case 'ETC':
          return '시스템 알림이 있습니다.'
        default:
          return '알 수 없는 시스템 알림입니다.'
      }

    default:
      return '알 수 없는 알림입니다.'
  }
}