import PageLayout from '../Components/PageLayout'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function Contact() {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!')
          alert('Message sent successfully!')
        },
        (error) => {
          console.log('FAILED...', error.text)
          alert('Something went wrong.')
        }
      )

    e.target.reset()
  }

  return (
    <PageLayout
      title="Contact Me"
      description="If you want to suggest anything, contribute, or just say hi :)"
      toc={[
        {
          id: 'contact-form',
          label: 'Contact Form',
        },
      ]}
    >
      <section id="contact-form" className="doc-block">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>
    </PageLayout>
  )
}