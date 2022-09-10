// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-cube";

export default () => {

  const cl = [
    {
      name: "Trần Minh Tuấn",
      from: "Công ty CP xây dựng CCB",
      text: "Chúng tôi tư vấn cho khách hàng khá nhiều sản phẩm tấm cách nhiệt khác nhau, nhưng loại Việt Hàn có vẻ được ưa chuộng nhất. "
    },
    {
      name: "Yên Hoa",
      from: "Bắc Giang",
      text: "Từ ngày dùng xốp Việt Hàn đóng gói hàng hoa quả cho khách, tỉ lệ hàng bị giập nát giảm hẳn. Nói chung sản phẩm tốt, giá hợp lý."
    },
    {
      name: "Nguyễn Văn Thiết",
      from: "Cầu Giấy, Hà Nội",
      text: "Tư vấn nhiệt tình, giao hàng nhanh. Sản phẩm dùng rất tốt, bề mặt bóng đẹp còn hơn cả mong đợi. Sẽ còn ủng hộ Việt Hàn dài dài..."
    },
    {
      name: "Nguyễn Khoa",
      from: "XDC Thái Bình",
      text: "Hỏi mấy nơi, thấy Việt Hàn giá cả hợp lý hơn cả. Tư vấn khá nhiệt tình và có chuyên môn cao. Chúc công ty làm ăn ngày càng phát đạt"
    },
    {
      name: "Trịnh Văn Sáng",
      from: "Lạng Sơn",
      text: "Thấy bạn bè giới thiệu sản phẩm Việt Hàn. Dùng thử thấy ưng. Xốp rất dai và khó rách. Gửi hàng cho khách cũng thấy yên tâm hơn."
    },

  ]

  return (
    <>
        <Swiper
          modules={[EffectCube, Autoplay, Pagination]}
          autoHeight={true}
          effect={"cube"}
          grabCursor={true}
          centeredSlides={true}
          // slidesPerView={3}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.8,
          }}
          loop={true}
          autoplay={{delay:3500}}
          speed={1000}
          pagination={true}
          className="s2 mb-8 max-w-xl"
        >
          {cl.map((c, index) => (
            <SwiperSlide key={index} >
              <div className="bg-green-300 text-center px-4 py-8">
                <p className="text-lg md:text-2xl">{c.text}</p>
                <p className="text-xs mt-4 lg:mt-8"><strong>{c.name}</strong> - <i>{c.from}</i></p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>

    </>
  );
};