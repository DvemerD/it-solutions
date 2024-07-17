function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  viewAllContent = false
) {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach((item) => {
      item.style.display = "none";
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    if (viewAllContent) {
      if (i == 0) {
        content.forEach((item) => {
          item.style.display = "contents";
        });
      } else {
        content[i - 1].style.display = "contents";
      }
    } else {
      content[i].style.display = "block";
    }
    tab[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

export default tabs;
