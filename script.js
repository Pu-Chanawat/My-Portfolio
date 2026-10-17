/* =====================================================================
   RETRO DESKTOP OS — interactions
   Vanilla JS, no dependencies. Everything degrades gracefully.
   ===================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------
     1. Intro terminal — content you can edit freely
     Each entry is one line; each line is a list of coloured segments.
     --------------------------------------------------------------- */
  const INTRO_LINES = [
    [{ cls: "term-plain", text: "Welcome to my portfolio!" }],
    [],
    [
      { cls: "term-prompt", text: "> " },
      { cls: "term-key",    text: "Name   :" },
      { cls: "term-val",    text: " Pugam" }
    ],
    [
      { cls: "term-prompt", text: "> " },
      { cls: "term-key",    text: "Job    :" },
      { cls: "term-val",    text: " Computer Engineering Student / Developer" }
    ],
    [
      { cls: "term-prompt", text: "> " },
      { cls: "term-key",    text: "Slogan :" },
      { cls: "term-val",    text: " Code with curiosity, build with care." }
    ],
    [],
    [{ cls: "term-muted", text: "> ready. scroll to explore." }]
  ];

  const TYPE_SPEED_MS = 16;
  const LINE_PAUSE_MS = 280;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------
     2. Terminal typing effect
     --------------------------------------------------------------- */
  function renderInstantly(host, lines) {
    host.textContent = "";
    lines.forEach(function (segments) {
      const line = document.createElement("p");
      line.className = "term-line";
      segments.forEach(function (seg) {
        const span = document.createElement("span");
        span.className = seg.cls;
        span.textContent = seg.text;
        line.appendChild(span);
      });
      host.appendChild(line);
    });
  }

  function typeLines(host, lines, onDone) {
    host.textContent = "";
    let lineIndex = 0;

    function nextLine() {
      if (lineIndex >= lines.length) {
        if (onDone) onDone();
        return;
      }

      const segments = lines[lineIndex++];
      const lineEl = document.createElement("p");
      lineEl.className = "term-line";
      host.appendChild(lineEl);

      // blank spacer line
      if (!segments.length) {
        window.setTimeout(nextLine, LINE_PAUSE_MS / 2);
        return;
      }

      let segIndex = 0;
      let charIndex = 0;
      let spanEl = null;

      function nextChar() {
        if (segIndex >= segments.length) {
          window.setTimeout(nextLine, LINE_PAUSE_MS);
          return;
        }
        if (!spanEl) {
          spanEl = document.createElement("span");
          spanEl.className = segments[segIndex].cls;
          lineEl.appendChild(spanEl);
        }

        const text = segments[segIndex].text;
        if (charIndex < text.length) {
          spanEl.textContent += text.charAt(charIndex++);
          window.setTimeout(nextChar, TYPE_SPEED_MS);
        } else {
          segIndex++;
          charIndex = 0;
          spanEl = null;
          window.setTimeout(nextChar, 0);
        }
      }

      nextChar();
    }

    nextLine();
  }

  function startTerminal() {
    const host = document.getElementById("termOut");
    const caret = document.getElementById("termCaret");
    if (!host) return;

    if (prefersReducedMotion) {
      renderInstantly(host, INTRO_LINES);
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          // caret stays parked after the text, which flows inline
          if (caret) caret.style.display = "inline-block";
          typeLines(host, INTRO_LINES);
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(host.closest(".terminal") || host);
  }

  /* ---------------------------------------------------------------
     3. Taskbar — smooth scroll + active-tab highlighting
     --------------------------------------------------------------- */
  function initTaskbar() {
    const tabs = Array.prototype.slice.call(
      document.querySelectorAll(".task-tab")
    );
    if (!tabs.length) return;

    const byId = {};
    const sections = tabs
      .map(function (tab) {
        const id = (tab.getAttribute("href") || "").replace("#", "");
        const section = id && document.getElementById(id);
        if (section) byId[id] = tab;
        return section;
      })
      .filter(Boolean);

    function setActive(id) {
      tabs.forEach(function (tab) {
        const on = tab === byId[id];
        tab.classList.toggle("is-active", on);
        if (on) tab.setAttribute("aria-current", "true");
        else tab.removeAttribute("aria-current");
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        setActive((tab.getAttribute("href") || "").replace("#", ""));
      });
    });

    // Highlight whichever section is currently in the reading band.
    const spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });

    setActive("intro");
  }

  /* ---------------------------------------------------------------
     4. Window controls — minimize / maximize / close
     --------------------------------------------------------------- */
  let openRestoreChip = null;
  let maximizedWindow = null;

  function closeMaximized() {
    if (!maximizedWindow) return;
    maximizedWindow.classList.remove("is-maximized");
    document.body.classList.remove("is-maximized");
    const btn = maximizedWindow.querySelector('[data-win="max"]');
    if (btn) {
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("title", "Maximize");
    }
    maximizedWindow = null;
  }

  function restoreClosed() {
    if (!openRestoreChip) return;
    const win = openRestoreChip._win;
    openRestoreChip.remove();
    openRestoreChip = null;
    if (win) win.classList.remove("is-closed");
  }

  function handleWindowButton(btn) {
    const win = btn.closest("[data-window]");
    if (!win) return;

    const action = btn.getAttribute("data-win");

    // --- minimize: collapse the body, keep the title bar ---
    if (action === "min") {
      const collapsed = win.classList.toggle("is-collapsed");
      btn.setAttribute("aria-pressed", String(collapsed));
      btn.setAttribute("title", collapsed ? "Restore" : "Minimize");
      return;
    }

    // --- maximize: fill the viewport ---
    if (action === "max") {
      if (maximizedWindow === win) {
        closeMaximized();
        return;
      }
      closeMaximized();
      restoreClosed();
      win.classList.add("is-maximized");
      document.body.classList.add("is-maximized");
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("title", "Restore");
      maximizedWindow = win;
      return;
    }

    // --- close: hide the window behind a restore chip ---
    if (action === "close") {
      closeMaximized();
      restoreClosed();

      const title = win.querySelector(".window__title");
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "restore-chip";
      chip.textContent =
        "▰ Restore " + (title ? title.textContent.trim() : "window");
      chip._win = win;
      chip.addEventListener("click", restoreClosed);

      win.classList.add("is-closed");
      win.parentNode.insertBefore(chip, win.nextSibling);
      openRestoreChip = chip;
      chip.focus();
    }
  }

  function initWindows() {
    document.addEventListener("click", function (event) {
      const btn = event.target.closest("[data-win]");
      if (btn) handleWindowButton(btn);
    });

    // mark the buttons as toggles for assistive tech
    document.querySelectorAll('[data-win="min"], [data-win="max"]').forEach(
      function (btn) {
        btn.setAttribute("aria-pressed", "false");
      }
    );

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (maximizedWindow) closeMaximized();
        else if (openRestoreChip) restoreClosed();
      }
    });
  }

  /* ---------------------------------------------------------------
     5. Deskbar — Start button + live clock
     --------------------------------------------------------------- */
  function initDeskbar() {
    const start = document.querySelector('[data-action="start"]');
    if (start) {
      start.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? "auto" : "smooth"
        });
      });
    }

    const clock = document.getElementById("clock");
    if (!clock) return;

    function tick() {
      clock.textContent = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    }

    tick();
    window.setInterval(tick, 15000);
  }

  /* ---------------------------------------------------------------
     6. Boot
     --------------------------------------------------------------- */
  function boot() {
    initTaskbar();
    initWindows();
    initDeskbar();
    startTerminal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
