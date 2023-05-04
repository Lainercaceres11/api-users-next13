import Users from "@/components/Users";
import { fetchUsers } from "./fetching/fetchData";

async function HomePage() {
  const users = await fetchUsers();
  return (
    <div>
      <Users users={users}  />
    </div>
  )
}

export default HomePage;
