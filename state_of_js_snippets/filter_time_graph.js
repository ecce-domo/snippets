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
  This is kind of tricky - you can either hide years and dots of all tech and
  just show the titles, or keep all years (even for hidden tech). I'm just
  cutting my losses and leaving it as is. The actually interesting task would
  be also hiding trend lines, but that's done in canvas, so I'd have to dig into
  that repo. Maybe someday...
*/

// This will hide years of 'active' trends, too
const displayOnlySome = (all, some) => {
    all.forEach(node => node.style.display = 'none');
    all.filter(node => some.includes(node)).forEach(node => node.style.display = '')
}

// This will not hide years of any trends (even 'inactive' ones)
const displayOnlySome2 = (all, some) => {
    all.forEach(node => Array.from(node.children).slice(0,2).forEach(i => i.style.display = 'none'));
    all.filter(node => some.includes(node)).forEach(node => Array.from(node.children).slice(0,2).forEach(i => i.style.display = ''));
}

const reset = allNodes => allNodes.forEach(node => node.style.display = '');

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
