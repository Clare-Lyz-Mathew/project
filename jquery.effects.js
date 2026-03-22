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

  // 3. Click handler for back to top
  $topBtn.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 600, "swing");
  });

  // 4. Initial check for elements already in view on load
  setTimeout(() => $(window).trigger("scroll"), 100);
};
