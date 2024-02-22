import { React } from "react";
//import styled  from '@emotion/styled';
//import logo from "assests/Layout/logo.png"
import { NavLink } from "react-router-dom";
import {Typography ,Button,FormControl,styled,Box } from '@mui/material';

export const SignIn = () => {
    const FullPage = styled(Box)`
    width: 1440px;
    height: 900px;
    background: var(--colours-white-100, #FFF);
    `
    const Text = styled(Typography)`
    color: var(--colours-greys-licorice-600, #1A1C1F);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px; /* 135.714% */
    letter-spacing: -0.1px;
    `
    const Container =  styled(Box)`
    top: 50%;
    left: 50%;
    width: 362px;
    height: 232px;
    margin-top: -9em;
    margin-left: -15em;
    position: fixed;
    flex-shrink: 0;
     `
    const TextareaContainer = styled("Textarea")`
    display: flex;
    padding: 9px 12px;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #EBEDEF;
    background: #FFF;
    width: 318px;
        `
    const TextContainer = styled(Typography)`
    color: #1A1C1F;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 153.846% */
    letter-spacing: -0.12px;
    `
    const ButtonControl = styled(Button)`
    width: 344px;
    height: 44px;
    flex-shrink: 0;
    `
    const Buttonlayout = styled(Box)`
    width: 344px;
    height: 48px;
    flex-shrink: 0;
    padding-top:10px;
    `
    const Layout = styled(Box)`
    width: 344px;
    height: 67px;
    flex-shrink: 0;
    `
    const FormBody = styled(FormControl)`
    padding-top:20px;
    `
    const TextBox = styled(Typography)`
    color: #50555E;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.12px;
    `
    const Flex = styled(Box)`
    max-weight:100%;
    `
    return (
        <FullPage>
            <Container>
           <Text>
            Login to your account
           </Text>
            <FormBody >
                <Layout>
                <TextContainer>Email address</TextContainer>
        <TextareaContainer />
                </Layout>
                <Layout>
                    <TextContainer >Password</TextContainer>
        <TextareaContainer />
                </Layout>
        <Buttonlayout>
        <ButtonControl color="primary" variant="contained">Login</ButtonControl>
        </Buttonlayout>
            </FormBody>
            <Flex>
            <TextBox>
            Forgot your password?
            <NavLink to="/auth/forgot-password" color="#23203D" text-decoration="none" >
              Reset it here
            </NavLink>
            </TextBox>
            </Flex>
            </Container>
        </FullPage>
    )
};