import React from "react";
import {withTranslation, Trans} from "react-i18next";

const Project = ({t}) => {
    return (<div>
        <div id="project">
                <h1 className="project-title">{t('project.title')}</h1>
                <div className="project-description">
                    <div className="container">
                    <div>
                        <div>
                            <h3>{t('project.ideasTitle')}</h3>
                            <Trans i18nKey="project.ideas">
                                ... <span>...</span> ...
                            </Trans>
                        </div>
                        <br/>
                        <div>
                                <h3>{t('project.motivationTitle')}</h3>
                                <div>
                                    <Trans i18nKey="project.motivation1">
                                        ... <span>...</span> ...
                                    </Trans>
                                </div>
                                <br/>
                                <div>
                                    <Trans i18nKey="project.motivation2">
                                        ... <span>...</span> ...
                                    </Trans>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default withTranslation()(Project)
