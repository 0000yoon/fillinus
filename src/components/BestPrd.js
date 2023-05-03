import * as React from 'react';
import Box from '@mui/material/Box';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function BestPrd(){
    const responsive = {
        0: { items: 1 },
        340: { items: 2 },
        460: { items: 3 },
        570: { items: 4 },
        680: { items: 5 }
    };
    
    const items = [
        <div className="item" data-value="1"><img src="https://s.pstatic.net/shop.phinf/20230403_24/1680487990899OXkus_JPEG/EC9980EC9DB4EB939C.jpg"/></div>,
        <div className="item" data-value="2"><img src="https://s.pstatic.net/shop.phinf/20230403_35/16804880298759FhYR_JPEG/EBB484EC8BA0EC8381.jpg"/></div>,
        <div className="item" data-value="3"><img src="https://s.pstatic.net/shop.phinf/20230403_180/1680488069821d01EM_JPEG/ED95ADECA095.jpg"/></div>,
        <div className="item" data-value="4"><img src="https://s.pstatic.net/shop.phinf/20230331_21/1680242063581znwER_JPEG/1.jpg"/></div>,
        <div className="item" data-value="5"><img src="https://s.pstatic.net/shop.phinf/20230331_236/1680242239089njJgT_JPEG/5.jpg"/></div>,
    ];
    return(
        <Box sx={{ maxWidth: 800, color: "#FF71A4" }}>
                        <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
                </Box>
    );
}

export default BestPrd;