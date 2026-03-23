
const form = document.getElementById('booking-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const phone = data.get('phone')?.toString().trim() || '';
    const area = data.get('area')?.toString().trim() || '';
    const service = data.get('service')?.toString().trim() || '';
    const details = data.get('details')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const message = `New booking request from ${name}
Phone: ${phone}
Email: ${email}
Area: ${area}
Service: ${service}

Details:
${details}`;
    const smsText = encodeURIComponent(`Hi, this is ${name}. I need help with ${service}. ${details}`);
    const mailto = `mailto:hello@fuseandfixhomeservices.com?subject=${encodeURIComponent('New booking request')}&body=${encodeURIComponent(message)}`;
    const sms = `sms:8705608903?body=${smsText}`;
    document.getElementById('booking-result').innerHTML = `<div class="card"><h3>Request ready</h3><p class="muted">This demo site uses your phone or email app so it works without a server.</p><div class="actions"><a class="btn" href="${sms}">Send Text Request</a><a class="btn-secondary" href="${mailto}">Send Email Request</a></div></div>`;
  });
}
