(function () {
  "use strict";
  const data = window.PORTFOLIO_CONTENT || {};
  const email = data.contact?.email || "";
  const gmailUrl = (address) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}`;

  // Configure contact actions from the single editable content file.
  document.querySelectorAll(".email-gmail").forEach((link) => {
    if (email) link.href = gmailUrl(email);
  });
  document.querySelectorAll(".email-mailto, .email-text").forEach((link) => {
    if (email) link.href = `mailto:${email}`;
  });
  document.querySelectorAll(".email-text").forEach((link) => {
    if (email) link.textContent = email;
  });

  // Copy email address; provide a fallback for browsers without Clipboard API.
  document.querySelectorAll(".copy-email").forEach((button) => {
    button.addEventListener("click", async () => {
      const status = document.querySelector(".copy-status");
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const field = document.createElement("textarea");
          field.value = email;
          field.style.position = "fixed";
          field.style.opacity = "0";
          document.body.appendChild(field);
          field.select();
          const copied = document.execCommand("copy");
          field.remove();
          if (!copied) throw new Error("Copy unavailable");
        }
        if (status) status.textContent = "Email address copied.";
        button.textContent = "Copied!";
      } catch (_) {
        if (status) status.textContent = `Please copy this address: ${email}`;
      }
    });
  });

  // Render project cards from js/content.js so routine project updates need no HTML edits.
  const projectList = document.getElementById("project-list");
  if (projectList && Array.isArray(data.projects)) {
    data.projects.forEach((project, index) => {
      const article = document.createElement("article");
      article.className = "project";
      const number = document.createElement("div");
      number.className = "project-no";
      number.textContent = String(index + 1).padStart(2, "0");
      const main = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = project.title || "Untitled project";
      const description = document.createElement("p");
      description.textContent = project.description || "";
      const tags = document.createElement("div");
      tags.className = "tags";
      (project.technologies || []).forEach((technology) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = technology;
        tags.appendChild(tag);
      });
      main.append(title, description, tags);
      const aside = document.createElement("div");
      aside.className = "project-aside";
      const metric = document.createElement("div");
      metric.className = "metric";
      metric.textContent = project.metric || "";
      const metricLabel = document.createElement("span");
      metricLabel.className = "metric-label";
      metricLabel.textContent = project.metricLabel || "";
      aside.append(metric, metricLabel);
      if (project.url) {
        const link = document.createElement("a");
        link.className = "text-link";
        link.href = project.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = `${project.linkLabel || "View project"} ↗`;
        aside.appendChild(link);
      }
      article.append(number, main, aside);
      projectList.appendChild(article);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
