import {Box, Stack} from '@mui/material';
import {useState} from 'react';
import ReactHlsPlayer from 'react-hls-player';
import {Spot} from "@/data";
import {SpotSelector} from "@/components/SpotViewer/SpotSelector";
import {StreamPlayer} from "@/components/StreamPlayer";

type Props = {
    spots: Spot[];
}
export const SpotViewer = ({spots}: Props) => {
    const [selectedSpotId, setSelectedSpotId] = useState<string | null>();
    const [selectedCameraId, setSelectedCameraId] = useState<string | null>();
    const camSpots = spots.filter((spot) => spot.cameras.length > 0);
    const streamUrl = spots.find((spot) => spot._id === selectedSpotId)?.cameras?.find((camera) => camera._id === selectedCameraId)?.streamUrl;
    return (
        <Stack spacing={2} padding={'20px'}>
            <Box>
                <SpotSelector spots={camSpots} selectedSpotId={selectedSpotId} setSelectedSpotId={setSelectedSpotId}
                              selectedCameraId={selectedCameraId} setSelectedCameraId={setSelectedCameraId}/>
            </Box>
            <Box>
                <StreamPlayer streamUrl={streamUrl}/>
            </Box>
        </Stack>
    )
}