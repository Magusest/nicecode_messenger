import { UserDataType } from "../../types/userDataType";
import SearchBar from "../searchBar/searchBar";
import Users from "../users/users";

type Props = {
    users: UserDataType[];
}

export default function UsersSection({users}: Props) {
    return(
        <>
            <SearchBar />
            <Users users={users}/>
        </>
    )
}