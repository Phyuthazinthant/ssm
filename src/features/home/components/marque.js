import React, { Component } from 'react'
import './homestyle.css';
import MMText from 'react-mm-text';

const Marque = (props) => {
 const aa=props.seainfo
  return (
     <div className="mar_text" >
      <marquee direction="left" behavior="scroll">

        {(props.seainfo !== null) ?

          <MMText
            text={props.seainfo}
            showFont={"unicode"}
            conveter={"rabbit"}
            detector={"knayi"}
          />

          : null
        }
        {(props.seainfo !== null) ?

          <span> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>

          : null
        }

        {(props.currentinfo !== null) ?

          <MMText
            text={" ယေန့ ျမန္မာ့ေရႊေပါက္ေစ်း " + props.currentinfo + " MMK."}
            showFont={"unicode"}
            conveter={"rabbit"}
            detector={"knayi"}
          />
          : null
        }
      </marquee>
     </div>



  )
}
export default Marque;