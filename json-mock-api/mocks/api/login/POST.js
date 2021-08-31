var jwt = require("jsonwebtoken")

module.exports = (req, res) => {
    let { username, password } = req.body

    //hashcode: data query
    if (username !== "huyduong020998@gmail.com" || password !== "123456") {
        res.status(401).json({
            message: "Unauthorized",
        })
        return res
    }
    let token = jwt.sign(
        {
            username,
            roles: ["read", "write"],
        },
        "REACTJS2021",
        { expiresIn: "8h" }
    )

    let user = {
        avatar: "https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-1/p200x200/101590822_1494555610711810_3810730406109265562_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WcHVyFtSWbQAX9XQ7eV&_nc_ht=scontent.fsgn5-2.fna&oh=eeeb8918c00eb38f2ab9934119892656&oe=6151BE90",
        firstName: "Dương",
        lastName: "Huy",
        phoneNumber: "0353033933",
        address: "276/11 Thống Nhất, Phường 16 ,Quận Gò Vấp, Tp. Hồ Chí Minh"
    }

    var data = jwt.decode(token)
    // console.log("token", data)
    // console.log("username:", username, "password: ", password)
    res.status(200).json({ status: true, user, token })
}