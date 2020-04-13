import React from "react";
import {withTranslation} from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha"
import appConfigs from "../../../../configs";
import axios from 'axios'
import $ from "jquery"
import {Notification, Button} from "element-react"
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const Contact = ({t}) => {
    let recaptchaRef = React.createRef();
    let [reCaptcha, setReCaptcha] = React.useState(null)
    let [loading, setLoading] = React.useState(false)
    let [showCaptcha, setShowCaptcha] = React.useState(true)

    const onChange = (value) => {
        setReCaptcha(value)
    }

    const handleSubmit = () => {
        if (reCaptcha) {
            setLoading(true)
            axios.post(`${appConfigs.urlProxy}${appConfigs.googleFormUrl}`, $('#contact-form').serialize())
                .then(res => {
                    if (res) {
                        setLoading(false)
                        setShowCaptcha(false)
                        setReCaptcha(null)
                        setTimeout(() => setShowCaptcha(true))
                        document.getElementById("contact-form").reset();
                        Notification({
                            title: t('contact.success'),
                            message: t('contact.success.message'),
                            type: 'success'
                        });
                    }
                }).catch(err => {
                console.log(err)
                if (err) {
                    setLoading(false)
                    Notification({
                        title: t('contact.error'),
                        message: t('contact.error.message'),
                        type: 'error'
                    });
                }
            })
        } else {
            Notification({
                title: t('contact.warning'),
                message: t('contact.warning.message'),
                type: 'warning'
            });
        }
    }
    return (
        <div id="contact">
            <div className="container">
                <p className={"contact-title"}>{t('contact.title')}</p>
                <form id="contact-form" className="form-horizontal" onSubmit={event => {
                    handleSubmit()
                    event.preventDefault()
                }}>
                    <div className="row">
                        <div className="col-md-4 padding-input">
                            <div className="form-group">
                                <label htmlFor="fullName">{t('contact.form.fullName')}</label>
                                <input type="text" name="entry.595208688" required className="form-control"
                                       id="fullName" placeholder={t('contact.form.typingFullName')}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 padding-input">
                            <div className="form-group">
                                <label htmlFor="displayName">{t('contact.form.email')}</label>
                                <input type="email" name="entry.1203740330" required className="form-control" id="email"
                                       placeholder={t('contact.form.typingEmail')}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 padding-input">
                            <div className="form-group">
                                <label htmlFor="title">{t('contact.form.title')}</label>
                                <input type="text" name="entry.1957330041" required className="form-control" id="title"
                                       placeholder={t('contact.form.typingTitle')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 padding-textarea">
                            <div className="row">
                                <div className="col-md-12 padding-textarea">
                                    <div className="form-group">
                                        <label htmlFor="content">{t('contact.form.content')}</label>
                                        <textarea name="entry.879463539" required className="form-control" id="content"
                                                  placeholder={t('contact.form.typingContent')} rows="4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 padding-input">
                            <div className="form-group">
                                <label htmlFor="content">{t('contact.form.validate')}</label>
                                {showCaptcha &&
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={appConfigs.siteKeyReCaptcha}
                                    onChange={onChange}
                                />}
                            </div>
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <div className="col-12 pt20">
                            <Button type="primary" nativeType="submit" className="btn btn-primary-custom" loading={loading}>{t('contact.form.submit')}</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
}
export default withTranslation()(Contact)
