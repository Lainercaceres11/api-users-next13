import Users from "@/components/Users";

async function fetchUsers (){
  const res =  await fetch('https://reqres.in/api/users')
  const response = await res.json();
  return response.data
} 

async function HomePage() {
  const users = await fetchUsers();
  return (
    <div>
      <Users users={users}  />
    </div>
  )
}

export default HomePage;
