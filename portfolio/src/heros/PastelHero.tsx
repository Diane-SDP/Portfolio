import React from 'react'

export interface PastelHeroProps {
  name?: string
  surname?: string
  title?: string
  tagline?: string
  links?: { label: string; href: string }[]
}

const pastelGradient =
  'bg-gradient-to-br from-pink-100 via-blue-100 to-green-100'

export const PastelHero: React.FC<any> = (props) => {
  // On récupère les champs depuis props (Payload injecte tout le groupe hero)
  const {
    name = 'Nom',
    surname = 'Prénom',
    title = 'Titre ou spécialité',
    tagline = "Phrase d'accroche ou description rapide.",
    links = [
      { label: 'Contact', href: '/contact' },
      { label: 'Parcours', href: '/parcours' },
      { label: 'Stage', href: '/stage' },
    ],
  } = props || {}

  return (
    <section
      className={`w-full min-h-[70vh] flex flex-col items-center justify-center text-gray-800 ${pastelGradient} py-20 px-4`}
    >
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          {name} <span className="font-light">{surname}</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-4 text-blue-500">
          {title}
        </h2>
        <p className="mb-8 text-lg md:text-xl text-gray-600">{tagline}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {links && Array.isArray(links) && links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="px-6 py-2 rounded-full bg-white/80 hover:bg-white text-blue-600 font-semibold shadow transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastelHero 