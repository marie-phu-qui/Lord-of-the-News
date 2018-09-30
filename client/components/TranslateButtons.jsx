import React from 'react'
import {connect} from 'react-redux'
import { translate } from '../../server/lib/gollum'
import { nazgulify } from '../../server/lib/nazgul'
import {changeLanguage} from '../actions'

class TranslateButtons extends React.Component {
    constructor(props) {
    super(props)

    this.handleLanguageChange = this.handleLanguageChange.bind(this)
    }

    //On event function for handling click
    handleLanguageChange(language) {
        this.props.changeLanguage(language)
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg ">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button class="nav-link" onClick={() => this.handleLanguageChange(null)}>English</button> 
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" onClick={() => this.handleLanguageChange(translate)}>Gollumify</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" onClick={() => this.handleLanguageChange(nazgulify)}>Nazgul</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

//Receiving data from redux store
const mapStateToProps = state => ({
    language: state.language
})

const mapDispatchToProps = dispatch => ({
    changeLanguage: (language) => dispatch(changeLanguage(language))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(TranslateButtons);


