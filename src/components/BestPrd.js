import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';



const slideBanner = {

      accessibility: true, // 탭 이동 및 화살표 키 탐색을 활성화
      adaptiveHeight: false, // 슬라이더 높이를 현재 슬라이드에 맞춤
      //appendArrows: // 내비게이션 화살표가 부착되는 위치 변경
      //appendDots: // 내비게이션 도트가 부착된 위치 변경
      arrows: false, // 다음/이전 화살표 활성화
      //asNavFor: // 여러 슬라이더의 동기화를 활성화
      autoplay: false, // 슬라이드 자동 재생
      autoplaySpeed: 500, // 자동 재생 변경 간격
      centerMode: false, // 부분 이전/다음 슬라이드로 가운데 보기를 활성화, 홀수 slidesToShow 카운트와 함께 사용
      centerPadding: '50px', // 중앙 모드일 때 측면 패딩. (픽셀 또는 %)
      cssEase: 'ease', // CSS3 easing
      //customPaging: // 사용자 지정 페이징 템플릿
      dots: false, // 현재 슬라이드 표시점
      dotsClass: 'slick-dots', // 슬라이드 표시기 도트 컨테이너 클래스
      draggable: true, // 데스크톱 끌기를 활성화
      easing: 'linear', // animate() fallback easing
      edgeFriction: 0.15, // 캐러셀의 가장자리를 스와이프할 때의 저항
      fade: false, // Enables fade
      focusOnSelect: false, // 선택한 요소에 포커스 활성화(클릭)
      focusOnChange: false, // 변경 후 슬라이드에 포커스
      infinite: true, // 무한 루핑
      initialSlide: 0, // 시작 슬라이드 index
      lazyLoad: 'ondemand', // 'ondemand':슬라이드하는 즉시 이미지를 로드, 'progressive':페이지가 로드될 때 이미지를 차례로 로드
      mobileFirst: true, // 반응형 설정은 모바일 우선 계산을 사용
      //nextArrow: // 노드를 선택하거나 "다음" 화살표에 대한 HTML을 사용자 정의할 수 있다
      pauseOnDotsHover: false, // 점이 가리키면 자동 재생을 일시 중지
      pauseOnFocus: true, // 슬라이더에 초점이 맞춰지면 자동 재생을 일시중지
      pauseOnHover: true, // 호버 시 자동 재생 일시중지
      //prevArrow: // 노드를 선택하거나 "이전" 화살표에 대한 HTML을 사용자 정의할 수 있다
      respondTo: 'window', // 반응 객체가 반응하는 너비 'window', 'slider' or 'min'
      //responsive: null, // 중단점 및 설정 개체를 포함하는 개체 배열
      rows: 1, // 1 이상으로 설정하면 그리드 모드가 초기화. slidesPerRow를 사용하여 각 행에 있어야 하는 슬라이드 수를 설정.
      rtl: false, // 슬라이더의 방향을 오른쪽에서 왼쪽으로 변경
      slide: '', // 요소 쿼리
      slidesPerRow: 1, // 행 옵션을 통해 그리드 모드가 초기화되면 각 그리드 행에 있는 슬라이드 수를 설정
      slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
      slidesToShow: 2, // 한 번에 표시할 슬라이드 수
      speed: 300, // 전환 속도
      swipe: true, // 터치 스와이프 사용
      swipeToSlide: false, // slidesToScroll에 관계없이 슬라이드로 스와이프
      touchMove: true, // 터치로 슬라이드 이동 가능
      touchThreshold: 5, // 슬라이드를 진행하려면 사용자가 (1/touchThreshold) * 슬라이더 너비만큼 스와이프해야 한다.
      useCSS: true, // CSS 전환 활성화/비활성화
      useTransform: true, // 	CSS 변환 활성화/비활성화
      variableWidth: true, // 자동 슬라이드 너비 계산을 비활성화
      vertical: false, // 세로 슬라이드 방향
      verticalSwiping: false, // 스와이프 방향을 세로로 변경
      waitForAnimate: true, // 애니메이션을 적용하는 동안 슬라이드 진행 요청을 무시
      zIndex: 1000 // IE9 이하에 유용한 슬라이드의 zIndex 값 설정

  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "1%",
    arrows: false,
    dots: false,
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };


function BestPrd() {
    return(
        <div>
    <div style={{ textAlign: "light", color: "#FF71A4" }}>
        <h1> Best 상품</h1>
      </div>
       
    
          {/*<Slider {...slideBanner}>*/}
          <Slider {...settings}>
            <div>
                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        component="img"
                        height="146"
                        image="https://s.pstatic.net/shop.phinf/20230403_24/1680487990899OXkus_JPEG/EC9980EC9DB4EB939C.jpg"
                        alt="Paella dish"
                    />
                    <IconButton aria-label="add to favorites" style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: '0px'}}>
                        <FavoriteIcon fontSize="large" color="warning" />
                    </IconButton>
                    <CardContent>
                        <Typography fontSize="1.2rem" variant="bestprd_title" color="text.secondary">
                        자체제작 와이드핏
                        </Typography>
                        <div>
                        <Typography fontSize="0.8rem" variant="bestprd_subtitle" color="text.secondary">
                        자체제작 와이드핏
                        </Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        component="img"
                        height="146"
                        image="https://s.pstatic.net/shop.phinf/20230403_35/16804880298759FhYR_JPEG/EBB484EC8BA0EC8381.jpg"
                        alt="Paella dish"
                    />
                    <IconButton aria-label="add to favorites" style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: '0px'}}>
                        <FavoriteIcon fontSize="large" color="warning" />
                    </IconButton>
                    <CardContent>
                        <Typography fontSize="0.7rem" variant="subtitle1" color="text.secondary">
                        봄신상 데일리재킷
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        component="img"
                        height="146"
                        image="https://s.pstatic.net/shop.phinf/20230403_180/1680488069821d01EM_JPEG/ED95ADECA095.jpgg"
                        alt="Paella dish"
                    />
                    <IconButton aria-label="add to favorites" style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: '0px'}}>
                        <FavoriteIcon fontSize="large" />
                    </IconButton>
                    <CardContent>
                        <Typography fontSize="0.7rem" variant="subtitle1" color="text.secondary">
                        항정살 족발 특가
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        component="img"
                        height="146"
                        image="https://s.pstatic.net/shop.phinf/20230331_21/1680242063581znwER_JPEG/1.jpg"
                        alt="Paella dish"
                    />
                    <IconButton aria-label="add to favorites" style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: '0px'}}>
                        <FavoriteIcon fontSize="large" />
                    </IconButton>
                    <CardContent>
                        <Typography fontSize="0.7rem" variant="subtitle1" color="text.secondary">
                        SSG 새벽배송 특가
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        component="img"
                        height="146"
                        image="https://s.pstatic.net/shop.phinf/20230331_236/1680242239089njJgT_JPEG/5.jpg"
                        alt="Paella dish"
                    />
                    <IconButton aria-label="add to favorites" style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: '0px'}}>
                        <FavoriteIcon fontSize="large" />
                    </IconButton>
                    <CardContent>
                        <Typography fontSize="0.7rem" variant="subtitle1" color="text.secondary">
                        초록마을 인기 1+1
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            

          </Slider>

          </div>

    );
}

export default BestPrd;