import h from 'react-hyperscript'
import './App.css'

const fullName = 'Thomas Billiet'
const subject = `Dear ${fullName}`
const email = 'billiet.thomas@outlook.com'

const App = () => h('div.app', [
  h('header', [
    h('h2.sub-title', 'Hello, i am'),
    h('h1.title', 'Thomas Billiet'),
    h('h2.sub-title', ),
  ]),
  h('p', 'Open Sourcerer, Linux enthusiast and Geek at heart.'),
  h('p', [
    'This is not a showcase. I\'m ',
    h('strong', 'not'),
    ' a designer.',
  ]),
  h('strong', 'Usefull links'),
  h('section.links', [
    h('div.link-item', [
      h('label', 'Github'),
      h('a', {href: 'https://github.com/JodusNodus'}, '@JodusNodus'),
    ]),
    h('div.link-item', [
      h('label', 'Email'),
      h('a', {href: `mailto:${email}?Subject=${encodeURIComponent(subject)}`}, email),
    ]),
  ]),
])

export default App
