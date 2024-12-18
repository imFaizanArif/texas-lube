"use client"
import { Button, message } from "antd"
import Loader from "components/Loader"
import Link from "next/link"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setloading] = useState<boolean>(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const [messageApi, contextHolder] = message.useMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setloading(true)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("ress", res)

      if (res.ok) {
        setloading(false)
        messageApi.open({
          type: "success",
          content: "Email sent successfully!",
          duration: 4,
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        messageApi.open({
          type: "error",
          content: "Failed to send email!",
          duration: 4,
        })
        setloading(false)
      }
    } catch (error) {
      setloading(false)
      messageApi.open({
        type: "error",
        content: "Api Failed to send email!",
        duration: 4,
      })
    }
  }

  return (
    <div className="mx-auto w-[100%] md:w-[70%] shadow-lg p-4 rounded-md border">
      {contextHolder}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full rounded border p-2" />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full rounded border p-2" />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full rounded border p-2" />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full rounded border p-2" rows={5} />

        <Button
          onClick={handleSubmit}
          disabled={loading}
          role="link"
          className="w-full rounded-lg bg-[#BF2B29] !px-[30px] !py-[22px] font-semibold text-white shadow-lg hover:!border-none hover:!bg-red-600 hover:!text-white"
        >
          {loading ? <Loader /> : "Send"}

        </Button>
      </form>
    </div>
  )
}
