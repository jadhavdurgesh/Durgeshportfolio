import { contactFormEmail } from "@/lib/images";

export type ContactFormPayload = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
  | string
  | undefined;

export async function submitContactForm(data: ContactFormPayload): Promise<void> {
  if (!web3FormsAccessKey) {
    throw new Error(
      "Contact form is not configured yet. Please email me directly."
    );
  }

  const body = new FormData();
  body.append("access_key", web3FormsAccessKey);
  body.append("name", data.name);
  body.append("email", data.email);
  body.append("subject", `Portfolio inquiry from ${data.name}`);
  body.append(
    "message",
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Project type: ${data.projectType}`,
      `Budget: ${data.budget || "Not specified"}`,
      "",
      data.message,
    ].join("\n")
  );
  body.append("projectType", data.projectType);
  body.append("budget", data.budget || "Not specified");
  body.append("from_name", "Durgesh Portfolio");
  body.append("replyto", data.email);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body,
  });

  const result = (await response.json()) as { success: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to send message.");
  }
}

export { contactFormEmail };
