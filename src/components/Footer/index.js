import React from "react";
import {withTranslation} from "react-i18next";

const Footer = ({t}) => {
    return (
        <footer>
            <div className="footer-limiter">
                <p className={"footer-title"}>{t('footer.company')}</p>
            </div>

        </footer>
    )
}

export default withTranslation()(Footer)
