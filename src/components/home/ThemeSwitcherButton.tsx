import { useColorScheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LightIcon from "@mui/icons-material/LightMode";
import DarkIcon from "@mui/icons-material/DarkMode";

const ThemeSwitcherButton = () => {
    const { mode, setMode } = useColorScheme();
    
    if (!mode) {
        return null;
    }
    
    const handleClick = () => {
        console.log('mode', mode);
        setMode(mode === 'dark' ? 'light' : 'dark');
    };
    
    return (
        <IconButton
            color="primary"
            size="small"
            onClick={handleClick}
            sx={{
                backgroundColor: mode === 'dark' ? '#fff' : '#000',
                color: mode === 'dark' ? '#000' : '#fff',
            }}
            disableFocusRipple
            disableRipple
        >
            {mode === 'dark' ? <LightIcon /> : <DarkIcon />}
        </IconButton>
    );
}

export default ThemeSwitcherButton;
