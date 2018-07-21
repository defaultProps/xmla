import BScroll from 'better-scroll'
export default function (el) {
  new BScroll(el,{
    click: true,
    scrollY: true
  })
}