import type { VercelRequest, VercelResponse } from "@vercel/node";

const handler = (req: VercelRequest, res: VercelResponse) => {
  const { username }: { username?: string } = req.query;
  // await fetch(`https://google.com`).then(
  //   (val) => {
  //     console.log(val);
  //   }
  // );
  return res.status(200).send(username);
}

export default handler