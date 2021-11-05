import dbConnect from "../../../utils/dbConnect";
import usersList from "../../../models/usersList";

dbConnect();

export default async function handler(req, res) {
    const postData = req.body;
    const id = postData.id;
    const usersLists = await usersList.find({ id: id });
    const targetList = usersLists[0].list;
    console.log("AAAAAAAAAAAA", targetList);
    res.status(200).json(targetList);
}
