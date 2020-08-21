import React from 'react';

import ArticleName from './ArticleName.js';
import PubDate from './PubDate.js';
import AuthorName from './AuthorName.js';
import PubName from './PubName.js';

class Pub extends React.Component {
    render()
    {
        return (<table className="Pub">
        <th colSpan="3"><ArticleName color={this.props.color} articleName={this.props.articleName} info={this.props.pubName}/></th>
        <tr><PubDate pubDate={this.props.pubDate} />
        <AuthorName authorName={this.props.authorName} />
        <PubName pubName={this.props.pubName} /></tr>
        </table>);
    }
}

export default Pub;
