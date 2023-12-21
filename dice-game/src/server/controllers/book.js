// const GetBooks = (req, res, next)=> {

// }

let users = [
    {
        id: "1",
        name: "Alireza",
        books:[
            {
                name: "Harry Potter",
                price: "9000",
            }
        ]
    },
    {
        id: 2,
        name: "Kamal",
        books:[
            {
                name: "Idiot",
                price: "4000",
            }
        ]
    }
];


exports.GetBooks = (req, res, next)=>{
    const {id} = req.params;
    let findedUser = users.find((user)=> user.id == id );
    if (!findedUser)ErrorHandler("user not found",res, next)

    res.json({
        books: findedUser.books,
    });
};

