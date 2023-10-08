import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import dynamic from "next/dynamic";
import {Typography} from "@mui/material";

const Console = dynamic(() => import('../components/Console'), {
    ssr: false
});
export default function IndexPage() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Typography variant={'h3'}> MyTerm </Typography>
                <Console width={'500px'} height={'500px'} />
            </main>
        </QueryClientProvider>
    )
}