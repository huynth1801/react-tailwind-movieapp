import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button, { OutlineButton } from "../Button/Button";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal, { ModalContent } from "../Modal/Modal";
import "./heroslide.scss";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        console.log(response);
        setMovieItems(response.results.slice(1, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <div className="hero-slide mb-12">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </div>
  );
};

export default HeroSlide;

const HeroSlideItem = (props) => {
  let navigate = useNavigate();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    // Get video by movie id: movie/{movie_id}/videos
    const video = await tmdbApi.getVideos(category.movie, item.id);

    if (video.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed" + video.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className} `}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content max-w-[1660px] m-auto">
        <div className="hero-slide__item__content__info">
          <h2 className="title text-[4rem] leading-none font-bold md:text-[5rem]">
            {item.title}
          </h2>
          <div className="overview mt-[3rem] font-bold">{item.overview}</div>
          <div className="btns mt-[3rem] ">
            <Button
              onClick={() => navigate("/movie/" + item.id)}
              className="text-white dark:text-dark"
            >
              Watch Now
            </Button>
            <OutlineButton
              onClick={setModalActive}
              className="text-white dark:text-dark ml-4"
            >
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};
