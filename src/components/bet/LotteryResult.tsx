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
