// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    "heading": "Uy tín - Trách nhiệm",
    "content": "Định hướng trở thành thương hiệu hàng đầu về các sản phẩm bao bì nhựa tại Việt Nam.",
    "image": "https://res.cloudinary.com/khongdangky/image/upload/c_scale,w_1200/f_auto/v1662110802/viethan/01_enhn4h.jpg"
  },
  {
    "heading": "Chất lượng vượt trội",
    "content": "Dây chuyền sản xuất đảm bảo chất lượng sản phẩm ổn định, mang tính cạnh tranh cao.",
    "image": "https://res.cloudinary.com/khongdangky/image/upload/c_scale,w_1200/f_auto/v1662110451/viethan/02_c20iyl.jpg"
  },
  {
    "heading": "Lợi ích hài hòa",
    "content": "Môi trường làm việc chuyên nghiệp. Tạo điều kiện nâng cao thu nhập và cơ hội phát triển cho mọi thành viên.",
    "image": "https://res.cloudinary.com/khongdangky/image/upload/c_scale,w_1200/f_auto/v1662110440/viethan/03_xpndaq.jpg"
  },
  {
    "heading": "Đầu tư bền vững",
    "content": "Đóng góp tích cực vào các hoạt động  văn hóa xã hội của cộng đồng, đề cao tinh thần trách nhiệm với môi trường.",
    "image": "https://res.cloudinary.com/khongdangky/image/upload/c_scale,w_1200/f_auto/v1662110451/viethan/04_nxa5js.jpg"
  },
  {
    "heading": "Đoàn kết - Nhân văn",
    "content": "Coi trọng tinh thần đoàn kết và ứng xử nhân văn. Luôn học hỏi nâng cao nghiệp vụ, sẵn sàng cho mọi thử thách.",
    "image": "https://res.cloudinary.com/khongdangky/image/upload/c_scale,w_1200/f_auto/v1662110440/viethan/05_pqdbty.jpg"
  },
];

export default () => {
  return (
    <>
        <Swiper
          modules={[EffectFade,Autoplay, Pagination, Navigation]}
          effect={"fade"}
          spaceBetween={50}
          // slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{delay:5000}}
          pagination={true}
          navigation={{clickable:true}}
          className="s1"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
        >
          {slides.map((sl,index) => (
          <SwiperSlide key={index}>
              
            <div 
              className="w-full aspect-square sm:aspect-video lg:aspect-[2/1] text-center relative overflow-hidden flex items-center justify-center"
            >
              <img className="absolute inset-0 -z-10 w-full h-full object-cover" src={sl.image} alt={sl.content} />
              <div className="px-12 sm:px-8">
                <h2 className="w-full text-white font-bold text-2xl sm:text-3xl lg:text-5xl mb-4 drop-shadow-sm">{sl.heading}</h2>
                <p className="max-w-xl mx-auto text-white sm:text-xl">{sl.content}</p>
              </div>
            </div>

          </SwiperSlide>
          ))}

        </Swiper>
    </>
  );
};