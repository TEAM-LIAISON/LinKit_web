'use client'
import { useProfile } from '@/entities/profile/model/ProfileContext'
import { EditableContainer } from './common/EditableContainer'
import Image from 'next/image'
import { useState } from 'react'

export default function ProfileViewEducation() {
  const { profileData } = useProfile()
  const isMyProfile = profileData?.isMyProfile

  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({})

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <EditableContainer
      isEditable={isMyProfile}
      editPath="/profile/edit/education"
      className="flex w-[95%] flex-col gap-5 rounded-xl bg-white px-[2.75rem] py-[1.88rem]"
    >
      <h1 className="font-semibold">학력</h1>

      {/* 학력 항목 */}
      <div className="flex flex-col gap-5">
        {profileData?.profileEducationItems.map((education) => (
          <div key={education.profileEducationId} className="flex gap-3 rounded-lg bg-grey10 px-6 py-4">
            {/* 이미지 */}
            <Image
              src={`/common/icons/universityLogo/${education.universityName}.svg`}
              alt="university"
              width={40}
              height={40}
            />
            {/* 학교 정보 */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-grey80">{education.universityName}</h1>
                {education.isEducationVerified && (
                  <Image src="/common/cert_badge.svg" alt="certed" width={16} height={16} />
                )}
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm">{education.majorName}</p>{' '}
                <p className="text-xs font-normal text-grey60">
                  | {education.admissionYear} ~ {education.graduationYear ? education.graduationYear : '재학중'}
                </p>
              </div>

              {/* 설명 */}
              <div className="text-xs text-grey70">
                {education.educationDescription ? (
                  education.educationDescription.length > 50 ? (
                    <>
                      {expandedItems[education.educationDescription]
                        ? education.educationDescription
                        : `${education.educationDescription.slice(0, 50)}...`}
                      <button
                        onClick={() => toggleExpand(education.educationDescription.toString())}
                        className="ml-1 text-blue-500 hover:underline"
                      >
                        {expandedItems[education.educationDescription] ? '접기' : '더보기'}
                      </button>
                    </>
                  ) : (
                    education.educationDescription
                  )
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </EditableContainer>
  )
}