const root = document.querySelectorAll('svg.ToolsArrowsChart__svg')[1]
const children = Array.from(root.children)
const allNames = Array.from(root.children).map(g => g.querySelector('text')?.innerHTML).filter(i => i)

const frontEndFWs = allNames.slice(0, 10);
const metaFWs = allNames.slice(10, 18);
const testing = allNames.slice(18, 29);
const mobileAndDesktop = allNames.slice(29, 40);
const buildTools = allNames.slice(40, 48);
const monorepoTools = allNames.slice(48);

const frontEndNodes = children.filter(node => frontEndFWs.includes(node.querySelector('text')?.innerHTML))
const metaNodes = children.filter(node => metaFWs.includes(node.querySelector('text')?.innerHTML))
const testingNodes = children.filter(node => testing.includes(node.querySelector('text')?.innerHTML))
const mobileDesktopNodes = children.filter(node => mobileAndDesktop.includes(node.querySelector('text')?.innerHTML))
const buildNodes = children.filter(node => buildTools.includes(node.querySelector('text')?.innerHTML))
const monorepoNodes = children.filter(node => monorepoTools.includes(node.querySelector('text')?.innerHTML))

/*
  The actually interesting task would be also hiding trend lines, but that's done
  in canvas, so I'd have to dig into that repo.
  Maybe someday...
*/

const displayOnlySome = (all, some) => {
    // take display:none off all nodes
    reset(all);

    all
      .filter(node => !some.includes(node)) // select nodes _not_ in this category
      .forEach(
        node => Array // for each outsider trend group,
          .from(node.children) // take the children of each <g>
          .forEach(i => i.style.display = 'none') // and hide them
      );
}

const reset = allNodes => {
    allNodes.forEach(node => node.style.display = '');
    allNodes.forEach(node => Array.from(node.children).forEach(i => i.style.display = ''));
}

/*
 * un-comment any of the following lines to see the titles of only that category
*/
// displayOnlySome(children, frontEndNodes);
// displayOnlySome(children, metaNodes);
// displayOnlySome(children, testingNodes);
// displayOnlySome(children, mobileDesktopNodes);
// displayOnlySome(children, buildNodes);
// displayOnlySome(children, monorepoNodes);

// reset(children);
