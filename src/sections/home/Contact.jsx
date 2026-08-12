import { useState } from 'react';
import Reveal from '../../components/Reveal.jsx';
import { CONTACT_FORM_ENDPOINT } from '../../config.js';

const ENDPOINT_CONFIGURED = CONTACT_FORM_ENDPOINT && !CONTACT_FORM_ENDPOINT.includes('YOUR_FORM_ID');

export default function Contact() {
  // Controlled form fields, kept in one object for simplicity.
  const [fields, setFields] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState({ text: '', tone: '' }); // tone: '' | 'success' | 'error'
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setStatus({ text: 'Please fill in every field before sending.', tone: 'error' });
      return;
    }

    // Honeypot — if this hidden field got filled in, it's almost certainly a bot.
    // Pretend success and quietly drop it instead of actually sending anything.
    if (fields.company.trim()) {
      setStatus({ text: 'Message sent — thanks for reaching out!', tone: 'success' });
      setFields({ name: '', email: '', message: '', company: '' });
      return;
    }

    if (!ENDPOINT_CONFIGURED) {
      setStatus({
        text: 'Contact form isn\u2019t connected yet — set CONTACT_FORM_ENDPOINT in src/config.js.',
        tone: 'error',
      });
      return;
    }

    setIsSending(true);
    setStatus({ text: 'Sending your message…', tone: '' });

    try {
      const formData = new FormData();
      formData.append('name', fields.name);
      formData.append('email', fields.email);
      formData.append('message', fields.message);

      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus({ text: 'Message sent — thanks for reaching out! I\u2019ll reply by email.', tone: 'success' });
        setFields({ name: '', email: '', message: '', company: '' });
      } else {
        setStatus({ text: 'Something went wrong sending that. Please try again, or email me directly.', tone: 'error' });
      }
    } catch {
      setStatus({ text: 'Network error — check your connection and try again.', tone: 'error' });
    } finally {
      setIsSending(false);
    }
  };

  const inputClasses =
    'bg-surface border border-hairline-strong rounded-lg px-4 py-[0.8rem] text-ink font-sans text-base ' +
    'transition-colors duration-200 focus:outline-none focus:border-accent focus:ring-[3px] focus:ring-accent-tint';

  const statusColor =
    status.tone === 'success' ? 'text-sage' : status.tone === 'error' ? 'text-danger' : 'text-muted';

  return (
    <section id="contact" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)] scroll-mt-24">
      <div className="max-w-content mx-auto">
      <div className="max-w-[620px] text-left">
        <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          06 — Contact
        </Reveal>
        <Reveal as="h2" delay={80} className="font-display text-display-lg font-semibold mb-6">
          Let&apos;s build something.
        </Reveal>
        <Reveal as="p" delay={140} className="text-body-lg text-muted mb-5">
          Open to freelance work, collaboration, or just talking shop.
        </Reveal>

        <Reveal delay={200}>
          <form onSubmit={handleSubmit} noValidate className="mt-7 flex flex-col gap-[1.1rem]">
            <div className="flex flex-col gap-[0.4rem]">
              <label htmlFor="name" className="font-mono text-[0.78rem] text-dim uppercase tracking-wider">
                Name
              </label>
              <input id="name" name="name" type="text" autoComplete="name" required
                value={fields.name} onChange={handleChange} className={inputClasses} />
            </div>

            <div className="flex flex-col gap-[0.4rem]">
              <label htmlFor="email" className="font-mono text-[0.78rem] text-dim uppercase tracking-wider">
                Email
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required
                value={fields.email} onChange={handleChange} className={inputClasses} />
            </div>

            <div className="flex flex-col gap-[0.4rem]">
              <label htmlFor="message" className="font-mono text-[0.78rem] text-dim uppercase tracking-wider">
                Message
              </label>
              <textarea id="message" name="message" rows={4} required
                value={fields.message} onChange={handleChange} className={`${inputClasses} resize-y`} />
            </div>

            {/* Honeypot field — visually hidden from real users via CSS, not `display:none`
                (which some bots detect and skip). Real users will never see or fill this in. */}
            <div className="absolute w-px h-px overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex="-1" autoComplete="off"
                value={fields.company} onChange={handleChange} />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="font-semibold text-[0.95rem] px-[1.6rem] py-[0.85rem] rounded-full inline-flex
                         items-center gap-2 bg-ink text-white transition-all duration-200
                         hover:bg-accent hover:-translate-y-0.5 hover:shadow-lift
                         disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSending ? 'Sending…' : 'Send message'}
            </button>

            <p role="status" aria-live="polite" className={`m-0 font-mono text-[0.85rem] min-h-[1.2em] ${statusColor}`}>
              {status.text}
            </p>
          </form>
        </Reveal>
      </div>
      </div>
    </section>
  );
}
