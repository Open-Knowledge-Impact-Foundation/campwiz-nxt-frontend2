import { fetchAPIFromBackendSingleWithErrorHandling } from "@/api"
import type { Campaign } from "@/types/campaign"
import useSWR from "swr"
import SingleCampaignChip from "./SingleCampaignChip"
import Skeleton from "@mui/material/Skeleton"
import campaignBackground from "/campaign5.svg"
import LoadMoreCampaignChip from "./LoadMoreCampaign"
import { useTranslation } from "react-i18next"

type PublicRunningCampaignProps = {
    limit: number
}

const PublicRunningCampaigns = ({ limit }: PublicRunningCampaignProps) => {
    const qs = new URLSearchParams({ limit: String(limit), isClosed: 'false', isHidden: 'false', 'sortOrder': 'desc' }).toString()
    const showAllQQs = new URLSearchParams({ limit: String(20), isClosed: 'false', isHidden: 'false', 'sortOrder': 'desc' }).toString()
    const { data: publicCampaignResponse, error, isLoading } = useSWR('/campaign/?' + qs.toString(), fetchAPIFromBackendSingleWithErrorHandling<Campaign[]>);
    const { t } = useTranslation()
    
    if (isLoading) return <Skeleton variant="rectangular" width='100%' height={200} sx={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />
    if (error) return <p>Error : {t(error.message)}</p>
    if (!publicCampaignResponse)
        return null;
    if ('detail' in publicCampaignResponse)
        return <p>Error : {t(publicCampaignResponse.detail)}</p>
    
    const campaigns = publicCampaignResponse.data
    
    return campaigns.length > 0 ? (
        <div style={{
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            backgroundImage: `url(${campaignBackground})`,
            backgroundSize: 'contain',
        }} className="justify-self-auto px-2">
            {campaigns.map(v => <SingleCampaignChip campaign={v} key={v.campaignId} />)}
            <LoadMoreCampaignChip link={"/campaign?" + showAllQQs.toString()} labelText={t('campaign.showAllCampaigns')} />
        </div>
    ) : (
        <div className="justify-self-auto p-1 mb-2 block text-center">
            <h3 className="text-2xl font-bold">{t('error.noRunningCampaigns')}</h3>
        </div>
    )
}

export default PublicRunningCampaigns
