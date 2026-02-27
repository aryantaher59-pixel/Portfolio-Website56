export async function sendToTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN || "8697866609:AAFkMbTkujS5yKXbrw2aGGANYZUSTEHJ9FY";
  const chatId = process.env.TELEGRAM_CHAT_ID || "7523957607";

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API error ${res.status}: ${body}`);
  }

  return res.json();
}
