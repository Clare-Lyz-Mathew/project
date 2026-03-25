import $ from "jquery";

export const initJQueryEffects = () => {
  // Prevent multiple initializations if called again
  if ($("body").data("jq-initialized")) return;
  $("body").data("jq-initialized", true);

  console.log("jQuery enhancements initialized");

  // 1. Back-to-Top Button
  const btnHtml = `<button id="jq-top-btn" aria-label="Back to top">↑</button>`;
  $("body").append(btnHtml);

  const $topBtn = $("#jq-top-btn");

  // 2. Scroll event listener
  $(window).on("scroll", function() {
    const scrollPos = $(this).scrollTop();
    const windowHeight = $(this).height();

    // Toggle back to top button
    if (scrollPos > 400) {
      $topBtn.addClass("visible");
    } else {
      $topBtn.removeClass("visible");
    }

    // Check reveal elements
    $("[data-jq-reveal]").each(function() {
      const $el = $(this);
      const elementTop = $el.offset().top;
      
      // Reveal when element is 85% into the viewport
      if (scrollPos + (windowHeight * 0.85) > elementTop) {
        $el.addClass("jq-visible");
      }
    });
  });

  // Re-check elements on mutation (for React route changes)
  const observer = new MutationObserver(() => {
    $(window).trigger("scroll");
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // 3. Click handler for back to top
  $(document).on("click", "#jq-top-btn", function(e) {
    e.preventDefault();
    $("html, body").stop().animate({ scrollTop: 0 }, 600, "swing");
  });

  // 4. Initial check for elements already in view on load
  setTimeout(() => $(window).trigger("scroll"), 100);
};
