import pkg from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const { Client, LocalAuth } = pkg;

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

console.log("🚀 Inicializando o bot...");

client.on("qr", (qr) => {
  console.log("📱 Escaneie o QR Code abaixo com seu WhatsApp:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ Bot do WhatsApp conectado e pronto!");
});

client.on("message", async (message) => {
  const content = message.body?.trim().toLowerCase();
  console.log(`📩 Mensagem recebida de ${message.from}: ${message.body}`);

  if (content === "oi") {
    await message.reply("Olá! 👋 Sou um bot do sistema de notas fiscais.");
  }

  if (content === "falar algo?") {
    await message.reply("Olá! estou falando algo, o que você precisa?");
  }
});

client.initialize();
