import { createContext } from "react";
import type { Session } from "../types/session";

const sessionContext = createContext<Session | null>(null);
export default sessionContext;