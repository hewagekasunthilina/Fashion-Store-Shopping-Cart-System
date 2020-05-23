import React from "react";
import axios from "../../api/api";
import EditUser from "../User/EditUser";

class EditUsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};

        this.updateUser = this.updateUser.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    // parent state is managed here; add item to selected items list.
    updateUser(user) {
        axios.put('/users', {user})
            .then(res => {
                if (res.data.successful) {
                    alert(`User ${user.name} updated successfully`);
                    this.fetchUsers();
                } else alert(`User ${user.name} failed to update because ${res.data.body}`);
            })
            .catch(error => {
                alert(`User ${user.name} failed to update because ${error}`);
            })
    }

    deleteUser(user) {
        axios.delete(`/users/${user.email}`)
            .then(res => {
                if (res.data.successful) {
                    alert(`User ${user.name} deleted successfully`);
                    this.fetchUsers();
                } else alert(`User ${user.name} failed to delete because ${res.data.body}`);
            })
            .catch(error => {
                alert(`User ${user.name} failed to delete because ${error}`);
            })
    }

    fetchUsers() {
        axios.get('/users')
            .then(res => {
                this.setState({users: res.data.body});
            })
    }

    render() {
        return (
            <div className="row align-items-center">
                {this.state.users.map((user, index) => {
                    return <EditUser user={user} updateUser={this.updateUser} deleteUser={this.deleteUser}/>;
                })}
            </div>
        );
    }
}

export default EditUsersPage;
