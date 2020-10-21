import React from 'react'
import MMText from 'react-mm-text';

const Tbody = props => {
    const { karat, purity, mmgold, puregold, metal } = props;
    return (
        <tr>
            <td>{karat}</td>
            <td>{purity}</td>
            <td>
                <MMText
                    text={mmgold}
                    showFont={"unicode"}
                    conveter={"rabbit"}
                    detector={"knayi"}
                />

            </td>

            <td>{puregold}</td>
            <td>{metal}</td>
        </tr>
    )
}
export default Tbody;