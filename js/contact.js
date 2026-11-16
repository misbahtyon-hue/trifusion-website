/* =============================================================
   Trifusion Bionova Medika — Contact Form
   Client-side validation + success feedback (demo, no backend)
   ============================================================= */
(function () {
  "use strict";

  const form = document.getElementById("contactForm");
  if (!form) return;

  const success = document.getElementById("formSuccess");

  const fields = {
    name: { el: form.name, validate: (v) => v.trim().length >= 2, msg: "Please enter your full name." },
    email: {
      el: form.email,
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      msg: "Please enter a valid email address."
    },
    subject: { el: form.subject, validate: (v) => v.trim().length >= 3, msg: "Please enter a subject." },
    message: { el: form.message, validate: (v) => v.trim().length >= 10, msg: "Message must be at least 10 characters." }
  };

  function showError(key, show) {
    const field = fields[key];
    const errEl = document.getElementById(`err-${key}`);
    field.el.classList.toggle("invalid", show);
    if (errEl) errEl.classList.toggle("show", show);
  }

  function validateField(key) {
    const field = fields[key];
    const valid = field.validate(field.el.value);
    showError(key, !valid);
    return valid;
  }

  // Validate on blur + clear error on input
  Object.keys(fields).forEach((key) => {
    fields[key].el.addEventListener("blur", () => validateField(key));
    fields[key].el.addEventListener("input", () => {
      if (fields[key].el.classList.contains("invalid")) validateField(key);
    });
  });

  // Pre-fill subject if arriving from a product request
  const params = new URLSearchParams(location.search);
  const productId = params.get("product");
  if (productId && window.TF_DATA) {
    const p = window.TF_DATA.PRODUCTS.find((x) => x.id === productId);
    if (p && form.subject) {
      form.subject.value = `Quote request: ${p.name}`;
      if (form.message) form.message.value = `Hello, I'd like to request more information and pricing for the ${p.name}.`;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let allValid = true;
    Object.keys(fields).forEach((key) => {
      if (!validateField(key)) allValid = false;
    });

    if (!allValid) {
      const firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Demo success — replace with real submission (fetch/EmailJS/backend)
    if (success) {
      success.classList.add("show");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    form.reset();

    setTimeout(() => {
      success && success.classList.remove("show");
    }, 6000);
  });
})();
