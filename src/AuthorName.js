import React from 'react';

class AuthorName extends React.Component {
    render()
    {
        // console.log(this.props.authorName);
        return (<div className="AuthorName">
        {this.props.authorName}
        </div>);
    }
}

export default AuthorName;
