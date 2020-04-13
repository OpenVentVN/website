import React from "react";
import {withTranslation} from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Table, Button, Notification} from "element-react"
import {LANGUAGE} from "../../../../constants";

const crypto = require('crypto')

const Documents = ({t}) => {
    const intData = [
        {
            version: '1.0.0',
            releaseDate: new Date("04/11/2020"),
            description: t('documents.table.description1'),
            uri: "assets/media/details-about-the-specification-and-operation-of-the-machine.pdf",
            name: `details-about-the-specification-and-operation-of-the-machine.pdf`,
            loadingDownload: false
        },
        {
            version: '1.0.0',
            releaseDate: new Date("04/11/2020"),
            description: t('documents.table.description2'),
            uri: "assets/media/hardware-design.zip",
            name: `hardware-design.zip`,
            loadingDownload: false
        },
        {
            version: '1.0.0',
            releaseDate: null /*new Date("04/10/2020")*/,
            description: t('documents.table.description3'),
            uri: "",
            loadingDownload: false
        }
    ]

    React.useEffect(() => {
        setData(intData)
    }, [t])

    let [data, setData] = React.useState(intData)

    const language = localStorage.getItem(LANGUAGE) || 'en'

    const columns = [
        {
            label: t('documents.table.header.version'),
            prop: "version",
            minWidth: 150,
        },
        {
            label: t('documents.table.header.releaseDate'),
            prop: "releaseDate",
            minWidth: 150,
            render: (row) => {
                return <span>{row.releaseDate ? row.releaseDate.toLocaleDateString(language) :
                    <i>{t('documents.notification.notRelease')}</i>}</span>
            }
        },
        {
            label: t('documents.table.header.description'),
            prop: "description",
            minWidth: 400
        },
        {
            label: t('documents.table.header.download'),
            headerAlign: "center",
            minWidth: 170,
            align: 'center',
            render: (row) => {
                return <Button type="primary" className={"custom-btn-download"} loading={row.loadingDownload}
                               onClick={() => {
                                   if (row.uri) {
                                       setData(data.map(item => {
                                           if (item.description === row.description) {
                                               return {...row, loadingDownload: true}
                                           }
                                           return item
                                       }))
                                       downloadURI(row.uri, `${crypto.randomBytes(2).toString('hex')}-${row.name}`)
                                       setTimeout(() => {
                                           setData(data.map(item => {
                                               if (item.description === row.description) {
                                                   return {...row, loadingDownload: false}
                                               }
                                               return item
                                           }))
                                       }, 1000)
                                   } else {
                                       Notification({
                                           title: t('documents.notification'),
                                           message: t('documents.notification.notReleaseMessage'),
                                           type: 'info'
                                       });
                                   }
                               }}>
                    <i className="fa fa-download" aria-hidden="true"></i>{t('documents.table.header.download')}
                </Button>
            }
        }
    ]
    const downloadURI = (uri, name) => {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
    }

    return (
        <div id="documents">
            <div className="container">
                <p className={"documents-title"}>{t("documents.title")}</p>
                <Table
                    style={{width: '100%'}}
                    columns={columns}
                    data={data}
                    stripe={true}
                />
            </div>
        </div>
    )
}
export default withTranslation()(Documents)
