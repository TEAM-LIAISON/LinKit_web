import {
  AntecedentFormInputs,
  ApiPayload,
  AwardFormInputs,
  Career,
  Education,
  IFormData,
  OneSchoolFormInputs,
  PostIFormData,
  PostTeamMemberData,
  PostTeamProfileResponse,
  PostTeamProfileResponse2,
  TeamAnnouncementMemberInterface,
  TeamHistoryDataSet,
  TeamMemberData,
  TeamOnBoadingFieldFormInputs,
  TeamOnBoardingActivityWayFormInputs,
  TeamURLFormInputs,
  URLFormInputs,
  updateTeamOnBoadingFieldFormInputs,
} from './types'

// 리프레쉬 토큰
export const RefreshAccessToken = async (accessToken: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  const data = await response.json()
  return data
}

// 로그아웃
export async function Logout(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/logout`, {
    method: 'DELETE',
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

// 회원탈퇴
export async function Withdrawal(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/account`, {
    method: 'DELETE',
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return response
}

// 온보딩 개인정보 생성
export async function OnBoardingPrivateData(data: PostIFormData, accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/members/basic-inform`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
    body: JSON.stringify({
      memberName: data.memberName,
      contact: data.contact,
      marketingAgree: data.marketingAgree,
    }),
    credentials: 'include', // 쿠키를 포함시키기 위해 필요
  })
  return response
}

// 온보딩 개인정보 조회
export async function GetOnboardingPrivateData(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/members/basic-inform`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 내 온보딩 데이터 전체조회 - 내 이력서
export async function GetOnBoardingData(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/onBoarding`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 내 온보딩 - 팀빌딩 분야 생성,수정
export async function PostProfileTeamBuildingField(accessToken: string, selectedShortTermFields: string[]) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/team_building_field`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      teamBuildingFieldNames: selectedShortTermFields,
    }),
    credentials: 'include', // 쿠키를 포함시키기 위해 필요
  })

  return response
}

// 내 온보딩 - 활동지역 및 위치 생성
export async function PostProfileRegion(access_token: string, selectedArea: string, selectedSubArea: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/region`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    credentials: 'include',
    body: JSON.stringify({
      cityName: selectedArea,
      divisionName: selectedSubArea,
    }),
  })
}

// 내 온보딩 - 희망 역할, 보유 기술 생성
export async function PostRoleData(accessToken: string, jobRoleNames: string[], skillNames: string[]) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/job/skill`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify({
      jobRoleNames,
      skillNames,
    }),
  })
}

// 내 온보딩 - 학력 생성
export async function PostSchoolData(accessToken: string, educationList: Education) {
  const response = fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/education`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(educationList),
  })
  return response
}

// 내 온보딩 - 학력 단일 생성
export async function PostOneSchoolData(accessToken: string, education: OneSchoolFormInputs) {
  // education 단일 객체로 받기
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/education`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(education), // 단일 객체로 전달
  })
  return response
}
// 내 온보딩 - 학력 수정
export async function PutSchoolData(accessToken: string, education: OneSchoolFormInputs, educationId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/education/${educationId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(education), // 단일 객체로 전달
  })
}

// 내 온보딩 - 학력 삭제
export async function DeleteSchoolData(accessToken: string, educationId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/education/${educationId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 내 온보딩 - 경력 생성
export async function PostAntecedentData(accessToken: string, careerList: Career[]) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/antecedents`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(careerList),
  })
}

// 내 온보딩,이력서 - 경력 단일 생성
export async function PostOneAntecedentData(accessToken: string, antecedent: AntecedentFormInputs) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/antecedent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(antecedent), // 단일 객체로 전달
  })
}

// 내 온보딩,이력서 - 경력 삭제
export async function DeleteAntecedentData(accessToken: string, antecedentsId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/antecedents/${antecedentsId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 내 이력서 - 경력 수정
export async function PutAntecedentData(accessToken: string, antecedent: AntecedentFormInputs, antecedentsId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/antecedents/${antecedentsId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(antecedent), // 단일 객체로 전달
  })
}

// 내 온보딩 - 미니프로필 생성
export async function PostProfileData(accessToken: string, payload: any, profileImage: File | null) {
  const formData = new FormData()
  formData.append('miniProfileRequest', new Blob([JSON.stringify(payload)], { type: 'application/json' }))
  if (profileImage) {
    formData.append('miniProfileImage', profileImage)
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/mini-profile`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: formData,
  })
  return response
}

