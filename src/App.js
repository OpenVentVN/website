import React, {Suspense} from 'react'
import './i18n'
import Menu from "./components/Menu";
import "./styles/index.scss"
import 'element-theme-default';
import Content from "./components/Content";
import Footer from "./components/Footer";
import appConfigs from "./configs";
import * as firebase from 'firebase';

const app = firebase.initializeApp(appConfigs.firebase);
app.analytics();
const database = firebase.database();
const visitorsRef = database.ref('visits')

const App = () => {
    React.useEffect(() => {
        if (process.env.NODE_ENV !== 'development') {
            visitorsRef.once("value").then(function (snapshot) {
                visitorsRef.set(snapshot.val() + 1)
            })
        }

        visitorsRef.on('value', function (snapshot) {
            console.log(snapshot.val())
        })
    }, [])
    return (
        <div>
            <Suspense fallback={null}>
                <Menu/>
                <Content/>
                <Footer/>
            </Suspense>
        </div>
    )
}

export default App
