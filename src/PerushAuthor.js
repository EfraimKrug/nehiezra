import React from 'react';

class PerushAuthor extends React.Component {
    render()
    {
        return (<td className="Author">
                {this.props.author} [[{this.props.sefer}]]
                </td>);
    }
}

export default PerushAuthor;
