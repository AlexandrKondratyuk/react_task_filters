import React, {Component} from 'react'
import './style.scss'

/**
 Class Layout is a hoc, which wrap <App/>
 <main/> is a container for all content
 */

class Layout extends Component {
    render() {
        return (
            <div className="Layout">

                <main className="Layout__main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout