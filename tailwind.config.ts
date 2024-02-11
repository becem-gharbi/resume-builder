import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  safelist: [
    'flex', 'flex-row', 'flex-col', 'justify-center',
    'justify-between', 'items-center'
  ]
}
