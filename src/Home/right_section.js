import React from 'react';

const RightSection = () => {
    return(
        // <!--Right-section-->
        <div id="right-section">
            <div className="rightSecMain">
                {/* <!--Right Section  1--> */}
                <div className="rightSec1">
                     {/* <!--Schedule Section--> */}
                    <div className="rightSec1-head">
                        <span>Today's Schedule</span>
                        <button><img src="./images/icon/dots.png" alt="fourdot" className="img1"/>&nbsp;&nbsp;<img src="./images/icon/calendar.png" alt="calender" className="img2"/></button>
                    </div>

                    {/* <!--Call Invite Section--> */}
                    <div className="rightSec1-middle">
                        <div className="rm1">
                            <span className="rm1-text1">30 min call with Client</span>
                            <span className="rm1-text2">Project Discovery Call</span>
                        </div>
                        <div className="rm2">
                            <button>&#x2b;&nbsp;Invite</button>
                        </div>
                    </div>

                    {/* <!--Calling Section--> */}
                    <div className="rightSec1-bottom">
                        <div className="rightSec1-bottom-container">

                            <div className="rbc1">
                                <div className="container-rbc1">
                                    <div className="box-rbc1">
                                        <img src="./images/good4u.jpg" alt="pic"/>
                                    </div>
                                    <div className="box overlay-rbc1"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                    <div className="box overlay2-rbc1"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                </div> 
                            </div>

                            <div className="rbc2">
                                <span>28:35</span>
                            </div>

                            <div className="rbc3">
                                <button><img src="./images/icon/telephone.png" alt="telephone"/></button>
                                <button><img src="./images/icon/dots.png" alt="dots"/></button>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!--Right Section 1 End Here--> */}

                {/* <!--Right Section 2--> */}
                <div className="rightSec2">
                    <div className="rightSec2-top-container">  
                        <div className="rtc-1">
                            <span className="rtc1-text1">Design Project</span>
                            <span className="rtc1-text2">In progress</span>  
                        </div>

                        <div className="rtc-2">
                            <button><img src="./images/icon/dot.png" alt="dot"/></button>
                        </div>
                    </div>

                    <div className="rightSec2-bottom-container">
                        <div className="rbc2-left">
                            <span className="rbc2-left-text1">Completed</span>
                            <span className="rbc2-left-text2">114<sup><i className="fa-solid fa-circle-xmark"></i></sup></span>
                        </div>

                        <div className="rbc2-middle">
                            <span className="rbc2-middle-text1">In Progress</span>
                            <span className="rbc2-middle-text2">24<sup><i className="fa-solid fa-circle-xmark"></i></sup></span>
                        </div>

                        <div className="rbc2-right">
                            <span className="rbc2-right-text1">Team members</span>
                            <div className="container-rbc1">
                                <div className="box-rbc1">
                                    <img src="./images/good4u.jpg" alt="pic"/>
                                </div>
                                <div className="box overlay-rbc1"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                                <div className="box overlay2-rbc1"><img src="./images/cheapthrills.jpg" alt="pic"/></div>
                            </div> 
                           
                        </div>
                    </div>
                </div>
                {/* <!--Right Section 2 End Here--> */}


                {/* <!--Right Section  3--> */}
                <div className="rightSec3">
                    <div className="rightSec3-top-container">
                        <span>New Task</span>
                        <button><img src="./images/icon/dot.png" alt="dot"/></button>
                    </div>

                    <div className="rightSec3-middle-container">
                        <span>Task Title</span>
                        <input type='text' placeholder='Create New'/>
                    </div>

                    <div className="rightSec3-bottom-container">
                        <span>
                            <span className="emoji-1">&lt;</span>	
                            <span className="emoji-2">&#128103;</span>
                            <span className="emoji-2">&#127881;</span>
                            <span className="emoji-2">&#128514;</span>
                            <span className="emoji-2">&#128515;</span>
                            <span className="emoji-2">&#128541;</span>
                            <span className="emoji-2">&#128526;</span>
                            <span className="emoji-2">&#128519;</span>
                            <span className="emoji-2">&#128512;</span>
                            <span className="emoji-2">&#128105;</span>
                            <span className="emoji-2">&#128514;</span>
                            <span className="emoji-1">&gt;</span>	
                        </span>
                    </div>
                </div>
                {/* <!--Right Section 3 End Here--> */}

                {/* <!--Right Section 4--> */}
                <div className="rightSec4">
                    <div className="rightSec4-main">
                        <span>Add Collaborators</span>

                        <div className="rightSec4-sub">
                            <div className="rightSec4-btn1">
                                <div className="btn1-img"><img src="images/profilepic.jpg" alt="pic"/></div>
                                <div className="btn1-text">Angela</div>
                                <div className="btn1-icon">&times;</div>
                            </div>

                            <div className="rightSec4-btn2">
                                <div className="btn2-img"><img src="images/profilepic.jpg" alt="pic"/></div>
                                <div className="btn2-text">Sabira</div>
                                <div className="btn2-icon">&times;</div>
                            </div>
            
                            <button className="add">&#x2b;</button>
                            <button className="more">&gt;</button>
                        </div>
                    </div>
                </div>
                {/* <!--Right Section 4 End Here--> */}
            </div>
        </div>
    )
}

export default RightSection;