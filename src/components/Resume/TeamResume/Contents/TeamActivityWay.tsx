'use client'
import { PostProfileTeamBuildingField, PostTeamBuildingField } from '@/lib/action'
import { addressData } from '@/lib/addressSelectData'
import { TeamProfileTeamBuildingFieldResponse } from '@/lib/types'

import { useState, useEffect, ChangeEvent } from 'react'

interface TeamResumTeamBuildingProps {
  data: TeamProfileTeamBuildingFieldResponse
}

export default function TeamActivityWay() {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [options, setOptions] = useState(['오피스 있음', '주 1회 회의', '비대면 활동', '활동방식', '활동방식'])
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = async () => {
    const accessToken = localStorage.getItem('accessToken') || ''
    const response = await PostTeamBuildingField(accessToken, selectedOptions)
    if (response.ok) {
      alert('수정이 완료되었습니다.')
      setIsEditing(false)
    }
  }

  const handleOptionClick = (option: string) => {
    setSelectedOptions([...selectedOptions, option])
    setOptions(options.filter((opt) => opt !== option))
  }

  const handleRemoveOption = (optionToRemove: string) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== optionToRemove))
    setOptions([...options, optionToRemove])
  }

  // 지역
  const getDistricts = () => {
    const city = addressData.find((c) => c.name === selectedCity)
    return city ? city.subArea : []
  }

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
    setSelectedDistrict('')
  }

  const handleDistrictChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(event.target.value)
  }

  return (
    <div className="w-full rounded-2xl bg-[#fff] px-[2.06rem] py-[1.38rem] shadow-resume-box-shadow">
      {/* title */}
      <div className="flex items-center gap-[0.56rem]">
        <span className="text-lg font-semibold text-grey100">희망 팀빌딩 분야</span>
        {isEditing && <span className="text-sm text-[#2563EB]">Tip : 현재 팀의 활동 방식에 대해 소개해주세요!</span>}
      </div>

      {/* contents */}
      {isEditing ? (
        <div className="flex flex-col gap-[0.88rem]">
          <div className="flex flex-wrap gap-2 pt-5">
            {selectedOptions?.map((option, index) => (
              <div
                key={index}
                onClick={() => handleRemoveOption(option)}
                className="flex cursor-pointer items-center rounded-lg border border-[#2563Eb] bg-[#D3E1FE] bg-opacity-40 px-3 py-1"
              >
                <span className="text-[#2563EB]">{option}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemoveOption(option)
                  }}
                  className="ml-2 text-[#2563EB]"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="border-t border-grey40 pt-2">
            <span className="text-sm font-normal text-grey100">희망 팀빌딩 분야를 선택해주세요</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="bg-gray-200 rounded border border-grey40 px-4 py-2 text-grey60"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <p className="pb-3 pt-8 text-lg font-semibold">활동 지역/위치</p>
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              <label className=" font-semibold text-grey100">시/도</label>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="select-with-padding-right rounded border border-grey40 p-3 font-medium text-grey60"
              >
                <option value="">시/도를 선택해주세요</option>
                {addressData.map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className=" font-semibold text-grey100">시/군/구</label>
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="select-with-padding-right rounded border border-grey40 p-3 font-medium text-grey60"
              >
                <option value="">시/군/구를 선택해주세요</option>
                {getDistricts().map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 pt-[1.56rem]">
          {selectedOptions?.map((option, index) => (
            <div key={index} className="flex items-center rounded-lg border border-grey40 px-3 py-1">
              <span className="text-grey60">{option}</span>
            </div>
          ))}
        </div>
      )}

      {/* button */}
      <div className="mt-[0.94rem] flex w-full justify-end">
        {isEditing ? (
          <button onClick={handleSaveClick} className="h-10 rounded bg-[#2563EB] px-4 text-sm text-[#fff]">
            수정완료
          </button>
        ) : (
          <button onClick={handleEditClick} className="h-10 rounded bg-[#2563EB] px-4 text-sm text-[#fff]">
            수정하기
          </button>
        )}
      </div>
    </div>
  )
}