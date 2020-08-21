import React from 'react';
import Pub from './Pub.js';

class PubList extends React.Component {
    render()
    {
        let articleList = this.props.articleList;
        let filterText = this.props.filterText;
        let rows = [];
        let year = null;
        articleList.forEach(function(article){
            if(article.title.indexOf(filterText) === -1)
              return;
            if(article.published.indexOf(year) < 0){
              year = article.published.match(/\d\d\d\d/);
              rows.push(<tr>
                        <Pub
                            pubDate={year}
                            articleName=''
                            authorName=''
                            pubName=''
                            color=''
                            // pubDate={article.published.match(/\d\d\d\d/)}
                          />
                        </tr>
                        );
              rows.push(<tr>
                        <Pub
                            pubDate=''
                            articleName={article.title}
                            authorName={article.author}
                            pubName={article.info}
                            color={article.color}
                            // pubDate={article.published.match(/\d\d\d\d/)}
                          />
                        </tr>
                        );

            } else {
              rows.push(<tr>
                        <Pub
                            pubDate=''
                            articleName={article.title}
                            authorName={article.author}
                            pubName={article.info}
                            color={article.color}
                          />
                        </tr>
                        );
            }
        });

        return (<div className="PubList">
          <table>
            {rows}
          </table>
        </div>);
    }
}


export default PubList;
