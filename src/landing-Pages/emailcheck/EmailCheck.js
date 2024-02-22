import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";


export const EmailCheck = () => {
    const HomePage = styled(Stack)`
    width: 1440px;
    height: 900px;
    background: var(--colours-white-100, #FFF);
    `
    const MiddlePage = styled(Box)`
    top: 50%;
    left: 50%;
    width: 362px;
    height: 232px;
    margin-top: -9em;
    margin-left: -15em;
    position: fixed;
    flex-shrink: 0;
    `
    const CheckEmailLayour = styled(Box)`
    width: 362px
    height: 38px;
    flex-shrink: 0;
    `
    const CheckEmailText = styled(Typography)`
    color: #040404;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px; /* 135.714% */
    letter-spacing: -0.1px;
    `
    const MessageLayour = styled(Box)`
    width: 362px;
    height: 43px;
    flex-shrink: 0;
    `
    const MessageText = styled(Typography)`
    color: #23203D;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: BR Firma;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 169.231% */
    `
    return (
        <HomePage>
            <MiddlePage>
                    <CheckEmailLayour>
                        <CheckEmailText>Check Your email</CheckEmailText>
                    </CheckEmailLayour>
                    <MessageLayour>
                        <MessageText>
                            we have send a secure reset link to your email address <br/>
                            Click on the link to reset your password.
                        </MessageText>
                    </MessageLayour>
            </MiddlePage>
        </HomePage>
    )
}