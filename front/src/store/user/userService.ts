import axios from "axios";

const getUser = async (id:string) => {
    const user = await axios.get(`/api/users/${id}`)
    return user.data
}

const userService = {
    getUser
}

export default userService