import { InputBase as MuiInputBase } from "@mui/material";
import { SearchSvgIcon } from "../../Assets/Icons/Icons";
import styled from "styled-components";

export const SearchComponent = () => {
    const SearchContainer = styled("div")`
    display: flex;
    width: 160px;
    height: 20px;
    padding: 11px 25px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid #EFF1F4;
    margin: 1px 15px;
`;

const  InputBase = styled(MuiInputBase)(()=>({
    color: "#1A1C1F",
    fontFamily: "BR Firma",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight:" 500",
    lineHeight:" normal",
  }))

    return (
        <>
          <SearchContainer>
            <SearchSvgIcon />
            < InputBase placeholder="Search" />
         </SearchContainer>
        </>
    )
}

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Autocomplete from '@mui/material/Autocomplete';

// export default function FreeSolo() {
//   return (
//     <Stack  sx={{ width: 232,height:46, padding: "11px, 25px, 11px, 25px", borderRadius:" 8px", border: "1.5px" }}>
//       <Autocomplete
//         freeSolo
//         id="free-solo-2-demo"
      
//         // options={top100Films.map((option) => option.title)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Search"
//             InputProps={{
//               ...params.InputProps,
//               type: 'search',
//             }}
//           />
//         )}
//       />
//     </Stack>
//   );
// }