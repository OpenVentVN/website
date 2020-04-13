import React from "react";
import {Trans, withTranslation} from "react-i18next";
import Slider from "react-slick";

const Technique = ({t}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };
    const listProduct = ['product_1.jpg', 'product_2.jpg', 'product_3.jpg', 'product_4.jpg']
    return (
        <div id="technique" className="container-fluid">
            <div className="container">
                <h1 className="technique-title">{t('technique.developWithUs')}</h1>

                <div className="row technique-body">
                    <div className="col-md-6 technique-left">
                        <h3>{t('technique.specification')}</h3>
                        <ol>
                            <li>
                                <Trans i18nKey="technique.specification.1">
                                    ... <strong>>...</strong> ...
                                </Trans>
                            </li>
                            <li>
                                <Trans i18nKey="technique.specification.2">
                                    ... <strong>>...</strong> ... <strong>>...</strong> ...
                                </Trans>
                                <ul>
                                    <li>{t('technique.specification.2.1')}</li>
                                    <li>{t('technique.specification.2.2')}</li>
                                    <li>{t('technique.specification.2.3')}</li>
                                </ul>
                            </li>
                            <li>
                                <Trans i18nKey="technique.specification.3">
                                    ... <strong>>...</strong> ...
                                </Trans>
                                <ul>
                                    <li>{t('technique.specification.3.1')}</li>
                                    <li>{t('technique.specification.3.2')}</li>
                                    <li>{t('technique.specification.3.3')}</li>
                                </ul>
                            </li>
                            <li>
                                <Trans i18nKey="technique.specification.4">
                                    ... <strong>>...</strong> ...
                                </Trans>
                            </li>
                            <li>
                                <Trans i18nKey="technique.specification.5">
                                    ... <strong>>...</strong> ...
                                </Trans>
                            </li>
                        </ol>
                    </div>
                    <div className="col-md-6 technique-right">
                        <Slider {...settings}>
                            {listProduct.map(item =>
                                <img src={`assets/images/products/${item}`} alt="item"/>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>)
}
export default withTranslation()(Technique)
