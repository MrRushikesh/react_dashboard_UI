import React from 'react'


const MiddleSection =() =>{
        return(
            // <!--Middle Section-->
            <div id="middle-section">
                <div className="middle-sub-section">
                    {/* <!--Middle Top Section--> */}

                    <div className="middle-top-section">
                        <div className="middle-top-section-1">
                            <p>Hi Hrishi!</p>
                        </div>
                        <div className="middle-top-section-2">
                            <div className="middle-top-section-text">
                                <p>15% task completed</p>
                            </div>
                            <div className="progressBar">
                                <div className="progress"></div>
                            </div>
                        </div>
                    </div>

                    {/* <!--Card Section--> */}

                    <div className="card-section">

                        {/* <!--Card 1--> */}
                        <div className="left-card-section">
                            <div className="left-card-section-1">
                                <button className="mid-btn1"><img src="./images/icon/lightbulb.png" alt="light"/></button>
                                <button className="mid-btn2"><img src="./images/icon/more.png" alt="more"/></button>
                            </div>

                            <div className="left-card-section-2">
                                <span>R&D New Banking Mobile App</span>
                            </div>

                            <div className="left-card-section-3">
                                <div className="container">
                                    <div className="box">
                                        <img src="./images/good4u.jpg" alt="pic"/>
                                    </div>
                                    <div className="box overlay"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                    <div className="box overlay2"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                </div> 
                            </div>
                        </div>

                        {/* <!--Card 2--> */}
                        <div className="right-card-section">
                            <div className="left-card-section-1">
                                <button className="mid-btn1-card2"><img src="./images/icon/key (1).png" alt="key"/></button>
                            </div>

                            <div className="left-card-section-2-unique">
                                <span>Create Sign Up Page</span>
                            </div>
                            
                            <div className="left-card-section-3">
                                <div className="container">
                                    <div className="box">
                                        <img src="./images/good4u.jpg" alt="pic"/>
                                    </div>
                                    <div className="box overlay"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                    <div className="box overlay2"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                </div> 
                            </div>
                        </div>
                    </div>

                    {/* <!--Monthly Task Section--> */}

                    <div className="monthlyTask">
                        <span>Monthly Task</span>
                        <button className="month-btn2"><i className='fas fa-plus'></i>&nbsp;New</button>
                        <button className="month-btn1">Archive</button>
                    </div>
                    
                    {/* <!--Active Task Section--> */}

                    <div className="activeTask">
                        <button className="active-btn1">Active Tasks</button>
                        <button className="active-btn2">Completed</button>
                        <div className="active-input">
                            <i className="fa-solid fa-magnifying-glass" htmlFor="search"></i><input id="search" type="text" placeholder="Search"/>
                        </div>
                    </div>

                    {/* <!--Today Section--> */}

                    <div className="today">
                        <span>Today</span>
                        <div className="todayCard">
                            <div className="tc1">
                                <img src="./images/icon/uber.png" alt="uber"/>
                            </div>
                            <div className="tc2">
                                <span className="tc2-span1">Uber</span>
                                <span className="tc2-span2">App Design nad upgrades with new features-in progress 16 days</span>
                            </div> 
                            <div className="tc3">
                                <div className="container-tc3">
                                    <div className="box-tc3">
                                        <img src="./images/good4u.jpg" alt="pic"/>
                                    </div>
                                    <div className="box overlay-tc3"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                    <div className="box overlay2-tc3"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                </div> 
                            </div> 
                        </div>

                        <div className="todayCard">
                            <div className="tc1">
                                <img src="./images/icon/facebook.png" alt="uber"/>
                            </div>
                            <div className="tc2">
                                <span className="tc2-span1">Facebook Ads</span>
                                <span className="tc2-span2">Facebook Ads Design for CreativeCloud - Last worked 5 days ago</span>
                            </div> 
                            <div className="tc3">
                                <div className="container-tc3">
                                    <div className="box-tc3">
                                        <img src="./images/good4u.jpg" alt="pic"/>
                                    </div>
                                    <div className="box overlay-tc3"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                    <div className="box overlay2-tc3"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                </div> 
                            </div> 
                        </div>

                        <div className="todayCard">
                            <div className="tc1">
                                <img src="./images/icon/linkedin (1).png" alt="uber"/>
                            </div>
                            <div className="tc2">
                                <span className="tc2-span1">Payoneer</span>
                                <span className="tc2-span2">Linkedin Dashboard Design - Due in 3 days</span>
                            </div> 
                            <div className="tc3">
                                <div className="container-tc3">
                                    <div className="box-tc3">
                                        <img src="./images/good4u.jpg" alt="pic"/>
                                    </div>
                                    <div className="box overlay-tc3"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                    <div className="box overlay2-tc3"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                </div> 
                            </div> 
                        </div>
                    </div>

                    {/* <!--Tommorow Section--> */}

                    <div className="tommrow">
                        <span>Tommorow</span>
                        <div className="todayCard">
                            <div className="tc1">
                                <img src="./images/icon/check.png" alt="uber"/>
                            </div>
                            <div className="tc2">
                                <span className="tc2-span1">Upwork</span>
                                <span className="tc2-span2">Developing-viewed Just Now - Assigned 10 min ago</span>
                            </div> 
                            <div className="tc3">
                                <div className="container-tc3">
                                    <div className="box-tc3">
                                        <img src="./images/good4u.jpg" alt="pic"/>
                                    </div>
                                    <div className="box overlay-tc3"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                    <div className="box overlay2-tc3"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>  
            </div>
        )
    }

export default MiddleSection;