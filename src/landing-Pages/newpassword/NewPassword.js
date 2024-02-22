import React from "react";
import { Box, Typography, styled ,FormControl, Button} from "@mui/material";
export const NewPassword = () => {
    const HomePage = styled(Box)`
    width: 1440px;
    height: 900px;
    background: var(--Colours-White-100, #FFF);
    `
    const MiddlePage = styled(Box)`
    top: 50%;
    left: 50%;
    width: 344px;
    height: 338px;
    margin-top: -9em;
    margin-left: -15em;
    position: fixed;
    flex-shrink: 0;
    `
    const NewText = styled(Typography)`
    color: var(--v-2-neutrals-shades-900, #040404);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px; /* 135.714% */
    letter-spacing: -0.1px;
    `
    const SmallText = styled(Typography)`
    color: #23203D;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 169.231% */
    width: 336px;
    `
    const FormBody = styled(Box)`
    width: 344px;
    height: 63px;
    flex-shrink: 0;
    `
    const  FormLable = styled(Typography)`
    color: var(--v-2-neutrals-shades-900, #040404);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 153.846% */
    letter-spacing: -0.12px;
    `
    const FormBodyLayout = styled(FormControl)`
    padding-top:20px;
    `
    const TextareaForm = styled('Textarea')`
    display: flex;
    padding: 9px 12px;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #EBEDEF;
    background: #FFF;
    width: 318px;
    `
    const Buttonlayout = styled(Box)`
    width: 344px;
    height: 48px;
    flex-shrink: 0;
    padding-top:10px;
    `
    const ButtonControl = styled(Button)`
    width: 344px;
    height: 44px;
    flex-shrink: 0;
    `
    return (
        <HomePage>
            <MiddlePage>
                <NewText>Set a new Password</NewText>
                <SmallText>Enter a new password to access the settlement portal</SmallText>
                <FormBodyLayout>
                <FormBody>
                    <FormLable>Password</FormLable>
                       <TextareaForm />
                </FormBody>
                <FormBody>
                    <FormLable>Confirm Password</FormLable>
                       <TextareaForm />
                </FormBody>
                </FormBodyLayout>
                <Buttonlayout>
                <ButtonControl color="primary" variant="contained">Change password</ButtonControl>
                </Buttonlayout>
            </MiddlePage>
        </HomePage>
    )
}