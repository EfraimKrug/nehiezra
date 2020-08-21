import React from 'react';
import HomeLeft from './HomeLeft.js';
import HomeRight from './HomeRight.js';

class HomePage extends React.Component {
  render(){
      return (
          <div>
            <table>
              <tr>
                  <HomeLeft/>

                  <HomeRight books={this.props.books} />

              </tr>
            </table>
          </div>
        )
      };

}

export default HomePage;
