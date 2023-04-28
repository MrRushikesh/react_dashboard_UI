import React from 'react';

const LeftSection = (props) => {
    // console.log(props)


    const renderMenu = props.menuData.map((item) => {
        return(
            <button className="menuCard" key={item.id}>
                <span><i className='fas fa-comment-alt'></i>&nbsp; &nbsp;{item.menu}</span>
            </button>
        )
    })




    return(
        <>
      {/* <!--Left Section--> */}
            <div id="left-section">
                {/* <!--Profile Section--> */}
                <div className="profile-section">
                    <div className="corner-btn-section">
                        <span className="btn1"><i className="fa-solid fa-circle-xmark"></i></span>     
                        <span className="btn2"><i className="fa-solid fa-circle-minus"></i></span>
                        <span className="btn3"><i className="fa-solid fa-circle-minus"></i></span>   
                    </div>
                    <div className="corner-profile-section">
                        <div className="picture-section">
                            <img src="./images/attention.jpg" alt="pic"/>
                        </div>
                        <div className="name-section">
                            <div className="name-section-text1">Rushikesh Ingale</div>
                            <div className="name-section-text2">Sr. Visual Designer</div>  
                        </div>
                    </div>
                </div>
                
                {/* <!--Menu Section--> */}
                <div  className="menu-section">
                        <div className="menu-card-section">
                        <p>Menu</p>
                            {renderMenu}
                        </div>
                </div>

                {/* <!--Favorities Section--> */}
                <div className="favorites-section">
                    <div className="favorites-main-section">
                        <p>Favorites</p>
                        <div className="favoritesCard"><span className="circleCol1"><i className="fa-sharp fa-regular fa-circle"></i></span>&nbsp; &nbsp;Redwhale Design</div>
                        <div className="favoritesCard"><span className="circleCol2"><i className="fa-sharp fa-regular fa-circle"></i></span>&nbsp; &nbsp;Mobile App Mock</div>
                        <div className="favoritesCard"><span className="circleCol3"><i className="fa-sharp fa-regular fa-circle"></i></span>&nbsp; &nbsp;UI Design Revision</div>
                    </div>
                </div>

                {/* <!--Copyright Section--> */}

                <div className="copyright-section">
                    <div className="copyright-main-section">
                        <button><i className='fas fa-plus'></i></button>
                        <p>2021 Rushikesh License</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LeftSection;