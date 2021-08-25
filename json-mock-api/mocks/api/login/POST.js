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

    let name = "Dương Ngọc Huy"

    var data = jwt.decode(token)
    // console.log("token", data)
    // console.log("username:", username, "password: ", password)
    res.status(200).json({ status: true, username, token, name })
}