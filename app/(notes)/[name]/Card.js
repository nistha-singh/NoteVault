import React from 'react'

export default function (prop) {
    const currentDate = new Date();
  return (
    <div class="box-content h-22 w-[260px] p-4 border-[1px] bg rounded-[7px] my-[6px] text-white text-md bg-[#343434]">
        <p>{prop.title}</p>
        <p>{prop.date}  date</p>
    </div>
  )
}