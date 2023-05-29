import './Header.css';


const Header = () => {
    return (<header>
            <div className="header-logo">
                <img src="https://mobirise.com/extensions/depotamp/assets/images/logo1.png"/>
                <p>DepotAMP</p>
            </div>
            <div className="header-menu">
                <div className="dropdown">
                    <p>Home</p>
                </div>
                <div className="dropdown">
                    <p>Live Demo</p>
                    <div className="dropdown-content">
                        <a href="#">Furniture Store</a>
                        <a href="#">Book Store</a>
                        <a href="#">Fabric Store</a>
                    </div>
                </div>
                <div className="dropdown">
                    <p>Live Demo Blocks</p>
                    <div className="dropdown-content">
                        <a href="#">Headers and Features</a>
                        <a href="#">Images and Gallery</a>
                        <a href="#">Shops</a>
                        <a href="#">Pricing and Progress</a>
                        <a href="#">Clients and Testimonials</a>
                        <a href="#">Forms and Videos</a>
                        <a href="#">Socials and Maps</a>
                        <a href="#">Footers</a>
                    </div>
                </div>
            </div>
            <button className="buy-btn">Buy Now</button>
        </header>)
}


export default Header;