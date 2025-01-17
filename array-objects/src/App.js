import React from 'react';
import TableView from './Tableview';
import './index.css';

const App = () => {
  const data = [
     { ID: 1, Name: 'Susmitha', Age: 19 },
     { ID: 2, Name: 'Gayathri', Age: 19 },
     { ID: 3, Name: 'Hema', Age: 20 },
     { ID: 4, Name: 'Charishma', Age: 19 },
     { ID: 5, Name: 'Sruthi', Age: 19 },
  ];
  return (
     <div>
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid blue', paddingTop: '20px', marginBottom: '100px' }}>
           Array of Objects - Table View
        </h1> 
        <TableView data={data} />
     </div>
  );
};
export default App;