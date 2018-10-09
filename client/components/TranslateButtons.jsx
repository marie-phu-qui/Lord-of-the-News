import React from 'react'
import { connect } from 'react-redux'
import { gollumify } from '../../server/lib/gollum'
import { nazgulify } from '../../server/lib/nazgul'
import { changeLanguage } from '../actions'
// import Bookmarklet from './Bookmarklet'

// Must keep export here also for testing purposes 

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
            // <nav className="navbar navbar-expand-lg ">
            <div className="container" >
                <div className="button-group">           
                            <button type="button" className="btn btn-success btn-md mr-1" onClick={() => this.handleLanguageChange(null)}>English</button>
                            <button type="button" className="btn btn-success btn-md mr-1" onClick={() => this.handleLanguageChange(gollumify)}>Gollumify</button>
                            <button type="button" className="btn btn-success btn-md mr-1" onClick={() => this.handleLanguageChange(nazgulify)}>Nazgul</button>
                    {/* <Bookmarklet /> */}
                </div>
            </div>
            //  </nav>
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


