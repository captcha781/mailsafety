import fs from 'fs'

const filecontents = await fs.promises.readFile('./src/conf/disposable.txt', 'utf8')
const domains = filecontents.split(/\r?\n/).filter((line) => line.length > 0)
await fs.promises.writeFile('./src/conf/disposable.json', JSON.stringify(domains))

