import db from '../db'

export default function checkUserByEmail(email) {
  return db.oneOrNone(`
    SELECT *
      FROM users
     WHERE email = $1
  `, [email])
}
