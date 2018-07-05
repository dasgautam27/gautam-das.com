import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/das_gautam27" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/dasgautam27" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.facebook.com/das.gautam27" className="icon fa-facebook"><span className="label">Dribbble</span></a></li>
                        <li><a href="mailto:gdgautamd27@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Built with Gatsby and Drupal.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
