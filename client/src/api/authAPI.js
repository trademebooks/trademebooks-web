export function login() {
    return (new Promise(function (resolve, reject_) {
        setTimeout(function () {
            resolve({
                message: "The user has successfully logged in.",
                data: {

                }
            });
        }, 0);
    }));
}
