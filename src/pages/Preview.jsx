import React from 'react';
import {PDFDownloadLink,PDFViewer} from "@react-pdf/renderer";
import Pdf from '../components/Pdf';

export default function () {
  return (
    <>
    <PDFViewer >
      <Pdf/>
    </PDFViewer>
      <div>
        <PDFDownloadLink document={<Pdf />} fileName="1.pdf">
          {({ blob, loading, url, error }) =>
            loading ? <button>loading</button> : <button>Download</button>
          }
        </PDFDownloadLink>
      </div>
    </>
  );
}
