import { Box, Typography,Stack} from "@mui/material"



import { Export } from "component/Export/Export";
import { SearchComponent } from "component/SearchComponent";
import TransactionTableComponent from "./components/TransationTable/TransationTableComp";
import { TransactionFilterMeun } from "./components/TransationMeun/TransationFilterMeun";

const drawerWidth = 34;


export const Transations = () => {

    return (
    <>
        <Stack sx={{marginLeft:drawerWidth, paddingTop:"90px"}} spacing={2}>
            <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h5" sx={{ marginTop: '5px' }}>Transactions</Typography>
                <SearchComponent />
            </Box>
            <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'flex-end',  marginLeft:"400px"}}>
                <TransactionFilterMeun />
                <Export />
            </Stack>
            </Box>
                    <Stack spacing={2}>
                        <TransactionTableComponent />
                    </Stack>
          </Stack>
      
    </>   
    )

}
