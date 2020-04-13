import React from "react";
import {Trans, withTranslation} from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = ({t}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const listDeveloper = [
        {avatar: 'longdh.jpg', displayName: 'ĐÀO HẢI LONG', positionName: 'longdh.positionName'},
        {
            avatar: 'nammh.jpg',
            displayName: 'MAI HẢI NAM',
            positionName: 'nammh.positionName'
        },
        {avatar: 'nampv.jpg', displayName: 'PHẠM VĂN NAM', positionName: 'nampv.positionName'},
        {avatar: 'chanhtq.jpg', displayName: 'THÁI QUỐC CHÁNH', positionName: 'chanhtq.positionName'},
        {
            avatar: 'duongltt.jpg',
            displayName: 'LÊ THỊ THUỲ DƯƠNG',
            positionName: 'duongltt.positionName'
        },
        {avatar: 'thanhptn.jpg', displayName: 'PHẠM THỊ NGỌC THANH', positionName: 'thanhptn.positionName'},
        {avatar: 'dathn.jpg', displayName: 'HÀNG NGUYÊN ĐẠT', positionName: 'dathn.positionName'},
    ]

    return (<div>
        <div id="team">
            <div className="developer">
                <div className="container">
                    <p className={"team-title"}>{t("team.developer.title")}</p>
                    <div className={"team-description"}><p>
                        {t("team.developer.description")}
                    </p></div>
                    <div className="list row">
                        <Slider {...settings}>
                            {listDeveloper.map(item =>
                                <div key={item.avatar}>
                                    <div className={"avatar"}><img src={`assets/images/${item.avatar}`}
                                                                   alt={item.displayName}/></div>
                                    <p className={"display-name"}>{item.displayName}</p>
                                    <p className={"position-name"}>
                                        <Trans i18nKey={item.positionName}>
                                            ... <br/> ... <br/> ...
                                        </Trans>
                                    </p>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default withTranslation()(Team)
