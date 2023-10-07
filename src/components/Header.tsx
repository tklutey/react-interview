import {Box, styled} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import axios from 'axios';

export default function Header() {
    const StyledBox = styled(Box)({
        backgroundColor: 'lightblue'
    });
    const { data } = useQuery(['test'], () =>
        axios
            .get('/api/example')
            .then((res) => res.data)
    )

    return <StyledBox> {data ? data['message'] : 'No data found'} </StyledBox>
}