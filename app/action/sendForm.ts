"use server";

import { sendEmail } from "../lib/sendMail";

export interface FormState {
  success: boolean;
  message: string;
}

export async function sendForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const to = "ae_carrizo@hotmail.com";
  const name = formData.get("name");
  const email = formData.get("email");
  const text = formData.get("text");
  const html = `
  <h2>Consulta desde servicios-edelbyte</h2>
  <p>Recibiste una consulta de ${name}</p>
  <p>Su email: ${email}</p>
  <p>Consulta:</p>
  <p>${text}</p>
  `;
  try {
    await sendEmail({
      to,
      from: "Servicios edelbyte <info@edelbyte.com.ar>",
      subject: "Consulta desde Servicios edelbyte",
      html,
    });
    console.log(
      "Mail enviado correctamente a:",
      name,
      "email:",
      email,
      "texto",
      text,
    );
    return {
      success: true,
      message:
        "Consulta enviada con exito. Me pondré en contacto a la brevedad.",
    };
  } catch (error) {
    console.error("Se produjo un error al enviar la consulta. ERROR : ", error);
    return {
      success: false,
      message: "Hubo un error al enviar la consulta.",
    };
  }
}
