import './scss/others.css'
import OthersCard from './othersCard'


export default function Others(){
    return(
        <>
            <p className='others-header'>
                Popular Auction
            </p>
            <div className='others-container'>
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
                <OthersCard />
            </div>
        </>
    )
}