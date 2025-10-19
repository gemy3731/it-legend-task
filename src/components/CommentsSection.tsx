import commentsData from '@/data/commentsData'
import Image from 'next/image'
import React from 'react'

const CommentsSection = () => {
  return (
    <section id='comments' className='px-5 pb-3 mt-10'>
        <h2 className='text-[22px] font-bold mb-8'>Comments</h2>
        <div className='flex flex-col gap-5'>
            {commentsData.map((item, index) => (
                <div key={index} className='flex flex-col gap-4 not-last:border-b border-[#0000001f] py-4'>
                    <div className='flex items-center gap-4'>
                        <Image src={item.userImage} alt="user image" width={45} height={45} className='rounded-full w-[45px] h-[45px]'></Image>
                        <div>
                            <h3 className='font-medium'>{item.userName}</h3>
                            <p className='text-gray-400'>{item.createdAt}</p>
                        </div>
                    </div>
                    <p className='ml-[62px] text-gray-400'>{item.comment}</p>
                </div>
            ))}
            </div>
    </section>
  )
}

export default CommentsSection