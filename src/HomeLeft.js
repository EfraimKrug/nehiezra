import React from 'react';
import Picture from './Picture.js';
import RebNehemiaSmall from './images/RebNehemiaSmall.jpeg';

class HomeLeft extends React.Component {
  render(){
    return (<td className="HomeLeft">
        <tr>
        <td>
        <Picture src={RebNehemiaSmall}/>
        </td>
        <td>
        <span className="floatRight">
        For the Baal Shem Tov, the spiritual integrity of the
        interpreter is more important than intellectual skill
        or knowledge of the canon. When one learns Torah from a
        teacher of proper spirit, then the teaching “is fruitful
        and multiplies”; that is, the wisdom is alive and robust,
        reverberating and sparkling with implications, repercussions,
        and transformative power.<br/><br/>
        -- Ben Porat Yosef (Piotrkow, 1884), quoted in Keter Shem Tov
        </span>
        </td>
        </tr>
    </td>);
      }
}

export default HomeLeft;
