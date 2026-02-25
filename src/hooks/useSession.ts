import { useContext } from "react";
import sessionContext from "@/contexts/SessionContext";

const useSession = () => {
    const session = useContext(sessionContext);
    return session;
};

export default useSession;
