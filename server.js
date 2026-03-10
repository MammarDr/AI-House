import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'; // Loads your API_KEY from a .env file
import cors from 'cors';

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Allows the server to read JSON sent from your frontend

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash", systemInstruction: "You are a minimal chat support bot. " +
                     "Keep all responses under 2 sentences. " +
                     "Do not use Markdown, bolding, or lists. " +
                     "Use plain text only. Be helpful but extremely brief." });

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    res.json({ text: response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong with the AI" });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the AI-House Express server!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));