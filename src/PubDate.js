import React from 'react';

class PubDate extends React.Component {
  render()
  {
    return (<td className="PubDate">
    {this.props.pubDate}
    </td>);
  }
}


export default PubDate;
