interface techsObject{
  title: string,
  experience: number
}


interface createUserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | techsObject>
}


export default function createUser({ email, name, password }: createUserData) {
  const user = {
    name,
    email,
    password
  }

return user
}