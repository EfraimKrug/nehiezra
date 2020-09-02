import React from 'react';
import PubBox from './PubBox.js';
import {Document,Page} from '@react-pdf/renderer';

import samplePDF from './pdf/Nehemia_Polen_In_Search_of_the_Broken_Se.pdf';

class ArticlesPage extends React.Component {
  render(){
      return (
        <Document file={samplePDF}>
          <Page pageNumber={1} />
        </Document>
        )
      }
}

export default ArticlesPage;