// 내 이력서 - 프로필 수정
export async function PutProfileData(accessToken: string, payload: any, profileImage: File | null) {
  const formData = new FormData()
  formData.append('miniProfileRequest', new Blob([JSON.stringify(payload)], { type: 'application/json' }))
  if (profileImage) {
    formData.append('miniProfileImage', profileImage)
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/mini-profile/update`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: formData,
  })
  return response
}

// 팀 온보딩 - 전체조회
export const TeamOnBoardingData = async (accessToken: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/onBoarding`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  const responseData = await response.json()
  return responseData
}

// 팀 온보딩 - 희망 팀빌딩 분야 생성,수정
export const TeamOnBoardingField = async (accessToken: string, data: TeamOnBoadingFieldFormInputs) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/team_building_field/basic_inform`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      teamName: data.teamName,
      sizeType: data.teamSize,
      sectorName: data.teamField,
      teamBuildingFieldNames: data.teamBuildingFieldNames,
    }),
    credentials: 'include',
  })

  return response
}

// 팀 온보딩 - 희망 팀빌딩 분야수정
export const UpdateTeamOnBoardingField = async (accessToken: string, data: updateTeamOnBoadingFieldFormInputs) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/update/onBoarding/team/mini-profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      teamName: data.teamName,
      sizeType: data.teamSize,
      sectorName: data.teamField,
      teamBuildingFieldNames: data.teamBuildingFieldNames,
    }),
    credentials: 'include',
  })

  return response
}

// 팀 온보딩 - 활동 방식 및 활동 지역 생성
export const TeamOnBoardingActivityWay = async (accessToken: string, data: TeamOnBoardingActivityWayFormInputs) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/activity`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      cityName: data.cityName,
      divisionName: data.divisionName,
      activityTagNames: data.activityTagNames,
    }),
    credentials: 'include',
  })

  return response
}

// 팀 온보딩 - 미니프로필 생성
export async function PostTeamProfile(
  accessToken: string,
  payload: ApiPayload,
  image?: File,
): Promise<PostTeamProfileResponse> {
  const formData = new FormData()
  formData.append('teamMiniProfileCreateRequest', new Blob([JSON.stringify(payload)], { type: 'application/json' }))
  if (image) {
    formData.append('teamMiniProfileImage', image)
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/mini-profile`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: formData,
  })

  return response
}

export async function PostTeamProfile2(
  accessToken: string,
  payload: ApiPayload,
  image?: File,
): Promise<PostTeamProfileResponse2> {
  const formData = new FormData()
  formData.append('teamMiniProfileCreateRequest', new Blob([JSON.stringify(payload)], { type: 'application/json' }))
  if (image) {
    formData.append('teamMiniProfileImage', image)
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/mini-profile`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Failed to create team mini profile')
  }

  const data = await response.json()

  // Ensure all properties are included in the return statement
  return {
    teamDetailInform: data.teamDetailInform,
    teamProfileTitle: data.teamProfileTitle,
    teamLogoImageUrl: data.teamLogoImageUrl,
    teamKeywordNames: data.teamKeywordNames,
    sectorName: data.sectorName,
    sizeType: data.sizeType,
    teamName: data.teamName,
    teamSize: data.teamSize,
    teamField: data.teamField,
    teamBuildingFieldNames: data.teamBuildingFieldNames,
  }
}

