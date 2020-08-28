import React from 'react';

class PerushNote extends React.Component {
    render()
    {
        return (<div className="PerushNote">
                {this.props.perushnote}
                </div>);
    }
}

export default PerushNote;
