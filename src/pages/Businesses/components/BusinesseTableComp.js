import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';



import { BusinesseIconMeun } from './BusinessIconMeun';

const columns = [
    {
        field: 'BUSINESSNAME',
        headerName: 'BUSINESS NAME',
        width: 250,
      },
    { 
        field: 'BUSINESSCATEGORY',
        headerName: 'BUSINESS CATEGORY', 
        width: 250
        },
  { 
    field: 'EMAILADDRESS',
     headerName: 'EMAIL ADDRESS', 
     width: 250 ,
     
  },

  { 
    field: 'DATEADDED',
     headerName: 'DATE ADDED', 
     width: 200,
  },
  
  
  {
    field: 'icon',
    headerName: ' ',
    width: 50,
    sortable: false,
    renderCell: (params) => <BusinesseIconMeun {...params} />,
  },
];

const rows = [
  { id: 1, EMAILADDRESS:"Eddy@gmail.com", BUSINESSCATEGORY: 'Housing', BUSINESSNAME:"Perry Holdings", DATEADDED:"18/10/19 12:04 PM"},
  { id: 2, EMAILADDRESS:"Eddy@gmail.com",BUSINESSCATEGORY: 'Personal Loan', BUSINESSNAME:"Pay Duel & Co.",DATEADDED:"18/10/19 12:04 PM"},
  { id: 3, EMAILADDRESS:"Eddy@gmail.com",BUSINESSCATEGORY: 'Personal Loan', BUSINESSNAME:"Neimeth PLC", DATEADDED:"18/10/19 12:04 PM"},
  { id: 4, EMAILADDRESS:"Eddy@gmail.com",BUSINESSCATEGORY: 'Personal Loan', BUSINESSNAME:"Lamata INC",DATEADDED:"18/10/19 12:04 PM"},
  { id: 5, EMAILADDRESS:"Eddy@gmail.com",BUSINESSCATEGORY: 'Personal Loan', BUSINESSNAME:"Cappa & D'Alberto", DATEADDED:"18/10/19 12:04 PM"},
  { id: 6, EMAILADDRESS:"Eddy@gmail.com",BUSINESSCATEGORY: 'Personal Loan', BUSINESSNAME:"Simplex Holdings",DATEADDED:"18/10/19 12:04 PM"},
  { id: 7, EMAILADDRESS:"Eddy@gmail.com",BUSINESSCATEGORY: 'Personal Loan', BUSINESSNAME:"Temidayo Oluwaniyi", DATEADDED:"18/10/19 12:04 PM"},
  { id: 8, EMAILADDRESS:"Eddy@gmail.com",BUSINESSCATEGORY: 'Personal Loan', BUSINESSNAME:"Temidayo Oluwaniyi", DATEADDED:"18/10/19 12:04 PM"},
];

export default function  BusinessesTableComponent() {
  return (
    <div style={{ height: 400, width: '100%',marginTop:"30px", }}>
     <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
          paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 50]}
        checkboxSelection
    />
    </div>
  );
}
