import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#f2f2f2',
  isFrontLogoTexture: true,
  isBackLogoTexture: true,
  isFrontText: true,
  isBackText: true,
  isFullTexture: false,
  frontLogoDecal: './threejs.png',
  fullDecal: './texture.jpeg',
  frontLogoPosition: [0, 0.04, 0.15],
  frontLogoScale: 0.15,
  backLogoDecal: './threejs2.png',
  backLogoPosition: [0, 0.04, -0.15],
  backLogoRotation: [0, Math.PI, 0],
  backLogoScale: 0.2,
  frontText: 'Freedom',
  frontTextPosition: [0, -0.09, 0.15],
  frontTextRotation: [0, 0, 0],
  frontTextFontSize: 0.1,
  frontTextScale: [0.15, 0.04, 0.1],
  frontTextFont: 'Verdana',
  frontTextSize: 64,
  frontTextColor: 'black',
  backText: 'Rhetorical',
  backTextPosition: [0, -0.09, -0.15],
  backTextRotation: [0, Math.PI, 0],
  backTextFontSize: 0.1,
  backTextScale: [0.12, 0.03, 0.5],
  backTextFont: 'Verdana',
  backTextSize: 64,
  backTextColor: 'red',
})

export default state
