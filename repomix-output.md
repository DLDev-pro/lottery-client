This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.github/
  workflows/
    deploy.yml
src/
  apis/
    agency.ts
    auth.ts
    bet.ts
    global.ts
    index.ts
    setting.ts
  assets/
    react.svg
  components/
    bet/
      BetDetail.tsx
      LotteryResult.tsx
    common/
      Calender.tsx
      Loading.tsx
      SlideBar.tsx
    customer/
      FormCustomer.tsx
      FormInput.tsx
    radio/
      RadioDetail.tsx
    ui/
      aspect-ratio.tsx
      avatar.tsx
      button.tsx
      calendar.tsx
      card.tsx
      chart.tsx
      checkbox.tsx
      collapsible.tsx
      data-table.tsx
      datepicker.tsx
      form.tsx
      input.tsx
      label.tsx
      pagination.tsx
      popover.tsx
      select.tsx
      sheet.tsx
      table.tsx
      tabs.tsx
      toast.tsx
      toaster.tsx
      use-toast.ts
  configs/
    apiCall.ts
  contexts/
    AgencyContext.tsx
    BetContext.tsx
    DateContext.tsx
    GlobalContext.tsx
    RegionContext.tsx
    SettingContext.tsx
  lib/
    utils.ts
  pages/
    Analysis.tsx
    BetDetail.tsx
    Customer.tsx
    Home.tsx
    Login.tsx
    NotFound.tsx
    Radio.tsx
    Result.tsx
    ResultCustomer.tsx
    ResultLottery.tsx
    Setting.tsx
    SettingNumber.tsx
    TypeLottery.tsx
  types/
    response.ts
  utils/
    validation/
      auth/
        index.ts
        login.validation.ts
        register.validation.ts
      bet.ts
    auth.ts
    constants.ts
    data.ts
    helper.ts
    interface.ts
    string.ts
    types.ts
  App.tsx
  index.css
  main.tsx
  router.tsx
  vite-env.d.ts
.eslintrc.cjs
.gitignore
components.json
index.html
package.json
postcss.config.js
README.md
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: src/apis/agency.ts
```typescript
import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'

const PATH = `${API_URL}/api/agency`
//crud

const GetAgencies = async () => {
  const response = await apiCaller('GET', PATH)

  return response
}

const GetAgency = async (id: string) => {
  const response = await apiCaller('GET', `${PATH}/${id}`)

  return response
}

const CreateAgency = async (data: unknown) => {
  const response = await apiCaller('POST', PATH, data)

  return response
}

const UpdateAgency = async (id: string, data: unknown) => {
  const response = await apiCaller('PUT', `${PATH}/${id}`, data)

  return response
}

const DeleteAgency = async (id: string) => {
  const response = await apiCaller('DELETE', `${PATH}/${id}`)

  return response
}

export { GetAgencies, GetAgency, CreateAgency, UpdateAgency, DeleteAgency }
```

## File: src/apis/auth.ts
```typescript
import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'
import { ICreateUser } from '@/utils/interface'

const PATH = `${API_URL}/api/auth`

const Login = async (username: string, password: string) => {
  const path = `${PATH}/login`
  const response = await apiCaller('POST', path, { username, password })

  return response
}

const Register = async (data: ICreateUser) => {
  const path = `${PATH}/register`
  const response = await apiCaller('POST', path, data)

  return response
}

const UpdatePassword = async (data: unknown) => {
  const path = `${PATH}/update-password`
  const response = await apiCaller('PUT', path, data)

  return response
}

export { Login, Register, UpdatePassword }
```

## File: src/apis/bet.ts
```typescript
import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'
import { IFilter } from '@/utils/types'

const PATH = `${API_URL}/api/bet`

const GetBets = async (filter: IFilter) => {
  let path = `${PATH}`
  if (filter.open_date) {
    path += `?open_date=${filter.open_date}`
  }
  if (filter.region_unique_key) {
    path += `&region_unique_key=${filter.region_unique_key}`
  }
  if (filter.agency_id) {
    path += `&agency_id=${filter.agency_id}`
  }

  const response = await apiCaller('GET', path)

  return response
}

const CreateBet = async (data: unknown) => {
  const response = await apiCaller('POST', PATH, data)

  return response
}

export { GetBets, CreateBet }
```

## File: src/apis/index.ts
```typescript
export * as authApi from './auth'
export * as betApi from './bet'
export * as agencyApi from './agency'
export * as globalApi from './global'
export * as settingApi from './setting'
```

## File: src/apis/setting.ts
```typescript
import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'

const PATH = `${API_URL}/api/setting/`

const GetProvinceAcronym = async () => {
  const response = await apiCaller('GET', `${PATH}province-acronym`)

  return response
}

const UpdateProvinceAcronym = async (data: unknown) => {
  const response = await apiCaller('PUT', `${PATH}province-acronym`, data)

  return response
}

const GetRuleAcronym = async () => {
  const response = await apiCaller('GET', `${PATH}rule-acronym`)

  return response
}

const UpdateRuleAcronym = async (data: unknown) => {
  const response = await apiCaller('PUT', `${PATH}rule-acronym`, data)

  return response
}

export {
  GetProvinceAcronym,
  UpdateProvinceAcronym,
  GetRuleAcronym,
  UpdateRuleAcronym,
}
```

## File: src/assets/react.svg
```
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

## File: src/components/bet/LotteryResult.tsx
```typescript
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'
// import { DateContext } from '@/contexts/DateContext'
// import { DateContextType } from '@/utils/types'
// import { useContext } from 'react'
// const rewards = [
//   'Giải tám',
//   'Giải bảy',
//   'Giải sáu',
//   'Giải năm',
//   'Giải tư',
//   'Giải ba',
//   'Giải nhì',
//   'Giải nhất',
//   'Đặc biệt',
// ]
// const LotteryResult = () => {
//   const { date } = useContext(DateContext) as DateContextType

//   const datas = [
//     {
//       province: 'Đồng Nai',
//       special: '044977',
//       first: '53257',
//       second: ['56168'],
//       third: ['82634', '35362'],
//       fourth: ['82987', '79000', '48310', '07254', '81856', '73914', '83594'],
//       fifth: '1904',
//       sixth: ['6756', '6745', '3307'],
//       seventh: ['757'],
//       eighth: ['59'],
//     },
//     {
//       province: 'Cần Thơ',
//       special: '978077',
//       first: '86851',
//       second: ['66516'],
//       third: ['31204', '88865'],
//       fourth: ['98592', '20732', '47741', '93273', '84596', '94895', '37808'],
//       fifth: '6895',
//       sixth: ['8628', '7998', '9632'],
//       seventh: ['861'],
//       eighth: ['25'],
//     },
//     {
//       province: 'Sóc Trăng',
//       special: '743586',
//       first: '00135',
//       second: ['04611'],
//       third: ['51223', '07596'],
//       fourth: ['08050', '25823', '08199', '97984', '99805', '38476', '78141'],
//       fifth: '0837',
//       sixth: ['2906', '8878', '7676'],
//       seventh: ['126'],
//       eighth: ['17'],
//     },
//     {
//       province: 'Sóc Trăng',
//       special: '743586',
//       first: '00135',
//       second: ['04611'],
//       third: ['51223', '07596'],
//       fourth: ['08050', '25823', '08199', '97984', '99805', '38476', '78141'],
//       fifth: '0837',
//       sixth: ['2906', '8878', '7676'],
//       seventh: ['126'],
//       eighth: ['17'],
//     },
//   ]

//   const numGrid = datas.length % 2 === 0 ? 'grid-cols-2' : 'grid-cols-3'

