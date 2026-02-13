import { Button, IconButton, useMediaQuery } from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import logout from "./logout";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const DhashboardButton = ({ projectId, canAccessOtherProject }: { projectId: string | null, canAccessOtherProject: boolean }) => {
    const { t } = useTranslation()
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const url = canAccessOtherProject ? `/project/` : `/project/${projectId}`;
    const sx = {
        bgcolor: "#006699",
        color: "#fff",
        borderRadius: 30,
        transition: "0.3s",
        m: 1,
        "&:hover": {
            bgcolor: "#00557d",
            transform: "scale(1.05)",
        },
    }
    
    return (
        <Link to={url}>
            {isSmall ? (
                <IconButton sx={sx}>
                    <DashboardIcon />
                </IconButton>
            ) : (
                <Button
                    variant="contained"
                    startIcon={<DashboardIcon />}
                    sx={sx}
                >
                    {t('home.dashboard')}
                </Button>
            )}
        </Link>
    )
}

export const LogoutButtton = ({ hiddenIn, refresh = false }: { hiddenIn?: string[], refresh?: boolean }) => {
    const { t } = useTranslation()
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const location = useLocation()
    const pathName = location.pathname
    const sx = {
        borderRadius: 30,
        m: 1,
    }
    const [loggingOut, setLoggingOut] = useState(false);
    
    const perFormLogout = async () => {
        setLoggingOut(true);
        await logout(refresh);
        setLoggingOut(false);
        console.log('Logged out', refresh);
    }
    
    if (hiddenIn) {
        for (const path of hiddenIn) {
            const r = new RegExp(path)
            if (r.test(pathName)) {
                return null
            }
        }
    }
    
    return (
        isSmall ? (
            <IconButton
                sx={sx}
                onClick={perFormLogout}
                disabled={loggingOut}
                color="error"
            >
                <PowerSettingsNewIcon />
            </IconButton>
        ) : (
            <Button
                variant="contained"
                startIcon={<PowerSettingsNewIcon />}
                onClick={perFormLogout}
                disabled={loggingOut}
                color="error"
                sx={sx}
            >
                {t('home.logout')}
            </Button>
        )
    )
}
