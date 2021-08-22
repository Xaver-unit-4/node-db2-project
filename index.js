const server = require('./api/server')
const morgan = require('morgan')

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))
server.use(morgan('dev'))