//   return (
//     <div>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className='w-10 text-black border font-bold text-center'>
//               {date.toLocaleDateString()}
//             </TableHead>
//             {datas.map((data) => {
//               return (
//                 <TableHead className='text-black border font-bold text-center'>
//                   {data.province}
//                 </TableHead>
//               )
//             })}
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {Array.from({ length: 9 }).map((_, index) => {
//             const reward = datas.map((data) => {
//               switch (index) {
//                 case 0:
//                   return data.eighth
//                 case 1:
//                   return data.seventh
//                 case 2:
//                   return data.sixth
//                 case 3:
//                   return data.fifth
//                 case 4:
//                   return data.fourth
//                 case 5:
//                   return data.third
//                 case 6:
//                   return data.second
//                 case 7:
//                   return data.first
//                 case 8:
//                   return data.special
//                 default:
//                   return []
//               }
//             })

//             return (
//               <TableRow key={index}>
//                 <TableCell className='text-center border p-0'>
//                   {rewards[index]}
//                 </TableCell>
//                 {reward.map((value) => {
//                   return (
//                     <TableCell
//                       className={`text-lg p-0 text-center border font-bold
//                   ${index === 0 || index === 8 ? 'text-[#B22222]' : ''}
//                   `}
//                     >
//                       {Array.isArray(value)
//                         ? value.map((val) => <p>{val}</p>)
//                         : value}
//                     </TableCell>
//                   )
//                 })}
//               </TableRow>
//             )
//           })}
//         </TableBody>
//       </Table>
//       <div className={`grid ${numGrid}`}>
//         {datas.map((data) => {
//           return (
//             <div className='border'>
//               <h1 className='font-bold text-center text-lg'>{data.province}</h1>
//               <div className=''>
//                 {Array.from({ length: 10 }).map((_, index) => {
//                   return (
//                     <div className='grid grid-cols-[4fr_2fr_4fr] text-xs'>
//                       <div className='text-center border py-0.5 border-white bg-[#bfaeae]'>
//                         1
//                       </div>
//                       <div className='text-center border py-0.5 border-white text-[#999]'>
//                         {index}
//                       </div>
//                       <div className='text-center border py-0.5 border-white bg-[#9f9f9f]'>
//                         4
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default LotteryResult
```

## File: src/components/common/Loading.tsx
```typescript
const Loading = () => {
  return (
    <div className='group-loading'>
      <div className='sk-cube-grid'>
        <div className='sk-cube sk-cube1'></div>
        <div className='sk-cube sk-cube2'></div>
        <div className='sk-cube sk-cube3'></div>
        <div className='sk-cube sk-cube4'></div>
        <div className='sk-cube sk-cube5'></div>
        <div className='sk-cube sk-cube6'></div>
        <div className='sk-cube sk-cube7'></div>
        <div className='sk-cube sk-cube8'></div>
        <div className='sk-cube sk-cube9'></div>
      </div>
    </div>
  )
}

export default Loading
```

## File: src/components/radio/RadioDetail.tsx
```typescript
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { IProvince } from '@/utils/interface'
import { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { FormSubmit } from '@/utils/types'
import { settingApi } from '@/apis'
import { useToast } from '../ui/use-toast'
import { Input } from '../ui/input'

interface RadioDetailProps {
  provinces: IProvince[]
  region: string
}

const RadioDetail = ({ provinces, region }: RadioDetailProps) => {
  const [province, setProvince] = useState<IProvince | null>(null)
  const { toast } = useToast()

  const ModalUpdate = () => {
    const [acronym, setAcronym] = useState<string>(province?.acronym ?? '')
    const handleUpdate = async (e: FormSubmit) => {
      e.preventDefault()
      try {
        const dataUpdate = [
          {
            acronym,
            province_id: province?.province_id,
          },
        ]

        const response = await settingApi.UpdateProvinceAcronym(dataUpdate)

        if (response) {
          const { status } = response
          if (status === 200) {
            toast({
              variant: 'success',
              title: 'Cập nhật thành công',
            })
            setProvince(null)
          } else {
            toast({
              variant: 'destructive',
              title: 'Cập nhật không thành công',
            })
          }
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Cập nhật không thành công',
        })
      }
    }
    return (
      <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-2 rounded bg-white p-4"
        >
          <h1>Modal Update</h1>
          <Input
            type="text"
            readOnly
            disabled
            value={province?.province_name}
          />

          <Input
            type="text"
            value={acronym}
            onChange={(e) => {
              setAcronym(e.target.value)
            }}
          />
          <div>
            <Button className="mr-2 bg-main text-white px-2 h-fit rounded-lg">
              Cập nhật
            </Button>
            <Button
              type="button"
              className="text-white px-2 h-fit rounded-lg"
              onClick={() => {
                setProvince(null)
              }}
            >
              Đóng
            </Button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      {province && <ModalUpdate />}
      <h1 className="bg-orange-400">{region}</h1>
      <Table>
        <TableBody>
          {provinces.map((data, index) => {
            return (
              <TableRow key={data.province_id}>
                <TableCell className="w-10 text-black border text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-10 text-black border text-center">
                  {data.acronym}
                </TableCell>
                <TableCell className="text-black border text-left">
                  {data.province_name}
                </TableCell>

                <TableCell
                  className="w-10 text-black border text-center cursor-pointer"
                  onClick={() => {
                    setProvince(data)
                  }}
                >
                  <FaRegEdit />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default RadioDetail
```

## File: src/components/ui/aspect-ratio.tsx
```typescript
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }
```

## File: src/components/ui/avatar.tsx
```typescript
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
```

## File: src/components/ui/button.tsx
```typescript
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'border border-input bg-background',
        secondary: 'bg-secondary text-secondary-foreground',
        ghost: '',
        link: 'text-primary underline-offset-4',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
```

## File: src/components/ui/calendar.tsx
```typescript
import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className='h-4 w-4' />,
        IconRight: () => <ChevronRight className='h-4 w-4' />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
```

## File: src/components/ui/card.tsx
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## File: src/components/ui/chart.tsx
```typescript
import * as React from "react"
import * as RechartsPrimitive from "recharts"
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
```

## File: src/components/ui/checkbox.tsx
```typescript
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
```

## File: src/components/ui/collapsible.tsx
```typescript
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
```

## File: src/components/ui/data-table.tsx
```typescript
'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import * as React from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import {
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { IUser } from '@/utils/interface'
import { parseDateString } from '@/utils/string'

export function DataTableUser({
  users,
  setSelectedUsers,
}: {
  users: IUser[]
  setSelectedUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}) {
  const columns: ColumnDef<IUser>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            handleRowClick(row.getValue('id'))
            row.toggleSelected(!!value)
          }}
          aria-label='Select row'
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'id',
      header: () => <div className='ml-20 w-20'>ID</div>,
      cell: ({ row }) => <div className='ml-20 w-20'>{row.getValue('id')}</div>,
    },
    {
      accessorKey: 'node_id',
      header: () => <div className='mx-10'>Node Id</div>,
      cell: ({ row }) => <div className='mx-10'>{row.getValue('node_id')}</div>,
    },
    {
      accessorKey: 'email',
      header: () => <div className='mx-10'>Email</div>,

      cell: ({ row }) => (
        <div className='lowercase'>
          {row.getValue('email') ? row.getValue('email') : 'Not updated yet'}
        </div>
      ),
    },
    {
      accessorKey: 'created_at',
      header: 'Created At',
      cell: ({ row }) => (
        <div>{parseDateString(row.getValue('created_at'))}</div>
      ),
    },
  ]
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  })

  const handleRowClick = (id: string) => {
    setSelectedUsers((prev) => {
      const user = users.find((u) => u.id === id)
      if (user) {
        if (prev.some((selectedUser) => selectedUser.id === id)) {
          return prev.filter((selectedUser) => selectedUser.id !== id)
        } else {
          return [...prev, user]
        }
      }
      return prev
    })
  }
  const handleSelectAll = (value: boolean) => {
    if (value) {
      setSelectedUsers(users)
    } else {
      setSelectedUsers([])
    }
    table.toggleAllPageRowsSelected(value)
  }

  return (
    <div className='w-full'>
      <div className='rounded-md border mr-4'>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                if (header.id === 'select') {
                  return (
                    <TableHead key={header.id}>
                      <Checkbox
                        checked={
                          table.getIsAllPageRowsSelected() ||
                          (table.getIsSomePageRowsSelected() && 'indeterminate')
                        }
                        onCheckedChange={(value) => handleSelectAll(!!value)}
                        aria-label='Select all'
                      />
                    </TableHead>
                  )
                }
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        {table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && 'selected'}
            className='cursor-pointer'
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </div>
    </div>
  )
}
```

## File: src/components/ui/datepicker.tsx
```typescript
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function DatePicker({
  date,
  setDate,
  content,
  cln,
  err,
}: {
  date: Date
  setDate: (date: Date) => void
  content: string
  cln: boolean
  err: boolean
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={cln}
          variant='outline'
          className={cn(
            'justify-between text-left font-normal',
            !date && 'text-muted-foreground',
            cln && 'bg-[#b3b3b3] opacity-20 border-none cursor-not-allowed',
            err && 'border-red-500',
          )}
        >
          {date ? format(date, 'PPP') : <span>{content}</span>}
          <CalendarIcon className='mr-2 h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0 bg-white'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={(date) => setDate(date!)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
```

## File: src/components/ui/form.tsx
```typescript
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
```

## File: src/components/ui/input.tsx
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

## File: src/components/ui/label.tsx
```typescript
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

## File: src/components/ui/pagination.tsx
```typescript
import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeftIcon className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
```

## File: src/components/ui/popover.tsx
```typescript
import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
```

## File: src/components/ui/select.tsx
```typescript
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
```

## File: src/components/ui/sheet.tsx
```typescript
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
```

## File: src/components/ui/table.tsx
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

## File: src/components/ui/tabs.tsx
```typescript
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## File: src/components/ui/toast.tsx
```typescript
import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-neutral-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-neutral-800',
  {
    variants: {
      variant: {
        default:
          'border bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50',
        destructive:
          'destructive group border-red-500 bg-red-500 text-neutral-50 dark:border-red-900 dark:bg-red-900 dark:text-neutral-50',
        success: 'success group border-green-500 bg-green-500 text-neutral-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-neutral-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-neutral-50 group-[.destructive]:focus:ring-red-500 group-[.success]:border-neutral-100/40 group-[.success]:hover:border-green-500/30 group-[.success]:hover:bg-white group-[.success]:hover:text-green-500 group-[.success]:focus:ring-green-500',
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-neutral-950/50 opacity-0 transition-opacity hover:text-neutral-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-neutral-50/50 dark:hover:text-neutral-50 group-[.success]:text-white group-[.success]:hover:text-white group-[.success]:focus:ring-white group-[.success]:focus:ring-offset-white ',
      className,
    )}
    toast-close=''
    {...props}
  >
    <X className='h-4 w-4' />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```

## File: src/components/ui/toaster.tsx
```typescript
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

## File: src/components/ui/use-toast.ts
```typescript
// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
```

## File: src/contexts/BetContext.tsx
```typescript
import {
  IBet,
  IBetResultDetail,
  IBetResultDetailInner,
} from '@/utils/interface'
import { BetContextType } from '@/utils/types'
import React, { ReactNode, useState } from 'react'

interface BetProviderProps {
  children: ReactNode
}

export const BetContext = React.createContext<BetContextType | undefined>(
  undefined
)

const BetProvider: React.FC<BetProviderProps> = ({ children }) => {
  const [bet, setBet] = useState<IBetResultDetailInner | null>(null)

  const updateBet = (bet: IBetResultDetailInner) => {
    setBet(bet)
  }

  return (
    <BetContext.Provider value={{ bet, updateBet }}>
      {children}
    </BetContext.Provider>
  )
}

export default BetProvider
```

## File: src/contexts/RegionContext.tsx
```typescript
import { PATHS } from '@/utils/constants'
import { RegionContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface RegionProviderProps {
  children: ReactNode
}

export const RegionContext = React.createContext<RegionContextType | undefined>(
  undefined
)

const RegionProvider: React.FC<RegionProviderProps> = ({ children }) => {
  const [region, setRegion] = useState('south')

  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === PATHS.MIEN_BAC) {
      setRegion('north')
    } else if (pathname === PATHS.MIEN_TRUNG) {
      setRegion('central')
    } else if (pathname === PATHS.MIEN_NAM) {
      setRegion('south')
    }
  }, [pathname])
  return (
    <RegionContext.Provider value={{ region }}>
      {children}
    </RegionContext.Provider>
  )
}

export default RegionProvider
```

## File: src/lib/utils.ts
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## File: src/pages/Analysis.tsx
```typescript
import { useState } from 'react'

const Analysis = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  return (
    <div>
      <h1 className='font-bold text-xs'>
        Tổng kết từ ngày {startDate.toLocaleDateString()} đến ngày{' '}
        {endDate.toLocaleDateString()}
      </h1>

      <form action=''>
        <div className='flex gap-2'>
          <label htmlFor='start'>Từ ngày</label>
          <input
            type='date'
            id='start'
            name='start'
            value={startDate.toISOString().split('T')[0]}
            onChange={(e) => setStartDate(new Date(e.target.value))}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='end'>Đến ngày</label>
          <input
            type='date'
            id='end'
            name='end'
            value={endDate.toISOString().split('T')[0]}
            onChange={(e) => setEndDate(new Date(e.target.value))}
          />
        </div>
        <button type='submit'>Tìm kiếm</button>
      </form>
    </div>
  )
}

export default Analysis
```

## File: src/pages/NotFound.tsx
```typescript
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      <div className='w-full space-y-6 text-center'>
        <div className='space-y-3'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce'>
            404
          </h1>
          <p className='text-gray-500'>
            Looks like you've ventured into the unknown digital realm.
          </p>
        </div>
        <Link
          to='/'
          className='inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
        >
          Return to website
        </Link>
      </div>
    </div>
  )
}
```

## File: src/pages/Radio.tsx
```typescript
import { settingApi } from '@/apis'
import RadioDetail from '@/components/radio/RadioDetail'
import { IProvince } from '@/utils/interface'
import { useEffect, useState } from 'react'

const Radio = () => {
  const [northProvince, setNorthProvince] = useState<IProvince[]>([])
  const [centralProvince, setCentralProvince] = useState<IProvince[]>([])
  const [southProvince, setSouthProvince] = useState<IProvince[]>([])
  const getData = async () => {
    const resonse = await settingApi.GetProvinceAcronym()
    if (resonse) {
      const { data } = resonse
      if (data && data.data.length > 0) {
        const provinces = data.data
        const north = provinces.filter(
          (province: IProvince) => province.region_id === 1
        )
        const central = provinces.filter(
          (province: IProvince) => province.region_id === 2
        )
        const south = provinces.filter(
          (province: IProvince) => province.region_id === 3
        )

        setNorthProvince(north)
        setCentralProvince(central)
        setSouthProvince(south)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="flex font-bold">
        <span className="w-20 text-center">Key</span>
        <span className="flex-1 text-center">Tên đài sổ xố</span>
        <span className="w-10"></span>
      </div>
      <RadioDetail provinces={northProvince} region="Bắc" />
      <RadioDetail provinces={centralProvince} region="Trung" />
      <RadioDetail provinces={southProvince} region="Nam" />
    </div>
  )
}

export default Radio
```

## File: src/pages/Setting.tsx
```typescript
import { authApi, globalApi } from '@/apis'
import { useToast } from '@/components/ui/use-toast'
import { ISetting, IUpdatePassword } from '@/utils/interface'
import { InputChange } from '@/utils/types'
import { useState } from 'react'

export default function Setting() {
  const [setting, setSetting] = useState<ISetting>({
    font_size: 12,
    data_store_day: 9,
    show_bet_score: 1,
  })

  const [password, setPassword] = useState<IUpdatePassword>({
    old_password: '',
    new_password: '',
    confirm_password: '',
  })

  const { toast } = useToast()
  const handleChange = (e: InputChange) => {
    const { name, value } = e.target

    setSetting({
      ...setting,
      [name]: value,
    })
  }

  const handleChangePassword = (e: InputChange) => {
    const { name, value } = e.target

    setPassword({
      ...password,
      [name]: value,
    })
  }

  const handleSaveSetting = async () => {
    try {
      if (password.new_password !== password.confirm_password) {
        toast({
          variant: 'destructive',
          title: 'Mật khẩu không khớp',
        })
      }

      // Call API to save setting
      const promise1 = await authApi.UpdatePassword({
        old_password: password.old_password,
        new_password: password.new_password,
      })
      const promise2 = await globalApi.UpdateSetting({
        font_size: parseInt(setting.font_size.toString()),
        data_store_day: parseInt(setting.data_store_day.toString()),
        show_bet_score: parseInt(setting.show_bet_score.toString()),
      })

      if (promise1.status === 200 && promise2.status === 200) {
        toast({
          variant: 'success',
          title: 'Thành công',
        })
      } else {
        toast({
          variant: 'destructive',
          title: 'Thất bại',
        })
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Lỗi',
      })
    }
  }

  return (
    <div className='bg-gray-100 p-4'>
      <div className='text-lg font-semibold px-4 py-2 rounded-t-lg'>
        CÀI ĐẶT CƠ BẢN
      </div>

      <div className='p-4 space-y-6'>
        {/* Cỡ chữ và Ngày lưu dữ liệu */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-gray-700'>Cỡ chữ</label>
            <input
              type='number'
              className='w-full p-2 border rounded'
              value={setting.font_size}
              name='font_size'
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='block text-gray-700'>Ngày lưu dữ liệu</label>
            <input
              type='number'
              className='w-full p-2 border rounded'
              value={setting.data_store_day}
              name='data_store_day'
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <h3 className='font-semibold text-gray-700 mb-2'>
            HIỂN THỊ TIỀN CƯỢC - ĐIỂM
          </h3>
          <div className='flex items-center space-x-4'>
            <label className='flex items-center space-x-2'>
              <input
                type='radio'
                name='display'
                defaultChecked
              />
              <span>Hiển thị tiền xác</span>
            </label>
            <label className='flex items-center space-x-2'>
              <input
                type='radio'
                name='display'
              />
              <span>Hiển thị điểm</span>
            </label>
          </div>
        </div>

        {/* Quản lý mật khẩu */}
        <div>
          <h3 className='font-semibold text-gray-700 mb-2'>QUẢN LÝ MẬT KHẨU</h3>
          <div className='space-y-4'>
            <input
              type='password'
              placeholder='Mật khẩu cũ'
              className='w-full p-2 border rounded'
              value={password.old_password}
              name='old_password'
              onChange={handleChangePassword}
            />
            <input
              type='password'
              placeholder='Mật khẩu'
              className='w-full p-2 border rounded'
              value={password.new_password}
              name='new_password'
              onChange={handleChangePassword}
            />
            <input
              type='password'
              placeholder='Lặp lại mật khẩu'
              className='w-full p-2 border rounded'
              value={password.confirm_password}
              name='confirm_password'
              onChange={handleChangePassword}
            />
          </div>
        </div>

        <div className='text-right'>
          <button
            onClick={handleSaveSetting}
            className='bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2'
          >
            <span>💾</span>
            <span>LƯU LẠI</span>
          </button>
        </div>
      </div>
    </div>
  )
}
```

## File: src/pages/SettingNumber.tsx
```typescript
const SettingNumber = () => {
  return <div>SettingNumber</div>
}

export default SettingNumber
```

## File: src/pages/TypeLottery.tsx
```typescript
import { settingApi } from '@/apis'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  TableHead,
  Table,
} from '@/components/ui/table'
import { useToast } from '@/components/ui/use-toast'
import { IRuleAcronym } from '@/utils/interface'
import { FormSubmit } from '@/utils/types'
import { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'

const TypeLottery = () => {
  const [data, setData] = useState<IRuleAcronym[]>([])

  const [rule, setRule] = useState<IRuleAcronym | null>(null)

  const { toast } = useToast()

  const getData = async () => {
    const response = await settingApi.GetRuleAcronym()
    if (response) {
      const { data } = response
      if (data && data.data) {
        setData(data.data)
      }
    }
  }

  const ModalUpdate = () => {
    const [acronym, setAcronym] = useState<string>(rule?.acronym ?? '')
    const handleUpdate = async (e: FormSubmit) => {
      e.preventDefault()
      try {
        //arconym not start with number
        if (acronym[0] >= '0' && acronym[0] <= '9') {
          toast({
            variant: 'destructive',
            title: 'Luật không bắt đàu với số',
          })
          return
        }

        const dataUpdate = [
          {
            acronym,
            rule_id: rule?.rule_id,
          },
        ]

        const response = await settingApi.UpdateRuleAcronym(dataUpdate)

        if (response) {
          const { status } = response
          if (status === 200) {
            toast({
              variant: 'success',
              title: 'Cập nhật thành công',
            })
            setRule(null)

            setData(
              data.map((item) => {
                if (item.rule_id === rule?.rule_id) {
                  return {
                    ...item,
                    acronym,
                  }
                }
                return item
              })
            )
          } else {
            toast({
              variant: 'destructive',
              title: 'Cập nhật không thành công',
            })
          }
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Cập nhật không thành công',
        })
      }
    }
    return (
      <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-2 rounded bg-white p-4"
        >
          <h1>Cập nhật rule</h1>
          <Input type="text" readOnly disabled value={rule?.rule_name} />

          <Input
            type="text"
            value={acronym}
            onChange={(e) => {
              setAcronym(e.target.value)
            }}
          />
          <div>
            <Button className="mr-2 bg-main text-white px-2 h-fit rounded-lg">
              Update
            </Button>
            <Button
              type="button"
              className="text-white px-2 h-fit rounded-lg"
              onClick={() => {
                setRule(null)
              }}
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    )
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {rule && <ModalUpdate />}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-black border text-center">
              Key ID
            </TableHead>
            <TableHead className="w-40 text-black border text-center">
              Rule name
            </TableHead>
            <TableHead className="text-black border text-left">Rule</TableHead>
            <TableHead className="w-10 text-black border text-center">
              Edit
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, index) => {
            return (
              <TableRow key={data.rule_id}>
                <TableCell className="w-10 text-black border text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-40 text-black border text-center">
                  {data.rule_name}
                </TableCell>
                <TableCell className="text-black border text-left">
                  {data.acronym}
                </TableCell>

                <TableCell
                  className="w-10 text-black border text-center cursor-pointer"
                  onClick={() => {
                    setRule(data)
                  }}
                >
                  <FaRegEdit />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default TypeLottery
```

## File: src/utils/validation/auth/index.ts
```typescript
export * from './login.validation'
export * from './register.validation'
```

## File: src/utils/validation/auth/login.validation.ts
```typescript
import { ILoginUser } from '@/utils/interface'

export const validationLogin = (data: ILoginUser) => {
  const errors: Map<string, string> = new Map<string, string>()

  if (!data.username) {
    errors.set('username', 'Tên đăng nhập không được để trống')
  }

  if (!data.password) {
    errors.set('password', 'Mật khẩu không được để trống')
  }

  return errors
}
```

## File: src/utils/validation/auth/register.validation.ts
```typescript
import { ICreateUser } from '@/utils/interface'

export const validationRegister = (data: ICreateUser) => {
  const errors: Map<string, string> = new Map<string, string>()

  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const validPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])?[A-Za-z\d!@#$%^&*]{8,}$/

  if (!data.email) {
    errors.set('email', 'Email is required')
  } else if (!validEmail.test(data.email)) {
    errors.set('email', 'Email is invalid')
  }

  if (!data.password) {
    errors.set('password', 'Password is required')
  } else if (!validPassword.test(data.password)) {
    errors.set('password', 'Password is invalid')
  }

  if (!data.name) {
    errors.set('name', 'Name is required')
  } else if (data.name.length < 6 || data.name.length > 255) {
    errors.set('name', 'Name must be between 6 and 255 characters')
  }

  return errors
}
```

## File: src/utils/validation/bet.ts
```typescript

```

## File: src/utils/auth.ts
```typescript
// Password must be 8 characters minimum and a mix of alphanumeric lower and upper case characters + special characters.

function validatePassword(password: string) {
  // Check if password is at least 8 characters long
  if (password.length < 8) {
    return false
  }

  // Check if password contains at least one uppercase letter, one lowercase letter, one digit, and one special character
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return regex.test(password)
}

export { validatePassword }
```

## File: src/utils/data.ts
```typescript
// export const bet: IBet[] = [
//   {
//     id: 1,
//     cities: ['tp', 'dt', 'cm', 'bt', 'vt', 'bl'],
//     raw_messages: [
//       'bt 89 22 lo 10n',
//       'bt 68 75 da 2n vt bt 68 75 dx 2n bt 68 368 lo 5n',
//       '3dai 972 950 051 lo 1n bt 051 lo 1n 20 dd 12n',
//       'bt 19 59 36 lo 5n 75 55 dd 30n 19 59 99 36 76 dd 10n',
//       'bt vt 53 56 lo 5n 156 xc 30n',
//       'bt 50 lo 10n 42 51 dd 30n',
//       'bt 61 19 lo 5n 61 19 da 5n 72 21 da 5n 72 21 lo 5n',
//       'vt 347 lo 10n 475 xc 10n bt 475 xc 10n vt 47 lo 10n',
//       'bt vt 39 lo 50n',
//       'bt vt 272 273 259 lo 5n 272 273 259 xc 10n',
//       'bt 52 81 72 da 1n 781 718 xc 6n 52 dd 30n',
//       'bt vt 72 dd 6n 32 dd 15n',
//       'vt 11 dau 200n dui 40n',
//       'bt vt 32 19 48 dx 2n 25 48 32 dx 1n 19 25 dx 2n bt 29 229 lo 5n 229 xc 50n',
//       'vt 24 64 lo 10n',
//       'bt 52 lo 20n',
//       'bt 91 lo 20n 591 191 lo 5n',
//       'bt 39 lo 10n',
//       'bt vt 978 lo 1n 978 xc 5n 78 dd 15n bt 78 dd 4n',
//       '3dai 60 lo 30n',
//       'bt 75 dau 100n dui 20n bt vt 75 57 dx 2n',
//       'bt vt 71 86 dx 1n 96 76 dx 1n',
//       'bt 82 lo 50n 782 lo 50n 782 xc 100n',
//       'bt 437 272 lo 5n 232 lo 10n 32 lo 30n',
//       'bt 57 88 99 lo 10n',
//       'bt vt 39 79 lo 5n',
//       'bt vt 24 lo 5n 24 64 dx 2n 75 59 dx 2n bt 47 68 da 2n 47 547 lo 5n',
//       'bt vt 24 dd 12n',
//       'bt 77 lo 20n 277 lo 5n 277 xc 18n',
//       'bt 23 53 523 253 lo 5n',
//       'bt 32 72 lo 10n 32 72 da 5n',
//       'bt 28 dau 100n dui 20n',
//       'bt vt 11 dd 15n 911 xc 15n 911 lo 2n 11 51 91 dx 1n',
//       'vt 15 lo 10n 15 55 da 2n',
//       'vt bt 55 lo 10n 52 lo 5n',
//       'bt 87 dd 30n 47 dd 30n 30 dau 120n dui 70n 70 dau 20n dui 30n 81 dd 15n 50 dau 20n dui 40n 499 944 xc 15n vt 30 dau 20n dui 100n 70 dau 20n dui 30n 81 dd 15n',
//       '3dai 18 19 lo 5n bt vt 19 59 99 dx 1n',
//       'bt 36 036 lo 5n 036 xc 6n',
//       'bt 88 lo 10n 72 lo 15n',
//       'bt vt 31 99 dx 3n 64 26 dx 2n',
//       'bt 31 dd 15n',
//       'bt 769 lo 2n 769 xc 50n',
//       'bt 53 92 87 dd 30n 26 06 38 76 dd 5n',
//       'bt 053 038 376 031 xc 5n',
//       '3dai 53 59 dau 32n dui 30n 52 dau 13n dui 12n 959 953 xc 10n 53 59 dx 1n',
//       'bt vt 79 68 97 dx 2n 3dai 79 86 lo 10n',
//       'bt vt 15 lo 2n 523 xc 5n',
//       '3dai 92 dd 30n',
//       '3dai 087 092 029 052 xc 5n',
//       'bt vt 026 387 226 xc 5n 26 dd 15n',
//       'bt 59 lo 30n',
//       'bt 11 lo 3n 20 lo 2n 11 20 da 1n 20 11 dd 6n',
//       'vt 353 553 xc 5n 53 dd 30n',
//       'bt 51 lo 3n 851 lo 2n 851 xc 5n 51 91 dd 6n',
//       '3dai 54 59 dx 1n 54 59 dd 6n',
//       '3dai 15 lo 50n',
//       'bt vt 67 57 dx 1n 36 14 dx 1n 68 88 dx 1n 17 71 dx 1n 04 84 dx 1n',
//       'bt vt 60 61 51 dx 1n',
//       'bt 11 dau 100n dui 25n',
//       'bt vt 32 72 52 dx 1n 19 59 dx 1n 25 65 dx 1n 32 72 52 19 25 65 dd 6n 59 dau 13n dui 12n 59 lo 5n',
//       '3dai 72 83 dx 5n',
//       'bt vt 94 65 68 72 dx 5n',
//       'vt 52 dd 30n bt 52 dd 15n',
//       'vt 006 306 xc 5n 53 87 29 31 dd 5n 06 dd 60n',
//       'bt vt 33 dd 30n 32 38 30 03 dd 10n 33 32 38 dx 2n',
//       'bt vt 02 42 82 dx 1n 50 27 dx 1n',
//       'bt vt 16 68 lo 25n',
//       'bt 339 757 xc 10n 57 lo 10n bt vt 57 92 dx 3n 57 58 dx 2n vt 019 xc 10n 58 lo 5n',
//       'bl 015 072 052 xc 10n',
//       'vt 53 dd 120n 559 959 953 xc 25n',
//     ],
//     message:
//       'Name:dt 66 lo 10n 066 666 lo 2.5n 66 dau 150n dui 30n tp 25 lo 10n tp dt 68 86 lo 10n tp dt 68 86 dx 5n tp 99 dau 120n tp 32 38 69 lo 20n 32 dau 200n dui 40n tp 51 dd 200n 91 dd 100n tp 83 dau 100n dui 20n 32 72 61 dd 30n 283 583 lo 2n xc 11n dt 83 dd 30n 32 72 61 dd 20n tp 37 44 90 dau 200n dui 40n 68 dau 40n dui 200n 768 xc 100n 437 xc 50n tp 42 dau 200n dui 40n 83 dd 120n tp 45 03 lo 5n da 2.5n 045 645 245 lo 1n tp dt 59 lo 10n 61 lo 5n tp 33 dau 20n dui 100n 733 xc 25n tp 52 lo 10n 952 lo 5n tp 76 lo 10n 976 lo 5n tp 01 lo 10n tp 25 52 lo 15n da 2.5n tp 19 lo 15n 73 lo 10n 479 257 lo 2.5n tp 479 xc 25n tp 15 55 95 dd 10n tp dt 38 78 dx 2n 15 55 dx 2n tp dt 893 lo 10n tp 11 dd 42n tp 211 921 lo 5n 11 21 lo 5n 11 dau 100n dui 20n tp 09 75 14 17 29 lo 3n tp 52 lo 30n tp dt 572 334 lo 5n tp 29 30 lo 15n dau 40n dui 8n tp dt 83 56 dx 10n tp dt 59 38 dx 10n tp 59 lo 15n dt 38 lo 15n tp 54 lo 30n tp 49 lo 10n 049 lo 5n tp 51 lo 50n 28 lo 30n tp 56 lo 10n tp dt 21 88 lo 5n dx 5n 66 88 dx 5n tp 118 lo 5n tp 18 lo 5n tp dt 99 87 dx 3n 77 67 dx 3n tp 28 lo 20n dt cm 28 lo 10n tp 53 dau 100n dui 20n tp 45 70 75 da 10n 75 lo 40n tp 37 dd 100n tp 61 lo 10n dt cm 61 lo 50n tp dt 28 32 52 lo 10n dx 2n tp 532 xc 25n tp 17 27 47 lo 20n tp 72 dau 20n dui 100n 32 dd 60n tp dt cm 37 lo 5n dt 15 51 dd 15n tp cm 64 dd 15n tp 17 lo 40n 71 lo 20n 917 lo 30n 17 71 da 5n tp dt 25 82 dx 5n 56 65 dx 5n tp 21 lo 20n tp dt 12 21 dx 5n dt 21 lo 15n tp 314 494 lo 2n tp 75 lo 10n 475 lo 10n 75 dau 20n dui 4n tp dt 695 lo 2.5n tp 44 dau 50n dui 46n 64 dau 60n dui 12n 01 dd 12n 39 lo 3n 387 lo 2n tp 27 51 56 79 91 lo 3n dd 6n tp 11 dau 80n dui 16n tp dt 39 57 63 dx 3n tp 206 lo 10n 06 lo 10n tp dt 35 53 dx 10n 35 42 dx 5n 42 68 dx 5n dt cm 35 53 dx 10n 35 42 dx 5n 42 68 dx 5n tp 27 dd 200n 252 xc 40n 52 dau 100n dui 60n tp 95 lo 3.5n tp 72 lo 30n 372 lo 5n tp 36 76 da 10n 076 lo 10n 76 dd 48n tp 653 lo 10n tp dt 75 11 dx 10n tp dt 91 93 dx 5n tp 11 dd 180n cm 11 dd 180n tp 52 lo 10n dd 6n tp 23 32 lo 50n tp 49 dau 140n dui 100n dt 32 lo 25n 532 232 632 lo 4n 32 73 dau 80n dui 40n tp 14 lo 15n 514 414 714 814 lo 3n tp 28 dau 150n dui 100n 328 528 128 lo 5n tp 12 lo 100n 12 35 da 10n tp dt 50 20 02 dx 1n ',
//     name: 'Nguyễn Văn A',
//     coefficient: 1,
//     agency_id: 1,
//     bet_correct: ['tp', 'dt', 'cm', 'bt', 'vt', 'bl'],
//     region: 'MB',
//     details: [
//       { type: 0, point: 10, key: '2CB' },
//       { type: 0, point: 14, key: '2CD' },
//       { type: 0, point: 1, key: '3C' },
//       { type: 0, point: 41, key: '4C' },
//       { type: 0, point: 1, key: 'Da' },
//       { type: 0, point: 1, key: 'DaX' },

//       { type: 1, point: 1, key: '2CB' },
//       { type: 1, point: 1, key: '2CD' },
//       { type: 1, point: 1, key: '3C' },
//       { type: 1, point: 341, key: '4C' },
//       { type: 1, point: 1, key: 'Da' },
//       { type: 1, point: 1, key: 'DaX' },

//       { type: 2, point: 1, key: '2CB' },
//       { type: 2, point: 341, key: '2CD' },
//       { type: 2, point: 14, key: '3C' },
//       { type: 2, point: 1, key: '4C' },
//       { type: 2, point: 1, key: 'Da' },
//       { type: 2, point: 1, key: 'DaX' },
//     ],
//     created_at: new Date().toUTCString(),
//   },
//   {
//     id: 2,
//     cities: ['tp', 'dt', 'cm', 'bt', 'vt', 'bl'],
//     raw_messages: [
//       'bt 89 22 lo 10n',
//       'bt 68 75 da 2n vt bt 68 75 dx 2n bt 68 368 lo 5n',
//       '3dai 972 950 051 lo 1n bt 051 lo 1n 20 dd 12n',
//       'bt 19 59 36 lo 5n 75 55 dd 30n 19 59 99 36 76 dd 10n',
//       'bt vt 53 56 lo 5n 156 xc 30n',
//       'bt 50 lo 10n 42 51 dd 30n',
//       'bt 61 19 lo 5n 61 19 da 5n 72 21 da 5n 72 21 lo 5n',
//       'vt 347 lo 10n 475 xc 10n bt 475 xc 10n vt 47 lo 10n',
//       'bt vt 39 lo 50n',
//       'bt vt 272 273 259 lo 5n 272 273 259 xc 10n',
//       'bt 52 81 72 da 1n 781 718 xc 6n 52 dd 30n',
//       'bt vt 72 dd 6n 32 dd 15n',
//       'vt 11 dau 200n dui 40n',
//       'bt vt 32 19 48 dx 2n 25 48 32 dx 1n 19 25 dx 2n bt 29 229 lo 5n 229 xc 50n',
//       'vt 24 64 lo 10n',
//       'bt 52 lo 20n',
//       'bt 91 lo 20n 591 191 lo 5n',
//       'bt 39 lo 10n',
//       'bt vt 978 lo 1n 978 xc 5n 78 dd 15n bt 78 dd 4n',
//       '3dai 60 lo 30n',
//       'bt 75 dau 100n dui 20n bt vt 75 57 dx 2n',
//       'bt vt 71 86 dx 1n 96 76 dx 1n',
//       'bt 82 lo 50n 782 lo 50n 782 xc 100n',
//       'bt 437 272 lo 5n 232 lo 10n 32 lo 30n',
//       'bt 57 88 99 lo 10n',
//       'bt vt 39 79 lo 5n',
//       'bt vt 24 lo 5n 24 64 dx 2n 75 59 dx 2n bt 47 68 da 2n 47 547 lo 5n',
//       'bt vt 24 dd 12n',
//       'bt 77 lo 20n 277 lo 5n 277 xc 18n',
//       'bt 23 53 523 253 lo 5n',
//       'bt 32 72 lo 10n 32 72 da 5n',
//       'bt 28 dau 100n dui 20n',
//       'bt vt 11 dd 15n 911 xc 15n 911 lo 2n 11 51 91 dx 1n',
//       'vt 15 lo 10n 15 55 da 2n',
//       'vt bt 55 lo 10n 52 lo 5n',
//       'bt 87 dd 30n 47 dd 30n 30 dau 120n dui 70n 70 dau 20n dui 30n 81 dd 15n 50 dau 20n dui 40n 499 944 xc 15n vt 30 dau 20n dui 100n 70 dau 20n dui 30n 81 dd 15n',
//       '3dai 18 19 lo 5n bt vt 19 59 99 dx 1n',
//       'bt 36 036 lo 5n 036 xc 6n',
//       'bt 88 lo 10n 72 lo 15n',
//       'bt vt 31 99 dx 3n 64 26 dx 2n',
//       'bt 31 dd 15n',
//       'bt 769 lo 2n 769 xc 50n',
//       'bt 53 92 87 dd 30n 26 06 38 76 dd 5n',
//       'bt 053 038 376 031 xc 5n',
//       '3dai 53 59 dau 32n dui 30n 52 dau 13n dui 12n 959 953 xc 10n 53 59 dx 1n',
//       'bt vt 79 68 97 dx 2n 3dai 79 86 lo 10n',
//       'bt vt 15 lo 2n 523 xc 5n',
//       '3dai 92 dd 30n',
//       '3dai 087 092 029 052 xc 5n',
//       'bt vt 026 387 226 xc 5n 26 dd 15n',
//       'bt 59 lo 30n',
//       'bt 11 lo 3n 20 lo 2n 11 20 da 1n 20 11 dd 6n',
//       'vt 353 553 xc 5n 53 dd 30n',
//       'bt 51 lo 3n 851 lo 2n 851 xc 5n 51 91 dd 6n',
//       '3dai 54 59 dx 1n 54 59 dd 6n',
//       '3dai 15 lo 50n',
//       'bt vt 67 57 dx 1n 36 14 dx 1n 68 88 dx 1n 17 71 dx 1n 04 84 dx 1n',
//       'bt vt 60 61 51 dx 1n',
//       'bt 11 dau 100n dui 25n',
//       'bt vt 32 72 52 dx 1n 19 59 dx 1n 25 65 dx 1n 32 72 52 19 25 65 dd 6n 59 dau 13n dui 12n 59 lo 5n',
//       '3dai 72 83 dx 5n',
//       'bt vt 94 65 68 72 dx 5n',
//       'vt 52 dd 30n bt 52 dd 15n',
//       'vt 006 306 xc 5n 53 87 29 31 dd 5n 06 dd 60n',
//       'bt vt 33 dd 30n 32 38 30 03 dd 10n 33 32 38 dx 2n',
//       'bt vt 02 42 82 dx 1n 50 27 dx 1n',
//       'bt vt 16 68 lo 25n',
//       'bt 339 757 xc 10n 57 lo 10n bt vt 57 92 dx 3n 57 58 dx 2n vt 019 xc 10n 58 lo 5n',
//       'bl 015 072 052 xc 10n',
//       'vt 53 dd 120n 559 959 953 xc 25n',
//     ],
//     message:
//       'Name:dt 66 lo 10n 066 666 lo 2.5n 66 dau 150n dui 30n tp 25 lo 10n tp dt 68 86 lo 10n tp dt 68 86 dx 5n tp 99 dau 120n tp 32 38 69 lo 20n 32 dau 200n dui 40n tp 51 dd 200n 91 dd 100n tp 83 dau 100n dui 20n 32 72 61 dd 30n 283 583 lo 2n xc 11n dt 83 dd 30n 32 72 61 dd 20n tp 37 44 90 dau 200n dui 40n 68 dau 40n dui 200n 768 xc 100n 437 xc 50n tp 42 dau 200n dui 40n 83 dd 120n tp 45 03 lo 5n da 2.5n 045 645 245 lo 1n tp dt 59 lo 10n 61 lo 5n tp 33 dau 20n dui 100n 733 xc 25n tp 52 lo 10n 952 lo 5n tp 76 lo 10n 976 lo 5n tp 01 lo 10n tp 25 52 lo 15n da 2.5n tp 19 lo 15n 73 lo 10n 479 257 lo 2.5n tp 479 xc 25n tp 15 55 95 dd 10n tp dt 38 78 dx 2n 15 55 dx 2n tp dt 893 lo 10n tp 11 dd 42n tp 211 921 lo 5n 11 21 lo 5n 11 dau 100n dui 20n tp 09 75 14 17 29 lo 3n tp 52 lo 30n tp dt 572 334 lo 5n tp 29 30 lo 15n dau 40n dui 8n tp dt 83 56 dx 10n tp dt 59 38 dx 10n tp 59 lo 15n dt 38 lo 15n tp 54 lo 30n tp 49 lo 10n 049 lo 5n tp 51 lo 50n 28 lo 30n tp 56 lo 10n tp dt 21 88 lo 5n dx 5n 66 88 dx 5n tp 118 lo 5n tp 18 lo 5n tp dt 99 87 dx 3n 77 67 dx 3n tp 28 lo 20n dt cm 28 lo 10n tp 53 dau 100n dui 20n tp 45 70 75 da 10n 75 lo 40n tp 37 dd 100n tp 61 lo 10n dt cm 61 lo 50n tp dt 28 32 52 lo 10n dx 2n tp 532 xc 25n tp 17 27 47 lo 20n tp 72 dau 20n dui 100n 32 dd 60n tp dt cm 37 lo 5n dt 15 51 dd 15n tp cm 64 dd 15n tp 17 lo 40n 71 lo 20n 917 lo 30n 17 71 da 5n tp dt 25 82 dx 5n 56 65 dx 5n tp 21 lo 20n tp dt 12 21 dx 5n dt 21 lo 15n tp 314 494 lo 2n tp 75 lo 10n 475 lo 10n 75 dau 20n dui 4n tp dt 695 lo 2.5n tp 44 dau 50n dui 46n 64 dau 60n dui 12n 01 dd 12n 39 lo 3n 387 lo 2n tp 27 51 56 79 91 lo 3n dd 6n tp 11 dau 80n dui 16n tp dt 39 57 63 dx 3n tp 206 lo 10n 06 lo 10n tp dt 35 53 dx 10n 35 42 dx 5n 42 68 dx 5n dt cm 35 53 dx 10n 35 42 dx 5n 42 68 dx 5n tp 27 dd 200n 252 xc 40n 52 dau 100n dui 60n tp 95 lo 3.5n tp 72 lo 30n 372 lo 5n tp 36 76 da 10n 076 lo 10n 76 dd 48n tp 653 lo 10n tp dt 75 11 dx 10n tp dt 91 93 dx 5n tp 11 dd 180n cm 11 dd 180n tp 52 lo 10n dd 6n tp 23 32 lo 50n tp 49 dau 140n dui 100n dt 32 lo 25n 532 232 632 lo 4n 32 73 dau 80n dui 40n tp 14 lo 15n 514 414 714 814 lo 3n tp 28 dau 150n dui 100n 328 528 128 lo 5n tp 12 lo 100n 12 35 da 10n tp dt 50 20 02 dx 1n ',
//     name: 'Nguyễn Văn B',
//     coefficient: 1,
//     agency_id: 2,
//     bet_correct: ['tp', 'dt', 'cm', 'bt', 'vt', 'bl'],
//     region: 'MB',
//     details: [
//       { type: 0, point: 10, key: '2CB' },
//       { type: 0, point: 14, key: '2CD' },
//       { type: 0, point: 1, key: '3C' },
//       { type: 0, point: 41, key: '4C' },
//       { type: 0, point: 1, key: 'Da' },
//       { type: 0, point: 1, key: 'DaX' },

//       { type: 1, point: 1, key: '2CB' },
//       { type: 1, point: 1, key: '2CD' },
//       { type: 1, point: 1, key: '3C' },
//       { type: 1, point: 343331, key: '4C' },
//       { type: 1, point: 1, key: 'Da' },
//       { type: 1, point: 1, key: 'DaX' },

//       { type: 2, point: 1, key: '2CB' },
//       { type: 2, point: 341, key: '2CD' },
//       { type: 2, point: 14, key: '3C' },
//       { type: 2, point: 1, key: '4C' },
//       { type: 2, point: 1, key: 'Da' },
//       { type: 2, point: 1, key: 'DaX' },
//     ],
//     created_at: new Date().toUTCString(),
//   },
//   {
//     id: 3,
//     cities: ['tp', 'dt', 'cm', 'bt', 'vt', 'bl'],
//     raw_messages: [
//       'bt 89 22 lo 10n',
//       'bt 68 75 da 2n vt bt 68 75 dx 2n bt 68 368 lo 5n',
//       '3dai 972 950 051 lo 1n bt 051 lo 1n 20 dd 12n',
//       'bt 19 59 36 lo 5n 75 55 dd 30n 19 59 99 36 76 dd 10n',
//       'bt vt 53 56 lo 5n 156 xc 30n',
//       'bt 50 lo 10n 42 51 dd 30n',
//       'bt 61 19 lo 5n 61 19 da 5n 72 21 da 5n 72 21 lo 5n',
//       'vt 347 lo 10n 475 xc 10n bt 475 xc 10n vt 47 lo 10n',
//       'bt vt 39 lo 50n',
//       'bt vt 272 273 259 lo 5n 272 273 259 xc 10n',
//       'bt 52 81 72 da 1n 781 718 xc 6n 52 dd 30n',
//       'bt vt 72 dd 6n 32 dd 15n',
//       'vt 11 dau 200n dui 40n',
//       'bt vt 32 19 48 dx 2n 25 48 32 dx 1n 19 25 dx 2n bt 29 229 lo 5n 229 xc 50n',
//       'vt 24 64 lo 10n',
//       'bt 52 lo 20n',
//       'bt 91 lo 20n 591 191 lo 5n',
//       'bt 39 lo 10n',
//       'bt vt 978 lo 1n 978 xc 5n 78 dd 15n bt 78 dd 4n',
//       '3dai 60 lo 30n',
//       'bt 75 dau 100n dui 20n bt vt 75 57 dx 2n',
//       'bt vt 71 86 dx 1n 96 76 dx 1n',
//       'bt 82 lo 50n 782 lo 50n 782 xc 100n',
//       'bt 437 272 lo 5n 232 lo 10n 32 lo 30n',
//       'bt 57 88 99 lo 10n',
//       'bt vt 39 79 lo 5n',
//       'bt vt 24 lo 5n 24 64 dx 2n 75 59 dx 2n bt 47 68 da 2n 47 547 lo 5n',
//       'bt vt 24 dd 12n',
//       'bt 77 lo 20n 277 lo 5n 277 xc 18n',
//       'bt 23 53 523 253 lo 5n',
//       'bt 32 72 lo 10n 32 72 da 5n',
//       'bt 28 dau 100n dui 20n',
//       'bt vt 11 dd 15n 911 xc 15n 911 lo 2n 11 51 91 dx 1n',
//       'vt 15 lo 10n 15 55 da 2n',
//       'vt bt 55 lo 10n 52 lo 5n',
//       'bt 87 dd 30n 47 dd 30n 30 dau 120n dui 70n 70 dau 20n dui 30n 81 dd 15n 50 dau 20n dui 40n 499 944 xc 15n vt 30 dau 20n dui 100n 70 dau 20n dui 30n 81 dd 15n',
//       '3dai 18 19 lo 5n bt vt 19 59 99 dx 1n',
//       'bt 36 036 lo 5n 036 xc 6n',
//       'bt 88 lo 10n 72 lo 15n',
//       'bt vt 31 99 dx 3n 64 26 dx 2n',
//       'bt 31 dd 15n',
//       'bt 769 lo 2n 769 xc 50n',
//       'bt 53 92 87 dd 30n 26 06 38 76 dd 5n',
//       'bt 053 038 376 031 xc 5n',
//       '3dai 53 59 dau 32n dui 30n 52 dau 13n dui 12n 959 953 xc 10n 53 59 dx 1n',
//       'bt vt 79 68 97 dx 2n 3dai 79 86 lo 10n',
//       'bt vt 15 lo 2n 523 xc 5n',
//       '3dai 92 dd 30n',
//       '3dai 087 092 029 052 xc 5n',
//       'bt vt 026 387 226 xc 5n 26 dd 15n',
//       'bt 59 lo 30n',
//       'bt 11 lo 3n 20 lo 2n 11 20 da 1n 20 11 dd 6n',
//       'vt 353 553 xc 5n 53 dd 30n',
//       'bt 51 lo 3n 851 lo 2n 851 xc 5n 51 91 dd 6n',
//       '3dai 54 59 dx 1n 54 59 dd 6n',
//       '3dai 15 lo 50n',
//       'bt vt 67 57 dx 1n 36 14 dx 1n 68 88 dx 1n 17 71 dx 1n 04 84 dx 1n',
//       'bt vt 60 61 51 dx 1n',
//       'bt 11 dau 100n dui 25n',
//       'bt vt 32 72 52 dx 1n 19 59 dx 1n 25 65 dx 1n 32 72 52 19 25 65 dd 6n 59 dau 13n dui 12n 59 lo 5n',
//       '3dai 72 83 dx 5n',
//       'bt vt 94 65 68 72 dx 5n',
//       'vt 52 dd 30n bt 52 dd 15n',
//       'vt 006 306 xc 5n 53 87 29 31 dd 5n 06 dd 60n',
//       'bt vt 33 dd 30n 32 38 30 03 dd 10n 33 32 38 dx 2n',
//       'bt vt 02 42 82 dx 1n 50 27 dx 1n',
//       'bt vt 16 68 lo 25n',
//       'bt 339 757 xc 10n 57 lo 10n bt vt 57 92 dx 3n 57 58 dx 2n vt 019 xc 10n 58 lo 5n',
//       'bl 015 072 052 xc 10n',
//       'vt 53 dd 120n 559 959 953 xc 25n',
//     ],
//     message:
//       'Name:dt 66 lo 10n 066 666 lo 2.5n 66 dau 150n dui 30n tp 25 lo 10n tp dt 68 86 lo 10n tp dt 68 86 dx 5n tp 99 dau 120n tp 32 38 69 lo 20n 32 dau 200n dui 40n tp 51 dd 200n 91 dd 100n tp 83 dau 100n dui 20n 32 72 61 dd 30n 283 583 lo 2n xc 11n dt 83 dd 30n 32 72 61 dd 20n tp 37 44 90 dau 200n dui 40n 68 dau 40n dui 200n 768 xc 100n 437 xc 50n tp 42 dau 200n dui 40n 83 dd 120n tp 45 03 lo 5n da 2.5n 045 645 245 lo 1n tp dt 59 lo 10n 61 lo 5n tp 33 dau 20n dui 100n 733 xc 25n tp 52 lo 10n 952 lo 5n tp 76 lo 10n 976 lo 5n tp 01 lo 10n tp 25 52 lo 15n da 2.5n tp 19 lo 15n 73 lo 10n 479 257 lo 2.5n tp 479 xc 25n tp 15 55 95 dd 10n tp dt 38 78 dx 2n 15 55 dx 2n tp dt 893 lo 10n tp 11 dd 42n tp 211 921 lo 5n 11 21 lo 5n 11 dau 100n dui 20n tp 09 75 14 17 29 lo 3n tp 52 lo 30n tp dt 572 334 lo 5n tp 29 30 lo 15n dau 40n dui 8n tp dt 83 56 dx 10n tp dt 59 38 dx 10n tp 59 lo 15n dt 38 lo 15n tp 54 lo 30n tp 49 lo 10n 049 lo 5n tp 51 lo 50n 28 lo 30n tp 56 lo 10n tp dt 21 88 lo 5n dx 5n 66 88 dx 5n tp 118 lo 5n tp 18 lo 5n tp dt 99 87 dx 3n 77 67 dx 3n tp 28 lo 20n dt cm 28 lo 10n tp 53 dau 100n dui 20n tp 45 70 75 da 10n 75 lo 40n tp 37 dd 100n tp 61 lo 10n dt cm 61 lo 50n tp dt 28 32 52 lo 10n dx 2n tp 532 xc 25n tp 17 27 47 lo 20n tp 72 dau 20n dui 100n 32 dd 60n tp dt cm 37 lo 5n dt 15 51 dd 15n tp cm 64 dd 15n tp 17 lo 40n 71 lo 20n 917 lo 30n 17 71 da 5n tp dt 25 82 dx 5n 56 65 dx 5n tp 21 lo 20n tp dt 12 21 dx 5n dt 21 lo 15n tp 314 494 lo 2n tp 75 lo 10n 475 lo 10n 75 dau 20n dui 4n tp dt 695 lo 2.5n tp 44 dau 50n dui 46n 64 dau 60n dui 12n 01 dd 12n 39 lo 3n 387 lo 2n tp 27 51 56 79 91 lo 3n dd 6n tp 11 dau 80n dui 16n tp dt 39 57 63 dx 3n tp 206 lo 10n 06 lo 10n tp dt 35 53 dx 10n 35 42 dx 5n 42 68 dx 5n dt cm 35 53 dx 10n 35 42 dx 5n 42 68 dx 5n tp 27 dd 200n 252 xc 40n 52 dau 100n dui 60n tp 95 lo 3.5n tp 72 lo 30n 372 lo 5n tp 36 76 da 10n 076 lo 10n 76 dd 48n tp 653 lo 10n tp dt 75 11 dx 10n tp dt 91 93 dx 5n tp 11 dd 180n cm 11 dd 180n tp 52 lo 10n dd 6n tp 23 32 lo 50n tp 49 dau 140n dui 100n dt 32 lo 25n 532 232 632 lo 4n 32 73 dau 80n dui 40n tp 14 lo 15n 514 414 714 814 lo 3n tp 28 dau 150n dui 100n 328 528 128 lo 5n tp 12 lo 100n 12 35 da 10n tp dt 50 20 02 dx 1n ',
//     coefficient: 1,
//     name: 'Nguyễn Văn C',
//     agency_id: 3,
//     bet_correct: ['tp', 'dt', 'cm', 'bt', 'vt', 'bl'],
//     region: 'MB',
//     details: [
//       { type: 0, point: 10, key: '2CB' },
//       { type: 0, point: 14, key: '2CD' },
//       { type: 0, point: 1, key: '3C' },
//       { type: 0, point: 41, key: '4C' },
//       { type: 0, point: 1, key: 'Da' },
//       { type: 0, point: 1, key: 'DaX' },

//       { type: 1, point: 1, key: '2CB' },
//       { type: 1, point: 1, key: '2CD' },
//       { type: 1, point: 1, key: '3C' },
//       { type: 1, point: 341, key: '4C' },
//       { type: 1, point: 1, key: 'Da' },
//       { type: 1, point: 1, key: 'DaX' },

//       { type: 2, point: 1, key: '2CB' },
//       { type: 2, point: 341, key: '2CD' },
//       { type: 2, point: 14, key: '3C' },
//       { type: 2, point: 1, key: '4C' },
//       { type: 2, point: 1, key: 'Da' },
//       { type: 2, point: 1, key: 'DaX' },
//     ],
//     created_at: new Date().toUTCString(),
//   },
// ]
export const selectSearch = [
  { value: 'customer', label: 'Khách' },
  { value: 'own', label: 'Chủ' },
]
```

## File: src/App.tsx
```typescript
import { cn } from '@/lib/utils'
import React from 'react'
import Router from './router'
export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export const LoadingSpinner = ({
  size = 24,
  className,
  ...props
}: ISVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      {...props}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('animate-spin', className)}
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  )
}

function App() {
  const router = Router()
  return router
}

export default App
```

## File: src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  padding: 0;
  margin: 0;
  /* box-sizing: border-box; */
  font-family: 'Poppins', sans-serif;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f0f0f0; /* Màu nền của track */
  border-radius: 4px; /* Bo góc của track */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #b3b3b3; /* Màu của thanh cuộn */
  border-radius: 4px; /* Bo góc của thanh cuộn */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #888; /* Màu của thanh cuộn khi hover */
}

.resize-vertical {
  resize: vertical;
}

.group-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.4;
  z-index: 100;
}
.sk-cube-grid {
  width: 40px;
  height: 40px;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
}
.sk-cube-grid .sk-cube {
  width: 33%;
  height: 33%;
  background-color: #00a2ff;
  float: left;
  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
}

.sk-cube-grid .sk-cube2 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube3 {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.sk-cube-grid .sk-cube4 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube5 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.sk-cube-grid .sk-cube6 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.sk-cube-grid .sk-cube7 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.sk-cube-grid .sk-cube8 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}

/* --background declare here */
@layer components {
  .switch {
    @apply relative w-11 h-6 bg-gray-200 outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600;
  }
}
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## File: src/main.tsx
```typescript
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import DateProvider from './contexts/DateContext.tsx'
import RegionProvider from './contexts/RegionContext.tsx'
import BetProvider from './contexts/BetContext.tsx'
import AgencyProvider from './contexts/AgencyContext.tsx'
import GlobalProvider from './contexts/GlobalContext.tsx'
import SettingProvider from './contexts/SettingContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalProvider>
      <DateProvider>
        <SettingProvider>
          <RegionProvider>
            <BetProvider>
              <AgencyProvider>
                <App />
              </AgencyProvider>
            </BetProvider>
          </RegionProvider>
        </SettingProvider>
      </DateProvider>
    </GlobalProvider>
  </BrowserRouter>
)
```

## File: src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
```

## File: .eslintrc.cjs
```
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

## File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## File: index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lottery</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## File: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        main: '#fb2968',
        submain: '#1ABB9C',
        disable: '#6f6d6e',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

## File: tsconfig.app.json
```json
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

## File: tsconfig.json
```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## File: tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
```

## File: vite.config.ts
```typescript
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react(), tsconfigPaths()],
    server: {},
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': env,
    },
    base: './',
    build: {
      minify: true,
      sourcemap: false,
      target: 'modules',
    },
  }
})
```

## File: src/components/common/SlideBar.tsx
```typescript
import { Button } from '@/components/ui/button'
import { PATHS } from '@/utils/constants'
import { autoLogout } from '@/utils/helper'
import { useState } from 'react'
import { BiMenu, BiSolidLogOut, BiSolidRightArrow } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

