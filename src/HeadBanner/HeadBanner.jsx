import './HeadBanner.css'

const HeadBanner = () => {
    return (<div className="head-about">
            <div className="head-about-overlay"></div>
            <div className="head-about-content">
                <p>MAY-2019 #depotamp</p>
                <p>Furniture Store Template</p>
                <p>Furniture Store</p>
                <p>Revive every area in your house for less with furnishings that's on-trend and
                    also economical, also. Find ideal pieces for huge residences, little spaces,
                    houses, workshops. Locate both comfort and also innovative style amongst our
                    choice of furniture. Visit your regional store to browse even more and also
                    purchase. What do you think of the Furniture Store Template?</p>
                <button className="buy-btn">Shop Now</button>
            </div>
            <div className="adress">
                <div className="adress-city-card">
                    <p>London, UK</p>
                    <p>Chestnut Street 22, 163</p>
                </div>
                <div className="adress-city-card">
                    <p>New York, US</p>
                    <p>Franklin Street 160-D</p>
                </div>
            </div>
        </div>)
}

export default HeadBanner;