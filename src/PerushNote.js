import React from 'react';

class PerushNote extends React.Component {
    render()
    {
        return (<td className="PerushNote">
                {this.props.perushnote}
                </td>);
    }
}

export default PerushNote;
