import{AiOutlineShoppingCart} from 'react-icons/ai';
import{BsBox} from 'react-icons/bs';
import{HiOutlineUsers} from 'react-icons/hi'
import './Advantages.css';

const Advantages = () => {
    return (<div className='adv'>
        <p>
            OUR SHOP FEATURES
        </p>
        <p>
            Core advantages & reasons <br/>
            to shop with us.
        </p>
        <p>
            In our store, you would find all the necessary styles and pieces of furniture, which would perfectly suit
            your needs. Furniture Store Template contains all you need for the successful site creation.
        </p>
        <div className="adv-cards">
            <div className="adv-cards-items">
                <AiOutlineShoppingCart size='5rem' />
                <p>Wide Selection</p>
            </div>
            <div className="adv-cards-items">
                <BsBox size='5rem' />
                <p>Wide Selection</p>
            </div>
            <div className="adv-cards-items">
                <HiOutlineUsers size='5rem' />
                <p>Wide Selection</p>
            </div>
        </div>
    </div>)
}


export default Advantages;