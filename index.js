const fs = require('fs')
const R = require('ramda')

const FILE_NAME = 'transactions-export'
const FILE_EXT = 'csv'
const READ_PATH = `${FILE_NAME}.${FILE_EXT}`
const WRITE_PATH = `${FILE_NAME}-converted-${new Date().getTime()}.${FILE_EXT}`

const readFile = path => fs.readFileSync(path, { encoding: 'utf-8' })
const writeFile = data =>
  fs.writeFileSync(WRITE_PATH, data, { encoding: 'utf-8' })

R.pipe(
  readFile, //=> string data
  R.split('\n'), //=> [row1, ...]
  R.map(R.split(',')), //=> [[col1, ...], ...]
  R.map(
    R.map(col => {
      if (/\d{4}-\d{2}-\d{2}/.test(col)) {
        // Found "date" in format `yyyy-MM-dd`
        return col.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2-$3-$1') //=> `MM-dd-yyyy`
      }
      return col
    })
  ),
  R.map(R.join(',')), //=> [row1, ...]
  R.join('\n'), //=> string data
  writeFile
)(READ_PATH)
