import React from 'react';

class Sefer extends React.Component {
    render()
    {
        return (<span className="Sefer">
                <br/>[{this.props.sefer}]
                </span>);
    }
}

function GetSefer(props) {
  const sefer = props.sefer;
  if (sefer) {
    return <Sefer sefer={props.sefer}/>;
  }
  return null;
}

class PerushAuthor extends React.Component {
    render()
    {
        let sefer = this.props.sefer;
        return (<td className="Author">
                {this.props.author} <GetSefer sefer={this.props.sefer}/>
                </td>);
    }
}

export default PerushAuthor;
