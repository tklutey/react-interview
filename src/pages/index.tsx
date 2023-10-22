import Header from "@/components/Header";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {Box, Stack, Typography} from "@mui/material";
import {SurflineClient} from "@/SurflineClient";
import {useEffect, useState} from "react";
import {ForecastSummary} from "@/components/ForecastSummary";
import {SpotViewer} from "@/components/SpotViewer";
import {Data} from "@/data";

export default function IndexPage() {
    const queryClient = new QueryClient()
    const [data, setData] = useState<Data | null>(null);
    useEffect(() => {
        const surflineClient = new SurflineClient();
        surflineClient.getSpotOverview().then((res) => setData(res.data));
    }, [])

    return (
        <QueryClientProvider client={queryClient}>

            <Stack alignItems={'center'}>
                <Typography variant={'h3'}> FreeSurf </Typography>
                {
                    data && (
                        <Box maxWidth={'860px'}>
                            <Typography variant={'h6'}> {data.name} </Typography>
                            <ForecastSummary forecastSummary={data.forecastSummary}/>
                            <SpotViewer spots={data.spots}/>
                        </Box>
                    )
                }
            </Stack>
        </QueryClientProvider>
    )
}