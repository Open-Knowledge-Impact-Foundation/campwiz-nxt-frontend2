import logoSvg from '/logo.svg'
import ReturnButton from "../ReturnButton"
import { LogoutButtton } from "./Buttons"
import { Link } from "react-router-dom"
import SettingButton from "../user/SettingButton"

type HeaderProps = {
    returnTo?: string
}

const Header = ({ returnTo }: HeaderProps) => {
    return (
        <header className="flex items-center justify-between w-full h-auto px-4 text-center">
            <ReturnButton hiddenIn={['^\/$', '^\/user\/login$']} to={returnTo} />
            <Link to='/' style={{ margin: 'auto', display: 'inline-block' }}>
                <img src={logoSvg} alt="Logo of CampWiz" className="h-19 w-34 m-auto" />
            </Link>
            <SettingButton />
            <LogoutButtton hiddenIn={['^\/$', '^\/user\/login$']} />
        </header>
    )
}

export default Header
