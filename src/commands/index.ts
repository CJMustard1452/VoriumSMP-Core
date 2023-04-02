import { CommandContext } from "bdsx/bds/command";
import User from "../lib/User";

type runnable = (
    user: User,
    params: Record<string, any>,
) => void;