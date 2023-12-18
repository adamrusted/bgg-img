import type { VercelRequest, VercelResponse } from "@vercel/node";
import X2JS from 'x2js'
const handler = async (req: VercelRequest, res: VercelResponse) => {
  const { username } = req.query
  const x2js = new X2JS();
  const body = await fetch(`https://boardgamegeek.com/xmlapi2/plays?username=${username}`).then((val) => val.text())
  const { plays: { play } }: { plays: { play: object }} = x2js.xml2js(body)
  return res.send(play)
}

export default handler