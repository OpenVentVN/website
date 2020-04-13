import React from "react";
import {withTranslation} from "react-i18next";
import Contact from "./components/Contact"
import Project from "./components/Project";
import Technique from "./components/Technique";
import Team from "./components/Team";
import Documents from "./components/Documents";
const Content = () => {
    return (
        <>  <Project/>
            <Technique/>
            <Team/>
            <Documents/>
            <Contact/>
        </>)
}

export default withTranslation()(Content)
