import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';

import { TranstionViewsMeun } from '../TransationMeun/TransationViewsMeun';



const columns = [
    {
        field: 'BUSINESSNAME',
        headerName: 'BUSINESS NAME',
        width: 250,
      },
    { 
        field: 'TOTALAMOUNT',
        headerName: 'TOTAL AMOUNT', 
        width: 250,
        },
  { 
    field: 'TRANSACTIONID',
     headerName: 'TRANSACTION ID', 
     width: 250 ,
  },

  { 
    field: 'DATETIME',
     headerName: 'DATE & TIME', 
     width: 200,
  },
  
  {
    field: 'icon',
    headerName: ' ',
    width: 50,
    sortable: false,
    renderCell: (params) => <TranstionViewsMeun {...params} />,
  },
];



const rows = [
  { id: 1, TRANSACTIONID:"#199-238-2953",TOTALAMOUNT: '₦4,000,000.00', BUSINESSNAME:"Lamata PLC.", DATETIME:"18/10/19 12:04 PM"},
  { id: 2, TRANSACTIONID:"#199-238-2953",TOTALAMOUNT: '₦4,000,000.00', BUSINESSNAME:"Dangote PLC..", DATETIME:"18/10/19 12:04 PM"},
  { id: 3, TRANSACTIONID:"#199-238-2953",TOTALAMOUNT: '₦4,000,000.00', BUSINESSNAME:"Babcock University", DATETIME:"18/10/19 12:04 PM"},
  { id: 4, TRANSACTIONID:"#199-238-2953",TOTALAMOUNT: '₦4,000,000.00', BUSINESSNAME:"Unilever", DATETIME:"18/10/19 12:04 PM"},
  { id: 5, TRANSACTIONID:"#199-238-2953",TOTALAMOUNT: '₦4,000,000.00', BUSINESSNAME:"Connosoir apps", DATETIME:"18/10/19 12:04 PM"},
  { id: 6, TRANSACTIONID:"#199-238-2953",TOTALAMOUNT: '₦4,000,000.00', BUSINESSNAME:"MyXalary", DATETIME:"18/10/19 12:04 PM"},
  { id: 7, TRANSACTIONID:"#199-238-2953",TOTALAMOUNT: '₦4,000,000.00', BUSINESSNAME:"Parkwell.ng", DATETIME:"18/10/19 12:04 PM"},
  { id: 8, TRANSACTIONID:"#199-238-2953",TOTALAMOUNT: '₦4,000,000.00', BUSINESSNAME:"Spdtst", DATETIME:"18/10/19 12:04 PM"},
];

export default function TransactionTableComponent() {
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
