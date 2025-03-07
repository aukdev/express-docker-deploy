class UserDTO {
    name: string;
    username: string;
    password: string;
    phone: string;
    city: string;

    constructor(name: string, username: string, password: string, phone: string, city: string) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.city = city;
    }
}

export default UserDTO;