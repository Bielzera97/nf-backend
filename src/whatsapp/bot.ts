import { Client } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const client = new Client({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("qr", (qr) => {
  console.log("📱 Escaneie o QR Code abaixo com seu WhatsApp:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ Bot do WhatsApp conectado e pronto!");
});

client.on("message", async (message) => {
  console.log(`📩 Mensagem recebida: ${message.body}`);

  if (message.body.toLowerCase() === "oi") {
    message.reply("Olá! 👋 Sou um bot do sistema de notas fiscais.");
  }
  if (message.body.toLowerCase() === "falar algo") {
    message.reply("Olá! estou falando algo, o que você precisa?");
  }
});

client.initialize();
