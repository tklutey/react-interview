import {Box} from "@mui/material";

export default function Layout({ children }) {
    return (
        <>
            <Box>Header</Box>
            <main>{children}</main>
            <Box>Footer</Box>
        </>
    )
}