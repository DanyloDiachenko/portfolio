import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { name, email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "danildiachenko23@gmail.com",
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD || "",
            },
        });

        const mailOptions = {
            from: email,
            to: "danildiachenko23@gmail.com",
            subject: subject,
            text: `
                Name: ${name}\n
                Email: ${email}\n
                Message: ${message}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Message was sent successfuly" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Sending message happened error" });
        }
    } else {
        res.status(405).json({ message: "Method is not allowed" });
    }
}
