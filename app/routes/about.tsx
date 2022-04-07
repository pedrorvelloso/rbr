import type { LinksFunction } from '@remix-run/node'
import { Accordion } from '~/ui/components/accordion'
import { Heading } from '~/ui/components/typograph'

import aboutPageCss from '~/styles/about.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: aboutPageCss },
]

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <Heading className="font-bold">Sobre</Heading>
        <Heading size="heading3" className="text-neutral-400">
          Saiba mais sobre Randomizer
        </Heading>
      </header>
      <div className="flex flex-col gap-y-2">
        <Accordion title="O que é Randomizer?">
          <p>
            Randomizer é uma modificação de um jogo em que os itens são
            dispostos de forma aleatória no jogo. Os itens são distribuídos
            dentro de uma lógica que permite chegar ao objetivo final sem que
            você fique travado, ou seja, todos os jogos randomizados gerados,
            que chamamos de seed, possuem uma solução. Em casos de competição os
            dois participantes jogam a mesma seed, que é normalmente
            identificada por uma hash de identificação no início da partida.
          </p>
        </Accordion>
        <Accordion title="Quais são os jogos que possuem randomizers?">
          <p>
            Hoje existem inúmeros jogos que tem a sua versão randomizer, porém
            elencar todos aqui ficaria inviável e monótono, com isso listaremos
            os randomizers que já possuem players dentro de nossa comunidade.
            São eles:
          </p>
          <ul className="game-list">
            <li>
              The Legend of Zelda: A Link to The Past - Super Nintendo (ALTTP)
            </li>
            <li>The Legend of Zelda: Ocarina of Time - Nintendo 64 (OOT)</li>
            <li>The Legend of Zelda: Majora&apos;s Mask - Nintendo 64 (MM)</li>
            <li>
              The Legend of Zelda: The Minish Cap - GameBoy Advance (Minish)
            </li>
            <li>The Legend of Zelda: Skyward Sword - Wii</li>
            <li>Super Metroid - Super Nintendo</li>
            <li> Castlevania: Symphony of The Night - Playstation</li>
            <li>Kingdom Hearts II: Final Mix - Playstation 2 e PC</li>
            <li>Hollow Knight - PC</li>
            <li>Pokémon Crystal - GameBoy Color</li>
            <li>Super Mario World - Super Nintendo</li>
            <li>Super Mario RPG: The Legend of Seven Stars - Super Nintendo</li>
            <li>
              Combo SMZ3 - A Link to The Past + Super Metroid - Super Nintendo
            </li>
          </ul>{' '}
          <p>
            Estes são alguns randomizer que nós temos players jogando porém como
            dito, existe uma infinidade de outros jogos com sua versão
            randomizer. Caso tenha interesse basta clicar aqui para conhecer a
            lista completa e atualizada.
          </p>
        </Accordion>
        <Accordion title="Jogando o Randomizer">
          <p>
            Cada randomizer possui a sua particularidade. Tanto no quesito de
            como gerar uma seed randomizada, como também no modo como se pode
            jogar.
          </p>
          <p>
            Em sua grande maioria as seeds de randomizer são jogadas em seus
            consoles nativos ou em emuladores, porém há que atentar-se pois para
            jogar competitivamente existem regras a serem seguidas a respeito
            dos emuladores permitidos em competições. Porém se o seu objetivo é
            apenas divertir-se, pode utilizar o que melhor lhe convém.
          </p>
        </Accordion>
      </div>
    </div>
  )
}

export default AboutPage
