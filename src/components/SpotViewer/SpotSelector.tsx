import {Box, Breadcrumbs} from "@mui/material";
import {Spot} from "@/data";
import {useEffect, useState} from "react";
import {ChipSelect} from "@/components/ChipSelect";
import {Option} from "@/components/types";
import {useLocalStorage} from "@/hooks/useLocalStorage";


type Props = {
    spots: Spot[];
    selectedSpotId: string | null | undefined
    setSelectedSpotId: (id: string) => void;
    selectedCameraId: string | null | undefined
    setSelectedCameraId: (id: string) => void;
}
export const SpotSelector = ({
                                 spots,
                                 selectedSpotId,
                                 setSelectedSpotId,
                                 selectedCameraId,
                                 setSelectedCameraId
                             }: Props) => {
    const {saveToLocalStorage, loadFromLocalStorage} = useLocalStorage();
    const cameras = spots.find((spot) => spot._id === selectedSpotId)?.cameras;
    const spotOptions = spots.map((spot) => {
        return {id: spot._id, label: spot.name}
    });
    const cameraOptions = cameras?.map((camera) => {
        return {id: camera._id, label: camera.title}
    }) || [];

    useEffect(() => {
           if (selectedSpotId) {
                saveToLocalStorage('selectedSpotId', selectedSpotId);
            }
           if (selectedCameraId) {
                saveToLocalStorage('selectedCameraId', selectedCameraId);
            }
    }, [selectedSpotId, selectedCameraId])

    useEffect(() => {
        const savedSpotId = loadFromLocalStorage('selectedSpotId');
        const savedCameraId = loadFromLocalStorage('selectedCameraId');
        if (savedSpotId) {
            setSelectedSpotId(savedSpotId);
        }
        if (savedCameraId) {
            setSelectedCameraId(savedCameraId);
        }
    }, [])
    return (
        <Box display={'flex'}>
            <Breadcrumbs>
                <ChipSelect options={spotOptions} label={'Spot'}
                            selected={spotOptions.find(o => o.id === selectedSpotId)}
                            onSelect={(s: Option) => setSelectedSpotId(s.id)}/>
                <ChipSelect options={cameras?.map((camera) => {
                    return {id: camera._id, label: camera.title}
                }) || []} label={'Camera'} selected={cameraOptions.find(o => o.id === selectedCameraId)}
                            onSelect={(s: Option) => setSelectedCameraId(s.id)}/>
            </Breadcrumbs>
        </Box>
    )
}