// 내 이력서 - 전체 조회
export async function GetMyResume(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 내 이력서 - 자기소개 생성
export async function PostProfileIntroduction(accessToken: string, introduction: string) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/introduction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ introduction }),
    credentials: 'include',
  })
}

// 내 이력서 - 수상내역 생성
export async function PostProfileAward(accessToken: string, data: AwardFormInputs) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/award`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data), // 배열을 직접 변환
    credentials: 'include',
  })
}

// 내 이력서 - 수상내역 수정
export async function PutProfileAward(accessToken: string, data: AwardFormInputs, awardsId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/award/${awardsId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
}

// 내 이력서 - 수상내역 삭제
export async function DeleteProfileAward(accessToken: string, awardsId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/awards/${awardsId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 내 이력서 - 첨부 URL POST
export async function PostProfileAttchURL(accessToken: string, data: URLFormInputs[]) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/attach/url`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data), // 배열을 직접 변환
    credentials: 'include',
  })
}

// 팀 소개서 - 전체 조회
export async function GetTeamResume(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 팀 이력서 - 희망 팀 빌딩 생성
export async function PostTeamBuildingField(accessToken: string, selectedShortTermFields: string[]) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/team_building_field`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      teamBuildingFieldNames: selectedShortTermFields,
    }),
    credentials: 'include', // 쿠키를 포함시키기 위해 필요
  })
  return response
}

// 팀 이력서 - 팀 소개 작성 생성
export async function PostTeamIntroduction(accessToken: string, teamIntroduction: string) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/introduction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ teamIntroduction }),
    credentials: 'include',
  })
}

// 팀 이력서 - 팀원 소개 작성 POST
export async function PostTeamMember(accessToken: string, data: TeamMemberData[]) {
  return await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })
}

// 팀이력서 - 팀원 소개 수정
export async function PutTeamMember(accessToken: string, data: TeamMemberData, teamMemberIntroductionId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/member/${teamMemberIntroductionId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
}

//팀 이력서 - 팀원 소개 삭제
export async function DeleteTeamMember(accessToken: string, teamMemberIntroductionId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/members/${teamMemberIntroductionId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 팀 이력서 - 팀원 공고 작성
export async function PostTeamMemberAnnouncement(accessToken: string, data: TeamAnnouncementMemberInterface) {
  return await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/member/announcement`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })
}

// 팀 이력서 - 팀원 공고 삭제
export async function DeleteTeamMemberAnnouncement(accessToken: string, teamMemberAnnouncementId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/members/announcements/${teamMemberAnnouncementId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 팀 이력서 - 팀원 공고 수정
export async function PutTeamMemberAnnouncement(
  accessToken: string,
  data: TeamAnnouncementMemberInterface,
  teamMemberAnnouncementId: number,
) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/member/announcement/${teamMemberAnnouncementId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(data),
  })
}

// 팀 이력서 - 팀 연혁 작성
export async function PostTeamHistory(accessToken: string, data: TeamHistoryDataSet) {
  return await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/history`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })
}

// 팀 이력서 - 팀 연혁 수정
export async function PutTeamHistory(accessToken: string, data: TeamHistoryDataSet, teamHistoryId: number) {
  return await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/history/${teamHistoryId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })
}

// 팀 이력서 - 팀 연혁 삭제
export async function DeleteTeamHistory(accessToken: string, teamHistoryId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/history/${teamHistoryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 팀 이력서 - 첨부 URL POST
export async function PostTeamAttchURL(accessToken: string, data: TeamURLFormInputs[]) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/attach/url`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data), // 배열을 직접 변환
    credentials: 'include',
  })
}

// 팀원 찾기
export async function GetTeamMembers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/search/private/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })

  return await response.json()
}

// 팀 찾기
export async function GetTeams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/search/team/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })

  return await response.json()
}

