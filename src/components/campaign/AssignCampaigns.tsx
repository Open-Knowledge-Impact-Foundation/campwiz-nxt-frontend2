import { fetchAPIFromBackendSingleWithErrorHandling } from "@/api"
import type { Campaign } from "@/types/campaign"
import useSWR from "swr"
import SingleCampaignChip from "./SingleCampaignChip"
import { Box, Skeleton, Typography } from "@mui/material"
import campaignBackground from "/campaign5.svg"
import LoadMoreCampaignChip from "./LoadMoreCampaign"
import { useTranslation } from "react-i18next"

type AssignedCampaignProps = {
    limit: number
}

const AssignedCampaigns = ({ limit }: AssignedCampaignProps) => {
    // We intentionally request isHidden = 'true' here to fetch campaigns
    // that are not public (private/hidden) but are assigned to the current user.
    // Public running campaigns use isHidden = 'false' (see PublicCampaigns).
    const qs = new URLSearchParams({ limit: String(limit), isClosed: 'false', isHidden: 'true', sortOrder: 'desc' }).toString()
    const showAllQs = new URLSearchParams({ limit: String(20), isClosed: 'false', isHidden: 'true' }).toString()
    const { t } = useTranslation()
    const { data: assignedCampaignResponse, error, isLoading } = useSWR('/campaign/?' + qs.toString(), fetchAPIFromBackendSingleWithErrorHandling<Campaign[]>);
    
    if (isLoading) return <Skeleton variant="rectangular" width='100%' height={200} />
    if (error) return <p>Error : {t(error.message)}</p>
    if (!assignedCampaignResponse)
        return null;
    // API errors are returned as structured objects with a `detail` field.
    // The `error` from useSWR refers to network/fetch errors; when the backend
    // returns a handled error payload, display `assignedCampaignResponse.detail` so
    // the user sees the meaningful server-provided message.
    if ('detail' in assignedCampaignResponse)
        return <p>Error : {t(assignedCampaignResponse.detail)}</p>
    
    return (
        <div className="" style={{}}>
            <Typography variant="h4" sx={{
                textAlign: 'center', m: 3,
                backgroundClip: 'text'
            }} color="error">
                {t('home.yourCampaigns')}
            </Typography>
            <Box sx={{
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                flexWrap: 'wrap', 
                px: 2,
                backgroundImage: `url(${campaignBackground})`,
                backgroundSize: 'contain',
            }} className="justify-self-auto">
                {assignedCampaignResponse ? (
                    <>
                        {(assignedCampaignResponse.data || []).map((v, i) => (
                            <SingleCampaignChip campaign={v} key={i} />
                        ))}
                        <LoadMoreCampaignChip link={"/campaign?" + showAllQs.toString()} labelText={t('campaign.showAllCampaigns')} />
                    </>
                ) : (
                    <div>
                        <p>{t('error.noAssignedCampaigns')}</p>
                    </div>
                )}
            </Box>
        </div>
    )
}

export default AssignedCampaigns
