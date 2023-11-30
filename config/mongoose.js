const mongoose = require('mongoose')

const db = 'mongodb+srv://shefalijohnson98:SVxQ55nXB7m3LhzK@nodetuts.8uqdnnn.mongodb.net/?retryWrites=true&w=majority'
//mongoose.set('useFindAndModify', false);

mongoose.connect(db)
    .then((res) => console.log("connected to db"))
    .catch((err) => console.log(err))
