import "./style.css";
import Heads from "../../assets/images/bgRemovedHeads.png"
import Tails from "../../assets/images/bgRemovedTails.png"
import { useState } from "react";
import CoinTossedAudio from "../../assets/audio/coinTossed.mp3"

const Dashboard = () => {

    const [tossAreaAnimation, setTossAreaAnimation] = useState("none")
    const [coinContainerAnimation, setCoinContainerAnimation] = useState("none")
    const [tossContainerRotate, setTossContainerRotate] = useState("0")
    const [tossStarted, setTossStarted] = useState(false)

    const getResult = () => {
        let array = ["Heads", "Tails"]
        let randomNumber = Math.round(Math.random())
        return array[randomNumber]
    }

    let audio = new Audio(CoinTossedAudio);

    const flipCoin = () => {
        //play audio
        audio.play();

        setTossStarted(true)
        let result = getResult()
        console.log("check the coin result", result)
        setTossAreaAnimation("move 1.5s 1 linear")
        setCoinContainerAnimation("flip .5s 3")
        setTimeout(() => {
            if (result === "Heads") {
                setTossContainerRotate("180deg")
            } else {
                setTossContainerRotate("0")
            }
            setTossAreaAnimation("none")
            setCoinContainerAnimation("none")
            setTossStarted(false)
        }, 1500)
    }
    return (
        <>
            <audio id="coinTossedAudio" preload="auto">
                <source src={CoinTossedAudio} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <div className="coinTossDashboardMain">
                <div className="coinTossDashboardHeader">
                    <div className="coinTossDAshboardHeaderCheemsText">Cheems Premier League</div>
                    <div className="coinTossDashboardDescription">
                        <div className="coinTossDashboardDescriptionInner">
                            <div className="coinTossDashboardDescriptionImgAndText">
                                <img src={Heads} /> <span>- Heads</span>
                            </div>
                            <div className="coinTossDashboardDescriptionImgAndText">
                                <img src={Tails} /> <span>- Tails</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coinTossDashboardDescriptionAndTossArea">
                    <div className="coinTossDashboardTossArea" style={{ animation: tossAreaAnimation }}>
                        <div className="coinTossDashboardTossAreaCoinContainer"
                            style={{ animation: coinContainerAnimation, transform: `rotateY(${tossContainerRotate})` }}>
                            <div className="coinTossDashboardTossAreaCoinHeads">
                                {/* <img src={Heads}/> */}

                            </div>
                            <div className="coinTossDashboardTossAreaCoinTails">
                                {/* <img src={Tails}/> */}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="coinTossDashboardFlip">
                    {tossStarted ?
                        <button disabled={true} className="coinTossDashboardTossButtonDisabled">
                            Toss
                        </button> :
                        <button onClick={flipCoin} className="coinTossDashboardTossButtonEnabled">Toss</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard;