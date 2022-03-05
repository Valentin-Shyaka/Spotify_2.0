import React from "react"


function Rfloaters(){
    return(
        <div>
            <div id="rfloaters">
                <div><h3 id="act">Friend activity</h3></div>
                <div className="text">
                    <p>Let freinds and followers on spotify see what you're listening to.</p>
                </div>
                <div className="friend">
                    <div id="j">
                        <img src="user.jpg" alt="" id="us"/>
                        <p id="l">CedrickManz01</p>
                    </div>
                    <div id="j">
                        <img src="user.jpg" alt="" id="us"/>
                        <p id="l">E.D.M.O.N.D</p>
                    </div>
                    <div id="j">
                        
                        <img src="user.jpg" alt="" id="us"/>
                        <p id="l">Trezzzzzor_13</p>
                    </div>

                </div>
                <div>
                    <p id="lala">Go to Settings Social and enable 'Share my listening activity on spotify.' You can turn this off at any time </p>
                </div>
                <div className="butt">
                    <input type="button" value="Settings" id="set"/>
                </div>
            </div>
        </div>
        

    );
}
export default Rfloaters;