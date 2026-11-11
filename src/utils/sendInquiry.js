export async function sendInquiry(data) {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  console.log("TEST 1 - Endpoint the site is using:", endpoint);

  // No email service connected yet: pretend to send (for testing only)
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.info("Inquiry NOT sent (no VITE_FORM_ENDPOINT set):", data);
    return { ok: true, simulated: true };
  }

  // Email service connected: send for real
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const text = await response.text();
  console.log("TEST 2 - Formspree status:", response.status);
  console.log("TEST 3 - Formspree reply:", text);

  if (!response.ok) {
    throw new Error("The inquiry could not be sent.");
  }

  return { ok: true };
}