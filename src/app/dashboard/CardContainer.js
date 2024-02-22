import { Box,
    Typography ,
   Card as MuiCard,
   styled} from "@mui/material"
   import { CirleSvgIcon } from "../../assest/icons/CustomSvgIcon";

   const Card = styled(MuiCard)(() => ({
    width: "260px",
    height:" 117px",
    flexshrink: "0",
    borderRadius: "10px",
    border: "1px solid #F1F0F5",
    background:" var(--Neutrals-White, #FFF)",
    boxShadow:" 0px 1px 12px 0px rgba(21, 41, 82, 0.03)",
    marginTop:"20px",
  }))

export const CardContainer = () => {

    return(
        <Box sx={{display:"flex", justifyContent:"space-between"}}> 
        <Card>
            <Box sx={{display:"flex" , margin:"10px 20px" }} >
            <Typography
            sx={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"13px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
                paddingTop:"10px"
            }}>Total Businesses</Typography>
            <Box>
            <CirleSvgIcon />
            </Box>
            </Box>
            <Box sx={{margin:"10px 20px"}}>
            <Typography sx={{
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle:" normal",
            fontWeight:" 600",
            color:" #1A1C1F",
            lineHeight: "36px"
            }}>56</Typography>
            </Box>
        </Card>
        <Card>
        <Box sx={{display:"flex" , margin:"10px 20px" }} >
            <Typography
            sx={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"13px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
                paddingTop:"10px"
            }}>Total Payments</Typography>
             <CirleSvgIcon />
            </Box>
            <Box sx={{margin:"10px 20px"}}>
            <Typography sx={{fontFamily: "Inter",
            fontSize: "24px",
            fontStyle:" normal",
            fontWeight:" 600",
            color:" #1A1C1F",
            lineHeight: "36px"
            }}>NGN 120,000,000</Typography>
            </Box>
        </Card>
        <Card>
        <Box sx={{display:"flex" , margin:"10px 20px" }} >
            <Typography
            sx={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"13px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
                paddingTop:"10px"
            }}>Failed Payments</Typography>
             <CirleSvgIcon />
            </Box>
            <Box sx={{margin:"10px 20px"}}>
            <Typography sx={{fontFamily: "Inter",
                    fontSize: "24px",
                    fontStyle:" normal",
                    fontWeight:" 600",
                    color:" #1A1C1F",
                    lineHeight: "36px"
            }}>NGN 2,500,000</Typography>
            </Box>
        </Card>
        <Card>
        <Box sx={{display:"flex" , margin:"10px 20px" }} >
            <Typography
            sx={{
                color:" #1A1C1F",
                fontFamily:"BR Firma",
                fontSize:"13px",
                fontStyle:"normal",
                fontWeight:"400",
                lineHeight:"21px",
                width: "180px",
                paddingTop:"10px"
            }}>Pending Payments</Typography>
            <Box sx={{
                width: "24px",
                height:" 24px",
                flexshrink:"0"
                }}>
            <CirleSvgIcon />
            </Box>
            
            </Box>
            <Box sx={{margin:"10px 20px"}}>
            <Typography sx={{fontFamily: "Inter",
            fontSize: "24px",
            fontStyle:" normal",
            fontWeight:" 600",
            color:" #1A1C1F",
            lineHeight: "36px"
            }}>NGN 3,200,000</Typography>
            </Box>
        </Card>
        </Box>
    )
}