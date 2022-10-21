import Organization from "./UserProfile";
import UserProfile from "./UserProfile";

    export default interface User
    {
        id?: number,
        username: string,
        password:string,
        status:boolean,
        organization_id?: number,
        Profile?: UserProfile,
        Organization?: Organization
    }