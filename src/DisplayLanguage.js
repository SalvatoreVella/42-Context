import React from "react"
import { LanguageContext } from "./LanguageContext"

export default class DisplayLanguage extends React.Component {
    state = {
        traslation: {
            en: "The current language is English",
            it: "La lingua corrente è Italiano"
          }
    }
    render() {
        return <LanguageContext.Consumer>
            {lang => <h1>{this.state.traslation[lang]}</h1>}
        </LanguageContext.Consumer>
    }
}