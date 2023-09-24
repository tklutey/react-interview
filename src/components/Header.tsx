import {Box, styled} from "@mui/material";

export default function Header() {
    const StyledBox = styled(Box)({
        backgroundColor: 'blue'
    });
    return <StyledBox> This is the main page. </StyledBox>
}