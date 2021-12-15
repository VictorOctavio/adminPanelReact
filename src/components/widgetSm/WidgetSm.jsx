import { RemoveRedEyeSharp } from "@material-ui/icons";
import React from "react";
import "./widgetsm.css";

export default function WidgetSm() {
  const woman1 =
    "https://st.depositphotos.com/1715570/4404/i/950/depositphotos_44040335-stock-photo-cheerful-young-african-american-woman.jpg";

const man = 'https://i.pinimg.com/736x/72/c5/4f/72c54f8683612516c7c71a29fae53a05.jpg'
const man2 = 'https://i.pinimg.com/736x/17/80/4c/17804c24a2676ba5e3cf2c3ef84c7f69.jpg'

  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">New Join Members</div>

      <div className="widgetSmUserList">
        <div className="widgetSmUser">
          <img src={woman1} alt="" className="widgetSmUserAvatar" />
          <div className="widgetSmUserDescription">
            Anna Keller <span className="profession">Software Engineer</span>
          </div>
        </div>
        <button className="widgetSmBtnvisibily">
          <RemoveRedEyeSharp className="widgetSmBtnIcon" /> Display
        </button>
      </div>

      <div className="widgetSmUserList">
        <div className="widgetSmUser">
          <img src={man} alt="" className="widgetSmUserAvatar" />
          <div className="widgetSmUserDescription">
            Alex Ronney <span className="profession">Web Developer</span>
          </div>
        </div>
        <button className="widgetSmBtnvisibily">
          <RemoveRedEyeSharp className="widgetSmBtnIcon" /> Display
        </button>
      </div>

      <div className="widgetSmUserList">
        <div className="widgetSmUser">
          <img src={man2} alt="" className="widgetSmUserAvatar" />
          <div className="widgetSmUserDescription">
            Brant Fabian <span className="profession">Manager</span>
          </div>
        </div>
        <button className="widgetSmBtnvisibily">
          <RemoveRedEyeSharp className="widgetSmBtnIcon" /> Display
        </button>
      </div>

    </div>
  );
}
