import  { useState } from 'react';


function PDFViewer( pdfBase64 ) {
  
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
  };
console.log(pdfBase64)
  return (

  );
}

export default PDFViewer;
