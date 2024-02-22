import React from "react"
import { NavLink } from "react-router-dom";
import {styled,Box, Typography, Button}  from "@mui/material"

export const PasswordReset = () => {
    const FormBody =styled (Box)`
    width: 1440px;
    height: 900px;
    `
    const Container = styled (Box)`
    top: 50%;
    left: 50%;
    width: 344px;
    margin-top: -9em;
    margin-left: -15em;
    position: fixed;
    flex-shrink: 0;
    `
    const Text = styled(Typography)`
    color: var(--v-2-neutrals-shades-900, #040404);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px; /* 135.714% */
    letter-spacing: -0.1px;
    `
    const LayoutText = styled(Box)`
    width: 362px;
    height: 43px;
    flex-shrink: 0;
    padding-top:10px;
    `
    const TextBox = styled(Typography)`
    color: #23203D;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 169.231% */
    `
    const LayoutForm = styled(Box)`
    display: flex;
    padding-bottom: 1px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3px;
    flex: 1 0 0;
    padding-top:25px;
    `
    const EmailLabel  = styled(Typography)`
    color: #1A1C1F;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 153.846% */
    letter-spacing: -0.12px;
    `
    const TextareaContainer = styled('Textarea')`
    display: flex;
    padding: 9px 12px;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #EBEDEF;
    background: #FFF;
    width: 318px;
    `
    const ButtonLayout = styled(Box)`
    width: 344px;
    height: 48px;
    flex-shrink: 0;
    padding-top:20px;
    `
    const ButtonControl = styled(Button)`
    width: 344px;
    height: 44px;
    flex-shrink: 0;
    `
    const ReturnText = styled(Typography)`
    color: var(--v-2-neutrals-shades-500, #262626);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.12px;
    `

    return (
        <FormBody>
            <Container>
            <Text>Forgot your password?</Text>
            <LayoutText>
                <TextBox>
                    Enter your email address and will send you a link to reset your password.
                </TextBox>
            </LayoutText>
            <LayoutForm>
                <EmailLabel>Email address</EmailLabel>
                <TextareaContainer />
            </LayoutForm>
            <ButtonLayout>
            <ButtonControl  color="primary" variant="contained">Continue</ButtonControl>
            </ButtonLayout>
            <ReturnText> Return to <NavLink to="/SignIn">Log in</NavLink>
            </ReturnText>
            </Container>
        </FormBody>
    )
}