// 개인 프로필 조회
export async function GetPrivateData(accessToken: string, miniProfileId: number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/browse/private/profile/${miniProfileId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response
}

// 팀 프로필 조회
export async function GetTeamData(accessToken: string, teamMiniProfileId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/browse/team/profile/${teamMiniProfileId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    },
  )

  return await response
}

// 팀원 찾기 - 필터링
export async function GetTeamMembersFiltering(accessToken: string, url: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch filtered team members')
  }

  return await response.json()
}

// 팀 찾기 - 필터링
export async function GetTeamsFiltering(accessToken: string, url: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch filtered teams')
  }

  return await response.json()
}

// 매칭 관리 - 내가 받은 매칭
export async function GetMatchReceived(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/matching/received`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 매칭 관리 - 내가 받은 매칭 삭제
export async function DeleteMatchReceived(accessToken: string, privateMatchingId: number, type: string) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/delete/request/${type}/matching/${privateMatchingId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 매칭 관리 - 내가 보낸 매칭
export async function GetMatchSent(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/matching/request`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 매칭 관리 - 성사된 매칭
export async function GetMatchAccomplished(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/matching/success`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 매칭 관리 - 이력서 유무 판단
export async function GetResumeExist(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/existence/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 매칭 - 내 이력서 -> 내 이력서
export async function PostMatchRequest(accessToken: string, requestMessage: string, profileId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/profile/matching/private/${profileId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(requestMessage),
  })
}

// 매칭 - 팀 소개서 -> 내 이력서
export async function PostTeamMatchRequest(accessToken: string, requestMessage: string, profileId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/team/profile/matching/private/${profileId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(requestMessage),
  })
}

// 매칭 - 팀 이력서 -> 내 소개서
export async function PostTeamProfileMatchRequest(accessToken: string, requestMessage: string, teamProfileId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/private/profile/matching/team/${teamProfileId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
    body: JSON.stringify(requestMessage),
  })
}

// 매칭 수락/거절 received Team -false
export async function PostMatchResponse(accessToken: string, privateMatchingId: number, isAllowMatching: boolean) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/allow/private/matching/${privateMatchingId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ isAllowMatching }),
    credentials: 'include',
  })
}

// 매칭 수락/거절 received Team -true
export async function PostTeamMatchResponse(accessToken: string, teamMatchingId: number, isAllowMatching: boolean) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/allow/team/matching/${teamMatchingId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ isAllowMatching }),
    credentials: 'include',
  })
}

// 매칭 성사 - 연락하기 - 내 이력서인 경우
export async function PostMatchContact(accessToken: string, privateMatchingId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/success/private/matching/contact/${privateMatchingId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    },
  )
  return response.json()
}

// 매칭 성사 - 연락하기 - 팀 소개서인 경우
export async function PostTeamMatchContact(accessToken: string, teamMatchingId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/success/team/matching/contact/${teamMatchingId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    },
  )
  return response.json()
}

// 찜 - 개인 찜하기
export async function PostSaveMember(accessToken: string, miniProfileId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/wish/private/profile/${miniProfileId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 찜 - 개인 찜 취소
export async function DeleteSaveMember(accessToken: string, miniProfileId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/wish/private/profile/${miniProfileId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 찜 - 팀 찜하기
export async function PostSaveTeam(accessToken: string, teamMemberAnnouncementId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/wish/team/profile/${teamMemberAnnouncementId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 찜 - 팀 찜 취소
export async function DeleteSaveTeam(accessToken: string, teamMemberAnnouncementId: number) {
  return fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/wish/team/profile/${teamMemberAnnouncementId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })
}

// 찜한 내역 - 찜한 팀원 조회
export async function GetSavedMembers(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/wish/private/profile/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}

// 찜한 내역 - 찜한 팀 조회
export async function GetSavedTeams(accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_LINKIT_SERVER_URL}/wish/team/profile/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return await response.json()
}
