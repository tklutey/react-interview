import {Box, Card, CardContent, Stack, styled, Typography} from '@mui/material';
import {Forecast} from "../../../Surfline-Stream/src/data";
import React from "react";

type Props = {
    forecastSummary: Forecast;
}
const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
}));

export const ForecastSummary = ({ forecastSummary }: Props) => {
  const { highlights } = forecastSummary;
  return (
    <StyledCard variant={'outlined'}>
        <CardContent>
            <Stack spacing={1}>
                <Typography variant="h6"> Highlights </Typography>
                {
                    highlights.map((h, index) => {
                        return <Box key={index}><Typography> - {h}</Typography></Box>
                    })
                }
            </Stack>
        </CardContent>
    </StyledCard>
  )
}