import {Box, Skeleton} from "@mui/material";
import {useRef} from "react";
import dynamic from "next/dynamic";

type Props = {
    streamUrl?: string;
}

const ReactHlsPlayer = dynamic(
    () => import('react-hls-player'),
    { ssr: false },
);
export function StreamPlayer({ streamUrl}: Props) {
    const playerRef = useRef<HTMLVideoElement>(null);
    return (
        <Box>
            {
                streamUrl && (
                    <ReactHlsPlayer
                        playerRef={playerRef}
                        src={streamUrl}
                        autoPlay={true}
                        controls={true}
                        width="100%"
                        height="auto"
                    />
                )
            }
            {
                !streamUrl && (
                    <Skeleton variant="rectangular" width={'100%'} height={400}/>
                )
            }
        </Box>
    )

}