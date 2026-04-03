'use client'

import { useState, useEffect } from 'react'
import { useTransition, animated, config } from '@react-spring/web'

import { Links } from '@@/constants'

import { ExternalLink } from '../ExternalLink'

export const SocialLinks = () => {
  const [items, setItems] = useState<typeof Links>([])
  const transitions = useTransition(items, {
    keys: (link) => link.title,
    from: {
      transform: 'translate3d(0, 40px,0)',
      position: 'absolute' as const,
    },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0, 40px,0)' },
    config: config.wobbly,
  })

  useEffect(() => {
    if (items.length !== Links.length)
      window.setTimeout(() => setItems([...items, Links[items.length]]), 300)
  }, [items])

  return (
    <div className="social-links flex justify-center relative h-8 w-48 text-white">
      {transitions((props, item) => (
        <animated.div key={item.title} style={props}>
          <ExternalLink href={item.href}>
            <item.icon size={32} />
          </ExternalLink>
        </animated.div>
      ))}
    </div>
  )
}
