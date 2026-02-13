import { RoundStatus } from "@/types/round/status"
import { WorkHistory } from "@mui/icons-material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chip from '@mui/material/Chip';
import StopIcon from '@mui/icons-material/Pause';
import CircleIcon from '@mui/icons-material/FiberManualRecord';
import DoubleTickIcon from '@mui/icons-material/DoneAll';
import NoticeIcon from '@mui/icons-material/NotificationImportant';

const Status = ({ status, t }: { status: RoundStatus, t?: (key: string) => string }) => {
    const label = t ? t(`round.status.${status}`) : status;
    return <Chip label={label} color={getStatusColor(status)} variant="outlined" sx={{ marginRight: 1, p: 1 }} />
}

export const getStatusColor = (status: RoundStatus) => {
    switch (status) {
        case RoundStatus.COMPLETED:
            return 'success'
        case RoundStatus.CANCELLED:
            return 'error'
        case RoundStatus.EVALUATING:
            return 'info'
        case RoundStatus.PAUSED:
            return 'warning'
        case RoundStatus.PENDING:
            return 'warning'
        case RoundStatus.ACTIVE:
            return 'success'
        default:
            return 'primary'
    }
}

export const RoundStatusIcon = ({ status }: { status: RoundStatus }) => {
    const commonProps = {
        sx: {
            display: 'inline',
            ml: -2,
            mr: 1
        },
    }
    switch (status) {
        case RoundStatus.COMPLETED:
            return <DoubleTickIcon color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.CANCELLED:
            return <NoticeIcon color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.EVALUATING:
            return <CheckCircleIcon color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.PAUSED:
            return <StopIcon color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.PENDING:
            return <WorkHistory color={getStatusColor(status)} {...commonProps} />
        case RoundStatus.ACTIVE:
            return <CircleIcon color={getStatusColor(status)} {...commonProps} />
        default:
            return <CheckCircleIcon color={getStatusColor(status)} {...commonProps} />
    }
}

export default Status
