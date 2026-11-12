(function () {
  var D = window.PORTFOLIO, $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ic = function (n, st) { return '<i class="ic"' + (st ? ' style="' + st + '"' : '') + '>' + (ICONS[n] || "") + '</i>'; }, ui = function (n) { return ic(n); };
  var ext = function (u) { return /^https?:|\.pdf$/i.test(u) ? ' target="_blank" rel="noopener"' : /\.(pptx?|docx?|zip)$/i.test(u) ? " download" : ""; };
  var link = function (l) { return '<a class="link" href="' + esc(l.url) + '"' + ext(l.url) + '>' + esc(l.texte) + ui(/\.(pptx?|docx?|zip)$/i.test(l.url) ? "download" : "arrow-up-right") + '</a>'; };
  var chips = function (a) { return a.length ? '<div class="chips">' + a.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join("") + '</div>' : ""; };
  var logo = function (src, alt) { return '<div class="logo">' + (src ? '<img src="' + src + '" alt="' + esc(alt) + '" loading="lazy">' : ui("graduation-cap")) + '</div>'; };

  /* Accueil */
  var I = D.identite;
  $("#brandName").textContent = I.marque;
  $(".brand").setAttribute("aria-label", I.prenom + " " + I.nomFamille + " — Accueil");
  /* Introduction : 1re phrase lettre par lettre, les suivantes mot par mot */
  $("#dispo").textContent = I.disponibilite; $("#cv").href = I.cv;
  function chars(el, text, t, step) { el.textContent = ""; text.split("").forEach(function (ch) { var s = document.createElement("span"); s.className = "c"; s.textContent = ch; s.style.animationDelay = t + "ms"; t += step; el.appendChild(s); }); return t; }
  function words(el, text, t, step) {
    el.innerHTML = '<span class="sr">' + esc(text) + '</span>'; var box = document.createElement("span"); box.setAttribute("aria-hidden", "true"); el.appendChild(box);
    text.split(" ").forEach(function (w, k) { if (k) box.appendChild(document.createTextNode(" ")); var s = document.createElement("span"); s.className = "w"; s.textContent = w; s.style.animationDelay = t + "ms"; t += step; box.appendChild(s); }); return t;
  }
  $("#srname").textContent = I.debut + " " + I.prenom + " " + I.nomFamille;
  if (reduce) {
    $("#hello").textContent = I.debut; $("#n1").textContent = I.prenom; $("#n2").textContent = I.nomFamille;
    $("#role").textContent = I.phrases[0]; $("#profil").textContent = I.phrases.slice(1).join(" ");
  } else {
    var t = chars($("#hello"), I.debut, 450, 36);
    t = chars($("#n1"), I.prenom, t + 70, 36); t = chars($("#n2"), I.nomFamille, t, 36);
    var t2 = words($("#role"), I.phrases[0], t + 160, 70);
    $("#portrait").style.setProperty("--portrait-delay", (t2 + 100) + "ms");
    var t3 = words($("#profil"), I.phrases.slice(1).join(" "), t2 + 80, 45);
    $("#cta").style.setProperty("--ad", Math.max(t2, t3 - 900) + "ms"); $("#meta").style.setProperty("--ad", Math.max(t2 + 150, t3 - 700) + "ms");
  }
  $("#meta").innerHTML = '<li>' + ui("map-pin") + esc(I.lieu) + '</li><li>' + ui("car-front") + esc(I.permis) + '</li>';
  $("#langs").innerHTML = D.langues.map(function (l) {
    return '<li><img src="assets/flags/' + l.drapeau + '.svg" alt="" width="30" height="30"><div><b>' + esc(l.nom) + '</b><small>' + esc(l.niveau) + '</small></div></li>';
  }).join("");

  /* Expérience */
  var E = D.experience;
  $("#exp").innerHTML = '<article class="card exp rv">' + logo(E.logo, E.entreprise) + '<div><h3>' + esc(E.poste) + '</h3><p class="sub"><b>' + esc(E.entreprise) + '</b>, ' + esc(E.lieu) + ' · ' + esc(E.periode) + ' (' + esc(E.duree) + ')</p>' +
    '<ul class="pts exp-resume">' + E.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' + chips(E.tags) +
    '<p class="exp-links">' + E.liens.map(link).join("") + '</p></div></article>';

  /* Projets */
  function imagesProjet(p) { return (p.image ? [{ image: p.image, alt: p.alt }] : []).concat(p.imagesSupplementaires || []); }
  $("#proj").innerHTML = D.projets.map(function (p, i) {
    var images = imagesProjet(p);
    return '<article class="card pj rv' + (p.image ? " big" : "") + '">' +
      '<div class="pj-b"><div><h3>' + esc(p.titre) + '</h3><small>' + esc([p.type, p.date].filter(Boolean).join(" · ")) + '</small></div><p>' + esc(p.resume) + '</p>' +
      (p.liens.length ? '<div class="pj-l">' + p.liens.map(link).join("") + '</div>' : "") + chips(p.tags) + '</div>' +
      (images.length ? '<figure class="project-gallery"><button type="button" data-project="' + i + '" aria-haspopup="dialog" aria-controls="lb" aria-label="Agrandir les captures : ' + esc(p.titre) + '"><img src="' + esc(images[0].image) + '" alt="' + esc(images[0].alt || p.titre) + '" loading="lazy">' +
      (images.length > 1 ? '<span class="cert-count" aria-hidden="true">' + ui("images") + '<span>' + images.length + '</span></span>' : '') + '</button></figure>' : '') + '</article>';
  }).join("");

  /* Compétences */
  function outil(o) {
    var visuel = '<div class="skill-logo' + (o.neutre ? ' neutral' : ' brand-logo') + (o.large ? ' wide-logo' : '') + '" aria-hidden="true"><img src="' + esc(o.logo) + '" alt="" loading="lazy"></div>';
    return '<div class="tile' + (o.largeCarte ? ' tile-wide' : '') + '">' + visuel + '<span>' + esc(o.nom) + '</span></div>';
  }
  $("#skills").innerHTML = D.competences.map(function (c) {
    var cartes = c.presentation === "cartes";
    return '<div class="cat rv' + (cartes ? ' cat-cards' : '') + '"><div class="cat-h"><h3>' + esc(c.categorie) + '</h3>' +
      (cartes ? '' : '<div class="arrows"><button class="icon-btn" type="button" data-d="-1" aria-label="Précédent">' + ui("chevron-left") + '</button><button class="icon-btn" type="button" data-d="1" aria-label="Suivant">' + ui("chevron-right") + '</button></div>') + '</div>' +
      '<div class="' + (cartes ? 'skill-cards' : 'rail') + '"' + (cartes ? '' : ' tabindex="0" role="region" aria-label="' + esc(c.categorie) + '"') + '>' + c.outils.map(outil).join("") + '</div>' + chips(c.notions) + '</div>';
  }).join("");
  $$(".cat").forEach(function (cat) {
    var r = $(".rail", cat), ar = $(".arrows", cat);
    if (!r || !ar) return;
    function upd() { var more = r.scrollWidth > r.clientWidth + 4; ar.style.visibility = more ? "visible" : "hidden"; r.classList.toggle("end", !more || r.scrollLeft + r.clientWidth >= r.scrollWidth - 4); }
    $$("button", ar).forEach(function (b) { b.onclick = function () { r.scrollBy({ left: b.dataset.d * r.clientWidth * .8, behavior: reduce ? "auto" : "smooth" }); }; });
    r.addEventListener("scroll", upd, { passive: true }); addEventListener("resize", upd); upd();
    var x0, s0, down = false;
    r.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; down = true; x0 = e.clientX; s0 = r.scrollLeft; r.classList.add("drag"); });
    addEventListener("pointermove", function (e) { if (down) r.scrollLeft = s0 - (e.clientX - x0); });
    addEventListener("pointerup", function () { down = false; r.classList.remove("drag"); });
  });

  /* Frise */
  $("#tl").innerHTML = D.formations.map(function (f) {
    return '<div class="tl-i"><article class="card rv"><div class="tl-h">' + logo(f.logo, f.etablissement) + '<div><h3>' + esc(f.etablissement) + '</h3><small>' + esc(f.lieu) + '</small></div></div>' +
      '<p class="tl-d">' + esc(f.diplome) + '</p><p class="tag">' + esc(f.periode) + ' · ' + esc(f.duree) + '</p>' +
      (f.details.length ? '<ul>' + f.details.map(function (d) { return '<li>' + esc(d) + '</li>'; }).join("") + '</ul>' : "") + '</article></div>';
  }).join("");
  var tl = $("#tl");
  function prog() { var r = tl.getBoundingClientRect(), p = (innerHeight * .6 - r.top) / r.height; tl.style.setProperty("--p", Math.max(0, Math.min(1, p))); }
  if (reduce) tl.style.setProperty("--p", 1); else { addEventListener("scroll", function () { requestAnimationFrame(prog); }, { passive: true }); prog(); }

  /* Une seule vignette par certification ; toutes les images dans la visionneuse. */
  function imagesCert(c) { return [{ image: c.image, alt: c.alt }].concat(c.imagesSupplementaires || []); }
  $("#certs").innerHTML = D.certifications.map(function (c, i) {
    var images = imagesCert(c);
    return '<article class="card cert rv"><div class="cert-t"><h3>' + esc(c.titre) + '</h3><ul class="meta"><li><b>' + esc(c.organisme) + '</b></li><li>' + esc(c.date) + '</li>' + (c.validite ? '<li>' + esc(c.validite) + '</li>' : '') + '</ul><p>' + esc(c.texte) + '</p>' + (c.identifiant ? '<small class="cert-id">ID : ' + esc(c.identifiant) + '</small>' : '') + (c.lien ? link(c.lien) : "") + '</div>' +
      '<div class="cert-images"><button type="button" data-i="' + i + '" aria-haspopup="dialog" aria-controls="lb" aria-label="Agrandir : ' + esc(c.alt || c.titre) + (images.length > 1 ? ' — ' + images.length + ' images disponibles' : '') + '"><img src="' + esc(c.image) + '" alt="' + esc(c.alt || c.titre) + '" loading="lazy">' +
      (images.length > 1 ? '<span class="cert-count" aria-hidden="true">' + ui("images") + '<span>' + images.length + '</span></span>' : '') + '</button></div></article>';
  }).join("");
  var lb = $("#lb"), lbi = $("#lbi"), certIndex = 0, imageIndex = 0, lbOpener, galleryType = "certification";
  function showCertImage(n) {
    var c = galleryType === "projet" ? D.projets[certIndex] : D.certifications[certIndex], images = galleryType === "projet" ? imagesProjet(c) : imagesCert(c);
    imageIndex = (n + images.length) % images.length;
    var image = images[imageIndex];
    lbi.src = image.image; lbi.alt = image.alt || c.titre;
    $("#lbtitle").textContent = c.titre;
    $("#lbcount").textContent = (imageIndex + 1) + " / " + images.length;
    $("#lbcaption").textContent = lbi.alt;
    $("#lbprev").hidden = $("#lbnext").hidden = images.length < 2;
  }
  $$(".cert button").forEach(function (b) { b.onclick = function () {
    galleryType = "certification"; certIndex = Number(b.dataset.i); lbOpener = b; showCertImage(0);
    lb.showModal(); document.body.classList.add("viewer-open"); $("#lbx").focus();
  }; });
  $$("[data-project]").forEach(function (b) { b.onclick = function () {
    galleryType = "projet"; certIndex = Number(b.dataset.project); lbOpener = b; showCertImage(0);
    lb.showModal(); document.body.classList.add("viewer-open"); $("#lbx").focus();
  }; });
  $("#lbx").onclick = function () { lb.close(); };
  $("#lbprev").onclick = function () { showCertImage(imageIndex - 1); };
  $("#lbnext").onclick = function () { showCertImage(imageIndex + 1); };
  lb.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      var buttons = $$("button", lb).filter(function (b) { return !b.hidden && !b.disabled; });
      var current = buttons.indexOf(document.activeElement);
      if (current < 0) current = e.shiftKey ? 0 : -1;
      e.preventDefault(); buttons[(current + (e.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus();
      return;
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); showCertImage(imageIndex + (e.key === "ArrowRight" ? 1 : -1)); }
  });
  lb.addEventListener("click", function (e) {
    if (e.target !== lb) return;
    var r = lb.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) lb.close();
  });
  lb.addEventListener("close", function () { document.body.classList.remove("viewer-open"); if (lbOpener) lbOpener.focus({ preventScroll: true }); });
  var touchX, touchY;
  lbi.addEventListener("touchstart", function (e) { if (e.touches.length === 1) { touchX = e.touches[0].clientX; touchY = e.touches[0].clientY; } else touchX = null; }, { passive: true });
  lbi.addEventListener("touchend", function (e) {
    if (touchX == null || !e.changedTouches.length) return;
    var dx = e.changedTouches[0].clientX - touchX, dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) showCertImage(imageIndex + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });

  /* Centres d’intérêt */
  $("#likes").innerHTML = D.interets.map(function (i) {
    var contenu = ic(i.icone) + '<span>' + esc(i.nom) + '</span>' + (i.utilisateur ? '<small>' + esc(i.utilisateur) + '</small>' : '');
    return '<li class="card rv' + (i.url ? ' linked-interest' : '') + '">' + (i.url ? '<a href="' + esc(i.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(i.nom + ' — ' + i.utilisateur + ' sur Chess.com (nouvel onglet)') + '">' + contenu + '</a>' : contenu) + '</li>';
  }).join("");

  /* Contact */
  var C = D.contact;
  $("#contactInvitation").textContent = C.invitation;
  $("#footerName").textContent = I.prenom + " " + I.nomFamille;
  $("#copyrightName").textContent = I.prenom + " " + I.nomFamille;
  $("#footerLinks").innerHTML = C.liens.map(function (l) { return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.nom) + '</a>'; }).join("");
  $("#mailLink").textContent = C.email; $("#mailLink").href = "mailto:" + C.email;
  $("#phoneLink").textContent = C.telephone; $("#phoneLink").href = "tel:" + C.telephone.replace(/[^+\d]/g, "");
  $("#postalAddress").textContent = C.adresse;
  $("#social").innerHTML = C.liens.map(function (l) { return '<li><a href="' + l.url + '" target="_blank" rel="noopener" aria-label="' + l.nom + '" title="' + l.nom + '">' + '<img src="' + esc(l.logo) + '" alt="" width="24" height="24" aria-hidden="true">' + '</a></li>'; }).join("");
  $("#copy").onclick = function () { var s = $("span", this); navigator.clipboard && navigator.clipboard.writeText(C.email).then(function () { s.textContent = "Adresse copiée"; setTimeout(function () { s.textContent = "Copier l’adresse"; }, 2000); }); };
  var form = $("#form"), st = $("#status");
  var submitButton = $('button[type="submit"]', form), sending = false;
  form.addEventListener("input", function (e) {
    e.target.removeAttribute("aria-invalid");
    if (e.target.setCustomValidity) e.target.setCustomValidity("");
    if (!sending) st.textContent = "";
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (sending) return;
    $$("[required]", form).forEach(function (field) {
      field.value = field.value.trim();
      field.setCustomValidity(field.value ? "" : "Merci de renseigner ce champ.");
      field.setAttribute("aria-invalid", String(!field.checkValidity()));
    });
    if (!form.checkValidity()) {
      st.className = "status err"; st.textContent = "Merci de remplir les quatre champs avec une adresse email valide.";
      form.reportValidity(); return;
    }
    var d = new FormData(form); if (d.get("botcheck")) return;
    if (!C.web3formsKey) {
      st.className = "status";
      st.textContent = "Envoi direct non configuré : votre messagerie va s’ouvrir. Le message n’est pas encore envoyé ; validez son envoi dans votre messagerie.";
      location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(d.get("subject")) + "&body=" + encodeURIComponent(d.get("message") + "\n\n" + d.get("name") + " (" + d.get("email") + ")");
      return;
    }
    d.set("access_key", C.web3formsKey);
    d.set("subject", d.get("subject")); // Le sujet saisi devient l’objet de l’email Web3Forms.
    d.set("replyto", d.get("email")); d.set("from_name", d.get("name"));
    sending = true; submitButton.disabled = true; form.setAttribute("aria-busy", "true");
    st.className = "status"; st.textContent = "Envoi en cours…";
    var controller = new AbortController(), timer = setTimeout(function () { controller.abort(); }, 20000);
    fetch("https://api.web3forms.com/submit", { method: "POST", body: d, signal: controller.signal }).then(function (r) {
      if (!r.ok) throw new Error("Envoi refusé"); return r.json();
    }).then(function (j) {
      if (!j.success) throw new Error("Envoi refusé");
      st.className = "status ok"; st.textContent = "Message envoyé. Merci !"; form.reset();
      $$("[aria-invalid]", form).forEach(function (field) { field.removeAttribute("aria-invalid"); });
    }).catch(function () {
      st.className = "status err"; st.textContent = "L’envoi n’a pas pu être confirmé. Vos champs sont conservés. Réessayez ou écrivez-moi directement à " + C.email + ".";
    }).finally(function () {
      clearTimeout(timer); sending = false; submitButton.disabled = false; form.removeAttribute("aria-busy");
    });
  });
  $("#year").textContent = new Date().getFullYear();

  /* Icônes d'interface du HTML statique */
  $$("[data-ui]").forEach(function (el) { el.innerHTML = ICONS[el.dataset.ui]; });

  /* Thème, menu, navigation active, apparitions */
  var root = document.documentElement, tb = $("#theme");
  function setIcon() { tb.firstChild.innerHTML = ICONS[root.dataset.theme === "dark" ? "sun" : "moon"]; document.querySelector('meta[name=theme-color]').content = root.dataset.theme === "dark" ? "#0d1216" : "#f3f5f4"; }
  tb.onclick = function () { root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark"; try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {} setIcon(); }; setIcon();
  var menu = $("#menu"), bg = $("#burger");
  bg.onclick = function () { var o = menu.classList.toggle("open"); bg.setAttribute("aria-expanded", o); };
  $$("a", menu).forEach(function (a) { a.onclick = function () { menu.classList.remove("open"); bg.setAttribute("aria-expanded", false); }; });
  addEventListener("scroll", function () { $("#nav").classList.toggle("on", scrollY > 24); }, { passive: true });
  $$(".proj .pj, .certs .cert, .likes li, .tl-i .card, .contact > *").forEach(function (el, i) { el.style.setProperty("--rd", (i % 3) * 110 + "ms"); });
  $$(".cat").forEach(function (cat) { $$(".tile", cat).forEach(function (t, k) { t.style.setProperty("--k", Math.min(k, 9)); }); });
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) {
    if (!e.isIntersecting) return; var el = e.target; el.classList.add("in"); if (el.closest(".tl-i")) el.closest(".tl-i").classList.add("in"); io.unobserve(el);
    setTimeout(function () { el.classList.remove("rv", "in"); }, 2000); /* rend ensuite aux cartes leurs transitions de survol */
  }); }, { threshold: .15, rootMargin: "0px 0px -6% 0px" });
  document.addEventListener("touchstart", function () {}, { passive: true }); /* active l'état :active sur iOS */
  $$(".rv").forEach(function (el) { if (reduce) el.classList.add("in"); else io.observe(el); });
  var secs = $$("main section[id]"), links = $$("a", menu);
  var so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle("act", a.getAttribute("href") === "#" + e.target.id); }); }); }, { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach(function (s) { so.observe(s); });
})();
