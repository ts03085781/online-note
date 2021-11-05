const demoDate = {
    id: "ts03085781",
    password: "ts03085782 ",
    answer: "汐止國小",
    list: [
        {
            title: "title from api 1",
            content: "this is content from api 1",
            favorite: true,
            time: "2021-10-28",
        },
        {
            title: "title from api 2",
            content: "this is content from api 2",
            favorite: true,
            time: "2021-10-28",
        },
    ],
};

export default async function handler(req, res) {
    const postData = req.body;
    const login =
        postData.id === "ts03085781" && postData.password === "ts03085782";
    const resData = {
        id: demoDate.id,
        login: login,
    };

    res.status(200).json(resData);
}
