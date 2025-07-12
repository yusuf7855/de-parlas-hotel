import {useRef, useState} from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {Box} from "@mui/material";
import {NavigateBefore, NavigateNext} from "@mui/icons-material";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import "../../../styles/pages/product-gallery.css";
import {Image} from "../../../components/common/Image.jsx";
import {StyledLightSliderButton} from "../../../components/styled/StyledButtons.jsx";
import StyledLightbox from "../../../components/common/StyledLightbox.jsx";

function ServiceImageGallery({imageList, id = 1}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [startIndex, setStartIndex] = useState(0);
    const [fullSizePictureOpen, setFullSizePictureOpen] = useState(false);
    const swiperRef = useRef();

    return (
        <Box sx={{
            ".swiper-slide": {
                borderRadius: 2
            },
            ".swiper": {
                borderRadius: 2
            },
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            <Box sx={{position: "relative", flex: 1}}>
                <Box>
                    <Box sx={{
                        position: "absolute",
                        top: "calc(50% - 20px)",
                        left: {xs: 5, lg: 8},
                        zIndex: 3,
                    }}>
                        <StyledLightSliderButton
                            aria-label="slide-before"
                            onClick={() => swiperRef.current?.slidePrev()}>
                            <NavigateBefore
                                sx={{
                                    scale: {md: "1.2"},
                                    background: "white",
                                }}
                            />
                        </StyledLightSliderButton>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: 1,
                        position: "absolute",
                        top: "calc(50% - 20px)",
                        right: {xs: 5, lg: 8},
                        zIndex: 3,
                    }}>
                        <StyledLightSliderButton
                            aria-label="slide-next"
                            onClick={() => swiperRef.current?.slideNext()}>
                            <NavigateNext
                                sx={{scale: {md: "1.2"}}}
                            />
                        </StyledLightSliderButton>
                    </Box>
                </Box>
                <Swiper
                    onSlideChange={(i) => setStartIndex(i.realIndex)}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    grabCursor={true}
                    loop={true}
                    spaceBetween={5}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mainSwiper"
                    style={{height: '100%'}}
                >
                    {
                        imageList.map((img, index) => (
                            <SwiperSlide onClick={() => setFullSizePictureOpen(true)} key={index}
                                         style={{display: 'flex', justifyContent: 'center'}}>
                                <Image
                                    alt={`product-${id}-${index}`}
                                    skeleton={true}
                                    width={"100%"}
                                    sx={{
                                        aspectRatio: {xs: 1.25, sm: 2, mlg: "auto"},
                                        userDrag: "none",
                                        userSelect: "none",
                                        borderRadius: 2
                                    }}
                                    objectFit={"cover"}
                                    src={img}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", mt: {xs: 1, sm: 1.5}}}>
                <Box sx={{width: "100%", borderRadius: 2, height: "100%"}}>
                    <Swiper
                        grabCursor={true}
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={16}
                        slidesPerView={4}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="thumbsSwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 8
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 12
                            },
                            1100: {
                                slidesPerView: 2,
                            },
                            1400: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {
                            imageList.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        alt={`product-${id}-${index}`}
                                        skeleton={true}
                                        width={"100%"}
                                        sx={{
                                            userDrag: "none",
                                            userSelect: "none",
                                            borderRadius: 2,
                                            height: "100%!important"
                                        }}
                                        height={"100%"}
                                        objectFit={"cover"}
                                        src={img}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>
            </Box>
            <StyledLightbox imageList={imageList} fullSizePictureOpen={fullSizePictureOpen}
                            setFullSizePictureOpen={setFullSizePictureOpen}
                            startIndex={startIndex} setStartIndex={setStartIndex}/>
        </Box>
    );
}

export default ServiceImageGallery;