import React from 'react'

export const Main = () => {
    return (
        <div className="containerMain">
            <div className="infoMain">
                <h3 className="titleMain">INFORMATION</h3>
                <div className="subContainerMain">
                    <h5>Website where you can control your income.</h5>
                    <h5>Technologies used:</h5>
                    <div className="technologies">                    
                        <div>
                            <h6>Front-End:</h6>
                            <p>React.js</p>
                            <p>Redux</p>
                            <p>Bootstrap</p>
                        </div>
                        <div>
                            <h6>Back-End:</h6>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>Node.js</p>
                        </div>

                    </div>
                    
                        <div className="developed">
                            <p>Developed by: Walter Romero</p>
                            <div>
                                <a href="https://www.linkedin.com/in/walterromero09/"><img src="assets/images/61109.png"></img></a>
                                <a href="mailto:wromero1893@gmail.com"><img src="assets/images/email.png"></img></a>
                            </div>
                        </div>
                    
                </div>
            </div>
            </div>
    )
}
