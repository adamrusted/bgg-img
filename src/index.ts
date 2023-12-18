import { VercelRequest, VercelResponse } from '@vercel/node'
const app = (req: VercelRequest, res: VercelResponse) => {
  const json = {
    "status": "Winner, Winner"
  }
  return res.status(200).send(JSON.stringify(json))
};

export default app;
