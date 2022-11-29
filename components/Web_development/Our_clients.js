import React from 'react'
import Image from 'next/image'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import image_1 from '../../public/asset/testi1.png'
import image_2 from '../../public/asset/testi2.png'
export const Our_clients = () => {
  const index_our_clients_1 = [
    {
      title: "Moonkle LTD,",
      decriptment: "Client of Company",
      content: "Very well thought out and articulate communication. Clear milestones,deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.",
      image_src: image_1,
      size_image: "25",
    },
    {
      title: "SoftTech,",
      decriptment: "Manager of Company",
      content: "Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.",
      image_src: image_2,
      size_image: "25",
    },
  ]
  const index_our_clients_2 = [
   
    {
      title: "SoftTech,",
      decriptment: "Manager of Company",
      content: "Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!.",
      image_src: image_2,
      size_image: "25",
    },
    {
      title: "Moonkle LTD,",
      decriptment: "Client of Company",
      content: "Very well thought out and articulate communication. Clear milestones,deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!.",
      image_src: image_1,
      size_image: "25",
    },
  ]
  
  return (
 

    //test slideshow
    <div className="py-16">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

          <div className='text-center m-auto max-w-[1240px]'>
          <p className='uppercase text-[#7141b1]'>// OUR CLIENTS</p>
          <h3 className='text-black font-bold text-xl text-[35px] my-10'>We are Trusted <br></br> 15+ Countries Worldwide</h3>
          <div className='grid sm:grid-cols-2 gap-8 p-4'>
            {index_our_clients_1.map((index_our_client, index) => (
              <div className='flex flex-col p-5 bg-slate-300 rounded-xl shadow-xl' key={index}>
                <div className='flex flex-row'>
                  <Image src={index_our_client.image_src} />
                  <div className='ml-10 flex flex-col text-start'>
                    <h3 className='text-[30px] font-bold'>{index_our_client.title}</h3>
                    <p>{index_our_client.decriptment}</p>
                  </div>
                </div>
                <div className='m-4'>
                  <p className='text-start'> {index_our_client.content}
                  </p>
                </div>
              </div>
            ))}


          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className='text-center m-auto max-w-[1240px]'>
            <p className='uppercase text-[#7141b1]'>// OUR CLIENTS</p>
            <h3 className='text-black font-bold text-xl text-[35px] my-10'>We are Trusted <br></br> 15+ Countries Worldwide</h3>
            <div className='grid sm:grid-cols-2 gap-8 p-4'>
              {index_our_clients_2.map((index_our_client, index) => (
                <div className='flex flex-col p-5 bg-slate-300 rounded-xl shadow-xl' key={index}>
                  <div className='flex flex-row'>
                    <Image src={index_our_client.image_src} />
                    <div className='ml-10 flex flex-col text-start'>
                      <h3 className='text-[30px] font-bold'>{index_our_client.title}</h3>
                      <p>{index_our_client.decriptment}</p>
                    </div>
                  </div>
                  <div className='m-4'>
                    <p className='text-start'> {index_our_client.content}
                    </p>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  )
}
export default Our_clients