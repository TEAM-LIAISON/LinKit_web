// Select.tsx
import { useState, useEffect, useRef, forwardRef, SelectHTMLAttributes, ChangeEvent } from 'react'
import Image from 'next/image'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  name: string
  options: { value: string; label: string }[]
  className?: string
  openImage?: string
  closeImage?: string
  selectedValue?: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, options, className, openImage, closeImage, selectedValue, onChange, ...rest }, ref) => {
    const [currentValue, setCurrentValue] = useState<string>(selectedValue || options[0]?.value || '')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (selectedValue !== undefined) {
        setCurrentValue(selectedValue)
      }
    }, [selectedValue])

    const handleOptionClick = (value: string) => {
      setCurrentValue(value)
      setIsOpen(false)
      if (typeof ref === 'function') {
        ref({ current: { value } } as unknown as HTMLSelectElement)
      } else if (ref && 'current' in ref) {
        ;(ref.current as HTMLSelectElement).value = value
      }
      onChange?.({ target: { value } } as ChangeEvent<HTMLSelectElement>)
    }

    const handleDocumentClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleDocumentClick)
      return () => {
        document.removeEventListener('click', handleDocumentClick)
      }
    }, [])

    return (
      <div className="relative flex flex-col justify-end" ref={containerRef}>
        {label && (
          <label htmlFor={name} className="text-sm font-normal text-grey90">
            {label}
          </label>
        )}
        <div
          className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded border border-grey40 bg-white px-4 py-3 text-sm outline-none ${className}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {options.find((option) => option.value === currentValue)?.label || '선택'}
          <span className="float-right">
            <Image
              src={
                isOpen
                  ? openImage || '/assets/icons/select_toggle.svg'
                  : closeImage || '/assets/icons/select_toggle.svg'
              }
              width={10}
              height={8}
              alt="toggle icon"
            />
          </span>
        </div>
        {isOpen && (
          <div className="absolute top-11 z-10 mt-1 max-h-60 w-full overflow-y-auto rounded border border-grey40 bg-white shadow-lg">
            {options.map((option) => (
              <div
                key={option.value}
                className="flex cursor-pointer px-6 py-2 text-center text-sm hover:bg-grey10"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        <select id={name} name={name} ref={ref} className="hidden" value={currentValue} {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  },
)

Select.displayName = 'SelectComponent'

export default Select