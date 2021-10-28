// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const demoDate = {
    name: "ts03085781",
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

export default function handler(req, res) {
    res.status(200).json(demoDate.list);
}
