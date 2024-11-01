import React, {useContext} from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import {Context  } from "../../Context/Context";

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className="main">
      <div className="nav">
        <p>Chatpod</p>
        <img src={assets.user_icon} alt="" />
      </div>
      
      <div className="main-container">
      {!showResult?<>
        <div className="greets">
          <p>
            <span>Hello Brain's.</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        
        {/* <div className="cards">
          <div className="card">
            <p>suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept:urban planning</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.compass_icon} alt="" />
          </div>
        </div> */}
        </>:
        <div className='result'>
          <div className="result-title">
            <img className='img-profile' src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            {loading?<>
            <div className="">
              <img className='img' src={assets.prompt_icon1} alt="" />
              </div>
            <div className="loader">
              <div className="loader1">
              <hr />
              </div>
              <div className="loader2">
              <hr />
              </div>
              <div className="loader3">
              <hr />
              </div>
            </div>
            </>
            :<>
            <img className='imgs' src={assets.prompt_icon} alt="" />
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            </>
            }
          </div>
        </div>
        }
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
            <div className='access-btn'>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()}src={assets.send_icon} alt="" />
            </div>
          </div>
          <div className="bottom-box">
            <p className="bottom-info">chatpod will help you out @chatpod</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
