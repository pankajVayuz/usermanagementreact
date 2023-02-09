import React, { useEffect} from "react";
import Button from "../comoponent/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../statemanagement/actions/action";
import { Link } from "react-router-dom";

const UserList = () => {

//get users list for store.
  const susscribe = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    // action dispatch for get user data list
    dispatch(getAllUser);
  }, []);

  return (
    <>
      <div className="flex justify-center px-4 py-4">
        <table class="table-auto">
          <thead>
            <tr>
              <th className="text-indigo-600">Name</th>
              <th className="text-indigo-600">Email</th>
              <th className="text-indigo-600">Date</th>
              <th className="text-indigo-600">Status</th>
            </tr>
          </thead>
          <tbody className="mt-12">
            {susscribe.users &&
              susscribe.users.map((u) => (
                <>
                  <tr>
                    <td className="text-center text-red-500">{u.username}</td>
                    <td className="text-center">{u.email}</td>
                    <td className="text-center">{u.date}</td>
                    {u.status + "" == "true" ? (
                      <td className=" text-green-500 font-semibold text-center">
                        {u.status + ""}
                      </td>
                    ) : (
                      <td className=" text-red-500 font-semibold text-center">
                        {u.status + ""}
                      </td>
                    )}

                    <td>
                      <Link to={`/updateUser/${u._id}`}>
                        <Button
                          className="text-center"
                         
                        >
                          Edit
                        </Button>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
