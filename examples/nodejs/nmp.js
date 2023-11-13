const mc = require('minecraft-protocol')

const client = mc.createClient({
  host: process.argv[2],
  username: 'WebVM'
})

client.on('login', () => console.log('logged in'))
