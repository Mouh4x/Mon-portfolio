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
    '<p class="exp-resume">' + esc(E.resume) + '</p>' +
    '<p class="exp-links">' + E.liens.map(link).join("") + '</p></div></article>';

  /* Projets */
  $("#proj").innerHTML = D.projets.map(function (p) {
    return '<article class="card pj rv' + (p.image ? " big" : "") + '">' + (p.image ? '<figure><img src="' + p.image + '" alt="' + esc(p.alt || "") + '" loading="lazy"></figure>' : "") +
      '<div class="pj-b"><div><h3>' + esc(p.titre) + '</h3><small>' + esc([p.type, p.date].filter(Boolean).join(" · ")) + '</small></div><p>' + esc(p.resume) + '</p>' +
      (p.liens.length ? '<div class="pj-l">' + p.liens.map(link).join("") + '</div>' : "") + chips(p.tags) + '</div></article>';
  }).join("");

  /* Compétences */
  function hexLum(h) { var n = parseInt(h.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map(function (v) { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; }
  function mix(h, t, a) { var n = parseInt(h.slice(1), 16); return "#" + [n >> 16, (n >> 8) & 255, n & 255].map(function (v) { return Math.round(v + (t - v) * a).toString(16).padStart(2, "0"); }).join(""); }
  function outil(o) {
    var visuel;
    if (o.logo) {
      visuel = '<div class="skill-logo' + (o.neutre ? ' neutral' : ' brand-logo') + (o.large ? ' wide-logo' : '') + '" aria-hidden="true"><img src="' + esc(o.logo) + '" alt="" loading="lazy"></div>';
    } else if (o.icone && ICONS[o.icone]) {
      var col = o.couleur || "#8593a0", l = hexLum(col), dk = l < .2 ? mix(col, 255, .62) : col, lt = l > .55 ? mix(col, 0, .38) : col;
      visuel = ic(o.icone, "--cl:" + dk + ";--cd:" + lt);
    } else {
      visuel = '<div class="mono" aria-hidden="true">' + esc(o.mono || o.nom.slice(0, 3)) + '</div>';
    }
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

  /* Certifications : certificat d’origine puis photos complémentaires. */
  function imagesCert(c) { return [{ image: c.image, alt: c.alt }].concat(c.imagesSupplementaires || []); }
  $("#certs").innerHTML = D.certifications.map(function (c, i) {
    var images = imagesCert(c);
    return '<article class="card cert rv"><div class="cert-t"><h3>' + esc(c.titre) + '</h3><ul class="meta"><li><b>' + esc(c.organisme) + '</b></li><li>' + esc(c.date) + '</li><li>' + esc(c.validite) + '</li></ul><p>' + esc(c.texte) + '</p>' + (c.lien ? link(c.lien) : "") + '</div>' +
      '<div class="cert-images' + (images.length > 1 ? ' cert-images-multiple' : '') + '">' + images.map(function (image, j) {
        return '<button type="button" data-i="' + i + '" data-image="' + j + '" aria-label="Agrandir : ' + esc(image.alt || c.titre) + '"><img src="' + esc(image.image) + '" alt="' + esc(image.alt || c.titre) + '" loading="lazy"></button>';
      }).join("") + '</div></article>';
  }).join("");
  var lb = $("#lb"), lbi = $("#lbi");
  $$(".cert button").forEach(function (b) { b.onclick = function () { var image = imagesCert(D.certifications[b.dataset.i])[Number(b.dataset.image)]; lbi.src = image.image; lbi.alt = image.alt; lb.showModal(); }; });
  $("#lbx").onclick = function () { lb.close(); }; lb.addEventListener("click", function (e) { if (e.target === lb || e.target === lbi) lb.close(); });

  /* Centres d’intérêt */
  $("#likes").innerHTML = D.interets.map(function (i) {
    var contenu = ic(i.icone) + '<span>' + esc(i.nom) + '</span>' + (i.utilisateur ? '<small>' + esc(i.utilisateur) + '</small>' : '');
    return '<li class="card rv' + (i.url ? ' linked-interest' : '') + '">' + (i.url ? '<a href="' + esc(i.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(i.nom + ' — ' + i.utilisateur + ' sur Chess.com (nouvel onglet)') + '">' + contenu + '</a>' : contenu) + '</li>';
  }).join("");

  /* Contact */
  var C = D.contact;
  $("#mailLink").textContent = C.email; $("#mailLink").href = "mailto:" + C.email;
  $("#social").innerHTML = C.liens.map(function (l) { return '<li><a href="' + l.url + '" target="_blank" rel="noopener" aria-label="' + l.nom + '" title="' + l.nom + '">' + ic(l.icone) + '</a></li>'; }).join("");
  $("#copy").onclick = function () { var s = $("span", this); navigator.clipboard && navigator.clipboard.writeText(C.email).then(function () { s.textContent = "Adresse copiée"; setTimeout(function () { s.textContent = "Copier l’adresse"; }, 2000); }); };
  var form = $("#form"), st = $("#status");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { st.className = "status err"; st.textContent = "Merci de remplir les trois champs avec un email valide."; return; }
    var d = new FormData(form); if (d.get("botcheck")) return;
    if (!C.web3formsKey) { location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Contact depuis le portfolio — " + d.get("name")) + "&body=" + encodeURIComponent(d.get("message") + "\n\n" + d.get("name") + " (" + d.get("email") + ")"); return; }
    d.append("access_key", C.web3formsKey); d.append("subject", "Nouveau message depuis le portfolio"); st.className = "status"; st.textContent = "Envoi en cours…";
    fetch("https://api.web3forms.com/submit", { method: "POST", body: d }).then(function (r) { return r.json(); }).then(function (j) {
      if (j.success) { st.className = "status ok"; st.textContent = "Message envoyé. Merci !"; form.reset(); } else throw 0;
    }).catch(function () { st.className = "status err"; st.textContent = "L’envoi a échoué. Écrivez-moi directement à " + C.email + "."; });
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
