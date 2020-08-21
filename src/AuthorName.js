import React from 'react';

class AuthorName extends React.Component {
    render()
    {
        // console.log(this.props.authorName);
        return (<td className="AuthorName">
        {this.props.authorName}
        </td>);
    }
}

export default AuthorName;
