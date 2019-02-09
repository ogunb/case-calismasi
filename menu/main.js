function menuDrop() {
  function showChildren(node, childrenNode) {
    const childrenNodeHeight = childrenNode.scrollHeight;
    node.classList.add('has__children');
    node.style.marginBottom = `${childrenNodeHeight}px`;
  }
  function removeStyles(node) {
    node.removeAttribute('style');
    node.classList.remove('active');
    node.classList.remove('has__children');
  }
  function calculateChildrenCount(node) {
    const childrenNodes = document.querySelectorAll('.menu__item__child__list');
    for (const child of childrenNodes) {
      if (node.lastElementChild === child) {
        node.firstElementChild.textContent = child.children.length;
      }
    }
  }
  function init() {
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu__item');
    menuItems.forEach(calculateChildrenCount);
    menu.addEventListener('click', e => {
      const activeMenuItem = document.querySelector('.menu__item.active');
      if (activeMenuItem === e.target) {
        removeStyles(activeMenuItem);
      } else if (e.target.classList.contains('menu__item')) {
        const childrenItem = e.target.querySelector('.menu__item__child__list');
        if (activeMenuItem && activeMenuItem !== e.path[2]) {
          removeStyles(activeMenuItem);
        }
        e.target.classList.add('active');
        if (childrenItem) {
          showChildren(e.target, childrenItem);
        }
      }
    });
  }
  return { init };
}

menuDrop().init();
