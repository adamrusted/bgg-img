import { VercelRequest, VercelResponse } from '@vercel/node'
const app = (req: VercelRequest, res: VercelResponse) => {
  const items: number = req.statusCode || 0
  return res.send(items)
};

export default app;
