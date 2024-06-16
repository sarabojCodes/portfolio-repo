"use server"
import { Resend } from 'resend'


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")

    if(!message || typeof message !== "string"){
        return {
            error:"Invalid message"
        }
    }
    try {

      await    resend.emails.send({
            from: "send.saraboj.com",
            to: "msaraboj@gmail.com",
            subject: "sdfasdfasdf",
            // reply_to:senderEmail,
            text: "Hello world!"
        })
    } catch (error:any) {
        console.log(error.message)
    }

}