import React from 'react'
import { connect } from 'react-redux'
import { gollumify } from '../../server/lib/gollum'
import { nazgulify } from '../../server/lib/nazgul'
import { changeLanguage } from '../actions'
// import Bookmarklet from './Bookmarklet'

export class TranslateButtons extends React.Component {
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
            <nav className="navbar navbar-expand-lg ">
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => this.handleLanguageChange(null)} type="button" class="btn btn-light btn-lg">English</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => this.handleLanguageChange(gollumify)} type="button" class="btn btn-light btn-lg">Gollumify</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={() => this.handleLanguageChange(nazgulify)} type="button" class="btn btn-light btn-lg">Nazgul</button>
                        </li>
                    </ul>
                    {/* <Bookmarklet /> */}
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


