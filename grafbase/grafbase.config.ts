import { g, auth, config } from '@grafbase/sdk'
const User = g.model('user',{
  name: g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avatarUrl: g.url(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  linkdinUrl: g.url().optional(),
  projects:g.relation(()=>Project).list().optional(),
})
const Project = g.model('Project',{
  title: g.string().length({ min:3}),
  description: g.string(),
  image: g.url(),
  githubUrl: g.url(),
  category:g.string().search(),
  createdby:g.relation(()=> User)
})
export default config({
  schema: g
})
