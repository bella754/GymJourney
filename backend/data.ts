import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix";
import { LoginData } from "../backend/userManagement.ts";

/**
 * Version information on the backend
 */
export const denoVersion = Deno.version.deno;
export const datexVersion = Datex.Runtime.VERSION;
export const uixVersion = UIX.version;

/*
	Vordefinierte Objekte für Test- und Demonstrationszwecke
*/

export const userdata: LoginData[] = eternal ?? $$([
    {
      user: "Alice123",
      password: "Password123",
      id: 1,
    },
    {
      user: "Bob456",
      password: "SecurePwd123",
      id: 2,
    },
    {
      user: "Charlie789",
      password: "PwdSecure123",
      id: 3,
    },
]);