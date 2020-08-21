import React from 'react';

class PubName extends React.Component {
    render()
    {
        return (<td className="PubName">
        {this.props.pubName}
        </td>);
    }
}

export default PubName;
