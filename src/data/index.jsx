import styled from 'styled-components'

export const siteName = `Rano`

export const navElement = [
  {
    id: '1',
    title: 'Home',
    href: '#',
  },

  {
    id: '2',
    title: 'Features',
    href: '#features',
  },
  {
    id: '3',
    title: 'Video',
    href: '#video',
  },
  {
    id: '4',
    title: 'Service',
    href: '#service',
  },
  {
    id: '5',
    title: 'Download',
    href: '#download',
  },
]

export const featureElements = [
  {
    id: '1',
    icone: 'bi-house-heart',
    title: 'Gas Control',
  },

  {
    id: '2',
    icone: 'bi-thermometer-snow',
    title: 'Temperature Limit',
  },

  {
    id: '3',
    icone: 'bi bi-plug',
    title: 'Power Save',
  },
]

const DepositMark = styled.span`
  position: relative;
  top: -10px;
`

export const depositBrand = () => {
  return <DepositMark>&#174;</DepositMark>
}

export const testimony = [
  {
    id: '1',
    name: 'Francine Edith',
    poste: "Apple's CEO",
    cover: 'https://themesflat.co/html/rano/images/testimonial.png',
  },
  {
    id: '2',
    name: 'Etienne Castro',
    poste: 'DVDA Microsoft',
    cover: 'https://themesflat.co/html/rano/images/testimonial.png',
  },
  {
    id: '3',
    name: 'Pierre Grégoire',
    poste: 'Agent point',
    cover: '',
  },
]

export const networsContact = [
  {
    id: 'facebook',
    icone: 'bi-facebook',
    href: '',
  },
  {
    id: 'twitter',
    icone: 'bi-twitter',
    href: '',
  },
  {
    id: 'google',
    icone: 'bi-google',
    href: '',
  },
  {
    id: 'linkedin',
    icone: 'bi-linkedin',
    href: '',
  },

  {
    id: 'youtube',
    icone: 'bi-youtube',
    href: '',
  },
]

export const DownloadElements = [
  {
    id: 1,
    src: 'https://themesflat.co/html/rano/images/mobile-1.jpg',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'https://themesflat.co/html/rano/images/mobile-2.jpg',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://themesflat.co/html/rano/images/mobile-3.jpg',
    alt: 'Image 3',
  },
  {
    id: 4,
    src: 'https://themesflat.co/html/rano/images/mobile-4.jpg',
    alt: 'Image 4',
  },
  {
    id: 5,
    src: 'https://themesflat.co/html/rano/images/mobile-5.jpg',
    alt: 'Image 5',
  },
]
