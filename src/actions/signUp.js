import db from '../db'

export default function signUp(name, last, email, password) {
  return db.oneOrNone(`
    INSERT INTO users(name, last, email, password)
         VALUES $1, $2, $3, $4
  `, [name, last, email, password])
}
