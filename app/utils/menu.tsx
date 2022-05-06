import {
  BsDiscord,
  BsInstagram,
  BsTwitch,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'

export const nav = [
  { label: 'Assistir', href: '/' },
  { label: 'Sobre', href: '/about' },
  { label: 'Eventos', href: '/eventos' },
]

export const socials = [
  {
    icon: BsTwitch,
    href: 'https://twitch.tv/randobrasil',
    label: 'Twitch',
  },
  {
    icon: BsDiscord,
    href: 'https://discord.com/invite/KTAYuY8M4b',
    label: 'Discord',
  },
  {
    icon: BsTwitter,
    href: 'https://twitter.com/randobrasil',
    label: 'Twitter',
  },
  {
    icon: BsYoutube,
    href: 'https://www.youtube.com/c/RandomizerBrasil',
    label: 'Youtube',
  },
  {
    icon: BsInstagram,
    href: 'https://www.instagram.com/randobrasil/',
    label: 'Instagram',
  },
]
