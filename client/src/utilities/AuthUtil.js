class AuthUtil {
    constructor() {
        this.authenticated = false;
    }

    login(cb) {
        this.authenticated = true;
        localStorage.setItem("auth", "true");
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        //localStorage.setItem("auth", false);
        cb();
        localStorage.clear();
    }

    isAuthenticated() {
        //return this.authenticated;
        return localStorage.getItem("auth") === "true";
    }
}

export default new AuthUtil();
