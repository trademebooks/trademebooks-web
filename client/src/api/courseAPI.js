export function getCourses() {
    return (new Promise(function (resolve, reject_) {
        setTimeout(function () {
            resolve([
                {
                    id: 1,
                    title: "course title 1"
                },
                {
                    id: 2,
                    title: "course title 2"
                },
                {
                    id: 3,
                    title: "course title 3"
                }
            ]);
        }, 0);
    }));
}

export function addACourse() {
    return (new Promise(function (resolve, reject_) {
        setTimeout(function () {
            resolve({
                id: 1,
                title: "course title 1"
            });
        }, 0);
    }));
}