import React from "react";
import {useTranslation, withTranslation} from "react-i18next";
import _ from "lodash"
import {LANGUAGE} from "../../constants";

const Menu = ({t}) => {
    const language = localStorage.getItem(LANGUAGE) || 'en'
    const getLanguage = (key) => _.find(languageOptions, item => item.key === key) || languageOptions[0]
    const languageOptions = [
        {key: 'en', name: t('language.english'), logo: 'icon_en@3x.png'},
        {key: 'vi', name: t('language.vietnamese'), logo: 'icon_vn@3x.png'},
    ]
    let [languageOption, setLanguageOption] = React.useState(getLanguage(language))
    const {i18n} = useTranslation()

    const handleChangeLanguage = (key) => {
        localStorage.setItem(LANGUAGE, key)
        setLanguageOption(_.find(languageOptions, item => item.key === key) || languageOptions[0])
        return i18n.changeLanguage(key)
    }

    document.title = t('website.title')

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle first-button" type="button" data-toggle="collapse"
                            data-target="#myNavbar"
                            aria-controls="myNavbar" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <div className="animated-icon1"><span></span><span></span><span></span></div>
                    </button>
                    <a className="navbar-brand" href="/"><img src="assets/images/logo@3x.png"
                                                              alt={t('website.title')}/></a>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#project">{t("menu.project")}</a></li>
                            <li><a href="#technique">{t("menu.technique")}</a></li>
                            <li><a href="#team">{t("menu.team")}</a></li>
                            <li><a href="#documents">{t("menu.documents")}</a></li>
                            <li><a href="#contact">{t("menu.contact")}</a></li>
                            <li className="dropdown">
                                {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                                <a href="javascript:void(0)" className="dropdown-toggle language" data-toggle="dropdown"
                                   role="button"
                                   aria-expanded="false"><img src={`assets/images/${languageOption.logo}`}
                                                              alt={languageOption.name}/></a>
                                <ul className="dropdown-menu" role="menu">
                                    {languageOptions.map(item =>
                                        <li key={item.key} className={languageOption.key === item.key && "active"}
                                            onClick={() => handleChangeLanguage(item.key)}>
                                            {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                                            <a href="javascript:void(0)" className="language"
                                               rel={item.key}><img src={`assets/images/${item.logo}`}
                                                                   alt={item.name}/><span
                                                className="language-label">{item.name}</span></a></li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default withTranslation()(Menu)
