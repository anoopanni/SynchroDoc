const mongoose = require("mongoose");
const Document = require("./Document");

try {
mongoose.connect('mongodb+srv://admin:passwordd@cluster0.vowtlsi.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SynchroDoc'
  }
) }catch (error){
    console.log(error);
}

port = process.env.PORT || 3001

const io = require("socket.io")(port, {
    cors: {
        // origin: 'http://localhost:3000',
        // origin: '*',
        origin: 'https://synchrodoc.anoopshivayogi.com',
        methods: ['GET', 'POST'],
    },
})

defaultValue = ""

io.on("connection", socket => {

    socket.on("get-document", async documentId => {
        const document = await findOrCreateDocument(documentId);
        socket.join(documentId);
        socket.emit("load-document", document.data);

        socket.on("send-changes", delta => {
            socket.broadcast.emit("recieve-changes", delta);
        })
        socket.on("save-document", async data => {
            await Document.findByIdAndUpdate(documentId, {data})
        })
    })
})


async function findOrCreateDocument(id){
    if(id == null) return

    const document = await Document.findById(id);
    if(document) return document;
    return await Document.create({ _id: id, data: defaultValue});

}