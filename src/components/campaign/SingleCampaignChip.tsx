import type { Campaign } from "@/types/campaign"
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom"
import RightArrowIcon from '@mui/icons-material/KeyboardArrowRight';
import Status from "@/components/round/Status";
import { RoundStatus } from "@/types/round/status";
import { useTranslation } from "react-i18next";

type SingleCampaignChipProps = {
    campaign: Campaign
}

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
})};
  &:hover {
    transform: scale(1.05);
  }
  `}
`;

const SingleCampaignChip = ({ campaign }: SingleCampaignChipProps) => {
    const { t } = useTranslation()
    return (
        <StyledCard sx={{
            cursor: 'pointer',
            boxShadow: 1, margin: 1, p: 2,
            display: 'inline-block',
            borderRadius: 8,
            '&:hover': {
                boxShadow: 3
            },
            width: {
                xs: 'calc(95% - 4px)',
                sm: 'calc(50% - 4px)',
                md: 'calc(33.33% - 4px)',
                lg: 'calc(30% - 4px)',
                xl: 'calc(28% - 4px)',
            },
            mx: 2,
        }}>
            <CardHeader
                title={<Typography variant="h5" color='primary'>{campaign.name}</Typography>}
                subheader={
                    <Typography variant="caption" color="textSecondary">
                        {new Date(campaign.startDate).toUTCString()} - {new Date(campaign.endDate).toUTCString()}
                    </Typography>
                }
                sx={{
                    mb: -1
                }}
            />
            <CardContent>
                <Typography variant="body1" sx={{}}>
                    {campaign.description?.length > 100 ? campaign.description.slice(0, 100) + '...' : campaign.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Status status={campaign.archivedAt === null ? RoundStatus.ACTIVE : RoundStatus.ARCHIVED} t={t} />
                <Link to={`/campaign/${campaign.campaignId}`} style={{}}>
                    <Button color="primary" endIcon={<RightArrowIcon />} variant="outlined" sx={{ borderRadius: 8, px: 2 }}>
                        {t('campaign.goToCampaign')}
                    </Button>
                </Link>
            </CardActions>
        </StyledCard >
    )
}

export default SingleCampaignChip
