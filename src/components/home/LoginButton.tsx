import { useTranslation } from 'react-i18next';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const LoginButton = () => {
    const { t } = useTranslation()
    const sx = {
        bgcolor: "#006699",
        color: "#fff",
        borderRadius: 30,
        m: 1,
        px: 2,
        transition: "0.3s",
        "&:hover": {
            bgcolor: "#00557d",
            transform: "scale(1.05)",
        },
    }
    
    return (
        <Link to="/user/login">
            <Button
                variant="contained"
                startIcon={<LockOpenIcon />}
                sx={sx}
            >
                {t('home.login')}
            </Button>
        </Link>
    )
}

export default LoginButton
