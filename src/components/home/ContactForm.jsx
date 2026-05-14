import { useState } from 'react';

const INIT = { name: '', email: '', phone: '', message: '' };

export default function ContactForm({ compact = false }) {
    const [form, setForm] = useState(INIT);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required.';
        if (!form.email.trim()) errs.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(form.email))
            errs.email = 'Enter a valid email.';
        if (!form.message.trim()) errs.message = 'Message is required.';
        return errs;
    };

    const handleChange = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
        setErrors((er) => ({ ...er, [e.target.name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }

        setStatus('sending');
        // Use mailto: as fallback — replace with Formspree/EmailJS endpoint if needed
        const mailtoUrl = `mailto:contact@drpreetsandhu.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
        )}`;
        window.location.href = mailtoUrl;

        setTimeout(() => {
            setStatus('success');
            setForm(INIT);
        }, 500);
    };

    const inputClass = (field) =>
        `w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 ${
            errors[field]
                ? 'border-red-400 focus:ring-red-200'
                : 'border-gray-200 focus:border-[#262897] focus:ring-[#262897]/20'
        }`;

    return (
        <section id="contact" className={compact ? '' : 'section-py bg-white'}>
            {!compact && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
                        style={{
                            background: 'rgba(38,40,151,0.08)',
                            color: '#262897',
                        }}
                    >
                        Contact
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-brand-dark"
                        style={{ fontFamily: 'Jost, sans-serif' }}
                    >
                        Let's Start a Conversation
                    </h2>
                    <p className="text-brand-body mt-3 max-w-xl mx-auto">
                        Whether you have an idea, a question, or just want to
                        say hi — my inbox is always open.
                    </p>
                </div>
            )}

            <div
                className={
                    compact ? '' : 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'
                }
            >
                {status === 'success' ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                            <i className="fa-solid fa-check text-green-500 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">
                            Message Sent!
                        </h3>
                        <p className="text-brand-body">
                            Your email client should have opened. I'll be in
                            touch soon.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 px-6 py-2 rounded-full text-sm font-semibold text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form
                        id="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                        className="space-y-5"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label
                                    htmlFor="cf-name"
                                    className="block text-sm font-medium text-brand-dark mb-1.5"
                                >
                                    Full Name{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="cf-name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Dr. Preet Sandhu"
                                    className={inputClass('name')}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="cf-email"
                                    className="block text-sm font-medium text-brand-dark mb-1.5"
                                >
                                    Email Address{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="cf-email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={inputClass('email')}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="cf-phone"
                                className="block text-sm font-medium text-brand-dark mb-1.5"
                            >
                                Phone Number{' '}
                                <span className="text-xs text-gray-400">
                                    (optional)
                                </span>
                            </label>
                            <input
                                id="cf-phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+91 98765 43210"
                                className={inputClass('phone')}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="cf-message"
                                className="block text-sm font-medium text-brand-dark mb-1.5"
                            >
                                Your Message{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="cf-message"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your idea, project, or just say hello..."
                                className={
                                    inputClass('message') + ' resize-none'
                                }
                            />
                            {errors.message && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            id="cf-submit"
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            style={{
                                background:
                                    'linear-gradient(135deg, #262897 0%, #4a4cc7 100%)',
                            }}
                        >
                            {status === 'sending' ? (
                                <>
                                    <i className="fa-solid fa-circle-notch fa-spin" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-paper-plane" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
