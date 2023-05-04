import { getUser } from "@/app/fetching/fetchData";

async function Users({params}) {
    const users = await getUser(params.id)
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <img src={users.avatar} alt={users.avatar} />
            </div>
            <div className="card-body">
              <p>
                {users.first_name} - {users.last_name}{" "}
              </p>
              <h3>{users.email}</h3>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Users;