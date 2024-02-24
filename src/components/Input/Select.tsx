import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectOptionsType } from "@/lib/types"

export function SelectSorting({
    options,
    defaultValue,
    onChange,
    isDisabled = false,
} : {
    options: SelectOptionsType[],
    defaultValue: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    isDisabled?: boolean,
}) {

  return (
    <div className="inline-block relative w-48">
      {/* <Select
        defaultValue={defaultValue}
        onValueChange={onChange}
        disabled={isDisabled}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Algorithm" />
        </SelectTrigger>
          <SelectContent >
        {options.map((option, index) => (
          <SelectGroup key={option.value}>
              <SelectItem value={option.value}>{option.label}</SelectItem>
            </SelectGroup>
        ))}
          </SelectContent>
      </Select> */}

      <select
        className="w-[180px] h-[40px] rounded-md bg-slate-100 dark:bg-slate-700 dark:text-slate-50 text-gray-900 pl-2 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
        value={defaultValue}
        onChange={onChange}
        disabled={isDisabled}
      >
        {options.map((option, index) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

    </div>
  )
}
