// Export default é obrigatório para o Vercel mapear a rota
export default function handler(req, res) {
  res.status(200).json({ status: "hello world" });
}