const routes = [
  { path: PATHS.HOME, label: 'Trang chủ' },
  { path: PATHS.MIEN_BAC, label: 'Tổng kết Miền Bắc' },
  { path: PATHS.MIEN_TRUNG, label: 'Tổng kết Miền Trung' },
  { path: PATHS.MIEN_NAM, label: 'Tổng kết Miền Nam' },
  // { path: PATHS.THONG_KE_SO_CUOC, label: 'Thống kê số cược' },
  { path: PATHS.TONG_KET_KHACH_HANG, label: 'Tổng kết khách hàng' },
  { path: PATHS.KET_QUA_SO_XO, label: 'Kết quả sổ xố' },
  { path: PATHS.KHACH_HANG, label: 'Đại lý' },
  { path: PATHS.DAI_SO_XO, label: 'Đài sổ xố' },
  { path: PATHS.LOAI_BAT_CUOC, label: 'Loại bắt cược' },
  // { path: PATHS.CAI_DAT_CAN_SO, label: 'Cài đặt cân số' },
  { path: PATHS.CAI_DAT_HE_THONG, label: 'Cài đặt hệ thống' },
]

const SlideBar = () => {
  const { pathname } = useLocation()
  const isActive = (path: string) => {
    return pathname === path ? 'text-white' : 'text-black'
  }
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        className="md:hidden fixed -top-1 right-2 z-50 bg-transparent text-white p-2 rounded-lg"
        onClick={() => setOpen(!open)}
      >
        <BiMenu size={36} />
      </Button>

      {/* Overlay để đóng menu khi click ra ngoài */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-main fixed top-0 left-0 h-screen max-w-[240px] z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:block`}
      >
        <div className="flex flex-col space-y-4 p-5">
          {routes.map((route) => (
            <Link
              to={route.path}
              key={route.path}
              onClick={() => setOpen(false)}
            >
              <Button
                className={`rounded-none border-b w-full justify-start bg-transparent ${isActive(
                  route.path
                )}`}
              >
                <BiSolidRightArrow />
                {route.label}
              </Button>
            </Link>
          ))}

          <Button
            onClick={autoLogout}
            className="rounded-none border-b w-full justify-start bg-transparent text-black"
          >
            <BiSolidLogOut />
            Đăng xuất
          </Button>
        </div>
      </div>
    </>
  )
}

export default SlideBar
```

## File: src/contexts/AgencyContext.tsx
```typescript
import { agencyApi } from '@/apis'
import { IAgency } from '@/utils/interface'
import { AgencyContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface AgencyProviderProps {
  children: ReactNode
}

export const AgencyContext = React.createContext<AgencyContextType | undefined>(
  undefined
)

const AgencyProvider: React.FC<AgencyProviderProps> = ({ children }) => {
  const [agency, setaAgency] = useState<IAgency | null>(null)
  const [agencies, setAgencies] = useState<IAgency[]>([])

  useEffect(() => {
    const getAgency = async () => {
      const response = await agencyApi.GetAgencies()
      if (response) {
        const { data } = response
        if (data && data.data) {
          setAgencies(data.data)
        }
      }
    }

    const accessToken = sessionStorage.getItem('token')
    if (!accessToken) {
      return
    }
    getAgency()
  }, [])

  const updateAgency = (agency: IAgency) => {
    setaAgency(agency)
  }

  return (
    <AgencyContext.Provider value={{ agency, updateAgency, agencies }}>
      {children}
    </AgencyContext.Provider>
  )
}

export default AgencyProvider
```

## File: src/contexts/GlobalContext.tsx
```typescript
import { globalApi } from '@/apis'
import { IRegion } from '@/utils/interface'
import { GlobalContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalContext = React.createContext<GlobalContextType | undefined>(
  undefined
)

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [south, setSouth] = useState<IRegion | null>(null)
  const [central, setCentral] = useState<IRegion | null>(null)
  const [north, setNorth] = useState<IRegion | null>(null)

  const getRegion = async () => {
    const response = await globalApi.GetRegion()
    if (response) {
      const { data } = response
      if (data) {
        data.data.map((item: IRegion) => {
          if (item.region_unique_key === 'south') {
            setSouth(item)
          } else if (item.region_unique_key === 'central') {
            setCentral(item)
          } else {
            setNorth(item)
          }
        })
      }
    }
  }

  useEffect(() => {
    const accessToken = sessionStorage.getItem('token')
    if (!accessToken) {
      return
    }
    getRegion()
  }, [])

  return (
    <GlobalContext.Provider value={{ central, north, south }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
```

## File: src/contexts/SettingContext.tsx
```typescript
import { settingApi } from '@/apis'
import { IProvince, IRuleAcronym } from '@/utils/interface'
import { SettingContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface SettingProviderProps {
  children: ReactNode
}

export const SettingContext = React.createContext<
  SettingContextType | undefined
>(undefined)

const SettingProvider: React.FC<SettingProviderProps> = ({ children }) => {
  const [provinces, setProvinces] = useState<IProvince[]>([])
  const [rules, setRules] = useState<IRuleAcronym[]>([])

  const getRegion = async () => {
    const [responseProvinces, responseRule] = await Promise.all([
      settingApi.GetProvinceAcronym(),
      settingApi.GetRuleAcronym(),
    ])

    if (responseProvinces && responseRule) {
      const { data: dataProvinces } = responseProvinces
      const { data: dataRule } = responseRule

      if (dataProvinces && dataRule && dataProvinces.data && dataRule.data) {
        setProvinces(dataProvinces.data)
        setRules(dataRule.data)
      }
    }
  }

  useEffect(() => {
    const accessToken = sessionStorage.getItem('token')
    if (!accessToken) {
      return
    }
    getRegion()
  }, [])

  return (
    <SettingContext.Provider value={{ provinces, rules }}>
      {children}
    </SettingContext.Provider>
  )
}

export default SettingProvider
```

## File: src/pages/ResultLottery.tsx
```typescript
const ResultLottery = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src="https://www.minhngoc.net.vn/free/index.php"
        frameBorder={0}
        scrolling="auto"
        id="iframe_xosominhngoc"
        className="custom-scrollbar w-full max-w-[1500px] h-[2000px] sm:max-w-[500px] sm:h-[1200px]"
      />
    </div>
  )
}

export default ResultLottery
```

## File: src/types/response.ts
```typescript
export type TResponseData<T = unknown> = {
  data?: T
  message: string
  code: number
  status: number
  page?: number
  limit?: number
  total?: number
}

export type TResponseError = {
  message: string
  code: number
  detail?: string
  stack?: string
}
```

## File: src/utils/constants.ts
```typescript
export const API_URL =
  import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',

  // Add more paths here
  MIEN_BAC: '/mien-bac',
  MIEN_TRUNG: '/mien-trung',
  MIEN_NAM: '/mien-nam',
  THONG_KE_SO_CUOC: '/thong-ke-so-cuoc',
  TONG_KET_KHACH_HANG: '/tong-ket-khach-hang',
  KET_QUA_SO_XO: '/ket-qua-so-xo',
  KHACH_HANG: '/khach-hang',
  DAI_SO_XO: '/dai-so-xo',
  LOAI_BAT_CUOC: '/loai-bat-cuoc',
  CAI_DAT_CAN_SO: '/cai-dat-can-so',
  CAI_DAT_HE_THONG: '/cai-dat-he-thong',
  LOGOUT: '/logout',
  SPECIAL: '/:slug?agency_id=:id',

  DAT_CUOC_CHI_TIET: '/:slug/dat-cuoc/:id',
  FORM: '/khach-hang/form',
}

export const ID_NEGATIVE = -1
export const DEFAULT_DRAFT_AGENCY_ID = "11"
```

## File: src/utils/helper.ts
```typescript
export const autoLogout = async () => {
  if (typeof window !== 'undefined') {
    // await logout()
    window.location.href = '/login'
    sessionStorage.clear()
  }
}
```

## File: src/utils/types.ts
```typescript
import { ChangeEvent, FormEvent } from 'react'
import {
  IAgency,
  IBetResultDetailInner,
  IProvince,
  IRegion,
  IRuleAcronym,
} from './interface'

export type FormSubmit = FormEvent<HTMLFormElement>
export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLSelectElement
>

export type RegionContextType = {
  region: string
}
export type DateContextType = {
  date: Date | undefined
  updateDate: (date: Date) => void
}

export type BetContextType = {
  bet: IBetResultDetailInner | null
  updateBet: (bet: IBetResultDetailInner) => void
}

export type AgencyContextType = {
  agencies: IAgency[]
  agency: IAgency | null
  updateAgency: (agency: IAgency) => void
}

export type GlobalContextType = {
  north: IRegion | null
  central: IRegion | null
  south: IRegion | null
}

export type SettingContextType = {
  rules: IRuleAcronym[]
  provinces: IProvince[]
}

export type IBetType = 0 | 1 | 2 //0: diem,xac 1:co 2:trung

export type IFilter = {
  agency_id?: string
  open_date: string
  region_unique_key?: string
}
export type Method = 'POST' | 'GET' | 'PUT' | 'DELETE'
```

## File: package.json
```json
{
  "name": "web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build && cp -r netlify.toml dist",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-icons": "^1.3.0",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.1",
    "@tanstack/react-query": "^5.69.0",
    "@tanstack/react-table": "^8.20.5",
    "axios": "^1.8.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "crypto-js": "^4.2.0",
    "date-fns": "^4.1.0",
    "elliptic": "^6.5.7",
    "framer-motion": "^11.3.28",
    "is-url": "^1.2.4",
    "jose": "^5.9.3",
    "lodash": "^4.17.21",
    "lucide-react": "^0.454.0",
    "qrcode.react": "^4.2.0",
    "react": "^18.3.1",
    "react-day-picker": "8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.52.2",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.26.0",
    "recharts": "^2.13.3",
    "tailwind-merge": "^2.5.3",
    "tailwindcss-animate": "^1.0.7",
    "xlsx": "^0.18.5",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/crypto-js": "^4.2.2",
    "@types/elliptic": "^6.4.18",
    "@types/is-url": "^1.2.32",
    "@types/node": "^22.1.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.15.0",
    "@typescript-eslint/parser": "^7.15.0",
    "@vitejs/plugin-react": "^4.3.1",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.41",
    "react-qr-code": "^2.0.15",
    "tailwindcss": "^3.4.7",
    "typescript": "^5.2.2",
    "vite": "^5.3.4",
    "vite-tsconfig-paths": "^4.3.2"
  }
}
```

## File: README.md
```markdown
vt 89 98 lo 20n datt 5n
2dai 28 56 lo 5n 428 xc 31n
3dai 722 733 915 lo 1n xc 6n
bt 41 lo 15n
3dai 12 52 dd 1n dd 6n
vt 241 lo 30n 41 81 datt 10n
3dai 50 lo 10n 850 lo 5n xc 50n
bt 576 886 xc 12n
bt 2525 lo 10n
2dai 525 xc 12n
3dai 45 lo 10n
2dai 51 43 dd 5n 72 32 dd 5n 51 11 dd 5n
2dai 94 49 27 dd 1n 12 52 67 dd 1n
2dai 82 lo 5n 482 lo 1n
bt 01 lo 7n 28 lo 5n 428 lo 2n xc 2n
bt 01 lo 10n dd 60n
2dai 63 lo 10n
bl 19 dau 50n duoi 10n
2dai 01 02 dd 1n 02 04 dd 1n
bt 00 lo 5n 000 lo 5n
vt 32 dau 100n duoi 25n
bt 53 dau 32n duoi 30n 753 lo 10n xc 50n
2dai 53 32 dd 5n
bt 28 lo 2n 228 lo 1n xc 11n
bt 19 lo 20n dd 12n
3dai 37 38 lo 6n 637 638 lo 4n
3dai 69 96 lo 5n
bt 89 lo 10n 98 lo 5n
bt 89 70 lo 10n
2dai 89 70 dd 5n
bt 70 dd 50n
bt 41 dd 12n 068 968 xc 6n
2dai 07 70 37 dd 1n
bt 20 lo 5n
2dai 17 22 dd 3n
vt 68 lo 10n 868 lo 5n 8868 lo 5n 868 xc 12n
bt 59 dd 6n 72 71 datt 1n 34 44 datt 0.5n 00 03 datt 0.5n 77 08 datt 0.5n
bl 54 lo 25n dau 162n duoi 37n 54 68 69 datt 3.5n
2dai 31 71 dd 1n 35 75 dd 2n
2dai 43 83 48 88 dd 1n 32 72 52 dd 1n 83 87 dd 1n
3dai 19 59 dd 1n
bt 32 72 52 83 43 88 48 lo 2n
bt 32 52 72 43 83 48 88 dd 6n
vt 43 83 48 88 87 lo 2n 32 72 52 48 88 87 dd 6n
bt 08 48 88 03 59 dau 32n duoi 30n 43 83 19 95 38 78 dd 15n
bt 03 58 lo 10n 603 658 lo 5n
2dai 53 09 dau 32n duoi 30n 19 03 08 88 48 20 99 59 dd 6n
2dai 953 853 909 920 999 988 348 948 919 903 908 xc 5n
2dai 03 58 dd 5n
vt 58 lo 5n 356 xc 30n
bt 68 lo 50n
2dai 10 68 dd 15n
vt 52 lo 30n 752 lo 50n 52 dau 70n duoi 220n 752 xc 110n
2dai 39 lo 5n 39 52 dd 2n 56 51 dd 2n
bt 947 lo 5n 47 07 datt 3n
3dai 42 43 47 82 dd 1n 42 43 47 83 dd 1n
bt 374 xc 40n
vt 561 xc 40n
bl 976 xc 40n
bt 14 dd 40n
vt 57 lo 5n
2dai 03 58 dd 1n
vt 04 lo 10n
bt 83 lo 5n 383 lo 5n xc 50n
2dai 03 43 83 dd 1n
3dai 42 43 47 dd 1n
bt 68 dau 72n
2dai 42 48 dd 1n 43 88 dd 1n 48 83 dd 1n 83 88 dd 1n
bl 013 035 311 xc 5n 13 35 11 dd 10n 041 001 xc 5n
bt bl 51 lo 5n
vt 029 229 431 031 035 187 429 xc 5n 35 02 29 53 87 dd 15n
bt 92 02 35 27 dd 5n 53 dd 30n
vt 318 954 xc 55n
2dai 54 18 dd 5n
vt 767 xc 100n 11 dd 580n
3dai 41 11 31 dd 15n
vt bl 141 xc 5n 41 lo 10n dd 5n
3dai 79 lo 10n
2dai 82 79 97 dd 1n
bt 64 lo 20n
2dai 63 lo 30n
2dai 41 lo 25n
2dai 17 71 95 34 26 dd 10n
2dai 6010 1101 9909 0215 1252 1525 lo 1n
vt bl 04 40 99 dd 1n
bl 99 lo 10n
bt bl 95 99 dd 1n
3dai 54 dd 30n
2dai 17 18 71 dd 1n 40 04 dd 1n 95 31 dd 1n
bt 19 59 99 lo 5n 599 459 319 lo 1n
vt 442 787 xc 5n 87 42 dd 15n
bt 087 187 387 787 442 001 xc 5n 42 87 dd 30n 01 dd 5n
2dai 53 35 95 dd 1n 35 53 dd 12n
3dai 55 56 lo 5n
bt 65 dau 50n duoi 10n 19 dau 30n duoi 10n 42 dau 20n duoi 10n 38 19 59 99 dd 30n
```

## File: .github/workflows/deploy.yml
```yaml
name: deploy client

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
    types:
      - closed

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup SSH
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.VPS_SSH_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H ${{ secrets.VPS_HOST }} >> ~/.ssh/known_hosts
      - name: Deploy
        run: |
          ssh ${{ secrets.VPS_USER }}@${{ secrets.VPS_HOST }} << 'EOF'
          cd /home/app/lottery-client
          git pull origin master
          /root/.nvm/versions/node/v22.14.0/bin/pm2 restart "client-app"
          EOF
```

## File: src/apis/global.ts
```typescript
import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'

const PATH = `${API_URL}/api/`

const GetRegion = async () => {
  const response = await apiCaller('GET', `${PATH}region`)

  return response
}
const GetLotterySchedule = async () => {
  const response = await apiCaller('GET', `${PATH}lotery-schedule`)

  return response
}

const GetAllRule = async () => {
  const response = await apiCaller('GET', `${PATH}rule`)

  return response
}

const GetSetting = async () => {
  const response = await apiCaller('GET', `${PATH}system-setting`)

  return response
}

const UpdateSetting = async (data: unknown) => {
  const response = await apiCaller('PUT', `${PATH}system-setting`, data)

  return response
}

const GetLotteryResult = async (data: any) => {
  const response = await apiCaller(
    'GET',
    `${PATH}lottery-result?date=${data.date}&region_unique_key=${data.region}`,
    data
  )
  return response
}

const GetCustomerResult = async (from: string, to: string) => {
  const response = await apiCaller(
    'GET',
    `${PATH}agency-analytics?from=${from}&to=${to}`
  )
  return response
}

export {
  GetRegion,
  GetLotterySchedule,
  GetSetting,
  UpdateSetting,
  GetAllRule,
  GetLotteryResult,
  GetCustomerResult,
}
```

## File: src/components/customer/FormInput.tsx
```typescript
import { ICoefficient, IRule } from '@/utils/interface'
import { InputChange } from '@/utils/types'
import Loading from '../common/Loading'

interface FormInputProps {
  region: string
  pay: ICoefficient
  setPay: React.Dispatch<React.SetStateAction<ICoefficient>>
  revenue: ICoefficient
  setRevenue: React.Dispatch<React.SetStateAction<ICoefficient>>
  rule: IRule[]
}

const FormInput = ({
  region,
  pay,
  setPay,
  revenue,
  setRevenue,
  rule,
}: FormInputProps) => {
  const handleChange = (e: InputChange) => {
    const { name, value } = e.target
    const key = name.split('-')[0]
    if (name.includes('1')) {
      setPay({
        ...pay,
        [key]: value,
      })
    } else {
      setRevenue({
        ...revenue,
        [key]: value,
      })
    }
  }

  const generatePay = (rule: IRule[]) => {
    return (
      <>
        {rule.map((item) => (
          <div className="flex justify-center" key={item.id}>
            <label className="text-right w-32 mr-3">{item.name}</label>

            <input
              type="text"
              name={`${item.rule_unique_key}-1`}
              value={pay[item.rule_unique_key]}
              onChange={handleChange}
              className="border-b border-dashed focus:outline-none text-black pl-1"
            />
          </div>
        ))}
      </>
    )
  }

  const generateRevenue = (rule: IRule[]) => {
    return (
      <>
        {rule.map((item) => (
          <div className="flex justify-center items-center" key={item.id}>
            <label className="text-right w-32 mr-3">{item.name}</label>
            <input
              type="text"
              name={`${item.rule_unique_key}-2`}
              value={revenue[item.rule_unique_key]}
              onChange={handleChange}
              className="border-b border-dashed focus:outline-none text-black pl-1"
            />
          </div>
        ))}
      </>
    )
  }

  if (rule.length === 0) {
    return <Loading />
  }
  return (
    <div className="bg-white text-orange-500 text-center">
      <p className="shadow shadow-gray-400 w-full py-1">{region}</p>
      <div className="sm:hidden shadow shadow-gray-400 w-full py-1 md:grid grid-cols-2">
        <span>Hệ số thu</span>
        <span>Hệ số trả</span>
      </div>
      <div className="sm:hidden shadow shadow-gray-400 w-full py-1 md:grid grid-cols-2">
        <div>{generatePay(rule)}</div>
        <div>{generateRevenue(rule)}</div>
      </div>
      <div className="md:hidden">
        <span>Hệ số thu</span>
        <div>{generatePay(rule)}</div>
        <span>Hệ số trả</span>
        <div>{generateRevenue(rule)}</div>
      </div>
    </div>
  )
}

export default FormInput
```

## File: src/contexts/DateContext.tsx
```typescript
import { DateContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface DateProviderProps {
  children: ReactNode
}

export const DateContext = React.createContext<DateContextType | undefined>(
  undefined
)

const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [date, setDate] = useState<Date | undefined>(undefined)

  const updateDate = (date: Date) => {
    setDate(date)
    //set sessionStorage
    sessionStorage.setItem('date', date.toISOString().split('T')[0])
  }

  useEffect(() => {
    const date = sessionStorage.getItem('date')
    if (date) {
      setDate(new Date(date))
    } else {
      setDate(new Date())
    }
  }, [])

  return (
    <DateContext.Provider value={{ date, updateDate }}>
      {children}
    </DateContext.Provider>
  )
}

export default DateProvider
```

## File: src/router.tsx
```typescript
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import { PATHS } from '@/utils/constants'
import Calender from './components/common/Calender'
import SlideBar from './components/common/SlideBar'
import FormAgency from './components/customer/FormCustomer'
import BetDetail from './pages/BetDetail'
import Customer from './pages/Customer'
import Login from './pages/Login'
import Radio from './pages/Radio'
import Result from './pages/Result'
import ResultCustomer from './pages/ResultCustomer'
import ResultLottery from './pages/ResultLottery'
import Setting from './pages/Setting'
import TypeLottery from './pages/TypeLottery'

export default function Router() {
  const Layout = () => {
    return (
      <div className="flex">
        <SlideBar />
        <div
          className="flex flex-col w-full
        transition-all duration-300
        md:ml-[240px]"
        >
          <Calender />
          <div className="p-3 pt-0 mt-12">
            <Outlet />
          </div>
        </div>
        <Toaster />
      </div>
    )
  }

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = sessionStorage.getItem('token')

    if (!token) {
      return <Navigate to="/login" replace />
    }

    return children
  }

  const routerElements = useRoutes([
    {
      path: PATHS.HOME,
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: PATHS.CAI_DAT_HE_THONG,
          element: <Setting />,
        },
        {
          path: PATHS.MIEN_BAC,
          element: <Result />,
        },
        {
          path: PATHS.MIEN_NAM,
          element: <Result />,
        },
        {
          path: PATHS.MIEN_TRUNG,
          element: <Result />,
        },

        {
          path: PATHS.TONG_KET_KHACH_HANG,
          element: <ResultCustomer />,
        },
        {
          path: PATHS.KET_QUA_SO_XO,
          element: <ResultLottery />,
        },
        {
          path: PATHS.LOAI_BAT_CUOC,
          element: <TypeLottery />,
        },
        {
          path: PATHS.DAI_SO_XO,
          element: <Radio />,
        },
        {
          path: PATHS.KHACH_HANG,
          element: <Customer />,
        },
        {
          path: PATHS.DAT_CUOC_CHI_TIET,
          element: <BetDetail />,
        },
        {
          path: PATHS.SPECIAL,
          element: <Result />,
        },
        {
          path: PATHS.FORM,
          element: <FormAgency />,
        },
      ],
    },
    {
      path: PATHS.LOGIN,
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  return routerElements
}
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?


.env
.cursor
documents
```

## File: src/components/common/Calender.tsx
```typescript
import { DateContext } from '@/contexts/DateContext'
import { DateContextType } from '@/utils/types'
import React, { useContext, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import { useLocation } from 'react-router-dom'

const Calender: React.FC = () => {
  const { date, updateDate } = useContext(DateContext) as DateContextType
  const [isDetail, setIsDetail] = React.useState(false)

  const { pathname, search } = useLocation()

  const handleNext = () => {
    updateDate(new Date(date?.setDate(date?.getDate() + 1) || ''))
  }
  const handlePrev = () => {
    updateDate(new Date(date?.setDate(date?.getDate() - 1) || ''))
  }
  useEffect(() => {
    if (pathname.includes('dat-cuoc')) {
      setIsDetail(true)
    } else if (search.includes('agency_id')) {
      setIsDetail(true)
    } else {
      setIsDetail(false)
    }
  }, [pathname, search])

  return (
    <div className="bg-main w-full py-1 pr-4 flex fixed z-40">
      <div className="flex items-center text-white gap-2 flex-1">
        <IoIosArrowBack className="cursor-pointer" onClick={handlePrev} />
        <SlCalender />
        <span style={{ userSelect: 'none' }}>
          {date?.toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </span>
        <IoIosArrowForward className="cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  )
}

export default Calender
```

## File: src/configs/apiCall.ts
```typescript
import { TResponseData, TResponseError } from '@/types/response'
import { API_URL } from '@/utils/constants'
import { autoLogout } from '@/utils/helper'
import { Method } from '@/utils/types'
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  ResponseType,
} from 'axios'

// Lấy API URL từ biến môi trường

export const axiosPublic = axios.create({
  baseURL: API_URL, // Đặt baseURL thành API_URL từ biến môi trường
  withCredentials: true,
})

axiosPublic.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    const accessToken = sessionStorage.getItem('token')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  function (e: AxiosError) {
    console.log(e)
  }
)

axiosPublic.interceptors.response.use(
  function (res: AxiosResponse<TResponseData>) {
    const { data } = res
    if (data.status == 401 || data.status === 401 || data.status === 509) {
      autoLogout()
      return Promise.reject(new Error('Unauthorized or Session Expired'))
    }
    return res
  },
  async function (e: AxiosError<TResponseError>) {
    const { response } = e
    if (response) {
      const {
        data: { message, code, detail },
        status,
      } = response
      if (code == 401 || status === 401 || status === 509) {
        autoLogout()
        return
      }

      return {
        data: {
          message,
          code,
          detail,
        },
      }
    }
    return {
      data: {
        message: 'Internal Server Error',
        code: 500,
      },
    }
  }
)

export const apiCaller = (
  method: Method,
  path: string,
  data?: unknown,
  params?: Record<string, unknown>,
  responseType: ResponseType = 'json'
) => {
  const config: AxiosRequestConfig = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    url: `${path}`,
    responseType,
    withCredentials: true,
  }

  if (params) {
    config.params = params
  }

  if (data) {
    config.data = data
  }
  return axiosPublic(config)
}

export default apiCaller
```

## File: src/pages/Customer.tsx
```typescript
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AgencyContext } from '@/contexts/AgencyContext'
import { AgencyContextType } from '@/utils/types'
import { useContext } from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Customer = () => {
  const { updateAgency, agencies } = useContext(
    AgencyContext
  ) as AgencyContextType

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-3 text-black border font-bold text-center">
              #
            </TableHead>

            <TableHead className="text-black border font-bold text-center">
              Khách
            </TableHead>

            <TableHead className="border w-3"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agencies
            .sort((a, b) =>
              a.name.localeCompare(b.name, 'en', { numeric: true })
            )
            .map((customer, index) => {
              const color = index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              return (
                <TableRow
                  key={index}
                  className={`${color} hover:bg-gray-200 cursor-pointer`}
                >
                  <TableCell className="text-center border">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-left border">
                    {customer.name}
                  </TableCell>
                  <TableCell
                    onClick={() => updateAgency(customer)}
                    className="text-right border"
                  >
                    <Link to={'form?agency_id=' + customer.id}>
                      <FaEdit />
                    </Link>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
      <div className="w-full flex justify-end mt-2">
        <Link
          to={'form'}
          className="bg-[#1ABB9C] border border-[#1ABB9C] text-white p-0 h-fit px-2 rounded-md"
        >
          <FaPlus className="inline" />
          Add
        </Link>
      </div>
    </>
  )
}

export default Customer
```

## File: src/pages/Login.tsx
```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import LOGO from '@/assets/images/logo-898.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { useToast } from '@/components/ui/use-toast'

import { authApi } from '@/apis'
import Loading from '@/components/common/Loading'
import { PATHS } from '@/utils/constants'
import { ILoginUser } from '@/utils/interface'
import { FormSubmit, InputChange } from '@/utils/types'
import { validationLogin } from '@/utils/validation/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

export default function Login() {
  const initialValues: ILoginUser = {
    username: '',
    password: '',
  }

  const { toast } = useToast()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<ILoginUser>(initialValues)
  const [togglePassword, setTogglePassword] = useState(false)

  const token = sessionStorage.getItem('token')

  const handleSubmit = async (e: FormSubmit) => {
    e.preventDefault()
    setLoading(true)
    try {
      //validation
      const error = validationLogin(values)
      if (error.size > 0) {
        error.forEach((value: string, key: string) => {
          toast({
            variant: 'destructive',
            title: 'Sai ' + key,
            description: value,
          })
        })
        setLoading(false)
        return
      }

      // Call API to login user
      const response = await authApi.Login(values.username, values.password)
      const { data, status } = response
      if (data.status === 404) {
        console.log(data)
        toast({
          variant: 'destructive',
          title: 'Tên đăng nhập hoặc mật khẩu không chính xác',
        })
        setLoading(false)

        return
      } else {
        sessionStorage.setItem('token', data.data.access_token)
        setValues(initialValues)

        toast({
          variant: 'success',
          title: 'Thành công',
        })
        window.location.href = PATHS.HOME

        setLoading(false)
      }
    } catch (error: any) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Thất bại',
      })
      setLoading(false)

      return
    }
  }

  const handleChange = (e: InputChange) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  if (token) {
    window.location.href = PATHS.HOME
  }

  return (
    <div className="h-screen flex pt-24 bg-black">
      <Toaster />

      {loading && <Loading />}
      <Card className="mx-auto max-w-sm bg-black border-none">
        <CardHeader className="space-y-1">
          <img src={LOGO} alt="logo" />
        </CardHeader>
        <CardContent>
          <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input
                id="name"
                type="text"
                placeholder="name"
                required
                name="username"
                className="bg-transparent focus:bg-white focus:text-black text-white"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex relative">
                <Input
                  id="password"
                  type={togglePassword ? 'text' : 'password'}
                  required
                  name="password"
                  className="bg-transparent focus:bg-white focus:text-black text-white"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="absolute top-1/2 right-2 -translate-y-1/2"
                >
                  {togglePassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-fit mx-auto bg-white text-black">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
```

## File: src/pages/ResultCustomer.tsx
```typescript
import { globalApi } from '@/apis'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { selectSearch } from '@/utils/data'
import { IAnalysis } from '@/utils/interface'
import { FormSubmit } from '@/utils/types'
import { SelectValue } from '@radix-ui/react-select'
import { useEffect, useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const ResultCustomer = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [type, setType] = useState(selectSearch[0])
  const [datas, setDatas] = useState<IAnalysis[]>([])

  const totalNorth = useMemo(() => {
    return datas.reduce((acc, val) => {
      const north = val.analytics_details.find(
        (item) => item.region_unique_key === 'north'
      )
      const result = (north?.actual || 0) - (north?.win || 0)
      return acc + result
    }, 0)
  }, [datas])

  const totalCentral = useMemo(() => {
    return datas.reduce((acc, val) => {
      const central = val.analytics_details.find(
        (item) => item.region_unique_key === 'central'
      )
      const result = (central?.actual || 0) - (central?.win || 0)
      return acc + result
    }, 0)
  }, [datas])

  const totalSouth = useMemo(() => {
    return datas.reduce((acc, val) => {
      const south = val.analytics_details.find(
        (item) => item.region_unique_key === 'south'
      )
      const result = (south?.actual || 0) - (south?.win || 0)
      return acc + result
    }, 0)
  }, [datas])

  const total = useMemo(() => {
    return totalNorth + totalCentral + totalSouth
  }, [totalNorth, totalCentral, totalSouth])

  const changeDate = (tab: number) => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay() + 1) // Monday of the current week

    const endOfWeek = new Date(today)

    const startOfLastWeek = new Date(startOfWeek)
    startOfLastWeek.setDate(startOfLastWeek.getDate() - 7) // Monday of the last week

    const endOfLastWeek = new Date(startOfLastWeek)
    endOfLastWeek.setDate(endOfLastWeek.getDate() + 6) // Sunday of the last week

    switch (tab) {
      case 1:
        setStartDate(today)
        setEndDate(today)
        break
      case 2:
        setStartDate(yesterday)
        setEndDate(yesterday)
        break
      case 3:
        setStartDate(startOfWeek)
        setEndDate(endOfWeek)
        break
      case 4:
        setStartDate(startOfLastWeek)
        setEndDate(endOfLastWeek)
        break
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await globalApi.GetCustomerResult(
        startDate.toISOString().split('T')[0],
        endDate.toISOString().split('T')[0]
      )
      const { data } = response

      if (data && data.data.length > 0) {
        setDatas(data.data)
      } else {
        setDatas([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e: FormSubmit) => {
    e.preventDefault()
    await getData()
  }

  return (
    <div>
      <h1 className="font-bold text-xs mb-2">
        Tổng kết từ ngày {startDate.toLocaleDateString()} đến ngày{' '}
        {endDate.toLocaleDateString()}
      </h1>

      <form className="flex text-xs" onSubmit={handleSubmit}>
        <input
          type="date"
          id="start"
          name="start"
          className="mr-2 border rounded-2xl px-3 py-0"
          value={startDate.toISOString().split('T')[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
        <input
          type="date"
          id="end"
          name="end"
          className="mr-2 border rounded-2xl px-3 py-0"
          value={endDate.toISOString().split('T')[0]}
          onChange={(e) => setEndDate(new Date(e.target.value))}
        />
        <Select
          value={type.value}
          onValueChange={(value) => {
            setType(
              selectSearch.find((item) => item.value === value) ||
                selectSearch[0]
            )
          }}
        >
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Select Notification Type" />
          </SelectTrigger>
          <SelectContent>
            {selectSearch.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button
          type="submit"
          className="bg-yellow-600 text-white rounded-2xl px-3 py-1 ml-2 flex items-center gap-1"
        >
          <FaSearch /> Tìm kiếm
        </button>
      </form>
      <div className="mt-2 mb-2">
        <button
          className="rounded-l-2xl text-xs bg-main px-2 py-1 text-white h-fit"
          onClick={() => changeDate(1)}
        >
          Hôm nay
        </button>
        <button
          className="text-xs bg-main px-2 py-1 text-white h-fit"
          onClick={() => changeDate(2)}
        >
          Hôm qua
        </button>
        <button
          className="text-xs bg-main px-2 py-1 text-white h-fit"
          onClick={() => changeDate(3)}
        >
          Tuần này
        </button>
        <button
          className="rounded-r-2xl text-xs bg-main px-2 py-1 text-white h-fit"
          onClick={() => changeDate(4)}
        >
          Tuần trước
        </button>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-xs bg-blue-500 px-2 py-1 text-white h-fit">Tổng</p>
          <p className="text-xs bg-green-500 px-2 py-1 text-white h-fit">
            Thực tế
          </p>
          <p className="text-xs bg-main px-2 py-1 text-white h-fit">Thắng</p>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-black font-bold text-center">
              #
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Tên khách
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Miền nam
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Miền trung
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Miền băc
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Tổng
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas
            .sort((a, b) =>
              a.agency_name.localeCompare(b.agency_name, 'en', {
                numeric: true,
              })
            )
            .map((customer, index) => {
              const color = index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              const north = customer.analytics_details.find(
                (item) => item.region_unique_key === 'north'
              )
              const central = customer.analytics_details.find(
                (item) => item.region_unique_key === 'central'
              )
              const south = customer.analytics_details.find(
                (item) => item.region_unique_key === 'south'
              )

              const totalRaw =
                (north?.total || 0) +
                (central?.total || 0) +
                (south?.total || 0)
              const totalActual =
                (north?.actual || 0) +
                (central?.actual || 0) +
                (south?.actual || 0)
              const totalWin =
                (north?.win || 0) + (central?.win || 0) + (south?.win || 0)

              return (
                <TableRow
                  key={index}
                  className={`${color} hover:bg-gray-200 cursor-default`}
                >
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-left">
                    {customer.agency_name}
                  </TableCell>
                  <TableCell className="text-right border-r font-bold">
                    {/* {customer.totalNorth} */}
                    <p className="text-blue-500">{north?.total.toFixed(1)}</p>
                    <p className="text-green-500">{north?.actual.toFixed(1)}</p>
                    <p className="text-main">{north?.win.toFixed(1)}</p>
                    <span className="text-xs">
                      (
                      {north?.actual || 0 - (north?.win || 0) >= 0
                        ? 'Lãi'
                        : 'Lỗ'}
                      )
                    </span>
                  </TableCell>
                  <TableCell className="text-right border-r font-bold">
                    <p className="text-blue-500">{central?.total.toFixed(1)}</p>
                    <p className="text-green-500">
                      {central?.actual.toFixed(1)}
                    </p>
                    <p className="text-main">{central?.win.toFixed(1)}</p>
                    <span className="text-xs">
                      (
                      {central?.actual || 0 - (central?.win || 0) >= 0
                        ? 'Lãi'
                        : 'Lỗ'}
                      )
                    </span>
                  </TableCell>

                  <TableCell className="text-right border-r font-bold">
                    {/* {customer.totalSouth} */}
                    <p className="text-blue-500">{south?.total.toFixed(1)}</p>
                    <p className="text-green-500">{south?.actual.toFixed(1)}</p>
                    <p className="text-main">{south?.win.toFixed(1)}</p>
                    <span className="text-xs">
                      (
                      {south?.actual || 0 - (south?.win || 0) >= 0
                        ? 'Lãi'
                        : 'Lỗ'}
                      )
                    </span>
                  </TableCell>

                  <TableCell className="text-right font-bold">
                    <p className="text-blue-500">{totalRaw.toFixed(1)}</p>
                    <p className="text-green-500">{totalActual.toFixed(1)}</p>
                    <p className="text-main">{totalWin.toFixed(1)}</p>
                    <span className="text-xs">
                      ({totalActual || 0 - (totalWin || 0) >= 0 ? 'Lãi' : 'Lỗ'})
                    </span>
                  </TableCell>
                </TableRow>
              )
            })}
          <TableRow
            className={` hover:bg-gray-200 cursor-default text-main font-bold`}
          >
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right border-r">
              {totalNorth.toFixed(1)} ({totalNorth >= 0 ? 'Lãi' : 'Lỗ'})
            </TableCell>
            <TableCell className="text-right border-r">
              {totalCentral.toFixed(1)} ({totalCentral >= 0 ? 'Lãi' : 'Lỗ'})
            </TableCell>
            <TableCell className="text-right border-r">
              {totalSouth.toFixed(1)} ({totalSouth >= 0 ? 'Lãi' : 'Lỗ'})
            </TableCell>
            <TableCell className="text-right">
              {total.toFixed(1)} ({total >= 0 ? 'Lãi' : 'Lỗ'})
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default ResultCustomer
```

## File: src/utils/interface.ts
```typescript
import { IBetType } from './types'

interface IBase {
  id?: number
  created_at: string
  updated_at?: string
  deleted_at?: string | null
}

export interface IUser extends IBase {
  username: string
  avatar: string
  phone: string
}

export interface ICreateUser {
  password: string
  name: string
}

export interface IUpdateUser extends ICreateUser {}

export interface IUpdateUser {
  username: string
  name: string
  phone: string
}

export interface ILoginUser {
  username: string
  password: string
}

export interface ICustomer extends IBase {
  key: string
  name: string
  pass?: string
  phone: string
  agency_name: string
}
export interface IBet extends IBase {
  cities: string[]
  raw_messages: string[]
  message: string
  name: string
  coefficient: number
  agency_id: number
  bet_correct: string[]
  region: string
  details: IBetDetail[]
}
export interface IBetDetail {
  type: IBetType
  point: number
  key: string
}

export interface IAnalysis extends IAgency {
  analytics_details: Analysis[]
}

export interface IAgency extends IBase {
  agency_name: string
  key?: string
  agency_pay: AgencyElement[]
  agency_revenue: AgencyElement[]
  name: string
  password: string
  phone: string
}

export interface Analysis {
  region_unique_key: string
  total: number
  actual: number
  win: number
}

export interface AgencyElement {
  coefficient: number
  region_id: number
  rule_id: number
}
export interface IRegion {
  id: number
  name: string
  region_unique_key: string
}

export interface ICoefficient {
  [key: string]: string
}

export interface ICoefficientAgency {
  coefficient: number
  region_unique_key: string
  rule_unique_key: string
}

export interface ISetting {
  font_size: number
  data_store_day: number
  show_bet_score: number
}

export interface IUpdatePassword {
  old_password: string
  new_password: string
  confirm_password: string
}

export interface IRule {
  id: number
  name: string
  default_acronym: string
  rule_unique_key: string
}

export interface IProvince {
  province_id: number
  acronym: string
  province_name: string
  region_id: number
  region_name: string
}

export interface IRuleAcronym {
  acronym: string
  rule_name: string
  rule_id: number
}

export interface IBetResult {
  agency: IAgency
  is_have_bet_south?: boolean
  is_have_bet_north?: boolean
  is_have_bet_central?: boolean
}

export interface IBetResultDetail {
  agency: IAgency
  bet_detail: IBetResultDetailInner[]
}

export interface IBetResultDetailInner {
  bets: IBetRaw[]
  statistic: IBetStatistic[]
  win: IBetWin[]
  province_acronym: IProvinceAcronym[]
}
// province_acronym
export interface IProvinceAcronym {
  name: string
  acronym: string
}

export interface IBetStatistic {
  id: number
  bet_id: number
  rule_id: string
  score: number
  money_bet: number
  actual_money_received: number
  created_at: Date
  updated_at: Date
  deleted_at: null
}

export interface IStatistic {
  rule: string
  score: number
  money: number
}

export interface IBetRaw {
  id: number
  open_date: Date
  agency_id: number
  region_unique_key: string
  bets: string[]
  created_at: Date
  updated_at: Date
  deleted_at: null
}
export interface IBetWin {
  id: number
  bet_id: number
  bet_win: string
  score: number
  money_win: number
  rule_unique_key: string
  created_at: Date
  updated_at: Date
  deleted_at: null
}
```

## File: src/pages/Home.tsx
```typescript
import { betApi, globalApi } from '@/apis'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { AgencyContext } from '@/contexts/AgencyContext'
import { DateContext } from '@/contexts/DateContext'
import { IBetResult } from '@/utils/interface'
import { AgencyContextType, DateContextType } from '@/utils/types'
import React, { useContext, useEffect } from 'react'
import { FaCogs } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  const { updateAgency } = useContext(AgencyContext) as AgencyContextType

  const [betResult, setBetResult] = React.useState<IBetResult[]>([])

  const { date } = useContext(DateContext) as DateContextType

  const getBet = async () => {
    try {
      if (!date) {
        return
      }
      const response = await betApi.GetBets({
        open_date: date.toISOString().split('T')[0],
      })
      const { data } = response
      if (data && data.data !== null) {
        setBetResult(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickGetLotteryResult = async (region: string) => {
    try {
      if (!date) {
        return
      }
      const response = await globalApi.GetLotteryResult({
        date: date.toISOString().split('T')[0],
        region: region,
      })
      const { data } = response
      if (data.message == 'error') {
        toast({
          variant: 'destructive',
          title: data.data,
        })
      } else {
        toast({
          variant: 'success',
          title: 'Lấy kết quả thành công',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBet()
  }, [date])

  return (
    <React.Fragment>
      <div className="flex justify-between items-center mb-1">
        <Link className="bg-[#d9534f] text-white p-2 rounded" to={''}>
          Thống kê số cược
        </Link>
        <div className="space-x-2">
          <Button
            className="bg-submain text-white px-2 h-fit rounded-lg"
            onClick={() => {
              handleClickGetLotteryResult('south')
            }}
          >
            <FaCogs className="mr-1" />
            Dò MN
          </Button>
          <Button
            className="bg-submain text-white px-2 h-fit rounded-lg"
            onClick={() => {
              handleClickGetLotteryResult('central')
            }}
          >
            <FaCogs className="mr-1" />
            Dò MT
          </Button>
          <Button
            className="bg-submain text-white px-2 h-fit rounded-lg"
            onClick={() => {
              handleClickGetLotteryResult('north')
            }}
          >
            <FaCogs className="mr-1" />
            Dò MB
          </Button>
        </div>
      </div>
      <div>
        {betResult
          .sort((a, b) =>
            a.agency.name.localeCompare(b.agency.name, 'en', {
              numeric: true,
            })
          )
          .map((bet, index) => {
            // const isActive = bet.id! % 2 === 0 ? 'bg-main' : 'bg-disable'
            // const isDisable = bet.id! % 2 === 0 ? true : false
            const agency = bet.agency
            return (
              <div
                key={index}
                className="font-bold border-t-[3px] border-black p-2 flex justify-between items-start"
              >
                <div>
                  <h3>{agency.name}</h3>
                  {/* <span className="text-blue-600">{bet.key}</span> */}
                </div>
                <div>
                  <Link
                    to={`/mien-bac?agency_id=${agency.id}`}
                    onClick={() => updateAgency(agency)}
                    className={`${
                      bet.is_have_bet_north ? 'bg-main' : 'bg-disable'
                    } ${
                      !bet.is_have_bet_north ? 'cursor-default' : ''
                    } cursor-pointer p-[12px_5px] float-right m-[1px_4px_4px_4px] rounded-full text-[6px] h-8 w-8 text-white text-center leading-[8px] shadow-md shadow-black`}
                  >
                    Bắc
                    <span className="block">1</span>
                  </Link>
                  <Link
                    to={`/mien-trung?agency_id=${agency.id}`}
                    onClick={() => updateAgency(agency)}
                    className={`${
                      bet.is_have_bet_central ? 'bg-main' : 'bg-disable'
                    } ${
                      !bet.is_have_bet_central ? 'cursor-default' : ''
                    } cursor-pointer p-[12px_5px] float-right m-[1px_4px_4px_4px] rounded-full text-[6px] h-8 w-8 text-white text-center leading-[8px] shadow-md shadow-black`}
                  >
                    Trung
                    <span className="block">1</span>
                  </Link>

                  <Link
                    to={`/mien-nam?agency_id=${agency.id}`}
                    onClick={() => updateAgency(agency)}
                    className={`${
                      bet.is_have_bet_south ? 'bg-main' : 'bg-disable'
                    } cursor-pointer p-[12px_5px] float-right m-[1px_4px_4px_4px] rounded-full text-[6px] h-8 w-8 text-white text-center leading-[8px] shadow-md shadow-black`}
                  >
                    Nam
                    <span className="block">1</span>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </React.Fragment>
  )
}

export default Home
```

## File: src/utils/string.ts
```typescript
import { SettingContext } from '@/contexts/SettingContext'
import { useContext } from 'react'
import {
  IBet,
  IBetStatistic,
  IBetWin,
  IProvince,
  IProvinceAcronym,
  IRule,
  IRuleAcronym,
  IStatistic,
} from './interface'
import { SettingContextType } from './types'

export const parseDateString = (dateString: string) => {
  if (!dateString) return
  const [year, month, day] = dateString.split('T')[0].split('-')
  return `${month}/${day}/${year}`
}

export const cleanErrorMessage = (error: string) => {
  const matchResult = error.match(/Detail: (.*)$/)
  return matchResult ? matchResult[1] : null
}

export const highlightError = (
  field: string,
  formErrors: Map<string, string>[]
) => {
  return formErrors.some((error) => error.has(field)) ? 'border-red-500' : ''
}

export const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0].split('-').reverse().join('/')
}
// format beautiful name: xxx xxx xx -> Nguyen Van A
export const formatName = (name: string) => {
  return (
    name &&
    name
      .replace(/_/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )
}

// get full name from first name and last name
export const getFullName = (firstName: string, lastName: string) => {
  return formatName(`${firstName} ${lastName}`)
}

export const totalPoints = (data: IBet[]) => {
  const pointsByTypeAndKey = data.reduce((acc, item) => {
    item.details.forEach((detail) => {
      const key = `${detail.type}-${detail.key}`
      if (!acc[key]) {
        acc[key] = 0
      }
      acc[key] += detail.point
    })
    return acc
  }, {} as Record<string, number>)

  const result = Object.entries(pointsByTypeAndKey).map(
    ([key, totalPoints]) => {
      const [type, keyName] = key.split('-')
      return { type: Number(type), key: keyName, totalPoints }
    }
  )

  return result
}

export const isWin = (point2: number, point3: number): boolean => {
  return point2 - point3 >= 0
}

export const getCity = (city: string): string => {
  const { provinces } = useContext(SettingContext) as SettingContextType
  const province = provinces.find((province) => province.acronym === city)
  return province ? province.province_name : ''
}

export const transferBet = (provinces: IProvince[], bet: string) => {
  const acronyms = provinces.map((p) => p.acronym).concat('2dai', '3dai')
  let result = []
  let temp = ''
  const tokens = bet.split(/\s+/)
  tokens.forEach((word) => {
    if (acronyms.includes(word.toLowerCase())) {
      if (!temp) {
        // Nếu temp rỗng, bắt đầu với từ đầu tiên
        temp = word
      } else {
        // Tách temp thành các token để kiểm tra
        const tempTokens = temp.trim().split(/\s+/)
        const allAcronyms = tempTokens.every((t) =>
          acronyms.includes(t.toLowerCase())
        )
        if (allAcronyms) {
          // Nếu temp chỉ chứa các tỉnh, nối thêm word
          temp += ' ' + word
        } else {
          // Nếu temp đã chứa số hay chữ khác, đóng nhóm hiện tại và bắt đầu nhóm mới
          result.push(temp.trim())
          temp = word
        }
      }
    } else {
      temp += ' ' + word
    }
  })
  if (temp) result.push(temp.trim())

  return result.filter((item) => acronyms.includes(item.split(' ')[0]))
}

export const checkProvince = (
  provinces: IProvinceAcronym[],
  bet: string,
  rules: IRuleAcronym[]
) => {
  const acronyms = provinces.map((p) => p.acronym)

  const numberOfProvinces = provinces.length
  const additionalAcronyms =
    numberOfProvinces > 1
      ? Array.from({ length: numberOfProvinces - 1 }, (_, i) => `${i + 2}dai`)
      : []
  acronyms.push(...additionalAcronyms)

  const provincesFromBet = getProvincesFromBet(bet, rules)
  return provincesFromBet.filter((item) => !acronyms.includes(item))
}

export const getProvincesFromBet = (bet: string, rules: IRuleAcronym[]) => {
  const extractedProvinces: string[] = []
  const words = bet.split(/\s+/).map((word) => word.toLowerCase().trim())

  const ruleSet = new Set(rules.map((r) => r.acronym.toLowerCase().trim()))

  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i]
    const nextWord = words[i + 1]

    // Nếu từ hiện tại là số+n
    if (/^\d+(\.\d+)?n$/.test(currentWord)) {
      // Nếu từ tiếp theo không phải rule và không phải số thì đó là tỉnh
      if (!ruleSet.has(nextWord) && !/^\d+$/.test(nextWord)) {
        extractedProvinces.push(nextWord)
      }
    }
  }

  return [words[0], ...extractedProvinces]
}

export const extractRulesFromBet = (bet: string) => {
  const extractedRules: string[] = []
  const words = bet.split(/\s+/)

  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i].trim().toLowerCase()
    const nextWord = words[i + 1].trim().toLowerCase()
    if (/^\d+(\.\d+)?n$/.test(nextWord)) {
      extractedRules.push(word)
    }
  }

  return extractedRules
}

export const checkRule = (rule: IRuleAcronym[], bet: string) => {
  const rules = new Set(rule.map((r) => r.acronym.toLowerCase().trim()))
  const extractedRules = extractRulesFromBet(bet)
  return extractedRules.filter((r) => !rules.has(r))
}
export const calculateStatistic = (
  rules: IRule[],
  statisticRaw?: IBetStatistic[]
): IStatistic[] =>
  (rules || []).map((rule) => {
    const matchedItems = statisticRaw?.filter(
      (item) => item.rule_id === rule.rule_unique_key
    )

    const totalScore =
      matchedItems?.reduce((sum, item) => sum + item.score, 0) || 0

    const totalMoney =
      matchedItems?.reduce((sum, item) => sum + item.money_bet, 0) || 0

    return {
      rule: rule.rule_unique_key,
      score: totalScore,
      money: totalMoney,
    }
  })
export const createEmptyStatistic = (rules: IRule[]): IStatistic[] =>
  (rules || []).map((rule) => ({
    rule: rule.rule_unique_key,
    score: 0,
    money: 0,
  }))

// actual_money_received
export const calculateStatisticReceived = (
  rules: IRule[],
  statisticRaw?: IBetStatistic[]
): IStatistic[] =>
  (rules || []).map((rule) => {
    const matchedItem = statisticRaw?.find(
      (item) => item.rule_id === rule.rule_unique_key
    )

    return {
      rule: rule.rule_unique_key,
      score: 0,
      money: matchedItem?.actual_money_received || 0,
    }
  })

export const calculateStatisticMatched = (
  rules: IRule[],
  statisticRaw?: IBetWin[]
): IStatistic[] =>
  (rules || []).map((rule) => {
    const matchedItems = statisticRaw?.filter(
      (item) => item.rule_unique_key === rule.rule_unique_key
    )

    const totalScore =
      matchedItems?.reduce((sum, item) => sum + item.score, 0) || 0

    const totalMoney =
      matchedItems?.reduce((sum, item) => sum + item.money_win, 0) || 0

    return {
      rule: rule.rule_unique_key,
      score: totalScore,
      money: totalMoney,
    }
  })
```

## File: src/pages/Result.tsx
```typescript
/* eslint-disable react-hooks/exhaustive-deps */
import { agencyApi, betApi, globalApi } from '@/apis'
import BetDetailComp from '@/components/bet/BetDetail'
import { Button } from '@/components/ui/button'
import { DateContext } from '@/contexts/DateContext'
import { RegionContext } from '@/contexts/RegionContext'
import { ID_NEGATIVE, PATHS } from '@/utils/constants'
// import { bet } from '@/utils/data'
import {
  IAgency,
  IBetResultDetail,
  IBetResultDetailInner,
  IBetStatistic,
  IRule,
  IStatistic,
} from '@/utils/interface'
import {
  calculateStatistic,
  calculateStatisticMatched,
  calculateStatisticReceived,
  totalPoints,
} from '@/utils/string'
import { DateContextType, RegionContextType } from '@/utils/types'
import React, { useContext, useEffect, useMemo } from 'react'
import { FaCogs, FaPlus } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

const Result = () => {
  const [tab, setTab] = React.useState('KHÁCH')
  const [tab2, setTab2] = React.useState('Điểm')
  const [datas, setDatas] = React.useState<IBetResultDetail[]>([])
  const [data, setData] = React.useState<IBetResultDetailInner | null>(null)
  const navigate = useNavigate()
  const { region } = useContext(RegionContext) as RegionContextType
  const { date } = useContext(DateContext) as DateContextType
  const { search, pathname } = useLocation()
  const [isNew, setIsNew] = React.useState(false)

  const [pointRaw, setPointRaw] = React.useState<IStatistic[]>([])
  const [pointMiddle, setPointMiddle] = React.useState<IStatistic[]>([])
  const [pointMatched, setPointMatched] = React.useState<IStatistic[]>([])
  const [agency, setAgency] = React.useState<IAgency | null>(null)
  const [agency_id, setAgency_id] = React.useState<string>('')
  const [rules, setRules] = React.useState<IRule[]>([])

  const getRules = async () => {
    try {
      const response = await globalApi.GetAllRule()
      if (response) {
        const { data } = response
        if (data.data) {
          setRules(response.data.data)
        } else {
          setRules([])
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getData = async () => {
    try {
      let agency_id
      if (search) {
        agency_id = search.split('=')[1]
        setAgency_id(agency_id)
      }
      let region_unique_key
      if (pathname === PATHS.MIEN_BAC) {
        region_unique_key = 'north'
      } else if (pathname === PATHS.MIEN_TRUNG) {
        region_unique_key = 'central'
      } else if (pathname === PATHS.MIEN_NAM) {
        region_unique_key = 'south'
      }
      if (!date) {
        return
      }
      const response = await betApi.GetBets({
        open_date: date?.toISOString().split('T')[0] || '',
        region_unique_key: region_unique_key,
        agency_id,
      })

      if (response) {
        setDatas([])
        const data = response.data.data as IBetResultDetail[]
        if (
          response.data === null ||
          data === null ||
          (data !== null &&
            Array.isArray(response.data.data) &&
            data.every((item: IBetResultDetail) => item.bet_detail === null))
        ) {
          setIsNew(true)
          setAgency(null)
          setData(null)
        } else {
          if (search) {
            if (Array.isArray(response.data.data)) {
              setData({
                bets: [],
                province_acronym: response.data.data,
                statistic: [],
                win: [],
              })
              setIsNew(true)
            } else {
              setData(response.data.data)
            }
            const responseAgency = await agencyApi.GetAgency(
              search.split('=')[1]
            )
            if (responseAgency) {
              const { data } = responseAgency
              if (data) {
                setAgency(data.data)
              }
            }
          } else {
            setDatas(data)
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRules()
  }, [])

  useEffect(() => {
    getData()
  }, [date])
  console.log(datas)

  useEffect(() => {
    if (datas.length === 0) {
      return
    }
    const statisticRaw = (datas || []).flatMap((item) => {
      if (!item.bet_detail) {
        return []
      }
      return (item.bet_detail || []).flatMap((detail) => {
        return detail.statistic ? detail.statistic : []
      })
    })

    const flattenedRaw = statisticRaw.filter((val) => val !== undefined).flat()

    const statisticFilled = calculateStatistic(
      rules,
      flattenedRaw as unknown as IBetStatistic[]
    )
    setPointRaw(statisticFilled)

    const statisticReceived = calculateStatisticReceived(rules, flattenedRaw)
    setPointMiddle(statisticReceived)

    const statisticWin = data?.win || []

    const statisticMatched = calculateStatisticMatched(rules, statisticWin)
    setPointMatched(statisticMatched)
  }, [datas, rules])

  useEffect(() => {
    const statisticRaw = data?.statistic || []
    const flattenedRaw = statisticRaw.flat()
    const statisticFilled = calculateStatistic(rules, flattenedRaw)
    setPointRaw(statisticFilled)
    const statisticReceived = calculateStatisticReceived(rules, flattenedRaw)
    setPointMiddle(statisticReceived)
    const statisticWin = data?.win || []

    const statisticMatched = calculateStatisticMatched(rules, statisticWin)
    setPointMatched(statisticMatched)
  }, [data, rules])

  const point = totalPoints([])

  const [point1, point2, point3] = point.reduce(
    (acc, val) => {
      if (val.type === 0) {
        acc[0] += val.totalPoints
      } else if (val.type === 1) {
        acc[1] += val.totalPoints
      } else {
        acc[2] += val.totalPoints
      }
      return acc
    },
    [0, 0, 0]
  )

  const finalResult = useMemo(() => {
    return point2 - point3
  }, [point2, point3])

  const reload = () => {
    window.location.reload()
  }

  const getNameRegion = (regin: string) => {
    if (regin === 'north') {
      return 'Miền bắc'
    } else if (regin === 'central') {
      return 'Miền Trung'
    } else if (regin === 'south') {
      return 'Miền Nam'
    }
  }
  return (
    <React.Fragment>
      <div className="flex justify-between items-center mb-1">
        <div className="space-x-2">
          {['KHÁCH', 'CHỦ'].map((item) => (
            <Button
              key={item}
              className={` text-white px-2 h-fit rounded-lg ${
                tab === item ? 'bg-blue-500' : 'bg-disable'
              }`}
              onClick={() => setTab(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <Button
          onClick={reload}
          className="bg-submain text-white px-2 h-fit rounded-lg"
        >
          <FaCogs className="mr-1" />
          Dò lại hết tin
        </Button>
      </div>
      <div className="bg-blue-500 pb-3 pt-1 pl-1 grid grid-cols-3 text-white">
        <div>
          <button
            className={`rounded-l-2xl text-xs ${
              tab2 === 'Điểm' ? 'bg-main' : 'bg-disable'
            } px-2 h-fit`}
            onClick={() => setTab2('Điểm')}
          >
            Điểm
          </button>
          <button
            className={`rounded-r-2xl text-xs ${
              tab2 === 'Xác' ? 'bg-main' : 'bg-disable'
            } px-2 h-fit`}
            onClick={() => setTab2('Xác')}
          >
            Xác
          </button>
        </div>
        <h3> Qua cò</h3>
        <h3>Trúng</h3>
      </div>
      <div className="py-1 pl-1 grid grid-cols-3 text-main">
        <div>
          {pointRaw.map((val, index) => (
            <div key={index} className="flex font-bold text-xs">
              <span className="w-12">{val.rule}</span>
              <span>: {tab2 === 'Điểm' ? val.score : val.money}</span>
            </div>
          ))}
        </div>
        <div>
          {pointMiddle.map((val, index) => (
            <div key={index} className="flex font-bold text-xs">
              <span className="w-12">{val.rule}</span>
              <span>: {val.score}</span>
            </div>
          ))}
        </div>
        <div>
          {pointMatched.map((val, index) => (
            <div key={index} className="flex font-bold text-xs">
              <span className="w-12">{val.rule}</span>
              <span>: {val.score}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`bg-blue-500 py-2 pl-1 text-xs text-white font-bold grid grid-cols-3 border-b border-dashed ${
          finalResult >= 0 ? 'border-black' : 'border-main'
        }`}
      >
        <span className="pl-8">
          :{pointRaw.reduce((acc, val) => acc + val.score, 0).toFixed(1)}
        </span>
        <span className="pl-8">
          :{pointMiddle.reduce((acc, val) => acc + val.money, 0).toFixed(1)}
        </span>
        <span className="pl-8">
          :{pointMatched.reduce((acc, val) => acc + val.score, 0).toFixed(1)}
        </span>
      </div>
      <p
        className={`bg-blue-500 py-2 pl-1 text-xs font-bold grid grid-cols-3 ${
          finalResult >= 0 ? 'text-black' : 'text-main'
        }`}
      >
        {getNameRegion(region)}: Cò - Trúng = {Math.abs(finalResult)} (
        {finalResult >= 0 ? 'Lỗ' : 'Lời'})
      </p>
      <div>
        {datas.length > 0 &&
          datas
            .filter((item) => item.bet_detail !== null)
            .map((item, outerIndex) => {
              return (
                <React.Fragment key={outerIndex}>
                  {item.bet_detail.map((item2, innerIndex) => {
                    const statisticRaw = item2?.statistic || []
                    const flattenedRaw = statisticRaw.flat()
                    const statisticFilled = calculateStatistic(
                      rules,
                      flattenedRaw
                    )

                    const statisticReceived = calculateStatisticReceived(
                      rules,
                      flattenedRaw
                    )
                    const statisticWin = item2?.win || []

                    const statisticMatched = calculateStatisticMatched(
                      rules,
                      statisticWin
                    )
                    return (
                      <div key={`${outerIndex}-${innerIndex}`}>
                        <BetDetailComp
                          agency={item.agency}
                          item={item2}
                          index={innerIndex}
                          pointRaw={statisticFilled}
                          pointMiddle={statisticReceived}
                          pointMatched={statisticMatched}
                        />
                      </div>
                    )
                  })}
                </React.Fragment>
              )
            })}
        {data?.bets.length! > 0 && agency && (
          <BetDetailComp
            agency={agency}
            item={data!}
            index={0}
            pointRaw={pointRaw}
            pointMiddle={pointMiddle}
            pointMatched={pointMatched}
          />
        )}
      </div>
      {agency_id && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() =>
              navigate('dat-cuoc/' + ID_NEGATIVE + `?agency_id=${agency_id}`)
            }
            className="bg-submain px-2 h-8 w-8 text-white rounded-full flex justify-center items-center"
          >
            <FaPlus />
          </button>
        </div>
      )}
    </React.Fragment>
  )
}

export default Result
```

## File: src/components/bet/BetDetail.tsx
```typescript
/* eslint-disable react-hooks/exhaustive-deps */
import { DateContext } from '@/contexts/DateContext'
import { ID_NEGATIVE } from '@/utils/constants'
import { IAgency, IBetResultDetailInner, IStatistic } from '@/utils/interface'
import { DateContextType } from '@/utils/types'
import React, { useContext, useEffect } from 'react'
import { MdEdit } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'
interface BetDetailProps {
  item: IBetResultDetailInner
  agency?: IAgency
  index: number
  pointRaw: IStatistic[]
  pointMiddle: IStatistic[]
  pointMatched: IStatistic[]
}

const BetDetailComp = ({
  item,
  agency,
  index,
  pointMatched,
  pointMiddle,
  pointRaw,
}: BetDetailProps) => {
  const bet_id =
    item !== null ? (item.bets.length > 0 ? item.bets[0].id : null) : null
  const [tab2, setTab2] = React.useState('Điểm')

  const [toggleOwn, setToggleOwn] = React.useState(false) //show money of own or customer

  const [isNew, setIsNew] = React.useState(false)
  const location = useLocation()
  const { date } = useContext(DateContext) as DateContextType

  const [finalResult, setFinalResult] = React.useState<number>(0)
  useEffect(() => {
    const idNegative = location.pathname.split('/').pop()
    if (idNegative && parseInt(idNegative) === ID_NEGATIVE) {
      setIsNew(true)
    }
  }, [])

  useEffect(() => {
    const allPoint2 = pointMatched.reduce((acc, val) => acc + val.money, 0)
    const allPoint3 = pointMiddle.reduce((acc, val) => acc + val.money, 0)

    setFinalResult(allPoint2 - allPoint3)
  }, [pointMiddle, pointMatched])

  if (item === null) {
    return <div>No data</div>
  }

  return (
    <div className={`text-xs pb-2 `}>
      {!isNew && (
        <>
          <div className="font-bold pb-2 pt-1 border-b flex justify-between items-center">
            {!location.pathname.includes('dat-cuoc') && (
              <h1 className="">
                {agency?.name} [
                {date
                  ?.toISOString()
                  .split('T')[0]
                  .split('-')
                  .reverse()
                  .join('-')}
                ]
              </h1>
            )}
            {item.bets &&
              item.bets.length > 0 &&
              !location.pathname.includes('dat-cuoc') && (
                <Link
                  to={`dat-cuoc/${bet_id}?agency_id=${agency?.id}`}
                  className="border border-white shadow-xl shadow-gray-700 rounded-lg p-1 px-2 bg-main text-white"
                >
                  <MdEdit />
                </Link>
              )}
          </div>

          {!location.pathname.includes('dat-cuoc') && (
            <p>
              <span className="text-blue-500 font-bold">{index + 1}) </span>
              {item !== null
                ? item.bets.length > 0
                  ? item.bets[0].bets.join(' ')
                  : ''
                : ''}
            </p>
          )}
        </>
      )}
      <div className="bg-blue-500 pb-3 pt-2 pl-1 grid grid-cols-3 text-white">
        <div>
          <button
            className={`rounded-l-2xl text-xs ${
              tab2 === 'Điểm' ? 'bg-main' : 'bg-disable'
            } px-2 h-fit`}
            onClick={() => setTab2('Điểm')}
          >
            Điểm
          </button>
          <button
            className={`rounded-r-2xl text-xs ${
              tab2 === 'Xác' ? 'bg-main' : 'bg-disable'
            } px-2 h-fit`}
            onClick={() => setTab2('Xác')}
          >
            Xác
          </button>
        </div>
        <h3> Qua cò</h3>
        <h3>Trúng</h3>
      </div>

      {pointRaw?.length! > 0 &&
        pointMiddle?.length! > 0 &&
        pointMatched?.length! > 0 && (
          <div className="py-1 pl-1 grid grid-cols-3 text-main">
            <div>
              {pointRaw?.map((val, index) => (
                <div key={index} className="flex font-bold text-xs">
                  <span className="w-12">{val.rule}</span>
                  <span>
                    :{' '}
                    {tab2 === 'Điểm'
                      ? val.score.toFixed(1)
                      : val.money.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
            <div>
              {pointMiddle?.map((val, index) => (
                <div key={index} className="flex font-bold text-xs">
                  <span className="w-12">{val.rule}</span>
                  <span>: {val.money.toFixed(1)}</span>
                </div>
              ))}
            </div>
            <div>
              {pointMatched?.map((val, index) => (
                <div key={index} className="flex font-bold text-xs">
                  <span className="w-12">{val.rule}</span>
                  <span>
                    :{' '}
                    {tab2 === 'Điểm'
                      ? val.score.toFixed(1)
                      : val.money.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      <div className="py-1 pl-1 grid grid-cols-3 bg-blue-600 text-white text-lg">
        <strong className="ml-12">
          : {pointRaw.reduce((acc, val) => acc + val.money, 0).toFixed(1)}
        </strong>
        <strong className="ml-12">
          : {pointMiddle.reduce((acc, val) => acc + val.money, 0).toFixed(1)}
        </strong>
        <strong className="ml-12">
          : {pointMatched.reduce((acc, val) => acc + val.money, 0).toFixed(1)}
        </strong>
      </div>

      {!isNew && (
        <div className="flex justify-between items-center">
          <h1>
            Ngày dò:{' '}
            {date?.toISOString().split('T')[0].split('-').reverse().join('-')}
          </h1>
        </div>
      )}
      {index !== -1 && (
        <div
          className={`py-2 pl-1 text-xs text-black items-center font-bold flex justify-between border-dashed border-t ${
            finalResult >= 0 ? 'border-black' : 'border-main'
          }`}
        >
          <span
            className={`${
              finalResult >= 0 ? 'text-black' : 'text-main'
            } text-lg`}
          >
            {Math.abs(finalResult)} ({finalResult >= 0 ? 'Lỗ' : 'Lời'})
          </span>
          <TbLogout
            className="text-main text-xl cursor-pointer"
            onClick={() => setToggleOwn(!toggleOwn)}
          />
        </div>
      )}
    </div>
  )
}

export default BetDetailComp
```

## File: src/components/customer/FormCustomer.tsx
```typescript
import { agencyApi, globalApi } from "@/apis";

import { GlobalContext } from "@/contexts/GlobalContext";
import {
  IAgency,
  ICoefficient,
  ICoefficientAgency,
  IRule,
} from "@/utils/interface";
import { FormSubmit, GlobalContextType, InputChange } from "@/utils/types";
import { useContext, useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Loading from "../common/Loading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import FormInput from "./FormInput";
import { DEFAULT_DRAFT_AGENCY_ID, PATHS } from "@/utils/constants";

const FormAgency = () => {
  const { central, north, south } = useContext(
    GlobalContext
  ) as GlobalContextType;
  const initState: IAgency = {
    key: "",
    name: "",
    password: "",
    phone: "",
    created_at: new Date().toISOString().split("T")[0],
    agency_name: "",
    agency_pay: [],
    agency_revenue: [],
  };

  const [paySouth, setPaySouth] = useState<ICoefficient>({});
  const [payMiddle, setPayMiddle] = useState<ICoefficient>({});
  const [payNorth, setPayNorth] = useState<ICoefficient>({});

  const [revenueSouth, setRevenueSouth] = useState<ICoefficient>({});
  const [revenueMiddle, setRevenueMiddle] = useState<ICoefficient>({});
  const [revenueNorth, setRevenueNorth] = useState<ICoefficient>({});
  const [rule, setRule] = useState<IRule[]>([]);

  const getRule = async () => {
    try {
      const response = await globalApi.GetAllRule();
      const { data } = response;
      if (data) {
        setRule(data.data);
        const obj: ICoefficient = {};
        data.data.map((item: IRule) => {
          obj[item.rule_unique_key] = "0";
        });
        setPaySouth(obj);
        setPayMiddle(obj);
        setPayNorth(obj);
        setRevenueSouth(obj);
        setRevenueMiddle(obj);
        setRevenueNorth(obj);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRule();
  }, []);

  const { search } = useLocation();
  const { toast } = useToast();

  // const { agency } = useContext(AgencyContext) as AgencyContextType
  const [agencyCreate, setAgencyCreate] = useState<IAgency>(initState);
  const [loading, setLoading] = useState(false);

  const getDetail = async (id: string) => {
    const response = await agencyApi.GetAgency(id);
    const { data } = response;
    if (data && data.data) {
      setAgencyCreate(data.data);

      //set coefficient
      const objSouth: ICoefficient = {};
      const objMiddle: ICoefficient = {};
      const objNorth: ICoefficient = {};

      data.data.agency_pays.map((item: any) => {
        if (item.region_id === 3) {
          objSouth[item.Rule.rule_unique_key] = item.coefficient;
        }
        if (item.region_id === 2) {
          objMiddle[item.Rule.rule_unique_key] = item.coefficient;
        }
        if (item.region_id === 1) {
          objNorth[item.Rule.rule_unique_key] = item.coefficient;
        }
      });

      const objRevenueSouth: ICoefficient = {};
      const objRevenueMiddle: ICoefficient = {};
      const objRevenueNorth: ICoefficient = {};

      data.data.agency_revenues.map((item: any) => {
        if (item.region_id === 3) {
          objRevenueSouth[item.Rule.rule_unique_key] = item.coefficient;
        }
        if (item.region_id === 2) {
          objRevenueMiddle[item.Rule.rule_unique_key] = item.coefficient;
        }
        if (item.region_id === 1) {
          objRevenueNorth[item.Rule.rule_unique_key] = item.coefficient;
        }
      });

      setPaySouth(objSouth);
      setPayMiddle(objMiddle);
      setPayNorth(objNorth);
      setRevenueSouth(objRevenueSouth);
      setRevenueMiddle(objRevenueMiddle);
      setRevenueNorth(objRevenueNorth);
    }
  };

  useEffect(() => {
    if (search.includes("agency_id")) {
      const agencyId = search.split("=")[1];
      if (agencyId) {
        // setAgencyCreate(agency)
        getDetail(agencyId);
      }
    } else {
      getDetail(DEFAULT_DRAFT_AGENCY_ID);
      agencyCreate.id = -1;
      agencyCreate.agency_name = "";
    }
  }, [search]);

  const handleChange = (e: InputChange) => {
    setAgencyCreate({
      ...agencyCreate,
      [e.target.name]: e.target.value,
    });
  };

  const changeData = (
    coefficient: ICoefficient,
    region: string
  ): ICoefficientAgency[] => {
    const data: ICoefficientAgency[] = [];
    for (const key in coefficient) {
      data.push({
        coefficient: parseFloat(coefficient[key as keyof ICoefficient]),
        region_unique_key: region,
        rule_unique_key: key,
      });
    }
    return data;
  }; // [{ coefficient: number, region_unique_key:string, rule_unique_key:string }]

  const handleSave = async (e: FormSubmit) => {
    e.preventDefault();

    const agency_pay = [
      ...changeData(paySouth, south?.region_unique_key as string),
      ...changeData(payMiddle, central?.region_unique_key as string),
      ...changeData(payNorth, north?.region_unique_key as string),
    ];

    const agency_revenue = [
      ...changeData(revenueSouth, south?.region_unique_key as string),
      ...changeData(revenueMiddle, central?.region_unique_key as string),
      ...changeData(revenueNorth, north?.region_unique_key as string),
    ];

    setLoading(true);
    try {
      const finalData = {
        name: agencyCreate.agency_name,
        password: agencyCreate.password,
        phone: agencyCreate.phone,
        agency_name: agencyCreate.agency_name,
        agency_pay,
        agency_revenue,
      };
      console.log(finalData);
      //Nội dung Tên, Số Phone không có chứa ký tự như: &apos;, &quot;, *, /,
      // &, #, [, ], &lt;, &gt;, =, @, !, -
      //regex name
      // const regexName = /^[a-zA-Z0-9 ]+$/
      // if (!regexName.test(agencyCreate.agency_name)) {
      //   toast({
      //     variant: 'destructive',
      //     title: 'Chứa các ký tự không cho phép',
      //   })
      //   setLoading(false)
      //   return
      // }

      // //regex phone
      // const regexPhone = /^[0-9]+$/
      // if (!regexPhone.test(agencyCreate.phone)) {
      //   toast({
      //     variant: 'destructive',
      //     title: 'Số phone chứa các ký tự không cho phép',
      //   })
      //   setLoading(false)
      //   return
      // }

      let response;
      if (search.includes("agency_id")) {
        response = await agencyApi.UpdateAgency(
          search.split("=")[1],
          finalData
        );
      } else {
        response = await agencyApi.CreateAgency(finalData);
      }
      // Call API to save agency
      const { data, status } = response;
      if (status === 200) {
        toast({
          variant: "success",
          title: "Thành công",
        });
        if (!search.includes("agency_id")) {
          setAgencyCreate(initState);
          const obj: ICoefficient = {};
          rule.map((item: IRule) => {
            obj[item.rule_unique_key] = "0";
          });
          setPaySouth(obj);
          setPayMiddle(obj);
          setPayNorth(obj);
          setRevenueSouth(obj);
          setRevenueMiddle(obj);
          setRevenueNorth(obj);
          window.location.href = PATHS.KHACH_HANG;
        }
      }

      if (status === 400) {
        toast({
          variant: "destructive",
          title: "Lỗi",
          description: data.message,
        });
      }
      setLoading(false);
      return;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Thất bại",
      });
      setLoading(false);
      return;
    }
  };

  if (loading) <Loading />;
  return (
    <form className="w-full min-h-screen bg-gray-100" onSubmit={handleSave}>
      {/* Header */}
      <div className="bg-pink-600 text-white p-3 flex justify-between items-center">
        <span className="text-lg font-semibold">THÔNG TIN KHÁCH HÀNG</span>
      </div>

      <div className="bg-white shadow-md rounded-lg m-4 p-4 border border-gray-200">
        <p className="text-red-500 font-medium text-sm">
          Nội dung Tên, Số Phone không có chứa ký tự như: &apos;, &quot;, *, /,
          &, #, [, ], &lt;, &gt;, =, @, !, -
        </p>
        <div className="mt-2">
          {/* <p className="text-gray-600">
            Họ & Tên:{' '}
            <Input
              placeholder="Họ & Tên"
              name="name"
              type="text"
              value={agencyCreate.name}
              onChange={handleChange}
            />
          </p>
          <p className="text-gray-600">
            Phone:{' '}
            <Input
              placeholder="Phone"
              name="phone"
              type="text"
              value={agencyCreate.phone}
              onChange={handleChange}
            />
          </p> */}
          <p className="text-gray-600">
            Tên đại lý:
            <Input
              placeholder="Tên đại lý"
              name="agency_name"
              type="text"
              value={agencyCreate.agency_name}
              onChange={handleChange}
            />
          </p>
          <p className="text-gray-600">
            Pass:
            <Input
              placeholder="Pass"
              name="password"
              type="text"
              className="text-yellow-500"
              value={agencyCreate.password}
              onChange={handleChange}
            />
          </p>
        </div>
      </div>

      <div className="flex gap-2 px-4">
        <Button type="button" className="bg-blue-500 text-white">
          KHÁCH
        </Button>
        <Button type="button" className="bg-gray-400 text-white">
          CHỦ
        </Button>
      </div>

      <FormInput
        region="MIỀN BẮC"
        pay={payNorth}
        setPay={setPayNorth}
        revenue={revenueNorth}
        setRevenue={setRevenueNorth}
        rule={rule}
      />
      <FormInput
        region="MIỀN TRUNG"
        pay={payMiddle}
        setPay={setPayMiddle}
        revenue={revenueMiddle}
        setRevenue={setRevenueMiddle}
        rule={rule}
      />
      <FormInput
        region="MIỀN NAM"
        pay={paySouth}
        setPay={setPaySouth}
        revenue={revenueSouth}
        setRevenue={setRevenueSouth}
        rule={rule}
      />
      <div className="mb-12"></div>
      <Button className="bg-blue-500 text-white rounded-2xl h-fit fixed bottom-0 right-0 m-4">
        <FaSave />
        Lưu
      </Button>
    </form>
  );
};

export default FormAgency;
```

## File: src/pages/BetDetail.tsx
```typescript
/* eslint-disable react-hooks/exhaustive-deps */
import { betApi, globalApi } from '@/apis'
import BetDetailComp from '@/components/bet/BetDetail'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { DateContext } from '@/contexts/DateContext'
import { SettingContext } from '@/contexts/SettingContext'
import { PATHS } from '@/utils/constants'
import {
  IBetResultDetailInner,
  IProvince,
  IRule,
  IStatistic,
} from '@/utils/interface'
import {
  calculateStatistic,
  calculateStatisticMatched,
  calculateStatisticReceived,
  checkProvince,
  checkRule,
  transferBet,
} from '@/utils/string'
import { DateContextType, SettingContextType } from '@/utils/types'
import { useContext, useEffect, useState } from 'react'
import { FaCopy, FaRegTrashAlt } from 'react-icons/fa'
import { IoMdSave } from 'react-icons/io'
import { useLocation } from 'react-router-dom'

const tabs = [
  {
    value: 'Tin nhắn',
    key: 1,
  },
  {
    value: 'Xử lý tin nhắn',
    key: 2,
  },
  {
    value: 'Hệ số',
    key: 3,
  },
  {
    value: 'Nhiều SMS',
    key: 4,
  },
  {
    value: 'Số trúng',
    key: 5,
  },
]

const BetDetail = () => {
  const location = useLocation()

  const [tab, setTab] = useState(tabs[0])
  const [showDetail, setShowDetail] = useState(false)
  const { toast } = useToast()
  const { date } = useContext(DateContext) as DateContextType
  const { provinces, rules } = useContext(SettingContext) as SettingContextType
  const [bet, setBet] = useState<IBetResultDetailInner | null>(null)
  const [pointRaw, setPointRaw] = useState<IStatistic[]>([])
  const [pointMiddle, setPointMiddle] = useState<IStatistic[]>([])
  const [pointMatched, setPointMatched] = useState<IStatistic[]>([])
  const [ruleError, setRuleError] = useState<string[]>([])
  const [provinceError, setProvinceError] = useState<string[]>([])
  const [region, setRegion] = useState('')
  const [validProvince, setValidProvince] = useState<IProvince[]>([])
  const [rulesGlobal, setRulesGlobal] = useState<IRule[]>([])

  const getRules = async () => {
    try {
      const response = await globalApi.GetAllRule()
      if (response) {
        const { data } = response
        if (data.data) {
          setRulesGlobal(response.data.data)
        } else {
          setRulesGlobal([])
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRules()
  }, [])

  const handleAddBet = async () => {
    try {
      if ((ruleError.length > 0 || provinceError.length > 0) && content != '') {
        toast({
          variant: 'destructive',
          title: 'Lỗi nhập liệu',
        })
        return
      }

      const bet_id = location.pathname.split('/').pop()
      const agency_id = location.search.split('=')[1]

      let contentTransfer = content.replace(/,/g, '.')

      const province_acronym = bet?.province_acronym.map(
        (item) => item.acronym
      )[0]

      if (region === 'north' && content != '') {
        //check content has province_acronym
        contentTransfer = contentTransfer
          .split(/\n/)
          .map((item) => {
            if (item.includes(province_acronym!)) {
              return item
            } else {
              return province_acronym! + ' ' + item
            }
          })
          .join('\n')
      }

      let data: {
        agency_id: number
        open_date: string
        region_unique_key: string
        bets: string[]
        bet_id?: number
      } = {
        agency_id: Number(agency_id),
        open_date: date?.toISOString().split('T')[0] || '',
        region_unique_key: region,
        bets: transferBet(provinces, contentTransfer),
      }
      if (bet_id && bet_id !== '-1') {
        data = {
          ...data,
          bet_id: Number(bet_id),
        }
      }

      const response = await betApi.CreateBet(data)
      if (response) {
        const { data } = response
        if (data) {
          let responseStatus = data.status
          if (responseStatus == 200) {
            toast({
              title: 'Thành công',
              variant: 'success',
            })
            if (data.data.id) {
              const path = location.pathname.split('/')
              path[path.length - 1] = data.bet_id?.toString() || ''
              const newPath =
                path.join('/') + data.data.id + `?agency_id=${agency_id}`
              window.location.replace(newPath)
            }
          } else {
            toast({
              variant: 'destructive',
              title: data.error,
            })
          }

          //repalace -1 to data.data.id
          // if (data.data.id) {
          //   const path = location.pathname.split("/");
          //   path[path.length - 1] = data.bet_id?.toString() || "";
          //   const newPath =
          //     path.join("/") + data.data.id + `?agency_id=${agency_id}`;
          //   window.location.replace(newPath);
          // }

          // window.location.reload()
        }
      }
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Lỗi nhập liệu',
      })
    }
  }

  const getBet = async () => {
    try {
      let region_unique_key = ''
      if (location.pathname.includes(PATHS.MIEN_BAC)) {
        region_unique_key = 'north'
      } else if (location.pathname.includes(PATHS.MIEN_TRUNG)) {
        region_unique_key = 'central'
      } else if (location.pathname.includes(PATHS.MIEN_NAM)) {
        region_unique_key = 'south'
      }
      setRegion(region_unique_key)
      if (bet?.province_acronym) {
        for (let i = 0; i < bet.province_acronym.length; i++) {
          const province = provinces.find(
            (province) => province.acronym === bet.province_acronym[i].acronym
          )
          if (province) {
            validProvince.push(province)
          }
        }
      }

      if (region_unique_key === '') {
        return
      }

      const response = await betApi.GetBets({
        open_date: date?.toISOString().split('T')[0] || '',
        region_unique_key,
        agency_id: location.search.split('=')[1],
      })
      const { data } = response
      if (data && data.data !== null) {
        if (Array.isArray(response.data.data)) {
          setBet({
            bets: [],
            province_acronym: response.data.data,
            statistic: [],
            win: [],
          })
        } else {
          setBet(data.data)
        }
      } else {
        setBet(null)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (location.search.split('=')[1] && date) {
      getBet()
    }
  }, [date])

  const createEmptyStatistic = (rules: IRule[]): IStatistic[] =>
    (rules || []).map((rule) => ({
      rule: rule.rule_unique_key,
      score: 0,
      money: 0,
    }))

  useEffect(() => {
    const emptyStatistics = createEmptyStatistic(rulesGlobal)
    if (bet) {
      const statisticRaw = bet?.statistic || []
      const flattenedRaw = statisticRaw.flat()
      const statisticFilled = calculateStatistic(rulesGlobal, flattenedRaw)
      setPointRaw(statisticFilled)
      const statisticReceived = calculateStatisticReceived(
        rulesGlobal,
        flattenedRaw
      )
      setPointMiddle(statisticReceived)

      const statisticWin = bet?.win || []

      const statisticMatched = calculateStatisticMatched(
        rulesGlobal,
        statisticWin
      )
      setPointMatched(statisticMatched)
    } else {
      setPointRaw(emptyStatistics)
      setPointMiddle(emptyStatistics)
      setPointMatched(emptyStatistics)
    }
  }, [bet])

  const [content, setContent] = useState('')
  useEffect(() => {
    if (bet && bet.bets.length > 0) {
      if (tab.key === 1) {
        setContent(bet?.bets[0].bets.map((item) => item).join('\n'))
      } else if (tab.key === 2) {
        setContent(bet?.bets[0].bets.map((item) => item).join(' '))
      } else if (tab.key === 3 || tab.key === 4) {
        setContent('')
      } else if (tab.key === 5) {
        setContent(
          bet.win
            .map((item) => {
              if (item.score > 1) {
                return item.bet_win
              }
              return item.bet_win
            })
            .join(';')
        )
      }
    } else {
      setContent('')
    }
  }, [tab, bet])
  useEffect(() => {
    if (tab.key === 1) {
      if (
        !location.pathname.includes(PATHS.MIEN_BAC) &&
        bet?.province_acronym
      ) {
        setProvinceError(
          checkProvince(bet?.province_acronym!, content.trim(), rules)
        )
      }
      setRuleError(checkRule(rules, content.trim()))
    }
  }, [content])

  rules.push(
    {
      acronym: 'hang',
      rule_id: 0,
      rule_name: 'Hàng',
    },
    {
      acronym: 'keo',
      rule_id: 0,
      rule_name: 'Kéo',
    },
    {
      acronym: 'dit',
      rule_id: 0,
      rule_name: 'Đít',
    },
    {
      acronym: 'ac',
      rule_id: 0,
      rule_name: 'All chẵn',
    },
    {
      acronym: 'al',
      rule_id: 0,
      rule_name: 'All lẻ',
    },
    {
      acronym: 'cc',
      rule_id: 0,
      rule_name: 'Chẵn Chẵn',
    },
    {
      acronym: 'cl',
      rule_id: 0,
      rule_name: 'Chẵn Lẻ',
    },
    {
      acronym: 'lc',
      rule_id: 0,
      rule_name: 'Lẻ Chẵn',
    },
    {
      acronym: 'll',
      rule_id: 0,
      rule_name: 'Lẻ Lẻ',
    }
  )

  return (
    <div>
      <div className="space-x-1 border-b border-gray-400 pb-1">
        {bet?.province_acronym.map((city) => {
          return (
            <span
              className="bg-[#1479B8] rounded-2xl px-2 py-1 text-white text-xs"
              key={city.acronym}
            >
              {city.acronym}: {city.name}
            </span>
          )
        })}
      </div>
      <div className="mt-4 space-x-1">
        {tabs.map((item) => (
          <Button
            key={item.key}
            onClick={() => setTab(item)}
            className={`${
              tab.key === item.key ? 'bg-[#1479B8]' : 'bg-disable'
            } text-white px-2 h-fit rounded-lg`}
          >
            {item.value}
          </Button>
        ))}
      </div>
      <div className="relative">
        <textarea
          className={`w-full h-40 border border-gray-400 p-2 resize-vertical ${
            tab.key === 5 ? 'text-main' : ''
          }`}
          disabled={tab.key !== 1}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        {tab.key === 5 && (
          <div className="absolute -top-10 right-0">
            <Button
              className="bg-blue-500 text-white p-1 px-4"
              onClick={() => {
                navigator.clipboard.writeText(content)
                toast({
                  title: 'Đã copy',
                  variant: 'success',
                })
              }}
            >
              <FaCopy />
            </Button>
          </div>
        )}
      </div>
      <p>
        {content.split(/\s+/).map((item, index) => {
          const radios = ['2dai', '3dai', '4dai']
          const isRuleError =
            Array.isArray(ruleError) && ruleError.includes(item)
          const isProvinceError =
            Array.isArray(provinceError) && provinceError.includes(item)

          const isRadio = radios.find((radio) => item.includes(radio))

          return (
            <span
              key={index}
              className={`${
                isRuleError || isProvinceError ? 'text-red-500 font-bold' : ''
              }`}
            >
              {isRadio ? (
                <span>
                  {isRadio === '2dai'
                    ? bet?.province_acronym
                        .slice(0, 2)
                        .map((item) => item.acronym)
                        .join(' ') + ' '
                    : isRadio === '3dai'
                    ? bet?.province_acronym
                        .slice(0, 3)
                        .map((item) => item.acronym)
                        .join(' ') + ' '
                    : bet?.province_acronym
                        .slice(0, 4)
                        .map((item) => item.acronym)
                        .join(' ') + ' '}
                </span>
              ) : (
                item + ' '
              )}
            </span>
          )
        })}
      </p>

      {/* <TextBetArea
        stationsPattern="hn"
        validProvinces={validProvince}
        validRules={rules}
        content={content}
        setContent={setContent}
      /> */}
      {showDetail && (
        <div className="space-x-1">
          {bet?.win.map((item) => {
            return (
              <span
                className="bg-[#1479B8] rounded-2xl px-2 py-1 text-white text-xs"
                key={item.id}
              >
                {item.bet_win}
              </span>
            )
          })}
        </div>
      )}
      <BetDetailComp
        item={bet!}
        index={0}
        pointRaw={pointRaw}
        pointMatched={pointMatched}
        pointMiddle={pointMiddle}
      />
      <div className="flex justify-between items-center">
        <Button
          onClick={() => setContent('')}
          className="hover:bg-[#d58512] bg-[#f0ad4e] rounded-3xl py-1 h-fit"
        >
          <FaRegTrashAlt />
          Xóa mất
        </Button>
        <div className="space-x-2">
          <Button
            onClick={handleAddBet}
            className="bg-[#1A82C3] rounded-3xl py-1 h-fit"
          >
            <IoMdSave />
            Cập nhật
          </Button>
          {/* <Button className="bg-[#1A82C3] rounded-3xl py-1 h-fit">
            <PiListBold />
            D.sách
          </Button> */}
        </div>
      </div>
    </div>
  )
}

export default BetDetail
```
