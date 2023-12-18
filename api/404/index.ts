const handler = (req, res) => {
  return res.status(404).send('broken')
}

export default handler