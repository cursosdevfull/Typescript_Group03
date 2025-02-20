class UserSystem {
    constructor(public name: string, public age: number, public countryISO: string) { }

    getUserInfo() {
        return {
            name: this.name,
            age: this.age,
            isAdult: this.age >= 18,
            countryISO: this.countryISO,
            isPeruvian: this.countryISO === "PE"
        }
    }
}

type UserSystemInfo = ReturnType<UserSystem["getUserInfo"]>

function showUserInfo(user: UserSystem): UserSystemInfo {
    return user.getUserInfo()
}

const user = new UserSystem("John", 30, "PE")
const userInfo = showUserInfo(user)
console.log("userInfo", userInfo) // { name: 'John', age: 30, isAdult: true, countryISO: 'PE', isPeruvian: true }