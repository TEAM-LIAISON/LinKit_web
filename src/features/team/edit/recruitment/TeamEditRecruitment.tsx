'use client'

import { useState } from 'react'

import { usePositionSelect } from '@/shared/hooks/usePositionSelect'
import Input from '@/shared/ui/Input/Input'
import { SearchDropdown } from '@/shared/ui/SearchDropdown/SearchDropdown'
import Select from '@/shared/ui/Select/Select'
import { toolsData } from '@/shared/data/tools'

import { useDateRange } from '@/shared/hooks/useDateRange'
import DateRange from '@/shared/ui/Input/DateRange'
import Textarea from '@/shared/ui/TextArea/TextArea'
import { Button } from '@/shared/ui/Button/Button'
import Image from 'next/image'

export default function TeamEditRecruitment() {
  const {
    selectedCategory,
    selectedSubCategory,
    mainPositionOptions,
    subPositionOptions,
    setSelectedCategory,
    setSelectedSubCategory,
  } = usePositionSelect()

  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const { startDate, endDate, setStartDate, setEndDate } = useDateRange()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleAddSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setSelectedSkills(selectedSkills.filter((skill) => skill !== skillToRemove))
  }

  return (
    <>
      <div className="mt-5 flex flex-col gap-10 rounded-xl bg-white px-[2.88rem] py-10">
        {/* 공고 제목 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-grey80">
              공고 제목<span className="placeholder:-1 text-main">*</span>
            </span>
            <span className="text-xs text-grey50">
              <span className="pr-1 text-main">*</span>은 필수항목입니다
            </span>
          </div>
          <Input placeholder="어떤 포지션 공고인지, 어떤 팀인지 간단하게 적어주세요" />
        </div>

        {/* 찾는 포지션 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-grey80">
              찾는 포지션<span className="pl-1 text-main">*</span>
            </span>
          </div>
          <div className="flex w-full gap-[1.38rem]">
            <div className="flex w-[48%] flex-col gap-2">
              <span className="text-sm text-grey70">대분류</span>
              <Select
                options={mainPositionOptions}
                value={selectedCategory}
                placeholder="대분류 선택"
                onChange={setSelectedCategory}
              />
            </div>

            <div className="flex w-[48%] flex-col gap-2">
              <span className="text-sm text-grey70">소분류</span>
              <Select
                options={subPositionOptions}
                value={selectedSubCategory}
                placeholder={selectedCategory ? '소분류 선택' : '대분류를 먼저 선택해주세요'}
                onChange={setSelectedSubCategory}
                disabled={!selectedCategory}
              />
            </div>
          </div>
        </div>

        {/* 요구 스킬 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-grey80">
              요구 스킬<span className="placeholder:-1 text-main">*</span>
            </span>
          </div>
          <div className="flex flex-col gap-5">
            {/* 선택된 스킬 표시 */}
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-lg border border-[#7EA5F8] bg-[#EDF3FF] px-4 py-2 text-main"
                >
                  <span>{skill}</span>
                  <button onClick={() => handleRemoveSkill(skill)} className="text-grey60 hover:text-grey80">
                    ×
                  </button>
                </div>
              ))}
              {selectedSkills.length === 0 && (
                <div className="text-xs text-grey60">필요한 기술 스택을 검색하여 추가해주세요</div>
              )}
            </div>
            <SearchDropdown
              items={toolsData.tools}
              filterFunction={(tool, searchTerm) => tool.toLowerCase().includes(searchTerm.toLowerCase())}
              onSelect={handleAddSkill}
              placeholder="스킬을 영어로 검색해보세요"
            />
          </div>
        </div>
        {/* 모집기간 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-grey80">
              모집 기간<span className="pl-1 text-main">*</span>
            </span>
          </div>
          <DateRange
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />
        </div>

        <hr />

        {/* 세부 공고 작성 */}

        {/* 중요 업무 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-grey80">
              중요 업무<span className="placeholder:-1 text-main">*</span>
            </span>
          </div>
          <Textarea placeholder="새로 합류할 팀원이 할 업무에 대해 자세히 적어 주세요" />
        </div>

        {/* 업무 방식 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-grey80">
              업무 방식<span className="placeholder:-1 text-main">*</span>
            </span>
          </div>
          <Textarea placeholder="팀의 업무 방식에 대해 설명해 주세요" />
        </div>

        {/* 이런 분을 찾고 있어요 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-grey80">
              업무 방식<span className="placeholder:-1 text-main">*</span>
            </span>
          </div>
          <Textarea placeholder="새로 합류할 팀원이 필수적으로 갖추어야 할 역에 대해 알려 주세요" />
        </div>

        {/* 확장/축소 버튼 */}
        <div className="flex w-full justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 rounded-full border border-grey30 bg-[#EDF3FF] px-6 py-3 text-sm text-grey80 hover:bg-[#bfd4ff]"
          >
            <Image
              src={isExpanded ? '/common/icons/arrow-top.svg' : '/common/icons/arrow-bottom.svg'}
              alt={isExpanded ? '접기' : '펼치기'}
              width={32}
              height={32}
            />
            {isExpanded ? '지금은 필수 항목만 작성하기' : '더 작성하고 매칭 확률 높이기'}
          </button>
        </div>

        {/* 추가되는 폼들 (조건부 렌더링) */}
        {isExpanded && (
          <>
            {/* 우대사항 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-grey80">우대사항</span>
              </div>
              <Textarea placeholder="있다면 우대하는 경력이나 경험에 대해 알려주세요" />
            </div>

            {/* 복지 및 혜택 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-grey80">복지 및 혜택</span>
              </div>
              <Textarea placeholder="팀원들을 위해 제공하는 복지와 혜택을 알려주세요" />
            </div>

            {/* 기타 유의사항 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-grey80">기타 유의사항</span>
              </div>
              <Textarea placeholder="지원자들이 알아야 할 다른 사항이 있다면 알려주세요" />
            </div>
          </>
        )}
      </div>
      <div className="mt-5 flex justify-end">
        <Button mode="main" animationMode="main" className="rounded-xl font-semibold">
          저장하기
        </Button>
      </div>
    </>
  )
}