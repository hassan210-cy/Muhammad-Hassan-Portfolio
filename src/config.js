// -----------------------------------------------------------------------
// Site config — the handful of values you'll actually want to change
// yourself. Nothing else in the codebase needs to change when you do.
// -----------------------------------------------------------------------

/**
 * Contact form endpoint (Formspree — https://formspree.io).
 * 1. Sign up and create a form.
 * 2. Copy the endpoint (looks like "https://formspree.io/f/xxxxxxxx").
 * 3. Paste it below. Until you do, the form tells the visitor it isn't
 *    connected yet instead of pretending to send anything.
 */
export const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/mljrgkoa';

/**
 * Social / contact links — used by the fixed side rail (LinkedIn + WhatsApp)
 * and the footer (all four). WhatsApp uses the click-to-chat format:
 * https://wa.me/<countrycode+number>, no spaces/dashes/leading zero.
 */
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/muhammad-hassan-8a6702366',
  whatsapp: 'https://wa.me/923319957605',
  facebook: 'https://www.facebook.com/profile.php?id=61572953895918',
  email: 'mailto:hassan81456@gmail.com'
};
