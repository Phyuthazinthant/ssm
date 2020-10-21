import React from 'react'
import MMText from 'react-mm-text';

const Mmtxt = props => {
    const { text } = props;
    return (
        
                <MMText
                    text={text}
                    showFont={"unicode"}
                    conveter={"rabbit"}
                    detector={"knayi"}
                />

            
    )
}
export default Mmtxt;